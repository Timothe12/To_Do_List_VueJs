<template>

  <div class="headerCenter">
  <div class="card-body">
    <div class="form-group">
      <label class="form-label" for="name">Titre</label>
      <input v-model="newTask.name" class="form-control" type="text" id="name">
    </div>
    <div class="form-group">
      <label class="form-label" for="desc">Description</label>
      <textarea v-model="newTask.description" class="form-control" type="text" id="desc"></textarea>
    </div>
    <div class="form-group">
      <label class="form-label" for="type">Type</label>
      <select v-model="newTask.type" class="form-control" id="type">
        <option value="" disabled>Choisissez votre catégorie</option>
        <option value="priority">Tâche prioritaire</option>
        <option value="evenement">Évènement</option>é
        <option value="realise">Tâche à réaliser</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label" for="date">Dâte</label>
      <input v-model="newTask.date" type="date" id="birthday" name="date">
    </div>
    <div class="d-flex justify-content-end mt-3">
      <button v-if="!isEdition" class="btn btn-light" @click="createTask()">+ Ajouter votre nouvelle tache</button>
      <button v-else class="btn btn-light" @click="cancelEditing()">Sauvegarder</button>
    </div>
  </div>
  </div>

  <div class="centered-div">
  <div class="row">
    <div class="col-4">
      <div class="d-flex flex-column align-items-center">
        <div class="card mb-3 ombre" style="width: 28rem;">
          <div class="card-body">
            <div class="card-title">
              <h3 class="text-center"><i class="fa-solid fa-circle-exclamation"></i><br>Tâche prioritaire</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div v-for="priority in priorities" class="card mb-3 cardBorder" style="width: 28rem;">
          <div class="card-body cardWhite">
            <h5 class="card-title">{{ priority.name }}</h5>
            <p class="card-text">{{ priority.description }}</p>
            <p class="card-text">{{ formatDate(priority.date) }}</p>
            <div class="d-flex justify-content-end">
              <button @click="update(priority.index)" class="btn btn-warning me-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger" @click="deleteTask(priority.index)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="d-flex flex-column align-items-center">
        <div class="card mb-3 ombre" style="width: 28rem;">
          <div class="card-body">
            <div class="card-title">
              <h3 class="text-center"><i class="fa-regular fa-calendar-check"></i><br>Évènement</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div v-for="evenement in evenements" class="card mb-3 cardBorder" style="width: 28rem;">
          <div class="card-body cardWhite">
            <h5 class="card-title">{{ evenement.name }}</h5>
            <p class="card-text">{{ evenement.description }}</p>
            <p class="card-text">{{ formatDate(evenement.date) }}</p>
            <div class="d-flex justify-content-end">
              <button @click="update(evenement.index)" class="btn btn-warning me-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger" @click="deleteTask(evenement.index)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="d-flex flex-column align-items-center">
        <div class="card mb-3 ombre" style="width: 28rem;">
          <div class="card-body">
            <div class="card-title">
              <h3 class="text-center"><i class="fa-solid fa-circle-check"></i><br>Tâche à réaliser</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div v-for="realise in realises" class="card mb-3 cardBorder" style="width: 28rem;">
          <div class="card-body cardWhite">
            <h5 class="card-title">{{ realise.name }}</h5>
            <p class="card-text">{{ realise.description }}</p>
            <p class="card-text">{{ formatDate(realise.date) }}</p>
            <div class="d-flex justify-content-end">
              <button @click="update(realise.index)" class="btn btn-warning me-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger" @click="deleteTask(realise.index)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="rightDev">
  <p>2023 © To Do List EAFC Project - All rights reserved</p>
  </div>

</template>

<script>
export default {
  data() {
    return{
      newTask: {
        name: '',
        description: '',
        type: '',
        date: '',
      },
      tasks: [],
      index: 1,
      isEdition: false,
    };
  },
  methods: {
    createTask() {
      this.tasks.push({
        name: this.newTask.name,
        description: this.newTask.description,
        type: this.newTask.type,
        date: this.newTask.date,
        index: this.index,
      });
      this.index++
      this.newTask = {
        name: '',
        description: '',
        type: '',
        date: '',
      };
    },
    deleteTask(index) {
      let i = this.tasks.findIndex(function (el) {
        return el.index === index;
      });
      this.tasks.splice(i, 1);
    },
    update(index) {
      this.newTask = this.tasks.find(function (el) {
        return el.index === index;
      });
      this.isEdition = true;
    },
    cancelEditing() {
      this.isEdition = false;
      this.newTask = {
        name: '',
        description: '',
        type: '',
        date: '',
      };
    },
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY')
    },
  },
  computed: {
    priorities() {
      this.tasks.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
      return this.tasks.filter(function(el) {
        return el.type === 'priority';
      });
    },
    evenements() {
      this.tasks.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
      return this.tasks.filter(function(el) {
        return el.type === 'evenement';
      });
    },
    realises() {
      this.tasks.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
      return this.tasks.filter(function(el) {
        return el.type === 'realise';
      });
    },
  }
}
</script>