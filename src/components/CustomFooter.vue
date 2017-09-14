<template>
  <footer>
    <div class="container">
      <div class="access-this-code">
        <p>Desenvolvido com Vue.js, Vuex, Webpack and SASS. Quer ver ? <a href="" target="_blank">Acesse o repositório.</a></p>
      </div>
      <div class="icons-container">
        <div class="github-icon">
          <img src="../assets/github-icon.png" alt="" class="black-icon">
          <a href="https://github.com/caiofsouza" target="_blank" class="blue-icon">
            <img src="../assets/github-blue-icon.png" alt="Github" title="Acessar meu Github">
          </a>
        </div>
        <div class="linkedin-icon">
          <img src="../assets/linkedin-icon.png" alt="" class="black-icon">
          <a href="https://www.linkedin.com/in/caiofsouza/" target="_blank" class="blue-icon">
            <img src="../assets/linkedin-blue-icon.png" alt="Linkedin" title="Acessar meu Linkedin">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: relative;
  margin-bottom: 80px;
  
  .container {
    padding:10px 40px;
    border:1px solid #466ad4;

    .access-this-code {
      float:left;
      line-height: 50px;
      p {
        margin: 0;
      }
    }
    .icons-container {
      float:right;
    }
  }
}
.github-icon, .linkedin-icon{
  position: relative;
  display: inline-block;
  top: 0px;
  width: 44px;
  height: 44px;
  overflow: hidden;

  &:hover {
    .black-icon {
      top: -44px;
    }
    .blue-icon {
      top: 0px;
    }
  }
}
.black-icon, .blue-icon {
  transition: all .25s; 
}
.black-icon{
  width: 40px;
  position: relative;
  left: 4px;
  top: 4px;
}
.blue-icon{
  position: absolute;
  top: 40px;
  left: 0px;
  cursor:pointer;
}
@media screen and (max-width:999px){
  footer {
    margin-top:30px;

    .access-this-code, .icons-container {
      display: block;
      width: 100%;
      text-align: center;
      float: none !important;
      clear: both;
      line-height: 20px !important;
    }
    .access-this-code{
      margin-bottom: 15px;
    }
  }
}
@media screen and (max-width:550px){
  footer{
    padding: 10px;
  }
}
</style>
<script>
export default {
  name: 'CustomFooter'
}
</script>
