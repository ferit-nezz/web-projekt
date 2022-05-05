<template>
  <div class="bg-gray-200 flex flex-col">
    <!-- Container -->

    <div class="container">
      <div class="flex justify-center px-6 my-12">
        <div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg">
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-l-lg">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
              <p
                class="
                  mt-6
                  sm:mt-8
                  font-pangram-regular
                  ptext-small
                  text-text
                  prose
                "
              >
                This web application is used for making new events. You can
                create your own event and add appropriate description of the
                event.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-r-lg">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
              <p
                class="
                  mt-6
                  sm:mt-8
                  font-pangram-regular
                  ptext-small
                  text-text
                  prose
                "
              >
                Furthermore, you are filling the form of event details. As a
                user you have ability to see all created events and join them.
              </p>
            </div>
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
