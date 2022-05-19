<template>
  <div>
    <EventGrid :events="events" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    const events = await $axios.get("/event/my", {
      userId: store.state.user.user.id,
    });
    return { events: events.data };
  },
};
</script>

<style></style>
