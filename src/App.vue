<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <!--<HelloWorld/>-->
    <button @click="dotip">dotip</button>
    <button @click="dorequest">dorequest</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import tip from './utils/tip'
import {mwRequest} from "./utils/mwRequest";
const baseuri ='https://www.easy-mock.com/mock/5ac43277e027650c9f6a8a22/example'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    dotip(){
      tip.success('success')
      tip.warning("warning")

    },
    dorequest(){
      mwRequest(`${baseuri}/mock`).then(function (resp) {
        // console.log(resp)
        console.log(resp.data)
      }).catch(function (error) {
        console.log(error)
      })
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
