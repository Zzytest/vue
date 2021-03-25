<template>
    <div id="btn">
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-menu-item :icon="icon" @click="change">
            <i :class="icon"></i>
            <span slot="title">{{this.text}}</span>
          </el-menu-item>
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/blog" @click="clickThis">
            <i class="el-icon-document"></i>
            <span slot="title">文章</span>
          </el-menu-item>
          <el-menu-item index="/images" route='/images'>
            <i class="el-icon-picture-outline"></i>
            <span slot="title">图片</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-cloudy"></i>
            <span slot="title">天气</span>
          </el-menu-item>
        </el-menu>

      
    </div>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: true,
        text:'',
        icon:'el-icon-s-unfold'
      };
    },
    methods: {
        change(){
            if(this.icon=='el-icon-s-unfold'){
                this.icon='el-icon-s-fold'
                this.text='收起'
            }else{
                this.icon='el-icon-s-unfold'
                this.text='展开'
            }
            this.isCollapse=!this.isCollapse
        },
        clickThis(){
          this.isCollapse=this.isCollapse
        }
    },
}
</script>

<style lang="less">
    #btn{
      
        .el-button{
            background: rgba(0, 0, 0, 0.1px);
            border: 0;
            
        }
        .el-menu{
            
            border:0;
            background-color: rgba(0, 0, 0, 0.2px);
            
            span{
                color: white;
            }
            .el-menu-item i{
                color: white;
            }
        }
         .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            // min-height: 400px;
          }
    }
</style>