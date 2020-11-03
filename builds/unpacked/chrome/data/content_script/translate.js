/* 
  Getting traslator's API token (TKK) from https://translate.google.com/
  Note: token (TKK) is attached to the page-scripts.
*/

window.addEventListener("load", function () {
  var script = document.createElement("script");
  script.textContent = "window.postMessage({'TKK': TKK}, '*')";
  document.body.appendChild(script);
});

window.addEventListener("message", function (e) {
  if (e.data )
  {
	let parsed = typeof e.data=="object" ? e.data : JSON.parse(e.data);
	if ("TKK" in parsed) {
		background.send("GT-TKK", parsed["TKK"]);
	}
  }
}, false);