export const actionCreator = keyword => {
    return dispatch => {
        dispatch({
            type: "ser",
            payload: keyword,
        });
    };
};
