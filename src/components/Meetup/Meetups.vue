<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 lg6 v-for="meetup in meetups" :key="meetup.id" class="mx-auto my-2">
        <v-card class="accent">
          <!-- <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm3 md3 lg1>

                            </v-flex>
                        </v-layout>
          </v-container>-->
          <v-img :src="meetup.imageUrl" height="175px"></v-img>
  
          <v-card-title>{{meetup.title}}</v-card-title>

          <v-card-subtitle>
            <v-icon right>mdi-calendar-range</v-icon>
            {{ meetup.date }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>
              <v-icon left>mdi-share-variant-outline</v-icon>Share
            </v-btn>

            <v-btn color="purple" text :to="'/meetups/' + meetup.id">
              <v-icon left>mdi-card-search-outline</v-icon>View
              Meetup
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>
                {{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}
              </v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.carousel {
  max-width: 100%;
  padding: 0 5%;
  margin: 0 auto;
}

/* @media only screen and (min-width: 1900px) {
  .carousel {
    max-width: 80%;
  }
} */
</style>

<script>
export default {
  data: () => ({
    show: false,
  }),
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups
    },
  },
};
</script>
