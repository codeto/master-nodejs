$("#sign-up-form").submit(function(e){
	e.preventDefault();
	$("#notice").html("<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-reload'><rect x='0' y='0' width='100' height='100' fill='none' class='bk'></rect><g><path d='M50 15A35 35 0 1 0 74.787 25.213' fill='none' stroke='#2fc296' stroke-width='12px'></path><path d='M50 0L50 30L66 15L50 0' fill='#2fc296'></path><animateTransform attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='1s' repeatCount='indefinite'></animateTransform></g></svg>");
	var data = this.serialize;
	$.ajax({
		url:"http://localhost:3000/signup",
		data:data,
		type:"POST",
		dataType:"JSON",
		success:function(response){
			if (response.act == 1){
				$("#notice").html("<span style='color:black'>Done</span>");
			} else {
				$("#notice").html("<span style='color:red'>Something was wrong</span>");
			}
		}
	});
});
$('.dl-ajax-act').click(function(){
	var act = $(this).data("id");
});