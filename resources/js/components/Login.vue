<template>
  <v-card
    width="500"
    class="mx-auto mt-5 pa-10"
    outlined
    shaped
  >
    <v-card-title>
      <h1 class="display-1">
        Login
      </h1>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          prepend-icon="mdi-email-outline"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock-outline"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
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
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			showPassword: false
		}
	}
}
</script>

<style></style>