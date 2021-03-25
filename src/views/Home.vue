<template>
  <div id="home" class="home">
    <model>
    <template v-slot:main>
        <search></search>

        <div class="home_main">
          <div class="home_wel">
            <p class="huan">欢</p>
            <p class="en">Welcom To My Space</p>
            <p class="ying">迎</p>
          </div>
          
        </div>
        <div class="myself">
            <div class="head_img">
              <img src="../assets/headimage/01.jpg" alt="">
            </div>
        </div>
      <div class="weather">
        
        <weather></weather>
      </div>
    </template>
    </model>
  </div>
</template>

<script>
// @ is an alias to /src

import btn from '@/components/btn.vue'
import weather from '@/components/weather.vue'
import model from '@/components/model.vue'
import search from '@/components/search.vue'

export default {
  name: 'Home',
  data() {
    return {
      isCollapse:false
    }
  },
  components: {
    btn,weather,model,search
  },
  methods: {
    change1:function(){
      this.isCollapse=true
    },
    change2:function(){
      this.isCollapse=false
    },
    
  },
}
</script>

<style lang="less">
#home{
  .weather{
    // width: 500px;
    // height: 1060px;
    position: absolute;
    left: 1900px;
    top: 20px;
  }
  .home_main{
    // align: center;
    margin: 30px;
    width: 980px;
    height: 700px;
    background-color: rgba(rgba(1,73,85,0.4));
    position: absolute;
    top: 100px;
    left: 300px;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.9);
    border-radius: 5px;

    .this{
      left: 35px;
      margin: 0px;
      position: absolute;
      font-size: 130px;
      color: white;
    }
    .home_wel{
      position: absolute;
      left: 135px;
      top: 90px;
      width: 200px;
      height: 500px;
      border: 10px double;
      background-color: rgba(107,119,141,0.5);
      border-radius: 5px;
      p.huan{
        .this; 
        top: 20px;
      }
      p.ying{
      .this;
      bottom: 20px;
      }
      p.en{
        .this;
        font-size: 30px;
        left: -51px;
        top: 226px;
        overflow: visible;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
   
    

    
  }
  .myself{
      width: 720px;
      height: 300px;
      z-index: 5;
      position: absolute;
      left: 750px;
      top: 320px;
      background-color: rgba(107,119,141,0.9);
      border-radius: 5px;
      box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.5);
      .head_img{
        position: absolute;
        top: 40px;
        right: 55px;
        width: 200px;
        height: 200px;
        background-color: turquoise;
        border: 5px solid;
        border-radius: 130px;
        overflow: hidden;
        white-space: nowrap;
        img{
          width: 200px;
          
        }
      }
    }
}

  
</style>