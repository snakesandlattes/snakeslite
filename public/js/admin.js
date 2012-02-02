$(document).ready(function() {
	$("#submit_post_button").click(function() {
		submit_post_form();
	});
});

function submit_post_form() {
	$("#submit_post_button").attr("disabled", "disabled");
	var datastring = $("#post_form").serialize();

	$.ajax({
		url: "/ajax/post/posts",
		type: "post",
		data: datastring,
		success: function(d) {
			alert("Saved!");
			$("#submit_postbutton").removeAttr("disabled");

			if(isNumber(d)) {
				window.location = "/admin/posts/" + d;
			}
		}
	});
}
