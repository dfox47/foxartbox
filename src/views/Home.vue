<template>
    <div class="home">
        <div class="wrap">
            <div class="home_intro">
                <div class="home_intro__text">
                    <h1>{{ $vuetify.lang.t('$vuetify.main_page.h1') }}</h1>

                    <span>{{ $vuetify.lang.t('$vuetify.main_page.h1.helper') }}</span>

                    <v-btn
                        medium
                        color="primary"
                        @click="showRegistrationPopup"
                    >
                        {{ $vuetify.lang.t('$vuetify.registration') }}
                    </v-btn>
                </div>

                <div class="home_intro__img">
                    <img
                        src="../assets/i/intro.png"
                        alt="Intro"
                    >
                </div>
            </div>
        </div>

        <div class="home_send_or_grab">
            <div class="wrap">
                <div class="home_send_or_grab__content">
                    <h2>{{ $vuetify.lang.t('$vuetify.what_do_you_need') }}</h2>

                    <div class="send_or_grab__wrap">
                        <div
                            @click="showRequestSendPopup_1"
                            class="send_or_grab__outer"
                        >
                            <span class="send_or_grab__inner">
                                <img
                                    src="../assets/i/send.svg"
                                    alt="send"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_send') }}</span>
                            </span>
                        </div>

                        <div
                            @click="showRequestPlacePopup_1"
                            class="send_or_grab__outer"
                        >
                            <span class="send_or_grab__inner">
                                <img
                                    src="../assets/i/grab.svg"
                                    alt="grab"
                                >
                                <span>{{ $vuetify.lang.t('$vuetify.menu_button_take') }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_advantages">
            <div class="wrap">
                <div class="home_advantages__content">
                    <h2>{{ $vuetify.lang.t('$vuetify.our_advantages') }}</h2>

                    <div class="home_advantages__left">
                        <div class="home_advantages__item">
                            <img
                                src="../assets/i/cost.svg"
                                :alt="$vuetify.lang.t('$vuetify.main_page.6b.1.header')"
                            >
                            <p>
                                <span>{{ $vuetify.lang.t('$vuetify.main_page.6b.1.header') }}</span>
                                {{ $vuetify.lang.t('$vuetify.main_page.6b.1.text') }}
                            </p>
                        </div>

                        <div class="home_advantages__item">
                            <img
                                src="../assets/i/clarity.svg"
                                :alt="$vuetify.lang.t('$vuetify.main_page.6b.2.header')"
                            >
                            <p>
                                <span>{{ $vuetify.lang.t('$vuetify.main_page.6b.2.header') }}</span>
                                {{ $vuetify.lang.t('$vuetify.main_page.6b.2.text') }}
                            </p>
                        </div>

                        <div class="home_advantages__item">
                            <img
                                src="../assets/i/association.svg"
                                :alt="$vuetify.lang.t('$vuetify.main_page.6b.3.header')"
                            >
                            <p>
                                <span>{{ $vuetify.lang.t('$vuetify.main_page.6b.3.header') }}</span>
                                {{ $vuetify.lang.t('$vuetify.main_page.6b.3.text') }}
                            </p>
                        </div>
                    </div>

                    <div class="home_advantages__right">
                        <div class="home_advantages__item">
                            <img
                                src="../assets/i/clearance.svg"
                                :alt="$vuetify.lang.t('$vuetify.main_page.6b.4.header')"
                            >
                            <p>
                                <span>{{ $vuetify.lang.t('$vuetify.main_page.6b.4.header') }}</span>
                                {{ $vuetify.lang.t('$vuetify.main_page.6b.4.text') }}
                            </p>
                        </div>

                        <div class="home_advantages__item">
                            <img
                                src="../assets/i/responsibility.svg"
                                :alt="$vuetify.lang.t('$vuetify.main_page.6b.5.header')"
                            >
                            <p>
                                <span>{{ $vuetify.lang.t('$vuetify.main_page.6b.5.header') }}</span>
                                {{ $vuetify.lang.t('$vuetify.main_page.6b.5.text') }}
                            </p>
                        </div>

                        <div class="home_advantages__item">
                            <img
                                src="../assets/i/speed.svg"
                                :alt="$vuetify.lang.t('$vuetify.main_page.6b.6.header')"
                            >
                            <p>
                                <span>{{ $vuetify.lang.t('$vuetify.main_page.6b.6.header') }}</span>
                                {{ $vuetify.lang.t('$vuetify.main_page.6b.6.text') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_mobile_app">
            <div class="wrap">
                <div class="home_mobile_app__content">
                    <img
                        src="../assets/i/mobile_app.svg"
                        alt=""
                    >

                    <div class="home_mobile_app__text">
                        <h2>{{ $vuetify.lang.t('$vuetify.main_page.we_have_mobile_app') }}</h2>

                        <p>{{ $vuetify.lang.t('$vuetify.main_page.we_have_mobile_app__desc') }}</p>

                        <div>
                            <img
                                src="../assets/i/appstore.svg"
                                alt=""
                            >

                            <img
                                src="../assets/i/googleplay.svg"
                                alt=""
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_how_it_works">
            <div class="wrap">
                <div class="home_how_it_works__content">
                    <h2>{{ $vuetify.lang.t('$vuetify.home.how_it_works') }}</h2>

                    <img
                        src="../assets/i/how_it_works.svg"
                        alt=""
                    >

                    <div class="home_how_it_works__text">
                        <p>
                            1. {{ $vuetify.lang.t('$vuetify.mail_page.how_it_work.1') }}
                        </p>

                        <p>
                            2. {{ $vuetify.lang.t('$vuetify.mail_page.how_it_work.2') }}
                        </p>

                        <p>
                            3. {{ $vuetify.lang.t('$vuetify.mail_page.how_it_work.3') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        showRegistrationPopup () {
            this.$store.dispatch('showRegistrationPopup')
        },
        showRequestPlacePopup_1 () {
            this.$store.dispatch('showRequestPlacePopup_1')
        },
        showRequestSendPopup_1 () {
            this.$store.dispatch('showRequestSendPopup_1')
        },
        showSendOrGrubPopup () {
            this.$store.dispatch('showSendOrGrubPopup')
        }
    }
}
</script>


