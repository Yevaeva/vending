'use server'

import {sendMail} from "@/theme/mail";

export const send = async (name:string,email:string,phone:number,message:string) => {

    await sendMail({
        from: 'aromatick.spritz@gmail.com',
        name,
        subject: "Test Mail",
        // body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
        body:` <h2>Name ${name}></h2>  <h2>Phone ${phone}</h2><h2>Email ${email}></h2> <h2>Message ${message}</h2>`,

    });
};