import type { Technology } from "../types/technologies";
import Java from "/svg/technology/java.svg";
import Go from "/svg/technology/go.svg";
import Python from "/svg/technology/python.svg";
import JavaScript from "/svg/technology/javascript.svg";
import TypeScript from "/svg/technology/typescript.svg";
import HTML from "/svg/technology/html.svg";
import CSS from "/svg/technology/css.svg";
import React from "/svg/technology/react.svg";
import Redux from "/svg/technology/redux.svg";
import Spring from "/svg/technology/spring.svg";
import MongoDB from "/svg/technology/mongodb.svg";
import PostgreSQL from "/svg/technology/postgresql.svg";
import Redis from "/svg/technology/redis.svg";
import Docker from "/svg/technology/docker.svg";
import Git from "/svg/technology/git.svg";
import GitHub from "/svg/technology/github.svg";
import VSCode from "/svg/technology/vscode.svg";
import IntelliJ from "/svg/technology/intellij.svg";
import NodeJS from "/svg/technology/nodejs.svg";


const TechnologiesData: Technology[] = [
  {
    id: 1,
    name: "Java",
    imageuri: Java,
    websiteuri: "https://www.oracle.com/java/",
  },
  {
    id: 2,
    name: "Go",
    imageuri: Go,
    websiteuri: "https://go.dev/",
  },
  {
    id: 3,
    name: "Python",
    imageuri: Python,
    websiteuri: "https://www.python.org/",
  },
  {
    id: 4,
    name: "JavaScript",
    imageuri: JavaScript,
    websiteuri: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    id: 5,
    name: "TypeScript",
    imageuri: TypeScript,
    websiteuri: "https://www.typescriptlang.org/",
  },
  {
    id: 6,
    name: "HTML",
    imageuri: HTML,
    websiteuri: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    id: 7,
    name: "CSS",
    imageuri: CSS,
    websiteuri: "https://developer.mozilla.org/docs/Web/CSS",
  },

  {
    id: 8,
    name: "React",
    imageuri: React,
    websiteuri: "https://react.dev/",
  },
  {
    id: 9,
    name: "Redux",
    imageuri: Redux,
    websiteuri: "https://redux.js.org/",
  },
  {
    id: 10,
    name: "Spring",
    imageuri: Spring,
    websiteuri: "https://spring.io/",
  },

  {
    id: 11,
    name: "MongoDB",
    imageuri: MongoDB,
    websiteuri: "https://www.mongodb.com/",
  },
  {
    id: 12,
    name: "PostgreSQL",
    imageuri: PostgreSQL,
    websiteuri: "https://www.postgresql.org/",
  },
  {
    id: 13,
    name: "Redis",
    imageuri: Redis,
    websiteuri: "https://redis.io/",
  },

  {
    id: 14,
    name: "Docker",
    imageuri: Docker,
    websiteuri: "https://www.docker.com/",
  },
  {
    id: 15,
    name: "Git",
    imageuri: Git,
    websiteuri: "https://git-scm.com/",
  },
  {
    id: 16,
    name: "GitHub",
    imageuri: GitHub,
    websiteuri: "https://github.com/",
  },
  {
    id: 17,
    name: "VS Code",
    imageuri: VSCode,
    websiteuri: "https://code.visualstudio.com/",
  },
  {
    id: 18,
    name: "IntelliJ IDEA",
    imageuri: IntelliJ,
    websiteuri: "https://www.jetbrains.com/idea/",
  },
  {
    id: 19,
    name: "Node.js",
    imageuri: NodeJS,
    websiteuri: "https://nodejs.org/",
  },
];

export { TechnologiesData };
