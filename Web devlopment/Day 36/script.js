function login(username,password,callback){
    console.log("checking login details")


setTimeout(()=>{
    if(username=="husen" && password=="9353"){
        callback("Login successful")
    }
    else {
            callback("Invalid username or password!");
        }
},1500)
}

login("husen", "9353", function(message) {
    console.log(message);
});