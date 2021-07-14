$(document).ready(function() {

	var startTime = new Date( "Jan 25 2020 17:02:37" );
	startTime = startTime.getTime();
	
	var currentTime = new Date();
	currentTime = currentTime.getTime();
	
	var endTime = new Date( "Jan 31 2020 17:02:37" );
	endTime = endTime.getTime();
	
	$('.countdown-timer').final_countdown({
		
		'start': (startTime/1000),
		'end': (endTime/1000), 
		'now': (currentTime/1000), 
		selectors: {
			value_seconds:'.clock-seconds .val',
			canvas_seconds:'canvas-seconds',
			value_minutes:'.clock-minutes .val',
			canvas_minutes:'canvas-minutes',
			value_hours:'.clock-hours .val',
			canvas_hours:'canvas-hours',
			value_days:'.clock-days .val',
			canvas_days:'canvas-days'
		},
		seconds: {
			//borderColor:'#c90103',
			borderColor:$('.type-seconds').attr('data-border-color'),
			borderWidth:'5',
		},
		minutes: {
			//borderColor:'#c90103',
			borderColor:$('.type-minutes').attr('data-border-color'),
			borderWidth:'5'
		},
		hours: {
			//borderColor:'#c90103',
			borderColor:$('.type-hours').attr('data-border-color'),
			borderWidth:'5'
		},
		days: {
			//borderColor:'#c90103',
			borderColor:$('.type-days').attr('data-border-color'),
			borderWidth:'5'
		}
	});
});

jQuery(window).on("resize", function (e) {
	
	var startTime = new Date( "Jan 25 2020 17:02:37" );
	startTime = startTime.getTime();
	
	var currentTime = new Date();
	currentTime = currentTime.getTime();
	
	var endTime = new Date( "Jan 31 2020 17:02:37" );
	endTime = endTime.getTime();
	
	$('.countdown-timer').final_countdown({
		
		'start': (startTime/1000),
		'end': (endTime/1000), 
		'now': (currentTime/1000), 
		selectors: {
			value_seconds:'.clock-seconds .val',
			canvas_seconds:'canvas-seconds',
			value_minutes:'.clock-minutes .val',
			canvas_minutes:'canvas-minutes',
			value_hours:'.clock-hours .val',
			canvas_hours:'canvas-hours',
			value_days:'.clock-days .val',
			canvas_days:'canvas-days'
		},
		seconds: {
			//borderColor:'#c90103',
			borderColor:$('.type-seconds').attr('data-border-color'),
			borderWidth:'5',
		},
		minutes: {
			//borderColor:'#c90103',
			borderColor:$('.type-minutes').attr('data-border-color'),
			borderWidth:'5'
		},
		hours: {
			//borderColor:'#c90103',
			borderColor:$('.type-hours').attr('data-border-color'),
			borderWidth:'5'
		},
		days: {
			//borderColor:'#c90103',
			borderColor:$('.type-days').attr('data-border-color'),
			borderWidth:'5'
		}
	});
	 
});