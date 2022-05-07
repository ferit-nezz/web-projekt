<template>
  <div class="flex flex-col" :class="type == 'container' ? 'bg-gray-200' : ''">
    <!-- Container -->
    <div
      class="flex justify-center mt-20"
      :class="type == 'container' ? 'container' : ''"
    >
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex rounded-lg">
        <!-- Col -->
        <div
          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          style="
            height: 300px;
            background-repeat: no-repeat;
            background-position: center;
          "
          :style="
            imageUrl
              ? `background-image: url('${imageUrl}');`
              : `background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');`
          "
        ></div>
        <!-- Col -->
        <div
          class="flex flex-col justify-center items-center lg:w-7/12 bg-white p-5 rounded-r-lg"
        >
          <p class="mt-6 sm:mt-8 text-2xl font-bold text-text prose">
            {{ title }}
          </p>
          <p
            class="mt-6 sm:mt-8 font-pangram-regular ptext-small text-text prose"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImage",
  props: {
    title: String,
    text: String,
    type: {
      type: String,
      default: "container",
    },
    imageUrl: String,
  },
};
</script>
