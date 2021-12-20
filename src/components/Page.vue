<template>
  <div>
    <h1>{{ 'Page' + val }}</h1>
    <p>This page appears inside the iFrame</p>
    <a :href = "'/hello/'+val"><button>Click me for further navigation</button></a>
  </div>
</template>

<script>
export default {
  name: 'Page',
  template: '#page',
  props: ['val']
};
</script>
