<template>
  <button @click="onClick">
    {{title}}
  </button>
</template>

<script>
export default {
  name: "TRButton",
  props: {
    title: {
      type: String,
      default: "Button"
    }
  },
  methods: {
    onClick() {
      console.log("clicked");
    }
  }
}
</script>
