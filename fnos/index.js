// ==UserScript==
// @name        fnOS rename
// @namespace   https://github.com/g0ngjie/tkscript/fnos/index.js
// @match       *://*.5ddd.com/*
// @match       *://fn.*.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 2025/6/23 10:46:16
// ==/UserScript==
(function () {
    'use strict';
    const rTitle = '百度一下'
    const rIco = "https://www.baidu.com/favicon.ico";

    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = rIco;

    const targetNode = document.querySelector('title');
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            console.log('Title changed to:', mutation.target.textContent);
            if (mutation.target.textContent != rTitle) document.title = '百度一下'
        });
    });
    const config = {
        subtree: true,
        characterData: true,
        childList: true
    };
    observer.observe(targetNode, config);
}());