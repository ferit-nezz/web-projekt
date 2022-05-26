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
                    <DatePicker @input="(e) => (date = e)" />
                    <TimePicker @input="(e) => (time = e)" />
                    <v-select
                      :items="items"
                      v-model="type"
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
import { mapState } from "vuex";
export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  layout: "auth",
  data: () => ({
    description: "",
    title: "",
    time: "Default",
    date: "Default",
    type: "Default",
    items: ["Sport", "Party", "Musical", "Trade Show", "Conference"],
    location: "",
  }),

  computed: {
    ...mapState({
      user: (state) => state.user.user,
      token: (state) => state.user.token,
    }),
  },

  methods: {
    async submit() {
      this.$refs.observer.validate();

      const req = {
        title: this.title,
        description: this.description,
        location: this.location,
        type: this.type,
        date: this.date,
        time: this.time,
        userId: this.user.id,
      };

      const res = await this.$axios.post("/event/create", req, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      this.$router.push("/all-events");
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
