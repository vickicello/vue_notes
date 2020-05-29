<template>
  <div id="app">
    <Header />
    <b-container class="bv-example-row"> <!-- container auto-centers and gives some padding -->
      <b-row>
        <b-col sm="6" offset="3"> <!-- on a small screen, take up half the page -->
          <QuestionBox />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  }
  // we need to add components here to be able to access them in the template section above
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- for each Component you make, you'll include the template code (html) 
     and the script code (JS that interacts with that HTML)
     Components are all bundled in the main.js file -->