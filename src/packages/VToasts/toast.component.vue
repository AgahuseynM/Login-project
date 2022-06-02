<style src="./toast.component.scss" lang="scss"></style>
<template>
  <!-- Toast-->
  <transition name="show">
  <div class="toast toast--default" v-show="toggle">
    <div class="toast__wrapper p-5">
      <div class="toast__title">
        {{ title }}
      </div>
      <div class="toast__action ml-5" v-if="action" @click="closeToast()">
        ×
      </div>
    </div>
  </div>
  </transition>
</template>
<script src="./toast.component.ts"></script>


