<template>
  <div class="bg-gray-200 h-screen flex items-center">
    <!-- Container -->
    <div class="container">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="
              background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
            "
          ></div>
          <!-- Col -->
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-r-lg">
            <h3 class="pt-4 text-2xl text-center">Login!</h3>
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
                        :counter="7"
                        :error-messages="errors"
                        label="Password"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                    <div class="mt-8">
                      <v-btn class="mr-4" type="submit" :disabled="invalid">
                        submit
                      </v-btn>
                      <v-btn @click="clear"> clear </v-btn>
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
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.password = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style></style>
