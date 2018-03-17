<template>
  <div class="board">
      <div class = "row" v-for="r in 8" :key=r>
        <div 
          class="square" 
          v-for="c in 8" 
          :key=c  
          v-bind:class="(c & 1 && r & 1) || ( !(c & 1) && !(r & 1))? 'black' : 'white'" >
        </div>
      </div>
      <template v-for="(row, rInd) in position">
        <div 
          class = 'piece'  
          v-for="(piece,cInd) in row" 
          v-if = "piece!==null" 
          v-bind:key="`${rInd}:${cInd}`" 
          v-bind:style="{ top: (rInd) * 12.5 + '%' , left: (cInd) * 12.5 + '%'}"
          >
          <img v-bind:src="getPieceSvg(piece.color,piece.type)">
        </div>
      </template>
  </div>
  
</template>

<script>

export default {
  name: "Board",
  props: {
    position: Array
  },
  methods: {
  getPieceSvg(color,type) {
    return require(`../assets/pieces/${color}${type}.svg`);
  }
}
};

</script>

<style scoped>
  .board {
    width: 400px;
    height: 400px;
    position: relative;
    border: 1px solid;
  }

  .square {
    float: left;
    width: 12.5%;
    height: 100%;
  }

  .row {
    height: 12.5%;
  }

  .white {
    background-color: rgb(138, 91, 91)
  }

  .black {
    background-color: rgb(224, 198, 163)
  }

  .piece {
    position: absolute;
    width: 12.5%;
    height: 12.5%;
  }
</style>
