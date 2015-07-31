/**
 * Detect android native browser
 * http://stackoverflow.com/questions/14403766/how-to-detect-the-stock-android-browser
 *
 * If it's native browser, return true.
 */
/*global navigator, jQuery*/
(function($) {
  "use strict";
  $.fn.extend({
    isAndroidNativeBrowser: function() {
      var navU = navigator.userAgent;

      // Android Mobile
      var isAndroidMobile = navU.indexOf("Android") > -1 && navU.indexOf("Mozilla/5.0") > -1 && navU.indexOf("AppleWebKit") > -1;

      // Apple webkit
      var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
      var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
      var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));

      // Native Android Browser
      var isAndroidBrowser = isAndroidMobile && (appleWebKitVersion !== null && appleWebKitVersion < 537);
      return isAndroidBrowser;
    }
  });
})(jQuery);
