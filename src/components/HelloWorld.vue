<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <board v-bind:items="items"  :text="text"></board>
  </div>
</template>

<script>
import Board from './Board'

import Chess from 'chess.js';
var chess = new Chess();

const game = `[Event "Chess Olympiad"]
[Site "Istanbul TUR"]
[Date "2012.09.06"]
[EventDate "2012.08.28"]
[Round "9.2"]
[Result "1-0"]
[White "Ding Liren"]
[Black "Oliver Barbosa"]
[ECO "D16"]
[WhiteElo "2695"]
[BlackElo "2554"]
[PlyCount "51"]

1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 e6 6. e4 Bb4
7. e5 Nd5 8. Bd2 a5 9. Bxc4 Be7 10. h4 h6 11. h5 Na6 12. Ne4
Nab4 13. Rh3 b6 14. Rg3 Bf8 15. Kf1 Qd7 16. Qe2 Bb7 17. Nd6+
Bxd6 18. exd6 Qxd6 19. Ne5 Rg8 20. Bxh6 f6 21. Bxg7 fxe5
22. h6 O-O-O 23. h7 Rxg7 24. Rxg7 exd4 25. Rg8 Qh2 26. h8=Q
1-0`;

chess.load_pgn(game);

// chess.move('e4');
// chess.move('e5');
// chess.move('f4');
 console.log(chess.fen());
// var board = chess.board();
// console.log(board);

export default {
  name: 'HelloWorld',
  components: {Board},
  data ()  {
    return {items: [
      { name: 'Foo', id:123 },
      { name: 'Bar', id:234 }
    ],
    text:"err"}
  },
  props: {
    msg: String
  }
}
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
