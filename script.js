const navigation = document.getElementById("mobile-nav");

function displayMenu(){
    if(navigation.style.visibility == "visible"){
        // RESOURCES: https://www.youtube.com/watch?v=r1iul4uRFuE
        gsap.to('.mobile-nav',{ height: '0vw', visibility: 'hidden', opacity: 0, y:-20, duration:2})
    }

    else{
        gsap.to('.mobile-nav',{ 
            opacity: 1,
            background: '#ebeaea', 
            visibility: 'visible', 
            display: 'block', 
            x:20, 
            duration:2})
    }
}