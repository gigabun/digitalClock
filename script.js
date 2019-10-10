function clockTime() {
	let date = new Date;
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();

	const time = h + ":" + m +":" + s;
	// innerText will not work in firefox 
	// document.getElementById('clockDisplay').innerText = time; 
	// textContent does not work in IE 
	document.getElementById('clock').textContent = time; 
	console.log(time);

}

clockTime();