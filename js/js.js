// var name = prompt('enter your name');
// if (name == 'null' || name == false) {
// 	alert('Ban chua nhap ten');
// } else {
// 	alert('Chao mung '+name);
// }

// xác nhận tuổi để điều hướng đến trang web thích hợp
// var isConfirm = confirm('Bạn đã đủ 18 tuổi hay chưa thế hả?');
// if (isConfirm == true) {
// 	window.location.assign('18plus.html');
// } else {
// 	window.location.assign('under18.html');
// }

// Tự viết hàm
// function confirm18plus() {
// 	var result = confirm('Bạn chắc chắn đã trên 18 tuổi chưa đấy');
// 	if (result) {
// 		return 'Bạn đã trên 18 tuổi';
// 	} else {
// 		return 'Bạn chưa đủ 18 tuổi';
// 	}
// }
// var msg = confirm18plus();
// console.log(msg);

// hamf setTimeout
// var thong_bao = setTimeout(function() {
// 	alert('Bạn đã chờ 3s');
// }, 3000);
// clearTimeout(thong_bao);
// console.log('Đã clear timeOut');

// hàm setInterval
var isConfirm = confirm('Ban da du 18 tuoi chua');
if (isConfirm) {
	var second = 5;
	var countTime = setInterval(function() {
		if (second == 0) {
			clearInterval(countTime);
			window.location.assign('http://google.com');
		}
		var secondTag = document.getElementById('timer');
		secondTag.innerHTML = second + ' giay nua';
		second--;
	}, 1000);
}
