<template>
    <div
        class="content"
        v-if="item !==''"
    >
        <div class="take_wrap">
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ id }}
                        </span>
                    </li>
                </ul>

                <div class="title_with_btn">
                    <a
                        href="/"
                        class="link_back"
                    >
                        Назад
                    </a>

                    <h1 v-if="lang === 'en'">
                        {{ item.offer.from.country.en }} {{ item.offer.from.city.en }} — {{ item.offer.to.country.en }} {{ item.offer.to.city.en }}
                    </h1>
                    <h1 v-else>
                        {{ item.offer.from.country.ru }} {{ item.offer.from.city.ru }} — {{ item.offer.to.country.ru }} {{ item.offer.to.city.ru }}
                    </h1>
                </div>
                {{ /*item*/ }}
                <div class="parcel_view">
                    <div class="parcel_view__info">
                        <div class="parcel_view__item">
                            <div class="parcel_view__person">
                                <div class="parcel_view__photo">
                                    <img
                                        :src="path + item.user.avatar"
                                        alt="user name"
                                    >
                                </div>

                                <div class="parcel_view__name__wrap">
                                    <span class="parcel_view__name">{{ item.user.name }}</span>&nbsp;
                                    <span class="parcel_view__lastname">{{ item.user.surname }}</span>
                                    <span
                                        class="person_rating"
                                        v-if="item.user.rating"
                                    >
                                        {{ item.user.rating }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="parcel_view__item">
                            <div class="parcel_view__status">
                                <ul>
                                    <li>10 завершенных перевозок</li>
                                    <li>Оценка на основании 5-и отзывов</li>
                                </ul>
                            </div>
                        </div>

                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.send_before') }}</h3>

                            <ul>
                                <li>{{ item.offer.departure_date }}</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.transfer_method_to_recipient') }}</h3>

                            <ul>
                                <li
                                    v-for="cat in item.offer.pickup_type"
                                    :key="cat"
                                >
                                    {{ showHowName(cat) }}
                                </li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.transfer_method') }}</h3>

                            <ul>
                                <li
                                    v-for="cat in item.offer.delivery_type"
                                    :key="cat"
                                >
                                    {{ showHowName(cat) }}
                                </li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.parcel_category') }}</h3>

                            <ul>
                                <li
                                    v-for="cat in item.offer.package_type"
                                    :key="cat"
                                >
                                    {{ showCategoryName(cat) }}
                                </li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.dimensions') }}</h3>

                            <ul>
                                <li>{{ $vuetify.lang.t('$vuetify.weight') }}: {{ item.offer.weight }} {{ $vuetify.lang.t('$vuetify.kilogram5') }}</li>
                                <li>{{ $vuetify.lang.t('$vuetify.height') }}: {{ item.offer.size_height }} {{ $vuetify.lang.t('$vuetify.millimeter5') }}</li>
                                <li>{{ $vuetify.lang.t('$vuetify.depth') }}: {{ item.offer.size_length }} {{ $vuetify.lang.t('$vuetify.millimeter5') }}</li>
                                <li>{{ $vuetify.lang.t('$vuetify.width') }}: {{ item.offer.size_width }} {{ $vuetify.lang.t('$vuetify.millimeter5') }}</li>
                            </ul>
                        </div>

                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.security_deposit') }}</h3>

                            <ul>
                                <li v-if="item.offer.insurance_payment === null">
                                    {{ $vuetify.lang.t('$vuetify.no') }}
                                </li>
                                <li v-else>
                                    {{ $vuetify.lang.t('$vuetify.yes') }}
                                </li>
                            </ul>
                        </div>


                        <div class="parcel_view__item">
                            <h3>{{ $vuetify.lang.t('$vuetify.delivery_price') }}</h3>

                            <ul>
                                <li>{{ item.offer.delivery_price }} руб</li>
                            </ul>
                        </div>
                    </div>

                    <div class="parcel_view__btns">
                        <v-btn
                            color="primary"
                            medium
                            v-if="userId !== item.user.id"
                            @click="openChat"
                            :loading="loading"
                        >
                            {{ $vuetify.lang.t('$vuetify.connect') }}
                        </v-btn>

                        <v-btn
                            color="primary_light"
                            medium
                            @click="$router.go(-1)"
                        >
                            {{ $vuetify.lang.t('$vuetify.back_to_search_results') }}
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {HTTP} from "../plugins/axios";

export default {
    props: {
        id: {
            type: String,
            default: ''
        },
    },
    data: () => {
        return {
            item: ''
        }
    },
    computed: {
        token () {
            if (this.$store.getters.user === null) {return ""}
            else {return this.$store.getters.user.access_token}
        },
        userId () {
            return this.$store.getters.user.user_id
        },
        lang () {
            return this.$vuetify.lang.current
        },
        loading () {
            return this.$store.getters.loading
        },
        path () {
            return this.$apiPath
        },
        categories() {
            if (this.lang === 'ru') {
                return this.$store.getters.getDeliveryTypes.ru
            } else {
                return this.$store.getters.getDeliveryTypes.en
            }
        },
        hows() {
            if (this.lang === 'ru') {
                return this.$store.getters.getDeliveryMethods.ru
            } else {
                return this.$store.getters.getDeliveryMethods.en
            }
        },
    },
    methods: {
        showCategoryName (obj) {
            let name = '111'
            this.categories.forEach(function (item) {
                //console.log(item)
                if (item.id === obj) {
                    name = item.value
                }
            })
            return name
        },
        showHowName (obj) {
            let name = '111'
            this.hows.forEach(function (item) {
                //console.log(item)
                if (item.id === obj) {
                    name = item.value
                }
            })
            return name
        },
        getItem () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            HTTP.get(`/api/delivery/offer/` + this.id,{
                headers: {
                    'X-Api-AuthKey': this.token
                }
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    this.item = response.data
                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                    this.item = ''
                });
        },
        openChat () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            HTTP.post(`/api/task/take-offer/` + this.id, {},{
                headers: {
                    'X-Api-AuthKey': this.token
                }
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    if (response.data.success === true) {
                        this.$router.push('/my-chat/' + response.data.task)
                    } else {
                        this.$store.dispatch('setError', 'Task Error');
                    }
                    //console.log(response.data)
                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                });
        }
    },
    created() {
        if (this.token !== '' && this.token !== null) {
            this.getItem()
        }
    },
    watch: {
        token () {
            if (this.token !== '' && this.token !== null) {
                this.getItem()
            }
        }
    }
}
</script>


