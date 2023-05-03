<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseInit.js";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  data () {
      return {
          email: "",
          pass: "",
          store: useStore(),
          router: useRouter(),
      }
  },
  methods: {
    async login() {
      try {
        await this.store.dispatch('login', {
          email: this.email,
          password: this.pass
        });
        this.router.push("/");
      } catch (err) {
        window.alert(err);
      }
    },
    
    async loginGoogle() {
      try {
        await this.store.dispatch('loginGoogle', {});
        this.router.push("/");
      } catch (err) {
        window.alert(err);
      }
    },
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
    * {
      font-family: 'Outfit', sans-serif;
      font-weight: 100;
      
    }
    body {
      background: linear-gradient(90deg, rgba(5,5,80,1) 6%, rgba(149,110,156,1) 100%);
    }

    .container {
      margin: 0 auto 0 auto;
      width: 80vh;
      max-width: 80vw;
      padding: 0 2vw 0 2vw;
      text-align: center;
    }
    .box {
      width: 100%
    }

    span {
      color: #fff;
      padding: 4vh 0 1vh 0;
    }

    header {
      color: #fff;
      font-size: 3vh;
      display: flex;
      justify-content: center;
      padding: 1vh 0 1vh 0;
    }
    .input-field {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-bottom: 2vh;
      border-radius: 3vh;
      background: rgba(255, 255, 255, 0.1);
      text-align: center;
    }
    .input {
      height: 4vh;
      width: 100%;
      border: none;
      outline: none;
      color: #fff;
      text-align: center;
      background: none;
    }

    i {
      align-items: center;
      color: #fff;
      width: auto;
      margin: auto;
    }

    ::-webkit-input-placeholder{
      color: #fff;
      font-size: 2vh;
      text-align: center;
    }

    .submit {
      border: none;
      border-radius: 3vh;
      font-size: 2.5vh;
      width: 100%;
      height: 4vh;
      outline: none;
      background: rgba(77, 34, 155, 0.8);
      cursor: pointer;
      transition: 0.3s;
    }

    .submit:hover{
      box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.3);
    }

    .bottom {
      display: flex;
      justify-content: center;
      font-size: 1.5vh;
      color: #fff;
      margin-top: 1vh;
    }
    

    .que{
      color: white;
      text-decoration: none;
    }
</style>

<template>

<div class="box">
    <div class="container">
      <div class="top-header">
        <span>Have an account?</span>
        <header>Login</header>
      </div>

      <div class="input-field">
        <input type="text" class="input" v-model="email" placeholder="Username" required>
        <i class="bx bx-user"></i>
      </div>

      <div class="input-field">
        <input type="password" class="input" v-model="pass" placeholder="Password" required>
        <i class="bx bx-lock-alt"></i>
      </div>

      <div class="input-button">
        <input type="submit" class="submit" v-on:click="this.login();" value="Login">
      </div>

      <div class="bottom">
        <div class="right">
          <a class="que" href="/register">Don't have an account?</a>
        </div>
      </div>

      <div class="input-button">
        <button v-on:click="this.loginGoogle();">Login with Google</button>
      </div>
    </div>
  </div>
</template>
