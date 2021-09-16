<template>
  <div>
    <h1>Nova Senha</h1>
    <hr>
    <div class="columns is-centered">
      <div class="column is-half">

        <div v-if="error!=undefined">
          <div class="notification is-danger">
            <p>{{error}}</p>
          </div>
        </div>
        <p>Senha</p>
        <input type="password" placeholder="******" class="input" v-model="password" required><hr>
        <button @click="newPass()" class="button is-success">Salvar nova senha</button>
      </div>
    </div>


    <p>{{password}}</p>
    <p>{{id}}</p>
    <p>{{token}}</p>
  </div>
</template>

<script>
import axios from "axios"
export default{
  created(){
    if(this.$route.params.status){
      this.token=this.$route.params.token
      this.id=this.$route.params.id;
    }else{
      this.$router.push({name:'recover'})
    }
  },
  data(){
    return{
      id:'',
      token:'',
      password:'',
      error:undefined
    }
  },
  methods:{

    async newPass(){
      
        const form={
        token:this.token,
        id:this.id,
        password:this.password,
      }

      console.log(this.$route.params.id)
      console.log(this.token)
      try{
        await axios.post('http://localhost:8686/changePassword',form)
        this.$router.push({name:'login'})
      }catch(err){
        this.error=err.response.data
      }
    }
  }
}
</script>