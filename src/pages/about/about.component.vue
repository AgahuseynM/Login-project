<style src="./about.component.scss" lang="scss"></style>

<template>
  <div class="about">
    <div class="about-container pb-5">

      <div class="about-container__create-post">
        <form @submit.prevent>
          <h1 class="title">Create Post</h1>
          <input class="v-input mb-4" type="text" placeholder="language" v-model="addInfo.language">
          <input class="v-input mb-4" type="text" placeholder="type" v-model="addInfo.type">
          <input class="v-input mb-4" type="text" placeholder="pages" v-model="addInfo.pages">
          <v-btn @click="createPost" class="btn" color="emerald">Create Post</v-btn>
        </form>
      </div>
      <div class="about-container__title pb-4">
        <h1>About</h1>
      </div>
      <div class="about-container__content mb-2">
        <div class="content-elements pb-4" v-for="(item, index) in aboutListAll" :key="index">
          <div class="item mb-3 p-2">
            <div>
              <v-alert class="v-alert" color="emerald"><strong>Language: </strong>
                {{item.abouts}}
              </v-alert>
              <v-alert class="v-alert" color="emerald"><strong>Type: </strong>
                {{}}
              </v-alert>
              <v-alert class="v-alert" color="emerald"><strong>Pages: </strong>
                {{}}
              </v-alert>
            </div>
            <div @click="deleteItem(index)" class="delete-btn pr-5">
              <v-btn color="emerald">Delete</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./about.component.ts" lang="ts"></script>