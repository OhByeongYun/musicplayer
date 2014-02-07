/*
 * musicplayer
 *
 *
 * Copyright (c) 2014 OhByeongYun
 * Licensed under the MIT license.
 *
 * Date: 2014-01-08
 */
 
(function(global){
	"use strict";
	
	var $ = document.querySelector.bind(document);
	var $$ = document.createElement.bind(document);
	
	var MusicPlayer = (function(){
		
		var MusicPlayer = function(selector) {
			return new MusicPlayer.fn.ctor(selector);
		};
		
		MusicPlayer.fn = MusicPlayer.prototype = {
			ctor: function(selector) {
				var domWrap = $(selector);
				
				var domAudioPlayer = $$("div");
				domAudioPlayer.id = "audioplayer";
				
				var domController = $$("div");
				domController.className = "controller";
				domAudioPlayer.appendChild(domController);
				
				var domTimeline = $$("div");
				domTimeline.className = "timeline";
				domAudioPlayer.appendChild(domTimeline);
				
				domWrap.appendChild(domAudioPlayer);
			}
		};
		
		MusicPlayer.fn.ctor.prototype = MusicPlayer.fn;
		
		// EXTEND
		MusicPlayer.init = MusicPlayer.fn.init = function(options) {
			console.log(options);
			
			return 1;
		};
		
		// EXPOSE
		return (global.MusicPlayer = global.__ = MusicPlayer);
	})();
})(window);

/*
MusicPlayer.extend = MusicPlayer.fn.extend = function() {
	console.log('extend');
	
	return this;
};
*/

/*
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
		var title = music.title;
		var artist = music.artist;
		
	};
	
	var _createAudioPlayer = function() {
		_player = new Audio();
	};
	
	var _resize = function() {
		var func = function() {
			var _width = window.innerWidth;
			if(_width < 1000) {
				_width = 1000;
			}
			var _controls_width = $("#audioplayer .controls").width();
			$("#audioplayer .nowplaying").width(_width - _controls_width);
		};
		func();
		$(window).resize(func);
	};
	
	return {
		init: init,
		play: play
	};
})();
*/