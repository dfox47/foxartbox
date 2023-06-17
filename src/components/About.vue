<template>
	<div id="about" class="about js-block-scroll">
		<div class="wrap">
			<h2>About me</h2>

			<span class="about_main_img js-img-scroll" :data-src="require('../assets/i/avatar.jpg')"></span>

			<ul class="about_list">
				<li class="about_list__item" v-for="aboutItem in aboutItems" :key="aboutItem.title">
					<a class="about_list__link" :href="aboutItem.link" target="_blank">
						<span class="about_list__img js-img-scroll" :data-src="aboutItem.img" :data-title="aboutItem.title"></span>
					</a>
				</li>
			</ul>

			<p>My name is Denis FOX.</p>

			<p>I'm a frontend developer.</p>

			<p>10 years in web development. I make fast &amp; adaptive websites by w3c standards.</p>

			<h3>GITHUB</h3>

			<p><a href="//github.com/dfox47" target="_blank">github.com/dfox47</a></p>

			<h3>Main skills:</h3>

			<p>JS, HTML, CSS (+SCSS), Vue, gulp, Figma</p>

			<h3>Additional skills</h3>

			<p>SEO, PHP, Gimp, Git</p>
		</div>
	</div>
</template>

<script>
import imgScroll from '../assets/js/imgScroll'

export default {
	name: 'About',
	data() {
		return {
			aboutItems: [
				{title: 'vue',                  img: require('../assets/i/icons/vue.svg'),              link: '//vuejs.org/'},
				{title: 'JS',                   img: require('../assets/i/icons/js.svg'),               link: '//www.javascript.com/'},
				{title: 'git',                  img: require('../assets/i/icons/git.svg'),              link: '//en.wikipedia.org/wiki/Git'},
				{title: 'HTML',                 img: require('../assets/i/icons/html.svg'),             link: '//en.wikipedia.org/wiki/HTML'},
				{title: 'CSS',                  img: require('../assets/i/icons/css.svg'),              link: '//en.wikipedia.org/wiki/CSS'},
				{title: 'SASS',                 img: require('../assets/i/icons/sass.svg'),             link: '//en.wikipedia.org/wiki/Sass_(stylesheet_language)'},
				// {title: 'LESS',                 img: require('../assets/i/icons/less.svg'),             link: '//en.wikipedia.org/wiki/Less_(stylesheet_language)'},
				{title: 'Figma',                img: require('../assets/i/icons/figma.svg'),            link: '//en.wikipedia.org/wiki/Figma_(software)'},
				{title: 'Gulp',                 img: require('../assets/i/icons/gulp.svg'),             link: '//en.wikipedia.org/wiki/Gulp.js'},
				// {title: 'Adobe illustrator',    img: require('../assets/i/icons/illustrator.svg'),      link: '//en.wikipedia.org/wiki/Adobe_Illustrator'},
				// {title: 'Adobe Indesign',       img: require('../assets/i/icons/indesign.svg'),         link: '//en.wikipedia.org/wiki/Adobe_InDesign'},
				{title: 'Adobe Photoshop',      img: require('../assets/i/icons/photoshop.svg'),        link: '//en.wikipedia.org/wiki/Adobe_Photoshop'},
				// {title: 'Python',               img: require('../assets/i/icons/python.svg'),           link: '//en.wikipedia.org/wiki/Python_(programming_language)'},
				{title: 'Wordpress',            img: require('../assets/i/icons/wordpress.svg'),        link: '//en.wikipedia.org/wiki/WordPress'},
				// {title: 'SAP Hybris',           img: require('../assets/i/icons/hybris.svg'),           link: '//en.wikipedia.org/wiki/Hybris_(company)'},
				// {title: 'MacOS',                img: require('../assets/i/icons/macos.svg'),            link: '//en.wikipedia.org/wiki/MacOS'},
				// {title: 'Linux',                img: require('../assets/i/icons/linux.svg'),            link: '//en.wikipedia.org/wiki/Linux'},
			],
		}
	},
	mounted () {
		imgScroll()
	}
}
</script>