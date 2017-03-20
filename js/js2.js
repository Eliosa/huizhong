//导航栏
var nav = {
	$LiNode: $('.header-bar>li'), //第一级a标签
	$A2Node: $('.nav>dd>a'), //第二级a标签
	init: function() {
		_this = this;
		//当触发第一级a标签时
		_this.$LiNode.mouseover(function() {
			if($(this).children().length > 1) {
				_this.act($(this).children().eq(1));
			}
		});
		_this.$LiNode.mouseleave(function() {
			if($(this).children().length > 1) {
				_this.leave($(this).children().eq(1));
			}
		});
	},
	act: function(curDl) {
		var _this = this;
		//		curDl.addClass('nav').slideDown();
		curDl.stop(true, true).slideDown();
		_this.$A2Node = $('.nav>dd>a');
		_this.$A2Node.mouseover(function() {
			if($(this).siblings().length > 0) {
				//				$(this).siblings(0).addClass('nav nav2').slideDown();
				$(this).siblings(0).slideDown();
			}
		});
		_this.$A2Node.mouseleave(function() {
			if($(this).siblings().length > 0) {
				$(this).siblings(0).slideUp(function() {
					//					$(this).removeClass('nav nav2');
				});
			}
		});
	},
	leave: function(curDL) {
		curDL.slideUp(function() {
			//			$(this).removeClass('nav');
		})
	}
};

