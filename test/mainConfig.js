const basicConfig = require("./basicConfig");
const THREE_SECONDS_IN_MS = 6000;
const scenarios = [];
const viewports = [];



basicConfig.relativeUrls.map(relativeUrl=> {
  scenarios.push({
    //cookiePath: basicConfig.cookiepath,
    label: relativeUrl,
    url: `${basicConfig.baseUrl}${relativeUrl}`,
    delay: THREE_SECONDS_IN_MS,
    requireSameDimensions: false,
  });
});



basicConfig.viewports.map(viewport => {
  if (viewport === "S") {
    pushViewport(viewport, 360, 767);
  }
  if (viewport === "M") {
    pushViewport(viewport, 768, 991);
  }
  if (viewport === "L") {
    pushViewport(viewport, 992, 1100);
  }
  if (viewport === "XL") {
    pushViewport(viewport, 1102, 1345);
  }
});

function pushViewport(viewport, width, height) {
  viewports.push({
    name: viewport,
    width,
    height,
  });
}

//console.log("Scenarios:",scenarios)

module.exports = {
  id: basicConfig.projectId,
  viewports,
  scenarios,
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  paths: {
    bitmaps_reference: "test/backstop_data/bitmaps_reference",
    bitmaps_test: "test/backstop_data/bitmaps_test",
    html_report: "test/backstop_data/html_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
};
