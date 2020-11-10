import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Title, Item, Dd, Dl } from "./style";
import Request from "@/http/request";
import { GoodCook } from "@/config/uri";

class Index extends Component {
    state = {
        list: [],
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(GoodCook);
            if (ret.data.code === 0) {
                this.setState((state, props) => {
                    return {
                        list: ret.data.data,
                    };
                });
            }
        } catch (err) {}
    }

    render() {
        return (
            <>
                <Title>精品好菜</Title>
                <Item>
                    {this.state.list.map((item, index) => {
                        return (
                            <Dl
                                key={item.id}
                                onClick={this.goDetail.bind(this, item.id)}>
                                <dt>
                                    <img src={item.img} alt="" />
                                </dt>
                                <Dd>
                                    <h3>{item.name}</h3>
                                    <p>
                                        {item.all_click}浏览&emsp;
                                        {item.favorites}收藏
                                    </p>
                                </Dd>
                            </Dl>
                        );
                    })}
                </Item>
            </>
        );
    }

    goDetail(id) {
        this.props.history.push({
            pathname: "/cb_detail/" + id,
        });
    }
}

export default withRouter(Index);
