<template>
  <div class="bg-gray-200 flex flex-col">
    <!-- Container -->

    <div class="container mt-20">
      <div class="grid grid-cols-3 gap-20">
        <v-card
          hover
          class="grid border-solid p-12 border-2 border-yellow-300 rounded-xl"
        >
          <v-img
            class="bg-yellow-200 rounded-xl"
            src="trophy-outline.svg"
          ></v-img>
          <p
            class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose text-center"
          >
            Create interactable events
          </p>
        </v-card>
        <v-card
          hover
          class="grid border-solid p-12 border-2 border-blue-300 rounded-xl"
        >
          <v-img class="bg-blue-300 rounded-xl" src="account-group.svg"></v-img>
          <p
            class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose text-center"
          >
            Interact with people
          </p>
        </v-card>
        <v-card
          hover
          class="grid border-solid p-12 border-2 border-blue-300 rounded-xl"
        >
          <v-img
            class="bg-green-200 rounded-xl"
            src="coffee-outline.svg"
          ></v-img>
          <p
            class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose text-center"
          >
            Easy to use
          </p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImage",
};
</script>