//导航栏下的图片切换
var silderMove = {
	$silederNode: $('.main-silder-block li'),
	$imgNode: $('.main-silder-img li'),
	$leftNode: $('.main-silder .left'),
	$rightNode: $('.main-silder .right'),
	move: function(curPos, oldPos) {
		var _this = this;
		_this.$silederNode.eq(curPos).addClass('current');
		_this.$silederNode.eq(oldPos).removeClass('current');
		_this.$imgNode.eq(oldPos).stop(true, true).fadeOut();
		_this.$imgNode.eq(curPos).stop(true, true).fadeIn();
	},
	getOldPos: function() {
		var _this = this;
		var i = 0;
		for(; i < _this.$silederNode.length; i++) {
			if(_this.$silederNode.eq(i).hasClass('current')) {
				break;
			}
		}
		return i;
	},
	init: function() {
		var _this = this;
		var curPos, oldPos;
		_this.$silederNode.mouseover(function() {
			curPos = $(this).index();
			window.clearInterval(stop);
			oldPos = _this.getOldPos();
			_this.move(curPos, oldPos);
		});
		_this.$imgNode.mouseenter(function() {
			console.log('abc');
			window.clearInterval(stop);
		});
		var stop = window.setInterval(function() {
			oldPos = _this.getOldPos();
			if(oldPos + 1 < _this.$silederNode.length) {
				curPos = oldPos + 1;
			} else {
				curPos = 0;
			}
			_this.move(curPos, oldPos);
		}, 1000);
		_this.$leftNode.click(function() {
			oldPos = _this.getOldPos();
			if(oldPos == 0) {
				curPos = _this.$silederNode.length - 1;
			} else {
				curPos = oldPos - 1;
			}
			_this.move(curPos, oldPos);
		});
		_this.$rightNode.click(function() {
			oldPos = _this.getOldPos();
			if(oldPos == _this.$silederNode.length - 1) {
				curPos = 0;
			} else {
				curPos = oldPos + 1;
			}
			_this.move(curPos, oldPos);
		});
	}
};
//四个圈圈滑动的东西
var intro_Move = {
	$PosNode: $('.main-intro .main-show'), //需要被缩小的块
	$dlNode: $('.main-intro-dl'), //获取所有的dl块
	introMove: function(curPos) {
		var _this = this;
		_this.$PosNode.removeClass('main-show').stop(true).animate({
			width: '160px'
		}, 500, function() {
			$(this).children('dd').css('width', '0');
		});
		_this.$dlNode.eq(curPos).addClass('main-show').stop(true).animate({
			width: '480px'
		}, 500);
		_this.$dlNode.eq(curPos).children('dd').eq(0).stop(true).animate({
			width: '292px'
		}, 500);
		_this.$PosNode = $('.main-intro .main-show');
	},
	init: function() {
		var _this = this;
		_this.$dlNode.mouseover(function() {
			if($(this).index() != _this.$PosNode.index()) {
				_this.introMove($(this).index());

			}
		});
	}
};
//首页剩下的部分
var Xmove = {
	$RulNode: $('.main-aboutUS-main .right li'),
	$sLeftNode: $('.main-aboutUS-main .slider li').eq(0),
	$sRightNode: $('.main-aboutUS-main .slider li').eq(1),
	getcurPos: function() {
		var i;
		console.log('leng', this.$RulNode.length)
		for(i = 0; i < this.$RulNode.length; i++) {
			if(this.$RulNode.hasClass('.current')) {
				break;
			}
		}
		return i;
	},
	move1: function(curPos, nextPos) {
		var _this = this;
		_this.$RulNode.eq(curPos).fadeOut();
		_this.$RulNode.eq(nextPos).fadeIn();
	},
	init: function() {
		var _this = this;
		var nextPos;
		//		_this.$sLeftNode.click(function(){
		//			if(_this.getcurPos()==0){
		//				nextPos=_this.$RulNode.length-1;
		//			}else{
		//				nextPos=_this.getcurPos()-1;
		//			}
		//			_this.move1(_this.getcurPos(),nextPos);
		//		});
		//		_this.$sRightNode.click(function(){
		//			if(_this.getcurPos()==_this.$RulNode.length-1){
		//				nextPos=0;
		//			}else{
		//				nextPos=_this.getcurPos()+1;
		//			}
		//			_this.move1(_this.getcurPos(),nextPos);
		//		});
	}
}
var Xmove2 = {
	$aboutUsNode: $('.main-aboutUS-main .right'),
	$leftNode2: $('.main-aboutUS-main .slider li').eq(0),
	$rightNode2: $('.main-aboutUS-main .slider li').eq(1),
	$leftNode: $('.main-ourClient .slider li').eq(0),
	$rightNode: $('.main-ourClient .slider li').eq(1),
	$clientsNode: $('.main-ourClient .clients'),
	moveRight: function(x, ulNode) {
		var _this = this;
		//		_this.$clientsNode.children().eq(0).animate({marginLeft:-x+'px'},1000,function(){
		//			_this.$clientsNode.append(_this.$clientsNode.children().eq(0));
		//			_this.$clientsNode.children().last().css('marginLeft','0');
		//		});
		ulNode.children().eq(0).animate({
			marginLeft: -x + 'px'
		}, 1000, function() {
			ulNode.append(ulNode.children().eq(0));
			ulNode.children().last().css('marginLeft', '0');
		});
	},
	moveLeft: function(x,ulNode) {
		var _this = this;
//		_this.$clientsNode.children().last().css('marginLeft', -x + 'px');
//		_this.$clientsNode.children().last().insertBefore(_this.$clientsNode.children().first());
//		_this.$clientsNode.children().eq(0).animate({
//			marginLeft: '0px'
//		}, 1000);
		ulNode.children().last().css('marginLeft', -x + 'px');
		ulNode.children().last().insertBefore(ulNode.children().first());
		ulNode.children().eq(0).animate({
			marginLeft: '0px'
		}, 1000);
	},
	init: function() {
		var _this = this;
		_this.$rightNode.click(function() {
			_this.moveRight(206,_this.$clientsNode);
		});
		_this.$leftNode.click(function() {
			_this.moveLeft(206,_this.$clientsNode);
		});
		_this.$leftNode2.click(function() {
			console.log('in');
			_this.moveLeft(491,_this.$aboutUsNode);
		});
		_this.$rightNode2.click(function() {
			_this.moveRight(491,_this.$aboutUsNode);
		});
	}
}
Xmove2.init();
Xmove.init();
nav.init();
silderMove.init();
intro_Move.init();
var Products_nav = {
	$liNode: $('.main-nav-ul .hover'),
	pro_nav: function() {

	},
	init: function() {
		var _this = this;
		_this.$liNode.mouseover(function() {

		});
	}
}
Products_nav.init();