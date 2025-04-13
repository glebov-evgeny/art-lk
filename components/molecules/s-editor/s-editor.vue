<template>
  <section class="s-editor">
    <quill-editor v-model:content="content" content-type="html" theme="snow" toolbar="full"></quill-editor>
    <button
      v-if="props.createOrUpdate"
      class="s-editor__button"
      :class="[{ _disabled: props.disabledButton }]"
      @click="createArticle"
    >
      Создать
    </button>
    <button v-else class="s-editor__button" @click="updateArticle">Редактировать</button>
  </section>
</template>
<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
const emit = defineEmits(['setNewArticle', 'updateArticle']);
const content = ref('');
const props = defineProps({
  itemContent: {
    type: String,
    default: () => {
      return {};
    },
  },
  createOrUpdate: {
    type: Boolean,
    default: true,
  },
  disabledButton: {
    type: Boolean,
    default: true,
  },
});

watch(
  () => props.itemContent,
  () => {
    content.value = props.itemContent;
  },
  { deep: true, immediate: true },
);

const createArticle = () => {
  emit('setNewArticle', content.value);
};

const updateArticle = () => {
  emit('updateArticle', content.value);
};
</script>

<style lang="scss">
@import './s-editor.scss';
</style>
