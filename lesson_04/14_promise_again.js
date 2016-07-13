setTimeout(function() {
	console.log("Hello world");
	setTimeout(function() {
		console.log("Toi la Son");
		setTimeout(function() {
			console.log("Ha Anh Son");
		},1000)
	}, 3000);
}, 5000);