<template>
	<div id="about" class="about js-block-scroll">
		<div class="wrap">
			<h2>About</h2>

			<img class="about_main_img" src="../assets/i/avatar.jpg" alt="Denis FOX">

			<ul class="about_list">
				<li class="about_list__item" v-for="aboutItem in aboutItems" :key="aboutItem.title"><img class="about_list__img" :src="aboutItem.img" alt="" :title="aboutItem.title"></li>
			</ul>

			<p>My name is Denis FOX.</p>

			<p>I'm a frontend developer. I know how to make fast, adaptive websites.</p>

			<h3>GITHUB</h3>

			<p><a href="//github.com/dfox47" target="_blank">github.com/dfox47</a></p>

			<h3>Main skills:</h3>

			<p>Vue (Vuetify, Vue router), JS, HTML, CSS (less/scss), gulp, Figma, CMS Wordpress</p>

			<h3>Additional skills</h3>

			<p>PHP, JAVA, SAP Hybris, Adobe Illustrator / Photoshop / Indesign, Gimp, Git, Python, CMS Shopify, CMS Joomla, CMS OpenCart, PixelPerfect, Bootstrap</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			aboutItems: [
				{title: 'vue',                  img: require('../assets/i/icons/vue.svg')},
				{title: 'JS',                   img: require('../assets/i/icons/js.svg')},
				{title: 'git',                  img: require('../assets/i/icons/git.svg')},
				{title: 'HTML',                 img: require('../assets/i/icons/html.svg')},
				{title: 'CSS',                  img: require('../assets/i/icons/css.svg')},
				{title: 'SASS',                 img: require('../assets/i/icons/sass.svg')},
				{title: 'LESS',                 img: require('../assets/i/icons/less.svg')},
				{title: 'Figma',                img: require('../assets/i/icons/figma.svg')},
				{title: 'Gulp',                 img: require('../assets/i/icons/gulp.svg')},
				{title: 'Adobe illustrator',    img: require('../assets/i/icons/illustrator.svg')},
				{title: 'Adobe Indesign',       img: require('../assets/i/icons/indesign.svg')},
				{title: 'Adobe Photoshop',      img: require('../assets/i/icons/photoshop.svg')},
				{title: 'Python',               img: require('../assets/i/icons/python.svg')},
				{title: 'Wordpress',            img: require('../assets/i/icons/wordpress.svg')},
				{title: 'SAP Hybris',           img: require('../assets/i/icons/hybris.svg')},
				{title: 'MacOS',                img: require('../assets/i/icons/macos.svg')},
				{title: 'Linux',                img: require('../assets/i/icons/linux.svg')},
			],
		}
	}
}
</script>