<style lang="scss" src="./table.component.scss"></style>
<template>
  <table class="table-section">
    <thead class="table-section__thead">
      <slot name="header"></slot>
    </thead>
    <tbody class="table-section__tbody">
      <slot name="body"></slot>
    </tbody>
    <tfoot class="table-section__tfoot">
      <slot name="footer"></slot>
    </tfoot>
  </table>
</template>
<script lang="ts" src="./table.component.ts"></script>
