import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import * as actions from "@/store/actions/action_search";
import { connect } from "react-redux";
class Index extends Component {
    render() {
        return (
            <>
                <SearchBar
                    placeholder="这位客官您想吃点什么"
                    maxLength={20}
                    onSubmit={this.submit.bind(this)}
                />
            </>
        );
    }
    submit(val) {
        this.props.submitHandler(val);
        this.props.history.push({
            pathname: "/searchList",
        });
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
