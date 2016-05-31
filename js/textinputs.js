$(document).ready(function(){
	jQuery(".slide-text-input input").val("");//clear slide text inputs
	jQuery(".slide-text-input label").click(function(){
		jQuery(this).parent().children("input").focus();
	});
	jQuery(".slide-text-input input").blur(function(){
		if (jQuery(this).parent().hasClass("numerical-only"))
		{
			if (parseInt(jQuery(this).val(),10) >= 0)
			{
				jQuery(this).addClass("maintain-input-position");
				jQuery(this).parent().children("label").children("span.add-data").remove();
			}
			else
			{
				jQuery(this).val("");
				jQuery(this).removeClass("maintain-input-position");
			}
		}
		else
		{
			if (jQuery(this).val().length)
			{
				jQuery(this).addClass("maintain-input-position");
			}
			else
			{
				jQuery(this).val("");
				jQuery(this).removeClass("maintain-input-position");
			}
		}
	});
});