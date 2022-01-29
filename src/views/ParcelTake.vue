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
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.search_parcel') }}
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
                                @click="showRequestPlacePopup_1"
                            >
                                {{ $vuetify.lang.t('$vuetify.add_new_order') }}
                            </span>
                        </li>
                    </ul>
                </div>

                <app-select-block
                    block-type="take"
                    @searchGo="searchGo($event)"
                />

                <div class="take_results">
                    <div
                        class="wrap"
                        v-if="info"
                    >
                        <div class="take_results__title">
                            {{ $vuetify.lang.t('$vuetify.take.results_title_1') }}&nbsp;<span>{{ items.length }}</span>&nbsp;{{ $vuetify.lang.t('$vuetify.take.results_title_2') }}
                        </div>

                        <div class="take_results__destination">
                            <span>{{ $vuetify.lang.t('$vuetify.take.from') }}:</span> Северная Ирландия, Каррикфергус
                        </div>

                        <div class="take_results__destination">
                            <span>{{ $vuetify.lang.t('$vuetify.take.to') }}:</span> Россия, Москва
                        </div>
                    </div>

                    <div class="take_results_items">
                        <router-link
                            tag="div"
                            :to="'/take-overview/' + item.order.order_id"
                            v-for="(item, index) in items"
                            :key="index"
                            class="take_results_item"
                        >
                            {{ /*item*/ }}
                            <div
                                class="take_results_destination"
                                v-if="(item.order.from && lang === 'en')"
                            >
                                {{ item.order.from.country.en }} {{ item.order.from.city.en }} — {{ item.order.to.country.en }} {{ item.order.to.city.en }}
                            </div>

                            <div
                                class="take_results_destination"
                                v-else-if="(item.order && lang === 'ru')"
                            >
                                {{ item.order.from.country.ru }} {{ item.order.from.city.ru }} — {{ item.order.to.country.ru }} {{ item.order.to.city.ru }}
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
                                    <p v-if="item.order.send_till">
                                        <span>{{ $vuetify.lang.t('$vuetify.term') }}:</span> {{ item.order.send_till }}
                                    </p>

                                    <p v-if="item.order.weight">
                                        <span>{{ $vuetify.lang.t('$vuetify.weight') }}:</span> {{ item.order.weight }}
                                    </p>

                                    <p v-if="item.order.deposit">
                                        <span>{{ $vuetify.lang.t('$vuetify.deposit') }}:</span> {{ item.order.deposit }}
                                    </p>

                                    <p v-if="item.order.delivery_price">
                                        <span>{{ $vuetify.lang.t('$vuetify.reward') }}:</span> {{ item.order.delivery_price }}
                                    </p>
                                </div>

                                <div
                                    class="take_results_item__category"
                                    v-if="item.order.package_type"
                                >
                                    <p>
                                        <span>{{ $vuetify.lang.t('$vuetify.category') }}</span>
                                    </p>
                                    <p
                                        v-for="cat in item.order.package_type"
                                        :key="cat"
                                    >
                                        {{ showCategoryName(cat) }}
                                    </p>
                                </div>

                                <div class="take_results_item__link">
                                    <v-btn
                                        medium
                                        color="secondary"
                                        :to="'/take-overview/' + item.order.order_id"
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
    name: 'ParcelTake',
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
        user () {
            return this.$store.getters.user
        },
        token () {
            if (this.user === null) {return ""}
            else {return this.user.access_token}
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
        showRequestPlacePopup_1 () {
            this.$store.dispatch('showRequestPlacePopup_1')
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

            HTTP.get(`/api/delivery/order/list` + objStr,{
                headers: {
                    'X-Api-AuthKey': this.user.access_token
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
        let fastTake = JSON.parse(localStorage.getItem('fastTake'))
        if (fastTake) {
            /*let now = new Date();
            let expired = new Date(fastTake.expired);
            if (expired > now && fastTake.data.length > 0) {
                this.items = fastTake.data
            }*/
        }

        if(this.items.length === 0) {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            HTTP.get(`/api/delivery/order/list`,{
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
                    let fastTake = {
                        "expired": now,
                        "data": data
                    }
                    localStorage.setItem('fastTake', JSON.stringify(fastTake));
                }, error => {
                    this.$store.dispatch('setLoading', false);
                    this.$store.dispatch('setError', error.toJSON().message);
                });
        }
    }
}
</script>
