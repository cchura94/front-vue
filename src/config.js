export const urlbase = "http://127.0.0.1:3000";

export const getHeader = function(){
    try{
        const auth = JSON.parse(atob(localStorage.getItem('token')));

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+auth.token
        }
        return headers;
        
    }catch(error){
        localStorage.clear();
    }
    
}
