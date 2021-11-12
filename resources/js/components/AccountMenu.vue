<template>
  <v-menu
    bottom
    left
    min-width="200"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="mx-1"
        min-width="0"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </template>

    <v-list
      :tile="false"
      flat
      nav
    >
        <v-list-item>
           <v-icon class="mr-2">mdi-account-tie-outline</v-icon>
          <v-list-item-title >
              Store Admin
          </v-list-item-title>
        </v-list-item>

        <v-divider
          v-show="$store.getters['auth/isAuthenticated']"
          class="mb-2 mt-2"
        />

        <v-list-item
            v-show="$store.getters['auth/isAuthenticated']"
            :to="{ name: 'Products' }"
        >
          <v-icon class="mr-2">mdi-barcode</v-icon>
          <v-list-item-title >
              Products
          </v-list-item-title>
        </v-list-item>
         <v-list-item
            v-show="$store.getters['auth/isAuthenticated']"
            :to="{ name: 'Home' }"
        >
           <v-icon class="mr-2">mdi-collapse-all-outline</v-icon>
          <v-list-item-title >
              Categories
          </v-list-item-title>
        </v-list-item>

        <v-divider
          class="mb-2 mt-2"
        />

        <v-list-item
            v-show="!$store.getters['auth/isAuthenticated']"
            :to="{ name: 'Login' }"
        >
           <v-icon class="mr-2">mdi-login</v-icon>
          <v-list-item-title >
              Login
          </v-list-item-title>
        </v-list-item>
         <v-list-item
            v-show="$store.getters['auth/isAuthenticated']"
            @click="logout"
        >
           <v-icon class="mr-2">mdi-logout</v-icon>
          <v-list-item-title >
              Logout
          </v-list-item-title>
        </v-list-item>

      <!-- <template v-for="(p, i) in profile">
        <v-divider
          v-if="p.divider"
          :key="`divider-${i}`"
          class="mb-2 mt-2"
        />

        <v-list-item
          v-else
          v-show="$store.getters['auth/isAuthenticated']"
          :key="`item-${i}`"
          :to="p.to"
        >
          <v-list-item-title v-text="p.title" />
        </v-list-item>
      </template> -->
    </v-list>
  </v-menu>
</template>

<script>

  import store from '../store'

  export default {
    name: 'AccountMenu',

    data: () => ({
      profile: [
        {
          title: 'Store Admin',
          show: true
          //to: '/users/edit/', // + get('auth/userID'),
        },
        // { title: 'Settings', to: '/' },
        { divider: true },
        {
          title: 'Login',
          to: '/Login',
         // show: false
        },
        {
          title: 'Logout',
          to: '/Logout',
          show: store.getters['auth/isAuthenticated']
        },
      ],
    }),
    created () {
        console.log('user auth:', store.getters['auth/isAuthenticated'])
        // this.profile[2].show = !this.$store.getters['auth/isAuthenticated']
        // this.profile[3].show = this.$store.getters['auth/isAuthenticated']
    },
    methods: {
        logout () {
            this.$store.dispatch('auth/clearToken')
            this.$router.push({ name: 'Home' })
            // .then(() => {
            //     this.$router.push({ name: 'Home' })
            // })
            // .catch((error) => {
            // console.log(error)
            // })
        },
    }
  }
</script>
