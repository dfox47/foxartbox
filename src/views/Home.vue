<template>
  <div class="content">
    <HomeBlock />
    <About />
    <Projects />
    <PageSpeed />
    <Contacts />
    <Clock />
  </div>
</template>

<script setup>
import About        from '../components/About'
import Clock        from '../components/Clock'
import Contacts     from '../components/Contacts'
import HomeBlock    from '../components/HomeBlock'
import PageSpeed    from '../components/PageSpeed'
import Projects     from '../components/Projects'

document.title = 'Home | Foxartbox'
</script>