<template>
  <div>
    <h1>Código de Recuperação de senha</h1>
    <hr>
    <div class="columns is-centered">
      <div class="column is-half">

        <div v-if="error!=undefined">
          <div class="notification is-danger">
            <p>{{error}}</p>
          </div>
        </div>
        <p>Código</p>
        <input type="text"  class="input" v-model="code">
        <p>Senha</p>
        <input type="password" placeholder="******" class="input" v-model="password" required><hr>
        <button @click="verification()" class="button is-success">Verificar</button>
      </div>
    </div>


    <p>{{code}}</p>

  </div>
</template>

<script>
import axios from "axios"
export default{
  data(){
    return{
      code:'',
      error:undefined
    }
  },
  methods:{

    async verification(){
  
      const form={
        code:this.code
      }
      /*
      try{
        let result=await axios.post('http://localhost:8686/login',form)
        this.error=undefined
        this.email='',
        this.password=''
        console.log(result)
        localStorage.setItem('token',result.data.token)

        this.$router.push({name:'Home'}) //Redireciona o usuário para outra rota

      }catch(err){
        let msgErro=err.response.data.err
        this.error=msgErro
      } 
      */
      
    }

  }
}
</script>