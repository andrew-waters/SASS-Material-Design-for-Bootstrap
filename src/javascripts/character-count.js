// CHARACTER COUNT PLUGIN
// BEN CAMPBELL 2013

var uuids = []; // REQUIRED TO ENSURE ALL INSTANCES ARE UNIQUE
var n = "{n}"; // PLACEHOLDER TOKEN FOR REMAINING CHARACTERS

$.charCount = {
	id: "CharCount",
	version: "1.0",
	defaults: {
		limit:100, // (INTEGER) Default character limit
		low: 10, // (INTEGER) Indicate length is approaching limit
		hardlimit: true, // (BOOLEAN) Enforce a hard limit and do not allow any more characters to be added
		overlimitclass: "error", // (STRING) CSS Class to be added to input when over limit
		lowcountclass: "count-low", // (STRING) CSS Class to be added to remanining number when 'low' is reached
		charsremainingclass: "chars-remaining", // (STRING) CSS Class added to 'Characters Remaining' text + number
		countup: false, // (BOOLEAN) Choose whether the character count is ascending or descending
		charmessage: "Characters remaining: <span>" + n + "</span>" // (STRING) Customise the 'Remaining' text {n} is required placeholder token
	}
};

// javascript doen't count newlines the same as maxlength on inputs - use this to normalise!
function countCharacters(string) {

	var newLines = string.match(/(\r\n|\n|\r)/g);
	var addition = 0;
	if(newLines != null) {
		addition = newLines.length;
	}

	return (string.length + addition);

}

(function ($) {

	$.fn.extend({

		charCount: function(options) {

			return this.each(function () {

				var sid = new Date().getTime();
				if (uuids.indexOf(sid) > -1) sid +=1;
				uuids.push(sid);

				var $t = $(this), opts = $.extend({},$.charCount.defaults,options);

				$(this).on("keyup keypress blur change", function() {

					rm = countCharacters($t.val()) + " / " + options.limit;
					frc = false;

					wrapper = $t.closest(".form-group");

					countCharacters($t.val()) == options.limit ?
						(
							wrapper.addClass(opts.overlimitclass)
						) :
						(
							countCharacters($t.val()) >= (options.limit  - options.low) ?
								wrapper.addClass(opts.lowcountclass).removeClass(opts.overlimitclass) :
								wrapper.removeClass(opts.overlimitclass).addClass(opts.lowcountclass)
						);

					if(countCharacters($t.val()) < (options.limit  - options.low))
						wrapper.removeClass(opts.lowcountclass).removeClass(opts.overlimitclass);

					wrapper.find("span[data-value='cc_" + sid + "']").html(opts.charmessage.replace(n, rm) );    

				})

				$t.after("<div class='" + opts.charsremainingclass + "'><span data-value='cc_" + sid + "'>" + opts.charmessage.replace("[n]",opts.limit) + "</span></div>");

			});

		}

	});
	
	$('.character-count').each(function(i, v) {

		var el = $(this);

		settings = {
			limit: el.attr('data-cc-limit') ? el.attr('data-cc-limit') : 10,
			low: el.attr('data-cc-low') ? el.attr('data-cc-low') : 2,
			hardlimit: el.attr('data-cc-hardlimit') ? el.attr('data-cc-hardlimit') : el.attr('data-cc-limit') ? el.attr('data-cc-limit') : 10,
			charmessage: el.attr('data-cc-charmessage') ? el.attr('data-cc-charmessage') : "{n}",
			countup: true
		}

		el.attr("maxlength", settings.limit);

		el.charCount(settings)
		el.blur()

	});

})(jQuery);
