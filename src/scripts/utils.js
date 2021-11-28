const params = new URLSearchParams(document.location.search);
const link = params.get("link");
const button = document.getElementById('redir');
button.setAttribute('href', link || 'microsoft.windows.camera:');