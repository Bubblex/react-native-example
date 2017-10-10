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
    effects: {},
    subscriptions: {},
}
