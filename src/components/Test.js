// export default {
//     bonjour: "salut",
// }

module.exports = {
    Bonjour: "salut mec",
    chartOptions: {
        datasets: {
            line: {
                tension: localStorage.getItem('tension') ? localStorage.getItem('tension') : .1,
                borderCapStyle: 'round',
                borderWidth: 1,
            }
        }
    },

    allCryptos: async(cryptos) => await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptos}&order=market_cap_desc&per_page=100&page=1&sparkline=false`),
    // rep.json()
    foutre: () => console.log("helu")
}