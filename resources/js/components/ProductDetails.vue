<template>
  <v-card 
    flat
    class="ma-2"
  >
    <v-card-title>
      Product Details
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-img
            :src="product.image_url"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            flat
            class="mx-auto"
          >
            <v-card-subtitle class="py-0">
              Product Name:
            </v-card-subtitle>
            <v-card-title class="pt-0">
              {{ product.name }}
            </v-card-title>
            
            <v-card-subtitle>
              Category: {{ product.category_info.name }}
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
            

            <v-divider class="mx-4" />
            <v-card-text>
              <!-- <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                />

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row> -->
              <div class="text-subtitle-2">
                Description:
              </div>
              <div class="text-subtitle-1 mb-2">
                {{ product.description }}
              </div>
              <div class="text-subtitle-1">
                Price: PHP {{ product.selling_price }}
              </div>
              <div class="text-subtitle-1">
                On Hand: {{ product.quantity }} 
              </div>
              <v-divider class="my-5" />
        
              <v-row class="d-flex align-self ma-1">
                <v-text-field
                  v-model="quantity"
                  label="Quantity"
                  required
                  outlined
                  dense
                />

                <v-spacer />
                <v-btn
                  dark
                  rounded
                  color="green"
                  width="200"
                >
                  <v-icon left>
                    mdi-cart-outline
                  </v-icon>
                  Add TO CART
                </v-btn>
              </v-row>
            </v-card-text>

            <!-- <v-divider class="mx-4" /> -->

            <!-- <v-card-title>Tonight's availability</v-card-title> -->

            <!-- <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'ProductDetails',
        // props: {
        // product: {
        //     type: Object,
        //     required: true
        //   }
        // },
        data: () => ({
            product: { category_info : { name: '' } },
            quantity: 1
        }),
        async created () {
            await this.getProduct(this.$route.params.id)
            .then((response) => {
                this.product = response.data.data
                console.log('Product', this.product)
            })
        },
        methods: {
            ...mapActions('product', ['getProduct'])
        }
    }
</script>

<style lang="scss" scoped>

</style>