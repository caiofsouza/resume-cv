<template>
  <div class="person-info">
    <h2>{{ name }}</h2>
    <p>
      {{ description }}
    </p>
    <hr>
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
  color:#d8d8d8;
  letter-spacing: 0.7px;
  font-size: 14px;
}
h2{
  font-size: 24px;
  font-weight: 600;
}
.person-more-info{
  list-style: none;
  li {
    display: inline-block;
    width:100%;
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

