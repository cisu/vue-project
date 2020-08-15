<template>
  <v-app>
    <!-- hamburger menu -->
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list
        style="display: flex; flex-direction: column; text-align:left; justify-content:center; margin: 1rem;"
      >
        <v-list-tile style="padding:1rem;" v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-btn class="rounded-pill" style="width:100%" router :to="item.link">
              <!-- <v-icon>mdi-account-supervisor-circle</v-icon> -->
              <v-icon left>{{ item.icon }}</v-icon>
              <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!--  -->
    <v-toolbar
      style="max-height: 56px;"
      dark
      class="secondary"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <!-- if does't word add @click.native.stop -->
      <v-app-bar-nav-icon class="d-sm-none" @click="sideNav = !sideNav"></v-app-bar-nav-icon>

      <v-toolbar-titlegrey class="font-italic pl-2">
        <router-link to="/" tag="span" style="cursor:pointer;">MeetUps</router-link>
      </v-toolbar-titlegrey>
      <v-spacer></v-spacer>
      <v-toolbar-item class="d-none d-sm-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          flat
          class="rounded-pill mr-3"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-item>

      <!-- <v-btn icon>
        <v-icon>mdi-log-in</v-icon>
      </v-btn>-->
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  // name: 'App',

  components: {},

  data: () => ({
    //
    sideNav: false,
    menuItems: [
      {
        icon: "mdi-account-supervisor",
        title: "View Meetups",
        link: "/meetups",
      },
      {
        icon: "mdi-google-classroom",
        title: "Organize Meetup",
        link: "/meetup/new",
      },
      {
        icon: "mdi-account-circle-outline",
        title: "Profile",
        link: "/profile",
      },
      {
        icon: "mdi-clipboard-account-outline",
        title: "Sign up",
        link: "/signup",
      },
      {
        icon: "mdi-lock-open-variant-outline",
        title: "Sign in",
        link: "/signin",
      },
    ],
  }),
};
</script>
