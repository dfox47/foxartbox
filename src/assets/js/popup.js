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

export {popupHide, popupShow}