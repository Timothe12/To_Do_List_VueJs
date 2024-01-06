<template>
  <div class="header">
    <ul class="me-5 mt-4 nav nav-underline justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Se connecter</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/inscription">S'inscrire</router-link>
      </li>
      <li id="leftBorder" class="nav-item">
        <router-link class="nav-link" to="/home">ToDo</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/profil">Profil</router-link>
      </li>
    </ul>
  </div>
  <div class="title">
    <h1><a href="/">TO DO LIST</a></h1>
  </div>
  <router-view></router-view>
</template>