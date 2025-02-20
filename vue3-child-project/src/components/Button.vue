<template>
  <button @click="onClick">
    {{title}}
  </button>
</template>

<script>
export default {
  name: "TButton",
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
