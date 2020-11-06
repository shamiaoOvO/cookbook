import React, { Component } from "react";

//导入布局文件(底部导航)
import Layout from "./Components/Layout/index";

//引入全局样式
import GlobalStyle from "./style";

export default class app extends Component {
    render() {
        return (
            <>
                <GlobalStyle></GlobalStyle>
                <Layout></Layout>
            </>
        );
    }
}
