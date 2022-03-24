function SendMail(e) {
	console.log('Sending mail...');
	const Name = document.getElementById("name1").value;
	const subject = document.getElementById("sub1").value;
	const Email = document.getElementById("email1").value;
	const Message = document.getElementById("msg1").value;
	let body = `This mail is from ${Name}.\n${Message}`;
	// window.open(`mailto:danilchess960@gmail.com?subject=${subject}&body=${body}`)
	alert('Email sent Successfully...')
}

console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	localStorage.setItem('theme', mode)
}