<style src="./button.component.scss" lang="scss"></style>
<template>
  <!-- Button-->
  <button :class="[(outline)?`btn--outline-${color}`:`btn--${color}`,
                   {'btn--rounded': rounded},
                   `btn--${size}`]"
          class="btn"
          :type="type"
  >
    <slot name="icon"></slot>
    <slot/>
  </button>
</template>
<script src="./button.component.ts"></script>


