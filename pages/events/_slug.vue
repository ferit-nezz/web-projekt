<template>
  <div class="container">
    <div class="relative flex items-center h-64">
      <v-img
        class="absolute z-10 h-64"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      ></v-img>
      <p v-if="event.title" class="z-20 ml-12 absolute text-white text-5xl">
        {{ event.title }}
      </p>
    </div>
    <div class="px-24 my-12 grid gap-4">
      <p v-if="event.description">
        {{ event.description }}
      </p>
      <p v-if="event.date">Event date: {{ event.date }}.</p>
      <p v-if="event.time">Event time: {{ event.time }}.</p>
      <p v-if="event.location">Location: {{ event.location }}</p>
      <p v-if="author">Organizer: {{ author.username }}</p>
      <v-btn v-if="token" @click="joinEvent"> Join </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SingleEvent",
  data() {
    return {
      title: "bok",
    };
  },
  async asyncData({ $axios, params }) {
    const event = await $axios.get(`event/${params.slug}`);

    const author = await $axios.get(`user/${event.data.id}`);
    return { event: event.data, author: author.data };
  },

  computed: {
    ...mapState({
      user: (state) => state.user.user,
      token: (state) => state.user.token,
    }),
  },

  methods: {
    async joinEvent() {
      const res = await this.$axios.post(
        "event/join",
        {
          userId: this.user.id,
          eventId: this.event.id,
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      console.log(res);
    },
  },
};
</script>

<style></style>
