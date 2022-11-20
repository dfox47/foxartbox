<template>
	<div>
		<div id="top"></div>

		<div class="topmenu">
			<div class="wrap">
				<ul class="topmenu_list">
					<li class="topmenu_list__item" v-for="menuItem in menuItems" :key="menuItem.id">
						<a :class="{active: (menuItem.id === activeId)}" class="js-topmenu-link" :data-link="menuItem.id" @click="scroll(menuItem.id); toggleMobileMenu()" href="javascript:void(0);">{{ menuItem.title }}</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo" @click="scroll('top'); toggleMobileMenu()">
						<img src="../assets/i/icons/logo_2.svg" alt="" />
						<span>foxartbox</span>
					</a>

					<div class="topmenu_mobile__toggle" @click="toggleMobileMenu"><span></span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	created () {
		window.addEventListener('scroll', this.handleScroll)
	},
	data() {
		return {
			activeId : 0,
			menuItems: [
				{id: 'top',         title: 'Home'},
				{id: 'projects',    title: 'Projects'},
				{id: 'process',     title: 'Process'},
				{id: 'contacts',    title: 'Contacts'}
			],
		}
	},
	methods: {
		// On scroll
		handleScroll () {
			document.querySelectorAll('.js-block-scroll').forEach((e) => {
				const blockId = e.getAttribute('id')

				if (window.scrollY > e.offsetTop) {
					this.activeId = blockId

					// change url to current menu item
					history.pushState(null, null, '/#' + blockId)

					document.querySelectorAll('.js-topmenu-link').forEach((link) => {
						link.classList.remove('active')
					})

					document.querySelector('[data-link="' + blockId + '"]').classList.add('active')
				}
			})
		},
		scroll(id) {
			// scroll to element
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			})

			// change url to current menu item
			history.pushState(null, null, '/#' + id)

			// make selected menu item active
			this.activeId = id
		},
		toggleMobileMenu() {
			document.querySelector('html').classList.toggle('topmenu_mobile_active')
		}
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>