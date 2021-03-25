<template>
    <div>
        <el-menu class="el-menu-vertical-demo1" :collapse="isCollapse2">
        <el-menu-item @click="change1">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
        data() {
      return {
        isCollapse2: true,
      };
    },
    methods: {

        change1(){
            
            this.isCollapse2=!this.isCollapse2
        },
    },
}
</script>