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

const game2 = `[Event "World Chess Championship 2014"]

[Site "Sochi"]

[Date "2014.11.17"]

[Round "7"]

[White "Carlsen, Magnus"]

[Black "Anand, Viswanathan"]

[Result "1/2-1/2"]

[ECO "C67"]

[WhiteElo "2863"]

[BlackElo "2792"]

[Annotator "Bojkov, Dejan"]

[Plycount "243"]

[Eventdate "2014.??.??"]

[Eventcountry "RUS"]

 

1.e4 e5 2.Nf3 Nc6 3.Bb5 Nf6 { As I predicted after the second game, the

Berlin is back. It would not be surprise if the opponents play it with

reversed colors. } 4.O-O Nxe4 5.d4 Nd6 6.Bxc6 dxc6 7.dxe5 Nf5 8.Qxd8+ Kxd8 9.h3 Ke8 10.Nc3 h5 11.Bf4 Be7 12.Rad1 Be6 { Some time ago a very strong GM

revealed to me that this is the easiest equalizer for Black. } 13.Ng5 Rh6 { Black will trade on g5 but only once that he can kick away the annoying bishop. } ( 13...Bxg5 14.Bxg5 h4 15.Rd2 Rh5 16.f4 { will leave the rook on h5

offside and the king in trouble along the d file. } ) 14.g3 ( 14.Rfe1 Bb4 15.g4 hxg4 16.hxg4 Ne7 17.Nxe6 Rxe6 18.Kg2 Bxc3 19.bxc3 Rd8 20.Rxd8+ Kxd8 21.Rh1 Nd5 22.Rh8+ Kd7 23.Bg3 g5 { was played the round before in Radjabov,T

(2726)-Andreikin,D (2722) Tashkent UZB 2014 } ) 14...Bxg5 { Now it is the right

time as otherwise White will stabilize the situation in the flank with the

move h3-h4. What follows next is pretty forced } 15.Bxg5 Rg6 16.h4 { The only chance to fight for the advantage is to sacrifice a pawn. Vishy

had already faced the alternative, which is known as a forced draw } ( 16.Bf4 Nh4 17.Kh1 Nf3 18.Kg2 Nh4+ 19.Kh1 Nf3 20.Kg2 { 1/2 (20) Grischuk,A (2747)

-Anand,V (2817) Monte Carlo 2011 } ) 16...f6 17.exf6 gxf6 18.Bf4 Nxh4 19.f3 { The pawn is gone, but Magnus wants to play Kg1-f2 and then attack on the open

central files. Vishy needs to reduce the pressure. } 19...Rd8 { Which he does

promptly. All of this is not new yet. } 20.Kf2 Rxd1 21.Nxd1 Nf5 22.Rh1 { This

is the important pawn White wishes to win. Two versus one on the kingside will

give a chance for a dangerous passer. } 22...Bxa2 { Black uses the moment when the

knight blocks the rook to snatch another pawn. } ( { Passive defense is highly

inappropriate } 22...Ng7 23.Ne3 Kd7 24.Ng2 { as the rook on g6 will suffer. } ) 23.Rxh5 Be6 24.g4 ( { Or else Black will trade the rooks and there will be

nothing to play for } 24.Bxc7 Rh6 25.Rxh6 Nxh6 26.g4 { &frac12;-&frac12; Alekseev,E (2675)

-Grachev,B (2672) Kocaeli 2014 } ) 24...Nd6 25.Rh7 Nf7 { The novelty. Yes, on move 25! A couple of

weeks ago another Super-GM game went } ( 25...f5?! { The evaluations are from

Anish Giri } 26.g5?! ( { Giri underestimated how unpleasant } 26.Rxc7! Nb5 27.gxf5 Bxf5 28.Rxb7 Bxc2 29.Ne3 { is for Black, despite the limited number of

pawns. } ) 26...Nf7 27.Rh5 { and even here White is somewhat better but Black

defended well to deserve the draw in Giri,A (2768)-Radjabov,T (2726) Tashkent

2014 } ) 26.Ne3 { This stops the positional threat f6-f5 which will

significantly reduce the material. } ( 26.Bxc7 { is again nothing } 26...Rh6 ( 26...f5 { is also good } ) 27.Rxh6 Nxh6 ) 26...Kd8 { If you do not want it, I

will keep it. } 27.Nf5 { The knight is transferred to a better position while

watching carefully the f5 spot. } 27...c5 28.Ng3! Ne5! { I am not sure if this

was still prep but it looks like a very convincing defense. If Anand allows

the maneuver Ng3-h5 his position will become very, very suspicious. Have a

look at it } ( 28...b6 29.Nh5 a5 { These two moves are not necessary but it

makes good sense to advance the pawns where you are stronger. Now very strong

is } 30.Bg3! { and if } ( { Rather

than the forced line } 30.Bxc7+ Kxc7 31.Nf4 Rh6 32.Nxe6+ Kd6 33.Rxf7 Kxe6 34.Rb7 Rh2+ 35.Ke3 Rxc2 36.Rxb6+ ) 30...Kd7 31.f4! { is a

large advantage for White in the complications } 31...Rh6 ( 31...Bxg4 32.Rxf7+ Ke8 33.Rh7 { wins a piece for White } ) ( 31...Rxg4 { loses the exchange } 32.Nxf6+ Ke7 33.Nxg4 Bxg4 ) 32.f5 Rxh7 33.Nxf6+ Ke7 34.Nxh7 { and the two kingside

pawns are far more dangerous than all the black queenside ones. } ) 29.Rh8+ ( { I suspect that Anand would have also sacrificed a piece in case of } 29.Bxe5 fxe5 30.Rh5 Bxg4 31.fxg4 Rxg4 ) 29...Rg8 ( { The pawns might get dangerous if

left on the board } 29...Kd7 30.Ne4 Kc6 31.Bxe5 fxe5 32.Rh5 Kd5 33.Nc3+ Kd6 34.Ke3 b6 35.Nb5+ ) 30.Bxe5 fxe5 31.Rh5 Bxg4! { The point of Vishy's defense. The pawns on the kingside disappear

and the knight cannot do much on one flank only. } 32.fxg4 Rxg4 33.Rxe5 b6 34.Ne4 Rh4 35.Ke2 Rh6 36.b3 Kd7 37.Kd2 Kc6 { Technically speaking Magnus is a

pawn up but the problem is that the knight cannot be separated into three pawns

:) The real problem is that anytime he tries to advance his pawns this will

lead to exchanges and will liquidate into a theoretically draw endgame R+N

versus R. } 38.Nc3 a6 39.Re4 Rh2+ 40.Kc1 Rh1+ 41.Kb2 Rh6 42.Nd1 Rg6 43.Ne3 Rh6 44.Re7 Rh2 45.Re6+ Kb7 46.Kc3 Rh4 47.Kb2 Rh2 48.Nd5 Rd2 49.Nf6 Rf2 { Nothing much happened in the past few moves. At the moment that the white

knight approaches the black camp though Anand starts hitting it with the rook.

This is the best defensive technique as he does not want to allow too much

freedom to the white pieces. } 50.Kc3 Rf4 51.Ne4 Rh4 52.Nf2 Rh2 53.Rf6 Rh7 54.Nd3 Rh3 55.Kd2 Rh2+ 56.Rf2 Rh4 57.c4 { Finally a white pawn moved but it

can easily be attacked here by a black one. } 57...Rh3 58.Kc2 Rh7 59.Nb2 Rh5 60.Re2 Rg5 61.Nd1 b5 62.Nc3 c6 63.Ne4 Rh5 64.Nf6 Rg5 65.Re7+ Kb6 { Vishy is

not afraid of ghosts. } 66.Nd7+ Ka5 ( { Naturally not } 66...Kc7?? 67.Nxc5+ Kd6 68.Ne4+ ) 67.Re4 Rg2+ 68.Kc1 Rg1+ 69.Kd2 Rg2+ 70.Ke1 ( { Or else all the

pawns will disappear. } 70.Re2 Rxe2+ 71.Kxe2 Kb4 ) 70...bxc4 { Well calculated. } 71.Rxc4 Rg3 72.Nxc5 Kb5 { with the threat Rg3xb3. } 73.Rc2 a5 74.Kf2 Rh3 75.Rc1 Kb4 76.Ke2 Rc3 { The last pawn disappears. Many

players would have call it a day now, but not Carlsen. For two reasons.  First

of all, he is Magnus and this is something you cannot escape from.  The second

one has more to do with the match strategy. In every single situation the

stronger side pushes as much as he likes for the pure joy of it. And- to

exhaust the opponent. The match history knows many game in which a player who

had defended long game with the black pieces is so exhausted in the next game

that does not even try to win but chooses to make a short draw instead and get

some rest.  However, I doubt that this will be the case tomorrow as Anand

desperately needs a win to keep his chances alive. } ( { Not } 76...Rh5 77.Rc4+ ) 77.Nd3+ Kxb3 78.Ra1 Kc4 79.Nf2 Kb5 80.Rb1+ Kc4 81.Ne4 Ra3 82.Nd2+ Kd5 83.Rh1 a4 84.Rh5+ Kd4 85.Rh4+ Kc5 86.Kd1 Kb5 87.Kc2 Rg3 88.Ne4 Rg2+ 89.Kd3 a3 90.Nc3+ Kb6 91.Ra4 a2 { Black does not need the pawns to make the draw. } 92.Nxa2 Rg3+ 93.Kc2 Rg2+ 94.Kb3 Rg3+ 95.Nc3 Rh3 96.Rb4+ Kc7 97.Rg4 Rh7 98.Kc4 Rf7 99.Rg5 Kb6 100.Na4+ Kc7 101.Kc5 Kd7 102.Kb6 Rf1 103.Nc5+ Ke7 104.Kxc6 { Kasparov once won this endgame to Judit Polgar (back

in 1996). Still, it is extremely unprobable that anything like that happens in

a WCC match. } 104...Rd1 105.Rg6 Kf7 106.Rh6 Rg1 107.Kd5 Rg5+ 108.Kd4 Rg6 109.Rh1 Rg2 110.Ne4 Ra2 111.Rf1+ Ke7 112.Nc3 Rh2 113.Nd5+ Kd6 114.Rf6+ Kd7 115.Nf4 Rh1 { The rook stands as far away of the white king as possible. Anytime it

approaches he will start checking it and if the knight covers the check Black

will just keep it pinned. This is the defensive method in brief. } 116.Rg6 Rd1+ 117.Nd3 Ke7 118.Ra6 Kd7 119.Ke4 Ke7 120.Rc6 Kd7 121.Rc1 Rxc1 122.Nxc1 { A marathon battle! Carlsen tried everything he could to crack the defense that

Anand skilfully had built but in vain. } 

1/2-1/2`;

