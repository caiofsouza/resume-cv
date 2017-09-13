<template>
  <header>
    <div class="bg-layer"></div>
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
  height: 520px;
  padding-top:70px;
  box-sizing: border-box;

  &::after{
     content: "";
    background: url(/static/img/bg-header.fbaa974.jpg) no-repeat;
    background-size: cover;
    background-position: center bottom;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    transform: scaleX(-1);
  }
  .bg-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    left: 0px;
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
