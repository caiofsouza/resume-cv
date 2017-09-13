<template>
  <div class="thumbnail">
    <img :src="profileImage" alt="">
  </div>
</template>
<style lang="scss" scoped>
$mainGray: #a9a9a9;
.thumbnail{
  border: 1px solid $mainGray;
  width:100%;
  height:350px;
  position: relative;
  text-align: center;

  &::before{
    content: '';
    height: 0.9px;
    width: calc(100% - 50px);
    background-color: $mainGray;
    position: absolute;
    left: 25px;
    top: 50%;
  }

  &::after{
    content: '';
    height: calc(100% - 50px);
    width: 0.9px;
    background-color: $mainGray;
    position: absolute;
    left: 50%;
    top: 25px;
  }
  img{
    border-radius: 50%;
    position: relative;
    top: 75px;
    z-index: 10;
  }
}
</style>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Thumbnail',
  computed: mapState([
    'profileImage'
  ])
}
</script>
