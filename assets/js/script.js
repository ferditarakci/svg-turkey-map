/*!
	SVG TURKIYE HARITASI / SVG TURKEY MAP
	Web Developer: Ferdi Tarakci
	Website: www.ferditarakci.com
	Date: 2022/11/18
*/

const getMap = () => {
	fetch('/assets/images/turkey-map.svg')
	.then(response => response.text())
	.then(response => document.getElementById('svgMap').insertAdjacentHTML("afterbegin", response))
	.catch(error => {
		console.error(error)
		alert('Harita işlenirken bir hata oluştu!')
	})
}

getMap()