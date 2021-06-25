var playerImage = new Image();

var share_point = 360;
var list_share_image = [];
var percent = 100;

FBInstant.initializeAsync()
  .then(function(){
  	var processValue = 0;

  	var images = ['img/i1.png','img/i2.png','img/i6.png','img/i4.png','img/i5.png','img/i3.png','img/i7.png','img/i8.png'];
  	var images1 = ['img/s1.jpg','img/s2.jpg','img/s3.jpg','img/s4.jpg','img/s5.jpg','img/s31.jpg','img/s7.jpg','img/s8.jpg'];

	for (var i=0; i < images.length; i++) {
	  var progress = ((i+1)/images.length) * 100;  
	  var temp = new Image();
	  var temp1 = new Image();
	  temp.crossOrigin = 'anonymous';
	  temp.src = images[i];
	  temp1.crossOrigin = 'anonymous';
	  temp1.src = images1[i];
	  list_share_image.push({
	  	i_img : temp,
	  	s_img : temp1
	  });
	  // Informs the SDK of loading progress
	  FBInstant.setLoadingProgress(progress);
	}
	
	FBInstant.startGameAsync().then(function() {
		console.log('starting game');

		playerImage.crossOrigin = 'anonymous';
		var playerId = FBInstant.player.getID();
		var playerName = FBInstant.player.getName();
		playerImage.src = FBInstant.player.getPhoto();

		document.getElementById('start_btn').addEventListener('click',playGame);
		document.getElementById('share_btn').addEventListener('click',shareGame);

		// start_btn.style.display="inherit";
	})

  }
);


function onStart() {
	console.log('starting game');
    FBInstant.startGameAsync()
	  .then(function() {
	  var contextId = FBInstant.context.getID();
	  var contextType = FBInstant.context.getType();

	  var playerName = FBInstant.player.getName();
	  var playerPic = FBInstant.player.getPhoto();
	  var playerId = FBInstant.player.getID();

	  game.start();
	});
}

function toDataURL(src) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        let canvas = document.createElement('CANVAS');
        canvas.height = 1820;
        canvas.width = 1125;
        canvas.getContext('2d').drawImage(this, 0, 0, 1125, 1820);
        canvas.toDataURL();
    };
    img.src = src;
    return img;
}

function playGame() {
	console.log('clickPlace');
	let loading_panel = document.getElementById('loading_panel');
	loading_panel.style.display= "none";
	setTimeout(function(){ 
		screen_1.style.display= "inherit";
		
		let choice_1 = document.getElementById('choice_1');
		let choice_2 = document.getElementById('choice_2');
		let choice_3 = document.getElementById('choice_3');
		choice_1.addEventListener('click',showChoiceScreen2);
		choice_2.addEventListener('click',showChoiceScreen2);
		choice_3.addEventListener('click',showChoiceScreen2);

	}, 200);
}

function showChoiceScreen2() {
	let screen_1 = document.getElementById('screen_1');
	let screen_2 = document.getElementById('screen_2');
	screen_1.style.display= "none";
	screen_2.style.display= "inherit";
	let choice_4 = document.getElementById('choice_4');
	let choice_5 = document.getElementById('choice_5');
	choice_4.addEventListener('click',showChoicePhoiAo);
	choice_5.addEventListener('click',showChoiceMaySay);
}

