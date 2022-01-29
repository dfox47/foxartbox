<template>
    <div
        class="chat"
        v-if="item !==''"
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
                        ?
                    </span>
                </li>
            </ul>

            {{ /*item*/ }}
            <div class="chat_item">
                <div class="chat__persone">
                    <div class="chat__photo_wrap">
                        <img
                            :src="path + item.partner.avatar"
                            alt="person's photo"
                            class="chat__photo"
                        >

                        <div
                            class="counter"
                            v-if="item.chat.unread > 0"
                        >
                            {{ item.chat.unread }}
                        </div>
                    </div>

                    <div class="chat__info_wrap">
                        <div class="chat__names">
                            <span>{{ item.partner.name }}</span>&nbsp;
                            <span>{{ item.surname }}</span>
                        </div>
                        <span class="person_rating">{{ item.partner.rating }}</span>
                        <div
                            class="chat__person_info"
                            v-if="lang === 'ru'"
                        >
                            <span><strong>{{ $vuetify.lang.t('$vuetify.from') }}</strong> {{ item.task.from_country.ru }} - {{ item.task.from_city.ru }}</span>
                            <span><strong>{{ $vuetify.lang.t('$vuetify.where_to') }}</strong> {{ item.task.to_country.ru }} - {{ item.task.to_city.ru }}</span>
                        </div>
                        <div
                            class="chat__person_info"
                            v-else
                        >
                            <span><strong>{{ $vuetify.lang.t('$vuetify.from') }}</strong> {{ item.task.from_country.en }} - {{ item.task.from_city.en }}</span>
                            <span><strong>{{ $vuetify.lang.t('$vuetify.where_to') }}</strong> {{ item.task.to_country.en }} - {{ item.task.to_city.en }}</span>
                        </div>
                    </div>
                </div>

                <div class="chat__btns_wrap">
                    <div
                        class="chat_btn chat_btn__phone"
                        hidden
                    />

                    <div class="chat__btn_wrap">
                        <v-btn
                            color="secondary"
                            block
                        >
                            {{ $vuetify.lang.t('$vuetify.reconcile_data') }}
                        </v-btn>

                        <div class="chat_decline">
                            {{ $vuetify.lang.t('$vuetify.or_decline') }}
                        </div>
                    </div>

                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <div
                                class="tooltip_sign"
                                v-bind="attrs"
                                v-on="on"
                            />
                        </template>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </v-tooltip>
                </div>
            </div>

            <div
                :class="'chat_agreement__btn ' + this.agreement_window_class"
                @click="this.toggle"
                hidden
            >
                {{ this.agreement_window_text }}
            </div>

            <div class="chat_agreement">
                <transition
                    name="fade"
                    v-if="this.agreement_window"
                    appear
                >
                    <div class="chat_agreement__wrap">
                        <div class="chat_agreement__title">
                            {{ $vuetify.lang.t('$vuetify.check_the_box_if_you_agree_with_the_conditions') }}
                        </div>

                        <div class="chat_agreement__section">
                            <div class="popup_two_columns__two">
                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.delivery_method_to_courier') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-select
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.how')"
                                            outlined
                                        />
                                    </div>

                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.delivery_date') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-select
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.calendar')"
                                            outlined
                                        />
                                    </div>

                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.delivery_time') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-select
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.calendar')"
                                            outlined
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        Адрес получения курьером:
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Город"
                                            outlined
                                        />
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Улица"
                                            outlined
                                        />
                                    </div>

                                    <div class="two_inputs">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Корпус/строение"
                                            outlined
                                        />

                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Дом"
                                            outlined
                                        />
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Коментарий к адресу"
                                            outlined
                                        />

                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <div
                                                    class="tooltip_sign"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                />
                                            </template>
                                            <span>Lorem ipsum dolor sit amet.</span>
                                        </v-tooltip>
                                    </div>
                                </div>
                            </div>

                            <div class="chat_agreement__checkbox">
                                <v-checkbox
                                    class="v-checkbox_v3"
                                    label="Вы"
                                />

                                <v-checkbox
                                    class="v-checkbox_v3"
                                    label="Александр Константиновский"
                                />
                            </div>
                        </div>

                        <div class="chat_agreement__section">
                            <div class="popup_two_columns__two">
                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.delivery_method_to_recipient') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-select
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.how')"
                                            outlined
                                        />
                                    </div>

                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.recipient_data') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.name')"
                                            outlined
                                        />
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.phone_number')"
                                            outlined
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.pick_up_address') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Город"
                                            outlined
                                        />
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Улица"
                                            outlined
                                        />
                                    </div>

                                    <div class="two_inputs">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Корпус/строение"
                                            outlined
                                        />

                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Дом"
                                            outlined
                                        />
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Коментарий к адресу"
                                            outlined
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="popup_two_columns__two">
                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.delivery_date') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-select
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.calendar')"
                                            outlined
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.delivery_time') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            :label="$vuetify.lang.t('$vuetify.name')"
                                            outlined
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="chat_agreement__checkbox">
                                <v-checkbox
                                    class="v-checkbox_v3"
                                    label="Вы"
                                />

                                <v-checkbox
                                    class="v-checkbox_v3"
                                    label="Александр Константиновский"
                                />
                            </div>
                        </div>

                        <div class="chat_agreement__section">
                            <div class="popup_two_columns__two">
                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.security_deposit') }}
                                        <!--here-->

                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <div
                                                    class="tooltip_sign"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                />
                                            </template>
                                            <span>Lorem ipsum dolor sit amet.</span>
                                        </v-tooltip>
                                    </div>

                                    <v-radio-group
                                        row
                                    >
                                        <v-radio
                                            label="Нет"
                                            value="radio-1"
                                        />

                                        <v-radio
                                            label="Да"
                                            value="radio-2"
                                        />
                                    </v-radio-group>

                                    <div class="input_n_select_wrap">
                                        <v-text-field
                                            :label="$vuetify.lang.t('$vuetify.sum')"
                                            v-focus
                                        />

                                        <v-select
                                            class="take_destinations__select"
                                            :items="currency"
                                            :label="currency[0]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div
                                        class="popup_title"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.cost') }}
                                    </div>

                                    <div class="input_wrap">
                                        <v-text-field
                                            class="take_destinations__select"
                                            label="Город"
                                            outlined
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="chat_agreement__checkbox">
                                <v-checkbox
                                    class="v-checkbox_v3"
                                    label="Вы"
                                />

                                <v-checkbox
                                    class="v-checkbox_v3"
                                    label="Александр Константиновский"
                                />
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <div
                class="chat_messages_info"
                :class="{ active: showMessagesInfo }"
            >
                <div class="chat__msg chat__msg_system">
                    <p class="chat__msg_system_text">
                        {{ $vuetify.lang.t('$vuetify.chat_warning') }}
                    </p>

                    <span
                        class="chat_more js-chat-more"
                        @click="showMessagesInfo = !showMessagesInfo"
                    />
                </div>

                <div class="chat_messages_info__desc">
                    <div v-if="lang === 'ru'">
                        <strong>{{ $vuetify.lang.t('$vuetify.from') }}:</strong>&#160; {{ item.task.from_country.ru }} - {{ item.task.from_city.ru }}
                    </div>
                    <div v-else>
                        <strong>{{ $vuetify.lang.t('$vuetify.from') }}:</strong>&#160; {{ item.task.from_country.en }} - {{ item.task.from_city.en }}
                    </div>

                    <div v-if="lang === 'ru'">
                        <strong>{{ $vuetify.lang.t('$vuetify.where_to') }}:</strong>&#160; {{ item.task.to_country.ru }} - {{ item.task.to_city.ru }}
                    </div>
                    <div v-else>
                        <strong>{{ $vuetify.lang.t('$vuetify.where_to') }}:</strong>&#160; {{ item.task.to_country.en }} - {{ item.task.to_city.en }}
                    </div>

                    <div>
                        <strong>{{ $vuetify.lang.t('$vuetify.term') }}:</strong>&#160; {{ item.task.expire }}
                    </div>
                    <div>
                        <strong>{{ $vuetify.lang.t('$vuetify.weight') }}:</strong>&#160; {{ item.task.weight }}
                    </div>

                    <div>
                        <strong>{{ $vuetify.lang.t('$vuetify.cost') }}:</strong>&#160; {{ item.task.cost }}
                    </div>

                    <div v-if="item.task.deposit.deposite === null">
                        <strong>{{ $vuetify.lang.t('$vuetify.no_deposite') }}</strong>
                    </div>
                    <div v-else>
                        <strong>{{ $vuetify.lang.t('$vuetify.deposite') }}:</strong>&#160; {{ item.task.deposit.deposite_amount }}
                    </div>
                </div>
            </div>

            {{ /*messages*/ }}

            <div class="chat_messages">
                <div
                    class="chat_messages__wrap"
                    id="chat_messages_wrap-js"
                    v-if="messages !== null"
                    :key="messages.length"
                >
                    <div
                        v-for="msg in messages"
                        :key="msg.time"
                        :class="'chat__msg chat__msg_' + checkClass(msg.my)"
                    >
                        <div
                            class="chat__msg_date"
                            v-if="msg.time"
                        >
                            {{ trueDate(msg.time) }}
                        </div>

                        <div class="chat__msg_title">
                            {{ getName(msg.my) }}
                        </div>

                        <div class="chat__msg_text">
                            {{ msg.message }}
                        </div>
                    </div>
                </div>

                <div class="chat_messages__textarea">
                    <v-textarea
                        clear-icon
                        rows="4"
                        v-model="text"
                    />

                    <div
                        class="chat_messages__btn"
                    >
                        <v-btn
                            medium
                            color="primary"
                            @click="this.sendMessage"
                            :disabled="loading"
                        >
                            {{ $vuetify.lang.t('$vuetify.send') }}
                        </v-btn>
                    </div>

                    <img
                        alt="user name"
                        src="../assets/i/icons/send.svg"
                        class="chat_messages__btn_mobile"
                        @click="this.sendMessage"
                    >
                </div>
            </div>
        </div>

        <template v-if="newMessage">
            <v-snackbar
                timeout="5000"
                elevation="10"
                color="blue-grey"
                left
                outlined
                @input="closeError"
                :value="true"
            >
                {{ newMessageText }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="blue"
                        text
                        v-bind="attrs"
                        @click="closeError"
                    >
                        {{ $vuetify.lang.t('$vuetify.close') }}
                    </v-btn>
                </template>
            </v-snackbar>
        </template>
    </div>
</template>

<script>
import {HTTP} from "../plugins/axios";

export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        agreement_window: false,
        agreement_window_class: '',
        agreement_window_text: "Открыть окно согласования",
        currency: ['rub', 'eur'],
        item: '',
        messages: null,
        newMessage: false,
        newMessageText: "",
        polling: null,
        showMessagesInfo: true,
        text: '',
    }),
    computed: {
        token () {
            if (this.$store.getters.user === null) {return ""}
            else {return this.$store.getters.user.access_token}
        },
        user () {
            return this.$store.getters.user
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
        }
    },
    methods: {
        getItem () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            HTTP.get(`/api/task/` + this.id,{
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
        sendMessage() {
            if (this.text !== '') {
                this.$store.dispatch('clearError');
                this.$store.dispatch('setLoading', true);

                HTTP.post(`/api/chat/message/` + this.id, {
                    message: this.text
                },{
                    headers: {
                        'X-Api-AuthKey': this.token
                    }
                })
                    .then(response => {
                        this.$store.dispatch('setLoading', false);
                        this.updateMessages()
                        this.text = ''
                    }, error => {
                        this.$store.dispatch('setLoading', false);
                        this.$store.dispatch('setError', error.toJSON().message);
                    });
            }
        },
        updateMessages () {
            if (this.token !== '' && this.token !== null) {
                HTTP.get(`/api/chat/message/` + this.id,{
                    headers: {
                        'X-Api-AuthKey': this.token
                    }
                })
                    .then(response => {
                        if (this.messages === null) {
                            this.messages = response.data.messages
                        } else {
                            if (response.data.messages.length > 0 && this.messages.length !== response.data.messages.length) {
                                this.messages = response.data.messages
                            }
                        }
                    }, error => {
                        console.log(error.toJSON().message)
                    });
            }
        },
        pollData () {
            this.polling = setInterval(() => {
                this.updateMessages()
            }, 2000)
        },
        checkClass (id) {
            if(id === 1) {
                return 'me'
            } else {
                return 'user'
            }
        },
        getName (id) {
            if(id === 1) {
                return this.user.info.name
            } else {
                return this.item.partner.name
            }
        },
        closeError () {
            this.newMessage = true
        },
        trueDate (d) {
            return this.$moment(d).locale("ru").format('D MMMM, H:mm')
        },
        toggle() {
            if (this.agreement_window) {
                this.agreement_window = false;
                this.agreement_window_class = "";
                this.agreement_window_text = "Открыть окно согласования";
            }
            else {
                this.agreement_window = true;
                this.agreement_window_text = "Закрыть окно согласования";
                this.agreement_window_class = "active";
            }
        }
    },
    beforeDestroy () {
        clearInterval(this.polling)
    },
    created() {
        if (this.token !== '' && this.token !== null) {
            this.getItem()
        }
        this.pollData()
        this.updateMessages()
    },
    watch: {
        token () {
            if (this.token !== '' && this.token !== null) {
                this.getItem()
            }
        },
        messages () {
            let last = this.messages[this.messages.length - 1]
            if (last.my === 0 && this.$moment() - this.$moment(last.time) < 10000){
                this.newMessage = true
                this.newMessageText = last.message
            }
        }
    }
}
</script>
