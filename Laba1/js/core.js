jQuery(document).ready(function() {

	 

var $hero = jQuery('#hero'),
	$lazer = $hero.find('.lazer');


$lazer.removeClass("lazer");
function scan()
	{

 		$hero.removeClass('idle').addClass('attack');
 		$lazer.addClass('lazer');

 		setTimeout(function()
 		{

 			$hero.removeClass("attack").addClass('idle');
 			$lazer.removeClass('lazer');
		} ,3000);
 	}

			

setInterval(scan,3000);

		
});
