<style src="./register.component.scss" lang="scss"></style>

<template>
  <div class="register">
    <div class="register-container p-6">
      <div class="register-container__title mb-5">
        <h1 class="m-0">Register</h1>
        <p>Register your account to continue.</p>
      </div>
      <div class="register-container__form">
        <form>
          <div class="register-element">
            <label class="v-label">USERNAME</label>
            <input class="v-input mt-1" placeholder="username" v-model="userInfo.username">
          </div>
          <div class="register-element mt-5">
            <label class="v-label">EMAIL</label>
            <input class="v-input mt-1" placeholder="email" v-model="userInfo.email">
          </div>
          <div class="register-element mt-5">
            <label class="v-label">PASSWORD</label>
            <input class="v-input mt-1" placeholder="password" type="password" v-model="userInfo.password">
          </div>
          <div class="register-element mt-5">
            <label class="v-label">CONFIRM PASSWORD</label>
            <input class="v-input mt-1" placeholder="password" type="password" v-model="confirmPassword">
          </div>
        </form>
        <div class="register-container__btns mt-5">
          <v-btn class="btn py-4 w-100" size="lg" color="pear">Register</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./register.component.ts" lang="ts"></script>