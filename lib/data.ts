import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import overstayImg from "@/public/images/projects/overstay.png";
import currenctCodesImg from "@/public/images/projects/currency-codes.png";
import wvaImg from "@/public/images/projects/workout-voice-assistant.jpeg";
import geoQuizImg from "@/public/images/projects/geo-quiz.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Revolut — Python Software Engineer",
    location: "Remote, the UAE",
    icon: React.createElement(CgWorkAlt),
    date: "September, 2021 - September, 2023",
    achievements: [
      "Supervised services and pipelines that deliver customer risk assessments",
      "Developed and launched a subledger",
      "Collaborated closely with engineers and data scientists from various teams to execute the migration of over 10 services, aligning them with company standards and conventions",
    ]
  },
  {
    title: "Fondazione Bruno Kessler — Python Software Developer",
    location: "Trento, Italy",
    icon: React.createElement(CgWorkAlt),
    date: "July, 2019 - July, 2020",
    achievements: [
      "Developed and launched one of the first COVID-19 FAQ chatbots in Italy that supported both English and Italian languages",
      "Advised and coordinated researchers in development and deployment of web applications",
      "Developed and deployed several chatbot assistants",
      "Built data infrastructure for NLP R&D tasks",
    ]
  },
  {
    title: "Higher School of Economics - Master's degree in Computer Science",
    location: "Perm, Russia",
    description:
      "Research and development of uplift modeling methods. Member of the research group «Heterogeneous effects of exposure in client analytics»",
    icon: React.createElement(LuGraduationCap),
    date: "August, 2017 - July, 2019",
  },
  {
    title: "Parma Technologies Group — Python Developer",
    location: "Remote, Russia",
    icon: React.createElement(CgWorkAlt),
    date: "March, 2018 - March, 2019",
    achievements: [
      "Increased quality of «image-to-text» system by 100% by developing an image preprocessing pipeline",
      "Developed and deployed a chatbot assistant that streamlines and enhances routine tasks company-wide",
      "Maintained the life cycle of data collecting, training, and deployment of machine learning services",
    ]
  },
  {
    title: "Perm State University - Bachelor's degree in Applied Math",
    location: "Perm, Russia",
    description:
      "Research and development of ontologies",
    icon: React.createElement(LuGraduationCap),
    date: "August, 2013 - July, 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Currency Codes",
    description: "Python package for managing currency codes across different assets",
    url: "https://github.com/duketemon/currency_codes",
    tags: ["python", "poetry", "pre-commit", "pytest"],
    imageUrl: currenctCodesImg,
  },
  {
    title: "Overstay",
    description: "Travel days calculator that assists in preventing overstaying in a country",
    url: "https://duketemon.github.io/overstay",
    tags: ["Node", "React", "Mantine"],
    imageUrl: overstayImg,
  },
  {
    title: "Workout Voice Assistant",
    description: "[deprecated] customizable, easy-to-use assistant used for interval training, HIITs, etc",
    url: "https://play.google.com/store/apps/details?id=io.github.duketemon.workout_assistant",
    tags: ["Flutter", "Dart"],
    imageUrl: wvaImg,
  },
  {
    title: "GeoQuiz",
    description: "[deprecated] Fully offline bunch of geographical quizzes",
    url: "https://play.google.com/store/apps/details?id=io.github.duketemon.GeoQuiz",
    tags: ["Flutter", "Dart"],
    imageUrl: geoQuizImg,
  },
] as const;

export const skillsData = [
  "Python",
  "FastAPI",
  "Flask",
  "pandas",
  "catboost",
  "pydantic",
  "black",
  "mypy",
  "sqlalchemy",
  "alembic",
  "PostgreSQL",
  "Docker",
  "Airflow",
  "Java",
  "JavaScript",
  "React",
  "CI/CD",
  "GitOps",
  "GCP",
  "Jira",
  "Scrum",
] as const;
