import nodemailer from 'nodemailer';

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