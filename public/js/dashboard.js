document.addEventListener('DOMContentLoaded', function () {
    $.get("assets/icons/dashboard.svg", function (data) {
        var div = document.createElement("div");
        div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
        document.body.insertBefore(div, document.body.childNodes[0]);
    });
})