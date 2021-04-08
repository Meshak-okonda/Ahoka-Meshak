
    window.onscroll = function() {myFunction()};

    function myFunction() {
        var x = document.body.scrollTop || document.documentElement.scrollTop;
        let nav = document.getElementById("mainNav")
            if (x > 100){
                nav.classList.add("navbar-shrink")
                }
            else{
                nav.className = "navbar navbar-expand-lg navbar-dark fixed-top"
            }

        let navLink = document.getElementsByClassName("nav-link")

            if (x > 100){
                nav.classList.add("navbar-shrink")
                }
            else{
                nav.className = "navbar navbar-expand-lg navbar-dark fixed-top"
            }

            if(x < 700){
                active(5)
            }
            else if(x < 1460){
                active(0)
            }
            else if(x < 2460){
                active(1)
            }
            else if(x < 2860){
                active(2)
            }
            else{
                active(3)
            }

            function active(a){
                for(i =0; i<4; i++){
                    if (i==a){
                        navLink[i].classList.add("active")
                    }
                    else{
                        navLink[i].classList.remove("active")
                    }
                }
            }
    }