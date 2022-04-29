$(document).ready(function () {
$("#submit").click(function () {
	$.post("/request",
		{
			name: "Pranav",
			designation: "UG"
		},
		function (data, status) {
			console.log(data)
            // alert(data[0].name_recieved)
			localStorage.setItem("name","Pranav")
			localStorage.setItem("designation","UG")
		});
});
});
