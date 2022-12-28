<template>
	<div id="contacts" class="contacts js-block-scroll">
		<h2>Contacts</h2>

		<div class="contacts__content">
			<ul class="contacts_links">
				<li class="contacts_links__item" v-for="(contactsLink) in contactsLinks" :key="contactsLink.href">
					<a class="contacts_links__link" :href="contactsLink.href" target="_blank"><img class="contacts_links__img" :src="contactsLink.icon" alt=""><span>{{ contactsLink.title }}</span></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contacts',
	data() {
		return {
			contactsLinks: [
				{href: 'mailto:info@foxartbox.com', icon: require('../assets/i/icons/email.svg'),       title: 'info@foxartbox.com'},
				{href: '//t.me/dfoxweb',            icon: require('../assets/i/icons/telegram.svg'),    title: '@dfoxweb'},
				{href: 'tel:+359882744430',         icon: '',                                           title: '+359 (88) 27-444-30'}
			]
		}
	}
}
</script>