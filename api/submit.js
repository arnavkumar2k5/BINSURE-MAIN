import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import xlsx from 'xlsx';
import fs from 'fs';

// dotenv config
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const app = express();
const PORT = process.env.PORT || 5137;


console.log('Server running at:', process.env.SUBMIT_FORM_ENDPOINT);


app.use(cors({
    origin: 'https://your-frontend-url.vercel.app', // Replace with your frontend's Vercel URL
    methods: ['GET', 'POST'], // Specify allowed methods if needed
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

app.use(express.json());

app.post(process.env.SUBMIT_FORM_ENDPOINT, async (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);
    res.json({ success: true, message: "Form submitted successfully!" });

    try {
        const docRef = await addDoc(collection(db, 'formData'), formData);
        console.log("Data stored successfully in Firestore, Doc ID:", docRef.id);
        //email to user ...............................................
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDER_EMAIL_USER,
                pass: process.env.SENDER_EMAIL_PASSWORD,
            }
        });

        const userMailOptions = {
            from: process.env.SENDER_EMAIL_USER,
            to: formData.email,
            subject: '🎉 Thank You for Requesting a Quote with B-Insure!',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="https://via.placeholder.com/200x50?text=B-Insure+Logo" alt="B-Insure Logo" style="max-width: 150px;">
                </div>
                <h2 style="color: #444; text-align: center; padding-bottom: 10px;">Your Insurance Quote Request is Confirmed!</h2>
                <p style="font-size: 16px;">Dear ${formData.name},</p>
                <p style="font-size: 16px;">Thank you for reaching out to B-Insure. We’ve received your request for an insurance quote, and our team is working on providing you with the best options tailored to your needs.</p>
                <div style="margin: 20px 0; padding: 15px; background-color: #f0f8ff; border-left: 4px solid #4CAF50;">
                    <h3 style="color: #333; margin-bottom: 10px;">Why Choose B-Insure?</h3>
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        <li>✔ Comprehensive coverage for you, your family, and your business.</li>
                        <li>✔ Quick and secure online insurance quotes in minutes.</li>
                        <li>✔ Trusted by over 20,000+ happy customers.</li>
                        <li>✔ Partnered with 45+ leading insurance providers.</li>
                    </ul>
                </div>
                <h3 style="color: #444; margin-top: 20px;">What’s Next?</h3>
                <p style="font-size: 16px;">Our team is reviewing your information to provide the best possible insurance options. You can expect a detailed quote in your inbox shortly.</p>
                <p style="font-size: 16px;">In the meantime, feel free to explore our website to learn more about our services and how we’re changing insurance for good.</p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="https://github.com/ravi-aman" style="text-decoration: none; color: white; background-color: #4CAF50; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Visit Our Website</a>
                </div>
                <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
                <h4 style="color: #444;">About B-Insure</h4>
                <p style="font-size: 14px; color: #555;">As Canada’s own online insurance solution, we aim to provide customized coverage at competitive prices, all in as little as 5 minutes. Your data is securely protected with us, ensuring a safe and transparent experience.</p>
                <p style="font-size: 14px; color: #555;">If you have any questions, feel free to reach out to us at <a href="mailto:care@binsure.ca" style="color: #4CAF50; text-decoration: none;">care@binsure.ca</a> or call us at 999-888-0000.</p>
                <p style="font-size: 14px; color: #555;">Thank you for choosing B-Insure. We’re excited to help you protect what matters most!</p>
                <div style="text-align: center; margin-top: 30px;">
                    <p style="font-size: 12px; color: #888;">P.O. Box 9999, Station B, Montreal, ON M5M 3R4</p>
                    <p style="font-size: 12px; color: #888;">© 2024 B-Insure Inc. All rights reserved.</p>
                </div>
            </div>
            `,
        };


        const sendemail = await transporter.sendMail(userMailOptions);
        console.log('Email sent successfully to user : ', formData.email);

        // send about new user regester to the teem email
        // Email to the team
        const teamMailOptions = {
            from: process.env.SENDER_EMAIL_USER,
            to: process.env.TEAM_EMAIL,
            subject: '✨ New User Registration Notification',
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #f9f9f9;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="../public/logo.png" alt="Company Logo" style="max-width: 100px;">
                </div>
                <h2 style="color: #444; text-align: center; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">🚀 New User Registered</h2>
                <p style="font-size: 16px;">You have a new user registration with the following details:</p>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Name:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Email:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Phone:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.contactNumber || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Looking For:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.lookingFor || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Planning To Buy:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.planningToBuy || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Country Code:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.countryCode || 'Not provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #eaeaea;">Registered At:</td>
                        <td style="padding: 8px; border: 1px solid #eaeaea;">${formData.readableTimestamp || 'Not provided'}</td>
                    </tr>
                </table>
                <p style="font-size: 14px; color: #555;">This information has been securely recorded in our system.</p>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="ravikanttiwari.live" style="text-decoration: none; color: white; background-color: #4CAF50; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Go to Admin Dashboard</a>
                </div>
                <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;">
                <p style="font-size: 12px; text-align: center; color: #888;">This is an automated notification. Please do not reply to this email.</p>
            </div>
            `,
        };



        await transporter.sendMail(teamMailOptions);
        console.log('Notification email sent to the team successfully!');


        const filePath = './formData.xlsx';
        let workbook;

        if (fs.existsSync(filePath)) {
            workbook = xlsx.readFile(filePath);
            const worksheet = workbook.Sheets['FormData'];
            const existingData = xlsx.utils.sheet_to_json(worksheet);

            existingData.push(formData);
            const newWorksheet = xlsx.utils.json_to_sheet(existingData);
            workbook.Sheets['FormData'] = newWorksheet;
        } else {
            workbook = xlsx.utils.book_new();
            const worksheet = xlsx.utils.json_to_sheet([formData]);
            xlsx.utils.book_append_sheet(workbook, worksheet, 'FormData');
        }

        xlsx.writeFile(workbook, filePath);
        console.log('Excel file updated successfully!');

        res.status(200).json({ success: true, message: 'Form submitted and email sent successfully!' });
    } catch (error) {
        console.error('Error during form submission:', error);

        if (error.message.includes('email')) {
            res.status(400).json({ success: false, message: 'Email sending failed. Please check the email address.' });
        } else {
            res.status(500).json({ success: false, message: 'Internal server error. Please try again later.' });
        }
    }
});
-
    app.listen(PORT, () => {
        console.log(`Server running at ${process.env.VITE_API_BASE_URL}${process.env.VITE_SUBMIT_FORM_ENDPOINT}`);
    });

