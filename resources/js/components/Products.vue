<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        Product Management
      </v-card-title>
      <v-card-subtitle>
        {{ title }}
      </v-card-subtitle>
      <v-divider />
      <product-list
        v-if="isActionList"
        @addProductClicked="addProductClicked"
        @deleteProductClicked="deleteProductClicked"
        @editProductClicked="editProductClicked"
      />
      <product-create
        v-if="isActionAdd"
        @productListClicked="productListClicked"
        @saveProductClicked="saveProductClicked"
      />
      <product-edit
        v-if="isActionEdit"
        :product="product"
        @productListClicked="productListClicked"
        @updateProductClicked="updateProductClicked"
      />
    </v-card>

    <v-snackbar
      v-model="snackbar.show"
      :timeout="timeout"
      :color="snackbar.color"
      text
      top
      right
      rounded
    >
      {{ snackbar.message }}
      <template #action="{ attrs }">
        <v-btn
          icon
          v-bind="attrs"
          @click="closeSnackBar()"
        >
          <v-icon :color="snackbar.color">
            mdi-close-circle
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'ProductsView',

        data: () => ({
            isActionList: true,
            isActionAdd: false,
            isActionEdit: false,
            title: 'Product List',
            timeout: 4000,
            snackbar: {
              message: '',
              color: '',
              show: false
            },
            product: []
        }),
        computed: {
        //   ...mapState({
        //     flashMessage: state => state.snackbar.flashMessage,
        //     snackbarShow: state => state.snackbar.snackbarShow,
        // })
        },
        created () {
          this.getCategories()
          this.getProducts()
        },
        methods: {
            addProductClicked () {
                this.isActionList = false
                this.isActionAdd = true
                this.title = 'New Product'
            },
            productListClicked () {
                this.isActionList = true
                this.isActionAdd = false
                this.isActionEdit = false
                this.title = 'Product List'
            },
            async saveProductClicked (formData) {
               const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
              await this.createProduct({ formData, config })
              .then((response) => {
                  this.isActionList = true
                  this.isActionAdd = false
                  this.getProducts()
                  this.snackbar = { message: response.data.message, color: 'success' , show: true }
               })
              .catch((error) => {
                  this.snackbar = { message: error, color: 'error' , show: true }
              })
            },
            async editProductClicked (id) {
              await this.getProduct(id)
                .then((response) => {
                  this.product = response.data.data
                  console.log('Product', this.product)
                  this.isActionEdit = true
                  this.isActionList = false
                  this.title = 'Edit Product'
                })
            },
            async updateProductClicked (formData) {
               const config = {
                    headers: { 'content-type': 'multipart/form-data'}
                }
              await this.updateProduct({ formData, config })
              .then((response) => {
                  this.isActionList = true
                  this.isActionEdit = false
                  this.getProducts()
                  this.snackbar = { message: response.data.message, color: 'success' , show: true }
               })
              .catch((error) => {
                  this.snackbar = { message: error, color: 'error' , show: true }
              })
            },
            async deleteProductClicked (id) {
               await this.deleteProduct(id)
               .then((response) => {
                  this.snackbar = { message: response.data.message, color: 'success' , show: true }
                  this.getProducts()
               })
               .catch((error) => {
                  this.snackbar = { message: error, color: 'error' , show: true }
               })
            },
            closeSnackBar () {
              this.snackbar = { message: '', color: '', show: false }
            },
          //  ...mapMutations('snackbar', ['DESTROY_FLASH_MESSAGE', 'SHOW_FLASH_MESSAGE']),
           ...mapActions('product', ['createProduct','updateProduct', 'getProducts', 'getProduct', 'deleteProduct']),
           ...mapActions('category', ['getCategories']),
        }
    }
</script>

<style lang="scss" scoped>

</style>