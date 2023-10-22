<template>
	<div id="projects" class="js-block-scroll">
		<h2>Projects</h2>

		<div class="wrap2">
			<div class="projects_list">
				<a
					:key="project.name"
					:style="'background-image: url(' + project.mainImg + ');'"
					@click="popupProjectShow(project.title, project.price, project.desc, project.href, project.images)"
					class="projects_list__link"
					href="javascript:void(0);"
					v-for="project in projects"
				>
					<span class="projects_list__title">{{ project.name }}</span>
				</a>
			</div>
		</div>
	</div>

	<div class="popup js-popup">
		<div class="popup__bg" @click="popupHide()"></div>

		<div class="popup__content_wrap">
			<a class="btn btn__close" href="javascript:void(0);" @click="popupHide()"></a>

			<div class="popup__content js-popup-content"></div>
		</div>
	</div>
</template>

<script>
import {popupHide, popupProjectShow, popupShow} from '../assets/js/popup'

export default {
	name: 'Projects',
	data() {
		return {
			projects: [
				{
					name: 'https://tatyanavoilokova.com',
					desc: 'Welcome to Tatyana Voilkova Photography, where moments come to life in stunning images. She is passionate about freezing time, creating memories, and telling stories through the art of photography.',
					href: 'tatyanavoilokova.com',
					id: 1,
					mainImg: require('../assets/i/projects/tatyanavoilokova/0.jpg'),
					price: '1500 € | 3 weeks',
					title: 'Tatyana Voilokova',
					images: [
						{src: require('../assets/i/projects/tatyanavoilokova/1.jpg')},
						{src: require('../assets/i/projects/tatyanavoilokova/2.jpg')},
						{src: require('../assets/i/projects/tatyanavoilokova/3.jpg')},
						{src: require('../assets/i/projects/tatyanavoilokova/4.jpg')},
						{src: require('../assets/i/projects/tatyanavoilokova/5.jpg')},
						{src: require('../assets/i/projects/tatyanavoilokova/6.jpg')}
					]
				},
				{
					name: 'Brokertop',
					desc: 'Rent or sale commercial and private objects of real estate.',
					href: 'brokertop.ru',
					id: 5,
					mainImg: require('../assets/i/projects/brokertop/0.jpg'),
					price: '5000 € | 3 months',
					title: 'Brokertop | Real estate agency',
					images: [
						{src: require('../assets/i/projects/brokertop/1.jpg')},
						{src: require('../assets/i/projects/brokertop/2.jpg')},
						{src: require('../assets/i/projects/brokertop/3.jpg')}
					]
				},
				{
					name: 'Chocolana',
					desc: 'Website for the pastry shop «Chocolana» with the ability to create a personalized chocolate set. Food photography, design and programming.',
					href: 'chocolana.com',
					id: 4,
					mainImg: require('../assets/i/projects/chocolana/0.jpg'),
					price: '3500 € | 3 months',
					title: 'Chocolana online shop',
					images: [
						{src: require('../assets/i/projects/chocolana/1.jpg')},
						{src: require('../assets/i/projects/chocolana/2.jpg')},
						{src: require('../assets/i/projects/chocolana/3.jpg')},
						{src: require('../assets/i/projects/chocolana/4.jpg')},
						{src: require('../assets/i/projects/chocolana/5.jpg')},
						{src: require('../assets/i/projects/chocolana/6.jpg')},
						{src: require('../assets/i/projects/chocolana/7.jpg')}
					]
				},
				{
					name: 'Villabansko',
					desc: 'Elegant design solution for a premium villa booking. Web-site presents facilities and gives an overview of the main features.',
					href: 'villabansko.com',
					id: 3,
					mainImg: require('../assets/i/projects/villabansko/0.jpg'),
					price: '2500 € | 1 month',
					title: 'Villa Pirin Golf',
					images: [
						{src: require('../assets/i/projects/villabansko/1.jpg')},
						{src: require('../assets/i/projects/villabansko/2.jpg')}
					]
				},
				{
					name: 'Villathassos',
					desc: 'Premium villa on Thassos for sale.',
					href: 'villathassos.com',
					id: 2,
					mainImg: require('../assets/i/projects/villathassos/0.jpg'),
					price: '2500 € | 1 month',
					title: 'Villa at Thassos',
					images: [
						{src: require('../assets/i/projects/villathassos/1.jpg')},
						{src: require('../assets/i/projects/villathassos/2.jpg')},
						{src: require('../assets/i/projects/villathassos/3.jpg')},
						{src: require('../assets/i/projects/villathassos/4.jpg')}
					]
				},
				{
					name: 'P3week',
					desc: 'International forum web site on the topic of cooperation between the state and private business (public-private enterprise). A redesign of the existing site was made in order to improve usability.',
					href: 'p3week.ru',
					id: 1,
					mainImg: require('../assets/i/projects/p3week/0.jpg'),
					price: '7800 € | 4 months',
					title: 'P3week forum',
					images: [
						{src: require('../assets/i/projects/p3week/1.jpg')},
						{src: require('../assets/i/projects/p3week/2.jpg')},
						{src: require('../assets/i/projects/p3week/3.jpg')},
						{src: require('../assets/i/projects/p3week/4.jpg')},
						{src: require('../assets/i/projects/p3week/5.jpg')},
						{src: require('../assets/i/projects/p3week/6.jpg')},
						{src: require('../assets/i/projects/p3week/7.jpg')}
					]
				},
				{
					name: 'ODD',
					desc: 'Example of search based on Vue.js',
					href: 'odd.foxartbox.com',
					id: 6,
					mainImg: require('../assets/i/projects/odd/0.jpg'),
					price: '',
					title: 'Search on vue.js',
					images: [
						{src: require('../assets/i/projects/odd/1.jpg')}
					]
				}
			]
		}
	},
	methods: {
		popupHide,
		popupProjectShow,
		popupShow
	}
}
</script>