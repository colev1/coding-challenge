<template>
  <div id="app">
    <UserInfo v-if="users" :users="users"/>
  </div>
</template>

<script>
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'app',
  components: {
    UserInfo
  },
  data() {
    return {
      users: []
    }
  },
  beforeMount() {
    this.fetchUserData()
  },
  methods: {
    async fetchUserData () {
      let url =  'https://frontiercodingtests.azurewebsites.net/api/accounts/getall';
      try {
        const response = await fetch(url)
        const result = await response.json()
        this.users = result
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
