        function create() {
            var url = document.getElementById('input').value;
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }


function goToHomePage() {
  window.location.href = '//' + window.location.hostname;
}
	    var elem = document.getElementById("gm-area");
	    function openFullscreen() {
	      if (elem.requestFullscreen) {
	        elem.requestFullscreen();
	      } else if (elem.webkitRequestFullscreen) { /* Safari */
	        elem.webkitRequestFullscreen();
	      } else if (elem.msRequestFullscreen) { /* IE11 */
	        elem.msRequestFullscreen();
	      }
	    }
