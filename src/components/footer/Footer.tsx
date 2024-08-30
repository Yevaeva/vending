'use client'

import React from 'react';
import {Layout} from "antd";
import {MailOutlined, PhoneOutlined} from "@ant-design/icons";


const {Footer} = Layout;

function FooterPage() {



    return (
        <Footer className={'footer'}>
            <div className={'flex justify-between items-end'}>
                <div>
                    <div className={'mb-2 phones'}>
                        <span className={'mr-10'}>
                        <PhoneOutlined/>{" "}
                            +1 984-600-0600
                            </span>
                        <span><PhoneOutlined/>{" "}
                            +1 818-581-7535
                        </span>
                    </div>

                    <div>
                        <MailOutlined/>{" "}
                        <a href={`mailto:${'aromatick@gmail.com'}`}>
                            aromaTick@gmail.com
                        </a>
                    </div>
                </div>
                <p>Aromatick ©{new Date().getFullYear()} </p>

            </div>
        </Footer>
    );
}

export default FooterPage;