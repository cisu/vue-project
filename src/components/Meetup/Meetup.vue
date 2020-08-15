<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h5 class="primary--text">My Meetup</h5>
          </v-card-title>
          <v-img src="https://www.we-love-crete.com/images/sitia-crete-dusk.jpg" height="400px"></v-img>
          <v-text>
            <div>
              <v-card-subtitle>
                <v-icon right>mdi-calendar-range</v-icon>15th July 2021 - Where it takes place
              </v-card-subtitle>
            </div>
            <div
              class="mx-6 pb-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est voluptatibus optio commodi, corporis voluptas dolor necessitatibus accusantium, quod dolores, corrupti ullam. Molestiae ullam sed quae nobis hic optio qui.</div>
          </v-text>
          <v-card-action>
            <div class="btn-right">
              <v-btn >
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
}
</style>