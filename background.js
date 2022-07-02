const blockFilter = [
  "*://*.doubleclick.net/*",
  "*://*.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
  "*://*.soundtrap.com/*",
  "*://spotifycapture.page.link/*",
];

var callback = function (details) {
  return { cancel: true };
};

var filter = { urls: blockFilter };

var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
  callback,
  filter,
  opt_extraInfoSpec
);
