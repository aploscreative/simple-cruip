import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { name, email, phone, subject, message } = await request.json();

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        secure: false,
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
    })

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_FROM,
        subject,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            
            Message:
            ${message}
        `,
    }

    const sendMailPromise = () => {
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function(err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });
    }

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
