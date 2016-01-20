function unlock(evt) {
	key = document.getElementById('key').value.toLowerCase();
	if (key == 'dietschy' || key == 'fermaut') {
		document.getElementById('heartlock').className += 'fade';
		setTimeout(function(){window.location = "/accueil";}, 1000);
	}
}

function stopRKey(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
}

document.onkeypress = stopRKey;
document.oninput = unlock
