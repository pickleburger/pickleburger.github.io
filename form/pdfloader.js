"use strict"

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.3.200/pdf.worker.js';

var CMAP_URL = '/form/cmaps/';
var CMAP_PACKED = true;

var PAGE_TO_VIEW = 1;
var SCALE = 1.5;

for (let container of document.getElementsByClassName("pdfViewer")) {
  // Loading document.
  var loadingTask = pdfjsLib.getDocument({
    url: "/form/" + container.id,
    cMapUrl: CMAP_URL,
    cMapPacked: CMAP_PACKED,
  });
  loadingTask.promise.then(function(pdfDocument) {
    // Document loaded, retrieving the page.
    return pdfDocument.getPage(PAGE_TO_VIEW).then(function (pdfPage) {
      // Creating the page view with default parameters.
      var pdfPageView = new pdfjsViewer.PDFPageView({
        container: container,
        id: PAGE_TO_VIEW,
        scale: SCALE,
        defaultViewport: pdfPage.getViewport({ scale: SCALE, }),
        // We can enable text/annotations layers, if needed
        textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory(),
        annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
      });
      // Associates the actual page with the view, and drawing it
      pdfPageView.setPdfPage(pdfPage);
      return pdfPageView.draw();
    });
  });
}
