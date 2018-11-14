let images = new Array('aeds.jpg', 'beaumont.jpg', 'corner_equip.jpg');

let getImage = () => {
    let index = Math.floor(Math.random() * images.length)
    document.getElementById("headerImage").innerHTML = (`<img src="img/${images[index]}" width="${window.innerWidth - 18}"/>`)
}

let setEmail = () => {
    let zz = '~!grafft%%$n5a6jason--!@#xc@#@@#**&^3.c%.32o3'
    zz = (zz.slice(15,20) + zz[30] + zz.slice(2,8) + zz.slice(37,39) + zz[zz.length-2])
    document.getElementById("qq").innerHTML = (`<a href="mailto:${zz}">${zz}</a>`)
}