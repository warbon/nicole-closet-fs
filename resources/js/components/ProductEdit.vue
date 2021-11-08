<template>
  <v-container class="pa-0">
    <v-card
      flat
      class="pa-5"
      height="800"
    >
      <!-- <v-card-text class="px-0"> -->
      <!-- <v-divider class="mt-3" /> -->

      <!-- <div> -->
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-switch
              v-model="product.new_arrival"
              inset
              label="New Arrival"
            />

            <v-text-field
              v-model="product.name"
              :counter="100"
              :rules="nameRules"
              label="Name"
              required
            />

            <v-textarea
              v-model="product.description"
              :counter="300"
              :rules="descriptionRules"
              label="Description"
              required
            />

            <v-select
              v-model="product.category_id"
              :items="categories"
              item-value="id"
              item-text="name"
              :rules="[v => !!v || 'Item is required']"
              label="Category"
              required
            />

            <decimal-input
              v-model="product.unit_price"
              :label="'Unit Price'"
              :rules="[minPrice(product.unit_price)]"
            />
            <decimal-input
              v-model="product.selling_price"
              :label="'Selling Price'"
              :rules="[minPrice(product.selling_price)]"
            />

            <v-text-field
              v-model="product.quantity"
              label="Quantity"
              required
            />

            <v-textarea
              v-model="product.remarks"
              :counter="300"
              label="Remarks"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <div>
              <v-sheet
                outlined
                class="ma-10"
              >
                <v-img
                  :src="previewPhoto"
                  contain
                  height="350"
                />
              </v-sheet>
            </div>
            <div class="d-block">
              <v-file-input
                chips
                show-size
                counter
                label="Upload Photo"
                class="ma-10"
                @change="onFileChange"
              />
            </div>
            <div class="d-flex justify-center mb-6">
              <v-btn
                width="180"
                color="#FF80AB"
                rounded
                dark
                class="mr-4"
                @click="() => { $emit('productListClicked')} "
              >
                <v-icon left>
                  mdi-format-list-text
                </v-icon>
                Product List
              </v-btn>
              <v-btn
                width="180"
                :disabled="!valid"
                color="success"
                rounded
                class="mr-4"
                @click="updateProduct"
              >
                <v-icon
                  left
                >
                  mdi-content-save-check
                </v-icon>
                Update
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'ProductEdit',
    props: {
        product: {
            type: Object,
            required: true
        }
    },

    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length <= 3000) || 'Description must be less than 300 characters',
      ],
    //   email: '',
    //   emailRules: [
    //     v => !!v || 'E-mail is required',
    //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    //   ],
      category_id: null,
      unit: 'pc',
      unit_price: 0,
      selling_price: 0,
      minPrice (val) {
        return (val > 0 || 'Price must be not less than or equal to zero.')
      },
      quantity: 0,
      previewPhoto: '',
      photo: null,
      checkbox: false,
    }),
    computed: {
      ...mapState({
            categories: state => state.category.categories,
        })
    },
    created () {
      this.getCategories()
      this.previewPhoto = this.product.image_url
    },
    methods: {
      onFileChange(e) {
        //  const file = e.target.files[0];
       this.product.photo = e
       this.previewPhoto = URL.createObjectURL(e)
     },

      updateProduct () {

         let formData = new FormData()
         formData.append('id', this.product.id)
         formData.append('photo', this.product.photo)
         formData.append('new_arrival', Number(this.product.new_arrival))
         formData.append('name', this.product.name)
         formData.append('description', this.product.description)
         formData.append('category_id', this.product.category_id)
         formData.append('unit', this.product.unit)
         formData.append('unit_price', this.product.unit_price)
         formData.append('selling_price', this.product.selling_price)
         formData.append('quantity', this.product.quantity)
         formData.append('status', 'A')
         formData.append('remarks', this.product.remarks)
         formData.append('_method', 'PUT')
         //formData.append('created_by', 1)
         formData.append('updated_by', 1)
         console.log('formData', this.product)
         this.$emit('updateProductClicked', formData)
      },
      ...mapActions('category', ['getCategories']),
    },
        
    }
</script>

<style lang="scss" scoped>

</style>