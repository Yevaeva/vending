import React from "react";
import { ConfigProvider } from "antd";

const darkColor = "#c6957a";
// #c6957a
//#6a4834
//864d25
const lightColor = "#000000";
const brightColor='#FB2943'

const withTheme = (node: React.ReactNode) => (
    <>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#c6957a',
                    borderRadius: 16,
                    colorPrimaryHover:'#6a4834',
                },
                components: {
                    Layout: {
                        headerBg:lightColor
                    },
                    Menu: {
                        itemBg: lightColor,
                        itemColor:darkColor,
                        itemHoverColor:'#6a4834'
                    }
                },
            }}
        >
                {node}
        </ConfigProvider>
    </>
)

export default withTheme;