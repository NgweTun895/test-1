var clickbutton = document.querySelector("#generate")
clickbutton.addEventListener("click",function() {
    var password = generatePassword();
    var showpassword = document.querySelector("#password");
    showpassword.value = password;
});
// ခလုပ်နှိပ်တာနဲ့ အပေါ်မှာ ပေါ်
function generatePassword( ) {
    let passwordLength = parseInt(
        prompt("ပတ်စ၀တ် ၈လုံးမှ ၁၂၈ လုံးထည့်ပါ:")
    );

    // ပတ်စ၀တ်ထည့်တာ အမှားစစ်
    if (isNaN(passwordLength)|| passwordLength < 8 || passwordLength > 128){
        alert("ထည့်တာမှားနေပါတယ် ၈လုံးမှ ၁၂၈ လုံးအတွင်းထည့်ပါ။")
        return"";
    }

    // ပတ်အ၀တ်အရေအတွက်မှန်ရင် စကားလုံးအမျိုးအစားရွေးရန်
    let စာလုံးကြီး = confirm("စာလုံးကြီးထည့်မှာလား");
    let စာလုံးသေး = confirm("စာလုံးသေးထည့်မှာလား");
    let နံပတ် = confirm("နံပတ်ထည့်မှာလား");
    let သင်္ကေတ = confirm("သင်္ကေတထည့်မှာလား");

    // စကားလုံးအမျိုးအစား တစ်ခုမှမရွေးဘူးဆိုရင် သတိပေးရန်
    if(
        !စာလုံးကြီး &&
        !စာလုံးသေး &&
        !နံပတ် &&
        !သင်္ကေတ
    ){
        alert("လေးမျိုးမှ တခုခုကို ရွေးပါ");
        return"";
    }

    // စကားလုံးအမျိုးအစားများကို သတ်မှတ်ရန်
    let typeofchar = "";
    if (စာလုံးကြီး) {
        typeofchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";      
    }
    if (စာလုံးသေး) {
        typeofchar += "abcdefghijklmnopqrstuvwxyz";      
    }
    if (နံပတ်) {
        typeofchar += "1234567890";      
    }
    if (သင်္ကေတ) {
        typeofchar += "!@#$%^&*()_+-=[]{}|;:,.<>?";      
    }

    
    // စကားလုံးဖန်တီး
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * typeofchar.length); // Math ကို စာလုံးကြီးဖြင့်ရိုက်ရန်
    password += typeofchar.charAt(randomIndex);
  }
  return password;
}