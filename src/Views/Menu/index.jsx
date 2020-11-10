//包裹当前菜谱页面显示的所有子组件或内容
import React, { Component } from "react";
import HeaderNav from "@/Components/HeaderNav/index";
import Swiper from "@/Components/Swiper/index";
import Search from "@/Components/Search/index";
import HotCat from "@/Components/Hotcat/index";
import GoodCook from "@/Components/GoodCook/index";
export default class index extends Component {
    render() {
        return (
            <>
                {/* 顶部导航 */}
                <HeaderNav></HeaderNav>
                {/* 轮播图 */}
                <Swiper></Swiper>
                {/* 搜索框 */}
                <Search></Search>
                {/* 热门分类 */}
                <HotCat></HotCat>
                {/* 精品耗材 */}
                <GoodCook></GoodCook>
            </>
        );
    }
}
