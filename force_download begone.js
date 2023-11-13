// ==UserScript==
// @name         Modify Forcedownload Links on moodle.upm.es
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change links ending with ?forcedownload=1 to ?forcedownload=0 on moodle.upm.es
// @author       Intron014
// @match        https://moodle.upm.es/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select all anchor tags on the page
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        if (link.href.endsWith('?forcedownload=1')) {
            link.href = link.href.replace('?forcedownload=1', '?forcedownload=0');
        }
    });
})();
