<template>
  <div class="home">
    <div class="progress">
      <Progress />
    </div>
    <v-main v-if="!loading">
      <div class="header-course">
        <h2 class="text-listado">Listado de Cursos</h2>
        <v-btn class="ml-5" color="green" @click.prevent="addCourse"
          >Agregar</v-btn
        >
      </div>
      <v-row>
        <v-col md="4" v-for="course in courses" :key="course.id">
          <v-card class="mx-auto" max-width="400">
            <v-img height="250" :src="course.data.img"></v-img>
            <v-card-title>{{ course.data.name }}</v-card-title>
            <v-card-text
              ><h5>{{ course.data.description }}</h5></v-card-text
            >
            <v-card-actions class="btn-action">
              <div>
                  <v-btn color="red" text @click="reserve">Eliminar</v-btn>
                  <v-btn color="yellow" text @click="reserve">Editar</v-btn>
              </div>
              <div>
                  <v-btn color="blue" text @click="reserve">VER</v-btn>
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
import { mapActions, mapState } from "vuex";
import Progress from "@/components/Progress";
export default {
  components: {
    Progress,
  },
  computed: {
    ...mapState(["courses", "loading"]),
  },
  methods: {
    ...mapActions(["getCourses"]),
  },
  created() {
    this.getCourses();
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
.btn-action{
  display: flex;
  justify-content: space-between;
}
</style>