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

   function getcomment(event){
     console.log(event)
     FB.api(`/${event}/comments`,function(response){
      if(response && !response.error){
          // console.log(response.data)
          response.data.map((datas)=>{
            console.log(datas.message)
          })
          let el = `<ul>
            <center><h1>Nama nama yang memberikan koment di page</h1></center>
            ${response.data.map((datas)=>{
              return `<li>${datas.from['name']}=> ${datas.message}</li>`
            }).join('')}
            <p class='text-danger'>masih dalam tahap development</p>
          </ul>`
          document.body.innerHTML=el
          document.body.classList.remove('text-center')
      }else{
        console.log(response.error)
      }
  })
   }

   function statusChangeCallback(response){
        if(response.status === 'connected'){
            
            // while (root.firstChild) {
            //     root.removeChild(root.firstChild);
            // }
            getData();
            // root.innerHTML=`<p>Daftar Data yang memeberikan komentar${tesvariabel}</p>`
            // root.classList.remove('text-center')
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
              console.log(response.data)
              response.data.map((datas)=>{
                console.log(datas.message)
              })
              let el = `<ul>
                <center><h1>List Postingan di Fb Pages</h1></center>
                ${response.data.map((datas)=>{
                  return `<li><button onclick=getcomment('${datas.id}') class='btn btn-primary m-2'>${datas.id}</button></li>`
                }).join('')}
              </ul>`
              document.body.innerHTML=el
              document.body.classList.remove('text-center')
          }else{
            console.log(response.error)
          }
      })
  }
