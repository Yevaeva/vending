'use client'
import React from 'react';
import {Button, Form, Input, InputNumber, Select} from 'antd';
import {send} from "@/theme/sendMail";
import {MailOutlined, PhoneOutlined} from "@ant-design/icons";

function Page(props) {

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */


    const onFinish = (values: any) => {
        send(values.name, values.email, values.phone, values.message)
    };


    // const prefixSelector = (
    //     <Form.Item name="prefix" noStyle>
    //         <Select style={{ width: 70 }}>
    //             <Option value="86">+1</Option>
    //         </Select>
    //     </Form.Item>
    // );
    return (
        <div>
            <h1 className={'text-center mt-20'}>Contact Us</h1>

            <div className={'contact-page'}>

                <div>
                    <h2 className={'mb-3'}>Info</h2>
                    <div className={'mb-2 '}>
                        <div>
                        <PhoneOutlined/>{" "}
                            +1 984-600-0600
                            </div>
                        <div className={'mt-2'}><PhoneOutlined/>{" "}
                            +1 818-581-7535
                        </div>
                    </div>

                    <div>
                        <MailOutlined/>{" "}
                        <a href={`mailto:${'aromatick@gmail.com'}`}>
                            aromatick.spritz@gmail.com
                        </a>
                    </div>
                </div>
                <div className={'contact-form'}>

                    <Form
                        onFinish={onFinish}
                        style={{maxWidth: 500}}
                        validateMessages={validateMessages}

                    >
                        <Form.Item name={'userName'} label="Name" rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name={'email'} label="Email" rules={[{type: 'email'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={'phone'}
                            label="Phone Number"
                            rules={[{required: true, message: 'Please input your phone number!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item name={'message'} label="Message">
                            <Input.TextArea cols={20} rows={4}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                            <Button type="primary" htmlType="submit">
                                Contact Us
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Page;