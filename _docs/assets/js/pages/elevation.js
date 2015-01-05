
$(document).ready(function() {

	elevatedClasses = [0, 1, 2, 3, 4, 5];

	$.each(elevatedClasses, function(i, elevatedClass) {

		$('<div />', {
			class: 'elevation-container col-lg-6 col-md-6 col-sm-6 col-xs-6'
		}).html(function() {
			return $('<div />', {
				class: 'panel panel-default elevated-' + elevatedClass
			}).html(
				$('<div />', {
					class: 'panel-body'
				}).html('<code>.elevated-' + elevatedClass + '</code>')
			);
		}).appendTo($('#elevationExamples'));

		$.each(elevatedClasses, function(x, animatedClass) {

			$('<div />', {
				class: 'animated-elevation-container col-lg-2 col-md-2 col-sm-2 col-xs-2'
			}).html(function() {
				return $('<div />', {
					class: 'panel panel-default elevated-' + elevatedClass + ' animated-elevation-' + animatedClass
				}).attr('data-toggle', 'tooltip').attr('data-placement', 'top').attr('title', '.elevated-' + elevatedClass + ' .animated-elevation-' + animatedClass).html(
					$('<div />', {
						class: 'panel-body'
					}).html('<p>&nbsp;</p>')
				);
			}).appendTo($('#animatedElevationExamples'));

		});

	});

	$('.animated-elevation-container').matchHeight();

});
