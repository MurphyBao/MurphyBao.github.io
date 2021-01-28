window.addEventListener("load", function() {
var imgs = document.getElementsByTagName('img')
var btn = document.getElementsByTagName('button')[0]

var num = 0;
var t1 = '';
var t2 = '';
var time = 60;
var f = 0;
btn.onclick = function () {
	time=60
	f=0
	btn.style.visibility = 'hidden'
	t2 = setInterval(function () {
		num = Math.floor(Math.random() * imgs.length)
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.visibility = 'hidden'
			imgs[i].src = './images/IMG_9910的副本.png'
		}
		imgs[num].style.visibility = 'visible'
		imgs[num].onclick = function () {
			this.src = './images/mouse2的副本.png'
			f++
			var that = this
			setTimeout(function () {
				that.style.visibility = 'hidden'
			}, 200)
		}
	}, 2000)
	t1 = setInterval(function () {
		console.log(time)
		time--;
		if (time < 0) {
			clearInterval(t1)
			clearInterval(t2)
			btn.style.visibility = 'visible'
			for (var j = 0; j < imgs.length; j++) {
				imgs[j].style.visibility = 'hidden'
			}
		}
		
	}, 1000)
}
});

