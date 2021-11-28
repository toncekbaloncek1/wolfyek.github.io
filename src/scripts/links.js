const params = new URLSearchParams(document.location.search);
const link = params.get("redir");
if (link) window.location = document.getElementById(link).href