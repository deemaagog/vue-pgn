# vue-pgn

[![npm](https://img.shields.io/npm/v/vue-pgn.svg) ![npm](https://img.shields.io/npm/dm/vue-pgn.svg)](https://www.npmjs.com/package/vue-pgn)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)


A Vue.js component for browsing chess games in pgn format. Uses [chess.js](https://github.com/jhlywa/chess.js) under the hood.



Demo: [https://deemaagog.github.io/vue-pgn/](https://deemaagog.github.io/vue-pgn)



# Installation

```
npm install --save vue-pgn
```

## Import


```javascript
import {VuePgn} from 'vue-pgn'
import 'vue-pgn/dist/vue-pgn.css'

export default {
  components: {VuePgn},
  data() {
    return {
      pgn: '1. g4 e5 2. f4 Qh4',
      height: 300,
    };
  },
};
</script>

<template>
  <div>    
    <VuePgn v-bind="{pgn,height}"/>
  </div>
</template>

```



## Browser

```html
<div id="app">
  <vuepgn v-bind="{pgn,height}"></vuepgn>
</div>

<link rel="stylesheet" href="vue-pgn/dist/vue-pgn.css"/>

<script src="vue.js"></script>
<script src="vue-pgn/dist/vue-pgn.browser.js"></script>

<script>
new Vue({
  el: '#app',
  components: {
    VuePgn
  },
  data() {
    return {
      pgn: '1. g4 e5 2. f4 Qh4',
      height: 300,
    };
  }
});
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)

