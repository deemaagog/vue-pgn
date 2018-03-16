<template>
  <div class="list">
    {{text}}
    <ul id='ex'>
      <li v-for="item in items" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    items:Array,
    text:String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
