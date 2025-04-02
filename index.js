    //Typewriter
let t = 0;
        let text = '`Hungry? Make the Best Orders with Food House`';
        let speed = 60;
        let word = document.getElementById('type');

        function typewriter(){
            if (t < text.length) {
     word.innerHTML += text.charAt(t);
            word.style.fontStyle ='oblique';
            word.style.fontFamily = 'cursive';
     t++;
     setTimeout( typewriter, speed);
        }
    }
    typewriter.call();

// Add to cart
 var  showcart, food_selected;
 food_selected = document.getElementById('food_selected')
function cart() {
     showcart = document.getElementById('section_2_cart_modal');
     showcart.style.display = 'block';
}

// Form Validation
function validateForm() {
    var email_error = document.getElementById("email_error");
    var psw_repeat_error = document.getElementById("psw_repeat_error");
    var psw_error = document.getElementById("psw_error");
    var email = document.forms["formvalid"]["email"].value;
    var psw = document.forms["formvalid"]["psw"].value;
    var psw_repeat = document.forms["formvalid"]["psw_repeat"].value;
  
    if (email.length <= 8) {
      email_error.textContent = "Your email should not be less than 8 characters";
      email_error.style.color = 'red';
      return false;
    }
    else{
      email_error.textContent = "";
    }
  
    if (psw.length <= 8) {
      psw_error.textContent = "Your Password should not be less than 8 characters";
      psw_error.style.color = 'red';
      return false;
    }
    
    if(psw_repeat != psw ){
      psw_repeat_error.textContent = " Please Confirm your Password";
      psw_repeat_error.style.color = 'red';
      return false;
    }
  }
