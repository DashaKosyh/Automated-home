$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    getDevices();
});

function getDevices() {
    $.get("/getDevices")
    .done(function (result) {
        for (var i = 0; i < result.length; i++) {
           //
        }
    });
}

