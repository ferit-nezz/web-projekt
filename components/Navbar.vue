<template>
  <div>
    <div class="bg-black text-white h-16 hidden md:block">
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

    <div class="md:hidden">
      <v-app-bar class="bg-black text-white h-16" dark color="black">
        <p
          class="text-5xl text-white"
          style="margin-bottom: 0px !important; font-family: billabong"
        >
          Eventy
        </p>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="font-family: billabong"
              >Eventy</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-if="token" plain color="white" to="/my-events">
              <v-list-item-title>My Events</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="token" plain color="white" to="/joined-events">
              <v-list-item-title>Joined events</v-list-item-title>
            </v-list-item>

            <v-list-item plain color="white" to="/all-events">
              <v-list-item-title>All Events</v-list-item-title>
            </v-list-item>

            <v-list-item plain color="white" to="/about">
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>

            <v-list-item v-if="!token" depressed to="/auth/signin">
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>

            <v-list-item v-else depressed @click="logOut">
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
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
