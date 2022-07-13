<template>
<div class="homeview">

  <nav class="bd-subnavbar py-2" aria-label="Secondary navigation">
    <div class="container-xxl d-flex align-items-md-center">
      <div className="container" class="position-relative me-auto">
        <span>Search titles...</span>
        <div id="autocomplete"></div>
        
      </div>
    </div>
  </nav>

  <div class="container-xxl my-md-4 bd-layout d-flex">
    <aside class="bd-sidebar d-flex" style="min-width: 250px;">
        <nav class="collapse bd-links d-flex" id="bd-docs-nav" aria-label="Docs navigation" style="min-width: 250px;">
          <ul class="list-unstyled mb-0 py-3 pt-md-1">
            <li class="mb-1"
              v-for="(topic, index) in help_sectionTopics" :key="index"
              >
              <button style="font-size: 1.3em;" class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse'+index" aria-expanded="false">
                {{topic}}
              </button>
                
                <div class="collapse" v-bind:id="'collapse'+index" style="">
                  <ul style="font-size: 1.2em;" class="list-unstyled fw-normal pb-1 small">
                    
                    <li 
                      v-for="(title, i) in retrieveHelpTitles_by_topic(topic)" :key="i"
                      
                    >
                      <a style="cursor: pointer;" class="d-inline-flex align-items-center rounded" @click="getHelpSectionByTopicAndTitle(topic,title)">{{title}}</a>
                    </li>
                  </ul>
                </div>
              
            </li>
          </ul>
        </nav>
    </aside>

    <div class="bd-intro ps-lg-4" style="min-width: 900px;">
        <div v-if="!this.$store.state.currentHelpSect">
            <h1 class="bd-title text" id="content">Citizen Capital Help</h1>
              <p class="bd-lead">Citizen Capital&rsquo;s help topics, how-to&rsquo;s, convenient links, and more.</p>
              <h2 id="tooling-setup">Adding a Help Section</h2>
              <p>A help section consist of 4 fields: </p>
              <ol type="1">
                <li> Topic </li>
                <li> Title </li>
                <li> Description (main content) </li>
                <li> Author</li>
              </ol>
              <p>Just click the "Add" button to make an entry.</p>
              <h2 id="tooling-setup">Editing a Help Section</h2>
              <ol type="1">
                <li> Click the "Edit" button. </li>
                <li> Make changes. </li>
                <li> Click the "Submit" button. </li>
                <li> The help section is updated in the database. </li>
              </ol>
              <h2 id="tooling-setup">Deleting a Help Section</h2>
              <ol type="1">
                <li> Click the "Edit" button. </li>
                <li>  Click the "Delete" button. </li>
                <li> The help section is deleted from the database. </li>
              </ol>        
              <h2 id="tooling-setup">Adding Links to the Page</h2>
              <p>We will need to modify the header and/or the footer of this page to add or remove links.  Just reach out to the Dev team.</p>    
        </div>
    
        <div v-if="this.$store.state.currentHelpSect">
              <h1 id="topic"> {{ this.$store.state.currentHelpSect.topic}} </h1>
              <h3 id = "title"> {{ this.$store.state.currentHelpSect.title }} </h3>
              <p style="font-size: 1.1em;"> {{ this.$store.state.currentHelpSect.description }} </p>
              <p style="font-size: 1em;"> Author: {{ this.$store.state.currentHelpSect.author }} </p>

                  <HelpSection />

        </div>
    </div>
  </div>
</div>
</template>
<script>
import { autocomplete } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
import HelpSectionDataService from "../services/HelpSectionDataService";
import HelpSection from "../views/HelpSection";
import store from "../store"
import {onMounted} from 'vue';
import router from "../router"

