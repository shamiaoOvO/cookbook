import React, { Component } from "react";
import { Grid } from "antd-mobile";
import Request from "@/http/request";
import { Hotcat } from "@/config/uri";
import { Title } from "./style";

export default class index extends Component {
    state = {
        data: [],
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(Hotcat);
            if (ret.data.code === 0) {
                //将数据处理成Grid需要的数据格式
                let res = [];
                ret.data.data.map((item, index) => {
                    res.push({
                        text: item.title,
                        id: item.id,
                    });
                });
                res.push({ text: ">>>", id: 0 });
                this.setState((state, props) => {
                    return {
                        data: res,
                    };
                });
            }
        } catch (err) {}
    }

    render() {
        return (
            <>
                <Title>热门分类</Title>
                <Grid
                    data={this.state.data}
                    square={false}
                    className="not-square-grid"
                    onClick={this.clickHandler}
                />
            </>
        );
    }

    clickHandler = el => {
        console.log(el);
        //编程式导航
    };
}
