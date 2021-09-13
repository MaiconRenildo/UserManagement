<template>
  <div>
    <h1>Painel ADM</h1><hr>
    <div class="columns is-centered">
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
              
        <tbody v-for="user in users" :key="user.id">
          <tr>
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>

            <td v-if="user.role==1">Administrador</td>
            <td v-else>Usuário comum</td> 

            
            <td><button class="button is-success">Editar</button> | <button class="button is-danger">Deletar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import axios from "axios"
export default{

  async created(){

    let req={
      headers:{
        Authorization:"Bearer "+localStorage.getItem('token')
      }
    }
    try{
      let response=await axios.get('http://localhost:8686/user',req)
      this.users=response.data

    }catch(err){
      console.log("errou")
      console.log(err)
    }
  },
  data(){
    return{
      users:[]
    }
  }
  
}
</script>

<style scoped>

</style>