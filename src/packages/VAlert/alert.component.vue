<style src="./alert.component.scss" lang="scss"></style>
<template>
  <!-- Alert-->
  <div class="alert" :class="`alert--${color}`">
    <div class="toast__title">
      <slot/>
    </div>
  </div>
</template>
<script src="./alert.component.ts" lang='ts'></script>


