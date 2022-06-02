<style lang="scss" src="./dropdown.component.scss"></style>
<script lang="ts" src="./dropdown.component.ts"></script>
<template>
  <div class="dropdown" :data-value="value" :data-list="options">
    <div class="dropdown__selector" @click="toggle()">
      <div class="dropdown__selector__label">
        <span>{{ value }}</span>
      </div>
      <div class="dropdown__selector__arrow">
        <fa class="font-size-35" icon="angle-down"/>
      </div>

      <div :class="{ hidden : !visible, visible }">
        <ul class="dropdown__selector__options mt-1">
          <li :class="{ current : item === value }"
              v-for="(item, index) in options" :key="index"
              @click="set(item.value)">{{ item.value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
