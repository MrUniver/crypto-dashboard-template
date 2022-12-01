<template>
    <canvas id="canvas" class="canvas" width="10" height="3"></canvas>
</template>

<script>
import { Chart } from 'chart.js/auto'

export default {

    props: {
        chartData: {
            type: Object,
            required: true
        },
        chartOptions:{
            type: Object,
            required: false
        },
        title: {
            type: String,
            default: 'bitcoin'
        },
        graphOpen: {
            type: Boolean,
            required: true
        },
        changeData: {
            type : Boolean,
            required: true
        }
    },

    data() {
        return {
            chart : null
        }
    },
    
    watch: {
        graphOpen(){
            if(!this.graphOpen) {
                this.chart.destroy()
            }
        },
        changeData() {
            console.log("data modifier");
            this.chart.update()
        },
        chartData() {

            this.chart = new Chart("canvas", {
                data: {
                    labels: this.chartData.prices.map(date => new Date(date[0]).toLocaleString()),
                    datasets: [
                        { 
                            type: 'line',
                            data:  this.chartData.prices.map(prix => prix[1]),
                            borderColor: 'rgb(75, 192, 192)',
                            fill: true,
                            label: `Evolution du prix ${(this.title).toUpperCase()}`,
                        },
                        { 
                            type: 'line',
                            data:  this.chartData.total_volumes.map(volume => volume[1]),
                            borderColor: "orange",
                            fill: true,
                            label: `Evolution du market cap ${(this.title).toUpperCase()} `,
                        },
                        { 
                            type: 'line',
                            data:  this.chartData.market_caps.map(market => market[1]),
                            borderColor: "red",
                            fill: true,
                            label: `Evolution des volumes d'échange ${(this.title).toUpperCase()} `,
                        }
                    ]
                },
                options: this.chartOptions
            })
        }
    },

}
</script>