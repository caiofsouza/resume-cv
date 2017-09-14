<template>
  <div class="education">
    <div class="section-title-block">
      <i class="material-icons">school</i>
      <h3 class="section-title"> Estudos</h3>
    </div>
    <div class="education-container" v-for="edu in education" :key="edu.school">
      <strong>{{ edu.school }} - {{ edu.course }}</strong>
      <p>{{ edu.startEnd }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.education-container{
  padding-left: 45px;
}
</style>
<script>
export default {
  name: 'Education',
  computed: {
    education () {
      return this.$store.state.education
    }
  }
}
</script>

