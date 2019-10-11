function clockTime() {
	let date = new Date;
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let am_pm = "AM"

	if (h > 12)
	{
		h -= 12;
		am_pm = "PM";
	}
	if (h === 0) {
		h = 12;
	};


	// will add a zero to time with single digit
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	const currentTime = h + ":" + m +":" + s + " " + am_pm;
	// innerText will not work in firefox 
	document.getElementById('clock').innerHTML = currentTime; 
	// textContent does not work in IE 
	document.getElementById('clock').textContent = currentTime; 
	console.log(currentTime);

	setTimeout(clockTime, 1000);

}

// setInterval(clockTime, 1000);

clockTime();