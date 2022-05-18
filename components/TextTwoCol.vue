<template>
  <div class="bg-gray-200 flex flex-col">
    <!-- Container -->

    <div class="container mt-20 grid sm:grid-cols-2 gap-20">
      <div class="bg-white p-12 rounded-lg">
        <p
          class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose"
        >
          This web application is used for making new events. You can create
          your own event and add appropriate description of the event.
        </p>
      </div>
      <div class="bg-white p-12 rounded-lg">
        <p
          class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose"
        >
          Furthermore, you are filling the form of event details. As a user you
          have ability to see all created events and join them.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImage",
};
</script>
