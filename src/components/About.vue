<template>
	<div id="about" class="about js-block-scroll">
		<div class="wrap">
			<h2>About me</h2>

			<div :data-src="require('../assets/i/avatar.jpg')" class="about_main_img js-img-bg"></div>

			<div :class="{ 'active': aboutActive }" class="about_skills_wrap">
				<ul class="about_skills">
					<li v-for="aboutItem in aboutItems" :key="aboutItem.title" class="about_skills__item">
						<a :href="aboutItem.link" class="about_skills__link" target="_blank">
							<img :src="aboutItem.img" :title="aboutItem.title" class="about_skills__img" :alt="aboutItem.title">
						</a>
					</li>
				</ul>

				<ul class="about_skills_all">
					<li v-for="item in aboutItemsAll" :key="item.title" class="about_skills_all__item">
						<a :href="item.link" class="about_skills_all__link" target="_blank">
							<img :src="item.img" :title="item.title" class="about_skills_all__img" :alt="item.title">
              <span class="about_skills_all__title">{{ item.title }}</span>
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

				<p><a class="about__link" href="//github.com/dfox47" target="_blank" title="my GIT repo">github.com/dfox47</a></p>

				<h3>Main skills:</h3>

				<p>JS, HTML, CSS, Figma</p>

				<h3>Additional skills</h3>

				<p>SEO, PHP, Gimp, Git</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import {ref} from 'vue'

const aboutActive = ref(false)

const aboutItems = [
  {title: 'JS',     img: require('../assets/i/icons/js.svg'),       link: '//www.javascript.com/'},
  {title: 'HTML',   img: require('../assets/i/icons/html.svg'),     link: '//en.wikipedia.org/wiki/HTML'},
  {title: 'CSS',    img: require('../assets/i/icons/css.svg'),      link: '//en.wikipedia.org/wiki/CSS'},
  {title: 'Figma',  img: require('../assets/i/icons/figma.svg'),    link: '//en.wikipedia.org/wiki/Figma_(software)'},
]

const aboutItemsAll = [
  {title: 'Adobe Experience Manager', img: require('../assets/i/icons/aem.svg'), link: '//business.adobe.com/blog/basics/adobe-experience-manager'},
  {title: 'Adobe Indesign',    img: require('../assets/i/icons/indesign.svg'),   link: '//en.wikipedia.org/wiki/Adobe_InDesign'},
  {title: 'Adobe Photoshop',   img: require('../assets/i/icons/photoshop.svg'),  link: '//en.wikipedia.org/wiki/Adobe_Photoshop'},
  {title: 'Adobe illustrator', img: require('../assets/i/icons/illustrator.svg'),link: '//en.wikipedia.org/wiki/Adobe_Illustrator'},
  {title: 'Bitrix',            img: require('../assets/i/icons/bitrix.svg'),     link: '//ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D1%80%D0%B8%D0%BA%D1%8124'},
  {title: 'Confluence',        img: require('../assets/i/icons/confluence.svg'), link: '//en.wikipedia.org/wiki/Confluence_(software)'},
  {title: 'Docker',            img: require('../assets/i/icons/docker.svg'),     link: '//www.docker.com/'},
  {title: 'Filezilla',         img: require('../assets/i/icons/filezilla.svg'),  link: '//filezilla-project.org/'},
  {title: 'Gimp',              img: require('../assets/i/icons/gimp.svg'),       link: '//en.wikipedia.org/wiki/GIMP'},
  {title: 'Git',               img: require('../assets/i/icons/git.svg'),        link: '//en.wikipedia.org/wiki/Git'},
  {title: 'Gulp',              img: require('../assets/i/icons/gulp.svg'),       link: '//en.wikipedia.org/wiki/Gulp.js'},
  {title: 'Jira',              img: require('../assets/i/icons/jira.svg'),       link: '//en.wikipedia.org/wiki/Jira_(software)'},
  {title: 'Joomla',            img: require('../assets/i/icons/joomla.svg'),     link: '//en.wikipedia.org/wiki/Joomla'},
  {title: 'LESS',              img: require('../assets/i/icons/less.svg'),       link: '//en.wikipedia.org/wiki/Less_(stylesheet_language)'},
  {title: 'Linux',             img: require('../assets/i/icons/linux.svg'),      link: '//en.wikipedia.org/wiki/Linux'},
  {title: 'MacOS',             img: require('../assets/i/icons/macos.svg'),      link: '//en.wikipedia.org/wiki/MacOS'},
  {title: 'Mysql',             img: require('../assets/i/icons/mysql.svg'),      link: '//en.wikipedia.org/wiki/MySQL'},
  {title: 'Nuxt',              img: require('../assets/i/icons/nuxt.svg'),       link: '//nuxt.com/'},
  {title: 'Opencart',          img: require('../assets/i/icons/opencart.svg'),   link: '//en.wikipedia.org/wiki/OpenCart'},
  {title: 'Php',               img: require('../assets/i/icons/php.svg'),        link: '//en.wikipedia.org/wiki/PHP'},
  {title: 'Python',            img: require('../assets/i/icons/python.svg'),     link: '//en.wikipedia.org/wiki/Python_(programming_language)'},
  {title: 'React',             img: require('../assets/i/icons/react.svg'),      link: '//react.dev/'},
  {title: 'SAP Hybris',        img: require('../assets/i/icons/hybris.svg'),     link: '//en.wikipedia.org/wiki/Hybris_(company)'},
  {title: 'SASS',              img: require('../assets/i/icons/sass.svg'),       link: '//en.wikipedia.org/wiki/Sass_(stylesheet_language)'},
  {title: 'Service now',       img: require('../assets/i/icons/snow.svg'),       link: '//en.wikipedia.org/wiki/ServiceNow'},
  {title: 'Vue',               img: require('../assets/i/icons/vue.svg'),        link: '//vuejs.org/'},
  {title: 'Wordpress',         img: require('../assets/i/icons/wordpress.svg'),  link: '//en.wikipedia.org/wiki/WordPress'},
  {title: 'Yext',              img: require('../assets/i/icons/yext.svg'),       link: '//www.yext.com/index.html'},
]

