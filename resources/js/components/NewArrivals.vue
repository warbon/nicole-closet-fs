<template>
  <div>
    <v-row dense>
      <template v-for="product in newArrivalProducts">
        <v-col
          :key="product.id"
          cols="12"
          md="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="mx-auto"
              :class="{ 'on-hover': hover }"
              :elevation="hover ? 12 : 2"
              max-width="344"
              height="450"
            >
              <v-img
                :src="product.image_url"
                height="200px"
                class="ma-2"
                :class="{ 'on-hover': hover }"
                :elevation="hover ? 12 : 2"
              />

              <!-- <v-card-title>
                  {{ p.title }}
                </v-card-title> -->

              <!-- <v-card-subtitle>
                  {{ p.category }}
                </v-card-subtitle> -->

              <v-card-subtitle>
                {{ product.name }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ product.category_name }}
                <v-chip
                  v-if="product.new_arrival"
                  color="orange"
                  text-color="white"
                  small
                >
                  New Arrival
                  <v-icon
                    right
                    small
                  >
                    mdi-star
                  </v-icon>
                </v-chip>
              </v-card-subtitle>
              <v-card-text>
                Price: {{ product.unit_price }}
              </v-card-text>
                
              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                  :to="{ name: 'Product', params: { id: product.id }}"
                >
                  Details
                </v-btn>

                <v-spacer />

                <!-- <v-chip
                  v-if="product.new_arrival"
                  color="orange"
                  text-color="white"
                  small
                >
                  New Arrival
                  <v-icon
                    right
                    small
                  >
                    mdi-star
                  </v-icon>
                </v-chip> -->

                <!--   <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn> -->
              </v-card-actions>
              <!-- <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>

                   <v-card-text>
                      {{ p.description }}
                    </v-card-text>
                  </div>
                </v-expand-transition> -->
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
        name: 'NewArrivals',
        data: () => ({
        show: false
    }),
    computed: {
      ...mapGetters('product', ['newArrivalProducts'])
    },
    created () {
      this.getProducts()
    },
    methods: {
      ...mapActions('product', ['getProducts'])
    }
        
  }
</script>

<style lang="scss" scoped>

</style>