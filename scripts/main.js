//let myImage = document.getElementById('background');
let myHeader = document.getElementById('header');
let summer = true;
let headerIcon = document.getElementById('headerIcon');
let activePicture = document.getElementById('activePicture');
let topics1 = document.getElementById('topics1');
let topics2 = document.getElementById('topics2');
let topics3 = document.getElementById('topics3');
let topics4 = document.getElementById('topics4');
let topics5 = document.getElementById('topics5');



document.getElementById('winterTitle').style.opacity = '0.3';



myHeader.onclick = function() {
    
    if(summer == true) {
      	document.getElementById('background').style.backgroundImage = "url('./images/winter-background.jpg')";
//	document.getElementById('header').style.backgroundColor = "#ADD8E6";
	headerIcon.src = './images/winter-Icon.png';
	document.getElementById('summerTitle').style.opacity = '0.3';
	document.getElementById('winterTitle').style.opacity = '1';
	summer = false;
    } else {
      	document.getElementById('background').style.backgroundImage = "url('./images/summer-background.jpg')";
//	document.getElementById('header').style.backgroundColor = "#90EE90";
	headerIcon.src = './images/summer-Icon.png';
	document.getElementById('summerTitle').style.opacity = '1';
	document.getElementById('winterTitle').style.opacity = '0.3';
	summer = true;
    }
}



topics1.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-1.jpeg';
}
topics1.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}


topics2.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-2.jpg';
}
topics2.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics3.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-3.jpg';
}
topics3.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics4.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-4.jpg';
}
topics4.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics5.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-5.jpg';
}
topics5.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics6.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-6.jpg';
}
topics6.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics7.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-7.jpg';
}
topics7.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics8.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-8.jpg';
}
topics8.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics9.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-9.jpg';
}
topics9.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics10.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-10.jpg';
}
topics10.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics11.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-11.jpg';
}
topics11.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics12.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-12.jpg';
}
topics12.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics13.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-13.jpg';
}
topics13.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics14.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-14.jpg';
}
topics14.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics15.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-15.jpg';
}
topics15.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}


topics16.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-16.jpg';
}
topics16.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics17.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-17.jpg';
}
topics17.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics18.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-18.jpg';
}
topics18.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics19.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-19.jpg';
}
topics19.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics20.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-20.jpg';
}
topics20.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics21.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-21.jpg';
}
topics21.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics22.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-22.jpg';
}
topics22.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics23.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-23.jpg';
}
topics23.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics24.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-24.jpg';
}
topics24.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}

topics25.onmouseover = function() {
activePicture.style.border = "solid";
activePicture.src = './images/picturespace/nature-25.jpg';
}
topics25.onmouseout = function() {
activePicture.style.border = "none";
activePicture.src = '';
}
