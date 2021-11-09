<template>
  <v-card
    width="500"
    class="mx-auto mt-5 pa-10"
    outlined
    shaped
  >
    <v-card-title>
      <h1 class="display-1"  @dblclick="magicLogin">
       Login
      </h1>
    </v-card-title>
    <v-card-subtitle>
      Store Admin
    </v-card-subtitle>
    <v-divider />
    <v-card-text>
      <v-form v-model="formIsValid">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          :rules="emailRules"
          prepend-icon="mdi-email-outline"
        />
        <v-text-field
           ref="passwordInput"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock-outline"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :rules="passwordRules"
          @keyup.enter="login"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <!-- <v-btn color="success">
        Register
      </v-btn>
      <v-spacer /> -->
      <v-btn
        color="info"
        rounded
        large
        width="380"
        class="mt-5"
        :disabled="!formIsValid"
        @click="login"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	name: 'LoginPage',
	data() {
		return {
      formIsValid: false,
      emailRules: [
        value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Invalid email',
      ],
      passwordRules: [
        (value) => !!value || 'Password is required.',
        (value) => value.length >= 8 || 'Password must be at least 8 characters.',
      ],
      showPassword: false,
      email: '',
      password: '',
      atoken: '',
		}
	},
  computed: {
      loginData () {
        return {
          username: this.email,
          password: this.password,
          grant_type: process.env.MIX_VUE_APP_GRANT_TYPE,
          client_id: process.env.MIX_VUE_APP_CLIENT_ID,
          client_secret: process.env.MIX_VUE_APP_CLIENT_SECRET,
        }
      },
      // parsedDirection () {
      //   return this.direction.split(' ')
      // },
      ...mapState('auth', ['token']),
      ...mapGetters('auth', ['isAuthenticated']),
      //...mapState('snackbars', ['flashMessage']),
    },
    mounted () {
      // if (Object.keys(this.flashMessage).length > 0) {
      //   showSnackBar(this, this.flashMessage.message, this.flashMessage.color, 5)
      //   this.destroyFlashMessage()
      // }
    },
    methods: {
      login () {
        console.log('login data', this.loginData)
        this.$store.dispatch('auth/login', this.loginData)
          .then(() => {
            this.$router.push({ name: 'Products' })
            // .catch((pushError) => {
            //   throw new Error(`Problem handling something: ${pushError}.`)
            // })
           // this.$store.dispatch('auth/getUser')
          })
          .catch((error) => {
            //this.password = ''
           // showSnackBar(this, 'Unable to login. Please check your credentials.', 'error')
           console.log('error', error)
            this.$refs.passwordInput.focus()
          })
      },
      magicLogin () {
        console.log('env', process.env.MIX_VUE_APP_USERNAME)
        this.email = process.env.MIX_VUE_APP_USERNAME
        this.password = process.env.MIX_VUE_APP_PW
        this.login()
      },
      //...mapActions('snackbars', ['destroyFlashMessage']),
    },
}
</script>

<style></style>