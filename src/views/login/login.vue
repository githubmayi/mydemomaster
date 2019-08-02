<template>
    <el-row>
        <el-col :xs="16" :sm="12" :md="10" :xl="10" :lg="8">
            <el-form :label-position="labelposition" label-width="70px">
                <el-form-item label="账号">
                    <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='success' @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import Mock from '../../mock.js'
export default {
    data () {
        const _self = this;
        return {
            labelposition: 'left',
            username: '',
            password: ''
        }
    },
    // mockjs创建登录数据存放在localstorage
    beforeCreate () {
        if (!this.$plugins.GetStorage('localStorage','loginlist')){
            this.$plugins.SetLocalStorage('loginlist',JSON.stringify(Mock.loginlist))
        }
    },
    methods: {
        login () {
            if (!this.username||!this.password) {
                this.$message({
                    message: '请输入用户名和密码！',
                    type: 'warning'
                })
            }
            else{
                debugger
                this.$axios.post(this.$const.login,{username: this.username,password:this.password}).then(res => {
                    if (res.data.length === 0 ? false : (this.username == res.data[0].username && this.password == res.data[0].password)) {
                        this.$message({
                            message: '登录成功！',
                            type: 'success'
                        })
                    }else{
                        this.$message({
                            message: '账号或密码错误！',
                            type: 'error'
                        })
                    }
                })
            }
        }
    }
}
</script>
