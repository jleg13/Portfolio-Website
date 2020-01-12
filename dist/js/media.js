function myFunction(x) {
    if (x.matches) { // If media query matches
        $('.home').addClass('fluid-container');
        $('.home').addClass('pb-5');
        $('.home').addClass('px-4');
        $('.home div').addClass('row');
        $('.home div div').addClass('col-md');
        $('.home div div h2').addClass('line');
        $('.home div div h2').addClass('typing2');
        $('.home div div h2').addClass('home_name');
    } else {
        $('.home').removeClass('fluid-container');
        $('.home').removeClass('pb-5');
        $('.home').removeClass('px-4');
        $('.home div').removeClass('row');
        $('.home div div').removeClass('col-md');
        $('.home div div h2').removeClass('line');
        $('.home div div h2').removeClass('typing2');
        $('.home div div h2').removeClass('home_name');
    }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes