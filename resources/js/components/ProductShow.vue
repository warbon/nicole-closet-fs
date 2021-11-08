<template>
  <v-card 
    flat
    class="ma-2"
  >
    <v-card-title>
      Product Info
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-img
            height="250"
            width="300"
            :src="product.image_url"
            contain
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            flat
            class="mx-auto"
            max-width="374"
          >
            <v-card-subtitle class="py-0">
              Product Name:
            </v-card-subtitle>
            <v-card-title class="pt-0">
              {{ product.name }}
            </v-card-title>
            
            <v-card-subtitle>
              Category: {{ product.category_name }}
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
              <div class="text-subtitle-2">
                Unit Price: PHP {{ product.unit_price }}
              </div>
              <div class="text-subtitle-2">
                Selling Price: PHP {{ product.selling_price }}
              </div>
              <div class="text-subtitle-2">
                Quantity: {{ product.quantity }} 
              </div>
              <v-divider class="my-2" />
              <div class="text-subtitle-2">
                Remarks: {{ product.remarks }}
              </div>
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
    export default {
        name: 'ProductShow',
        props: {
        product: {
            type: Object,
            required: true
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>