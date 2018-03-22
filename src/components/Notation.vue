<template>
  <div class="notation" v-bind:style="notationStyle()">
    <div class="moves">
      <div class = "wrapper">
        <template   v-for="(pair,pInd) in movePairs" >
          <span class = "move"
          v-for="(move,mInd) in pair" 
          :key="`${pInd}_${mInd}`"
          :class="{ current: currentMove === (pInd * 2 + mInd + 1)}"  
          @click="goToMove(pInd * 2 + mInd + 1)">
            <span v-if="mInd === 0">{{pInd + 1}}. </span>
            {{move}}
          </span>
        </template>
      </div>
    </div>
    <div class="panel">
       <button class = "button" @click="goToMove(0)">&lt;&lt;</button>
       <button class = "button" @click="goToMove(currentMove - 1)">&lt;</button>
       <button class = "button" @click="goToMove(currentMove + 1)">&gt;</button>
       <button class = "button" @click="goToMove(history.length)">&gt;&gt;</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notation',
  props: {
    history: Array,
    currentMove: Number,
    goToMove: Function,
    height: Number
  },
  computed: {
    movePairs () {
      let p = []
      let copy = [...this.history]
      while (copy.length > 0) p.push(copy.splice(0, 2));
      return p;
    }
  },
  methods: {
    notationStyle () {
      return {
        height: `${this.height}px`,
        maxHeight: `${this.height}px`,
      };
    }
  }
};
</script>

<style scoped>
.notation {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.move {
  cursor: pointer;
  font-weight: bold;
}

.movePair {
  float: left;
  margin-right: 4px;
}
.current {
  background-color: rgb(230, 217, 144);
}

.moves {
  letter-spacing: 1px;
  text-align: left;
  overflow: auto;
  flex: 0 0 85%;
}

.button {
  width: 40px;
  height: 75%;
  margin-left: 15px;
  align-self: center;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  background-color: #cecdcd;
  touch-action: manipulation;
  white-space: nowrap;
  user-select: none;
  border: 1px solid #bbbbbb;
  text-decoration: none;
  color: rgb(90, 90, 90);
  font-weight: bold;
}
.wrapper {
  padding: 10px;
}

.panel {
  flex: 0 0 15%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
}
</style>