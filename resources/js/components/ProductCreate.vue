<template>
  <v-container class="pa-0">
    <v-card
      flat
      class="pa-5"
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
            <v-text-field
              v-model="name"
              :counter="50"
              :rules="nameRules"
              label="Name"
              required
            />

            <v-textarea
              v-model="description"
              :counter="250"
              :rules="descriptionRules"
              label="Description"
              required
            />

            <v-select
              v-model="category_id"
              :items="categories"
              item-value="id"
              item-text="name"
              :rules="[v => !!v || 'Item is required']"
              label="Category"
              required
            />

            <decimal-input
              v-model="unit_price"
              :label="'Unit Price'"
              :rules="[minPrice(unit_price)]"
            />
            <decimal-input
              v-model="selling_price"
              :label="'Selling Price'"
              :rules="[minPrice(selling_price)]"
            />

            <v-text-field
              v-model="quantity"
              label="Quantity"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
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
            <v-file-input
              chips
              show-size
              counter
              label="Upload Photo"
              class="ma-10"
              @change="onFileChange"
            />
          </v-col>
        </v-row>
           
        <v-btn
          width="200"
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
          width="200"
          :disabled="!valid"
          color="success"
          rounded
          class="mr-4"
          @click="saveProduct"
        >
          <!-- <v-icon left>
            mdi-save
          </v-icon> -->
          Save
        </v-btn>

        <!-- <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
          color="warning"
          @click="resetValidation"
        >
          Reset Validation
        </v-btn> -->
        <!-- </v-card-actions> -->
      </v-form>
    </v-card>
    <!-- <v-snackbar
      v-model="snackbar"
      :type="snackbarColor"
      :timeout="snackbarTimeout"
      v-bind="{
        [parsedDirection[0]]: true,
        [parsedDirection[1]]: true
      }"
    >
      {{ snackbarMsg }}
    </v-snackbar> -->
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'ProductCreate',
        data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length <= 250) || 'Description must be less than 250 characters',
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
      previewPhoto: null,
      photo: null,
      checkbox: false,
    }),
    computed: {
      ...mapState({
            flashMessage: state => state.snackbar.flashMessage,
            snackbarShow: state => state.snackbar.snackbarShow,
            products: state => state.product.products,
            categories: state => state.category.categories,
        })
    },
    created () {
      this.getCategories()
    },
    methods: {
      onFileChange(e) {
         console.log('Log E', e)
        //  const file = e.target.files[0];
       this.photo = e
       this.previewPhoto = URL.createObjectURL(e)
     },

      saveProduct () {
        //  const config = {
        //             headers: { 'content-type': 'multipart/form-data' }
        //         }
         let formData = new FormData()

         formData.append('photo', this.photo)
         formData.append('name', this.name)
         formData.append('description', this.description)
         formData.append('category_id', this.category_id)
         formData.append('unit', this.unit)
         formData.append('unit_price', this.unit_price)
         formData.append('selling_price', this.selling_price)
         formData.append('quantity', this.quantity)
         formData.append('status', 'A')
         formData.append('remarks', 'Test')
         formData.append('created_by', 1)
         formData.append('updated_by', 1)
         this.$emit('saveProductClicked', formData)
        // console.log('Created', formData)
        //  this.createProduct({ formData, config })
        //  .then((response) => {
        //    this.$router({ name: 'Products' })
        //    this.SHOw_FLASH_MESSAGE(response.data.message)

        //    // console.log('Created', response)
        //  })
        //  .catch((error) => {
        //    console.log('error', error)
        //  })
      },
      // reset () {
      //   this.$refs.form.reset()
      // },
      // resetValidation () {
      //   this.$refs.form.resetValidation()
      // },
      ...mapActions('category', ['getCategories']),
      ...mapActions('product', ['createProduct']),
      ...mapMutations('snackbar', ['SHOw_FLASH_MESSAGE'])
    },
        
    }
</script>

<style lang="scss" scoped>

</style>