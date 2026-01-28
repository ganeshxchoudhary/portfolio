from fastapi import FastAPI, Depends, HTTPException, status, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import smtplib
import ssl
import os
from email.message import EmailMessage
from sqlmodel import Session, select
from typing import List, Annotated
from models import (
    create_db_and_tables, get_session, 
    Education, Experience, Message, Skill, User, Work
)
from pydantic import BaseModel
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

def send_email_notification(message: Message):
    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("SENDER_PASSWORD")
    receiver_email = "ganeshchoudharycse@gmail.com"

    if not sender_email or not sender_password:
        print("Email credentials not set. Skipping email.")
        return

    msg = EmailMessage()
    msg.set_content(f"New message from {message.name} ({message.email}):\n\nSubject: {message.subject}\n\n{message.message}")
    msg['Subject'] = f"Portfolio Contact: {message.subject}"
    msg['From'] = sender_email
    msg['To'] = receiver_email

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)
        print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")

app = FastAPI(lifespan=lifespan, title="Portfolio Pro API")

# CORS Setup
origins = ["http://localhost:5173", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Education ---
@app.get("/education")
def get_education(session: Session = Depends(get_session)):
    return {"data": session.exec(select(Education)).all()}

@app.post("/education", response_model=Education)
def create_education(education: Education, session: Session = Depends(get_session)):
    session.add(education)
    session.commit()
    session.refresh(education)
    return education

# --- Experience ---
@app.get("/experience")
def get_experience(session: Session = Depends(get_session)):
    return {"data": session.exec(select(Experience)).all()}

@app.post("/experience", response_model=Experience)
def create_experience(experience: Experience, session: Session = Depends(get_session)):
    session.add(experience)
    session.commit()
    session.refresh(experience)
    return experience

# --- Skills ---
@app.get("/skills")
def get_skills(session: Session = Depends(get_session)):
    return {"data": session.exec(select(Skill)).all()}

@app.post("/skills", response_model=Skill)
def create_skill(skill: Skill, session: Session = Depends(get_session)):
    session.add(skill)
    session.commit()
    session.refresh(skill)
    return skill

# --- Work / Projects ---
@app.get("/work")
def get_work(session: Session = Depends(get_session)):
    return {"data": session.exec(select(Work)).all()}

@app.post("/work", response_model=Work)
def create_work(work: Work, session: Session = Depends(get_session)):
    session.add(work)
    session.commit()
    session.refresh(work)
    return work

# --- Messages ---
@app.post("/contact", response_model=Message)
def create_message(message: Message, background_tasks: BackgroundTasks, session: Session = Depends(get_session)):
    session.add(message)
    session.commit()
    session.refresh(message)
    background_tasks.add_task(send_email_notification, message)
    return message

@app.get("/messages")
def get_messages(session: Session = Depends(get_session)):
    return {"data": session.exec(select(Message)).all()}

# --- Auth (Simplified for Migration) ---
class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/auth/login")
def login(request: LoginRequest, session: Session = Depends(get_session)):
    # In a real app, hash password!
    user = session.exec(select(User).where(User.username == request.username)).first()
    if not user or user.password != request.password:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"token": "dummy-token", "user": user.username}

@app.post("/auth/register", response_model=User)
def register(user: User, session: Session = Depends(get_session)):
    session.add(user)
    session.commit()
    session.refresh(user)
    return user
