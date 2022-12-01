<template>
  <div id="content">
    <section class="params" v-show="graphOpen===true">
      <select name="interval" id="interval" @change="changeInterval($event)" required>
        <option aria-readonly>Selectionne l'intervalle</option>
        <option value="hourly">Heure</option>
        <option value="daily">Journée</option>
      </select>

      <select name="days" id="days" @change="changeDays($event)" required v-model="days">
        <option readonly>Selectionne le nombre de jours</option>
        <option :value="i" v-for="i in 100" :key="i">{{i}}</option>
      </select>
    </section>

    <div class="cryptos">
      <div class="card" v-for="(crypto, i) in cryptos" :key="i" @click="viewchart(i)">
        <img :src="crypto.image">
        <div class="card-body">
          <p class="card-text" style="text-align:center"> ${{(crypto.current_price)}}</p>
          <span style="float:left"><img src="../images/diminuer.png" style="width:24px; height:24px">  ${{crypto.low_24h}}</span>
          <span style="float:right"><img src="../images/augmenter.png" style="width:24px; height:24px">  ${{crypto.high_24h}} </span>
        </div>
      </div>
    </div>

  </div>

  <!-- Partie avec graphique -->
  <div id="graph">
    <div class="graph__close__open" @click.prevent.capture="open_or_close">
      <svg id="more-arrows">
        <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
        <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
        <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
      </svg>
    </div>
    <div class="grap__show">
      <!-- <Line :chartData="chartData" :title="title" :graphOpen="graphOpen" :chartOptions="chartOptions" :changeData="changeData"/> -->
      <canvas id="canvas" class="canvas" width="10" height="3"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto'


export default {

  async mounted() {
    let rep = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.cryptocurrencies.join()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    this.cryptos = await rep.json()
    console.log("hhelo");
  },

  data() {
    return {
      days: "Selectionne le nombre de jours",
      graphOpen: false,
      selects: {
        days: 1,
        intervale: "daily"
      },
      chart: null,
      cryptos: [],
      cryptocurrencies :[
          'ethereum', 
          'bitcoin', 
          'ripple',
          'cardano',
          'litecoin', 
          'solana',
          'near', 
          'apecoin',
          'shiba-inu',
          'vechain',
          'decentraland',
          'cosmos',
          'dogecoin'
      ]
    }
  },


  methods: {

    viewchart() {
      console.log("yes");
    },

    open_or_close() {

      const graph = document.querySelector('#graph')
      const close = graph.childNodes[0]
      if(this.graphOpen) {
        // document.querySelector('.params').style.display = "none"
        close.style.transform = 'scale(-0.8)'
        graph.style.height = "0"
        graph.style.border = 'none'
        this.graphOpen = false
      } else {
        // document.querySelector('.params').style.display = "flex"
        close.style.transform = 'scale(0.8)'
        graph.style.height = "600px"
        graph.style.border = '1px solid grey'
        this.graphOpen = true
      }
    },


  },

  name: 'App',

}
</script>

<style>


body {
  overflow: hidden;
}

*, ::after, ::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border:0;
}

#content {
  height: 90vh;
  width: 98%;
  position: relative;
  margin: 70px auto;
}

.params {
  text-align: right;
  width: 96%;
  height: 60px;
  margin: 0 auto;
  position: absolute;
  align-content: center;
  justify-content: flex-end;
  transition: all 2s;
  display: none;
}

.params select {
  font-weight: 900;
  cursor: pointer;
  border:1px solid rgb(160, 158, 158);
  border-radius: 3px;
  margin-left: 10px;
  height: 30px;
}

.cryptos {
  overflow-y: auto;
  position: relative;
  max-height: 580px;
  right: 0;
  left: 0;
  top:40px;
  display: grid;
  grid-template-columns: repeat(auto-fit,  280px);
  gap:10px;
  justify-content: center;
  padding: 10px;
}

.cryptos .card {
  float: left;
  margin-top:30px;
  height: 140px;
  border:2px solid rgb(194, 193, 193);
}
.cryptos .card:hover {
  cursor: pointer;
}

.cryptos .card img {
  width: 64px;
  height: 64px;
  margin:-32px auto;
  border:none;
}

.cryptos .card .card-body {
  margin-top: 30px;
}

.cryptos .card .card-body p {
  font-weight: 700;
}
.cryptos .card .card-body span {
  font-weight: 400;
}


#graph {
  display: flex;
  position: absolute;
  bottom:0px;
  left: 0;
  right: 0;
  height:0 ;
  width: 100%;
  margin:0 auto;
  background-color: white;
  justify-content: center;
  transition: height 1s;
  border-radius: 5px 5px  0 0;
}

#graph .graph__close__open {
  transform: scale(-0.8);
  height: 70px;
  width: 80px;
  border:2px solid grey;
  background-color: whitesmoke;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top:-40px;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 1s;
  opacity: .2;
}

#graph .graph__close__open:hover{
  opacity: 1;
}

#graph .grap__show {
  height: 500px;
  width: 99.5%;
  margin-top: 100px;
  font-weight: 900;
  opacity:.9;
}

</style>
