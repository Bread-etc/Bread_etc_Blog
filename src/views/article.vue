<!-- article.vue for article page -->
<template>
    <div id="editor">
        
    </div>
</template>

<script lang="ts" setup>
// Local Registration
import mavonEditor from "mavon-editor"
import 'mavon-editor/dist/css/index.css'
components: { mavonEditor }

</script>

<style lang="scss" module>
#editor {
    margin: auto;
    width: 80%;
    height: 580px;
}
</style>