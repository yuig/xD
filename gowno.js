// ==UserScript==
// @name         matemaks gwalcer
// @namespace    http://tampermonkey.net/
// @version      2025-03-17
// @description  try to take over the world!
// @author       You
// @match        https://www.matemaks.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=matemaks.pl
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    document.cookie += "premium_x02=1 ;expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=matemaks.pl; path=/"
    document.cookie += "premium_x02=1 ;expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=www.matemaks.pl; path=/"
})();
