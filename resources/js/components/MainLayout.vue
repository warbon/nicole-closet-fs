<template>
  <v-app
    id="inspire"
  >
    <v-app-bar
      app
      color="white"
      shrink-on-scroll
      light
      elevate-on-scroll
    >
      <!-- <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.4), rgba(25,32,72,.4)"
        />
      </template> -->

      <v-app-bar-nav-icon />

      <v-spacer />
      
      <v-toolbar-title>
        <!-- <h2 class="font-weight-light">
          Nicole's Closet
        </h2> -->
        <v-img src="logo.png" />
      </v-toolbar-title>

      <v-spacer />

      <v-btn 
        icon
      >
        <v-badge
          color="green"
          content="6"
          overlap
        >
          <v-icon>
            mdi-cart-outline
          </v-icon>
        </v-badge>
      </v-btn>

      <account-menu />

      <!-- <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar> -->

      <template #extension>
        <v-tabs
          centered
          class="ml-n9"
          color="pink lighten-4"
        >
          <v-tab
            v-for="link in links"
            :key="link.name"
            :to="{ name: link.routeName }"
          >
            {{ link.name }}
          </v-tab>
        </v-tabs>
      </template>

      <!-- <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar> -->
    </v-app-bar>

    <v-main>
      <v-container class="pt-5" fluid>
          <router-view />
        <!-- <router-view :key="$route.fullPath" /> -->
      </v-container>
        <app-footer />
    </v-main>
  </v-app>
</template>

<script>

  export default {
    name: 'MainLayout',
    data: () => ({
      links: [
        { name: 'Home', routeName: 'Home'},
        { name: 'New Arrivals', routeName: 'NewArrivals'},
        { name: 'Store', routeName: 'Category'},
        { name: 'About Us', routeName: 'About'}
      ],
    }),
    mounted() {
      this.$fbCustomerChat.setOptions({
        theme_color: '#F8BBD0'
      })

    }
  }
</script>