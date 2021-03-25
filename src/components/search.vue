<template>
    <div>
        <div style="margin-top: 15px;">
            <el-input placeholder="发现这个世界" v-model="input3" class="input-with-select" @keyup.enter.native="searcher">
                <el-select v-model="select" slot="prepend" placeholder="百度" value='1' @change="searchEgin">
                    <el-option label="百度" value="1"></el-option>
                    <el-option label="搜狗" value="2"></el-option>
                    <el-option label="谷歌" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="searcher"></el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      input3: '',
      urls:[
          {
              value:1,
              url:'https://www.baidu.com/s?'
          },
          {
              value:2,
              url:'https://www.sougou.com/web?'
          },
          {
              value:3,
              url:'https://www.google.com.hk/search?'
          }
      ],
      search:'',
      select: '',
      value:1
    }
  },
  methods: {
      searchEgin:function(val){
        //   console.log(this.urls)
           var x;
           for(x in this.urls){
            //    console.log(this.urls[x])
               if(this.urls[x].value!=val){
                  continue;
              }else{
                  this.value = this.urls[x].value
                  this.search = this.urls[x].url       
                //   console.log(url)
              }
           }},
        searcher:function(){
            switch(this.value){
                case 1:
                    window.open(`https://www.baidu.com/s?wd=${this.input3}`)
                case 2:
                    window.open(`https://www.sogou.com/web?query=${this.input3}`)
                case 3:
                    window.open(`https://www.google.com.hk/search?q=${this.input3}&oq=${this.input3}`)
            }
        }
  },
}
</script>

<style lang="less" screen>
    @color: rgba(0, 0, 0, 0.1);
    .sty{
        background-color:@color;
        color: white;
    }
  .el-select .el-input {
    width: 100px;
  }
  div.input-with-select div.el-input-group__prepend{
    .sty;
  }
  input.el-input__inner{
      .sty;
  }
  div.el-input-group__append{
      .sty;
  }
  div.input-with-select.el-input.el-input-group.el-input-group--append.el-input-group--prepend{
      width: 900px;
      position: absolute;
      left: 400px;
      
  }
</style>