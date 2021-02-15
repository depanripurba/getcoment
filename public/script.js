
window.fbAsyncInit = function() {
    FB.init({
      appId      : '718383149070020',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
      
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });  
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallback(response){
        if(response.status === 'connected'){
            console.log('anda sudah berhasil untuk login');
            getData();
        }else{
            console.log('anda belum login ');
        }
   }
   function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function getData(){
      FB.api('/100052014916947?fields=id,email',function(response){
          if(response && !response.error){
              
          }
      })
  }
