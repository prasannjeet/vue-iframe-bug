<template>

    <div>
      <p>
          <router-link :to="{ name: 'pathRoute', params: { val: 1 }}"><button>Go To iFrame</button></router-link>
      </p>
    </div>

</template>

<script>
export default {
  name: 'Home',
  template: '#home'
};
</script>
