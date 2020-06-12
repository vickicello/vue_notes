<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template slot="lead">
        {{ currentQuestion.question }}
      </template>

      <hr class="my-4">
      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in answers"
          :key="index"
          @click.prevent="selectedAnswer(index)"
          :class="[selectedIndex === index ? 'selected' : '']"
        > <!--all v-for loops need key attributes to be able to access element in DOM -->
          {{ answer }}
        </b-list-group-item>
      </b-list-group>

    <b-button variant="primary" href="#">Submit</b-button>
    <b-button @click="next" variant="success" href="#">
      Next Question
    </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    currentQuestion: Object,
    next: Function
  },
  data: function() {
    return {
      selectedIndex: null,
      shuffledAnswers: []
    }
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers] // make a copy of the array
      answers.push(this.currentQuestion.correct_answer) // combine correct + incorrect answers
      return answers
    }
    // anytime we want to access a var in a prop or methods, we need to prepend with this.____
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null
        this.shuffleAnswers()
      }
    }
  },
  methods: {
    selectedAnswer(index) {
      this.selectedIndex = index
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers)
    }
  }
  //mounted() {
    //this.shuffleAnswers() // shuffle answers on first component mount; or we can add handler like on line 53
  //}
}

</script>
// any data we pass from the questionbox component to app component
// needs to be referenced in props

<style scoped>
  .list-group {
    margin-bottom: 15px;
  }
  .list-group-item:hover {
    background: #EEE;
    cursor: pointer;
  }
  .btn {
    margin: 0 5px;
  }
  .selected {
    background-color: lightblue;
  }
  .correct {
    background-color: lightgreen;
  }
  .incorrect {
    background-color: rgb(253, 86, 86); 
  }
</style>
<!-- scoped = this only affects styling in this component -->
