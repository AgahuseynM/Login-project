<style lang="scss" src="./login.component.scss"></style>
<template>
  <div class="login">
    <div class="login-container p-6">

      <button>
        <router-link :to="{name: 'about'}">About</router-link>
      </button>

      <div class="login-container__title mb-5">
        <h1 class="m-0">Login</h1>
        <p>Please enter your Login and Password</p>
      </div>
      <div class="login-container__form mt-8">
        <form @submit.prevent="sendLogin" method="post" name="authorization">
          <div class="login-element">
            <label class="v-label">USERNAME</label>
            <input class="v-input mt-1" placeholder="username" v-model="loginUser.email">
          </div>
          <div class="login-element mt-5">
            <label class="v-label">PASSWORD</label>
            <input class="v-input mt-1" placeholder="password" type="password" v-model="loginUser.password">
          </div>
          <div class="login-container__btns mt-8">
            <v-btn type="submit" class="btn py-4" size="lg" color="emerald" >Log In</v-btn>
            <v-btn class="btn py-4" size="lg" color="pear" @click="sendToRegister">Register</v-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./login.component.ts"></script>
