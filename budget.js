var objUser = [ {username:"Ahmad" , password:"123",money:"300" }, {username:"Ali" , password:"1234" ,money:"400"},{username:"nasser" , password:"12345" ,money:"200"}]

function login(){
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;

for(i=0;i<objUser.length;i++){
if(username==objUser[i].username && password==objUser[i].password){
    window.location.href="firstpage.html";

}
else{
    console.log("Try Again")
}
}
for(let k = 0; k < objUser.length; k++){
  console.log(objUser[k]);}
}
function addmoney(username) {
  var money = document.getElementById("money").value;

  for (var i = 0; i < objUser.length; i++) {
    if (username == objUser[i].username) {
      objUser[i].money = parseInt(objUser[i].money) + parseInt(money);
      console.log("Money added successfully");
      return;
    } 
  }
  console.log("User not found");
}
function sendmoney() {
  for(let k = 0; k < objUser.length; k++){
    console.log(objUser[k]);}
  var money = document.getElementById("money").value;
  var recipientUsername = document.getElementById("recipient-username").value;
  var senderUsername = document.getElementById("sender-username").value;

  for (var i = 0; i < objUser.length; i++) {
    if (senderUsername == objUser[i].username) {
      if (objUser[i].money >= money) {
        objUser[i].money -= money;

        for (var j = 0; j < objUser.length; j++) {
          if (recipientUsername == objUser[j].username) {
            objUser[j].money = parseInt(objUser[j].money) + parseInt(money);
            console.log("Money sent successfully");
            return;
          }   
        }
        console.log("Recipient not found");
        return;
      } else {
        console.log("Not enough money!");
        return;
      }

    }

  }

  console.log("Sender not found");
}

function signup(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var money=document.getElementById("money").value;
    var User = {username,password,money};
    objUser.push(User);
        console.log("Account successfully created")
   // window.location.href="login.html";
   for(let k = 0; k < objUser.length; k++){
    console.log(objUser[k]);}

}
function topbud() {
    var firstmax = -Infinity, secondmax = -Infinity, thirdmax = -Infinity;
    var firstuser, seconduser, thirduser;
  
    for (var i = 0; i < objUser.length; i++) {
      if (objUser[i].money > firstmax) {
        thirdmax = secondmax;
        secondmax = firstmax;
        firstmax = objUser[i].money;
  
        thirduser = seconduser;
        seconduser = firstuser;
        firstuser = objUser[i].username;
      } else if (objUser[i].money > secondmax) {
        thirdmax = secondmax;
        secondmax = objUser[i].money;
  
        thirduser = seconduser;
        seconduser = objUser[i].username;
      } else if (objUser[i].money > thirdmax) {
        thirdmax = objUser[i].money;
        thirduser = objUser[i].username;
      }
    }
  
    console.log(firstmax);
    console.log(secondmax);
    console.log(thirdmax);
    console.log(firstuser);
    console.log(seconduser);
    console.log(thirduser);
  }
  