'use client';
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import '../../public/styles/global.scss';
import '../../public/styles/_variables.module.scss';
import '../../public/styles/_mixins.scss';
import '../components/footer/footer.scss';
import withTheme from "../theme";
import {Breadcrumb, Layout, Menu, theme} from "antd";
// import { ReactComponent as Logo} from "../../public/images/logo-no-background.svg";
// import Logo from '../../public/images/svg/logo-color.svg'
import Link from "next/link";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import Image from "next/image";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useLayoutEffect} from "react";
import AOS from 'aos';
import FooterPage from "../components/footer/Footer";
import {log} from "util";
import Nav from "@/components/navigation/Nav";


const {Header, Content} = Layout;

const inter = Inter({subsets: ["latin"]});

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    useEffect(() => {
        AOS.init();
    },[]);


    return (
        <html lang="en">
        <body className={inter.className}>
        <AntdRegistry>
            {withTheme(
                <Layout>
                    <Header className={"sticky top-0 z-10 w-full flex items-center"}>

                       <Nav/>
                        {/*<Menu*/}
                        {/*    theme="light"*/}
                        {/*    mode="horizontal"*/}
                        {/*    activeKey={router.path.split('/').pop() as string}*/}
                        {/*    items={horizontalRoutes}*/}
                        {/*    className="horizontal-menu"*/}
                        {/*/>*/}
                    </Header>
                    <Content className={"px-0 py-0"}>
                        <div>{children}</div>
                    </Content>
                    <FooterPage/>
                </Layout>,
            )}
        </AntdRegistry>
        </body>
        </html>
    );
}
