$(document).ready(function(){
	jQuery(".select-interface-linked").val("0");//Reset select value to ensure initial value alignment with respective select-interface
	jQuery("ul.select-interface li").click(function(){
		var ul_status = jQuery(this).parent().attr("data-status");
		var model_li_height = jQuery(this).parent().children("li:first-of-type").height();
		var model_li_width = jQuery(this).parent().children("li:first-of-type").width();
		var model_li_padding = parseInt(jQuery(this).parent().children("li:first-of-type").css("padding-top"),10);
		var expand_from_position = (model_li_height+(model_li_padding*2));
		if (ul_status == "closed")
		{
			//Keep the current select interface on top regardless of its DOM position
			jQuery("ul.select-interface").css("z-index", 0);
			jQuery("ul.select-interface li").css("z-index", 0);
			jQuery(this).parent().css("z-index", 100);

			//Position the select interface options so that they expand out just below the leading (0 index) informative li
			jQuery(this).parent().children("li:not(:first-of-type)").css("top", expand_from_position);

			//Close any other select interfaces to focus attention on current input 
			jQuery("ul.select-interface").attr("data-status", "closed");
			jQuery(this).parent().attr("data-status", "open");
			
			//Expose select interface options
			jQuery(this).parent().children("li").each(function(){
				var li_value = jQuery(this).data("value");
				var li_border = parseInt(jQuery(this).css("border-bottom-width"),10);
				var animate_top = li_value*(model_li_height+(model_li_padding*2)+li_border)+"px";
				jQuery(this).css("width", model_li_width+"px");
				jQuery(this).css("z-index", li_value);
				jQuery(this).animate({top: animate_top}, 300);
			});
		}
		if (ul_status == "open")
		{
			var data_input_id = jQuery(this).parent().data("connect");
			jQuery("#"+data_input_id).val(jQuery(this).data("value"));
			jQuery(this).parent().children("li").removeClass();
			jQuery(this).addClass("selected");

			jQuery(this).parent().children("li:not(:first-of-type)").animate({top: expand_from_position}, 100, function(){
				jQuery(this).parent().attr("data-status", "closed");
			});
			//Bring the selected option to the top
			jQuery("ul.select-interface li.selected").animate({top: 0}, 100);
		}
	});
});