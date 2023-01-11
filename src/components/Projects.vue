<template>
	<div id="projects" class="js-block-scroll">
		<h2>Projects</h2>

		<div class="wrap">
			<div class="projects_list">
				<a class="projects_list__link" href="javascript:void(0);" v-for="project in projects" :key="project.name" :style="'background-image: url(' + project.mainImg + ');'">
					<span class="projects_list__title">{{ project.name }}</span>
				</a>
			</div>
		</div>

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

						<p><a :href="'//' + project.href" target="_blank">www.{{ project.href }}</a></p>
					</div>

					<p class="text-center">
						<a class="btn btn__main js-popup-show" @click="popupShow(project.id)" href="javascript:void(0);" :data-popup="project.id"><span>Show more</span></a>
					</p>
				</div>
			</div>

			<!--			<div class="popupX active js-popup" :data-popup-id="'project_id_' + project.id">-->
			<!--				<div class="popup__bg" @click="popupHide()"></div>-->

			<div class="popup__content_wrapX">
				<!--					<a class="btn btn__close popup__close" href="javascript:void(0);" @click="popupHide()"></a>-->

				<div class="popup__content">
					<!-- examples -->
					<!-- https://ismail9k.github.io/vue3-carousel/examples.html -->
				</div>
			</div>
			<!--			</div>-->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Projects',
	data() {
		return {
			projects: [
				{
					name: 'Brokertop',
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
					name: 'Chocolana',
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
					name: 'Villabansko',
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
					name: 'P3week',
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
			// document.querySelector('html').classList.remove('popup_active')

			document.querySelectorAll('.js-popup').forEach((e) => {
				e.classList.remove('active')
			})
		},
		// show popup and put content from template
		popupShow(id) {
			document.querySelector('[data-popup-id="project_id_' + id + '"]').classList.add('active')

			// if (!$popup || !$popupContent || !$contentData) return

			// $popupContent.innerHTML = $contentData.innerHTML

			// show popup
			// document.querySelector('html').classList.add('popup_active')

			// console.log('popupId | ', id)
		}
	}
}
</script>