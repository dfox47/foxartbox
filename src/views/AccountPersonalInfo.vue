<template>
    <div>
        <div
            class="content"
        >
            <div class="account">
                <div class="wrap">
                    <ul class="breadcrumbs">
                        <li>
                            <router-link to="/">
                                {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/account/">
                                {{ $vuetify.lang.t('$vuetify.breadcrumbs.account') }}
                            </router-link>
                        </li>

                        <li>
                            <span>
                                {{ $vuetify.lang.t('$vuetify.breadcrumbs.personal_info') }}
                            </span>
                        </li>
                    </ul>

                    <div class="title_with_btn">
                        <a
                            href="/"
                            class="link_back"
                        >
                            {{ $vuetify.lang.t('$vuetify.back') }}
                        </a>

                        <h1>{{ $vuetify.lang.t('$vuetify.breadcrumbs.account') }}</h1>
                    </div>

                    <ul class="submenu">
                        <li>
                            <router-link to="/account/personal-info">
                                {{ $vuetify.lang.t('$vuetify.breadcrumbs.personal_info') }}
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/account/payments">
                                {{ $vuetify.lang.t('$vuetify.breadcrumbs.payments') }}
                            </router-link>
                        </li>
                    </ul>

                    <div class="account_wrap">
                        <div class="account_fields">
                            <!-- фото -->
                            <div class="account_fields__item">
                                <div
                                    class="account_fields__item__info"
                                    :key="avatarKey"
                                >
                                    <div
                                        v-if="user === null || user.avatar === '' || user.avatar === null || user.avatar === undefined"
                                        class="account_fields__photo"
                                    />
                                    <div
                                        v-else
                                        class="parcel_view__photo"
                                    >
                                        <img
                                            :src="this.$apiPath + user.avatar + '?key=' + avatarKey"
                                            alt="User"
                                        >
                                    </div>
                                </div>

                                <a
                                    class="account_fields__item__edit"
                                    @click="showAvatarPopup"
                                >
                                    {{ $vuetify.lang.t('$vuetify.edit') }}
                                </a>
                            </div>

                            <!-- Удостоверение личности -->
                            <div class="account_fields__item">
                                <div class="account_fields__item__info">
                                    Удостоверение личности
                                </div>

                                <div class="account_fields__item__btns">
                                    <v-btn
                                        small
                                        color="secondary"
                                        @click="showInternationalPopup"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.international_passport') }}
                                    </v-btn>

                                    <v-btn
                                        small
                                        color="secondary"
                                        @click="showPassportPopup"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.passport_rf') }}
                                    </v-btn>
                                </div>
                            </div>

                            <!-- Номер телефона -->
                            <div
                                class="account_fields__item"
                                v-if="!editPhone"
                            >
                                <div class="account_fields__item__info">
                                    <p>
                                        {{ $vuetify.lang.t('$vuetify.phone_number') }}
                                    </p>

                                    <p v-if="user !== null && user.info">
                                        {{ user.info.phone }}
                                    </p>
                                </div>

                                <a
                                    class="account_fields__item__edit"
                                    @click="editPhone = true"
                                    hidden
                                >
                                    {{ $vuetify.lang.t('$vuetify.edit') }}
                                </a>
                            </div>

                            <!-- Номер телефона -->
                            <div
                                class="account_fields__item"
                                v-else
                            >
                                <div class="account_fields__item__info">
                                    <div class="input_wrap__center">
                                        <v-form v-model="validPhone">
                                            <v-text-field-integer
                                                v-model="phone"
                                                class="input_wrap"
                                                name="phone"
                                                label="Ваш телефон"
                                                :properties="{
                                                    prefix: mask,
                                                    suffix: '',
                                                    'prepend-icon': 'mdi-phone',
                                                    rules: [
                                                        v => !!v || 'Укажите пожалуйста Ваш телефон',
                                                        v => (v !== null && v.length >= 15) || 'Слишком короткий номер телефона'
                                                    ],
                                                    readonly: false,
                                                    disabled: false,
                                                    outlined: false,
                                                    clearable: true,
                                                    placeholder: '',
                                                }"
                                                :options="{
                                                    inputMask: '(###) ###-##-##',
                                                    outputMask: '##########',
                                                    empty: null,
                                                    applyAfter: false,
                                                    alphanumeric: true,
                                                    lowerCase: false,
                                                }"
                                                @focus="mask = '+7'"
                                                @blur="checkBlur"
                                            />
                                        </v-form>
                                    </div>
                                </div>


                                <div class="account_fields__btns">
                                    <a
                                        class="account_fields__item__edit"
                                        v-if="validPhone"
                                        @click="updatePhone"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.save') }}
                                    </a>

                                    <div
                                        class="account_btn account_btn__close"
                                        @click="editPhone = false"
                                    />
                                </div>
                            </div>


                            <!-- Электронный адрес -->
                            <div
                                class="account_fields__item"
                                v-if="!editEmail"
                            >
                                <div class="account_fields__item__info">
                                    <p>
                                        {{ $vuetify.lang.t('$vuetify.email_address') }}
                                    </p>

                                    <p v-if="user !== null && user.info !== null && user.info.email && user.info.email !== null">
                                        {{ user.info.email }}
                                    </p>
                                    <p v-else>
                                        {{ $vuetify.lang.t('$vuetify.no_email_address') }}
                                    </p>
                                </div>

                                <a
                                    class="account_fields__item__edit"
                                    @click="editEmail = true"
                                >
                                    {{ $vuetify.lang.t('$vuetify.edit') }}
                                </a>
                            </div>
                            <div
                                class="account_fields__item"
                                v-else
                            >
                                <div class="account_fields__item__info">
                                    <div class="input_wrap__center">
                                        <v-form v-model="validEmail">
                                            <v-text-field
                                                prepend-icon="mdi-at"
                                                name="email"
                                                :label="emailNote"
                                                type="email"
                                                :rules="emailRules"
                                                v-model="email"
                                                clearable
                                            />
                                        </v-form>
                                    </div>
                                </div>


                                <div class="account_fields__btns">
                                    <a
                                        class="account_fields__item__edit"
                                        v-if="validEmail"
                                        @click="updateEmail"
                                    >
                                        {{ $vuetify.lang.t('$vuetify.save') }}
                                    </a>

                                    <div
                                        class="account_btn account_btn__close"
                                        @click="editEmail = false"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="account_info account_info__not_authorized">
                            <p>
                                {{ $vuetify.lang.t('$vuetify.personal.account.info1') }}
                            </p>

                            <p>
                                {{ $vuetify.lang.t('$vuetify.personal.account.info2') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <app-international_popup_0 />
        <app-international_popup_1 />
        <app-international_popup_2 />

        <app-passport_loaded_popup />
        <app-passport_popup_0 />
        <app-passport_popup_1 />
        <app-passport_popup_2 />
        <app-passport_popup_3 />

        <app-avatar_popup />
    </div>
</template>



<script>
import {HTTP} from '../plugins/axios.js'

import International_popup_0 from '../components/InternationalPopup_0';
import International_popup_1 from '../components/InternationalPopup_1';
import International_popup_2 from '../components/InternationalPopup_2';

import PassportLoaded_popup from '../components/PassportLoadedPopup';

import Passport_popup_0 from '../components/PassportPopup_0';
import Passport_popup_1 from '../components/PassportPopup_1';
import Passport_popup_2 from '../components/PassportPopup_2';
import Passport_popup_3 from '../components/PassportPopup_3';

import Avatar_popup  from '../components/AvatarPopup';


export default {
    name: 'AccountPersonalInfo',
    components: {
        'app-international_popup_0': International_popup_0,
        'app-international_popup_1': International_popup_1,
        'app-international_popup_2': International_popup_2,
        'app-passport_loaded_popup': PassportLoaded_popup,
        'app-passport_popup_0': Passport_popup_0,
        'app-passport_popup_1': Passport_popup_1,
        'app-passport_popup_2': Passport_popup_2,
        'app-passport_popup_3': Passport_popup_3,
        'app-avatar_popup': Avatar_popup
    },
    data: () => ({
        pass_img: require('@/assets/i/icons/show_pass.svg'),
        type: 'password',
        btnText: 'Show Password',
        phone: null,
        focus: false,
        mask: '',
        password: '',
        passwordRules: [
            v => !!v || 'Введите пароль!',
            v => (v && v.length >= 8) || 'Пароль не может быть меньше 8 символов!',
            v => /(?=.*[A-Z])/.test(v) || 'Пароль должен содержать хотя бы 1 заглавную букву',
            v => /(?=.*[a-z])/.test(v) || 'Пароль должен содержать хотя бы 1 строчную букву',
            v => /(?=.*\d)/.test(v) || 'Пароль должен содержать хотя бы 1 цифру',
            v => /^[a-zA-Z0-9@#$%^&+=*.\-_]{0,100}$/.test(v) || 'Недопустимые символы'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        emailNote: "E-mail",
        validPhone: false,
        validEmail: false,
        editPhone: false,
        editEmail: false,
    }),
    computed: {
        loading () {
            return this.$store.getters.loading
        },
        isUserLoggedIn () {
            return this.$store.getters.isUserLoggedIn
        },
        user () {
            return this.$store.getters.user
        },
        avatarKey() {
            return this.$store.getters.getAvatarKey
        }
    },
    methods: {
        showAvatarPopup () {
            this.$store.dispatch('showAvatarPopup')
        },
        showPassportPopup () {
            this.$store.dispatch('showPassportPopup_0')
        },
        showInternationalPopup () {
            this.$store.dispatch('showInternationalPopup_0')
        },
        checkBlur () {
            if (this.phone === null || this.phone === '') {
                this.mask = ''
            }
        },
        updatePhone() {
            if (this.validPhone) {
                HTTP.post(`/api/profile/personal`, {
                    phone: '+7' + this.phone,
                },{
                    headers: {
                        'X-Api-AuthKey': this.user.access_token
                    }
                })
                    .then(response => {
                        console.log(response)
                        this.$store.dispatch('setLoading', false);
                        this.editPhone = false
                        this.$store.dispatch('updateUserData');
                    }, error => {
                        //console.log(error);
                        this.$store.dispatch('setLoading', false);

                        if (error.toJSON().message === '') {
                            this.$store.dispatch('setError', 'Неизвестная ошибка запроса к серверу');
                        }
                        else {
                            this.$store.dispatch('setError', error.toJSON().message);
                        }
                        throw error;
                    });
            } else {
                this.$store.dispatch('setError', 'Не правильный номер телефона');
            }
        },
        updateEmail() {
            if (this.validEmail) {
                HTTP.post(`/api/profile/personal`, {
                    email: this.email,
                },{
                    headers: {
                        'X-Api-AuthKey': this.user.access_token
                    }
                })
                    .then(response => {
                        console.log(response)
                        this.$store.dispatch('setLoading', false);
                        this.editEmail = false
                        this.$store.dispatch('updateUserData');
                    }, error => {
                        //console.log(error);
                        this.$store.dispatch('setLoading', false);

                        if (error.toJSON().message === '') {
                            this.$store.dispatch('setError', 'Неизвестная ошибка запроса к серверу');
                        }
                        else {
                            this.$store.dispatch('setError', error.toJSON().message);
                        }
                        throw error;
                    });
            } else {
                this.$store.dispatch('setError', 'Не правильный номер телефона');
            }
        }
    },
    mounted() {
        this.$store.dispatch('hideMenuPopup');
        this.$store.dispatch('updateUserData');
        if (this.user !== null && this.user.info !== null) {
            this.email = this.user.info.email
            this.emailNote = this.user.info.email
        }

    }
}
</script>


