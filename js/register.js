//Checks if email is already registered so you can not register twice with the same email
function checkSimilarity() {
    var found ;
    var email = document.getElementById('email').value;
    var str= localStorage.getItem('key');
    var elements = JSON.parse(str)
    if(localStorage.getItem('key')===null){
      addUser();
    }
    else{
    for (var i = 0; i < elements.length; i++) {
      if(elements[i].Email === email){
        found = true;
        break;
      }
      else{
        found = false;
        continue;
      }

    }
if(Boolean(found) === true){
  alert("User already exists");
}
else{
  addUser();
}
    }
}

//Adds user to localstorage
function addUser() {
 var array = [];
  const user = { Email: document.getElementById('email').value, Pass: document.getElementById('pass').value, Type:document.getElementById('type').value };
  if(localStorage.getItem('key')===null){
    array.push(user);
    localStorage.setItem('key', JSON.stringify(array));
  }
    else{
        var oldUser = localStorage.getItem('key');
        var newUser = JSON.parse(oldUser);
        newUser.push(user);
        localStorage.setItem('key', JSON.stringify(newUser));

    }
}


//This is for checking if user is reistered or not when logging in
function checkExist(){
    var found ;
    var type;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var str= localStorage.getItem('key');
    var elements = JSON.parse(str)
    if(localStorage.getItem('key')===null){
          alert("You are not registered yet!");
     } 
      else{
      for (var i = 0; i < elements.length; i++) {
        if(elements[i].Email === email && elements[i].Pass === pass){  
        type = elements[i].Type;  
        found = true;
        break;
      }
      else{
        found = false;
        continue;
      }

}
      if(Boolean(found) === true){
        if(type === 'client'){
          window.open('index.html');
          window.close('login.html');
          // window.location.href='index.html';
        }
        else{
          if(type === 'banker')
          window.open('banker_home.html');
          else
          window.open('admin_home.html');
        }
      }
      else{
      alert("Email or Password are wrong");
      }
      }
}

