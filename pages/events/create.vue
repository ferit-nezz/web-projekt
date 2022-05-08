<template>
  <div>
    <div class="mt-8 w-1/2 lg:w-2/5 mx-auto">
      <nuxt-link to="/">Return to homepage</nuxt-link>
    </div>
    <div class="lg:w-2/5 mx-auto">
      <div class="flex justify-center my-12">
        <!-- Row -->
        <div class="flex rounded-lg">
          <!-- Col -->
          <div
            class="
              lg:w-7/12
              bg-white
              p-5
              rounded-lg
              flex flex-col
              items-center
              justify-center
            "
          >
            <h3 class="pt-4 text-4xl text-center font-bold">CREATE AN EVENT</h3>
            <div class="container mx-auto">
              <div class="grid m-4 gap-8">
                <ValidationObserver ref="observer" v-slot="{ invalid }">
                  <form @submit.prevent="submit">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="title"
                      rules="required"
                    >
                      <v-text-field
                        v-model="title"
                        :error-messages="errors"
                        label="Title"
                        outlined
                        required
                      ></v-text-field>
                    </ValidationProvider>

                    <ValidationProvider
                      v-slot="{ errors }"
                      name="description"
                      rules="required"
                    >
                      <v-textarea
                        v-model="description"
                        :error-messages="errors"
                        label="Description"
                        outlined
                        required
                      ></v-textarea>
                    </ValidationProvider>
                    <DatePicker />
                    <TimePicker />
                    <v-select
                      :items="items"
                      label="Event type"
                      outlined
                    ></v-select>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="location"
                      rules="required"
                    >
                      <v-text-field
                        v-model="location"
                        :error-messages="errors"
                        label="Location"
                        outlined
                        required
                      ></v-text-field>
                    </ValidationProvider>

                    <div class="mt-8">
                      <v-btn class="mr-4" type="submit" :disabled="invalid">
                        submit
                      </v-btn>
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
    description: "",
    title: "",
    password: "",
    email: "",
    select: null,
    items: ["Sport", "Party", "Musical", "Trade Shows", "Conferences"],
    checkbox: null,
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    location: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
};
</script>

<style></style>
