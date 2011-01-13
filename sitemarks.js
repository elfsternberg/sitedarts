/*!
 * jQuery siteDarts
 * Examples and documentation at: http://elfsternberg.com/projects/sitedarts/
 * Copyright (c) 2011 E. M. Sternberg
 * Version: 0.8
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
 

;(function($) {

	$.fn.siteDarts = function(options) {
		return this.each(function() {

            options = $.extend(true, {}, $.fn.siteDarts.defaults, options)
            names = $('a[name]');
            
            function reposition() {
                var prop = $(window).height();
                var doch = $(document).height();
                
                names.each(function() {
                    var n = $(this).attr('name')
                    var d = $(this).offset().top;
                    var a = $("li." + options.markitem + ' a[href="#' + n + '"]');
                    var p = a.parent();
                    p.animate({top: prop * (d / doch)});
                });
            }
            
            function buildDarts() {
                var self = this;
                if ($('#' + options.marklist)) {
                    $('#' + options.marklist).remove()
                }
                var l = $('<ul id="' + options.marklist + '"></ul>').appendTo('body');
                names.each(function() {
                    var o = $('<li class="' + options.markitem + '"><a href="#' + 
                              $(this).attr('name') + '">' + $(this).text() + '</a></li>').appendTo(l);

                    $('a', o).click(function(event) {
                        event.preventDefault();
                        var target = $(event.target).attr('href').replace('#', '')
                        var targetOffset = $('a[name="' + target  + '"]').offset().top;
                        $(document).animate({scrollTop: targetOffset}, 400, function() {
                            location.hash = target;
                        });                   
                    });
                });
            }
            buildDarts();
            reposition();
		});
	};
	
	$.fn.siteDarts.defaults = {
        marklist: 'marklist',
        markitem: 'marklistitem',
		css: {
			// default styling
			ul:     { position: "fixed", top: 0, right: "-30px", height: "100%", "zindex": 99},
            li:     { position: "absolute", top: 0, right: 0, overflow: "hidden", color: "white", cursor: "pointer"},
            a:      { width: "29px", height: "24px", background: "transparent no-repeat" },
        }
    };

})(jQuery);

