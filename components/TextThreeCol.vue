<template>
  <div class="bg-gray-200 flex flex-col">
    <!-- Container -->

    <div class="container">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg">
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-l-lg">
            <v-card
              hover
              class="grid border-solid border-2 border-yellow-300 rounded-xl"
            >
              <v-img
                class="bg-yellow-200 rounded-xl"
                src="trophy-outline.svg"
              ></v-img>
              <p
                class="
                  mt-6
                  sm:mt-8
                  font-pangram-regular
                  ptext-small
                  text-text
                  prose
                  text-center
                "
              >
                The best app for making events
              </p>
            </v-card>
          </div>
          <div class="w-full lg:w-7/12 bg-white p-5">
            <v-card
              hover
              class="grid border-solid border-2 border-blue-300 rounded-xl"
            >
              <v-img
                class="bg-blue-300 rounded-xl"
                src="account-group.svg"
              ></v-img>
              <p
                class="
                  mt-6
                  sm:mt-8
                  font-pangram-regular
                  ptext-small
                  text-text
                  prose
                  text-center
                "
              >
                Interact with people
              </p>
            </v-card>
          </div>
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-r-lg">
            <v-card
              hover
              class="grid border-solid border-2 border-blue-300 rounded-xl"
            >
              <v-img
                class="bg-green-200 rounded-xl"
                src="coffee-outline.svg"
              ></v-img>
              <p
                class="
                  mt-6
                  sm:mt-8
                  font-pangram-regular
                  ptext-small
                  text-text
                  prose
                  text-center
                "
              >
                Easy to use
              </p>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImage",
};
</script>
