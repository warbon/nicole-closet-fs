<template>
  <div>
    <v-row dense>
      <v-col
        v-for="n in 24"
        :key="n"
        cols="4"
      >
        <v-card height="200" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
    export default {
        name: 'NewArrivals'
        
    }
</script>

<style lang="scss" scoped>

</style>