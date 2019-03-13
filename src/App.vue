<template>
  <div id="app">
    <UserInfo :activeUsers="activeUsers" 
    :inactiveUsers="inactiveUsers" 
    :overdueUsers="overdueUsers" 
    :date="date"/>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'
import cleanUserInfo from './helpers/cleanUserInfo.js'

export default {
  name: 'app',
  components: {
    UserInfo
  },
  data() {
    return {
      activeUsers: [],
      inactiveUsers: [],
      overdueUsers: []
    }
  },
  beforeMount() {
    this.fetchUserData()
    this.date = new Date().getFullYear()
  },
  methods: {
    async fetchUserData () {
      //used CORS proxy to get around CORS error
      let url =  'https://cors-anywhere.herokuapp.com/https://frontiercodingtests.azurewebsites.net/api/accounts/getall';
      try {
        const response = await fetch(url)
        const result = await response.json()
        let allUsers = cleanUserInfo(result)
        allUsers.forEach(user => {
          switch(user.AccountStatusId) {
            case 0: 
              this.activeUsers.push(user)
              break;
            case 1:
              this.inactiveUsers.push(user)
              break;
            case 2: 
              this.overdueUsers.push(user)
              break;
          }
        })
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
#app {
    height: 100%;
    width: 100vw;
    margin-top: -4px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
