'use strict';

/**
 * Returns a promise that resolves to the page title (<tt>document.title</tt>).
 *
 * @memberof module:commands
 * @method
 * @returns {promise<string>} A promise that resolves to the page title (<tt>document.title</tt>).
 */
function getPageTitle() {
    return browser.getTitle();
}

module.exports = getPageTitle;
