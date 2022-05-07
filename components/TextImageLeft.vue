<template>
  <div class="bg-gray-200 flex flex-col">
    <!-- Container -->
    <div class="container flex justify-center mt-20">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg">
        <!-- Col -->
        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          style="
            height: 300px;
            background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
          "
        ></div>
        <!-- Col -->
        <div
          class="flex justify-center items-center lg:w-7/12 bg-white p-5 rounded-r-lg"
        >
          <p
            class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose"
          >
            Preview events and see details about them.
          </p>
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
