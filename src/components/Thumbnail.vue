<template>
  <div class="thumbnail">
    <img src="../assets/caio-profile.jpg" alt="Oie" title="Caio Fernandes diz olá">
  </div>
</template>
<style lang="scss" scoped>
$mainGray: #a5a5a5;
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
    width:200px;
    height:200px;
    border-radius: 50%;
    position: relative;
    top: 75px;
    z-index: 10;
    border:1px solid $mainGray;
  }
}
@media screen and (max-width:550px){
  .thumbnail{
    margin-bottom: 20px;
  }
}
@media screen and (min-width:550px) and (max-width:770px){
  .thumbnail{
    img{
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
<script>
export default {
  name: 'Thumbnail'
}
</script>
