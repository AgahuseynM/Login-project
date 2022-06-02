<style  src="./modal-header.component.scss" lang="scss"></style>
<template>
  <!-- Modal-header -->
  <div class="modal__header">
    <h5 class="modal__title">{{ title }}</h5>
    <button
        @click="close"
        type="button"
        class="modal__close"
    >
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>
<script src="./modal-header.component.ts" lang="ts"></script>

