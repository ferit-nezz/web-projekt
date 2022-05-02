<template>
  <div
    class="relative flex items-center justify-center"
    :class="{ 'h-96': variant == 'main', 'h-64': variant == 'small' }"
  >
    <v-img
      class="absolute z-10"
      :class="{ 'h-96': variant == 'main', 'h-64': variant == 'small' }"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    ></v-img>
    <p class="z-20 absolute text-white text-3xl">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    variant: {
      type: String,
      default: "main",
    },
  },
};
</script>

<style></style>
