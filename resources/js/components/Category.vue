<template>
    <div>
      <v-row dense>
          <template v-for="category in categories">
            <v-col
              :key="category"
              class="mt-2"
              cols="12"
            >
              <strong>{{ category }}</strong>
            </v-col>
            
          <template  v-for="p in products">
            <v-col
              v-if="p.category === category"
              :key="p.id"
              cols="12"
              md="3"
            >
              <v-card
                class="mx-auto"
                max-width="344"
                height="400"
              >
                <v-img
                  :src="p.image"
                  height="200px"
                  class="ma-2"
                  contain
                ></v-img>

                <!-- <v-card-title>
                  {{ p.title }}
                </v-card-title> -->

                <!-- <v-card-subtitle>
                  {{ p.category }}
                </v-card-subtitle> -->

                <v-card-subtitle>
                      {{ p.title }}
                    </v-card-subtitle>
                    <v-card-text>
                      Price: {{ p.price}}
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
            
            </v-col>
          </template>
            
          </template>
        </v-row>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
    name: 'Category',
    data: () => ({
      products: [],
      categories: [],
      show: false
    }),
    created () {
      axios.get('https://fakestoreapi.com/products')
            .then((response) => {
               this.products = response.data
               console.log('Products', this.products)
            })
            .catch((error) => {
              console.log(error)
            })
      axios.get('https://fakestoreapi.com/products/categories')
            .then((response) => {
               this.categories = response.data
               console.log('Categories', this.categories)
            })
            .catch((error) => {
              console.log(error)
            })
    },
  }


</script>

<style lang="scss" scoped>

</style>