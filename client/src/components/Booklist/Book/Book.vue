<template>
  <v-card max-width="322" class="mx-auto mt-6" id="id">
    <v-list-item>
      <v-list-item-content>
        <v-row no-gutters class="flex-nowrap">
          <v-row no-gutters class="flex-wrap">
            <v-list-item-title class="headline">
              {{ title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ author }}</v-list-item-subtitle>
          </v-row>
          <v-btn icon>
            <v-icon @click="deleteBook(id)">mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="144"
    ></v-img>

    <v-card-text>{{ desc.slice(0, 50) + '...' }}</v-card-text>

    <v-card-actions>
      <v-btn text color="green darken-4">Read</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['id', 'author', 'desc', 'title'],
  methods: {
    deleteBook(id) {
      this.$emit('deleteBook', id);
    },
  },
};
</script>

<style></style>
