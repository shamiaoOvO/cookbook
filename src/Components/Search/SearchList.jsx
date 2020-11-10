import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as actions from "@/store/actions/action_search";
import { connect } from "react-redux";
import Request from "@/http/request";
import { GoodCook } from "@/config/uri";
import { SearchBar } from "antd-mobile";
import { List, Box } from "./style";
class SearchList extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    state = {
        list: [],
    };
    render() {
        return (
            <>
                <Box>
                    <SearchBar
                        placeholder="这位客官您想吃点什么"
                        maxLength={20}
                        onSubmit={this.submit.bind(this)}
                    />
                    {this.state.list.map((item, index) => {
                        return (
                            <List key={index}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.burdens}</p>
                                    <p>
                                        <span>
                                            {item.all_click}浏览&ensp;
                                            {item.favorites}收藏
                                        </span>
                                    </p>
                                </div>
                            </List>
                        );
                    })}
                </Box>
            </>
        );
    }

    submit(val) {
        this.props.submitHandler(val);
        this.getData(val);
    }

    async componentDidMount() {
        try {
            let ret = await Request.get(
                GoodCook + "?keyword=" + this.props.search
            );
            if (ret.data.code === 0) {
                this.setState((state, props) => {
                    return {
                        list: ret.data.data,
                    };
                });
            }
        } catch (err) {}
    }

    async getData(val) {
        try {
            let ret = await Request.get(GoodCook + "?keyword=" + val);
            if (ret.data.code === 0) {
                this.setState((state, props) => {
                    return {
                        list: ret.data.data,
                    };
                });
            }
        } catch (err) {}
    }
}

const mapStateToProps = state => {
    return {
        search: state.getIn(["reducer_search", "search"]),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitHandler(keyword) {
            dispatch(actions.actionCreator(keyword));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchList)
);
