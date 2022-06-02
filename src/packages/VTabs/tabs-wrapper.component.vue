<style lang="scss" src="./tabs-wrapper.component.scss"></style>
<!-- TODO: [x] (Nicat) style teqi template"dən yuxarı, script isə aşağıda olmalıdı -->
<!-- TODO: [x] (Nicat) for loop"unda keyden istifade olunmalıdı -->
<!-- TODO: [x] (Nicat) atribut ve custom eventleri kebab-case yazmaq lazimdi -->
<template>
  <div class="tabs-wrapper m-auto p-5">
    <tab-header-component :tab-header="tabWrapperHeader" @changed-title="showContentIndex"/>
    <transition name="fade" v-for="i in contentCount" :key="i" v-show="active === i">
      <div class="tabs-wrapper__content">
        <slot :name="'slot'+i"/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" src="./tabs-wrapper.component.ts"></script>
