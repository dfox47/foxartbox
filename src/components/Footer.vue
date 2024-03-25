<template>
	<div class="footer">
		<div class="wrap">
			<span class="gotop" @click.prevent="scrollTo('top')"></span>

			<span :data-src="require('../assets/i/qr_code.svg')" class="qr_code js-img-scroll"></span>

			<ul class="social_links">
				<li v-for="(footerLink) in footerLinks" :key="footerLink.href" class="social_links__item">
					<a :href="footerLink.href" :title="footerLink.title" class="social_links__link" target="_blank"><span :data-src="footerLink.icon" class="social_links__img js-img-scroll"></span></a>
				</li>
			</ul>

			<p class="footer__phone"><a :href="'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', '')">{{ phone }}</a></p>

			<p class="footer_slogan">stay true</p>

			<p class="footer_copyright">© 2010 - {{ new Date().getFullYear() }}</p>

			<p class="footer_logo">
				<span class="footer_logo__link" @click.prevent="scrollTo('top')"><span :data-src="require('../assets/i/icons/logo_4.svg')" class="footer_logo__img js-img-scroll"></span></span>
			</p>
		</div>
	</div>
</template>

<script>
import imgScroll from '../assets/js/imgScroll'
import scrollTo from '../assets/js/scrollTo'
import {phone} from '../assets/js/config'

export default {
	data() {
		return {
			footerLinks: [
				{href: '//web.facebook.com/foxartbox/',         icon: require('../assets/i/icons/fb.svg'),      title: 'Facebook'},
				{href: '//www.instagram.com/denis_fox_web/',    icon: require('../assets/i/icons/inst.svg'),    title: 'Instagram'}
			],
			phone
		}
	},
	methods: {
		scrollTo
	},
	mounted () {
		imgScroll()
	}
}
</script>