<template>
  <td class="console__editor-wrap">
    <span class="console__editor-title">{{title}}</span>
    <div class="console__editor">
      <div :id="name" style="width: 100%; height: 100%;"></div>
    </div>
  </td>
</template>

<script>
  import "ace-builds/src-min-noconflict/ace";

  export default {
    props: {
      name: String,
      content: String,
      title: String
    },
    data() {
      return {
        editor: Object,
        beforeContent: ""
      }
    },
    watch: {
      content(val) {
        if (this.beforeContent !== val) {
          this.editor.setValue(val, 1)
        }
      }
    },
    mounted(){  
      this.editor = window.ace.edit(this.name);
      const content = this.content || "a"
      this.editor.setValue(content, 1);
      
      this.editor.getSession().setMode(`ace/mode/json`)
      this.editor.setTheme(`ace/theme/github`)

      this.editor.on('change', () => {
        this.beforeContent = this.editor.getValue()
        this.$emit('change-content', this.editor.getValue())
      })
    }
  }
</script>