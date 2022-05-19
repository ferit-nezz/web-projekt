<template>
  <div class="bg-gray-200 h-screen flex flex-col items-center">
    <!-- Container -->
    <div class="mt-8 w-2/5 mx-auto">
      <nuxt-link to="/">Return to homepage</nuxt-link>
    </div>
    <div class="md:w-2/5 mx-auto">
      <div class="flex justify-center my-12">
        <!-- Row -->
        <div class="flex rounded-lg">
          <!-- Col -->
          <div
            class="lg:w-7/12 bg-white p-5 rounded-lg flex flex-col items-center justify-center"
          >
            <h3 class="pt-4 text-4xl text-center font-bold">LOGIN TO EVENTY</h3>
            <div class="container mx-auto">
              <div class="grid m-4">
                <ValidationObserver ref="observer" v-slot="{ invalid }">
                  <form @submit.prevent="submit">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="email"
                      rules="required|email"
                    >
                      <v-text-field
                        v-model="email"
                        :error-messages="errors"
                        label="E-mail"
                        outlined
                        required
                      ></v-text-field>
                    </ValidationProvider>

                    <ValidationProvider
                      v-slot="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        label="Password"
                        type="password"
                        outlined
                        required
                      ></v-text-field>
                    </ValidationProvider>
                    <div class="mt-8">
                      <v-btn class="mr-4" type="submit" :disabled="invalid">
                        submit
                      </v-btn>
                    </div>
                    <div class="mt-8">
                      <nuxt-link to="/auth/signup"
                        >Not a user? Signup</nuxt-link
                      >
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  layout: "auth",
  data: () => ({
    name: "",
    password: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    async submit() {
      this.$refs.observer.validate();

      const res = await this.$axios.post("/auth/signin", {
        email: this.email,
        password: this.password,
      });

      this.$store.commit("user/addUser", res.data.user);
      this.$store.commit("user/addToken", res.data.token.access_token);

      if (res.data.token) {
        this.$router.push("/events");
      }
    },
  },
};
</script>

<style></style>
