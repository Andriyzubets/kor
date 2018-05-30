document.querySelector('.left').onmouseover = function() {
	document.querySelector('.right').classList.add('inactive');
	document.querySelector('.left span').classList.add('active');

	document.querySelector('.table').classList.add('inactive');
	document.querySelector('.main').classList.add('inactive');
	document.querySelector('video.video1').play();
	document.querySelector('video.video1').classList.add('active');
}
document.querySelector('.left').onmouseout = function() {
	document.querySelector('.right').classList.remove('inactive');
	document.querySelector('.left span').classList.remove('active');

	document.querySelector('.table').classList.remove('inactive');
	document.querySelector('.main').classList.remove('inactive');

	document.querySelector('video.video1').pause();
	document.querySelector('video.video1').classList.remove('active');
}
document.querySelector('.right').onmouseover = function() {
	document.querySelector('.left').classList.add('inactive');
	document.querySelector('.right span').classList.add('active');
	document.querySelector('.table').classList.add('inactive');
	document.querySelector('.main').classList.add('inactive');
	document.querySelector('.lay1').classList.add('active');
}
document.querySelector('.right').onmouseout = function() {
	document.querySelector('.left').classList.remove('inactive');
	document.querySelector('.right span').classList.remove('active');

	document.querySelector('.table').classList.remove('inactive');
	document.querySelector('.main').classList.remove('inactive');
	document.querySelector('.lay1').classList.remove('active');
}