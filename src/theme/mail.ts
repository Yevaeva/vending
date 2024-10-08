

import nodemailer from "nodemailer";
// import * as handlebars from "handlebars";
// import {welcomeTemplate} from "./templates/welcome";

export async function sendMail({
                                   from,
                                   name,
                                   subject,
                                   body,
                               }: {
    from: string;
    name: string;
    subject: string;
    body: string;
}) {
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD,
        },
    });
    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.error({error});
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from:SMTP_EMAIL,
            to:'aromatick.spritz@gmail.com',
            subject,
            html: body,
        });
        console.log(sendResult);
    } catch (error) {
        console.log(error);
    }
}

export function compileWelcomeTemplate(name: string, url: string) {
    // const template = handlebars.compile(welcomeTemplate);
    // const htmlBody = template({
    //     name: name,
    //     url: url,
    // });
    // return htmlBody;
}

