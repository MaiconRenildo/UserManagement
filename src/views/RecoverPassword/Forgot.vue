<template>
  <div>
    <h1>Recuperação de senha</h1>
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
        <button @click="forgot()" class="button is-success">Confirmar</button>
      </div>
    </div>

    <p>{{email}}</p>
  </div>
</template>

<script>
import axios from 'axios'
//import axios from "axios"
export default{
  data(){
    return{
      email:'',
      error:undefined
    }
  },
  methods:{

    async forgot(){
  
      const form={
        email:this.email
      }

      try{
        await axios.post('http://localhost:8686/recoverPassword',form)
        
        this.$router.push({name:'tokenValidate',params:{email:this.email,status:true}}) //Redireciona o usuário para outra rota
      }catch(err){
        this.error=err.response.data
      }
            
    }
  }
}
</script>