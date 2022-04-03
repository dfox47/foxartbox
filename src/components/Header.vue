<template>
	<div>
		<div id="top"></div>

		<div class="topmenu">
			<div class="wrap">
				<ul class="topmenu_list">
					<li class="topmenu_list__item" v-for="(menuItem, index) in menuItems" :key="menuItem.id">
						<a :class="{'active': index === 0}" class="js-topmenu-mobile-close js-topmenu-link" @click="scroll(menuItem.id)" href="javascript:void(0);">{{ menuItem.title }}</a>
					</li>
				</ul>

				<div class="topmenu_mobile">
					<a class="topmenu_mobile__logo js-topmenu-mobile-close" @click="scroll('top')">
						<img class="" src="../assets/i/icons/logo_2.svg" alt=""/>
						<span>foxartbox</span>
					</a>

					<div class="topmenu_mobile__toggle js-topmenu-mobile-toggle">
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [
				{id: 'top', title: 'Home'},
				{id: 'projects', title: 'Projects'},
				{id: 'process', title: 'Process'},
				{id: 'crew', title: 'Crew'},
				{id: 'contacts', title: 'Contacts'}
			]
		}
	},
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
}
</script>
