const register = function(username){
    console.log(`User ${username} has been registered`);
    
}

const login = function(username , password){
    const name = 'Kamila Bishnupada'
    const pass = 'Yahoo@123'
    if(username==name && password==pass){
        console.log(`${username} is logged in`);
    }else{
        console.log(`${username} invalid username`);
        
    }
}

module.exports = {
    register,
    login 
}