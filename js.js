let updateMainView = (view) => {
	// pass markdown document/contents to display pane
	console.log(view)
}

// TODO UPDATE
let setEmail = () => {
    let zz = '~!grafft%%$n5a6jason--!@#xc@#@@#**&^3.c%.32o3'
    zz = (zz.slice(15,20) + zz[30] + zz.slice(2,8) + zz.slice(37,39) + zz[zz.length-2])
    document.getElementById("qq").innerHTML = (`<a href="mailto:${zz}">${zz}</a>`)
}
