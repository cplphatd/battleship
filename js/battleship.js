/**
 * Created by David on 12/20/16.
 */
"use strict";
(function () {

    //Global variables
    var boxID;

    //Creates player grid
    (function () {
        for (var i = 1; i <= 100; i += 1) {
            $("#playerGrid").append(
                "<div id='playerBox" + i + "' class='gridBox' data-value='0'>" + i + "</div>"
            );
        }
    }) ();

    //Creates enemy grid
    (function () {
        for (var i = 1; i <= 100; i += 1) {
            $("#enemyGrid").append(
                "<div id='enemyBox" + i + "' class='gridBox' data-value='0'>" + i + "</div>"
            );
        }
    }) ();

    //Adds event listeners to gridBoxes for ship placement
    var getShipPosition = function () {
        $("#input").keypress(function () {
            if(event.keyCode == 13) {
                boxID = ($("#input").val() - 1);
                placeShip(boxID);
            }
        });
    };

    //Changes color of square to signify ship placement and changes data-value
    var placeShip = function (box) {
        $(".gridBox").eq(box).addClass("ship").attr("data-value", 1);
    };

    getShipPosition();
})();