// const game = `[Event "Chess Olympiad"]
// [Site "Istanbul TUR"]
// [Date "2012.09.06"]
// [EventDate "2012.08.28"]
// [Round "9.2"]
// [Result "1-0"]
// [White "Ding Liren"]
// [Black "Oliver Barbosa"]
// [ECO "D16"]
// [WhiteElo "2695"]
// [BlackElo "2554"]
// [PlyCount "51"]

// 1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 e6 6. e4 Bb4
// 7. e5 Nd5 8. Bd2 a5 9. Bxc4 Be7 10. h4 h6 11. h5 Na6 12. Ne4
// Nab4 13. Rh3 b6 14. Rg3 Bf8 15. Kf1 Qd7 16. Qe2 Bb7 17. Nd6+
// Bxd6 18. exd6 Qxd6 19. Ne5 Rg8 20. Bxh6 f6 21. Bxg7 fxe5
// 22. h6 O-O-O 23. h7 Rxg7 24. Rxg7 exd4 25. Rg8 Qh2 26. h8=Q
// 1-0`;

chess.load_pgn(game2);
const history = chess.history();
chess.reset()

export default {
  name: "app",
  data() {
    return {
      currentMove: 0,
      position: chess.board(),
      history
    };
  },
  components: {
    Board,
    Notation
  },
  methods: {
    goToMove(moveIndex) {
      if (moveIndex  < 0 || moveIndex > this.history.length) return
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
  display: flex;
  border: 1px solid;
  border-color: #f3f3f3
}
</style>
