export function leadingSlash (str) {
    return str.startsWith('/') ? str : '/' + str
  }
  
  export function trailingSlash (str) {
    return str.endsWith('/') ? str : str + '/'
  }
  
  export const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  }
  
  export function showSnackBar (component, message, color = 'info', timeout = -1) {
    component.snackbarMsg = message
    component.snackbar = true
    component.snackbarTimeout = timeout > 0 ? (timeout * 1000) : timeout
    component.snackbarColor = color
  }
  
  export function formatDate (date) {
    return (date.getFullYear() + '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      ('0' + date.getDate()).slice(-2))
  }
  
  export function formatToDecimal (val) {
    return Number(val).toFixed(2)
    // .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
  }
  
  export function convertToFloat (val) {
          let fvalue = val
          if (fvalue !== '') {
              if (fvalue.indexOf(',') !== -1) {
                fvalue = fvalue.replace(',', '')
              }
              fvalue = parseFloat(fvalue)
              while (/(\d+)(\d{3})/.test(val.toString())) {
                  fvalue = fvalue.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
              }
          }
          return fvalue
      }
  
  export function abbreviateNumber (value) {
    let newValue = value
    const suffixes = ['', 'K', 'M', 'B', 'T']
    let suffixNum = 0
    while (newValue >= 1000) {
      newValue /= 1000
      suffixNum++
    }
  
    newValue = newValue.toPrecision(3)
  
    newValue += suffixes[suffixNum]
    return newValue
  }
  