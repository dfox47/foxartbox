<template>
	<div id="top"></div>

	<div class="topmenu">
		<div class="wrap">
			<ul class="topmenu_list">
				<li class="topmenu_list__item"><a class="js-topmenu-mobile-close js-topmenu-link active" @click="scroll('top')">Home</a></li>
				<li class="topmenu_list__item"><a class="js-topmenu-mobile-close js-topmenu-link" @click="scroll('projects')">Projects</a></li>
				<li class="topmenu_list__item"><a class="js-topmenu-mobile-close js-topmenu-link" @click="scroll('process')">Process</a></li>
				<li class="topmenu_list__item"><a class="js-topmenu-mobile-close js-topmenu-link" @click="scroll('crew')">Crew</a></li>
				<li class="topmenu_list__item"><a class="js-topmenu-mobile-close js-topmenu-link" @click="scroll('contacts')">Contacts</a></li>
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
</template>

<script>
export default {
	methods: {
		scroll(id) {
			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
}
</script>
