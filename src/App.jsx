import React, { Component } from "react";

//导入布局文件(底部导航)
import Layout from "./Components/Layout/index";

//引入全局样式
import GlobalStyle from "./style";

//引入路由组件
import { Route, Switch } from "react-router-dom";
import Detail from "./Components/GoodCook/Detail";
import SearchList from "./Components/Search/SearchList";
export default class app extends Component {
    render() {
        return (
            <>
                {/* 全局样式 */}
                <GlobalStyle></GlobalStyle>
                <Switch>
                    {/* 路由规则 */}
                    {/* route默认模糊匹配,只要匹配到一部分就认为是匹配上了,使用exact表示精确匹配,必须一模一样 */}
                    <Route exact path="/" component={Layout}></Route>
                    <Route path="/cb_detail/:id" component={Detail}></Route>
                    <Route path="/searchList" component={SearchList}></Route>
                </Switch>
            </>
        );
    }
}