function shareGame(){
	console.log('shareGame');
	let shareImage = new Image();
    shareImage.crossOrigin = 'Anonymous';

    shareImage.onload = function () {
        let canvas = document.createElement('CANVAS');
        canvas.height = 1820;
        canvas.width = 1125;
        canvas.getContext('2d').drawImage(this, 0, 0, 1125, 1820);
        var imgData = canvas.toDataURL('image/jpeg');
        FBInstant.shareAsync({
		  	intent: 'SHARE',
		  	image: imgData,
		  	text: 'Chơi game với tui!',
		  	data: { myReplayData: '.kaka kaka kaa' }
		}).then(function() {
			console.log('book');
			// let share_body = document.getElementById('share_body');
			// share_body.style.display="none";
			let screen_5 = document.getElementById('screen_5');
			screen_5.style.display="none";
			let loading_panel = document.getElementById('loading_panel');
			loading_panel.style.display= "inherit";
			document.getElementById('logo_lg').style.display="inherit";
			document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud.jpg')";
		});
    };

	if(list_share_image.length > 0 && percent == 30) {
		shareImage.src = list_share_image[0].s_img.src
	}
	if(list_share_image.length > 0 && percent == 40) {
		shareImage.src = list_share_image[1].s_img.src
	}
	if(list_share_image.length > 0 && percent == 50) {
		shareImage.src = list_share_image[2].s_img.src
	}
	if(list_share_image.length > 0 && percent == 60) {
		shareImage.src = list_share_image[3].s_img.src
	}
	if(list_share_image.length > 0 && percent == 70) {
		shareImage.src = list_share_image[4].s_img.src
	}
	if(list_share_image.length > 0 && percent == 80) {
		shareImage.src = list_share_image[5].s_img.src
	}
	if(list_share_image.length > 0 && percent == 90) {
		shareImage.src = list_share_image[6].s_img.src
	}
	if(list_share_image.length > 0 && percent == 100) {
		shareImage.src = list_share_image[7].s_img.src
	}
}

function showChoicePhoiAo() {
	let screen_2 = document.getElementById('screen_2');
	let screen_3 = document.getElementById('screen_3');
	screen_2.style.display= "none";
	screen_3.style.display= "inherit";
	let choice_30 = document.getElementById('choice_30');
	let choice_40 = document.getElementById('choice_40');
	let choice_50 = document.getElementById('choice_50');
	let choice_60 = document.getElementById('choice_60');
	choice_30.addEventListener('click',function() { showResult(30) });
	choice_40.addEventListener('click',function() { showResult(40) });
	choice_50.addEventListener('click',function() { showResult(50) });
	choice_60.addEventListener('click',function() { showResult(60) });
}

function showChoiceMaySay() {
	let screen_2 = document.getElementById('screen_2');
	let screen_4 = document.getElementById('screen_4');
	screen_2.style.display= "none";
	screen_4.style.display= "inherit";
	let choice_70 = document.getElementById('choice_70');
	let choice_80 = document.getElementById('choice_80');
	let choice_90 = document.getElementById('choice_90');
	let choice_100 = document.getElementById('choice_100');
	choice_70.addEventListener('click',function() { showResult(70) });
	choice_80.addEventListener('click',function() { showResult(80) });
	choice_90.addEventListener('click',function() { showResult(90) });
	choice_100.addEventListener('click',function() { showResult(100) });
}

function showResult(nun_percent) {
	
	let screen_3 = document.getElementById('screen_3');
	let screen_4 = document.getElementById('screen_4');
	let screen_5 = document.getElementById('screen_5');
	screen_3.style.display= "none";
	screen_4.style.display= "none";
	screen_5.style.display= "inherit";
	percent = nun_percent;

	document.getElementById('logo_lg').style.display="none";
	document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud_s.jpg')";

	if(list_share_image.length > 0 && nun_percent == 30) {
		document.getElementById('img_content').src = list_share_image[0].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 40) {
		document.getElementById('img_content').src = list_share_image[1].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 50) {
		document.getElementById('img_content').src = list_share_image[2].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 60) {
		document.getElementById('img_content').src = list_share_image[3].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 70) {
		document.getElementById('img_content').src = list_share_image[4].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 80) {
		document.getElementById('img_content').src = list_share_image[5].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 90) {
		document.getElementById('img_content').src = list_share_image[6].i_img.src;
	}
	if(list_share_image.length > 0 && nun_percent == 100) {
		document.getElementById('img_content').src = list_share_image[7].i_img.src;
	}

}



function hideHome() {
    const selector = document.getElementById('home_panel')
    selector.classList.add('magictime', 'puffOut')
}

function aniShowImage() {
    const selector = document.getElementById('img_avatar')
    selector.classList.add('magictime', 'vanishIn')
}

function aniShowDetail() {
    const selector = document.getElementById('detail_panel')
    selector.classList.add('magictime', 'puffIn')
}