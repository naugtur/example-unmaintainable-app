import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        list: [],
        user: {},
        error: null
    },
    actions: {
        getList: ({
            commit
        }) => {
            fetch("/api/users").then(handleHttpResponse).then((result) => {
                commit(types.GET_LIST_SUCCESS, result)
            }, (error) => {
                commit(types.FAIL, 'Error: ' + error.message)
            })
        },
        getUser: ({
            commit
        }, id) => {
            fetch("/api/users/" + id).then(handleHttpResponse).then((result) => {
                commit(types.GET_USER_SUCCESS, result)
            }, (error) => {
                commit(types.FAIL, 'Error: ' + error.message)
            })
        },

    },
    getters: {
        list: state => state.list,
        user: state => state.user,
        error: state => state.error
    },
    mutations: {
        [types.GET_LIST_SUCCESS]: (state, payload) => {
            state.error = null
            state.list = payload
        },
        [types.GET_USER_SUCCESS]: (state, payload) => {
            state.error = null
            state.user = payload
        },
        [types.FAIL]: (state, payload) => {
            state.error = payload
        }
    },
    strict: false,
    plugins: [createLogger()]
})


function handleHttpResponse(response){
  if(response.status===200){
    return response.json()
  } else {
    throw Error(response.status+' Failed to load')
  }
}
