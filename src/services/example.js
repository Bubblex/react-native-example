import request from '../utils/request'
import API from '../config/api'

export async function testFetch(params) {
    return request(API.TEST_API, {
        body: JSON.stringify(params),
    })
}
