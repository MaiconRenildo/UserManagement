<template>
  <div>
    <Navbar/>
    <div class="box">

      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nome" v-model="name">
        </div>
      </div>

      <div class="field">
        <label class="label">E-mail</label>
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

      <button @click="register()" class="button is-success">Cadastrar</button>
    </div>
    <div v-if="error!=undefined">
      <div class="notification is-danger">
        <p>{{error}}</p>
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

    async register(){
      const form={
        name:this.name,
        email:this.email,
        password:this.password,
        role:0
      }

      try{
        await axios.post('http://localhost:8686/user',form)
        this.error=undefined
        this.email='',
        this.name='',
        this.password=''
        this.$router.push({name:'Home'})//Redireciona o usuário para outra rota
      }catch(err){
        let msgErro=err.response.data
        this.error=msgErro
      } 
    }

  }
}
</script>