<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-slot:lead>
        Our question will go here
      </template>

      <hr class="my-4">

      <p>
        List of possible answers will go here
      </p>

    <b-button variant="primary" href="#">Submit</b-button>
    <b-button variant="success" href="#">Next Question</b-button>
    </b-jumbotron>
  </div>
</template>
