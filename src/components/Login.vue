<script>
import { ref } from 'vue'
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
    * {
      font-family: 'Outfit', sans-serif;
      font-weight: 100;
      
    }
    body {
      background: rgb(5,5,80);     
      background: linear-gradient(90deg, rgba(5,5,80,1) 6%, rgba(149,110,156,1) 100%);
    }

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 90vh;
    }

    .container {
      width: 40vw;
      display: flex;
      flex-direction: column;
      padding: 0 2vw 0 2vw;
    }

    span {
      color: #fff;
      font-size: 2vw;
      display: flex;
      justify-content: center;
      padding: 4vh 0 1vh 0;
    }

    header {
      color: #fff;
      font-size: 2vw;
      display: flex;
      justify-content: center;
      padding: 1vh 0 1vh 0;
    }
    .input-field {
      display: flex;
      flex-direction: row;
      width: 41vw;
      margin-bottom: 2vh;
      border-radius: 3vh;
      background: rgba(255, 255, 255, 0.1);
    }
    .input {
      height: 4vh;
      width: 39vw;
      border: none;
      outline: none;
      margin-left: 1vw;
      color: #fff;
      background: none;
    }

    i {
      position: static;
      align-items: center;
      color: #fff;
      width: auto;
      margin: auto;
      padding-right: 1vw;
    }

    ::-webkit-input-placeholder{
      color: #fff;
      font-size: 1vw;
      text-align: center;
    }

    .submit {
      border: none;
      border-radius: 3vh;
      font-size: 2.5vh;
      width: 41vw;
      height: 4vh;
      outline: none;
      background: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transition: 0.3s;
    }

    .submit:hover{
      box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.3);
    }

    .bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 1.5vh;
      color: #fff;
      margin-top: 1vh;
    }

    .left {
      display: flex;
    }

    label a{
      color: #fff;
      text-decoration: none;
    }

    #check {
      width: 1vw;
    }
</style>

<template>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="box">
    <div class="container">
      <div class="top-header">
        <span>Have an account?</span>
        <header>Login</header>
      </div>

      <div class="input-field">
        <input type="text" class="input" placeholder="Username" required>
        <i class="bx bx-user"></i>
      </div>

      <div class="input-field">
        <input type="password" class="input" placeholder="Password" required>
        <i class="bx bx-lock-alt"></i>
      </div>

      <div class="input-button">
        <input type="submit" class="submit" value="Login">
      </div>

      <div class="bottom">
        <div class="left">
          <input type="checkbox" id="check">
          <label for="check"> Remember me</label>
        </div>
        <div class="right">
          <label><a href="#">Forgot password?</a></label>
        </div>
      </div>
    </div>
  </div>
</template>
