<template>
	<div class="footer">
		<div class="wrap">
			<a class="gotop" href="javascript:void(0);" @click="scroll('top')"></a>

			<ul class="social_links">
				<li class="social_links__item" v-for="(footerLink) in footerLinks" :key="footerLink.href">
					<a class="social_links__link" :href="footerLink.href" target="_blank" :title="footerLink.title"><img :src="footerLink.icon" alt="" /></a>
				</li>
			</ul>

			<p class="footer_slogan">stay true</p>

			<p class="footer_copyright">© 2010 - {{ new Date().getFullYear() }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			footerLinks: [
				{href: '//web.facebook.com/foxartbox/', icon: require('../assets/i/icons/fb.svg'), title: 'Facebook'},
				{href: '//www.instagram.com/foxartbox/', icon: require('../assets/i/icons/inst.svg'), title: 'Instagram'}
			]
		}
	},
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})
		}
	}
}
</script>