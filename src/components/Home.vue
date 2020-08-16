<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-center mt-2">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <!-- text-center mt-2 -->
      <v-flex xs12 sm6 class="text-center mt-2 mb-3">
        <v-btn large router to="/meetup/new" class="green">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="carousel">
        <v-carousel style="cursor:pointer;">
          <v-carousel-item
            v-for="(meetup) in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-center mt-2">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl: "https://www.we-love-crete.com/images/sitia-crete-dusk.jpg",
          id: "afafa1234",
          title: "Meetup in Crete",
        },
        {
          imageUrl:
            "https://mastermehmed.com/wp-content/uploads/2020/02/paris-shutterstock-1400x500.jpg",
          id: "afafa5678",
          title: "Meetup in Paris",
        },
      ],
    };
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    },
  },
};
</script>

<!-- with scoped applied only in this component -->
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 2rem;
  padding: 0.75rem;
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  text-shadow: 2px 2px 4px #000;
}

.carousel {
  max-width: 100%;
  padding: 0 5%;
  margin: 0 auto;
}

@media only screen and (min-width: 1900px) {
  .carousel {
    max-width: 80%;
  }
}
</style>