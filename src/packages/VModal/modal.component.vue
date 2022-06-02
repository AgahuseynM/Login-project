<style  src="./modal.component.scss" lang="scss"></style>
<template>
  <!-- Modal -->
  <transition name="fadeIn">
    <div v-show="toggle" class="modal" @click.self="closeModal">
      <transition name="fade">
        <div v-show="toggle" :class="[`modal--${size}`, position]" class="modal__dialog  ">
          <div class="modal__content">
            <modal-header-component :title="title" :close="closeModal"/>
            <modal-body-component>
              <template v-slot:modal-body>
                <slot name="body"></slot>
              </template>
            </modal-body-component>
            <modal-footer-component
                v-if="footer"
            >
              <template v-slot:modal-footer>
                <slot name="footer"></slot>
              </template>
            </modal-footer-component>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script src="./modal.component.ts" lang="ts"></script>

