<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="book in books" v-bind:key="book.id">
        <book
          v-bind:id="book.id"
          v-bind:title="book.title"
          v-bind:author="book.author"
          v-bind:desc="book.description"
          @deleteBook="deleteBook($event)"
        >
        </book>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import Book from './Book/Book.vue';

export default {
  components: { Book },
  data() {
    return {
      books: [],
    };
  },
  computed: {},
  methods: {
    deleteBook(id) {
      const filteredBooks = this.books.filter(book => book.id !== id);
      this.books = filteredBooks;
    },
  },
  mounted: async function() {
    try {
      const books = await axios.get('http://localhost:3000/api/books');
      this.books = books.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
