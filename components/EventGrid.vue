<template>
  <div class="bg-gray-200 flex justify-center py-8">
    <div v-if="events" class="max-w-6xl grid lg:grid-cols-2 gap-8">
      <v-card
        v-for="(event, index) in events"
        :key="index"
        class="mx-auto"
        max-width="500"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title> {{ event.title }} </v-card-title>

        <v-card-subtitle> {{ event.description }} </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text nuxt :to="`events/${event.id}`">
            Explore
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </div>
    <div v-else>No events to show..</div>
  </div>
</template>

<script>
export default {
  props: {
    events: Array,
    default: () => [],
  },
};
</script>

<style></style>
