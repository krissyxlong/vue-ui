<template>
  <div>模板{{ name }}</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    name: {
      type: String,
      default: () => { return 'xxx'; }
    }
  },
  name: "nd-button",
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>


<style lang="less" scoped>
</style>