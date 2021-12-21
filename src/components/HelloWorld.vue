<template>
  <div class="hello">
    <h1>{{ 'Welcome to this page from iFrame Page' + val }}</h1>
    <p v-if="this.val == 1"><strong>Now click on the iFrame2 button above to switch to another iFrame</strong></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['val']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
