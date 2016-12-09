
export default function createReducerFunction({initialState, reducers}) {
    return function (state, action) {
        return reducers[action.type] ? reducers[action.type](state, action) : (state || initialState);
    }
}
