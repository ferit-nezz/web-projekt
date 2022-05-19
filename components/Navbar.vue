<template>
  <div class="bg-black text-white h-16">
    <div class="w-full h-full flex justify-between items-center px-4">
      <nuxt-link v-if="!token" to="/">
        <p
          class="text-5xl text-white"
          style="margin-bottom: 0px !important; font-family: billabong"
        >
          Eventy
        </p></nuxt-link
      >

      <p
        v-else
        class="text-5xl text-white"
        style="margin-bottom: 0px !important; font-family: billabong"
      >
        Eventy
      </p>

      <div class="grid grid-cols-5 gap-8">
        <v-btn v-if="token" plain color="white" to="/my-events">
          My events
        </v-btn>
        <div v-else />
        <v-btn v-if="token" plain color="white" to="/joined-events">
          Joined events
        </v-btn>
        <div v-else />
        <v-btn plain color="white" to="/all-events"> All events </v-btn>
        <v-btn plain color="white" to="/about"> About </v-btn>
        <v-btn v-if="!token" depressed to="/auth/signin"> Log in </v-btn>
        <v-btn v-else depressed @click="logOut"> Log out </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      token: (state) => state.user.token,
    }),
  },
  methods: {
    logOut() {
      this.$store.commit("user/clear");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
