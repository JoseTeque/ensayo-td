<template>
  <div class="home">
    <div class="progress">
      <Progress />
    </div>
    <v-main v-if="valorLoading()">
        <router-link class="link" to="/home">VOLVER</router-link>
      <div class="header-course">
        <h2 class="text-listado">{{course.data.name}}</h2>
      </div>
      <v-row>
       <v-col md="4" v-for="ejemplo in ejemplos" :key="ejemplo.id">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>{{ ejemplo.data.title }}</v-card-title>
            <v-card-text
              ><h5>{{ ejemplo.data.description }}</h5></v-card-text
            >
            <v-card-actions class="btn-action">
              <div>
                  <a target="_blank" :href="ejemplo.data.mp3">MP3</a>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState,mapActions } from "vuex";
import Progress from "@/components/Progress";
export default {
    data(){
        return{
            ejemplos:[]
        }
    },
  components: {
    Progress,
  },
  computed: {
    ...mapState(["courses", "loading", "course", "IdCourse"]),
  },
  methods: {
       ...mapActions([ "getCourse"]),
       valorLoading(){
           if(!this.loading){
               const curso = this.courses.find(curso => curso.id === this.course.id);
               this.ejemplos = curso.examples;
               return true
           }
       }
  },
  created(){
        this.getCourse(this.IdCourse);
  },
};
</script>

<style scoped>
.header-course {
  display: flex;
  justify-content: center;
}
.progress {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-listado{
    font-size: 5rem;
}

.link{
    text-decoration: none;
    margin-left: 1rem;
    border: 2px solid blue;
    padding: 2px 10px;
    background-color: aqua;
}

</style>