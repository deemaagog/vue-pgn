<template>
  <div class="notation">
    <div class = "movePair"  v-for="(pair,pInd) in movePairs" :key=pInd>
      <span>{{pInd + 1}}. </span>  
      <span class = "move"
      v-for="(move,mInd) in pair" 
      :key=mInd
      :class="{ current: currentMove === (pInd * 2 + mInd + 1)}"  
      @click="goToMove(pInd * 2 + mInd + 1)"> {{move}} 
      </span>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Notation",
  props: {
    history: Array,
    currentMove: Number,
    goToMove: Function
  },
  computed: {
    movePairs() {
      let p = [],
        copy = [...this.history];
      while (copy.length > 0) p.push(copy.splice(0, 2));
      console.log(p)
      return p;
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.notation {
  height: 400px;
  width: 400px;
  border: 1px solid;
}

.move {
  cursor: pointer;
}

.movePair {
  float: left;
  margin-right: 4px;
}
.current {
  font-weight: bold
}
</style>
