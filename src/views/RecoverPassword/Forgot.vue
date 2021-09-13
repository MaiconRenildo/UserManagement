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

    <p>{{password}}</p>
  </div>
</template>

<script>
//import axios from "axios"
export default{
  data(){
    return{
      password:'',
      error:undefined
    }
  },
  methods:{

    async forgot(){
  
      const form={
        email:this.email
      }
      //Verifica se o e-mail existe. Se existir, um codigo de recuperação é enviado para o e-mail informado. Após isso muda-se para a rota qu permite a colocação do codigo. Se o codigo for valido e não tiver sido usado, o usuario é movido para a rota de troca de senha. Após trocar a senha o usuário é movido para a rota de login.
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