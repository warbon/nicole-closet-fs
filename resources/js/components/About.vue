<template>
<v-container>
  <v-row no-gutters >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          transition="slide-y-reverse-transition"
          src="../images/about.jpg"
          height="80vh"
          contain
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <!-- <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        /> -->

        <v-row
          align="center"
          justify="center"
          class="mt-15"
        >
          <v-col
            cols="10"
            md="6"
          >
            <div>
            <p class="mb-4 font-weight-thin text-h4">About Us</p>
            <p class="font-weight-regular">
              We are [SHOP NAME], a small but motivated company specializing in [PRODUCTS CATEGORY NAME]. 
              We believe passionately in great bargains and excellent service, 
              which is why we commit ourselves to giving you the best of both.

              If you’re looking for something new, you’re in the right place. 
              We strive to be industrious and innovative, 
              offering our customers something they want, 
              putting their desires at the top of our priority list.
            </p>
            </div>
          </v-col>
          
        </v-row>

        <!-- <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        /> -->
      </v-col>
    </v-row>
</v-container>
</template>

<script>
    export default {
        name: 'AboutView'
    }
</script>

<style lang="scss" scoped>

</style>