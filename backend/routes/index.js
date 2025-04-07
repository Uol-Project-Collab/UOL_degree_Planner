import { Router } from "express";
import PDFDocument from 'pdfkit';
const router = Router();

const roadmapJSON = {
    "level_4": [
        { "moduleCode": "CM1005", "moduleName": "Introduction to programming I", "credits": 15, "assessmentType": "coursework", "blockerModule": true }, //pg 17 CS regs
        { "moduleCode": "CM1010", "moduleName": "Introduction to programming II", "credits": 15, "assessmentType": "coursework", "blockerModule": true },
        { "moduleCode": "CM1015", "moduleName": "Computational mathematics", "credits": 15, "assessmentType": "exam", "blockerModule": true },
        { "moduleCode": "CM1020", "moduleName": "Discrete mathematics", "credits": 15, "assessmentType": "exam", "blockerModule": true },
        { "moduleCode": "CM1025", "moduleName": "Fundamentals of computer science", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM1030", "moduleName": "How computers work", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM1035", "moduleName": "Algorithms and data structures I", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM1040", "moduleName": "Web development", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
    ],
    "level_5": [
        { "moduleCode": "CM2005", "moduleName": "Object orientated programming", "credits": 15, "assessmentType": "coursework", "blockerModule": true }, //pg 17 CS Regs 24/25
        { "moduleCode": "CM2010", "moduleName": "Software design and development", "credits": 15, "assessmentType": "exam", "blockerModule": true },
        { "moduleCode": "CM2015", "moduleName": "Programming with data", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2045", "moduleName": "Professional practice for computer scientists", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2025", "moduleName": "Computer security", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2030", "moduleName": "Graphics programming", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM2035", "moduleName": "Algorithms and data structures II", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM2040", "moduleName": "Databases, networks and the web", "credits": 15, "assessmentType": "exam", "blockerModule": false },
    ],
    "level_6": [
        { "moduleCode": "CM3005", "moduleName": "Data science", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3010", "moduleName": "Databases and advanced data techniques", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3015", "moduleName": "Machine learning and neural networks", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3020", "moduleName": "Artificial intelligence", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3025", "moduleName": "Virtual reality", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3030", "moduleName": "Games development", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3035", "moduleName": "Advanced web development", "credits": 15, "assessmentType": "coursework ", "blockerModule": false },
        { "moduleCode": "CM3040", "moduleName": "Physical computing and the internet of things", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3045", "moduleName": "3D Graphics and animation", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3050", "moduleName": "Mobile development", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3055", "moduleName": "Interaction design", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3060", "moduleName": "Natural language processing", "credits": 15, "assessmentType": "exam", "blockerModule": false },
        { "moduleCode": "CM3065", "moduleName": "Intelligent signal Processing", "credits": 15, "assessmentType": "coursework", "blockerModule": false },
        { "moduleCode": "CM3070", "moduleName": "Final project", "credits": 30, "assessmentType": "exam + Coursework", "blockerModule": false },
    ]
}

router.get("/", (req, res) => {
    res.send("Backend up and running!");
});

router.get("/roadmap", (req, res) => {
    res.json(roadmapJSON);
});

router.get('/roadmap/pdf', (req, res) => {
    try {
        // Create an instance of PDFDocument
        const doc = new PDFDocument();

        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="roadmap.pdf"');

        // Pipe the PDF into the response
        doc.pipe(res);

        // Add PDF header
        doc.font('Helvetica-Bold').fontSize(18).text("University of London", { align: 'center' });
        doc.moveDown(0.7);

        doc.fontSize(16).text("BSc Computer Science Degree Roadmap", { align: 'center' });
        doc.moveDown(2);

        // Traverse through the JSON Data
        for (const [level, modules] of Object.entries(roadmapJSON)) {
            doc.font('Helvetica').fontSize(15).fillColor('#000080').text(`Level ${level.slice(6)} Modules`);
            doc.moveDown(1.5);

            // Display each module's contents
            for (const module of modules) {
                doc.fontSize(13).fillColor('black').text(`${module.moduleCode}: ${module.moduleName.toUpperCase()}`);
                doc.moveDown(1);

                doc.fontSize(12).text(`Credits: ${module.credits}`);
                doc.moveDown(1);

                doc.fontSize(12).text(`Assessment Type: ${module.assessmentType[0].toUpperCase() + module.assessmentType.slice(1)}`);
                doc.moveDown(1);

                doc.fontSize(12).text(`Blocker Module: ${module.blockerModule ? "Yes" : "No"}`);
                doc.moveDown(2.5);
            }
            doc.moveDown(2);
        }

        doc.moveDown(2);

        doc.end();

    } catch (error) {
        // Print error if any
        console.log(error);
    }
});

export default router;