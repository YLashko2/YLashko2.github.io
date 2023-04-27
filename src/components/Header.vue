<script>
export default {
    
}
</script>

<template>
    <header>
        <img class="logo" src="/src/assets/BiletX.svg" alt="logo">
        <nav>
        <ul class="nav_links">
            <li id="dropdown-menu"><a class="header-links" href="#">Places</a></li>
            <li id="dropdown-menu"><a class="header-links" href="#">Events</a></li>
            <li ><a href="#">Search</a></li>
        </ul>
        </nav>
        <div class="account-container">
        <a href="#">Account</a><img class="account-logo" src="/src/assets/vector.svg" alt="acc-logo">
    </div>
  </header>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap');
    * {
      letter-spacing: 2px;
    }

    .account-logo {
      width: 4vh;
    }

    li, a {
      font-family: 'Outfit', sans-serif;
      font-weight: 100;
      color: white !important;
      text-decoration: none !important;
    }
    header {
      display: flex;
      padding: 5vh;
    }

    .logo {
      cursor: pointer;
      margin-right: flex;
      width: 20%;
    }

    .nav_links {
      display: flex;
      width: 80%;
    }

    .nav_links li {
      padding: 30px 30px; 
      width: auto;
      list-style-type: none;
    }

    .header-links {
      transition: all 0.3s ease 0s;
    }

    .header-links:hover {
      color: #eeaef8!important;
    }

    .account-container {
      margin-left: auto;
      padding: 30px 30px;
      display: flex;
    }
</style>
