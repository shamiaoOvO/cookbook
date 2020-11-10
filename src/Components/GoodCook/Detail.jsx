import React, { Component } from "react";
import Request from "@/http/request";
import { DetailMsg } from "@/config/uri";
import {
    HeaderMsg,
    TitleMsg,
    Like,
    LikeIt,
    Main,
    Box,
    Use,
    UseList,
    Makes,
} from "./style";
import { NavBar, Icon } from "antd-mobile";
export default class Detail extends Component {
    state = {
        msg: {},
        useList: [],
        makes: [],
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(DetailMsg + this.props.match.params.id);
            if (ret.data.res === "2") {
                this.setState((state, props) => {
                    return {
                        msg: ret.data.data,
                        useList: ret.data.data.burden,
                        makes: ret.data.data.makes,
                    };
                });
            }
        } catch (err) {}
    }

    render() {
        return (
            <>
                <Box>
                    <NavBar
                        style={{ position: "fixed", top: 0, width: 100 + "%" }}
                        color="white"
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.go(-1)}>
                        {this.state.msg.name}
                    </NavBar>

                    <img
                        src={this.state.msg.img}
                        style={{ width: 100 + "%" }}
                        alt=""
                    />
                    <HeaderMsg>
                        <TitleMsg>{this.state.msg.name}</TitleMsg>
                        <Like>
                            {this.state.msg.all_click}浏览 /{" "}
                            {this.state.msg.favorites}收藏
                        </Like>
                        <LikeIt>收藏</LikeIt>
                    </HeaderMsg>
                    <Main>
                        <p style={{ marginBottom: 5 + "px", fontWeight: 800 }}>
                            心得
                        </p>
                        <p>{this.state.msg.info}</p>
                        <p style={{ fontWeight: 800, marginTop: 15 + "px" }}>
                            养生必读
                        </p>
                        <p>{this.state.msg.health_str}</p>
                        <Use>用料</Use>
                        {this.state.useList.map((item, index) => {
                            return (
                                <UseList key={index}>
                                    <span>{item.name}</span>
                                    <span>{item.content}</span>
                                </UseList>
                            );
                        })}
                        <p
                            style={{
                                marginBottom: 5 + "px",
                                fontWeight: 800,
                                marginTop: 15 + "px",
                            }}>
                            做法
                        </p>
                        {this.state.makes.map((item, index) => {
                            return (
                                <Makes key={index}>
                                    <p>
                                        {item.num} {item.info}
                                    </p>
                                    <img src={item.img} alt="" />
                                </Makes>
                            );
                        })}
                    </Main>
                </Box>
            </>
        );
    }
}
