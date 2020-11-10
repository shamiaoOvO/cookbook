//提供唯一数据源
import { fromJS } from "immutable";

const defaultState = fromJS({
    search: "",
});

function reducer_search(state = defaultState, action) {
    //设置
    if (action.type === "ser") {
        return state.set("search", action.payload);
    }

    return state;
}

export default reducer_search;
