<template>
  <div class="experiences">
    <div class="section-title-block">
      <i class="material-icons">format_list_bulleted</i>
      <h3 class="section-title"> Experiências</h3>
    </div>
    <div class="block" v-for="experience in experiences" :key="experience.position">
      <h4 class="title">{{ experience.position }}</h4>
      <h5 class="company">{{ experience.company }}</h5>
      <small class="duration">{{ experience.duration }}</small>
      <p class="description" v-html="experience.description"></p>
      <p class="skills">
        <span v-for="skill in experience.skills" :key="skill">{{ skill }}</span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.block{
  display: inline-block;
  padding-left: 45px;
  position: relative;
  margin-bottom: 30px;
  border-bottom: 1px solid #d8d8d8;

  .title{
    text-transform: uppercase;
    font-size: 19px;
    letter-spacing: 0.7px;
    color: #444444;
    font-weight: 600;
    margin-bottom: 0;
  }
  .company {
    text-transform: uppercase;
    font-size: 17px;
    letter-spacing: 0.7px;
    color: #444444;
    font-weight: 200;
    margin-bottom: 0;
  }
  .duration{
    margin-bottom: 20px;
    display: inline-block;
  }
  .skills{
    span {
      border: 1px solid #466ad4;
      padding: 3px 10px;
      font-size: 13px;
      text-transform: lowercase;
      font-weight: 500;
      margin-left: 5px;
      display: inline-block;
      margin-bottom: 7px;
      
      &:hover{
        background-color: #ffffff;
        color: #466ad4;
      }
    }
  }

  &:last-child{
    border-bottom:none;
  }
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
@media screen and (max-width:999px){
  .block{
    padding-left: 30px;

    .title{
      font-size:16px;
    }
    .company {
      font-size: 15px;
    }
  }
}
@media screen and (max-width:550px){
  .block{
    padding-left:0px;

    &::before{
      display: none;
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
