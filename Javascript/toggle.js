function dropdownMenu() {
        var x = document.getElementById("dropdownClick");
        if (x.className === "topnav") {
            x.className += " responsive";
            // change topnav to topnav.responsive
        } else {
            x.className = "topnav";
        }
    }

    const portfolioItems = document.querySelectorAll('.row-3');
     
        portfolioItems.forEach(portfolioitem => {
         portfolioitem.addEventListener('mouseover', () => {
           console.log(portfolioitem.childNodes[1].classList)
           portfolioitem.childNodes[1].classList.add('image-darken');
         });
     
         portfolioitem.addEventListener('mouseout', () => {
           portfolioitem.childNodes[1].classList.remove('image-darken');
         });
       });
