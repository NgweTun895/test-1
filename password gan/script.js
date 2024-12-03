var clickbutton = document.querySelector("#generate")
clickbutton.addEventListener("click",function(){
    var pssword = clickbutton();
    var showpassword = document.querySelector("#password");
    showpassword.value = password;
});
