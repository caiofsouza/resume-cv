<template>
  <div class="experiences">
    <div class="experience-title-block">
      <i class="material-icons">format_list_bulleted</i>
      <h3 class="section-title"> Experiências</h3>
    </div>
    <div class="experience-block" v-for="experience in experiences" :key="experience.position">
      <h4 class="experience-title">{{ experience.position }}</h4>
      <p class="experience-description">
        {{ experience.description }}
      </p>
      <p class="experience-skills">
        <span v-for="skill in experience.skills" :key="skill">{{ skill }}</span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.experience-title-block{
  i{
    margin-top: 9px;
    float: left;
    width: 10%;
    font-size: 30px;
    color:#a2a2a2;
  }
}
.experience-title{
  text-transform: uppercase;
  font-size: 19px;
  letter-spacing: 0.7px;
  color: #444444;
  font-weight: 600;
}
.experience-block{
  display: inline-block;
  padding-left: 20px;
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #d8d8d8;

  &::before{
    content: '';
    position: absolute;
    left: 0px;
    width: 4px;
    height: 75%;
    background-color: #a2a2a2;
    top: 25px;
  }
}
.experience-skills{
  span {
    border: 1px solid #466ad4;
    border-radius: 9px;
    padding: 3px 10px;
    background-color: #466ad4;
    color: #ffffff;
    font-size: 12px;
    text-transform: lowercase;
    font-weight: 500;
    cursor: pointer;
    margin-left: 3px;
    display: inline-block;
    margin-bottom: 7px;
    
    &:hover{
      background-color: #ffffff;
      color: #466ad4;
    }
  }
}
</style>
<script>
export default {
  name: 'Experiences',
  computed: {
    experiences () {
      return this.$store.state.experiences
    }
  }
}
</script>
