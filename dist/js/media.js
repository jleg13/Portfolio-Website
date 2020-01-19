function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.home').replaceWith('<section class="home fluid-container pt-5 px-4"><div class="row"><div class="col-md"><h1 id="l1" class="h3 line typing1 home__name">Joshua Le Gresley</h1></div><div class="col-md"><h2 id="l2" class="h4 line typing2 home__name">Web Developer</h2></div></div><div class="social-icons"><a class="social-icons__item" href="https://www.linkedin.com/in/joshua-le-gresley/"><i class="fab fa-linkedin fa-2x trans-hover"></i></a><a class="social-icons__item" href="https://github.com/jleg13"><i class="fab fa-github fa-2x trans-hover"></i></a><a class="social-icons__item" href="mailto:joshualegresley@gmail.com"><i class="fas fa fa-at fa-2x trans-hover"></i></a></div><footer>&copy; Copyright 2020</footer></section>');
    } else {
        $('.home').replaceWith('<section class="home"><div class=""><h1 class="home__name line typing">Joshua Le Gresley</h1></div><div class=""><h2>Web developer</h2></div><div class="social-icons"><a class="social-icons__item" href="https://www.linkedin.com/in/joshua-le-gresley/"><i class="fab fa-linkedin fa-2x trans-hover"></i></a><a class="social-icons__item" href="https://github.com/jleg13"><i class="fab fa-github fa-2x trans-hover"></i></a><a class="social-icons__item" href="mailto:joshualegresley@gmail.com"><i class="fas fa fa-at fa-2x trans-hover"></i></a></div><footer>&copy; Copyright 2020</footer></section>');
    }
}

var x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes