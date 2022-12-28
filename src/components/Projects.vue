<template>
	<div id="projects" class="js-block-scroll">
		<h2>Projects</h2>

		<!-- brokertop -->
		<div class="project">
			<div class="project__content project_bg_type_5">
				<div class="wrap">
					<img class="project__img" src="../assets/i/projects/brokertop/0.jpg" alt=""/>

					<div class="project__desc">
						<div class="project__title">
							<h3>Brokertop | Real estate agency</h3>

							<div class="project__price">5000 € | 3 months</div>
						</div>

						<p>
							Rent or sale commercial and private objects of real estate. <a href="//brokertop.ru/" target="_blank">www.brokertop.ru</a>
						</p>
					</div>

					<div class="text-center">
						<!--						<a class="btn btn__main js-scroll-to js-show-hidden js-btn-3d-wrap" href="#project-2-more" data-show-id="2"><span class="js-btn-3d">Show more</span></a>-->
					</div>
				</div>
			</div>

			<div class="project_more js-project-more" data-hidden-id="2">
				<a class="btn btn__close js-project-close js-scroll-to" href="#project-2"><span></span><span></span></a>

				<!-- examples -->
				<!-- https://ismail9k.github.io/vue3-carousel/examples.html -->
				<carousel :items-to-show="1">
					<slide v-for="slide in project_slides_4" :key="slide.img">
						<img class="carousel__item" :src="slide.img" alt="">
					</slide>

					<template #addons>
						<navigation />
						<pagination />
					</template>
				</carousel>
			</div>
		</div>

		<!-- chocolana -->
		<div class="project">
			<div class="project__content project_bg_type_2">
				<div class="wrap">
					<img class="project__img" src="../assets/i/projects/chocolana/0.png" alt=""/>

					<div class="project__desc">
						<div class="project__title">
							<h3>Chocolana online shop</h3>

							<div class="project__price">3500 € | 3 months</div>
						</div>

						<p>
							Website for the pastry shop «Chocolana» with the ability to create a personalized chocolate set. Food photography, design and programming. <a href="//chocolana.com/" target="_blank">www.chocolana.com</a>
						</p>
					</div>

					<div class="text-center">
						<!--						<a class="btn btn__main js-scroll-to js-show-hidden js-btn-3d-wrap" href="#project-2-more" data-show-id="2"><span class="js-btn-3d">Show more</span></a>-->
					</div>
				</div>
			</div>

			<div id="project-2-more"></div>

			<div class="project_more js-project-more" data-hidden-id="2">
				<a class="btn btn__close js-project-close js-scroll-to" href="#project-2"><span></span><span></span></a>

				<!-- examples -->
				<!-- https://ismail9k.github.io/vue3-carousel/examples.html -->
				<carousel :items-to-show="1">
					<slide v-for="slide in project_slides_1" :key="slide.img">
						<img class="carousel__item" :src="slide.img" alt="">
					</slide>

					<template #addons>
						<navigation />
						<pagination />
					</template>
				</carousel>
			</div>
		</div>

		<!-- villabansko -->
		<div class="project">
			<div class="project__content project_bg_type_3">
				<div class="wrap">
					<img class="project__img" src="../assets/i/projects/villabansko/0.png" alt=""/>

					<div class="project__desc">
						<div class="project__title">
							<h3>Villa Pirin Golf</h3>

							<div class="project__price">2500 € | 1 month</div>
						</div>

						<p>
							Elegant design solution for a premium villa booking. Web-site presentes facilities and gives an overview of the main features. <a href="//villabansko.com/" target="_blank">www.villabansko.com</a>
						</p>
					</div>

					<div class="text-center">
						<!--						<a class="btn btn__main js-scroll-to js-show-hidden js-btn-3d-wrap" href="#project-3-more" data-show-id="3"><span class="js-btn-3d">Show more</span></a>-->
					</div>
				</div>
			</div>

			<div id="project-3-more"></div>

			<div class="project_more js-project-more" data-hidden-id="3">
				<a class="btn btn__close js-project-close js-scroll-to" href="#project-3"><span></span><span></span></a>

				<!-- examples -->
				<!-- https://ismail9k.github.io/vue3-carousel/examples.html -->
				<carousel :items-to-show="1">
					<slide v-for="slide in project_slides_2" :key="slide.img">
						<img class="carousel__item" :src="slide.img" alt="">
					</slide>

					<template #addons>
						<navigation />
						<pagination />
					</template>
				</carousel>
			</div>
		</div>

		<!-- p3week -->
		<div class="project">
			<div class="project__content project_bg_type_4">
				<div class="wrap">
					<img class="project__img" src="../assets/i/projects/p3week/0.png" alt=""/>

					<div class="project__desc">
						<div class="project__title">
							<h3>P3week forum</h3>

							<div class="project__price">7800 € | 4 months</div>
						</div>

						<p>
							International forum web site on the topic of cooperation between the state and private business (public-private enterprise). A redesign of the existing site was made in order to improve usability. <a href="//p3week.ru/en/" target="_blank">www.p3week.ru</a>
						</p>
					</div>

					<div class="text-center">
						<!--						<a class="btn btn__main js-scroll-to js-show-hidden js-btn-3d-wrap" href="#project-4-more" data-show-id="4"><span class="js-btn-3d">Show more</span></a>-->
					</div>
				</div>
			</div>

			<div id="project-4-more"></div>

			<div class="project_more js-project-more" data-hidden-id="4">
				<a class="btn btn__close js-project-close js-scroll-to" href="#project-4"><span></span><span></span></a>

				<!-- examples -->
				<!-- https://ismail9k.github.io/vue3-carousel/examples.html -->
				<carousel :items-to-show="1">
					<slide v-for="slide in project_slides_3" :key="slide.img">
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
			// chocolana
			project_slides_1: [
				{img: require('../assets/i/projects/chocolana/1.jpg')},
				{img: require('../assets/i/projects/chocolana/2.jpg')},
				{img: require('../assets/i/projects/chocolana/3.jpg')},
				{img: require('../assets/i/projects/chocolana/4.jpg')},
				{img: require('../assets/i/projects/chocolana/5.jpg')},
				{img: require('../assets/i/projects/chocolana/6.jpg')}
			],
			// villabansko
			project_slides_2: [
				{img: require('../assets/i/projects/villabansko/1.jpg')},
				{img: require('../assets/i/projects/villabansko/2.jpg')},
				{img: require('../assets/i/projects/villabansko/3.jpg')},
				{img: require('../assets/i/projects/villabansko/4.jpg')}
			],
			// p3week
			project_slides_3: [
				{img: require('../assets/i/projects/p3week/1.jpg')},
				{img: require('../assets/i/projects/p3week/2.jpg')},
				{img: require('../assets/i/projects/p3week/3.jpg')},
				{img: require('../assets/i/projects/p3week/4.jpg')},
				{img: require('../assets/i/projects/p3week/5.jpg')},
				{img: require('../assets/i/projects/p3week/6.jpg')},
				{img: require('../assets/i/projects/p3week/7.jpg')}
			],
			project_slides_4: [
				{img: require('../assets/i/projects/brokertop/1.jpg')},
				{img: require('../assets/i/projects/brokertop/2.jpg')},
				{img: require('../assets/i/projects/brokertop/3.jpg')},
			]
		}
	},
}
</script>