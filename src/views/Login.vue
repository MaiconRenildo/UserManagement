<template>
  <div>
    <Navbar/>
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box">

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="email@email.com" v-model="email">
            </div>
          </div>

          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input class="input" type="password" placeholder="********" v-model="password">
            </div>
          </div>
          
          <button @click="login()" class="button is-primary" id="bt">Logar</button>
          <div class="buttons"><button @click="forgot()" class="button is-link is-light button is-small navbar-start">Esqueci minha senha</button></div>
        </div>

        <div v-if="error!=undefined">
          <div class="notification is-danger is-small">
            <p>{{error}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Navbar from '@/components/Navbar.vue'
export default{
  data(){
    return{
      email:'',
      name:'',
      password:'',
      error:undefined
    }
  },

  components:{
    Navbar
  },

  methods:{
    async login(){
      const form={
        email:this.email,
        password:this.password,
      }

      let button=document.getElementById('bt')
      button.classList.add('is-loading')
      try{
        let result=await axios.post('http://localhost:8686/login',form)
        this.error=undefined
        this.email='',
        this.password=''
        console.log(result)
        localStorage.setItem('token',result.data.token)
        this.$router.push({name:'Home'}) //Redireciona o usuário para outra rota
      }catch(err){
        let msgErro=err.response.data
        this.error=msgErro
      } 
      button.classList.remove('is-loading')
    },

    forgot(){
      this.$router.push({name:'recover'}) //Redireciona o usuário para outra rota
    }
  }
}
</script>

<style scoped>
#bt{
  margin-bottom: 5px;
}
</style>