$(document).ready(function(){
    $("#signup-form").submit(function(e){

    	var accepted;
    	if($('#terms').is(':checked')){
    		accepted = 1;
    	}
        var payload = {
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            terms: accepted
        };
    		
        $.ajax({
            url: "/users",
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function (data) {
            	var json_obj = $.parseJSON(data.responseText); 

                if(json_obj.status.response_code == "500"){
                     var output = "<ul>";
                     output += "<li>" + json_obj.status.message + ": " + json_obj.status.errors + "</li>";
                     output += "</ul>";
                     $('#formErrors').html(output);
                }else if(json_obj.status.response_code != "200"){ //errors
    			     var output = "<ul>";
    			     for (var i in json_obj.status.message){
        			     output += "<li>" + json_obj.status.message[i].msg + "</li>";
    			     }
    			     output += "</ul>";
            	     $('#formErrors').html(output);
                 }else{
                    //no errors
                    $('#formErrors').html('');

                    var modal = $.UIkit.modal("#popup");
                    if($('#fblogin').val() == 1){
                        //alert("Thank you for doing social sign in.");
                        $('#popup-content').html("Thank you for doing social sign in.");
                    }else{
                        //alert("Thank you for doing normal registration.");
                        $('#popup-content').html("Thank you for registering.");
                        
                    }
                    if(!modal.isActive()){
                        modal.show();
                    }
                 }
            	//alert(data.responseText);
            	
            }
        });	
        e.preventDefault(); 
    });

    $("#cancel").click(function(){
        $("#password").removeAttr('disabled');
    });
});