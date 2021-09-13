<template>
  <div>
    <h1>Painel ADM</h1><hr>

    <div class="columns is-centered">

      <div :class="{modal:true, 'is-active':showModal}">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card">              
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Você quer realmente deletar este usuário?</p>
                </div>
              </div>
              <footer class="card-footer">
              <a href="#" @click="deleteUser" class="card-footer-item">Sim, quero deletar</a>
              <a href="#" @click="hideModal" class="card-footer-item">Cancelar</a>
            </footer>
            </div>
          </div>
        </div>
        <button @click="hideModal" class="modal-close is-large" aria-label="close"></button>
      </div>

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

            <td><button class="button is-success">Editar</button> | <button @click="showAndDelete(user.id)" class="button is-danger">Deletar</button></td>
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
      users:[],
      showModal:false,
      deleteUserId:-1
    }
  },
  methods:{
    hideModal(){
      this.showModal=false;
    },
    showAndDelete(id){
      this.showModal=true;
      this.deleteUserId=id;
    },
    async deleteUser(){
      let req={
        headers:{
          Authorization:"Bearer "+localStorage.getItem('token')
        }
      }

      try{
        await axios.delete(`http://localhost:8686/user/${this.deleteUserId}`,req)
        console.log('Usuario deletado com sucesso')
        this.users=this.users.filter(u=>u.id!=this.deleteUserId);
      }catch(err){
        console.log(err)
      }
      this.hideModal();
    }
  }
  
}
</script>

<style scoped>

</style>