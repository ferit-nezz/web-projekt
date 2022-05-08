<template>
  <div>
    <NewEvent />
    <EventGrid :events="events" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const events = await $axios.get("/event", {});
    return { events: events.data };
  },
};
</script>

<style></style>
