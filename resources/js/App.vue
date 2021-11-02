<template>
  <!-- <v-fade-transition mode="out-in">

    <router-view />
  </v-fade-transition> -->
        <div>
         <main-layout />
      </div>

</template>

<script>
import MainLayout from './components/MainLayout.vue'
  // Styles
  //import '@/styles/overrides.sass'

  export default {
  components: { MainLayout },
    name: 'App',
    metaInfo: {
      title: 'Nicole Closet',
      // titleTemplate: '%s | Dashboard',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>
