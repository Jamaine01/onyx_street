/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navigation_list");
    if (x.className === "col-xs-12 nav") {
        x.className += " responsive";
    } else {
        x.className = "col-xs-12 nav";
    }
}