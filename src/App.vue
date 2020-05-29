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
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
      method: 'get'
    })
      .then(response => {
        console.log(response.json())
      })
  }
  // we need to add components here to be able to access them in the template section above
  // fetch api = web standard; doesn't need a library to be imported
  // mounted is a lifecycle method that Vue will call automatically when a component is mounted,
  // and then won't get called again
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