// Method to toggle `aboutActive`
const aboutSkillsMore = () => {
  aboutActive.value = !aboutActive.value;
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;

.about {
  font-size: 20px;
  margin: 0 auto;
  padding: 50px 0 100px;

  &__content {
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
  }

	&__link {
    color: $c_text;
  }
}


.about_skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  min-height: 9rem;
  padding: 3rem 0 0;

  &__img {
    display: block;
    height: 50px;
    object-fit: contain;
    width: 50px;
  }

  &__item {
    padding: 4px;
  }

  @media #{$mobile_min} {
    &__img {
      filter: grayscale(30%) brightness(.5);
      transition: filter, height, width, margin-top, .2s cubic-bezier(.25, 1, .5, 1);
      will-change: filter;
    }

    &__item {
      &:has(+ .about_skills__item:hover) {
        .about_skills__img {
          filter: inherit;
          height: 80px;
          margin: -20px 0 0;
          width: 80px;
        }
      }

      &:hover {
        .about_skills__img {
          filter: inherit;
          height: 100px;
          margin: -40px 0 0;
          width: 100px;
        }

        + .about_skills__item {
          .about_skills__img {
            filter: inherit;
            height: 80px;
            margin: -20px 0 0;
            width: 80px;
          }
        }
      }
    }
  }
}

.about_skills_all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-height: 0;
  max-width: 50rem;
  overflow: hidden;
  position: relative;
  transition: max-height 1s cubic-bezier(0,1,0,1);

  &__img {
    display: block;
    height: 6rem;
    object-fit: contain;
    padding: .7rem;
    transition: $transition;
    width: 6rem;

    &:hover {
      padding: 0;
    }
  }

  &__link {
    color: $c_text;
    display: block;
    font-size: 0.8rem;
    max-width: 84px;
    text-align: center;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  &__title {
    display: block;
  }
}

.about_skills_more {
  span {
    &:last-child {
      display: none;
    }
  }
}

.about_skills_wrap {
  padding: 0 0 2rem;

  &.active {
    .about_skills_more {
      span {
        &:first-child {
          display: none;
        }

        &:last-child {
          display: block;
        }
      }
    }

    .about_skills_all {
      max-height: 1000px;
      transition: max-height 1.5s ease-in-out;
    }
  }
}

.about_main_img {
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: block;
  margin: 3rem auto;
  max-width: 25rem;
  position: relative;
  width: 100%;
  z-index: 3;

  &::after {
    background: radial-gradient(ellipse at center,rgba(#fff,0) 0,rgba(#fff,0) 50%,#fff 70%,#fff 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 5;
  }

  &::before {
    content: "";
    display: block;
    padding: 100% 0 0;
    position: relative;
    width: 100%;
  }
}
</style>