<template>
  <v-container class="pa-0">
    <v-card flat>
      <v-card-text class="px-0">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-btn
              color="#FF80AB"
              rounded
              dark
              @click="() => { $emit('addProductClicked')} "
            >
              <v-icon left>mdi-plus</v-icon>
               New Product
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              class="ml-auto"
              hide-details
              label="Search records"
              single-line
              style="max-width: 250px;"
            />
          </v-col>
        </v-row>

        <v-divider class="mt-3" />

        <v-data-table
          :headers="headers"
          :items="products"
          :search.sync="search"
          :sort-by="['name']"
          :sort-desc="[true]"
          multi-sort
          class="pa-0"
        >
          <template #item.actions="{ item }">
            <v-btn
              color="green"
              class="px-2 ml-1"
              elevation="0"
              min-width="0"
              small
              text
            >
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn
              color="error"
              class="px-2 ml-1"
              elevation="0"
              min-width="0"
              small
              text
              @click="selectProductToDestroy(item.id)"
            >
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
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
    <v-dialog
      v-model="confirmDelete"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Confirm delete
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete the selected product?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            @click="confirmDelete = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="error darken-1"
            text
            @click="destroyProduct"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
//   import api from '@/util/api'
//   import { showSnackBar } from '@/util/helpers'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'ProductList',

    data: () => ({
      headers: [
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Category',
          value: 'category_id',
        },
        {
          text: 'Unit',
          value: 'unit',
        },
        {
          text: 'Unit Price',
          value: 'unit_price',
        },
        {
          text: 'Selling Price',
          value: 'selling_price',
        },
        {
          text: 'Quantity',
          value: 'quantity',
        },
        // {
        //   text: 'Created',
        //   value: 'created_at',
        // },
        // {
        //   text: 'Updated',
        //   value: 'updated_at',
        // },
        {
          sortable: false,
          text: 'Actions',
          value: 'actions',
        },
      ],
    //   products: [],
    //   categories: [],
      search: undefined,
      snackbar: false,
      snackbarColor: 'info',
      snackbarMsg: '',
      snackbarTimeout: -1,
      direction: 'top right',
      confirmDelete: false,
      idToDestroy: null,
    }),
    computed: {
    //   parsedDirection () {
    //     return this.direction.split(' ')
    //   },
        ...mapState({
            flashMessage: state => state.snackbar.flashMessage,
            products: state => state.product.products,
            categories: state => state.category.categories,
        })
    },
    created () {
        this.getCategories()
        this.getProducts()
    //   if (Object.keys(this.flashMessage).length > 0) {
    //     showSnackBar(this, this.flashMessage.message, this.flashMessage.color, 8)
    //     this.destroyFlashMessage()
    //   }
    },
    methods: {
      destroyProduct () {
        this.confirmDelete = false
        this.deleteProduct()
      },
      selectProductToDestroy (id) {
        this.idToDestroy = id
        this.confirmDelete = true
      },
        ...mapActions('snackbar', ['destroyFlashMessage']),
        ...mapActions('product', ['getProducts', 'deleteProduct']),
        ...mapActions('category', ['getCategories']),
    },
  }
</script>
