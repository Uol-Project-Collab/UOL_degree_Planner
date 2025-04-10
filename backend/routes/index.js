import { Router } from "express";
import PDFDocument from 'pdfkit';
import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from 'path';
import { emailPDF } from "../utils/helper.js";

const router = Router();

// Constants
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
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

        // Create a path to the roadmap pdf
        const pathToPdf = join(__dirname, 'roadmap.pdf');

        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="roadmap.pdf"');

        // Store the PDF to a file
        doc.pipe(fs.createWriteStream(pathToPdf));

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

        doc.on('finish', () => {
            fs.createReadStream(pathToPdf).pipe(res);
        });

    } catch (error) {
        // Print error if any
        console.log(error);
    }
});

router.post('/roadmap/email', async (req, res) => {
    // Get email from the user
    const { email } = req.body;

    // Throw an error if no email is provided
    if (!email) {
        return res.status(400).json({ success: false, message: "Please provide an email" });
    }

    const pathToPdf = join(__dirname, 'roadmap.pdf');

    try {
        // Try to send pdf to an email
        await emailPDF(pathToPdf, email);

        // Delete the pdf after sending the email for memory management
        fs.unlink(pathToPdf, (error) => {
            if (error) {
                console.log("Error deleting file: ", error);
            } else {
                console.log("PDF deleted successfully");
            }
        });

        res.status(200).json({ success: true, message: "Email sent successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send email" + error });
    }
});

export default router;