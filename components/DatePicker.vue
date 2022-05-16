<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Event date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      :active-picker.sync="activePicker"
      min="1950-01-01"
      @change="save"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      activePicker: null,
      date: null,
      menu: false,
    };
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>

<style></style>
