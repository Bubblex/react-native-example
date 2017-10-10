import { testFetch } from '../services/example'

export default {
    namespace: 'user',
    state: {
        username: 'jiangxiao',
    },
    reducers: {
        changeUsername(state, { username }) {
            return {
                ...state,
                username,
            }
        },
    },
    effects: {
        *fetchTest({ payload }, { call, put }) {
            const {
                response: {
                    message,
                },
            } = yield call(testFetch, payload)

            yield put({
                type: 'changeUsername',
                username: message,
            })
        },
    },
    subscriptions: {},
}
