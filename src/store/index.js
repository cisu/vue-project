import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.we-love-crete.com/images/sitia-crete-dusk.jpg',
        id: 'afafa1234',
        title: 'Meetup in Crete',
        date: '2021-07-17',
      },
      {
        imageUrl:
          'https://mastermehmed.com/wp-content/uploads/2020/02/paris-shutterstock-1400x500.jpg',
        id: 'afafa5678',
        title: 'Meetup in Paris',
        date: '2021-07-19',
      },
    ],
    user: {
      id: 'sadasdas',
      registeredMeetups: ['afafa5678'],
    },
  },
  mutations: {},
  actions: {},
  getters: {
    featureMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
  },
  loadedMeetup(state) {
    return meetupId => {
      return state.loadedMeetups.find(meetup => {
        return meetup.id === meetupId;
      });
    };
  },

});
