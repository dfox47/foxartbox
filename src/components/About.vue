<template>
	<div id="about" class="about js-block-scroll">
		<div class="wrap">
			<h2>About me</h2>

			<div :data-src="require('../assets/i/avatar.jpg')" class="about_main_img js-img-bg"></div>

			<div :class="{ 'active': aboutActive }" class="about_skills_wrap">
				<ul class="about_skills">
					<li v-for="aboutItem in aboutItems" :key="aboutItem.title" class="about_skills__item">
						<a :href="aboutItem.link" class="about_skills__link" target="_blank">
							<span :data-src="aboutItem.img" :title="aboutItem.title" class="about_skills__img js-img-scroll"></span>
						</a>
					</li>
				</ul>

				<ul class="about_skills_all">
					<li v-for="item in aboutItemsAll" :key="item.title" class="about_skills_all__item">
						<a :href="item.link" class="about_skills_all__link" target="_blank">
							<span :data-src="item.img" :title="item.title" class="about_skills_all__img js-img-scroll"></span>
						</a>
					</li>
				</ul>

				<p class="text-center">
					<button class="about_skills_more btn btn__main js-about-skills-more" @click="aboutSkillsMore"><span>All skills</span><span>Show less</span></button>
				</p>
			</div>

			<div class="about__content">
				<p>My name is Denis FOX.</p>

				<p>I'm a web-developer.</p>

				<p>10 years in web development. I make fast &amp; adaptive websites by w3c standards.</p>

				<h3>GITHUB</h3>

				<p><a href="//github.com/dfox47" target="_blank" title="my GIT repo">github.com/dfox47</a></p>

				<h3>Main skills:</h3>

				<p>JS, HTML, CSS, Figma</p>

				<h3>Additional skills</h3>

				<p>SEO, PHP, Gimp, Git</p>
			</div>
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
				{title: 'JS',                   img: require('../assets/i/icons/js.svg'),               link: '//www.javascript.com/'},
				{title: 'HTML',                 img: require('../assets/i/icons/html.svg'),             link: '//en.wikipedia.org/wiki/HTML'},
				{title: 'CSS',                  img: require('../assets/i/icons/css.svg'),              link: '//en.wikipedia.org/wiki/CSS'},
				{title: 'Figma',                img: require('../assets/i/icons/figma.svg'),            link: '//en.wikipedia.org/wiki/Figma_(software)'},
			],
			aboutItemsAll: [
				{title: 'Adobe Indesign',       img: require('../assets/i/icons/indesign.svg'),         link: '//en.wikipedia.org/wiki/Adobe_InDesign'},
				{title: 'Adobe Photoshop',      img: require('../assets/i/icons/photoshop.svg'),        link: '//en.wikipedia.org/wiki/Adobe_Photoshop'},
				{title: 'Adobe illustrator',    img: require('../assets/i/icons/illustrator.svg'),      link: '//en.wikipedia.org/wiki/Adobe_Illustrator'},
				{title: 'Gulp',                 img: require('../assets/i/icons/gulp.svg'),             link: '//en.wikipedia.org/wiki/Gulp.js'},
				{title: 'LESS',                 img: require('../assets/i/icons/less.svg'),             link: '//en.wikipedia.org/wiki/Less_(stylesheet_language)'},
				{title: 'Linux',                img: require('../assets/i/icons/linux.svg'),            link: '//en.wikipedia.org/wiki/Linux'},
				{title: 'MacOS',                img: require('../assets/i/icons/macos.svg'),            link: '//en.wikipedia.org/wiki/MacOS'},
				{title: 'Python',               img: require('../assets/i/icons/python.svg'),           link: '//en.wikipedia.org/wiki/Python_(programming_language)'},
				{title: 'SAP Hybris',           img: require('../assets/i/icons/hybris.svg'),           link: '//en.wikipedia.org/wiki/Hybris_(company)'},
				{title: 'SASS',                 img: require('../assets/i/icons/sass.svg'),             link: '//en.wikipedia.org/wiki/Sass_(stylesheet_language)'},
				{title: 'Wordpress',            img: require('../assets/i/icons/wordpress.svg'),        link: '//en.wikipedia.org/wiki/WordPress'},
				{title: 'bitrix',               img: require('../assets/i/icons/bitrix.svg'),           link: '//ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D1%80%D0%B8%D0%BA%D1%8124'},
				{title: 'confluence',           img: require('../assets/i/icons/confluence.svg'),       link: '//en.wikipedia.org/wiki/Confluence_(software)'},
				{title: 'filezilla',            img: require('../assets/i/icons/filezilla.svg'),        link: '//filezilla-project.org/'},
				{title: 'git',                  img: require('../assets/i/icons/git.svg'),              link: '//en.wikipedia.org/wiki/Git'},
				{title: 'jira',                 img: require('../assets/i/icons/jira.svg'),             link: '//en.wikipedia.org/wiki/Jira_(software)'},
				{title: 'joomla',               img: require('../assets/i/icons/joomla.svg'),           link: '//en.wikipedia.org/wiki/Joomla'},
				{title: 'mysql',                img: require('../assets/i/icons/mysql.svg'),            link: '//en.wikipedia.org/wiki/MySQL'},
				{title: 'opencart',             img: require('../assets/i/icons/opencart.svg'),         link: '//en.wikipedia.org/wiki/OpenCart'},
				{title: 'php',                  img: require('../assets/i/icons/php.svg'),              link: '//en.wikipedia.org/wiki/PHP'},
				{title: 'service now',          img: require('../assets/i/icons/snow.svg'),             link: '//en.wikipedia.org/wiki/ServiceNow'},
				{title: 'vue',                  img: require('../assets/i/icons/vue.svg'),              link: '//vuejs.org/'},
				{title: 'yext',                 img: require('../assets/i/icons/yext.svg'),             link: '//www.yext.com/index.html'},
				{title: 'gimp',                 img: require('../assets/i/icons/gimp.svg'),             link: '//en.wikipedia.org/wiki/GIMP'},
			],
			aboutActive: false
		}
	},
	methods: {
		aboutSkillsMore() {
			this.aboutActive = !this.aboutActive
		}
	},
	mounted () {
		imgScroll()
		// this.aboutSkillsMore()
	}
}
</script>