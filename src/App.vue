<template>
  <div id="app">
    <custom-header></custom-header>
    <div class="container portfolio-content">
      <div class="row">
        <div class="columns six">
          <experiences></experiences>
        </div>
        <div class="columns six">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader'
import Experiences from '@/components/Experiences'

export default {
  name: 'app',
  components: {
    CustomHeader,
    Experiences
  }
}
</script>

<style>
* {
  font-family: 'Titillium Web', sans-serif;
}
.portfolio-content {
  padding-top: 60px;
}
.section-title{
  color: #466ad4;
  border-bottom: 1px solid #d0d0d0;
  padding-bottom: 10px;
  font-size: 27px;
  letter-spacing: 0.5px;
  font-weight: 400;
  text-transform: lowercase;
  float: left;
  width: 90%;
}
</style>
