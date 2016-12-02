$(document).ready(function() {
	$(window).scroll(function() {
		$('span.link').removeClass('in_viewport');
		$('div[class*=block]:in-viewport')
			.do(function () {
				var id = this.attr('id');
				$('span.link[data-goto=#' + id + ']').addClass('in_viewport');
			});
	});
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 100 ) {
		$('.header').css('opacity', 0);
		$('.mini-header').css({
			top: '0px'
		});
	} else {
		$('.header').css('opacity', 1);
		$('.mini-header').css({
			top: '-50px'
		});
	}
});
$(document).ready(function() {
	$('.tab').click(function() {
		var that = $(this);
		var id = that.attr('data-goto');
		var elem = $(id);
		$('html, body').animate({
	        scrollTop: elem.offset().top
	    }, 600);
	    return false;
	});


	$('.img').click(function() {
		var data = $(this).attr('data-image');
		makeCenterPicture(data);
	});

	makeCenterPicture = function(data) {
		var wrapper = $('<div class="center-picture"></div>');
		var closer = $('<div class="closer fa fa-times"></div>');
		var fader = $('<div class="fader"></div>');
		$(wrapper).css({
			'background-image' : 'url(img/photos/' + data + '_full.jpg)'
		})
		$(wrapper).append(closer);
		$('body').append(wrapper);
		$('body').append(fader);
	}

	$('body').on('click', '.fader', function() {
		$('.fader').remove();
		$('.center-picture').remove();
	})

	$('body').on('click', '.closer', function() {
		$('.fader').remove();
		$('.center-picture').remove();
	})


})