var MediaPlayer = (function(){
	var _state = "stop";
	var _isVolue = false;
	var _isShuffle = false;
	var _isRandom = false;
	
	var _player = null;
	
	var init = function() {
		_resize();
		_createAudioPlayer();
		
		return this;
	};
	
	var play = function(music) {
	};
	
	var _createAudioPlayer = function() {
		_player = new Audio();
	};
	
	var _resize = function() {
		var func = function() {
			var _wWindow = window.innerWidth;
			if(_wWindow < 1000) {
				_wWindow = 1000;
			}
			var _wControls = $("#audioplayer .controls").width();
			$("#audioplayer .nowplaying").width(_wWindow - _wControls);
		};
		func();
		$(window).resize(func);
	};
	
	return {
		init: init,
		play: play
	};
})();