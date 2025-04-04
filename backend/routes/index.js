import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Backend up and running!");
});

router.get("/roadmap", (req,res) => {
    res.json({
        "level_4": [
            {"moduleCode" : "CM1005", "moduleName": "Introduction to Programming I", "credits": 15, "assessmentType": "Coursework only"},
            {"moduleCode" : "CM1010", "moduleName": "Introduction to Programming II", "credits": 15, "assessmentType": "Coursework only"},
            {"moduleCode" : "CM1015", "moduleName": "Computational Mathematics", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM1020", "moduleName": "Discrete Mathematics", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM1025", "moduleName": "Fundamentals of Computer Science", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM1030", "moduleName": "How Computers Work", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM1035", "moduleName": "Algorithms and Data Structures", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM1040", "moduleName": "Web Development", "credits": 15, "assessmentType": "Coursework only"},
        ],
        "level_5": [            
            {"moduleCode" : "CM2005", "moduleName": "Object Orientated Programming", "credits": 15, "assessmentType": "Coursework only"},
            {"moduleCode" : "CM2010", "moduleName": "Software Design and Development", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM2015", "moduleName": "Programming with Data", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM2045", "moduleName": "Professional Practice for Computer Scientists", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM2025", "moduleName": "Computer Security", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM2030", "moduleName": "Graphics Programming", "credits": 15, "assessmentType": "Coursework Only"},
            {"moduleCode" : "CM2035", "moduleName": "Databases, networks and the web", "credits": 15, "assessmentType": "Exam"},
            {"moduleCode" : "CM2040", "moduleName": "Professsional Practice for COmputer Scientists", "credits": 15, "assessmentType": "Exam"},
        ],
        "level_6": []
    })
})

export default router;