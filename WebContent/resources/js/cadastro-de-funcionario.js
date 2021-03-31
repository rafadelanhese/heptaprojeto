var app = new Vue({
	el:"#app",
    data: {
        listaSetores: [],
        listaSetoresHeader: [
			{sortable: false, key: "setor.id", label:"ID"},
			{sortable: false, key: "setor.nome", label:"Nome"}			
		],
		funcionario: {
			nome: '',
			idade: '',
			salario: '',
			email: '',
			setor: ''              
		}    
    },
    created: function(){
        let vm =  this;
        vm.buscaTodosSetores();
    },
    methods:{
        buscaTodosSetores: function(){
			const vm = this;
			axios.get("/funcionarios/rs/setores")
			.then(response => {vm.listaSetores = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
		enviaFormulario: function () {
			axios.post("/funcionarios/rs/funcionarios", this.funcionario)
                 .then((res) => {
                     console.log("Funcionário adicionado com sucesso");
                 })
                 .catch((error) => {
					console.log(error);
                 }).finally(() => {
                     //Perform action in always
            });		
		  }
    }
});