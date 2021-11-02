<template>
  <!-- <v-fade-transition mode="out-in">

    <router-view />
  </v-fade-transition> -->
        <div>
         <example-component />
                <router-view />
      </div>

</template>

<script>
import ExampleComponent from './components/ExampleComponent.vue'
  // Styles
  //import '@/styles/overrides.sass'

  export default {
  components: { ExampleComponent },
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
