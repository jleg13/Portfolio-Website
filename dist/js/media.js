function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.home').replaceWith('<section class="home fluid-container pb-5 px-4"><div class="row"><div class="col-md"><h1 id="l1" class="h3 line typing1 home__name">Joshua Le Gresley</h1></div><div class="col-md"><h2 id="l2" class="h4 line typing2 home__name">Software Developer</h2></div></div></section>');
    } else {
        $('.home').replaceWith('<section class="home"><div class=""><h1 class="home__name line typing">Joshua Le Gresley</h1></div><div class=""><h2>Web developer</h2></div></section>');
    }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes