
$(document).ready(function() {

	autosize($('textarea.autosize'));

	$("form.validate").each(function() {
		$(this).validate();
	});

});
