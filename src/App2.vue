<template>
  <div class="container">
    <p>{{ text }}</p>
    <div class="d-flex">
      <p class="mx-2">J'ai {{ age }} ans</p>
      <button class="mx-2" @click="age++">Anniversaire</button>
    </div>
    <p>
      Je suis : {{ gender }}
    </p>
    <div class="d-flex">
      <button class="btn btn-primary" @click="updateSex('male')">Un homme</button>
      <button class="btn btn-primary" @click="updateSex('female')">Une femme</button>
      <button class="btn btn-primary" @click="updateSex('other')">Autres</button>
    </div>
    <div class="row mt-3">
      <div class="form-group">
        <label for="message">Message : </label>
        <input v-model="message" class="form-control" type="text">
        <p class="mt-2">Je dis : {{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello World",
      age: 27,
      pets: ['Irion', 'Spooky'],
      sex: null,
      message: 'bonjour',
    };
  },
  methods: {
    updateSex(gender) {
      this.sex = gender;
    },
  },
  computed: {
    gender() {
      if (this.sex === 'male') {
        this.message = "bonjour monsieur"
        return 'un homme';
      } else if (this.sex === 'female') {
        this.message = "bonjour madame";
        return 'une femme';
      }
      this.message = "bonjour ";
      return 'autre';
    }
  }
}
</script>

<style>
.d-flex {
  display: flex;
}

.mx-2 {
  margin: auto 2em;
}
</style>