<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="carousel">
        <v-card class="bg-gray">
          <v-card-title>
            <h5 class="primary--text">la{{console.log(meetup)}}</h5>
          </v-card-title>
          <v-img src="https://www.we-love-crete.com/images/sitia-crete-dusk.jpg" height="400px"></v-img>
        
          <v-text>
            <div>
              <v-card-subtitle>
                <v-icon right>mdi-calendar-range</v-icon>15th July 2021 - Where
                it takes place
              </v-card-subtitle>
            </div>
            <div class="mx-6 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est
              voluptatibus optio commodi, corporis voluptas dolor necessitatibus
              accusantium, quod dolores, corrupti ullam. Molestiae ullam sed
              quae nobis hic optio qui.
            </div>
          </v-text>
          <v-card-action>

            
            <div class="btn-right">
              <!-- gia na paei sthn antitheti meria -->
              <div>
                <!-- push the register -->
              </div>
              <v-btn class="mx-10 my-3 green white--text">
                <v-icon left>mdi-pencil</v-icon>Register
              </v-btn>
            </div>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.btn-right {
  display: flex;
  justify-content: space-between;
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

.bg-gray {
  background-color: #f3f3f3;
}
</style>


<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
          return this.$store.loadedMeetup('id')
      }
    }
  }
</script>