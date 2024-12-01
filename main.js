let pdfDoc = null;
let currentPage = 1;
let pageNum = document.getElementById('page-num');
let pageCount = document.getElementById('page-count');
let canvas = document.getElementById('pdf-canvas');
let ctx = canvas.getContext('2d');

const renderPage = (num) => {
  pdfDoc.getPage(num).then((page) => {
    const viewport = page.getViewport({ scale: 1 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    page.render({
      canvasContext: ctx,
      viewport: viewport,
    });

    pageNum.textContent = num;
  });
};

const loadPDF = (event) => {
  const file = event.target.files[0];
  if (file.type !== 'application/pdf') {
    alert('Please upload a valid PDF file.');
    return;
  }

  const fileReader = new FileReader();
  fileReader.onload = () => {
    const loadingTask = pdfjsLib.getDocument(fileReader.result);
    loadingTask.promise.then(
      (pdf) => {
        pdfDoc = pdf;
        pageCount.textContent = pdf.numPages;
        renderPage(currentPage);
      },
      (error) => {
        console.error('Error loading PDF:', error);
      }
    );
  };
  fileReader.readAsArrayBuffer(file);
};

const goToNextPage = () => {
  if (currentPage < pdfDoc.numPages) {
    currentPage++;
    renderPage(currentPage);
  }
};

const goToPreviousPage = () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
};
