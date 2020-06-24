<template>
  <div>
    <nav>
      <v-app-bar text id="navbar">
        <v-app-bar-nav-icon
          class="grey--text"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-bold">Dashboard</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :to="link.route"
            >
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text depressed>
          <span>Sign Out</span>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" dark temporary id="sidebar">
        <v-layout column align-center class="py-n12">
          <v-flex class="mt-5">
            <v-avatar size="48">
              <v-img
                src="https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-1.png"
              />
            </v-avatar>
            <p class="white--text subheading mt-2">@Skyy</p>
          </v-flex>
        </v-layout>
        <v-list>
          <v-list-item
            v-for="link in links"
            v-bind:key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <v-row
        column
        align-center
        class="py-n12"
        :align="alignment"
        :justify="justify"
      >
        <div class="neu-container">Hello</div>
      </v-row>
    </v-content>
    <!---Main Content -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      loadData: [],
      drawer: false,
    };
  },
  mounted() {
    console.log('App loaded');
    this.fetchData();
  },
  methods: {
    async fetchData() {},
  },
};
</script>

<style lang="scss">
nav {
  max-height: 64px;
}
#navbar {
  // background: #dee8f2;
  background: inherit;
  box-shadow: none;
}
#sidebar {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: #0c1a26;
  // background: inherit;
  // border-right: 1px solid #bcd5ea;
  box-shadow: none;
  min-height: calc(100vh - 64px);
  color: #dee8f2;
  font-weight: bold;
}

.neu-container {
  min-height: 250px;
  min-width: 250px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 4px 4px 12px #bcd5ea, -4px -4px 12px white;
  margin: 0 auto;
  font-size: 2em;
  color: #5492c9;
}
</style>
