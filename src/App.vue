<template>
  <div id="content">


    <div class="cryptos" style="border:2px solid red;">
      <h1>Partie qui affiche les vignettes avec les cryptos</h1>
    </div>

  </div>

  <!-- Partie avec graphique -->
  <div id="graph">
    <div class="graph-close-open" @click="open_or_close">
      <svg id="more-arrows">
        <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
        <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
        <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
      </svg>
    </div>
    <div class="grap__show">
      <!-- Partie qui affiche le graphique -->
    </div>
  </div>
</template>

<script>

export default {

  async mounted() {

    console.log("Hello ");

  },

  name: 'App',

}
</script>

<style>

body {
  overflow: hidden;
  font-family: "'JetBrains Mono', consolas, sans-serif", ;
}

*, ::after, ::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border:0;
}


/* Partie qui englobe le tout */
#content {
  height: 90vh;
  width: 98%;
  position: relative;
  margin: 60px auto;
}


/* Partie qui affiche les 2 selects */
.params {
  z-index: 2;
  text-align: right;
  width: 96%;
  padding: 5px;
  margin: 0 auto;
  position: absolute;
  top:5px;
  right: 0;
  left: 0;
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


/* Partie qui affiche les cartes avec les infos des cryptos */
.cryptos {
  overflow-y: auto;
  position: relative;
  max-height: 880px;
  right: 0;
  left: 0;
  top:0;
  display: grid;
  grid-template-columns: repeat(auto-fit,  280px);
  gap:10px;
  justify-content: center;
  padding: 40px 10px;
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


/* Partie qui affichie le graphique */
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

#graph .graph__close-open {
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

#graph .graph__close-open:hover{
  opacity: 1;
}

#graph .grap__show {
  width: 99.5%;
  margin-top: 100px;
  font-weight: 900;
  opacity:.9;
}
</style>
