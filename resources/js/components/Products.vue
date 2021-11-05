<template>
  <div>
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
      />
      <product-create
        v-if="isActionAdd"
        @productListClicked="productListClicked"
        @saveProductClicked="saveProductClicked"
      />
      <v-divider />
      <v-card-actions>
      <!-- <v-btn>
                Save
            </v-btn> -->
      </v-card-actions>
    </v-card>

    <v-snackbar
      v-model="snackbarShow"
      :timeout="timeout"
      color="transparent"
      top
      right
    >
      <template #action="{ attrs }">
        <v-alert
          dark
          type="success"
          text
          v-bind="attrs"
        >
          {{ flashMessage }}

          <v-btn
            dark
            text
            v-bind="attrs"
            @click="closeSnackBar()"
          >
            Close
          </v-btn>
        </v-alert>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
        name: 'ProductsView',

        data: () => ({
            isActionList: true,
            isActionAdd: false,
            title: 'Product List',
            timeout: 2000
        }),
        computed: {
          ...mapState({
            flashMessage: state => state.snackbar.flashMessage,
            snackbarShow: state => state.snackbar.snackbarShow,
        })
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
                this.title = 'Product List'
            },
            saveProductClicked (formData) {
               const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
              this.createProduct({ formData, config })
              .then(() => {
                this.isActionList = true
                this.isActionAdd = false
               this.SHOW_FLASH_MESSAGE('Success')

              // console.log('Created', response)
               })
              .catch((error) => {
              console.log('error', error)
            })
            },
            deleteProductClicked (id) {
               this.deleteProduct(id)
               this.getProducts()
               this.SHOW_FLASH_MESSAGE('Delete Success')
            },
            closeSnackBar () {
              this.DESTROY_FLASH_MESSAGE()
            },
           ...mapMutations('snackbar', ['DESTROY_FLASH_MESSAGE', 'SHOW_FLASH_MESSAGE']),
           ...mapActions('product', ['createProduct', 'getProducts', 'deleteProduct'])
        }
    }
</script>

<style lang="scss" scoped>

</style>