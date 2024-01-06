<template>
  <div class="bodyInscription">
    <div class="container">
      <h1>INSCRIPTION</h1>
      <form>
        <div class="form-group">
          <label for="username">Nom d'utilisateur :</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail :</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
          <label for="password">Confirmer mon mot de passe :</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
          <form action="./home" method="get">
            <button type="submit">S'inscrire</button>
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