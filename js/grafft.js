const updateContent = (content) => {
	console.log(content)
	let el = document.getElementById("content")
	el.setAttribute("src", content)
	el.render()
}
