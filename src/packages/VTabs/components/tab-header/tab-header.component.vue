<style lang="scss" src="./tab-header.component.scss"></style>
<template>
  <div class="tabs py-0">
    <ul class="tabs__header p-0 m-0">
      <li class="tabs__header-items pt-2 pl-0 pr-6" v-for="(title,index) in tabHeader" :key="index" @click="changeHeader(index+1)" :class="active === index+1 ? 'avtiveItem' : '' ">
        <p class="m-0 mb-3">
          {{ title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./tab-header.component.ts"></script>
