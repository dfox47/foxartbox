// hide popup
const popupHide = () => {
	document.querySelector('html').classList.remove('popup_active')
}

// show popup and put content from template
const popupShow = (id) => {
	const $contentData  = document.querySelector('.js-project-desc[data-popup="' + id + '"]')
	const $popupContent = document.querySelector('.js-popup-content')

	if (!$popupContent || !$contentData) return

	$popupContent.innerHTML = $contentData.innerHTML

	// show popup
	document.querySelector('html').classList.add('popup_active')
}

// show project popup with data at link
const popupProjectShow = (title, price, desc, href, images) => {
	const $popupContent = document.querySelector('.js-popup-content')
	let imagesList = ''

	if (!$popupContent) return

	images.forEach((e) => {
		imagesList += '<img class="project_images__item" src="' + e.src + '" alt="" loading="lazy">'
	})

	$popupContent.innerHTML = '<div class="project__title">' +
		'<h3>' + title +  '</h3>' +
		'<div class="project__price">' + price + '</div>' +
		'</div>' +
		'<p class="project__desc">' + desc + '</p>' +
		'<p><a class="project__link" href="//' + href + '" target="_blank">www.' + href + '</a></p>' +
		'<div class="project_images">' + imagesList + '</div>'

	// show popup
	document.querySelector('html').classList.add('popup_active')
}

export {popupHide, popupProjectShow, popupShow}