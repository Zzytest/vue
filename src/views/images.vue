<template>
    <div id="image">
      <model>
        <template v-slot:main>
          <div class="top">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(image,index) in images" :key="index">
                  <div class="imgbox">
                    <span></span>
                    <img :src="image.url" alt="">
                    <span></span>
                  </div>
              </el-carousel-item>
            </el-carousel>
          </div>

          <!-- <el-row :gutter='20' >
            <el-col :span="8" v-for="(o, index) in this.images" :key="index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="o.url" class="image">
                <div style="padding: 14px;">
                  <span>{{o.name}}</span>
                  <div class="bottom clearfix">
                     <time class="time">{{ currentDate }}</time> -->
                    <!-- <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row> -->
           -->
        </template>
      </model>
    </div>
</template>
<script>
import btn from '@/components/btn'
import model from '@/components/model.vue'

export default {
    components:{
      btn,model
    },
    data() {
      return {
        images:[{
          name:'鹿',
          url:require('../assets/imgLoad/test01.jpg')
        },
        {
          name:'雨',
          url:require('../assets/imgLoad/test02.jpg')
        },
        {
          name:'空',
          url:require('../assets/imgLoad/test03.jpg')
        },
        {
          name:'月',
          url:require('../assets/imgLoad/test04.jpg')
        },
        {
          name:'火影',
          url:require('../assets/imgLoad/test05.jpg')
        },
        ]
      }
    },
    created() {
      let images = this.images
      // console.log(images[0].url)
      return images
    },
    methods: {
      
    },
}
</script>

<style lang="less">
#image{
    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: rgba(0, 0, 0, 0.5);
  
  }

  div.top{
    width: 1000px;
    .el-carousel__container{
    // .imgbox{
    // position: relative;
    // overflow: hidden;
    // padding-bottom: 100%;/*重要属性*/
    // outline: 1px solid green;
    // }
    span{
      width: 100%;
      height: 100%;
    }
    display: flex;
    justify-content:center;
    align-items:center;
    .imgbox img{
        // width: 100%;
        height: 100%;
        position: absolute;
        left: 30%;
    }
    }
    }
  

  // .el-carousel__container{
  //   width: 1000px;
  // }

  // ul.el-carousel__indicators.el-carousel__indicators--horizontal.el-carousel__indicators--outside{
  //   width: 1000px;
  // }
}
</style>