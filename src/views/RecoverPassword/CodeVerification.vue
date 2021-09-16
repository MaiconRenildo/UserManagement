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
        <input type="password" placeholder="******" class="input" v-model="email" required><hr>
        <button @click="verification()" class="button is-success">Verificar</button>
      </div>
    </div>

    <p>{{code}}</p>
    <p>{{email}}</p>

  </div>
</template>

<script>
import axios from 'axios'
export default{
  created(){
    if(this.$route.params.status){
      this.email=this.$route.params.email
    }else{
      this.$router.push({name:'recover'})
    }
  },
  data(){
    return{
      email:'',
      code:'',
      error:undefined
    }
  },
  methods:{

    async verification(){
      const form={
        token:this.code
      }
      try{
        let result=await axios.post('http://localhost:8686/tokenValidate',form)
        let id=result.data.id
        this.$router.push({name:'newPassword',params:{id:id,token:this.code,status:true}})
      }catch(err){
        this.error=err.response.data
      }
    }

  }
}
</script>