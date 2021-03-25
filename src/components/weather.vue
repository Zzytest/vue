<template>
    <div id="weather">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{this.cityName.name1}}-{{this.cityName.name2}}-{{this.cityName.name3}}</span>
                 
                <el-cascader :options="options" :show-all-levels="false" placeholder='切换城市' @change="handleChange"></el-cascader>

            </div>
            	

            <div class="text item">
                <div class="temp">{{this.weather.temp}}℃</div>
                <div class="other">
                    <div class="text">{{this.weather.text}}</div>
                    <div class="windDir">{{this.weather.windDir}}</div>
                </div>
                <img :src="this.icon">
            </div>
        </el-card>
        
    </div>
</template>

<script>
import axios from 'axios'
import { provinceAndCityDataPlus, regionDataPlus } from 'element-china-area-data'

export default {
    data() {
        return {
            values:[],
            city:510117,
            cityName:{},
            cityId:[],
            options:[],
            weather:[],
            icon:'',
            // weather:require('')         
        }

    },
    async created() {
        let cityUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${this.city}&key=9ee79f7bcb1e441aa58183658067dbd4`
        let citys= await fetch(cityUrl)
        let request = await citys.json()
        // console.log(request)
        this.cityName = {name1:request.location[0].adm1,name2:request.location[0].adm2,name3:request.location[0].name}
       
        this.cityId=request.location[0].id
        let weatherUrl = `https://devapi.qweather.com/v7/weather/now?location=${this.cityId}&key=9ee79f7bcb1e441aa58183658067dbd4`
        let weather = await fetch(weatherUrl)
        let weath = await weather.json()
        this.weather = {temp:weath.now.temp,text:weath.now.text,windDir:weath.now.windDir,icon:weath.now.icon}
        this.icon = require('../assets/weatherIcon/'+this.weather.icon+'.png')
        // console.log(this.weather)
        // console.log(weath)
        let cityList = regionDataPlus.forEach((item,index) => {
            this.options.push(item)
        });
    },
    methods: {
        handleChange:async function(value){
            let key=-1
            if(value.slice(key)!=''){
                this.city=value.slice(-1)
            }else if(value[0] == ''){
                this.city='510117'
            }
            else{
                key=key-1
                this.city=value.slice(key)
            }
            let cityUrl = `https://geoapi.qweather.com/v2/city/lookup?location=${this.city}&key=9ee79f7bcb1e441aa58183658067dbd4`
            let citys= await fetch(cityUrl)
            let request = await citys.json()
            this.cityName = {name1:request.location[0].adm1,name2:request.location[0].adm2,name3:request.location[0].name}
            this.cityId=request.location[0].id
            let weatherUrl = `https://devapi.qweather.com/v7/weather/now?location=${this.cityId}&key=9ee79f7bcb1e441aa58183658067dbd4`
            let weather = await fetch(weatherUrl)
            let weath = await weather.json()
            this.weather = {temp:weath.now.temp,text:weath.now.text,windDir:weath.now.windDir,icon:weath.now.icon}
            this.icon = require('../assets/weatherIcon/'+this.weather.icon+'.png')
            // console.log(this.city)
        }
    },
}
</script>

<style lang="less">
#weather{
    position: absolute;
    right: -10px;
    .el-card{
        position: fixed;
        right: 20px;
        border: 0px;
        background-color: rgba(255,255 , 255, 0.3px);
        .clearfix>span{
            position: absolute;
            left: 20px;
            color: white;
        }
        
        
        .el-card__header{
           
            height: 60px;
            .clearfix>.el-cascader{
                width: 110px;
                position: absolute;
                right: 10px;
                top: 10px;
                .el-input__inner{

                        background-color: rgba(0,0, 0, 0);
                        border: 0;
                        
                }
                .el-input__inner::placeholder {
                    color: #fff;
                   
                }
                .el-input__suffix-inner{
                    color: white;
                }
                
                
        }
        }
        
    }
    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    position: absolute;
    right: 10px;
    width: 400px;
    height: 200px;
    .el-card__body{
            position: absolute;
            top: 60px;
            padding: 0;
            height: 140px;
            .text.item{
                position: absolute;
                width: 400px;
                height: 140px;
                color: white;
                display: block;
                .temp{
                    position: absolute;
                    top: 30px;
                    left: 10px;
                    width: 140px;
                    float: left;
                    // display: inline;
                    font-size: 60px;
                
                }
                .other{
                    position: absolute;
                    left: 150px;
                    height: 140px;
                    width: 100px;
                    float: left;
                    display: flex;
                        align-items:center;
                        // justify-content:center; 
                    
                    // display: inline;
                    .text,.windDir{
                        width: 100px;
                        text-align: center;
                        ;
                    
                    }
                    
                }
                img{
                    position: absolute;
                    top: 0px;
                    right: 10px;
                    float: left;
                    width: 140px;
                    // display: inline;
                    
                }


        }
        }
  }
  
  
}
    
</style>