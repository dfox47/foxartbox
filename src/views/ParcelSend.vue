<template>
    <div>
        <div
            class="take_wrap"
            ref="top-block"
        >
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.search_suitcase') }}
                        </span>
                    </li>
                </ul>

                <div class="take_menu__wrap">
                    <ul class="take_menu">
                        <li>
                            <span class="take_menu__item active">
                                {{ $vuetify.lang.t('$vuetify.take.parcel_search') }}
                            </span>
                        </li>

                        <li>
                            <span
                                class="take_menu__item"
                                @click="showRequestSendPopup_1"
                            >
                                {{ $vuetify.lang.t('$vuetify.add_new_order') }}
                            </span>
                        </li>
                    </ul>
                </div>

                <app-select-block
                    block-type="send"
                    @searchGo="searchGo($event)"
                />

                <div class="take_results">
                    <div class="wrap">
                        <div class="take_results__title">
                            {{ $vuetify.lang.t('$vuetify.take.results_title_1') }}&nbsp;<span>{{ items.length }}</span>&nbsp;{{ $vuetify.lang.t('$vuetify.send.results_title_2') }}
                        </div>
                    </div>

                    <div class="take_results_items">
                        <router-link
                            tag="div"
                            :to="'/send-overview/' + item.offer.offer_id"
                            v-for="(item, index) in items"
                            :key="index"
                            class="take_results_item"
                        >
                            {{ /*item*/ }}
                            <div
                                class="take_results_destination"
                                v-if="(item.offer.from && lang === 'en')"
                            >
                                {{ item.offer.from.country.en }} {{ item.offer.from.city.en }} — {{ item.offer.to.country.en }} {{ item.offer.to.city.en }}
                            </div>

                            <div
                                class="take_results_destination"
                                v-else-if="(item.offer && lang === 'ru')"
                            >
                                {{ item.offer.from.country.ru }} {{ item.offer.from.city.ru }} — {{ item.offer.to.country.ru }} {{ item.offer.to.city.ru }}
                            </div>

                            <div class="take_results_item__img_wrap">
                                <img
                                    :src="path + item.user.avatar"
                                    alt=""
                                    class="take_results_item__img"
                                    v-if="item.user.avatar"
                                    width="100"
                                >

                                <div class="take_results_item__name_wrap">
                                    <div class="take_results_item__name">
                                        {{ item.user.name }}<br>
                                        {{ item.user.surname }}
                                    </div>

                                    <div
                                        class="person_rating"
                                        v-if="item.user.rating"
                                    >
                                        {{ item.user.rating }}
                                    </div>
                                </div>
                            </div>

                            <div class="take_results_item__info">
                                <div class="take_results_item__list">
                                    <p v-if="item.offer.departure_date">
                                        <span>{{ $vuetify.lang.t('$vuetify.term') }}:</span> {{ item.offer.departure_date }}
                                    </p>

                                    <p v-if="item.offer.weight">
                                        <span>{{ $vuetify.lang.t('$vuetify.weight') }}:</span> {{ item.offer.weight }}
                                    </p>

                                    <p v-if="item.offer.deposit">
                                        <span>{{ $vuetify.lang.t('$vuetify.deposit') }}:</span> {{ item.offer.deposit }}
                                    </p>

                                    <p v-if="item.offer.delivery_price">
                                        <span>{{ $vuetify.lang.t('$vuetify.reward') }}:</span> {{ item.offer.delivery_price }}
                                    </p>
                                </div>

                                <div
                                    class="take_results_item__category"
                                    v-if="item.offer.package_type"
                                >
                                    <p>
                                        <span>{{ $vuetify.lang.t('$vuetify.category') }}</span>
                                    </p>

                                    <p
                                        v-for="cat in item.offer.package_type"
                                        :key="cat"
                                    >
                                        {{ showCategoryName(cat) }}
                                    </p>
                                </div>

                                <div class="take_results_item__link">
                                    <v-btn
                                        color="secondary"
                                        medium
                                        :to="'/send-overview/' + item.offer.offer_id"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.readmore') }}
                                    </v-btn>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <ul
                    class="pagination"
                    v-if="1===2"
                >
                    <li>
                        <a href="">1</a>
                    </li>

                    <li>
                        <a
                            class="active"
                            href="/"
                        >2</a>
                    </li>

                    <li>
                        <span>...</span>
                    </li>

                    <li>
                        <a href="">8</a>
                    </li>

                    <li>
                        <a href="">9</a>
                    </li>
                </ul>

                <div class="text-center">
                    <v-btn
                        medium
                        color="primary_light"
                        @click="scrollToTop"
                    >
                        {{ $vuetify.lang.t('$vuetify.change_search_request') }}
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import SelectBlock from "../components/SelectBlock";
import {HTTP} from '../plugins/axios.js'
export default {
    name: 'ParcelSend',
    components: {
        "app-select-block": SelectBlock
    },
    data: () => {
        return {
            info: false,
            items: []
        }
    },
    computed: {
        token () {
            if (this.$store.getters.user === null) {return ""}
            else {return this.$store.getters.user.access_token}
        },
        lang () {
            return this.$vuetify.lang.current
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
        }
    },
    methods: {
        showRequestSendPopup_1 () {
            this.$store.dispatch('showRequestSendPopup_1')
        },
        scrollToTop () {
            let slide = this.$refs[`top-block`]
            let top = window.scrollY + slide.getBoundingClientRect().y;
            window.scrollTo(0, top)
        },
        searchGo (obj) {
            console.log(obj)

            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            let objStr = ""

            if(obj && obj.fromCountry !== null && obj.toCountry !== null) {
                objStr = "?country_from=" + obj.fromCountry + "&country_to=" + obj.toCountry
                if (obj.fromCity !== null && obj.toCity !== null) {
                    objStr += "&city_from=" + obj.fromCity + "&city_to=" + obj.toCity
                }
            }

            HTTP.get(`/api/delivery/offer/list` + objStr,{
                headers: {
                    'X-Api-AuthKey': this.token
                }
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    this.items = response.data
                    this.info = true

                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                });
        },
        showCategoryName (obj) {
            let name = '111'
            this.categories.forEach(function (item) {
                //console.log(item)
                if (item.id === obj) {
                    name = item.value
                }
            })
            return name
        }
    },
    beforeMount() {
        let fastSend = JSON.parse(localStorage.getItem('fastTake'))
        if (fastSend) {
            /*let now = new Date();
            let expired = new Date(fastSend.expired);
            if (expired > now && fastSend.data.length > 0) {
                this.items = fastSend.data
            }*/
        }

        if(this.items.length === 0) {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            HTTP.get(`/api/delivery/offer/list`,{
                headers: {
                    'X-Api-AuthKey': this.token
                }
            })
                .then(response => {
                    this.$store.dispatch('setLoading', false);
                    let data = response.data
                    this.items = data

                    let now = new Date();
                    now.setMonth(now.getMinutes() + 10)
                    let fastSend = {
                        "expired": now,
                        "data": data
                    }
                    localStorage.setItem('fastTake', JSON.stringify(fastSend));
                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                });
        }
    }
}
</script>
