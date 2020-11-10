import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import reducer_search from "@/store/reducers/reducer_search";

//使用中间键
import thunk from "redux-thunk";

// 解决redux-dev-tool工具不能使用的问题（代码来自于github）
const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

//创建仓库
const store = createStore(
    combineReducers({ reducer_search }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
