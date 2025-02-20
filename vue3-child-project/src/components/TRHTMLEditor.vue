<template>
  <div style="margin-top: 100px">
    <editor-content :editor="editor"/>
    <div>
      <h4 style="margin-bottom: 0">HTMLEditor Output</h4>
      {{value}}
    </div>
  </div>
</template>

<script>
import {Editor, EditorContent} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
  name: 'TRHTMLEditor',
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
      value:null
    }
  },

  mounted() {
    this.editor = new Editor({
      content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
      extensions: [StarterKit],
      onUpdate: ({ editor }) => {
        const html = editor.getText() ? editor.getHTML() : null;
        this.value = html;
      }
    })
    this.value=this.editor.getHTML()
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>
