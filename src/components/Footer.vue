<template>
	<div class="footer">
		<div class="wrap">
			<a class="gotop" href="#top" @click.prevent="scroll('top')"></a>

			<ul class="social_links">
				<li class="social_links__item" v-for="(footerLink) in footerLinks" :key="footerLink.href">
					<a class="social_links__link" :href="footerLink.href" target="_blank" :title="footerLink.title"><img :src="footerLink.icon" alt="" /></a>
				</li>
			</ul>

			<p class="footer__phone"><a href="tel:+359882744430">+359 (88) 27-444-30</a></p>

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
				{href: '//web.facebook.com/foxartbox/',         icon: require('../assets/i/icons/fb.svg'),      title: 'Facebook'},
				{href: '//www.instagram.com/denis_fox_web/',    icon: require('../assets/i/icons/inst.svg'),    title: 'Instagram'}
			]
		}
	},
	methods: {
		// scroll to the block with ID
		scroll(id) {
			const e = document.getElementById(id)

			// if there is no element with ID to scroll
			if (!e) {
				window.location.href = '/#' + id

				this.activeId = id

				return
			}

			console.log('xxxxx')

			// scroll to element
			e.scrollIntoView({
				behavior: 'smooth'
			})
		}
	}
}
</script>