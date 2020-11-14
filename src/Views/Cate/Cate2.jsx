import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Req from "@/http/request";
import { Cate } from "@/config/uri";
import { CateListContainer, CateContainer } from "./style";

class Cate2 extends Component {
    state = {
        //分类列表数据
        cateList: [],
        //右侧列表数据
        cateInfoList: [],
        //标记哪个左侧分类被选中,添加active
        activeList: [],
    };

    async componentDidMount() {
        try {
            let ret = await Req.get(Cate);
            if (ret.data.code === 0) {
                // 获取全部数据
                let obj = ret.data.data.material;
                //Object.entries(obj)返回一个数组,数组第一个元素是obj的key,数组的第二个元素是obj的value
                let tmp = Object.entries(obj);
                let cateInfoList = tmp[0][1];
                let activeList = new Array(tmp.length).fill("");
                activeList[0] = "active";
                this.setState((state, props) => {
                    return {
                        cateList: tmp,
                        cateInfoList,
                        activeList,
                    };
                });
            }
        } catch (err) {}
    }

    clickHandler(index) {
        let activeList = new Array(this.state.cateList.length).fill("");
        activeList[index] = "active";
        let cateInfoList = this.state.cateList[index][1];
        this.setState((state, props) => {
            return {
                activeList,
                cateInfoList,
            };
        });
    }

    render() {
        return (
            <>
                <CateListContainer>
                    {/* 左侧div */}
                    <div>
                        <ul>
                            {this.state.cateList.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={this.state.activeList[index]}
                                        onClick={this.clickHandler.bind(
                                            this,
                                            index
                                        )}>
                                        {item[0]}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* 右侧div */}
                    <div>
                        <ul>
                            {this.state.cateInfoList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </CateListContainer>
            </>
        );
    }
}

export default withRouter(Cate2);
