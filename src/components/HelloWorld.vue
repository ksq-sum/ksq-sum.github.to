<template>
    <div id="hello" @mousewheel="mouwheel">
        <div v-if="!showLogin" >
          <inputdm style="margin-top:35%;" v-if="!showBottom"></inputdm>
          <div id="topmenu">
            <topmenu :options="treeOptions"></topmenu>
          </div>
          <music></music>
        </div>
        <div v-if="showLogin" id="showLogin">
          <showLogin></showLogin>
        </div>
    </div>
  
  <div class="showBottom" v-if="showBottom" ref="showB" @mousewheel="mouwheel">
    <div class="comments" >
      <comments style="width:100%;"></comments>
    </div>
  </div>
</template>

<script >
import { ref, onMounted,reactive } from 'vue'
import music from '@/views/music/music.vue'
import inputdm from '@/views/inputDm/inputdm.vue'
import showLogin from '@/views/showLogin/showLogin.vue'
import comments from '@/views/comments/comments.vue'

const state = reactive({
    // treeOptions:[
    //     {"label":"主页","children":[{"label":"b1"},{"label":"b2"}]},
    //     {"label":"猫猫","children":[{"label":"c1"},{"label":"c2"}]},
    //     {"label":"关于","children":[{"label":"c1"},{"label":"c2"}]}
    // ]
    treeOptions:[
        {"label":"主页"},
        {"label":"猫猫"},
        {"label":"关于"}
    ],
    blockheight:50,
    mTop:0
})

const {treeOptions} = state

export default {
  data(){
    return{
      treeOptions:[
        {"label":"主页"},
        {"label":"猫猫"},
        {"label":"jdk下载"},
        {"label":"关于"}
      ],
      showBottom:false,
      showLogin:true,
      mouseWheel:0
    }
  },
  methods:{
    mouwheel(e){
      this.mouseWheel = this.mouseWheel+e.wheelDelta/120
      if(this.showLogin == false){
        if(this.mouseWheel>0){
          this.showBottom = false
        }
        if (this.mouseWheel<0) {
          //e.wheelDelta滚轮下标
          this.showBottom = true
          this.mTop = this.mouseWheel*1
          if (this.$refs.showB != null) {
            if (Math.abs(this.mTop)<60) {
              this.$refs.showB.style.transform = 'translateY('+this.mTop+'vh)'
              this.$refs.showB.style.height = Math.abs(this.mTop)+'vh'
            }  
          }
        }

      }  
      // const showB = ref(null);
                     
   },
   clickLog(){
     this.showLogin = false

   }
  },
  components: { 
    music,
    inputdm,
    showLogin,
    comments
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments{
  background-color:rgba(204,198,218,0.8);
  width:80%;
  /* display: flex;
  justify-content:center;
  flex-wrap: wrap; */
}
#hello{
  color:white;
  background: url("@/assets/background06.png");
  background-size: 100% 100%;
  height:100vh;
  overflow-y:auto;
  z-index:-1;
}
#ttopmenu{
  margin-top: 2%;
  display: flex;
  justify-content:flex-end;
  width: 94.1%;
}
#topmenu{
  margin-top: 2%;
  display: flex;
  justify-content:flex-end;
  width: 95%;
  position:fixed;
  top:0;
}
.showBottom{
  height:0vh;
  /* margin-top:-60vh; */
  background-color:rgba(216,191,206,0.5);
  transform: translateY(0vh);
  z-index:99;
  display: flex;
  justify-content: center;
}
#showLogin{
  width:100%;
  display:flex;
  justify-content:center;
  margin-top: 14%;
}
</style>
