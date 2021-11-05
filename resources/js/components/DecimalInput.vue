<template>
  <div>
    <v-text-field
      v-model="displayValue"
      prefix="PHP"
      color="success"
      :label="label"
      :rules="rules"
      @blur="isInputActive = false"
      @focus="isInputActive = true"
    />
  </div>
</template>

<script>
  import { formatToDecimal } from '../utils/helpers'

  export default {
    name: 'DecimalInput',
    props: ['value', 'label', 'rules'],
    data: () => ({
      isInputActive: false,
    }),
    computed: {
      displayValue: {
        get: function () {
          if (this.isInputActive) {
            if (typeof (this.value) === 'undefined') {
              return ''
            }
            return this.value.toString()
          } else {
            if (typeof (this.value) === 'undefined') {
              return ''
            }
            return formatToDecimal(this.value)
            // return this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
          }
        },
        set: function (modifiedValue) {
          let newValue = parseFloat(modifiedValue.replace(/[^\d.]/g, ','))
          if (isNaN(newValue)) {
            newValue = ''
          }
          this.$emit('input', newValue)
        },
      },
    },
  }
</script>
