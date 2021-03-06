(function($){
	$.fn.ioslist = function(options) {
		//allow for defaults to be overridden even though we won't talk about it much
		//you can make this work with any set of DOM elements provided you know how to style it right
		var defaults = {
			groupContainer: "dl",
			groupHeader: "dt",
			stationaryHeaderClass: "fakeHeader",
			stationaryHeaderElement: "h2"
		};
		var options = $.extend(defaults,options);
		
		return this.each(function(){
			var $listWrapper;		//wrap everything, holds $fakeHeader in place
			var $fakeHeader;		//fixed header element
			var $listContainer; 	//element ioslist method was called on
			var elems = [];			//array of DOM elements and props, reduces DOM access

			//create and cache necessary elements
			$(this).wrap("<div class='listWrapper'></div>");
			$listContainer = $(this);
			$listWrapper = $(this).parent();
			$listWrapper.prepend("<" + options.stationaryHeaderElement + "/>");
			$fakeHeader = $listWrapper.find(options.stationaryHeaderElement).eq(0);
			$fakeHeader.addClass(options.stationaryHeaderClass);
			
			$listContainer.find(options.groupContainer).each(function (index,elem) {
				var $tmp_list = $listContainer.find(options.groupContainer).eq(index);
				var $tmp_header = $tmp_list.find(options.groupHeader).eq(0);
				var $tmp_listHeight = $tmp_list.height();
				var $tmp_listOffset = $tmp_list.position().top;
				elems.push({"list" : $tmp_list,
							"header" : $tmp_header,
							"listHeight" : $tmp_listHeight,
							"headerText" : $tmp_header.text(),
							"headerHeight" : $tmp_header.outerHeight(),
							"listOffset" : $tmp_listOffset,
							"listBottom" : $tmp_listHeight + $tmp_listOffset});
			});
			
			$fakeHeader.text(elems[0].headerText);

			//bind to the scroll event
			$listContainer.scroll(function() {
				testPosition();
			});
			
			var current_header = '0-9';
			
			function testPosition() {
				var currentTop = $listContainer.scrollTop();
				var topElement;
				var offscreenElement;
				var topElementBottom;
				var i = 0;
				
				
				while((elems[i].listOffset - currentTop) <= 0) {
					topElement = elems[i];
					topElementBottom = topElement.listBottom - currentTop;
					if(topElementBottom < -topElement.headerHeight) {
						offscreenElement = topElement;
					}
					i++;
				}
				
				if(topElementBottom < 0 && topElementBottom > -topElement.headerHeight) {
					$fakeHeader.addClass("hidden");
					$(topElement.list).addClass("animated");
				} else {
					$fakeHeader.removeClass("hidden");
					$(topElement.list).removeClass("animated");
				}
				
				$fakeHeader.text(topElement.headerText);
				
				if(current_header != topElement.headerText) {
					
					needle = (topElement.headerText).toLowerCase();
					$(".abc_index li").removeClass('active');
					$(".abc_index li:contains('"+ needle +"')").addClass('active');
					
				}
				
				current_header = topElement.headerText;

			}
		});
	}
})(jQuery);