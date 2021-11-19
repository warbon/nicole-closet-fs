<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-carousel 
      cycle
      continuous
      show-arrows-on-hover
      interval="5000"
      height="550"
      progress
      progress-color="pink lighten-2"
    >
      <v-carousel-item
         v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      />
    </v-carousel>
     <v-row no-gutters >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          transition="slide-y-reverse-transition"
          src="../welcome.png"
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
          class="pt-15 mt-15"
        >
          <v-col
            cols="10"
            md="6"
          >
            <div>
            <p class="mb-4 font-weight-thin text-h4">Choose Comfort</p>
            <p class="font-weight-regular">
              Don’t stress about the dress, <br/> we’ll dress you to impress.
            </p>
             <p class="font-weight-light text-end">
              We have outfits that will make you <br /> comfortably beautiful.
            </p>
            </div>
            <v-btn
              class="mt-4 px-5"
              :to="{name: 'Category'}"
              rounded
            >
              Shop Now
            </v-btn>
          </v-col>
          
        </v-row>

        <!-- <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        /> -->
      </v-col>
    </v-row>

     <!-- <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
      >
        <v-img
          transition="slide-y-reverse-transition"
          src="../nicole-closet.png"
          height="30vh"
        />
      </v-col>
    </v-row> -->

  </section>
</template>

<script>
    export default {
    name: 'HomeView',
    data: () => ({
      items: [
          {
            src: '../images/slide-01.jpg',
          },
          {
            src: '../images/slide-02.jpg',
          },
          {
            src: '../images/slide-03.jpg',
          },
          {
            src: '../images/slide-04.jpg',
          },
          {
            src: '../images/slide-05.jpg',
          },
          {
            src: '../images/slide-06.jpg',
          },
        ],
      })
    }
</script>

<style lang="scss" scoped>

</style>