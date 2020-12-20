<template>
  <div>
    <v-card v-if="!loading"  width="450px" class="mx-auto my-5">
      <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">{{ add_edit }}</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Nombre" v-model="NuevoCourse.name" color="green" />
          <v-text-field label="Imagen" v-model="NuevoCourse.img" color="green" />
          <v-text-field
            label="Descripcion"
            v-model="NuevoCourse.description"
            color="green"
          />

        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue" @click.prevent="volver">volver</v-btn>
        <v-btn color="green" @click.prevent="agregar">{{ btn_add_edit }}</v-btn>
      </v-card-actions>
    </v-card>
    <div class="progress">
      <Progress />
   </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Progress from '@/components/Progress'
export default {
  components: {
    Progress
  },
  data() {
    return {
      NuevoCourse: {
        name: null,
        img: null,
        description: null,
      },
      editCourse:{}
    };
  },
  computed: {
    ...mapState(["add_edit", "btn_add_edit", "dialog", "loading", "toy"]),
  },
  methods: {
    ...mapActions(["agregarCourse","loadingLogin"]),
    agregar() {
      if (this.isValidToy()) {
        if(this.btn_add_edit == "Agregar"){
            this.loadingLogin(true);
            this.agregarCourse(this.NuevoCourse)
            this.$router.push('/home')
        }else{
           this.editToy.id = this.toy.id;
           this.editToy.data = this.Nuevotoy
           this.agregarToy(this.editToy)
           this.openDialog(true);
           this.agregarMensaje(this.btn_add_edit);
        }
        
      } else {
        alert("Todos los campos son obligatorios");
      }
    },
    isValidToy() {
      return (
        this.NuevoCourse.name !== "" &&
        this.NuevoCourse.img !== "" &&
        this.NuevoCourse.description !== "" 
      );
    },
    volver(){
      this.$router.push('/home')
    }
  },
  created(){
     if(this.toy.data != undefined){
       this.Nuevotoy.code = this.toy.data.code
       this.Nuevotoy.name = this.toy.data.name
       this.Nuevotoy.price = this.toy.data.price
       this.Nuevotoy.stock = this.toy.data.stock
     }
  }
};
</script>
<style scoped>
  .progress{
    display:flex;
    justify-content:center;
    align-items: center;
  }
</style>