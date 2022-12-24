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
html,
body {
  height: 100vh;
  width: 100vw;
  font-family: "'JetBrains Mono', consolas, sans-serif", ;
  overflow: hidden;
}

*,
::after,
::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: 0;
}

/* Partie qui englobe le tout */

#content {
  overflow-y: auto;
  height: 90vh;
  width: 98%;
  position: relative;
  top: 60px;
  margin-left: auto;
  margin-right: auto;
}


/* Partie qui affiche les 2 selects */

.params {
  width: 96%;
  height: 50px;
  position: fixed;
  justify-content: end;
  transition: all 2s;
  display: none;
  align-items: center;
  padding: 5px;
}

.params select {
  font-weight: 900;
  cursor: pointer;
  border: 1px solid rgb(160, 158, 158);
  border-radius: 3px;
  margin-right: 10px;
  height: 30px;
}

.params label {
  font-weight: 900;
  margin-left: 40px;

  padding: 10px;
}


/* Partie qui affiche les cartes avec les infos des cryptos */

.cryptos {
  position: relative;
  right: 0;
  left: 0;
  top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 10px;
  justify-content: center;
  padding: 10px;
}

.cryptos .card {
  margin-top: 30px;
  height: 150px;
  border: 2px solid rgb(194, 193, 193);
}

.cryptos .card:hover {
  cursor: pointer;
}

.cryptos .card img {
  width: 64px;
  height: 64px;
  margin: -38px auto;
  border: none;
  border-radius: 50%;
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

.cryptos .card .card-body p:last-child {
  color: rgb(96, 95, 95);
  font-size: 10px;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: -5px;
  right: 0;
  font-style: italic;
}


/* Partie qui affichie le graphique */

#graph {
  height: 0;
  position: absolute;
  left: 0;
  right: 0;
  background-color: white;
  opacity: 0.95;
  bottom: 0;
  display: block;
  justify-content: left;
  transition: height 1s;
  border-radius: 5px 5px 0 0;
  text-align: center;
  padding: 10px;
}

#graph .graph-close-open {
  transform: scale(-0.8);
  height: 70px;
  width: 80px;
  border: 2px solid grey;
  background-color: whitesmoke;
  line-height: 50px;
  position: relative;
  bottom: 35px;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 1s;
  opacity: 0.2;
  left: 47%;
}

#graph .graph-close-open:hover {
  opacity: 1;
}

#graph .grap__show {
  width: 98%;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
}

#graph #canvas {
  margin: 0 auto;
  height: 100%;
}
</style>
