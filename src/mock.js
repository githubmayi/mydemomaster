import Mock from 'mockjs'

const loginlist = [
    {
        "username": 'admin',
        "password": '123456'
    },
    {
        "username": 'mayi',
        "password": '123456'
    }
]
export default {
    loginlist
}

// 登录返回的数据
Mock.mock('login',(options) => {
    debugger
    let logindata = JSON.parse(options.body);
    return loginlist.filter((e) => e.username == logindata.username && e.password == logindata.password)
})