<template>
  <div id="app">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      users: []
    }
  },
  created() {
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
