<template>
  <div class="bg-black text-white h-16">
    <div class="w-full h-full flex justify-between items-center px-4">
      <nuxt-link to="/">
        <p class="text-3xl text-white" style="margin-bottom: 0px !important">
          Eventy
        </p></nuxt-link
      >

      <div class="grid grid-cols-3 gap-8">
        <v-btn plain color="white" to="/events"> Events </v-btn>
        <v-btn plain color="white" to="/about"> About </v-btn>
        <v-btn depressed to="/auth/signin"> Log in </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
