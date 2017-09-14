<template>
  <div class="skills">
    <div class="section-title-block">
      <i class="material-icons">build</i>
      <h3 class="section-title"> Habilidades</h3>
    </div>
    <div class="skills-container">
      <div v-for="(skillValue, skillName) in skills" :key="skillName">
        <span class="skill-name">
          {{ skillName }}
        </span>
        <div class="circles-container">
          <span :class="[{ 'circle-painted': n <= skillValue }, 'circle-skill']" v-for="n in 10" :key="n"></span>
        </div>
      </div>
      <div class="another-skills">
        <strong>Outras habilidades</strong>
        <ul>
          <li v-for="aSkill in anotherSkills" :key="aSkill">{{ aSkill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.skills-container{
  padding-left: 45px;
}
.skill-name{
  font-size: 16px;
  letter-spacing: 0.7px;
  color: #444444;
  font-weight: 400;
  line-height: 35px;
}
.circle-skill{
  width: 16px;
  height: 16px;
  background-color: #a2a2a2;
  display: inline-block;
  border-radius: 50%;
  margin-left: 7px;

  &.circle-painted{
    background-color: #3e3e3e;
  }
}
.circles-container{
  float: right;
}
.another-skills{
  margin-top: 40px;
  padding-bottom: 20px;

  strong {
    margin-bottom: 10px;
    font-size: 17px;
    display: inline-block;
  }
  p {
    font-size:15px;
  }
}
</style>
<script>
export default {
  name: 'Skills',
  computed: {
    skills () {
      return this.$store.state.skills
    },
    anotherSkills () {
      return this.$store.state.anotherSkills
    }
  }
}
</script>

