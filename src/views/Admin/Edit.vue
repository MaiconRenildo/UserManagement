<template>
  <div>
    <h1>Edição de usuário</h1>
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
        <p>Cargo</p>
        <input type="number" class="input" v-model="role">
        <hr>
        <button @click="update()" class="button is-success">Editar</button>
      </div>
    </div>

    <p>{{name}}</p>
    <p>{{email}}</p>
    <p>{{role}}</p>
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
      let res=await axios.get("http://localhost:8686/user/"+this.$route.params.id,req)
      this.email=res.data.email;
      this.name=res.data.name;
      this.role=res.data.role;
      this.id=res.data.id;
    }catch(err){
      this.$router.push({name:'Home'})//Redireciona o usuário para outra rota
    }



  },
  data(){
    return{
      email:'',
      name:'',
      role:'',
      id:'',
      error:undefined
    }
  },
  methods:{

    async update(){
      const form={
        name:this.name,
        email:this.email,
        role:this.role,
        id:this.id
      }

          let req={
      headers:{
        Authorization:"Bearer "+localStorage.getItem('token')
      }
    }
      console.log(form)
      try{
        let result=await axios.put('http://localhost:8686/user',form,req)
        this.error=undefined
        this.email=''
        this.name=''

        console.log(result)

        //Redireciona o usuário para outra rota
        //this.$router.push({name:'Home'})
        this.$router.push({name:'Users'})

      }catch(err){
        this.error=err.response.data
      } 
    }

  }
}
</script>