<template>
    <div class="messages">
        <div class="wrap">
            <ul class="breadcrumbs">
                <li>
                    <router-link to="/">
                        {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                    </router-link>
                </li>

                <li>
                    <span>
                        ?
                    </span>
                </li>
            </ul>

            <h1>{{ $vuetify.lang.t('$vuetify.messages') }}</h1>

            {{ /*items*/ }}

            <div class="messages__items">
                <router-link
                    tag="div"
                    :to="/my-chat/ + item.task.uid"
                    v-for="item in items"
                    :key="item.message"
                    class="messages__item"
                >
                    {{ /*item*/ }}
                    <div class="messages__persone">
                        <div class="messages__photo_wrap">
                            <img
                                :src="path + item.contact.avatar"
                                alt="person's photo"
                                class="messages__photo"
                            >

                            <div
                                class="counter"
                                v-if="item.unread > 0"
                            >
                                {{ item.unread }}
                            </div>
                        </div>

                        <div>
                            <div class="messages__name">
                                <span>{{ item.contact.name }}</span>&nbsp;
                                <span>{{ item.surname }}</span>
                            </div>
                            <span class="person_rating">{{ item.contact.rating }}</span>
                            <div
                                class="messages__info"
                                v-if="lang === 'ru'"
                            >
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.from') }}</strong> {{ item.task.from_country.ru }} - {{ item.task.from_city.ru }}</span>
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.to') }}  </strong> {{ item.task.to_country.ru }} - {{ item.task.to_city.ru }}</span>
                            </div>
                            <div
                                class="messages__info"
                                v-else
                            >
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.from') }}</strong> {{ item.task.from_country.en }} - {{ item.task.from_city.en }}</span>
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.to') }}  </strong> {{ item.task.to_country.en }} - {{ item.task.to_city.en }}</span>
                            </div>
                        </div>
                        <div>{{ item.last_message }}</div>
                    </div>

                    <div class="messages__btn_wrap">
                        <v-btn
                            block
                            color="primary"
                        >
                            {{ $vuetify.lang.t('$vuetify.connect') }}
                        </v-btn>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {HTTP} from "../plugins/axios";

export default {
    data: () => ({
        items: ''
    }),
    computed: {
        user () {
            return this.$store.getters.user
        },
        path () {
            return this.$apiPath
        },
        lang () {
            return this.$vuetify.lang.current
        },
        token () {
            if (this.$store.getters.user === null) {return ""}
            else {return this.$store.getters.user.access_token}
        }
    },
    methods: {
        getItems () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            HTTP.get(`/api/chat/my-chats`,{
                headers: {
                    'X-Api-AuthKey': this.token
                }
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    this.items = response.data
                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                    this.items = ''
                });
        }
    },
    created() {
        if (this.token !== '' && this.token !== null) {
            this.getItems()
        }
    },
    watch: {
        token () {
            if (this.token !== '' && this.token !== null) {
                this.getItems()
            }
        }
    }
}
</script>
