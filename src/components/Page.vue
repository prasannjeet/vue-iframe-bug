<template>
  <div>
    <h1>{{ 'Page' + val }}</h1>
    <p>This page appears inside the iFrame</p>
    <a :href = "'/hello/'+val"><button>Click me for further navigation</button></a>
    <div v-if="val == 2">
      <h3>Now try clicking the Back button, either on the browser or below</h3>
      <p><strong>Expected Behaviour in our context:</strong> Nothing Happens, as this is a new iFrame</p>
      <p><strong>Actual Behaviour:</strong> iFrame1, which is in the background, has now gone back one step</p>
      <p>This can be checked by going back to iFrame1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  template: '#page',
  props: ['val']
};
</script>
