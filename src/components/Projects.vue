<template>
	<div id="projects" class="js-block-scroll">
		<h2>Projects</h2>

		<div class="project" v-for="project in projects" :key="project.name">
			<div class="project__content" :class="'project_bg_type_' + project.id">
				<div class="wrap">
					<img class="project__img" :src="project.mainImg" alt="">

					<div class="project__desc">
						<div class="project__title">
							<h3>{{ project.title }}</h3>

							<div class="project__price">{{ project.price }}</div>
						</div>

						<p>{{ project.desc }}</p>

						<p>
							<a :href="'//' + project.href" target="_blank">www.{{ project.href }}</a>
						</p>
					</div>

					<div class="text-center">
						<a class="btn btn__main js-popup-show" @click="popupShow(project.id)" href="javascript:void(0);" :data-popup="project.id"><span>Show more</span></a>
					</div>
				</div>
			</div>

			<div class="project_more" :data-popup-content="project.id">
				<!-- examples -->
				<!-- https://ismail9k.github.io/vue3-carousel/examples.html -->
				<carousel :items-to-show="1">
					<slide v-for="slide in project.imgs" :key="slide.img">
						<img class="carousel__item" :src="slide.img" alt="">
					</slide>

					<template #addons>
						<navigation />
						<pagination />
					</template>
				</carousel>
			</div>
		</div>
	</div>

	<!-- popup -->
	<div class="popup js-popup">
		<div class="popup__bg" @click="popupHide()"></div>

		<div class="popup__content_wrap">
			<a class="btn btn__close popup__close" href="javascript:void(0);" @click="popupHide()"></a>

			<div class="popup__content js-popup-content"></div>
		</div>
	</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
	name: 'Projects',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation
	},
	data() {
		return {
			projects: [
				{
					name: 'brokertop',
					desc: 'Rent or sale commercial and private objects of real estate.',
					href: 'brokertop.ru',
					id: 5,
					mainImg: require('../assets/i/projects/brokertop/0.jpg'),
					price: '5000 € | 3 months',
					title: 'Brokertop | Real estate agency',
					imgs: [
						{img: require('../assets/i/projects/brokertop/1.jpg')},
						{img: require('../assets/i/projects/brokertop/2.jpg')},
						{img: require('../assets/i/projects/brokertop/3.jpg')}
					]
				},
				{
					name: 'chocolana',
					desc: 'Website for the pastry shop «Chocolana» with the ability to create a personalized chocolate set. Food photography, design and programming.',
					href: 'chocolana.com',
					id: 2,
					mainImg: require('../assets/i/projects/chocolana/0.png'),
					price: '3500 € | 3 months',
					title: 'Chocolana online shop',
					imgs: [
						{img: require('../assets/i/projects/chocolana/1.jpg')},
						{img: require('../assets/i/projects/chocolana/2.jpg')},
						{img: require('../assets/i/projects/chocolana/3.jpg')}
					]
				},
				{
					name: 'villabansko',
					desc: 'Elegant design solution for a premium villa booking. Web-site presents facilities and gives an overview of the main features.',
					href: 'villabansko.com',
					id: 3,
					mainImg: require('../assets/i/projects/villabansko/0.png'),
					price: '2500 € | 1 month',
					title: 'Villa Pirin Golf',
					imgs: [
						{img: require('../assets/i/projects/villabansko/1.jpg')},
						{img: require('../assets/i/projects/villabansko/2.jpg')},
						{img: require('../assets/i/projects/villabansko/3.jpg')},
						{img: require('../assets/i/projects/villabansko/4.jpg')}
					]
				},
				{
					name: 'p3week',
					desc: 'International forum web site on the topic of cooperation between the state and private business (public-private enterprise). A redesign of the existing site was made in order to improve usability.',
					href: 'p3week.ru',
					id: 4,
					mainImg: require('../assets/i/projects/p3week/0.png'),
					price: '7800 € | 4 months',
					title: 'P3week forum',
					imgs: [
						{img: require('../assets/i/projects/p3week/1.jpg')},
						{img: require('../assets/i/projects/p3week/2.jpg')},
						{img: require('../assets/i/projects/p3week/3.jpg')},
						{img: require('../assets/i/projects/p3week/4.jpg')},
						{img: require('../assets/i/projects/p3week/5.jpg')},
						{img: require('../assets/i/projects/p3week/6.jpg')},
						{img: require('../assets/i/projects/p3week/7.jpg')}
					]
				}
			]
		}
	},
	methods: {
		// hide popup
		popupHide() {
			document.querySelector('html').classList.remove('popup_active')
		},
		// show popup and put content from template
		popupShow(id) {
			const $popup        = document.querySelector('.js-popup')
			const $popupContent = document.querySelector('.js-popup-content')
			const $contentData  = document.querySelector('[data-popup-content="' + id + '"]')

			if (!$popup || !$popupContent || !$contentData) return

			$popupContent.innerHTML = $contentData.innerHTML
			// $popupContent.appendChild($contentData)

			// show popup
			document.querySelector('html').classList.add('popup_active')

			console.log('popupId | ', id)
		}
	}
}
</script>