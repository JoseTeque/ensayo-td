<template>
  <div class="addCourse">
   <v-main v-if="!loading">
       <Form />
   </v-main>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components:{
    Form
  },
}
</script>

<style>
</style>