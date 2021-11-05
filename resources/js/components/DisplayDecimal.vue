<template>
  <div>
    <v-text-field
      v-model="displayValue"
      prefix="PHP"
      color="success"
      :label="label"
      readonly
    />
  </div>
</template>

<script>
  import { formatToDecimal } from '../utils/helpers'

  export default {
    name: 'DisplayDecimal',
    props: ['value', 'label'],
    data: () => ({
      isInputActive: false,
    }),
    computed: {
      displayValue: {
        get: function () {
          if (isNaN(this.value)) {
            return '0.00'
          }
          return formatToDecimal(this.value)
        },
      },
    },
  }
</script>
