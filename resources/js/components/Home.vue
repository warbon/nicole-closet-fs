<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          src="../welcome.png"
          height="100vh"
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
        >
          <v-col
            cols="10"
            md="6"
          >
            <h1>Welcome!</h1>
            <p class="font-weight-light">
                 Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.<br>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
            </p>
            <v-btn class="mt-4">
              Shop Now
            </v-btn>
          </v-col>
        </v-row>

        <!-- <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        /> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
    export default {
    name: 'HomeView'
        
    }
</script>

<style lang="scss" scoped>

</style>