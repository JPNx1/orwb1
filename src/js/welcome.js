var open = false;

$("#container").click(function () {
    if(open){
        nav();
    }
});

$("#btn_start").click(function () {
    $("#welcome").fadeOut(1500);
    console.log("hidden");
});

function nav() {
    console.log("nav");
    if (!open) {
        openNav();
        open = !open;
    } else {
        closeNav();
        open = !open;
    }
}


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

