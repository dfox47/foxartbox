<template>
  <div>
    <div class="wrap">
      <h2 class="js-block-scroll" id="process">Process</h2>

      <ol class="process">
        <li class="process__item" v-for="processItem in processItems" :key="processItem.title">
          <h3>{{ processItem.title }}</h3>

          <p class="process__desc">{{ processItem.desc }}</p>
        </li>
      </ol>

      <p class="text-center">
        <a class="btn btn__main" href="mailto:info@foxartbox.com"><span>Contact us</span></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Process',
  data() {
    return {
      processItems: [
        {title: 'Connect',      desc: "The project begins with a discussion of your needs and ideas."},
        {title: 'Development',  desc: "Design, programming, SEO - that's our part of work"},
        {title: 'Support',      desc: "You can manage your project independently. And if you need help we will be happy to provide a support."}
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/vars' as *;


.process {
  counter-reset: process_counter;
  display: grid;
  font-size: 18px;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  list-style: none;
  padding: 30px 0 0;
  text-align: center;

  h3 {
    text-align: center;
  }

  &__desc {}

  &__item {
    counter-increment: process_counter;
    max-width: 300px;
    margin: 0 auto;
    position: relative;

    &::before {
      content: '' counter(process_counter);
      font-size: 80px;
      font-weight: 700;
      line-height: 1;
      position: relative;
      width: 100%;

      @media #{$tablet} {
        font-size: 60px;
      }
    }
  }

  @media #{$tablet} {
    grid-template-columns: 1fr;
  }
}
</style>