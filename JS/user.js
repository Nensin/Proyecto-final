function redirectToPreviousPage() {
    
    if (document.referrer) {
       
        window.location.href = document.referrer;
    } else {
       
        window.location.href = 'index.html';  
    }
    return false; 
}