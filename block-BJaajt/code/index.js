let img=document.querySelector(".user");
let username=document.querySelector("h2");
let followers=document.querySelector(".follower-img");
let following=document.querySelector(".following-img");
let input=document.querySelector("input");

// createUi
function createUi(data) {
    img.src=data.avatar_url;
    username.innerText=data.login;
    followers.src=data.followers_url;
    following.src=data.following_url;
    
  }

  // followers
  function follower(e) {
    if(e.keyCode==13){
        const xhr_follow=new XMLHttpRequest();
        xhr_follow.open("GET",`https://api.github.com/users/${e.target.value}`);
    
        
        xhr_follow.onload=function () { 
            let fol=JSON.parse(xhr.response);
            console.log(fol);
            // createUi(userDetails);
         }
        follower.send(); 
    }
  }


// make request

function handleEvent(e) {
    if(e.keyCode==13){
        const xhr=new XMLHttpRequest();
        xhr.open("GET",`https://api.github.com/users/${e.target.value}`);
    
        
        xhr.onload=function () { 
            let userDetails=JSON.parse(xhr.response);
            createUi(userDetails);
         }
        xhr.send(); 
    }
   
  }




input.addEventListener("keyup",handleEvent);
