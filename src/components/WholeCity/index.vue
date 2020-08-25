<template>
  <div class="cinema_body">
    <Loading v-if="isLoading" />
    <Scroller v-else>
      <ul>
        <li v-for="item in cinemasList" :key="item.id">
          <div>
            <span>{{item.nm}}</span>
            <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
          </div>
          <div class="address">
            <span>{{item.addr}}</span>
            <span>{{item.distance}}</span>
          </div>
          <div class="card">
            <div v-for="(num,key) in item.tag"  v-if="num === 1" :key="key" :class="key | classCard">{{key | formatCard}}</div>
            <div v-for="(value,key) in item.tag"  v-if="value === '折扣卡'" :key="key" >{{value}}</div> 
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
  name : 'WholeCity',
  data(){
    return {
      cinemasList : [],
      isLoading : true,
      prevCityId : -1
    }
  },
  mounted(){
    var cityId = this.$store.state.city.id;
    if(this.prevCityId === cityId){ return; }
    this.isLoading = true;
		console.log(cityId);
    this.axios.get("/ajax/cinemaList?cityId="+cityId).then((res)=>{
      this.cinemasList = res.data.cinemas;
      this.isLoading = false,
      this.prevCityId = cityId;
    })   
  },
  filters : {
    formatCard(key){
      var card = [
        { key : "allowRefund" , value : "可退"},
        { key : "buyout" , value : "包场"},
        { key : "endorse" , value : "表彰"},
        { key : "sell" , value : "购物"},
        { key : "snack" , value : "小吃"},
      ];
      for(var i=0; i<card.length; i++){
        if(card[i].key === key){
          return card[i].value;
        }
      }
      return '';
    },
    classCard(key){
      var card = [
        { key : "allowRefund" , value : "or"},
        { key : "buyout" , value : "or"},
        { key : "endorse" , value : "or"},
        { key : "sell" , value : "bl"},
        { key : "snack" , value : "bl"},
      ];
      for(var i=0; i<card.length; i++){
        if(card[i].key === key){
          return card[i].value;
        }
      }
      return '';
    }
  }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>