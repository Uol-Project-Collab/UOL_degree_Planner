import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { fileURLToPath } from "url";

// Helper function to send PDF to email
export const emailPDF = async (pathToPdf, email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "UoL Degree Roadmap",
        text: `Hi ${email}, please find the degree roadmap PDF in the attachment. Thank you`,
        attachments: [
            {
                filename: 'roadmap.pdf',
                path: pathToPdf,
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
};

// Helper function to generate PDF from JSON
export const generatePDF = (roadmapJSON) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    return new Promise((resolve, reject) => {
        // Create an instance of PDFDocument
        const doc = new PDFDocument();

        // Create a path to PDF folder
        const pdfDirPath = path.join(__dirname, '../pdfs');

        // Create a path to roadmap.pdf
        const pathToPdf = path.join(pdfDirPath, 'roadmap.pdf');

        // Write to a file
        const writeStream = fs.createWriteStream(pathToPdf);
        doc.pipe(writeStream);

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

        // Resolve or reject the promise
        writeStream.on('finish', () => resolve(pathToPdf));
        writeStream.on('error', (error) => reject(error));

    });
};