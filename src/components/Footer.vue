<template>
	<div class="footer">
		<div class="wrap">
			<a class="gotop" href="#top" @click.prevent="scrollTo('top')"></a>

			<span class="qr_code js-img-scroll" :data-src="require('../assets/i/qr_code.svg')"></span>

			<ul class="social_links">
				<li class="social_links__item" v-for="(footerLink) in footerLinks" :key="footerLink.href">
					<a class="social_links__link" :href="footerLink.href" target="_blank" :title="footerLink.title"><span class="js-img-scroll" :data-src="footerLink.icon"></span></a>
				</li>
			</ul>

			<p class="footer__phone"><a :href="'tel:' + phone.replace(/[()-]/g, '').replaceAll(' ', '')">{{ phone }}</a></p>

			<p class="footer_slogan">stay true</p>

			<p class="footer_copyright">© 2010 - {{ new Date().getFullYear() }}</p>

			<p class="footer_logo">
				<a class="footer_logo__link" href="#top" @click.prevent="scrollTo('top')"><span class="footer_logo__img js-img-scroll" :data-src="require('../assets/i/icons/logo_4.svg')"></span></a>
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