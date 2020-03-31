// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require toastr
$(document).ready(function() {
	$('.non-auth-btn').click(function(){
        toastr.error("Authenticaion Required! Please login!")
		// swal("Your vote has been registered successfully!", "", "success")
	});
	$('.vote-now').click(function(){
		$.ajax({
            url: "/home/vote_now",
            method: "POST",
            data: {user_id: $('.vote-now').attr('data-userid')},
            success: function(data) {
              console.log(data["alert"])
                if (data["alert"] == "success"){
                  toastr.success(data.message);  
                }
                else {
                  toastr.error(data.message);
                }
                $('.support_count').html(data.support);
     	    }
        })
    });
    
    $('.post-now').click(function(){
        console.log( $('#message').val())
		$.ajax({
            url: "/home/create_post",
            method: "POST",
            data: {user_id: $('.vote-now').attr('data-userid'), message: $('#message').val()},
            success: function(data) {
            toastr.error(data.message);
            $('#message').val('');
            console.log("data ---->", data);
                //$('.support_count').html(data.support);
     	    }
        })
	});
})