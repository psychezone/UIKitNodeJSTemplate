
  function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
    //console.log(response);

    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      FBConnected();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log into this app to pre-populate fields.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log into Facebook to pre-populate fields.';
    }
  }

  /* This function is called when someone finishes with the Login
  * Button.  See the onlogin handler attached to it in the sample
  * code below.
  */
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '',
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));



  function FBConnected() {
    FB.api('/me', function(response) {
      $(document).ready(function(){
          $('#status').html('You are logged in! Pre-populated fields for ' + response.name + '.');
          $('#firstname').val(response.first_name);
          $('#lastname').val(response.last_name);
          $('#email').val(response.email);
          $('#password').val(response.id);
          $("#password").attr('disabled','disabled');
          $('#fblogin').val(1);
      });
      
    });
  }
