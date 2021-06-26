var playerImage = new Image();

var share_point = 360;
var list_share_image = [];
var percent = 100;
setTimeout(function(){
	document.getElementById('start_btn').addEventListener('click',playGame);
	document.getElementById('share_btn').addEventListener('click',shareGame);
	var images = ['img/i1.png','img/i2.png','img/i6.png','img/i4.png','img/i5.png','img/i3.png','img/i7.png','img/i8.png'];
  	var images1 = ['img/s1.jpg','img/s2.jpg','img/s3.jpg','img/s4.jpg','img/s5.jpg','img/s31.jpg','img/s7.jpg','img/s8.jpg'];

	for (var i=0; i < images.length; i++) {
	  list_share_image.push({
	  	i_img : images[i],
	  	s_img : images1[i]
	  });
	}

}, 300);
// FBInstant.startGameAsync().then()

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
	document.getElementById('loading_panel').style.display= "none";

	document.getElementById('screen_1').style.display= "inherit";
	setTimeout(function(){
		document.getElementById('home_screen').style.width = "101%";
	}, 500);
	document.getElementById('choice_1').addEventListener('click',showChoiceScreen2);
	document.getElementById('choice_2').addEventListener('click',showChoiceScreen2);
	document.getElementById('choice_3').addEventListener('click',showChoiceScreen2);
}

function showChoiceScreen2() {

	document.getElementById('screen_1').style.display= "none";
	document.getElementById('screen_2').style.display= "inherit";
	setTimeout(function(){
		document.getElementById('home_screen').style.width = "100%";
	}, 500);
	document.getElementById('choice_4').addEventListener('click',showChoicePhoiAo);
	document.getElementById('choice_5').addEventListener('click',showChoiceMaySay);
}

function shareGame(){


	let shareImage = 'img/s1.jpg';
	let shareHtml = '30';

	if(list_share_image.length > 0 && percent == 30) {
		shareImage = list_share_image[0].s_img;
		shareHtml = '30.html';
	}
	if(list_share_image.length > 0 && percent == 40) {
		shareImage = list_share_image[1].s_img;
		shareHtml = '40.html';
	}
	if(list_share_image.length > 0 && percent == 50) {
		shareImage = list_share_image[2].s_img;
		shareHtml = '50.html';
	}
	if(list_share_image.length > 0 && percent == 60) {
		shareImage = list_share_image[3].s_img;
		shareHtml = '60.html';
	}
	if(list_share_image.length > 0 && percent == 70) {
		shareImage = list_share_image[4].s_img;
		shareHtml = '70.html';
	}
	if(list_share_image.length > 0 && percent == 80) {
		shareImage = list_share_image[5].s_img;
		shareHtml = '501.html';
	}
	if(list_share_image.length > 0 && percent == 90) {
		shareImage = list_share_image[6].s_img;
		shareHtml = '90.html';
	}
	if(list_share_image.length > 0 && percent == 100) {
		shareImage = list_share_image[7].s_img;
		shareHtml = '100.html';
	}


	FB.ui(
        {
            method: 'share',
            // display: 'popup',
            name: 'Máy sấy LG DUAL Inverter Heat Pump',
            hashtag: '#lg',
            quote: 'Máy sấy LG DUAL Inverter Heat Pump',
            // href: `https://dodohanhphucquanao.ga/${shareImage}`,
            href: `https://dodohanhphucquanao.ga/${shareHtml}`,
            // link: `https://www.lg.com/vn/may-giat-va-may-say/lg-dvhp09w`,
            // picture: `https://dodohanhphucquanao.ga/${shareImage}`,
            thumbnail: `https://dodohanhphucquanao.ga/${shareImage}`,
            caption: 'Máy sấy LG DUAL Inverter Heat Pump',
            description: `Dialogs provide a simple, 
                          consistent interface for applications to 
                          interface with users.`
        },
        function(response) {
            if (response && response.post_id) {
                document.getElementById('screen_5').style.display="none";
				document.getElementById('loading_panel').style.display= "inherit";
				document.getElementById('logo_lg').style.display="inherit";
				document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud.jpg')";
            } else {
                document.getElementById('screen_5').style.display="none";
				document.getElementById('loading_panel').style.display= "inherit";
				document.getElementById('logo_lg').style.display="inherit";
				document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud.jpg')";
            }
        }
    );
}

function showChoicePhoiAo() {
	document.getElementById('screen_2').style.display= "none";
	document.getElementById('screen_3').style.display= "inherit";
	setTimeout(function(){
		document.getElementById('home_screen').style.width = "101%";
	}, 500);
	document.getElementById('choice_30').addEventListener('click',function() { showResult(30) });
	document.getElementById('choice_40').addEventListener('click',function() { showResult(40) });
	document.getElementById('choice_50').addEventListener('click',function() { showResult(50) });
	document.getElementById('choice_60').addEventListener('click',function() { showResult(60) });
}

function showChoiceMaySay() {
	document.getElementById('screen_2').style.display= "none";
	document.getElementById('screen_4').style.display= "inherit";
	setTimeout(function(){
		document.getElementById('home_screen').style.width = "101%";
	}, 500);
	document.getElementById('choice_70').addEventListener('click',function() { showResult(70) });
	document.getElementById('choice_80').addEventListener('click',function() { showResult(80) });
	document.getElementById('choice_90').addEventListener('click',function() { showResult(90) });
	document.getElementById('choice_100').addEventListener('click',function() { showResult(100) });
}

function showResult(nun_percent) {
	
	document.getElementById('screen_3').style.display= "none";
	document.getElementById('screen_4').style.display= "none";
	document.getElementById('screen_5').style.display= "inherit";
	
	percent = nun_percent;

	document.getElementById('logo_lg').style.display="none";
	document.getElementById('home_screen').style.backgroundImage = "url('../img/backgroud_s.jpg')";
	setTimeout(function(){
		document.getElementById('home_screen').style.width = "100%";
	}, 500);

	if(list_share_image.length > 0 && nun_percent == 30) {
		document.getElementById('img_content').src = list_share_image[0].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 40) {
		document.getElementById('img_content').src = list_share_image[1].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 50) {
		document.getElementById('img_content').src = list_share_image[2].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 60) {
		document.getElementById('img_content').src = list_share_image[3].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 70) {
		document.getElementById('img_content').src = list_share_image[4].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 80) {
		document.getElementById('img_content').src = list_share_image[5].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 90) {
		document.getElementById('img_content').src = list_share_image[6].i_img;
	}
	if(list_share_image.length > 0 && nun_percent == 100) {
		document.getElementById('img_content').src = list_share_image[7].i_img;
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