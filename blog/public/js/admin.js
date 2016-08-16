$("#sign-up-form").submit(function(e){
	e.preventDefault();
	$("#notice").html("<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-reload'><rect x='0' y='0' width='100' height='100' fill='none' class='bk'></rect><g><path d='M50 15A35 35 0 1 0 74.787 25.213' fill='none' stroke='#2fc296' stroke-width='12px'></path><path d='M50 0L50 30L66 15L50 0' fill='#2fc296'></path><animateTransform attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='1s' repeatCount='indefinite'></animateTransform></g></svg>");
	var data = $(this).serialize();
	$.ajax({
		url:"http://localhost:3000/signup",
		data:data,
		type:"POST",
		dataType:"JSON",
		success:function(response){
			if (response.act == 1){
				setTimeout(function(){$("#notice").html("<span style='color:black'>Done</span>")},2000);
				setTimeout(function(){$('#notice').html("")},4000);
			} else {
				$("#notice").html("<span style='color:red'>Something was wrong</span>");
			}
		}
	});
});
$('.dl-ajax-act').click(function(){
	var act = $(this).data("act");
	var uid = $(this).data("id");
	if (act == 'Remove'){
		if (confirm('Do you want delete this ?')){
			$('.notice').css('background-color','#cecece');
			$('.notice').html("<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-reload'><rect x='0' y='0' width='100' height='100' fill='none' class='bk'></rect><g><path d='M50 15A35 35 0 1 0 74.787 25.213' fill='none' stroke='#2fc296' stroke-width='12px'></path><path d='M50 0L50 30L66 15L50 0' fill='#2fc296'></path><animateTransform attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' dur='1s' repeatCount='indefinite'></animateTransform></g></svg>");
			$.ajax({
				url:"http://localhost:3000/act-api",
				data:{act:act,id:uid},
				type:"POST",
				dataType:"JSON",
				success:function(response){
					if (response.kq == 1){
						$('.notice').html("Done");
						$('.notice').html("");
						$('.'+uid).remove();
						$('.notice').css('background-color','');
					}
				}
			});
		}
	} else if (act == 'Add'){
		$('.adduser').modal();
	} else if (act == 'Remove-Post'){
		if (confirm('Do you want delete this ?')){
			$.ajax({
				url:"http://localhost:3000/act-api",
				data:{act:act,id:uid},
				type:"DELETE",
				dataType:"JSON",
				success:function(response){
					if (response.kq == 1){
						$('.notice').html("Done");
						$('.notice').html("");
						$('.'+uid).remove();
						$('.notice').css('background-color','');
					}
				}
			});
		}
	}
});
$('#frmpost').submit(function(e){
	e.preventDefault();
	var data = $(this).serialize();
	var base_url = location.protocal + "//" + document.domain + ":" + location.port;
	
	$.ajax({
		url:base_url + 'admin/edit-post',
		data:data,
		type:"PUT",
		dataType:"JSON",
		success:function(res){
			console.log(res);
		}
	})
})