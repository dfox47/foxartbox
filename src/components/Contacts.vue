<template>
	<div id="contacts" class="contacts">
		<h2>Contacts</h2>

		<div class="contacts__content">
			<ul class="contacts_links">
				<li class="contacts_links__item" v-for="(contactsLink) in contactsLinks" :key="contactsLink.href">
					<a class="contacts_links__link" :href="contactsLink.href" target="_blank"><img class="contacts_links__img" :src="contactsLink.icon" alt="" /><span>{{ contactsLink.title }}</span></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			contactsLinks: [
				{href: 'mailto:info@foxartbox.com', icon: require('../assets/i/icons/email.svg'), title: 'info@foxartbox.com'},
				{href: 'javascript:void(0);', icon: require('../assets/i/icons/skype.svg'), title: 'foxartbox'},
				{href: '//t.me/dfoxweb', icon: require('../assets/i/icons/telegram.svg'), title: '@dfoxweb'}
			]
		}
	}
}
</script>