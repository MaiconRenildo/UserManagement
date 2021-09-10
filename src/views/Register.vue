<template>
  <div>
    <h1>Registro de usuário</h1>
    <hr>
    <div class="columns is-centered">
      <div class="column is-half">

        <div v-if="error!=undefined">
          <div class="notification is-danger">
            <p>{{error}}</p>
          </div>
        </div>
        <p>Nome</p>
        <input type="text" placeholder="Nome do usuário" class="input" v-model="name">
        <p>E-mail</p>
        <input type="email" placeholder="email@email.com" class="input" v-model="email">
        <p>Senha</p>
        <input type="password" placeholder="******" class="input" v-model="password" required><hr>
        <button @click="register()" class="button is-success">Cadastrar</button>
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

    async register(){
      const form={
        name:this.name,
        email:this.email,
        password:this.password,
        role:0
      }

      try{
        let result=await axios.post('http://localhost:8686/user',form)
        this.error=undefined
        this.email='',
        this.name='',
        this.password=''

        console.log(result)

        //Redireciona o usuário para outra rota
        this.$router.push({name:'Home'})

      }catch(err){
        let msgErro=err.response.data.err
        this.error=msgErro
      } 
    }

  }
}
</script>