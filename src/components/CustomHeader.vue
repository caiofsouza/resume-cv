<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="five columns">
          <thumbnail></thumbnail>
        </div>
        <div class="seven columns">
          <person-info></person-info>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  height: 600px;
  padding-top: 100px;
  box-sizing: border-box;

  &::after{
    content: "";
    background: url(../assets/mountain-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center top;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    transform: scaleX(-1);
  }
}
@media screen and (max-width:550px){

}
@media screen and (max-width:930px){
  header {
    height: auto;
    min-height: 600px;
    padding-top: 40px;
    padding-bottom: 50px;
  }
}
</style>
<script>
import Thumbnail from '@/components/Thumbnail'
import PersonInfo from '@/components/PersonInfo'

export default {
  name: 'CustomHeader',
  data () {
    return {

    }
  },
  components: {
    Thumbnail,
    PersonInfo
  }
}
</script>
