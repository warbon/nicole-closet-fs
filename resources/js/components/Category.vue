<template>
  <div>
    <v-row dense>
      <template v-for="category in categories">
        <v-col
          :key="category.id"
          class="mt-2"
          cols="12"
        >
          <strong>{{ category.name }}</strong>
        </v-col>
            
        <template v-for="product in products">
          <v-col
            v-if="product.category_id === category.id"
            :key="`${category.id}${product.id}`"
            cols="12"
            md="3"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="mx-auto"
                :class="{ 'on-hover': hover }"
                :elevation="hover ? 12 : 2"
                max-width="344"
                height="400"
              >
                <v-img
                  :src="product.image_url"
                  height="200px"
                  class="ma-2"
                  contain
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
                <v-card-text>
                  Price: {{ product.unit_price }}
                </v-card-text>
                
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
                  >
                    Details
                  </v-btn>

                <!-- <v-spacer></v-spacer>

                  <v-btn
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
      </template>
    </v-row>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
    name: 'CategoryView',
    data: () => ({
      // products: [],
      // categories: [],
      show: false
    }),
    computed: {
      ...mapState({
        categories: state => state.category.categories,
        products: state => state.product.products,
      })
    },
    created () {
      this.getCategories()
      this.getProducts()
    },
    methods: {
      ...mapActions('category', ['getCategories']),
      ...mapActions('product', ['getProducts'])
    }
  }


</script>

<style lang="scss" scoped>

</style>