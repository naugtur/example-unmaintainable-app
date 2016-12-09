import ACTION_TYPE from "../ACTION_TYPE"
import createReducerFunction from "../tools/reducerCreator"

const initialState = {
    items:[],
    isFetching: false
}

export default createReducerFunction({
    initialState,
    reducers: {
        [ACTION_TYPE.REQUEST_USERS_PENDING]: (state) => {
            return Object.assign({}, state, {
                isFetching: true
            })
        },
        [ACTION_TYPE.REQUEST_USERS_FULFILLED]: (state, { payload }) => {
            return Object.assign({}, state, {
                items: payload,
                isFetching: false
            })
        },
    }
})
