<template>
  <div>
    <NewEvent v-if="token" />
    <EventGrid :events="events" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async asyncData({ $axios }) {
    const events = await $axios.get("/event", {});
    return { events: events.data };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
    }),
  },
};
</script>

<style></style>
