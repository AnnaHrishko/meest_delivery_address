$("#copy").click(function(){return $("#txt").select(),document.execCommand("copy"),!1}),$(".country_but").click(function(){let t=$(this).attr("data-tag");return $(".default_tab").fadeOut(0),$(".tab"+t).fadeIn(200).css("display","flex"),$(".country_but").removeClass("active"),$(this).addClass("active"),!1}),$(".toggle_switch .page").click(function(){return $(".toggle_switch .page").removeClass("active"),$(this).addClass("active"),!1});