<template>
  <div id="pgn">
    <Board v-bind="{position,height}"/>
    <Notation v-bind="{history, currentMove, goToMove,height}"/>
  </div>
</template>

<script>
import Board from './Board.vue'
import Notation from './Notation.vue'
import Chess from 'chess.js'

export default {
  name: 'vuepgn',
  data () {
    return {
      currentMove: 0,
      position: [],
      history: []
    };
  },
  props: {
    pgn: String,
    height: Number
  },
  components: {
    Board,
    Notation
  },
  methods: {
    goToMove (moveIndex) {
      if (moveIndex < 0 || moveIndex > this.history.length) return
      this.currentMove = moveIndex;
      this.game.reset();
      for (let n = 0; n < moveIndex; n++) {
        this.game.move(this.history[n]);
      }
      this.position = this.game.board();
    }
  },
  mounted () {
    this.game.load_pgn(this.pgn);
    this.history = this.game.history();
    this.game.reset()
    this.position = this.game.board();
  },
  created () {
    this.game = new Chess()
  }
};
</script>

<style>
#pgn {
  display: flex;
}
</style>