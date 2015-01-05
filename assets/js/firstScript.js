function statusChangeCallBack(response){
console.log("Apple de statusChangeCallBack");
console.log(response);

if(response.status==='connected'){testAPI();

alert(response.authResponse.accessToken);
n }
else if(response.status==='not_authorized'){$("#status").html("please log into this app");}
else{$("#status").html("please log into facebook");}
}

//------------------------------------------------−−XXXXX------------------------------------
function checkLoginState(){
FB.getLoginStatus(function(response){statusChangeCallBack(response);});
}

//------------------------------------------------------------------------------------------
//initialisation javascript sdk :)

window.fbAsyncInit=function(){
FB.init({
appId:'329115067290552',
cookie:true,
xfbml:true,
version:'v2.1'
});

FB.getLoginStatus(function(response){
statusChangedCallBack(response);
});

};


//-------------->load asynchrone

(function(d,s,id){
var js,fjs=d.getElementsByTagName(s)[0];
if(d.getElementById(id))return;
js=d.createElement(s);js.id=id;
js.src="//connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js,fjs);

}(document,'script','facebook-jssdk'));



//---------------petit test ap
function testAPI(){
console.log("Bienvenue traitement information");
FB.api("/me",function(response){

console.log("Successful login for:"+response.name);
$("#status").html("Merci"+response.name);


});



}















