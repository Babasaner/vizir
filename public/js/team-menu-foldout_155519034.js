var btn = document.getElementById("btn-toggle-services");
var unitList = document.getElementById("toggle-list-services");

if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
    btn.addEventListener("click", function() {
        if( unitList.style.display != "block" ) {
            unitList.style.display = "block";
        } else {
            unitList.style.display = "none";
        }
    });
}
