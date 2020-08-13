<template>
  <v-app>
    <!-- hamburger menu -->
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mdi-account-supervisor-circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>View MeetUps</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- add gd= dark, add some more space in toolbar =  prominent -->
    <v-toolbar dark class="white" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <!-- if does't word add @click.native.stop -->
      <v-app-bar-nav-icon class="d-sm-none" @click="sideNav= !sideNav"></v-app-bar-nav-icon>

      <v-toolbar-titlegrey class="font-italic">MeetUps</v-toolbar-titlegrey>
      <v-spacer></v-spacer>
      <v-toolbar-item class="d-none d-sm-flex">
        <v-btn flat class="rounded-pill">
          <v-icon left>mdi-account-supervisor</v-icon>View Meetups
        </v-btn>
      </v-toolbar-item>

      <!-- <v-btn icon>
        <v-icon>mdi-log-in</v-icon>
      </v-btn> -->
    </v-toolbar>

    <main></main>
  </v-app>
</template>

<script>
export default {
  // name: 'App',

  components: {},

  data: () => ({
    //
    sideNav: false,
  }),
};
</script>
