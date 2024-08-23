<template>
    <div class="formDiv">
        <textarea placeholder="请留下一句话" class="form-control" rows="3" id="content" v-model="msg">
        </textarea>
    </div>
    <div class="formclick">
        <button id="bClick" @click="leaveMsg">留言</button>
    </div>
    <div>
        <div class="aComments" v-for="(item) in aComments" :key="item">
            {{item.comment}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aComments:[{comment:'来来来，找我我当场让你们看看精神病如何自愈康复的我这个朋友精神病八年，是属于精神分裂型。现在不说别的基本正常，偶尔遇到阴的会有点感觉不舒服。她犯病的时候是什么个状态，就是脑子里很多很多人在吵架。一天24小时吵架说话那种。精神病很多都是附体，但是很多人不信这一类的病需要忏悔做大功德的'},
                        {comment:'666'}],
            msg:''            
        }
    },
    methods:{
        leaveMsg(){
            if (this.aComments != null || this.aComments != '') {
                this.aComments.push({comment:this.msg})
                this.msg = ''
            }
        }
    }
}
</script>

<style>
.formclick{
    width:100%;
    display: flex;
    justify-content:center;
    margin-top: 10px;
}
.formDiv{
    width:100%;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
}
.form-control{
    width:95%;
    height: 10vh;
    outline:none;
    border:none;
    background: transparent;
    font-size:20px;
    color:black;
    border: 2px solid #DCDCDC;
    font-style: italic;
}
#bClick{
    width: 20%;
    border:none;
    height:60px;
    border-radius: 10px;
    font-style: italic;
    font-size: 10px;
    background-color: #aaa2c4;
    color:white;
    height: 20px;
}
.aComments{
    height:100px;
    background-color: rgba(244,241,246,0.8);
    margin: 1%;
}
</style>