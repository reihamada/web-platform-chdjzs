function convertVirtical() {
  document.getElementById('result').value = document
    .getElementById('text')
    .value.replace(/(.)/g, '$1\n');
}
