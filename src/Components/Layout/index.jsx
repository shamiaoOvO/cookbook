import React, { Component } from "react";
//引入antd-mobile UI组件
import { TabBar } from "antd-mobile";
//导入图标
import menuActive from "@/assets/icon/cookbook-active.png";
import me from "@/assets/icon/cookbook.png";
import locActive from "@/assets/icon/location-active.png";
import loc from "@/assets/icon/location.png";
import cateActive from "@/assets/icon/menu-active.png";
import ca from "@/assets/icon/menu.png";
import moreActive from "@/assets/icon/more-active.png";
import mo from "@/assets/icon/more.png";
//导入需要使用的内容组件
import Menu from "@/Views/Menu/index";
import Cate from "@/Views/Cate/index";
export default class Index extends Component {
    //构造方法,初始化数据
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "menu",
            hidden: false,
            fullScreen: true,
        };
    }

    render() {
        return (
            <div
                style={
                    this.state.fullScreen
                        ? {
                              position: "fixed",
                              height: "100%",
                              width: "100%",
                              top: 0,
                          }
                        : { height: 400 }
                }>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}>
                    <TabBar.Item
                        title="菜谱"
                        key="menu"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${me}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${menuActive}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "menu"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "menu",
                            });
                        }}
                        data-seed="logId">
                        <Menu></Menu>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${ca}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${cateActive}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        title="分类"
                        key="cate"
                        selected={this.state.selectedTab === "cate"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "cate",
                            });
                        }}
                        data-seed="logId1">
                        <Cate></Cate>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${loc}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${locActive}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        title="地图"
                        key="location"
                        selected={this.state.selectedTab === "location"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "location",
                            });
                        }}>
                        内容:第三个菜单
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: mo,
                        }}
                        selectedIcon={{
                            uri: moreActive,
                        }}
                        title="更多"
                        key="more"
                        selected={this.state.selectedTab === "more"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "more",
                            });
                        }}>
                        内容:第四个菜单
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
