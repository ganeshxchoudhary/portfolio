from sqlmodel import Session, select
from models import create_db_and_tables, engine, Skill, Experience, Education, User, Work

def seed_data():
    create_db_and_tables()
    with Session(engine) as session:
        # Check if data exists
        if session.exec(select(User)).first():
            print("Data already exists. Skipping seed.")
            return

        # Create Admin User
        user = User(username="admin", password="password123") # In real app, hash this!
        session.add(user)

        # Create Skills
        skills = [
            Skill(name="Python", percentage="90", category="Backend"),
            Skill(name="FastAPI", percentage="85", category="Backend"),
            Skill(name="React", percentage="80", category="Frontend"),
            Skill(name="JavaScript", percentage="85", category="Frontend"),
        ]
        for skill in skills:
            session.add(skill)

        # Create Projects/Work
        works = [
            Work(
                title="Portfolio Pro",
                description="A full-stack portfolio website built with React and FastAPI.",
                tech_stack="React, FastAPI, SQLModel",
                github_link="https://github.com/ganesh/portfolio-pro",
                live_demo="https://portfolio.example.com"
            ),
            Work(
                title="E-Commerce API",
                description="A scalable RESTful API for an e-commerce platform.",
                tech_stack="Node.js, Express, MongoDB",
                github_link="https://github.com/ganesh/ecommerce-api"
            )
        ]
        for work in works:
            session.add(work)
            
        session.commit()
        print("Database seeded successfully!")

if __name__ == "__main__":
    seed_data()
