// ==UserScript==
// @name         GuitarPlayer Forum Helper
// @namespace    http://zetsuboutoshio.tk/
// @version      0.3.1
// @description  try to take over the world!
// @author       ZetsubouToshio
// @match        https://forum.guitarplayer.ru/index.php?board=20.*
// @grant        none
// @copyright 2018, zetsuboutoshio (https://openuserjs.org//users/zetsuboutoshio)
// @license Apache-2.0
// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function () {
    'use strict';

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    // Your code here...
    let authors = ["Ladkor", ">>DEAN<<", "Dmitry Reed", "KOLOK.ORG", "ЕНК", "igokrut", "GUITAR-SALE.RU", "Guitares.ru", "GreenRV"];
    let keywords = ["gibson", "fender", "suhr", "anderson"]
    let second_wave = ["hamer", "ibanez"]

    let num = 0;
    for (let i = 0; i <= authors.length; i++) {
        let $a = $("tr strong a:contains('" + authors[i] + "')").parents("tr").remove();
        num += $a.length;
    }
    console.log("Заблокировано " + num + " строк");

    $(".stats.windowbg:contains('	0')").parents("tr").find("td").css("background-color", "#d4f1c5");

    for (let i = 0; i <= keywords.length; i++) {
        $("a:contains('" + keywords[i] + "')").css("color", "red");
    }

    for (let i = 0; i <= second_wave.length; i++) {
        $("a:contains('" + second_wave[i] + "')").css("color", "orange");
    }
})();
