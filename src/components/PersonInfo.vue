<template>
  <div class="person-info">
    <h2>{{ name }}</h2>
    <p class="person-description" v-html="description"></p>
    <div class="row">
      <div class="four columns">
        <ul class="person-more-info">
          <li><strong>Nascimento: </strong></li>
          <li><strong>Endereço: </strong></li>
          <li><strong>Telefone: </strong></li>
          <li><strong>Email: </strong></li>
        </ul>
      </div>
      <div class="four columns">
        <ul class="person-more-info">
          <li>{{ birth }}</li>
          <li>{{ address }}</li>
          <li>{{ phone }}</li>
          <li>{{ email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  color: #171717;
  letter-spacing: 0.4px;
  font-size: 15px;
}
.person-description{
  border-bottom:1px solid #a5a5a5;
  padding-bottom:20px;
  font-size: 15px;
}
h2{
  font-size: 31px;
  letter-spacing: 0.7px;
  font-weight: 700;
}
.person-more-info{
  list-style: none;
  li {
    display: inline-block;
    width:100%;
    font-weight: 600;

    strong{
      font-weight: 700;
    }
  }
}
@media screen and (max-width:550px){
  .four.columns:nth-child(1){
    float: left;
    width: 35%;
  }
  .four.columns:nth-child(2){
    float: left;
    width: 65%;
  }
}
</style>
<script>
import { mapState } from 'vuex'

export default {
  name: 'PersonInfo',
  computed: mapState([
    'name',
    'position',
    'description',
    'birth',
    'address',
    'phone',
    'email'
  ])
}

</script>

