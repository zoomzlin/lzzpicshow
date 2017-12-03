;(function () {
	
	var temp = "";		
	for(var i=1;i<=42;i++){
		//https://raw.githubusercontent.com/zoomzlin/lzzpicshow/master/images/img_2.jpg
		temp = temp + "<div class='item'>";
		temp = temp + "<div class='animate-box'>";
		temp = temp + "<a href='https://raw.githubusercontent.com/zoomzlin/lzzpicshow/master/images/img_"+i+".jpg' class='image-popup fh5co-board-img'><img src='https://raw.githubusercontent.com/zoomzlin/lzzpicshow/master/images/img_"+i+".jpg'></a>";
		temp = temp + "<div class='fh5co-desc'>"+i+"</div>";
		temp = temp + "</div></div>";
	}
	console.log(temp);
	$("#showPic").html(temp);
	/*document.getElementById('showPic').html(temp);*/
}());
