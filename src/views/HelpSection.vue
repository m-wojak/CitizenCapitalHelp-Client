<template>
<button @click="editHelpSection()" class="badge bg-secondary">Edit or Delete HelpSection</button>
<div v-if="this.$store.state.currentHelpSectID===this.$store.state.currentHelpSect.id" class="edit-form">
    <form>
      <div class="form-group">
        <label for="topic">Topic</label>
        <input type="text" class="form-control" id="topic"
          v-model="this.$store.state.currentHelpSect.topic"
        />
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="this.$store.state.currentHelpSect.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="6"
          v-model="this.$store.state.currentHelpSect.description">
          </textarea>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" class="form-control" id="author"
          v-model="this.$store.state.currentHelpSect.author"
        />
      </div>
    </form>
    <button class="badge bg-secondary"
      @click="deleteHelpSection"
    >
      Delete
    </button>
    <button type="submit" class="badge bg-secondary"
      @click="updateHelpSection"
    >
      Update
    </button>
    <p>{{ this.message }}</p>
  </div>
</template>
<script>
import HelpSectionDataService from "../services/HelpSectionDataService";
import store from "../store"

export default {
  name: "HelpSection",
  data() {
    return {
      currentHelpSection: null,
      message: ''
    };
  },
  methods: {
    getHelpSection(id) {
      HelpSectionDataService.get(id)
        .then(response => {
          this.$store.commit('setCurrentHelpSect',response.data)
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    editHelpSection() {
      console.log("editHelpSection")
      store.commit('setCurrentHelpSectID',store.getters.getcurrentHelpSect.id)
      console.log(store.state.currentHelpSectID)
      this.message = ''
    },
    updateHelpSection() {
      HelpSectionDataService.update(this.$store.state.currentHelpSect.id, this.$store.state.currentHelpSect)
        .then(response => {
          console.log(response.data);
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteHelpSection() {
      HelpSectionDataService.delete(this.$store.state.currentHelpSect.id)
        .then(response => {
          console.log(response.data);
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
  }
};
</script>
<style>
.edit-form {
  max-width: 1200px;
  margin: left;
}
form label{
  font-weight:bold;
}
</style>
