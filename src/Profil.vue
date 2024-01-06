<template>
  <div class="bodyProfil">
    <div class="container">
      <h1>MON PROFIL</h1>
      <form>
        <div class="form-group">
          <label for="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom :</label>
          <input type="text" id="prenom" name="prenom" required>
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
          <label for="email">Numéro de téléphone</label>
          <input type="tel" id="phone" name="phone" placeholder="+32" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
        </div>
        <div class="form-group">
          <label for="email">Addresse (facultatif)</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <form action="./home" method="get">
            <button type="submit">Modifier</button>
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