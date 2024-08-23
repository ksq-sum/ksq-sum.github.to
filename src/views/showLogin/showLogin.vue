<template>
  <div class="showLogin" >
    <div class="showLogin_left">
        <p class="showLogin_span">{{textIntro}}</p>
    </div> 
    <div class="showLogin_right" >
        <div class="showLogin_div">
            <!-- <span>Login</span> -->
            <input class="inputT" placeholder="username"
            type="text" v-model="user">
            <input class="inputT" placeholder="password"
            type="text" v-model="psd">
            <button id="btClick" @click="loginClick">Login</button>
        </div>
        
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:'',
            psd:'',
            textIntro:'Blogging, transliterated from English Blogger, '+
                    'can be understood as a web diary, where personal '+
                    'articles or ideas, essays, etc., can be posted online, and often pictures, etc.'
        }
    },
    methods:{
        
        loginClick(){
            if (this.user == 'admin') {
                if (this.psd == '123456') {
                    this.$parent.clickLog();   
                }
            }
            this.user = ''
            this.psd = ''
        }
    }
}
</script>

<style>
.showLogin_left{
    display: flex;
    justify-content:center;
    align-items: center;
    width:35%;
    line-height:180%;
}
.showLogin_span{
    width:78%;
}
.showLogin{
    width: 60vw;
    height: 58vh;
    border-radius: 20px;
    background-color:#aaa2c4;
    display: flex;
    justify-content:flex-end;
}
.showLogin_right{
    background-color:#f6f4f8;
    width: 65%;
    border-radius: 20px;
    height:100%;
    color: black;
    display: flex;
    justify-content:center;
    align-items: center;
}
.showLogin_div{
    width:80%;
    height:60%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
}
.inputT{
    outline:none;
    border:none;
    background: transparent;
    font-size:20px;
    font-style: italic;
    border-bottom:1px solid #aaa2c4;
    color:#aaa2c4;
    width:80%;
}
#btClick{
    width:80%;
    border:none;
    height:60px;
    border-radius: 20px;
    font-style: italic;
    font-size: 20px;
    background-color: #aaa2c4;
    color:white;
    height: 30px;
    /* border:0.5px solid black; */
}
</style>