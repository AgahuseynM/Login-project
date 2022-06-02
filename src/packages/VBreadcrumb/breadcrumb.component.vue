<style  src="./breadcrumb.component.scss" lang="scss"></style>
<template>
    <ol class="breadcrumb">
      <li class="breadcrumb__item"
          v-for="(link,index) in links" :key="index">
        <router-link
            :to="{name:link.name}"
            :class="{'breadcrumb__item-active' : pageLinks === link.path}">
          {{ link.meta.breadcrumb }}
        </router-link>
      </li>
    </ol>
</template>
 <script src="./breadcrumb.component.ts" lang="ts"></script>

