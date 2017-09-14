<template>
  <div id="app">
    <custom-header></custom-header>
    <div class="container portfolio-content">
      <div class="row">
        <div class="columns six">
          <experiences></experiences>
        </div>
        <div class="columns six">
          <skills></skills>
          <education></education>
        </div>
      </div>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader'
import Experiences from '@/components/Experiences'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import CustomFooter from '@/components/CustomFooter'

export default {
  name: 'app',
  components: {
    CustomHeader,
    Experiences,
    Skills,
    Education,
    CustomFooter
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Titillium Web', sans-serif;
}
.portfolio-content {
  padding-top: 60px !important;
}
.section-title-block{
  i{
    margin-top: 9px;
    float: left;
    width: 10%;
    font-size: 30px;
    color:#a2a2a2;
  }
  .section-title{
    color: #466ad4;
    border-bottom: 1px solid #d0d0d0;
    padding-bottom: 10px;
    font-size: 27px;
    letter-spacing: 0.5px;
    font-weight: 400;
    text-transform: capitalize;
    float: left;
    width: 90%;
  }
}
@media screen and (max-width:999px){
  .section-title{
    padding-left: 15px;
    box-sizing: border-box;
  }
}
</style>
