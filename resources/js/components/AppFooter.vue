<template>
  <v-footer
    dark
    padless
    class="mt-10"
    color="pink lighten-4"
  >
    <v-card
      flat
      tile
      class="transparent white--text text-center mx-auto"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <v-btn text rounded>
          About Us
        </v-btn>
        <v-btn text rounded>
          FAQ's
        </v-btn>
         <v-btn text rounded>
          Terms and Conditions
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Nicole's Closet</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'AppFooter',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        // 'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>