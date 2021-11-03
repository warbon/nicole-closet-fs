<template>
  <v-app id="inspire" style="height: 100px;">
    <v-app-bar
      app
      absolute
      color="#FF4081"
      dark
      shrink-on-scroll
      prominent
      src="../nicole-closet.png"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
     <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.4), rgba(25,32,72,.4)"
        ></v-img>
      </template>

       <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
      
      <v-toolbar-title>
        <h2 class="font-weight-light">
          Nicole's Closet
        </h2>
        </v-toolbar-title>

      <v-spacer></v-spacer>
        <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <!-- <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar> -->

      <template v-slot:extension>
      <v-tabs
        centered
        class="ml-n9"
      >
        <v-tab
          v-for="link in links"
          :key="link.name"
          :to="{name: link.routeName }"
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

    <v-main  id="scrolling-techniques-3" class="overflow-y-auto" style="height:500px">
    <v-container >
       <router-view ></router-view>
      </v-container>
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
  }
</script>