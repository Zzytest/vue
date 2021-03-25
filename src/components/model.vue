<template>
    <div>
        <el-container>
      <el-aside width="200px">
        <btn></btn>
      </el-aside>
      
      <el-main>
        <slot name="main"></slot>
      </el-main>
    </el-container>
    </div>
</template>

<script>
import btn from '@/components/btn.vue'

export default {
    components:{
        btn
    }
}
</script>

<style lang="less">
    .el-container{
    width: 100%;
    height: 960px;
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      
    }
    
    .el-aside {
      color: #333;
      text-align: center;
      background: rgba(0, 0, 0, 0);
      border-right: 0px solid #000;
      filter:blur(0 px);
    }
    
    .el-main {
      width: 1720;
      // min-width:;
      color: #333;
      text-align: center;
      align-items:center;
      .font{
        
        h1{
          font-size: xx-large;
          position: fixed;
          left: 30%;
          right: 30%;
        }
  }
      
    }
    
    body > .el-container {
      margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
  }
</style>