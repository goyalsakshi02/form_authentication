export const valid = (email) => {
    if (email === "") {
       return false 
    } else if (email && !/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)) {
        
        return false 
    }
    
    else {
    
        return true
   
    }
}