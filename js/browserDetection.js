/* stolen wholesale from: http://stackoverflow.com/questions/2400935/browser-detection-in-javascript */

navigator.sayswho = (function() {
	var ua = navigator.userAgent,
		tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		// document.getElementById("p5").style.color = "orange";
		return 'IE ' + (tem[1] || '');
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
		if (tem != null) {
			// document.getElementById("p3").style.color = "yellow";
			return tem.slice(1).join(' ').replace('OPR', 'Opera');
		}
		// document.getElementById("p2").style.color = "blue";
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null){
		M.splice(1, 1, tem[1]);
	}
	
	switch (M[0]) {
			case "Firefox":
				document.getElementById("primaryFooter").style.display = "none";
				break;
			case "Chrome":
				document.getElementById("altFooter").style.display = "none";
				break;
			case "Opera":
				document.getElementById("altFooter").style.display = "none";
				break;
			case "Safari":
				document.getElementById("primaryFooter").style.display = "none";
				break;
			/*not sure if IE will work as written */
			case "IE":
				document.getElementById("altFooter").style.display = "none";
				break;
			}
	return M.join(' ');
})();
