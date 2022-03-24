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

const icourl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPg0KPHBhdGggZD0iTTU3Ljc2MjcgNDcuNjMzM0M1Ni45MjE1IDQ4LjA3NDMgNTYuMDQyNiA0OC40Njg4IDU1LjEyOTQgNDguODExOEM1Mi4zODQxIDQ5Ljg0MzEgNDkuMzUyMyA1MC40Mjc3IDQ2LjE1NDUgNTAuNDI3N0MzNC4zMjQyIDUwLjQyNzcgMjQuMDE4NyA0Mi4yODk3IDI0LjAxODcgMzEuODQ3MUMyNC4wMTg3IDI4LjkxMDcgMjUuNzE3NSAyNi4zNjU2IDI4LjEyNSAyNS4wMjQ5QzE3LjQyNjIgMjUuNDczNCAxNC42NzU5IDM2LjYyNDkgMTQuNjc1OSA0My4xNTc2QzE0LjY3NTkgNjEuNjI1NyAzMS42OTgyIDYzLjUgMzUuMzY2IDYzLjVDMzcuMzQyNyA2My41IDQwLjMyNjIgNjIuOTI0MyA0Mi4xMjM3IDYyLjM2MDRDNDIuMjMzMyA2Mi4zMjM5IDQyLjM0MjQgNjIuMjg3MiA0Mi40NTE0IDYyLjI0OTZDNDkuMzkxMiA1OS44NTYzIDU1LjI0ODQgNTUuMTQ3OCA1OS4wOTg1IDQ5LjA0NDZDNTkuNjUwNiA0OC4xNjkzIDU4LjY3OTcgNDcuMTUyNSA1Ny43NjI3IDQ3LjYzMzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+DQo8cGF0aCBvcGFjaXR5PSIwLjM1IiBkPSJNNTcuNzYyNyA0Ny42MzMzQzU2LjkyMTUgNDguMDc0MyA1Ni4wNDI2IDQ4LjQ2ODggNTUuMTI5NCA0OC44MTE4QzUyLjM4NDEgNDkuODQzMSA0OS4zNTIzIDUwLjQyNzcgNDYuMTU0NSA1MC40Mjc3QzM0LjMyNDIgNTAuNDI3NyAyNC4wMTg3IDQyLjI4OTcgMjQuMDE4NyAzMS44NDcxQzI0LjAxODcgMjguOTEwNyAyNS43MTc1IDI2LjM2NTYgMjguMTI1IDI1LjAyNDlDMTcuNDI2MiAyNS40NzM0IDE0LjY3NTkgMzYuNjI0OSAxNC42NzU5IDQzLjE1NzZDMTQuNjc1OSA2MS42MjU3IDMxLjY5ODIgNjMuNSAzNS4zNjYgNjMuNUMzNy4zNDI3IDYzLjUgNDAuMzI2MiA2Mi45MjQzIDQyLjEyMzcgNjIuMzYwNEM0Mi4yMzMzIDYyLjMyMzkgNDIuMzQyNCA2Mi4yODcyIDQyLjQ1MTQgNjIuMjQ5NkM0OS4zOTEyIDU5Ljg1NjMgNTUuMjQ4NCA1NS4xNDc4IDU5LjA5ODUgNDkuMDQ0NkM1OS42NTA2IDQ4LjE2OTMgNTguNjc5NyA0Ny4xNTI1IDU3Ljc2MjcgNDcuNjMzM1oiIGZpbGw9InVybCgjcGFpbnQxX3JhZGlhbCkiLz4NCjxwYXRoIGQ9Ik0yNi40Mjc4IDYwLjM1MzNDMjQuMjA0MiA1OC45NzQ5IDIyLjI3MzkgNTcuMTU3NCAyMC43NDM5IDU1LjAwOTRDMTguMzc2NSA1MS42ODU1IDE2Ljk2MTEgNDcuNTk2OCAxNi45NjExIDQzLjE1NzZDMTYuOTYxMSAzNi42MjUgMjAuMDAzIDMwLjgzODkgMjQuNjkxOSAyNy4xNzI4QzI1Ljc1NjggMjYuMzQwMyAyNy4xMjAzIDI1LjUwMDUgMjguMTI0OSAyNS4wMjQ5QzI4LjkwNTEgMjQuNjU1NiAzMC4yMzkyIDIzLjk5MDYgMzIuMDExMyAyNC4wMTU3QzM0Ljk0OTIgMjQuMDU3NCAzNy4xNjkgMjUuNTU1MiAzOC40MzI2IDI3LjI1NjNDMzkuNDAzNCAyOC41NjMzIDQwLjAwMjEgMzAuMTczNiA0MC4wMjIxIDMxLjkyMTZDNDAuMDIyOCAzMS44NjkgNDYuMTM4MSAxMi4wMjA1IDIwLjAwOTggMTIuMDIwNUM5LjAzNjU3IDEyLjAyMDUgMCAyMi40Mzc5IDAgMzEuNTc0M0MwIDM3LjM2OTggMS4zNDQ4MyA0MS45OTY4IDMuMDI4NjQgNDUuNTgyNkM2Ljc3ODc5IDUzLjU2OTkgMTMuNzMzMSA1OS43NTIgMjIuMjQwMSA2Mi40NzU4QzI1LjMyMDkgNjMuNDYyMiAyOC42MDI3IDYzLjk5OTggMzIuMDExMyA2My45OTk4QzM1LjU0NjUgNjMuOTk5OCAzOC45NDQgNjMuNDE4NCA0Mi4xMjM2IDYyLjM2MDRDNDAuMzI2IDYyLjkyNDMgMzguNDIwNCA2My4yMzI5IDM2LjQ0MzcgNjMuMjMyOUMzMi43NzU5IDYzLjIzMjkgMjkuMzU3NCA2Mi4xNjkyIDI2LjQyNzggNjAuMzUzM1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcikiLz4NCjxwYXRoIG9wYWNpdHk9IjAuNDEiIGQ9Ik0yNi40Mjc4IDYwLjM1MzNDMjQuMjA0MiA1OC45NzQ5IDIyLjI3MzkgNTcuMTU3NCAyMC43NDM5IDU1LjAwOTRDMTguMzc2NSA1MS42ODU1IDE2Ljk2MTEgNDcuNTk2OCAxNi45NjExIDQzLjE1NzZDMTYuOTYxMSAzNi42MjUgMjAuMDAzIDMwLjgzODkgMjQuNjkxOSAyNy4xNzI4QzI1Ljc1NjggMjYuMzQwMyAyNy4xMjAzIDI1LjUwMDUgMjguMTI0OSAyNS4wMjQ5QzI4LjkwNTEgMjQuNjU1NiAzMC4yMzkyIDIzLjk5MDYgMzIuMDExMyAyNC4wMTU3QzM0Ljk0OTIgMjQuMDU3NCAzNy4xNjkgMjUuNTU1MiAzOC40MzI2IDI3LjI1NjNDMzkuNDAzNCAyOC41NjMzIDQwLjAwMjEgMzAuMTczNiA0MC4wMjIxIDMxLjkyMTZDNDAuMDIyOCAzMS44NjkgNDYuMTM4MSAxMi4wMjA1IDIwLjAwOTggMTIuMDIwNUM5LjAzNjU3IDEyLjAyMDUgMCAyMi40Mzc5IDAgMzEuNTc0M0MwIDM3LjM2OTggMS4zNDQ4MyA0MS45OTY4IDMuMDI4NjQgNDUuNTgyNkM2Ljc3ODc5IDUzLjU2OTkgMTMuNzMzMSA1OS43NTIgMjIuMjQwMSA2Mi40NzU4QzI1LjMyMDkgNjMuNDYyMiAyOC42MDI3IDYzLjk5OTggMzIuMDExMyA2My45OTk4QzM1LjU0NjUgNjMuOTk5OCAzOC45NDQgNjMuNDE4NCA0Mi4xMjM2IDYyLjM2MDRDNDAuMzI2IDYyLjkyNDMgMzguNDIwNCA2My4yMzI5IDM2LjQ0MzcgNjMuMjMyOUMzMi43NzU5IDYzLjIzMjkgMjkuMzU3NCA2Mi4xNjkyIDI2LjQyNzggNjAuMzUzM1oiIGZpbGw9InVybCgjcGFpbnQzX3JhZGlhbCkiLz4NCjxwYXRoIGQ9Ik0zOC4wNzg2IDM3LjIxNDRDMzcuODc2IDM3LjQ3NjcgMzcuMjUyNyAzNy44Mzg4IDM3LjI1MjcgMzguNjMwM0MzNy4yNTI3IDM5LjI4MTQgMzcuNjc3OCAzOS45MDk2IDM4LjQzMzIgNDAuNDM2OEM0Mi4wMjgzIDQyLjk0NTkgNDguODA0NiA0Mi42MDc3IDQ4LjgyMjcgNDIuNjA3N0M1MS42MjAyIDQyLjU5OCA1NC4xMzY4IDQxLjgyODcgNTYuMzkxIDQwLjUxMDhDNTcuNDE2NiAzOS45MTExIDU4LjM2NTcgMzkuMTk4OSA1OS4yMjE1IDM4LjM4NThDNjIuMTU4NCAzNS41OTUxIDYzLjk0ODkgMzEuNjYyMyA2My45OTg2IDI3LjI5MjZDNjQuMDYyMyAyMS42ODg3IDYyLjAwODYgMTcuOTYzMiA2MS4xNjQ0IDE2LjMxMzVDNTUuODY2MiA1Ljk1ODk5IDQ0LjQyOTUgMCAzMS45OTQ1IDBDMTQuNDY1OSAwIDAuMjM2NzQ2IDE0LjA4NjUgMC4wMDE1MjU4OCAzMS41NUMwLjEyMDM1NiAyMi40MTQzIDkuMTk5OTYgMTUuMDM3MiAxOS45OTMgMTUuMDM3MkMyMC44NjgxIDE1LjAzNzIgMjUuODU4NSAxNS4xMjI1IDMwLjQ5NDMgMTcuNTU1NUMzNC41Nzc5IDE5LjY5ODcgMzYuNzE4OSAyMi4yODg0IDM4LjIwNjkgMjQuODU3NUMzOS43NTIgMjcuNTI0OSA0MC4wMjY4IDMwLjg5NCA0MC4wMjY4IDMyLjIzNzJDNDAuMDI2OCAzMy41ODA0IDM5LjM0OTYgMzUuNTY5MiAzOC4wNzg2IDM3LjIxNDRaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWwpIi8+DQo8cGF0aCBkPSJNMzguMDc4NiAzNy4yMTQ0QzM3Ljg3NiAzNy40NzY3IDM3LjI1MjcgMzcuODM4OCAzNy4yNTI3IDM4LjYzMDNDMzcuMjUyNyAzOS4yODE0IDM3LjY3NzggMzkuOTA5NiAzOC40MzMyIDQwLjQzNjhDNDIuMDI4MyA0Mi45NDU5IDQ4LjgwNDYgNDIuNjA3NyA0OC44MjI3IDQyLjYwNzdDNTEuNjIwMiA0Mi41OTggNTQuMTM2OCA0MS44Mjg3IDU2LjM5MSA0MC41MTA4QzU3LjQxNjYgMzkuOTExMSA1OC4zNjU3IDM5LjE5ODkgNTkuMjIxNSAzOC4zODU4QzYyLjE1ODQgMzUuNTk1MSA2My45NDg5IDMxLjY2MjMgNjMuOTk4NiAyNy4yOTI2QzY0LjA2MjMgMjEuNjg4NyA2Mi4wMDg2IDE3Ljk2MzIgNjEuMTY0NCAxNi4zMTM1QzU1Ljg2NjIgNS45NTg5OSA0NC40Mjk1IDAgMzEuOTk0NSAwQzE0LjQ2NTkgMCAwLjIzNjc0NiAxNC4wODY1IDAuMDAxNTI1ODggMzEuNTVDMC4xMjAzNTYgMjIuNDE0MyA5LjE5OTk2IDE1LjAzNzIgMTkuOTkzIDE1LjAzNzJDMjAuODY4MSAxNS4wMzcyIDI1Ljg1ODUgMTUuMTIyNSAzMC40OTQzIDE3LjU1NTVDMzQuNTc3OSAxOS42OTg3IDM2LjcxODkgMjIuMjg4NCAzOC4yMDY5IDI0Ljg1NzVDMzkuNzUyIDI3LjUyNDkgNDAuMDI2OCAzMC44OTQgNDAuMDI2OCAzMi4yMzcyQzQwLjAyNjggMzMuNTgwNCAzOS4zNDk2IDM1LjU2OTIgMzguMDc4NiAzNy4yMTQ0WiIgZmlsbD0idXJsKCNwYWludDVfcmFkaWFsKSIvPg0KPC9nPg0KPGRlZnM+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxNC42NzU5IiB5MT0iNDQuMjYyNCIgeDI9IjU5LjI1OTciIHkyPSI0NC4yNjI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjMEM1OUE0Ii8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMTRBOEIiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MV9yYWRpYWwiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzkuMzAxMSA0NC41OTU2KSBzY2FsZSgyMy44NDYgMjIuNjc5MikiPg0KPHN0b3Agb2Zmc2V0PSIwLjcxNjU5IiBzdG9wLW9wYWNpdHk9IjAiLz4NCjxzdG9wIG9mZnNldD0iMC45NDU5IiBzdG9wLW9wYWNpdHk9IjAuNTMiLz4NCjxzdG9wIG9mZnNldD0iMSIvPg0KPC9yYWRpYWxHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjM4LjE4MDgiIHkxPSIyNC45MjA4IiB4Mj0iMTAuMzMyIiB5Mj0iNTUuMjU0NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iIzFCOURFMiIvPg0KPHN0b3Agb2Zmc2V0PSIwLjE2MTY0IiBzdG9wLWNvbG9yPSIjMTU5NURGIi8+DQo8c3RvcCBvZmZzZXQ9IjAuNjY3NDkiIHN0b3AtY29sb3I9IiMwNjgwRDciLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNzhENCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQzX3JhZGlhbCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxNy44MjYyIDQ5LjY2NTgpIHJvdGF0ZSgtODEuNDY0KSBzY2FsZSgzNS44MDg4IDI4Ljg1NSkiPg0KPHN0b3Agb2Zmc2V0PSIwLjc2MjkzIiBzdG9wLW9wYWNpdHk9IjAiLz4NCjxzdG9wIG9mZnNldD0iMC45NDU5IiBzdG9wLW9wYWNpdHk9IjAuNSIvPg0KPHN0b3Agb2Zmc2V0PSIxIi8+DQo8L3JhZGlhbEdyYWRpZW50Pg0KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDRfcmFkaWFsIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMzA4NTcgMTEuNzAxMykgcm90YXRlKDkyLjEyOSkgc2NhbGUoNTAuNjA3OSAxMDcuNzg2KSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjMzVDMUYxIi8+DQo8c3RvcCBvZmZzZXQ9IjAuMTEwNzkiIHN0b3AtY29sb3I9IiMzNEMxRUQiLz4NCjxzdG9wIG9mZnNldD0iMC4yMzE2NCIgc3RvcC1jb2xvcj0iIzJGQzJERiIvPg0KPHN0b3Agb2Zmc2V0PSIwLjMxNDQ2IiBzdG9wLWNvbG9yPSIjMkJDM0QyIi8+DQo8c3RvcCBvZmZzZXQ9IjAuNjczMzgiIHN0b3AtY29sb3I9IiMzNkM3NTIiLz4NCjwvcmFkaWFsR3JhZGllbnQ+DQo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50NV9yYWRpYWwiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuNjE3NSAxOS4zOTM3KSByb3RhdGUoNzMuNjc0Nykgc2NhbGUoMjQuMzM0NCAxOS44Njc4KSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjNjZFQjZFIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NkVCNkUiIHN0b3Atb3BhY2l0eT0iMCIvPg0KPC9yYWRpYWxHcmFkaWVudD4NCjxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K"
var link = document.getElementById('icon')
link.href = icourl

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