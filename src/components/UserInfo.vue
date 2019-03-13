<template>
    <article class="grid">
      <header class="grid">
        <div class="title-container">
          <h1>Coding Test</h1>
        </div>
      </header>
      <main class="content grid" id="home-content">
        <div class="content-title-container">
          <h2>Accounts</h2>
        </div>
        <section class="grid" id="account-grid">
          <section class="account-column grid" id="active-account-column">
            <div class="account-container-title" id="active-account-container-title">
              <h3>Active</h3>
            </div>
            <div class="account-container active-account">
              <ul class="account-data-list" v-for="user in activeUsers" v-bind:key="user.Id">
                <li><label>Name:</label>{{user.LastName}}, {{user.FirstName}}</li>
                <li><label>Email:</label>{{user.Email}}</li>
                <li><label>Phone Number:</label>{{user.PhoneNumber}}</li>
                <li><label>Amount Due:</label>{{user.AmountDue}}</li>
                <li><label>Due Date:</label>{{user.DueDate}}</li>
              </ul>
            </div>     
          </section>
          <section class="account-column grid" id="overdue-account-column">
            <div class="account-container-title" id="overdue-account-container-title">
              <h3>Overdue</h3>
            </div>
            <div class="account-container overdue-account" >
              <ul class="account-data-list" v-for="user in overdueUsers" v-bind:key="user.Id">
                <li><label>Name:</label>{{user.LastName}}, {{user.FirstName}}</li>
                <li><label>Email:</label>{{user.Email}}</li>
                <li><label>Phone Number:</label>{{user.PhoneNumber}}</li>
                <li><label>Amount Due:</label>{{user.AmountDue}}</li>
                <li><label>Due Date:</label>{{user.DueDate}}</li>
              </ul>
            </div>
          </section>
          <div class="account-column grid" id="inactive-account-column">
            <div class="account-container-title" id="inactive-account-container-title">
              <h3>Inactive</h3>
            </div>
            <div class="account-container inactive-account">
              <ul class="account-data-list" v-for="user in inactiveUsers" v-bind:key="user.Id">
                <li><label>Name:</label>{{user.LastName}}, {{user.FirstName}}</li>
                <li><label>Email:</label>{{user.Email}}</li>
                <li><label>Phone Number:</label>{{user.PhoneNumber}}</li>
                <li><label>Amount Due:</label>{{user.AmountDue}}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer class="grid">
        <p class="copy"> {{date}} </p>
      </footer>
    </article>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    activeUsers: Array,
    inactiveUsers: Array,
    overdueUsers: Array,
    date: Number
  }
}
</script>

<style>
 template {
  height: 100%;
  width: 100%;
  font-family: Roboto, Helvetica, Arial, sans-serif
  }
  article {
    height: 100%;
    grid-template-columns:1fr;
    grid-template-areas:
        "header"
        "main"
        "footer";
    grid-template-rows: 100px 1fr 150px;
  }
  header {
    grid-area: header;
    background-color:#006643;
    color: #fff;
    grid-template-columns: 1% 98% 1%;
  }
  h1 {
    font-size: 3em;
    font-weight: bold;
  }
  h2 {
    font-size: 2em;
    color:#006643;
  }
  h3 {
    display: block;
    font-size: 1.5em;
    color:#006643;
    margin-bottom: 10px;
    font-weight: normal;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
    background-color:#006643;
    color: #fff;
    grid-template-columns: 1% 98% 1%;
    grid-template-rows: 5% 90% 5%;
  }
  .grid {
    display: grid;
  }
  .title-container {
    grid-column-start: 2;
    align-self: center;
  }
  #home-content {
    grid-row-gap: 25px;
    grid-template-rows: 10px 100px auto;
  }
  #account-grid {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-start: 3;
  }
  .account-column {
    grid-template-rows: 3em repeat(2, 10em);
    overflow: scroll;
  }
  .content-title-container {
    justify-self: center;
    height: 1em;
    grid-row-start: 2;
  }
  #overdue-account-container-title > h3{
    color: #B22222;
    margin-bottom: 10px;

  }
  #inactive-account-container-title > h3 {
    color:#808080;
  }
  .account-container {
    justify-self: center;
    height: 5em;
  }
  .account-container-title {
    justify-self: center;
  }
  .account-data-list {
    list-style: none;
  }
  .account-data-list > li {
    margin: 10px 0;
  }
  .account-data-list > li > label {
    font-weight: bold;
    margin: 0 5px 0 0;
  }
  .copy {
    place-self: end;
    grid-row-start: 2;
    grid-column-start: 2;
  }
</style>