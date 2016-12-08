import ACTION_TYPE from "../ACTION_TYPE"
import createReducerFunction from "../tools/reducerCreator"

const initialState = {
    username: "",
    displayName: "",
    twitter: "",
    memberFor: "",
    isFetching: false
}

export default createReducerFunction({
    initialState,
    reducers: {
        [ACTION_TYPE.REQUEST_USER_PENDING]: (state) => {
            return Object.assign({}, state, {
                isFetching: true
            })
        },
        [ACTION_TYPE.REQUEST_USER_FULFILLED]: (state, { payload }) => {
            return Object.assign({}, state, payload, {
                isFetching: false
            })
        },
    }
})
