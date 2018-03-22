!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VuePgn=factory():root.VuePgn=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){__webpack_require__(9);var Component=__webpack_require__(0)(__webpack_require__(5),__webpack_require__(14),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Chess=function(fen){function _clear(keep_headers){void 0===keep_headers&&(keep_headers=!1),_board=new Array(128),kings={w:EMPTY,b:EMPTY},_turn=WHITE,castling={w:0,b:0},ep_square=EMPTY,half_moves=0,move_number=1,_history=[],keep_headers||(header={}),update_setup(generate_fen())}function _reset(){_load(DEFAULT_POSITION)}function _load(fen,keep_headers){void 0===keep_headers&&(keep_headers=!1);var tokens=fen.split(/\s+/),position=tokens[0],square=0;if(!_validate_fen(fen).valid)return!1;_clear(keep_headers);for(var i=0;i<position.length;i++){var piece=position.charAt(i);if("/"===piece)square+=8;else if(is_digit(piece))square+=parseInt(piece,10);else{var color=piece<"a"?WHITE:BLACK;_put({type:piece.toLowerCase(),color:color},algebraic(square)),square++}}return _turn=tokens[1],tokens[2].indexOf("K")>-1&&(castling.w|=BITS.KSIDE_CASTLE),tokens[2].indexOf("Q")>-1&&(castling.w|=BITS.QSIDE_CASTLE),tokens[2].indexOf("k")>-1&&(castling.b|=BITS.KSIDE_CASTLE),tokens[2].indexOf("q")>-1&&(castling.b|=BITS.QSIDE_CASTLE),ep_square="-"===tokens[3]?EMPTY:SQUARES[tokens[3]],half_moves=parseInt(tokens[4],10),move_number=parseInt(tokens[5],10),update_setup(generate_fen()),!0}function _validate_fen(fen){var errors={0:"No errors.",1:"FEN string must contain six space-delimited fields.",2:"6th field (move number) must be a positive integer.",3:"5th field (half move counter) must be a non-negative integer.",4:"4th field (en-passant square) is invalid.",5:"3rd field (castling availability) is invalid.",6:"2nd field (side to move) is invalid.",7:"1st field (piece positions) does not contain 8 '/'-delimited rows.",8:"1st field (piece positions) is invalid [consecutive numbers].",9:"1st field (piece positions) is invalid [invalid piece].",10:"1st field (piece positions) is invalid [row too large].",11:"Illegal en-passant square"},tokens=fen.split(/\s+/);if(6!==tokens.length)return{valid:!1,error_number:1,error:errors[1]};if(isNaN(tokens[5])||parseInt(tokens[5],10)<=0)return{valid:!1,error_number:2,error:errors[2]};if(isNaN(tokens[4])||parseInt(tokens[4],10)<0)return{valid:!1,error_number:3,error:errors[3]};if(!/^(-|[abcdefgh][36])$/.test(tokens[3]))return{valid:!1,error_number:4,error:errors[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2]))return{valid:!1,error_number:5,error:errors[5]};if(!/^(w|b)$/.test(tokens[1]))return{valid:!1,error_number:6,error:errors[6]};var rows=tokens[0].split("/");if(8!==rows.length)return{valid:!1,error_number:7,error:errors[7]};for(var i=0;i<rows.length;i++){for(var sum_fields=0,previous_was_number=!1,k=0;k<rows[i].length;k++)if(isNaN(rows[i][k])){if(!/^[prnbqkPRNBQK]$/.test(rows[i][k]))return{valid:!1,error_number:9,error:errors[9]};sum_fields+=1,previous_was_number=!1}else{if(previous_was_number)return{valid:!1,error_number:8,error:errors[8]};sum_fields+=parseInt(rows[i][k],10),previous_was_number=!0}if(8!==sum_fields)return{valid:!1,error_number:10,error:errors[10]}}return"3"==tokens[3][1]&&"w"==tokens[1]||"6"==tokens[3][1]&&"b"==tokens[1]?{valid:!1,error_number:11,error:errors[11]}:{valid:!0,error_number:0,error:errors[0]}}function generate_fen(){for(var empty=0,fen="",i=SQUARES.a8;i<=SQUARES.h1;i++){if(null==_board[i])empty++;else{empty>0&&(fen+=empty,empty=0);var color=_board[i].color,piece=_board[i].type;fen+=color===WHITE?piece.toUpperCase():piece.toLowerCase()}i+1&136&&(empty>0&&(fen+=empty),i!==SQUARES.h1&&(fen+="/"),empty=0,i+=8)}var cflags="";castling[WHITE]&BITS.KSIDE_CASTLE&&(cflags+="K"),castling[WHITE]&BITS.QSIDE_CASTLE&&(cflags+="Q"),castling[BLACK]&BITS.KSIDE_CASTLE&&(cflags+="k"),castling[BLACK]&BITS.QSIDE_CASTLE&&(cflags+="q"),cflags=cflags||"-";var epflags=ep_square===EMPTY?"-":algebraic(ep_square);return[fen,_turn,cflags,epflags,half_moves,move_number].join(" ")}function set_header(args){for(var i=0;i<args.length;i+=2)"string"==typeof args[i]&&"string"==typeof args[i+1]&&(header[args[i]]=args[i+1]);return header}function update_setup(fen){_history.length>0||(fen!==DEFAULT_POSITION?(header.SetUp="1",header.FEN=fen):(delete header.SetUp,delete header.FEN))}function _get(square){var piece=_board[SQUARES[square]];return piece?{type:piece.type,color:piece.color}:null}function _put(piece,square){if(!("type"in piece&&"color"in piece))return!1;if(-1===SYMBOLS.indexOf(piece.type.toLowerCase()))return!1;if(!(square in SQUARES))return!1;var sq=SQUARES[square];return(piece.type!=KING||kings[piece.color]==EMPTY||kings[piece.color]==sq)&&(_board[sq]={type:piece.type,color:piece.color},piece.type===KING&&(kings[piece.color]=sq),update_setup(generate_fen()),!0)}function _remove(square){var piece=_get(square);return _board[SQUARES[square]]=null,piece&&piece.type===KING&&(kings[piece.color]=EMPTY),update_setup(generate_fen()),piece}function build_move(board,from,to,flags,promotion){var move={color:_turn,from:from,to:to,flags:flags,piece:board[from].type};return promotion&&(move.flags|=BITS.PROMOTION,move.promotion=promotion),board[to]?move.captured=board[to].type:flags&BITS.EP_CAPTURE&&(move.captured=PAWN),move}function generate_moves(options){function add_move(board,moves,from,to,flags){if(board[from].type!==PAWN||rank(to)!==RANK_8&&rank(to)!==RANK_1)moves.push(build_move(board,from,to,flags));else for(var pieces=[QUEEN,ROOK,BISHOP,KNIGHT],i=0,len=pieces.length;i<len;i++)moves.push(build_move(board,from,to,flags,pieces[i]))}var moves=[],us=_turn,them=swap_color(us),second_rank={b:RANK_7,w:RANK_2},first_sq=SQUARES.a8,last_sq=SQUARES.h1,single_square=!1,legal=!(void 0!==options&&"legal"in options)||options.legal;if(void 0!==options&&"square"in options){if(!(options.square in SQUARES))return[];first_sq=last_sq=SQUARES[options.square],single_square=!0}for(var i=first_sq;i<=last_sq;i++)if(136&i)i+=7;else{var piece=_board[i];if(null!=piece&&piece.color===us)if(piece.type===PAWN){var square=i+PAWN_OFFSETS[us][0];if(null==_board[square]){add_move(_board,moves,i,square,BITS.NORMAL);var square=i+PAWN_OFFSETS[us][1];second_rank[us]===rank(i)&&null==_board[square]&&add_move(_board,moves,i,square,BITS.BIG_PAWN)}for(j=2;j<4;j++){var square=i+PAWN_OFFSETS[us][j];136&square||(null!=_board[square]&&_board[square].color===them?add_move(_board,moves,i,square,BITS.CAPTURE):square===ep_square&&add_move(_board,moves,i,ep_square,BITS.EP_CAPTURE))}}else for(var j=0,len=PIECE_OFFSETS[piece.type].length;j<len;j++)for(var offset=PIECE_OFFSETS[piece.type][j],square=i;;){if(136&(square+=offset))break;if(null!=_board[square]){if(_board[square].color===us)break;add_move(_board,moves,i,square,BITS.CAPTURE);break}if(add_move(_board,moves,i,square,BITS.NORMAL),"n"===piece.type||"k"===piece.type)break}}if(!single_square||last_sq===kings[us]){if(castling[us]&BITS.KSIDE_CASTLE){var castling_from=kings[us],castling_to=castling_from+2;null!=_board[castling_from+1]||null!=_board[castling_to]||attacked(them,kings[us])||attacked(them,castling_from+1)||attacked(them,castling_to)||add_move(_board,moves,kings[us],castling_to,BITS.KSIDE_CASTLE)}if(castling[us]&BITS.QSIDE_CASTLE){var castling_from=kings[us],castling_to=castling_from-2;null!=_board[castling_from-1]||null!=_board[castling_from-2]||null!=_board[castling_from-3]||attacked(them,kings[us])||attacked(them,castling_from-1)||attacked(them,castling_to)||add_move(_board,moves,kings[us],castling_to,BITS.QSIDE_CASTLE)}}if(!legal)return moves;for(var legal_moves=[],i=0,len=moves.length;i<len;i++)make_move(moves[i]),king_attacked(us)||legal_moves.push(moves[i]),undo_move();return legal_moves}function move_to_san(move,sloppy){var output="";if(move.flags&BITS.KSIDE_CASTLE)output="O-O";else if(move.flags&BITS.QSIDE_CASTLE)output="O-O-O";else{var disambiguator=get_disambiguator(move,sloppy);move.piece!==PAWN&&(output+=move.piece.toUpperCase()+disambiguator),move.flags&(BITS.CAPTURE|BITS.EP_CAPTURE)&&(move.piece===PAWN&&(output+=algebraic(move.from)[0]),output+="x"),output+=algebraic(move.to),move.flags&BITS.PROMOTION&&(output+="="+move.promotion.toUpperCase())}return make_move(move),_in_check()&&(_in_checkmate()?output+="#":output+="+"),undo_move(),output}function stripped_san(move){return move.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function attacked(color,square){for(var i=SQUARES.a8;i<=SQUARES.h1;i++)if(136&i)i+=7;else if(null!=_board[i]&&_board[i].color===color){var piece=_board[i],difference=i-square,index=difference+119;if(ATTACKS[index]&1<<SHIFTS[piece.type]){if(piece.type===PAWN){if(difference>0){if(piece.color===WHITE)return!0}else if(piece.color===BLACK)return!0;continue}if("n"===piece.type||"k"===piece.type)return!0;for(var offset=RAYS[index],j=i+offset,blocked=!1;j!==square;){if(null!=_board[j]){blocked=!0;break}j+=offset}if(!blocked)return!0}}return!1}function king_attacked(color){return attacked(swap_color(color),kings[color])}function _in_check(){return king_attacked(_turn)}function _in_checkmate(){return _in_check()&&0===generate_moves().length}function _in_stalemate(){return!_in_check()&&0===generate_moves().length}function _insufficient_material(){for(var pieces={},bishops=[],num_pieces=0,sq_color=0,i=SQUARES.a8;i<=SQUARES.h1;i++)if(sq_color=(sq_color+1)%2,136&i)i+=7;else{var piece=_board[i];piece&&(pieces[piece.type]=piece.type in pieces?pieces[piece.type]+1:1,piece.type===BISHOP&&bishops.push(sq_color),num_pieces++)}if(2===num_pieces)return!0;if(3===num_pieces&&(1===pieces[BISHOP]||1===pieces[KNIGHT]))return!0;if(num_pieces===pieces[BISHOP]+2){for(var sum=0,len=bishops.length,i=0;i<len;i++)sum+=bishops[i];if(0===sum||sum===len)return!0}return!1}function _in_threefold_repetition(){for(var moves=[],positions={},repetition=!1;;){var move=undo_move();if(!move)break;moves.push(move)}for(;;){var fen=generate_fen().split(" ").slice(0,4).join(" ");if(positions[fen]=fen in positions?positions[fen]+1:1,positions[fen]>=3&&(repetition=!0),!moves.length)break;make_move(moves.pop())}return repetition}function push(move){_history.push({move:move,kings:{b:kings.b,w:kings.w},turn:_turn,castling:{b:castling.b,w:castling.w},ep_square:ep_square,half_moves:half_moves,move_number:move_number})}function make_move(move){var us=_turn,them=swap_color(us);if(push(move),_board[move.to]=_board[move.from],_board[move.from]=null,move.flags&BITS.EP_CAPTURE&&(_turn===BLACK?_board[move.to-16]=null:_board[move.to+16]=null),move.flags&BITS.PROMOTION&&(_board[move.to]={type:move.promotion,color:us}),_board[move.to].type===KING){if(kings[_board[move.to].color]=move.to,move.flags&BITS.KSIDE_CASTLE){var castling_to=move.to-1,castling_from=move.to+1;_board[castling_to]=_board[castling_from],_board[castling_from]=null}else if(move.flags&BITS.QSIDE_CASTLE){var castling_to=move.to+1,castling_from=move.to-2;_board[castling_to]=_board[castling_from],_board[castling_from]=null}castling[us]=""}if(castling[us])for(var i=0,len=ROOKS[us].length;i<len;i++)if(move.from===ROOKS[us][i].square&&castling[us]&ROOKS[us][i].flag){castling[us]^=ROOKS[us][i].flag;break}if(castling[them])for(var i=0,len=ROOKS[them].length;i<len;i++)if(move.to===ROOKS[them][i].square&&castling[them]&ROOKS[them][i].flag){castling[them]^=ROOKS[them][i].flag;break}ep_square=move.flags&BITS.BIG_PAWN?"b"===_turn?move.to-16:move.to+16:EMPTY,move.piece===PAWN?half_moves=0:move.flags&(BITS.CAPTURE|BITS.EP_CAPTURE)?half_moves=0:half_moves++,_turn===BLACK&&move_number++,_turn=swap_color(_turn)}function undo_move(){var old=_history.pop();if(null==old)return null;var move=old.move;kings=old.kings,_turn=old.turn,castling=old.castling,ep_square=old.ep_square,half_moves=old.half_moves,move_number=old.move_number;var us=_turn,them=swap_color(_turn);if(_board[move.from]=_board[move.to],_board[move.from].type=move.piece,_board[move.to]=null,move.flags&BITS.CAPTURE)_board[move.to]={type:move.captured,color:them};else if(move.flags&BITS.EP_CAPTURE){var index;index=us===BLACK?move.to-16:move.to+16,_board[index]={type:PAWN,color:them}}if(move.flags&(BITS.KSIDE_CASTLE|BITS.QSIDE_CASTLE)){var castling_to,castling_from;move.flags&BITS.KSIDE_CASTLE?(castling_to=move.to+1,castling_from=move.to-1):move.flags&BITS.QSIDE_CASTLE&&(castling_to=move.to-2,castling_from=move.to+1),_board[castling_to]=_board[castling_from],_board[castling_from]=null}return move}function get_disambiguator(move,sloppy){for(var moves=generate_moves({legal:!sloppy}),from=move.from,to=move.to,piece=move.piece,ambiguities=0,same_rank=0,same_file=0,i=0,len=moves.length;i<len;i++){var ambig_from=moves[i].from,ambig_to=moves[i].to;piece===moves[i].piece&&from!==ambig_from&&to===ambig_to&&(ambiguities++,rank(from)===rank(ambig_from)&&same_rank++,file(from)===file(ambig_from)&&same_file++)}return ambiguities>0?same_rank>0&&same_file>0?algebraic(from):same_file>0?algebraic(from).charAt(1):algebraic(from).charAt(0):""}function _ascii(){for(var s="   +------------------------+\n",i=SQUARES.a8;i<=SQUARES.h1;i++){if(0===file(i)&&(s+=" "+"87654321"[rank(i)]+" |"),null==_board[i])s+=" . ";else{var piece=_board[i].type;s+=" "+(_board[i].color===WHITE?piece.toUpperCase():piece.toLowerCase())+" "}i+1&136&&(s+="|\n",i+=8)}return s+="   +------------------------+\n",s+="     a  b  c  d  e  f  g  h\n"}function move_from_san(move,sloppy){var clean_move=stripped_san(move);if(sloppy){var matches=clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(matches)var piece=matches[1],from=matches[2],to=matches[3],promotion=matches[4]}for(var moves=generate_moves(),i=0,len=moves.length;i<len;i++){if(clean_move===stripped_san(move_to_san(moves[i]))||sloppy&&clean_move===stripped_san(move_to_san(moves[i],!0)))return moves[i];if(matches&&(!piece||piece.toLowerCase()==moves[i].piece)&&SQUARES[from]==moves[i].from&&SQUARES[to]==moves[i].to&&(!promotion||promotion.toLowerCase()==moves[i].promotion))return moves[i]}return null}function rank(i){return i>>4}function file(i){return 15&i}function algebraic(i){var f=file(i),r=rank(i);return"abcdefgh".substring(f,f+1)+"87654321".substring(r,r+1)}function swap_color(c){return c===WHITE?BLACK:WHITE}function is_digit(c){return-1!=="0123456789".indexOf(c)}function make_pretty(ugly_move){var move=clone(ugly_move);move.san=move_to_san(move,!1),move.to=algebraic(move.to),move.from=algebraic(move.from);var flags="";for(var flag in BITS)BITS[flag]&move.flags&&(flags+=FLAGS[flag]);return move.flags=flags,move}function clone(obj){var dupe=obj instanceof Array?[]:{};for(var property in obj)"object"===(void 0===property?"undefined":_typeof(property))?dupe[property]=clone(obj[property]):dupe[property]=obj[property];return dupe}function trim(str){return str.replace(/^\s+|\s+$/g,"")}function _perft(depth){for(var moves=generate_moves({legal:!1}),nodes=0,color=_turn,i=0,len=moves.length;i<len;i++){if(make_move(moves[i]),!king_attacked(color))if(depth-1>0){var child_nodes=_perft(depth-1);nodes+=child_nodes}else nodes++;undo_move()}return nodes}var BLACK="b",WHITE="w",EMPTY=-1,PAWN="p",KNIGHT="n",BISHOP="b",ROOK="r",QUEEN="q",KING="k",SYMBOLS="pnbrqkPNBRQK",DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",POSSIBLE_RESULTS=["1-0","0-1","1/2-1/2","*"],PAWN_OFFSETS={b:[16,32,17,15],w:[-16,-32,-17,-15]},PIECE_OFFSETS={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},ATTACKS=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],RAYS=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],SHIFTS={p:0,n:1,b:2,r:3,q:4,k:5},FLAGS={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},BITS={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},RANK_1=7,RANK_2=6,RANK_7=1,RANK_8=0,SQUARES={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},ROOKS={w:[{square:SQUARES.a1,flag:BITS.QSIDE_CASTLE},{square:SQUARES.h1,flag:BITS.KSIDE_CASTLE}],b:[{square:SQUARES.a8,flag:BITS.QSIDE_CASTLE},{square:SQUARES.h8,flag:BITS.KSIDE_CASTLE}]},_board=new Array(128),kings={w:EMPTY,b:EMPTY},_turn=WHITE,castling={w:0,b:0},ep_square=EMPTY,half_moves=0,move_number=1,_history=[],header={};return _load(void 0===fen?DEFAULT_POSITION:fen),{WHITE:WHITE,BLACK:BLACK,PAWN:PAWN,KNIGHT:KNIGHT,BISHOP:BISHOP,ROOK:ROOK,QUEEN:QUEEN,KING:KING,SQUARES:function(){for(var keys=[],i=SQUARES.a8;i<=SQUARES.h1;i++)136&i?i+=7:keys.push(algebraic(i));return keys}(),FLAGS:FLAGS,load:function(fen){return _load(fen)},reset:function(){return _reset()},moves:function(options){for(var ugly_moves=generate_moves(options),moves=[],i=0,len=ugly_moves.length;i<len;i++)void 0!==options&&"verbose"in options&&options.verbose?moves.push(make_pretty(ugly_moves[i])):moves.push(move_to_san(ugly_moves[i],!1));return moves},in_check:function(){return _in_check()},in_checkmate:function(){return _in_checkmate()},in_stalemate:function(){return _in_stalemate()},in_draw:function(){return half_moves>=100||_in_stalemate()||_insufficient_material()||_in_threefold_repetition()},insufficient_material:function(){return _insufficient_material()},in_threefold_repetition:function(){return _in_threefold_repetition()},game_over:function(){return half_moves>=100||_in_checkmate()||_in_stalemate()||_insufficient_material()||_in_threefold_repetition()},validate_fen:function(fen){return _validate_fen(fen)},fen:function(){return generate_fen()},board:function(){for(var output=[],row=[],i=SQUARES.a8;i<=SQUARES.h1;i++)null==_board[i]?row.push(null):row.push({type:_board[i].type,color:_board[i].color}),i+1&136&&(output.push(row),row=[],i+=8);return output},pgn:function(options){var newline="object"===(void 0===options?"undefined":_typeof(options))&&"string"==typeof options.newline_char?options.newline_char:"\n",max_width="object"===(void 0===options?"undefined":_typeof(options))&&"number"==typeof options.max_width?options.max_width:0,result=[],header_exists=!1;for(var i in header)result.push("["+i+' "'+header[i]+'"]'+newline),header_exists=!0;header_exists&&_history.length&&result.push(newline);for(var reversed_history=[];_history.length>0;)reversed_history.push(undo_move());for(var moves=[],move_string="";reversed_history.length>0;){var move=reversed_history.pop();_history.length||"b"!==move.color?"w"===move.color&&(move_string.length&&moves.push(move_string),move_string=move_number+"."):move_string=move_number+". ...",move_string=move_string+" "+move_to_san(move,!1),make_move(move)}if(move_string.length&&moves.push(move_string),void 0!==header.Result&&moves.push(header.Result),0===max_width)return result.join("")+moves.join(" ");for(var current_width=0,i=0;i<moves.length;i++)current_width+moves[i].length>max_width&&0!==i?(" "===result[result.length-1]&&result.pop(),result.push(newline),current_width=0):0!==i&&(result.push(" "),current_width++),result.push(moves[i]),current_width+=moves[i].length;return result.join("")},load_pgn:function(pgn,options){function mask(str){return str.replace(/\\/g,"\\")}var sloppy=void 0!==options&&"sloppy"in options&&options.sloppy,newline_char="object"===(void 0===options?"undefined":_typeof(options))&&"string"==typeof options.newline_char?options.newline_char:"\r?\n",header_regex=new RegExp("^(\\[((?:"+mask(newline_char)+")|.)*\\])(?:"+mask(newline_char)+"){2}"),header_string=header_regex.test(pgn)?header_regex.exec(pgn)[1]:"";_reset();var headers=function(header,options){for(var newline_char="object"===(void 0===options?"undefined":_typeof(options))&&"string"==typeof options.newline_char?options.newline_char:"\r?\n",header_obj={},headers=header.split(new RegExp(mask(newline_char))),key="",value="",i=0;i<headers.length;i++)key=headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),value=headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/,"$1"),trim(key).length>0&&(header_obj[key]=value);return header_obj}(header_string,options);for(var key in headers)set_header([key,headers[key]]);if("1"===headers.SetUp&&!("FEN"in headers&&_load(headers.FEN,!0)))return!1;var ms=pgn.replace(header_string,"").replace(new RegExp(mask(newline_char),"g")," ");ms=ms.replace(/(\{[^}]+\})+?/g,"");for(var rav_regex=/(\([^\(\)]+\))+?/g;rav_regex.test(ms);)ms=ms.replace(rav_regex,"");ms=ms.replace(/\d+\.(\.\.)?/g,""),ms=ms.replace(/\.\.\./g,""),ms=ms.replace(/\$\d+/g,"");var moves=trim(ms).split(new RegExp(/\s+/));moves=moves.join(",").replace(/,,+/g,",").split(",");for(var move="",half_move=0;half_move<moves.length-1;half_move++){if(null==(move=move_from_san(moves[half_move],sloppy)))return!1;make_move(move)}if(move=moves[moves.length-1],POSSIBLE_RESULTS.indexOf(move)>-1)(function(object){for(var key in object)return!0;return!1})(header)&&void 0===header.Result&&set_header(["Result",move]);else{if(null==(move=move_from_san(move,sloppy)))return!1;make_move(move)}return!0},header:function(){return set_header(arguments)},ascii:function(){return _ascii()},turn:function(){return _turn},move:function(_move,options){var sloppy=void 0!==options&&"sloppy"in options&&options.sloppy,move_obj=null;if("string"==typeof _move)move_obj=move_from_san(_move,sloppy);else if("object"===(void 0===_move?"undefined":_typeof(_move)))for(var moves=generate_moves(),i=0,len=moves.length;i<len;i++)if(!(_move.from!==algebraic(moves[i].from)||_move.to!==algebraic(moves[i].to)||"promotion"in moves[i]&&_move.promotion!==moves[i].promotion)){move_obj=moves[i];break}if(!move_obj)return null;var pretty_move=make_pretty(move_obj);return make_move(move_obj),pretty_move},undo:function(){var move=undo_move();return move?make_pretty(move):null},clear:function(){return _clear()},put:function(piece,square){return _put(piece,square)},get:function(square){return _get(square)},remove:function(square){return _remove(square)},perft:function(depth){return _perft(depth)},square_color:function(square){if(square in SQUARES){var sq_0x88=SQUARES[square];return(rank(sq_0x88)+file(sq_0x88))%2==0?"light":"dark"}return null},history:function(options){for(var reversed_history=[],move_history=[],verbose=(void 0!==options&&"verbose"in options&&options.verbose);_history.length>0;)reversed_history.push(undo_move());for(;reversed_history.length>0;){var move=reversed_history.pop();verbose?move_history.push(make_pretty(move)):move_history.push(move_to_san(move)),make_move(move)}return move_history}}};exports.Chess=Chess,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Chess}.call(exports,__webpack_require__,exports,module))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.component("VuePgn",__WEBPACK_IMPORTED_MODULE_0__components_App_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_App_vue__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0__components_App_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_App_vue__);__webpack_require__.d(__webpack_exports__,"VuePgn",function(){return __WEBPACK_IMPORTED_MODULE_0__components_App_vue___default.a});var plugin={version:"0.2.0",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(1))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__Board_vue__=__webpack_require__(11),__WEBPACK_IMPORTED_MODULE_0__Board_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Board_vue__),__WEBPACK_IMPORTED_MODULE_1__Notation_vue__=__webpack_require__(12),__WEBPACK_IMPORTED_MODULE_1__Notation_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Notation_vue__),__WEBPACK_IMPORTED_MODULE_2_chess_js__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_2_chess_js___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chess_js__);__webpack_exports__.default={data:function(){return{currentMove:0,position:[],history:[]}},props:{pgn:String,height:Number},components:{Board:__WEBPACK_IMPORTED_MODULE_0__Board_vue___default.a,Notation:__WEBPACK_IMPORTED_MODULE_1__Notation_vue___default.a},methods:{goToMove:function(moveIndex){if(!(moveIndex<0||moveIndex>this.history.length)){this.currentMove=moveIndex,this.game.reset();for(var n=0;n<moveIndex;n++)this.game.move(this.history[n]);this.position=this.game.board()}}},mounted:function(){this.game.load_pgn(this.pgn),this.history=this.game.history(),this.game.reset(),this.position=this.game.board()},created:function(){this.game=new __WEBPACK_IMPORTED_MODULE_2_chess_js___default.a}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"Board",props:{position:Array,height:Number},methods:{pieceStyle:function(piece,rInd,cInd){return{top:12.5*rInd+"%",left:12.5*cInd+"%"}},boardStyle:function(){return{height:this.height+"px",flexBasis:this.height+"px"}}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"Notation",props:{history:Array,currentMove:Number,goToMove:Function,height:Number},computed:{movePairs:function(){for(var p=[],copy=[].concat(_toConsumableArray(this.history));copy.length>0;)p.push(copy.splice(0,2));return p}},methods:{notationStyle:function(){return{height:this.height+"px",maxHeight:this.height+"px"}}}}},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports,__webpack_require__){__webpack_require__(10);var Component=__webpack_require__(0)(__webpack_require__(6),__webpack_require__(15),"data-v-2a3b236c",null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(8);var Component=__webpack_require__(0)(__webpack_require__(7),__webpack_require__(13),"data-v-0bf2ea4e",null);module.exports=Component.exports},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"notation",style:_vm.notationStyle()},[_c("div",{staticClass:"moves"},[_c("div",{staticClass:"wrapper"},[_vm._l(_vm.movePairs,function(pair,pInd){return _vm._l(pair,function(move,mInd){return _c("span",{key:pInd+"_"+mInd,staticClass:"move",class:{current:_vm.currentMove===2*pInd+mInd+1},on:{click:function($event){_vm.goToMove(2*pInd+mInd+1)}}},[0===mInd?_c("span",[_vm._v(_vm._s(pInd+1)+". ")]):_vm._e(),_vm._v("\n          "+_vm._s(move)+"\n        ")])})})],2)]),_vm._v(" "),_c("div",{staticClass:"panel"},[_c("button",{staticClass:"button",on:{click:function($event){_vm.goToMove(0)}}},[_vm._v("<<")]),_vm._v(" "),_c("button",{staticClass:"button",on:{click:function($event){_vm.goToMove(_vm.currentMove-1)}}},[_vm._v("<")]),_vm._v(" "),_c("button",{staticClass:"button",on:{click:function($event){_vm.goToMove(_vm.currentMove+1)}}},[_vm._v(">")]),_vm._v(" "),_c("button",{staticClass:"button",on:{click:function($event){_vm.goToMove(_vm.history.length)}}},[_vm._v(">>")])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{attrs:{id:"pgn"}},[_c("Board",_vm._b({},"Board",{position:_vm.position,height:_vm.height},!1)),_vm._v(" "),_c("Notation",_vm._b({},"Notation",{history:_vm.history,currentMove:_vm.currentMove,goToMove:_vm.goToMove,height:_vm.height},!1))],1)},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"board",style:_vm.boardStyle()},[_vm._l(8,function(r){return _c("div",{key:r,staticClass:"row"},_vm._l(8,function(c){return _c("div",{key:c,staticClass:"square",class:!(1&c&&1&r)&&(1&c||1&r)?"white":"black"})}))}),_vm._v(" "),_vm._l(_vm.position,function(row,rInd){return _vm._l(row,function(piece,cInd){return null!==piece?_c("div",{key:rInd+"_"+cInd,staticClass:"piece",class:""+piece.color+piece.type,style:_vm.pieceStyle(piece,rInd,cInd)}):_vm._e()})})],2)},staticRenderFns:[]}}])});