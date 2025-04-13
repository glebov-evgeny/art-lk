<!-- eslint-disable vue/v-on-event-hyphenation -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="s-admin">
    <div class="s-admin__container l-wide">
      <h1 class="s-admin__title s-title">Админ панель</h1>
      <div class="s-admin__block">
        <div class="s-admin__main _border">
          <h2 class="s-admin__subtitle">Основная информация:</h2>
          <div class="s-admin__row">
            <h3 class="s-admin__row-title">Название:</h3>
            <input v-model="itemTitle" class="s-admin__input" placeholder="Заголовок статьи" />
          </div>
          <div class="s-admin__row">
            <h3 class="s-admin__row-title">Основной текст:</h3>
            <s-editor
              :item-content="itemContent"
              :create-or-update="createOrUpdate"
              :disabled-button="disabledButton"
              @setNewArticle="createArticle"
              @updateArticle="updateArticle"
            />
          </div>
        </div>
        <div class="s-admin__aside _border">
          <div class="s-admin__box _content">
            <h2 class="s-admin__subtitle">Все статьи:</h2>
            <div class="s-admin__box-items">
              <div v-for="item in allArticles" :key="item.id" class="s-admin__box-item">
                <h3 class="s-admin__box-item-title">{{ item.data.title }}</h3>
                <div class="s-admin__box-item-logic">
                  <div class="s-admin__box-item-action _green" @click="editingArticle(item.id)">Р</div>
                  <div v-if="item.data.visible" class="s-admin__box-item-action _brown" @click="hideArticle(item.id)">
                    С
                  </div>
                  <div v-else class="s-admin__box-item-action _brown _hidden" @click="showArticle(item.id)">С</div>
                  <div class="s-admin__box-item-action _red" @click="deleteArticle(item.id)">У</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <s-popup-info v-if="popupInfoShow" @close-popup="closePopupInfo" />
    <s-popup-alert v-if="popupAlertShow" @close-popup="closePopupAlert" @delete-item="deleteArticleAbsolutly" />
  </section>
</template>
<script setup>
import getArticles from '~/api/getArticles';
import setNewArticle from '~/api/setNewArticle';
import updateNewArticle from '~/api/updateNewArticle';
import deleteNewArticle from '~/api/deleteNewArticle';
import hideNewArticle from '~/api/hideNewArticle';
import showNewArticle from '~/api/showNewArticle';

const popupInfoShow = ref(false);
const popupAlertShow = ref(false);
const allArticles = ref([]);
const currentArticle = ref([]);
const createOrUpdate = ref(true);
const disabledButton = ref(false);

const itemTitle = ref('');
const itemContent = ref('');
const itemID = ref('');

const createArticle = async (content) => {
  await setNewArticle(content, itemTitle.value);
  itemTitle.value = '';
  itemContent.value = '';
  popupInfoShow.value = true;
};
const editingArticle = (id) => {
  currentArticle.value = allArticles.value.find((item) => item.id === id);
  itemTitle.value = currentArticle.value.data.title;
  itemContent.value = currentArticle.value.data.content;
  itemID.value = id;
  createOrUpdate.value = false;
};

const updateArticle = async (content) => {
  await updateNewArticle(content, itemTitle.value, itemID.value);
  popupInfoShow.value = true;
};

const hideArticle = async (id) => {
  await hideNewArticle(id);
  location.reload();
};

const showArticle = async (id) => {
  await showNewArticle(id);
  location.reload();
};
const deleteArticle = async (id) => {
  itemID.value = id;
  popupAlertShow.value = true;
};

const deleteArticleAbsolutly = async () => {
  await deleteNewArticle(itemID.value);
  popupAlertShow.value = false;
  location.reload();
};

async function getAllArticles() {
  const response = await getArticles();
  allArticles.value = response.sort((a, b) => a.data.createAt - b.data.createAt);
}

const closePopupInfo = () => {
  popupInfoShow.value = false;
  location.reload();
};

const closePopupAlert = () => {
  popupAlertShow.value = false;
};

watch(
  () => itemTitle.value,
  () => {
    if (itemTitle.value !== '') {
      disabledButton.value = false;
    } else {
      disabledButton.value = true;
    }
  },
  { deep: true, immediate: true },
);

onMounted(() => {
  getAllArticles();
});
</script>

<style lang="scss">
@import './s-admin.scss';
</style>
