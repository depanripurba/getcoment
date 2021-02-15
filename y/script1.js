const root = document.querySelector('.root')
const tesvariabel = 1;
console.log(root)
window.fbAsyncInit = function() {
  console.log('hai ')
    FB.init({
      appId      : '718383149070020',
      xfbml      : true,
      version    : 'v9.0'
    });
    FB.AppEvents.logPageView();
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
            
            while (root.firstChild) {
                root.removeChild(root.firstChild);
            }
            getData();
            root.innerHTML=`<p>Daftar Data yang memeberikan komentar${tesvariabel}</p>`
            root.classList.remove('text-center')
            console.log('anda sudah berhasil untuk login');
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
      FB.api('/1228749933949181/posts',function(response){
          if(response && !response.error){
              console.log(response)
          }else{
            console.log(response.error)
          }
      })
  }
