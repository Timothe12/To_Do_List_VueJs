<template>
  <div class="bodyConnexion">
    <div class="container">
      <h1>CONNEXION</h1>
      <form>
        <div class="form-group">
          <label for="username">Nom d'utilisateur ou E-mail :</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="inscription">
          <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-align-center" href="/inscription">
            Vous n'avez pas de compte ? S'inscrire ici
          </a>
        </div>
        <div class="form-group boutton">
          <form action="./home" method="get">
          <button type="submit">Se connecter</button>
          </form>
        </div>
      </form>
    </div>
  </div>
  <div class="rightDev">
    <p>2023 © To Do List EAFC Project - All rights reserved</p>
  </div>
</template>

<script>

</script>