<template>
  <div>
    <h1>Login</h1>
    <hr>
    <div class="columns is-centered">
      <div class="column is-half">

        <div v-if="error!=undefined">
          <div class="notification is-danger">
            <p>{{error}}</p>
          </div>
        </div>
        <p>E-mail</p>
        <input type="email" placeholder="email@email.com" class="input" v-model="email">
        <p>Senha</p>
        <input type="password" placeholder="******" class="input" v-model="password" required><hr>

        <div class="buttons"><button @click="forgot()" class="button is-link is-light">Esqueci minha senha</button></div>
        <button @click="login()" class="button is-success">Logar</button>
      </div>
    </div>

    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{password}}</p>
  </div>
</template>

<script>
import axios from "axios"
export default{
  data(){
    return{
      email:'',
      name:'',
      password:'',
      error:undefined
    }
  },
  methods:{

    async login(){
      const form={
        email:this.email,
        password:this.password,
      }
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
    },

    forgot(){
      this.$router.push({name:'recover'}) //Redireciona o usuário para outra rota
    }
    
  }
}
</script>