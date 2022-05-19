<template>
  <div>
    <EventGrid :events="events" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    console.log(store.state.user.token);
    const events = await $axios.get("/event/joined", {
      userId: store.state.user.user.id,
    });
    return { events: events.data };
  },
};
</script>

<style></style>
