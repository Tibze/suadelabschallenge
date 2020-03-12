<template>
  <header>
    <h2>Suade Labs Challenge</h2>
    <div class="menu-container">
      <ul class="menu">
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/bonus">Bonus</router-link></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
  header {
    padding: 2em 0;
    margin-bottom: 2em;

    h2 {
      font-weight: 700;
    }

    .menu-container {
      position: absolute;
      top: 0.5em;
      right: 0.8em;
    }

    .menu {
      display: flex;

      li {
        list-style-type: none;
        margin-right: 0.7em;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
