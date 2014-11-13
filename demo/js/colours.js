
$(document).ready(function() {

	colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

	textClasses = [50, 100, 200, 300, 400, 500, 600, 700, 800, 'A100', 'A200', 'A400', 'A700'];
	textClassesAlt = [50, 100, 200, 300, 400, 500, 600, 700, 800];

	$.each(colors, function(i, color) {

		textClassesToUse = $.inArray(color, ['brown', 'grey', 'blue-grey']) == -1 ? textClasses : textClassesAlt;

	//	build the text colours
		$container = $('<div />', {
			class: 'text-color-container col-lg-2 col-md-3 col-sm-4 col-xs-6',
			id: 'text-color-' + color
		}).appendTo('#text-colors');

		colorString = color.replace("-", " ");

		$container.append('<hr /><h4>' + colorString + '</h4>');

		$('<p />').appendTo('#text-color-' + color);

		$.each(textClassesToUse, function(i, textClass) {

			$p = $('#text-color-' + color + ' p');

			$('<span />', {
				class: 'text-' + color + '-' + textClass,
				html: '.text-' + color + '-' + textClass
			}).appendTo($p);

			if(i < (textClasses.length - 1)) {
				$container.find('p').append('<br />');
			}

		});

	//	build the background colours
		$container = $('<div />', {
			class: 'background-color-container col-lg-4 col-md-4 col-sm-6 col-xs-6',
			id: 'background-color-' + color
		}).appendTo('#background-colors');

		colorString = color.replace("-", " ");

		$container.append('<h4 class="bg-' + color  + '">' + colorString + '<span class=""></span></h4>');

		$('<p />').appendTo('#background-color-' + color);

		$.each(textClassesToUse, function(i, textClass) {

			$p = $('#background-color-' + color + ' p');

			$('<span />', {
				class: 'center-block bg-' + color + ' bg-' + textClass,
				html: '<span class="textClassLabel">' + textClass + '</span><span class="textClass">.bg-' + color + '.bg-' + textClass + '</span><span class="clearfix"></span>'
			}).appendTo($p);

		});

	});

	$('.text-color-container, .background-color-container').matchHeight();

});
