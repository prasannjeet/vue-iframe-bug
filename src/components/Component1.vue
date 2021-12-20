<template>
  <div>
    <h2>iFrame is added below</h2>
    <h1>VAL: {{ val }}</h1>
    <p>
      <button @click="goToFrame1">iFrame1</button>
      <button @click="goToFrame2">iFrame2</button>
    </p>
    <iframe
        id="iframe1"
        :style="iFrame1 && !iFrame2 ? { display: 'inline' } : { display: 'none' }"
        title="iFrame"
        width="800" height="450"
        :src="iFrame1URL"
    />
    <iframe
        id="iframe2"
        :style="iFrame2 && !iFrame1 ? { display: 'inline' } : { display: 'none' }"
        title="iFrame"
        width="800" height="450"
        :src="iFrame2URL"
    />

    <br><br>

    <a href="http://localhost:8080">
      <button>Go to HomePage</button>
    </a>

    <br><br>

    <button class="ma-auto" @click="goBack">
      Back Button
    </button>

  </div>
</template>

<script>
export default {
  name: 'Component1',
  template: '#component1',
  props: ['val'],
  data: function () {
    return {
      iFrame1: true,
      iFrame2: false,
      iFrame1URL: 'http://localhost:8080/page/1',
      iFrame2URL: 'http://localhost:8080/page/2',
      key: 1
    };
  },
  methods: {
    goToFrame2() {
      this.iFrame1 = false;
      this.iFrame2 = true;
      this.key = 1;
    },
    goToFrame1() {
      this.iFrame1 = true;
      this.iFrame2 = false;
      this.key = 2;
    },
    goBack() {
      if (this.iFrame1 && !this.iFrame2) {
        document.getElementById('iframe1').contentWindow.history.back();
      } else if (this.iFrame2 && !this.iFrame1) {
        document.getElementById('iframe2').contentWindow.history.back();
      }
    }
  }
};
</script>