var j = 0;
export default {
  name: "HomeView",
  components: {
    HelpSection
    },
  data() {
    return {
      help_sections: [],
      currentHelpSection: null,
      currentHelpTopic: null,
      currentHelpTitle: null,
      currentIndex: -1,
      ActiveDisplay: false,
      title: "",
    };
  },
    setup() {
    onMounted(async() => {
      console.log("On-mounted")
      const response = await HelpSectionDataService.getAll();
      console.log("response.data: ",response.data)
      const items = [] 
      for (var i = 0; i < response.data.length; i++) {items.push(response.data[i])}
      console.log("Print items: ",items)
      autocomplete({
        container: '#autocomplete',
        openOnFocus: false,
        getSources() {
          console.log("getSources executing")
          return [
            {
                sourceId: "HelpSections",
            getItems({ query }) {
            return items.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase()));
            
                  },
                
                getItemUrl({ item }) {
                  j +=1
                  item.url = `/help_sections/${item.id}`
                  console.log("j: ",j,"getItemUrl item: ",item, "getItemUrl item.url: ",item.url)
                  return item.url;
                },
                getItemId({ item }) {
                  j+= 1
                  console.log("j: ",j,"getItemId item.id: ",item.id)
                  return item.id;
                },
                onSelect({item}) {
                    console.log("j: ",j,"onSelect item: ",item)
                    store.commit('setCurrentHelpSect',item)
                    router.push({name: "help_section-by-id", params: {id: item.id}})
                    return item;
                },
                templates: {
                  item({ item }) {
                    console.log("item.title: ",item.title)
                    return item.title;
                  },
            },
        }];
      },
    })
    });
  },

  
  computed: {
    help_sectionTopics () {
      return [...new Set(this.$store.getters.getAllHelpSect.map(({ topic }) => topic))]
    }
  },
  methods: {
    retrieveHelpSections() {
      HelpSectionDataService.getAll()
        .then(response => {
          store.commit('setAllHelpSect',response.data);
          // console.log(response.data);
        })
        .catch(e => {
          console.log("error in retreiveHelpSection: ",e);
        });
    },
    help_sectionbyID (filter_id) {
      return this.currentHelpSection = this.help_sections.filter(help_section => help_section.id === filter_id)
    },
    update_current() {
      this.currentHelpSection = this.$store.currentHelpSect
      return null
    },
    retrieveHelpSections_by_topic(currentTopic) {
      HelpSectionDataService.findByTopic(currentTopic)
        .then(response => {
          this.help_sections = response.data;
          console.log("retrieveHelpSections_by_topic: ",response.data);
        })
        .catch(e => {
          console.log("Error in retrieveHelpSections_by_topic: ",e);
        });
    },
    setActiveDisplay() {
      this.ActiveDisplay=true;
    },
    retrieveHelpTitles_by_topic(currentTopic) {
      var filter_topic = currentTopic
      console.log("retrieveHelpTitles_by_topic: ",currentTopic)
      return this.$store.getters.getAllHelpSect.filter(help_section => help_section.topic === filter_topic).map(help_section => help_section.title);
    },
    ActiveHelpTopicById(id) {
      return this.help_sections.filter(help_section => help_section.id === id).map(help_section => help_section.topic);
    },
    ActiveHelpTitleById(id) {
      return this.help_sections.filter(help_section => help_section.id === id).map(help_section => help_section.title);
    },
    ActiveHelpDescriptionById(id) {
      return this.help_sections.filter(help_section => help_section.id === id).map(help_section => help_section.description);
    },
    retrieveHelpIDbyTopicAndTitle (topic,title) {
      var filter_topic = topic
      var filter_title = title
      this.$store.commit('currentHelpSectID',this.$store.getters.getAllHelpSect.filter(help_section => help_section.topic == filter_topic)
        .filter(help_section => help_section.title == filter_title).map(help_section => help_section.id));
      return this.$store.getters.getcurrentHelpSectID;
    },
    getHelpSection(id) {
      HelpSectionDataService.get(id)
        .then(response => {
          this.currentHelpSection = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getHelpSectionByTopicAndTitle(topic,title) {
      HelpSectionDataService.findOneByTopicAndTitle(topic,title)
        .then(response => {
          this.$store.commit('setCurrentHelpSect',response.data)
          console.log("getHelpSectionByTopicAndTitle: ",this.$store.state.currentHelpSect);
          router.push({name: "help_section-by-id", params: {id: this.$store.state.currentHelpSect.id}})
        })
        .catch(e => {
          console.log("Error in getHelpSectionByTopicAndTitle: ", e);
        });
    },
    refreshList() {
      this.retrieveHelpSections();
      this.currentHelpSection = null;
      this.currentIndex = -1;
    },
    setActiveHelpTopic(topic) {
      this.currentHelpTopic = topic;
    },
    setActiveHelpTitle(title) {
      this.currentHelpTitle = title;
    },
    setActiveHelpSectionID() {
      var filter_topic = this.currentHelpTopic
      var filter_title = this.currentHelpTitle
      this.currentHelpSectionID = this.help_sections.filter(help_section => help_section.topic == filter_topic)
        .filter(help_section => help_section.title == filter_title).map(help_section => help_section.id);
    },
    setActiveHelpSection() {
      var filter_topic = this.currentHelpTopic
      var filter_title = this.currentHelpTitle
      this.currentHelpSectionID = this.help_sections.filter(help_section => help_section.topic == filter_topic)
        .filter(help_section => help_section.title == filter_title).map(help_section => help_section.id);
      HelpSectionDataService.get(this.currentHelpSectionID[0])
        .then(response => {
          this.currentHelpSection = response.data;
          console.log("setActiveHelpSection: ",response.data);
        })
        .catch(e => {
          console.log("Error in setActiveHelpSection: ",e);
        });
    },
    removeAllHelpSections() {
      HelpSectionDataService.deleteAll()
        .then(response => {
          console.log("removeAllHelpSections: ",response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log("Error in removeAllHelpSections: ",e);
        });
    },
    
    searchTitle() {
      HelpSectionDataService.findByTitle(this.title)
        .then(response => {
          this.help_sections = response.data;
          this.currentHelpSection = this.help_sections;
          this.currentHelpTopic = this.help_sections.topic;
          this.currentHelpTitle = this.help_sections.title;
          console.log("searchTitle: ",response.data);
        })
        .catch(e => {
          console.log("Error in searchTitle: ",e);
        });
    },

    searchTopic() {
      HelpSectionDataService.findByTopic(this.topic)
        .then(response => {
          this.help_sections = response.data;
          console.log("searchTopic: ",response.data);
        })
        .catch(e => {
          console.log("Error in searchTopic: ",e);
        });
    }

  },
  mounted() {
    console.log("mounted");
    this.retrieveHelpSections();
  }
};
</script>