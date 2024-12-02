
// script.js
document.getElementById('viewButton').addEventListener('click', function() {
  const fileInput = document.getElementById('fileInput');
  const fileDisplayArea = document.getElementById('fileDisplayArea');
  const file = fileInput.files[0];

  if (file) {
      const fileType = file.type;
      fileDisplayArea.innerHTML = ''; // Clear previous content
      fileDisplayArea.style.display = 'block'; // Show the display area

      if (fileType.startsWith('image/')) {
          // Display images
          const img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          img.style.maxWidth = '100%';
          img.style.maxHeight = '400px';
          fileDisplayArea.appendChild(img);
      } else if (fileType === 'application/pdf') {
          // Display PDF
          const pdfIframe = document.createElement('iframe');
          pdfIframe.src = URL.createObjectURL(file);
          pdfIframe.width = '100%';
          pdfIframe.height = '500px';
          fileDisplayArea.appendChild(pdfIframe);
      } else if (fileType.startsWith('audio/')) {
          // Display audio files
          const audio = document.createElement('audio');
          audio.controls = true;
          audio.src = URL.createObjectURL(file);
          fileDisplayArea.appendChild(audio);
      } else if (fileType.startsWith('text/')) {
          // Display text files
          const reader = new FileReader();
          reader.onload = function(e) {
              const textArea = document.createElement('textarea');
              textArea.value = e.target.result;
              textArea.rows = 10;
              textArea.cols = 50;
              fileDisplayArea.appendChild(textArea);
          };
          reader.readAsText(file);
      } else {
          fileDisplayArea.innerHTML = 'Unsupported file type!';
      }
  } else {
      alert('Please select a file!');
  }
});
