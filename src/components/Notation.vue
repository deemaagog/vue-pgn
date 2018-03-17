<template>
  <div class="notation">
    <span class = "move"
      v-for="(move,index) in history" 
      :key=index  
      @click="goToMove(index + 1)"
    >{{move}}    
    </span>
  </div>
</template>

<script>

export default {
  name: 'Notation',
  props: {
    history: Array,
    currentMove: Number,
    goToMove: Function
  }
}
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
.current{
  
}

</style>
