
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Backend up and running!");
});

router.get("/roadmap", (req, res) => {
    res.json({
        "level_4": [
            {"moduleCode": "CM1005", "moduleName": "Introduction to programming I", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM1010", "moduleName": "Introduction to programming II", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM1015", "moduleName": "Computational mathematics", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM1020", "moduleName": "Discrete mathematics", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM1025", "moduleName": "Fundamentals of computer science", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM1030", "moduleName": "How computers work", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM1035", "moduleName": "Algorithms and data structures I", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM1040", "moduleName": "Web development", "credits": 15, "assessmentType": "coursework"},
        ],
        "level_5": [
            {"moduleCode": "CM2005", "moduleName": "Object orientated programming", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM2010", "moduleName": "Software design and development", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM2015", "moduleName": "Programming with data", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM2045", "moduleName": "Professional practice for computer scientists", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM2025", "moduleName": "Computer security", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM2030", "moduleName": "Graphics programming", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM2035", "moduleName": "Algorithms and data structures II", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM2040", "moduleName": "Databases, networks and the web", "credits": 15, "assessmentType": "exam"},
        ],
        "level_6": [
            {"moduleCode": "CM3005", "moduleName": "Data science", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM3010", "moduleName": "Databases and advanced data techniques", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM3015", "moduleName": "Machine learning and neural networks", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM3020", "moduleName": "Artificial intelligence", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM3025", "moduleName": "Virtual reality", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM3030", "moduleName": "Games development", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM3035", "moduleName": "Advanced web development", "credits": 15, "assessmentType": "coursework "},
            {"moduleCode": "CM3040", "moduleName": "Physical computing and the internet of things", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM3045", "moduleName": "3D Graphics and animation", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM3050", "moduleName": "Mobile development", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM3055", "moduleName": "Interaction design", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM3060", "moduleName": "Natural language processing", "credits": 15, "assessmentType": "exam"},
            {"moduleCode": "CM3065", "moduleName": "Intelligent signal Processing", "credits": 15, "assessmentType": "coursework"},
            {"moduleCode": "CM3070", "moduleName": "Final project", "credits": 30, "assessmentType": "exam"},
        ]
    });
});

export default router;