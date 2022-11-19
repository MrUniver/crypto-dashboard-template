<template>
  <div id="app">
    <div class="cryptos">
      <div class="card" v-for="(crypto, i) in cryptos" :key="i" @click="viewchart(i)">
        <img :src="crypto.image">
        <div class="card-body">
          <p class="card-text" style="text-align:center"> ${{(crypto.prix)}}</p>
          <span style="float:left"><img src="../images/diminuer.png" style="width:24px; height:24px"> $ {{crypto.min}}</span>
          <span style="float:right"><img src="../images/augmenter.png" style="width:24px; height:24px"> $ {{crypto.max}} </span>
        </div>
      </div>
    </div>
    <div class="graphique">
      <v-chart class="chart" :option="option" />
    </div>
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer, // rendre visible le graphique
  PieChart,
  TitleComponent, // titre du grapgique : tittle
  TooltipComponent, // voi les tooltips: bulle avec infos
  LegendComponent // voir la légende
]);

// ECharts.setOption({option: Object, notMerge: boolean, lazyUpdate: boolean})
/**
 * Transformer timestamp en date : new Date(1668866503000).toLocaleDateString()
 * Transofmer date en timestamp : 
 * */
export default {
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "dark"
  },
  mounted() {
    // fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=2&interval=hourly")
    //   .then(res => {
    //     console.log(res.json());
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  },
  data() {
    return {
      cryptos : [
        { nom: 'Bitcoin', prix: 16986.45, image: require('../images/bitcoin.png'), min:16500, max:17606 },
        { nom: 'Ethereum', prix: 36986.45, image: require('../images/ethereum.png'), min:33487, max:34892 },
        { nom: 'Ripple', prix: 19986.45, image: require('../images/ripple.png'),min:12345, max:23606 },
        { nom: 'Near', prix: 3686.45, image: require('../images/near.png'), min:3567, max:3864},
        { nom: 'Solana', prix: 186.45, image: require('../images/solana.png'),min:175, max:235 },
        { nom: 'Litecoin', prix: 1586.45, image: require('../images/litecoin.png'),min:1575, max:2035 },
        { nom: 'Polygon', prix: 586.45, image: require('../images/polygon.png'),min:575, max:642 },
        { nom: 'Vechain', prix: 86.45, image: require('../images/vechain.png'),min:75, max:89 },
      ],
      option : {
      title: {
        text: "Traffic Sources",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "right",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
      },
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 234, name: "Ad Networks" },
            { value: 135, name: "Video Ads" },
            { value: 1548, name: "Search Engines" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    }
    }
  },
  methods: {
    viewchart(cryptoIndex) {
      console.log('appui pour voir graphique ', this.cryptos[cryptoIndex])
    }
  },
 

  name: 'App'
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border-radius: 3px;
  position: relative;
  width: 90vw;
  margin: 70px 70px auto auto;
  height: 90vh;
}

.cryptos {
  position: absolute;
  right: 0;
  left: 0;
  top:0;
  display: grid;
  grid-template-columns: repeat(6, 15.5%);
  gap:1.4%;
  padding: 5px;
  width: 100%;
  border:2px solid orange;
}

.cryptos .card {
  margin-top:30px;
  height: 120px;
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
  font-weight: 900;
}
.cryptos .card .card-body span {
  font-weight: 600;
}


.graphique {
  border:3px solid red;
  position: absolute;
  bottom:10px;
  left: 0;
  right: 0;
  height: auto ;
}

.chart {
  height: 400px;
}
</style>
