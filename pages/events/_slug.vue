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
      <!-- <p>Number of users: 55</p> -->
      <p>Author name: Johntra Wolta</p>
      <v-btn> Join </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "bok",
    };
  },
  async asyncData({ $axios }) {
    const event = await $axios.get("/event", {
      params: {
        id: this.$route.params.id,
      },
    });

    /* const author = await $axios.get("/user", {
      params: {
        id: event.data.authorId,
      },
    }); */
    return { event: event.data };
  },
};
</script>

<style></style>
