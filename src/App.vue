<template>
  <div id="app">
    <Board v-bind:position="position"/>
    <Notation v-bind="{history, currentMove, goToMove}"/>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Notation from "./components/Notation.vue";
import Chess from "chess.js";
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
console.log(chess.board());
console.log(chess.history());
console.log(chess.header());

// let p = [],
//   copy = chess.history();
// while (copy.length > 0) p.push(copy.splice(0, 2));
// console.log(p);

export default {
  name: "app",
  data() {
    return {
      currentMove: 0,
      position: chess.board(),
      history: chess.history()
    };
  },
  components: {
    Board,
    Notation
  },
  methods: {
    goToMove(moveIndex) {
      this.currentMove = moveIndex;
      chess.reset();
      for (let n = 0; n < moveIndex; n++) {
        chess.move(this.history[n]);
      }
      this.position = chess.board();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
