//包裹当前菜谱页面显示的所有子组件或内容
import React, { Component } from "react";
import HeaderNav from "@/Components/HeaderNav/index";

export default class index extends Component {
    render() {
        return (
            <>
                {/* 顶部导航 */}
                <HeaderNav></HeaderNav>
                {/* 轮播图 */}
            </>
        );
    }
}
