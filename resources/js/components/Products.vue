<template>
    <v-card flat>
        <v-card-title>
            Product Management
        </v-card-title>
        <v-card-subtitle>
           {{ title }}
        </v-card-subtitle>
        <v-divider/>
         <product-list v-if="isActionList" @addProductClicked="addProductClicked"/>
         <product-create v-if="isActionAdd" @productListClicked="productListClicked"/>
         <v-divider/>
        <v-card-actions>
            <!-- <v-btn>
                Save
            </v-btn> -->
        </v-card-actions>
    </v-card>
</template>

<script>
import ProductCreate from './ProductCreate.vue'
    export default {
  components: { ProductCreate },
        name: 'Products',
        data: () => ({
            isActionList: true,
            isActionAdd: false,
            title: 'Product List'
        }),
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>