$(function (){
		
			var rotateTimeOut = function (){
				$('#rotate').rotate({
					angle:0,
					animateTo:2160,
					duration:8000,
					callback:function (){
						alert('网络超时，请检查您的网络设置！');
					}
				});
			};
			var bRotate = false;
		
			var rotateFn = function (awards, angles, txt){
				bRotate = !bRotate;
				$('#rotate').stopRotate();
				$('#rotate').rotate({
					angle:0,
					animateTo:angles+1050,
					duration:8000,
					callback:function (){
						$('.theme-popover-mask').fadeIn(10);
						$('.theme-popover').slideDown(10);
						$("#lipin").html(txt);
						bRotate = !bRotate;
					}
				})
			};
		
			$('.pointer').click(function (){
		
				if(bRotate)return;
				var item = rnd(0,7);
		
				switch (item) {
					case 0:
						//var angle = [26, 88, 137, 185, 235, 287, 337];
						rotateFn(0, 337, '恭喜您抽中一等奖！');
						break;
					case 1:
						//var angle = [88, 137, 185, 235, 287];
						rotateFn(1, 26, '恭喜您抽中七等奖！');
						break;
					case 2:
						//var angle = [137, 185, 235, 287];
						rotateFn(2, 88, '恭喜您抽中六等奖！');
						break;
					case 3:
						//var angle = [137, 185, 235, 287];
						rotateFn(3, 137, '恭喜您抽中五等奖！');
						break;
					case 4:
						//var angle = [185, 235, 287];
						rotateFn(4, 185, '恭喜您抽中四等奖！');
						break;
					case 5:
						//var angle = [185, 235, 287];
						rotateFn(5, 185, '恭喜您抽中四等奖！');
						break;
					case 6:
						//var angle = [235, 287];
						rotateFn(6, 235, '恭喜您抽中三等奖！');
						break;
					case 7:
						//var angle = [287];
						rotateFn(7, 287, '恭喜您抽中二等奖！');
						break;
				}
		
				console.log(item);
			});
		});
		function rnd(n, m){
			return Math.floor(Math.random()*(m-n+1)+n)
		}