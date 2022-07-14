<template>
  <div class="submit-form">
      <div class="form-group">
        <label for="topic">Topic</label>
        <input
          type="text"
          class="form-control"
          id="topic"
          required
          v-model="help_section.topic"
          name="topic"
        />
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="help_section.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="help_section.description"
          name="description"
          rows="6"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="author">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          required
          v-model="help_section.author"
          name="author"
        />
      </div>
      <button @click="saveHelpSection" class="btn btn-success">Submit</button>
      <p>{{ this.message }}</p>
      
  </div>
</template>
<script>
import HelpSectionDataService from "../services/HelpSectionDataService";
export default {
  name: "add-help_section",
  data() {
    return {
      help_section: {
        id: null,
        topic: "",
        title: "",
        description: "",
      },
      submitted: false,
      message : ''
    };
  },
  methods: {
    saveHelpSection() {
      var data = {
        topic: this.help_section.topic,
        title: this.help_section.title,
        description: this.help_section.description,
        author: this.help_section.author
      };
      HelpSectionDataService.create(data)
        .then(response => {
          this.help_section.id = response.data.id;
          console.log(response.data);
          this.message = 'Successfully saved help_section!'
          if(!response.data) {
            this.message = 'There was a problem saving the help_section!'
          } 
          console.log("Save Help Section Message: ", this.message )
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newHelpSection() {
      this.submitted = false;
      this.help_section = {};
    }
  },
  mounted() {
    this.message = '';
  }
};
</script>
<style>
.submit-form {
  max-width: 1200px;
  margin: left;
}
form label{
  font-weight:bold;
}
</style>