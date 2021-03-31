var app = new Vue({
	el:"#inicio",
    data: {
        listaFuncionarios: [],
        listaFuncionariosHeader: [
			{sortable: false, key: "funcionario.id", label:"ID"},
			{sortable: false, key: "funcionario.nome", label:"Nome"},
            {sortable: false, key: "funcionario.setor.nome", label:"Setor"},
            {sortable: false, key: "funcionario.salario", label:"Salário"},
            {sortable: false, key: "funcionario.email", label:"Email"},
            {sortable: false, key: "funcionario.idade", label:"Idade"}
		]
    },
    created: function(){
        let vm =  this;
        vm.buscaTodosFuncionarios();
    },
    methods:{
        buscaTodosFuncionarios: function(){
			const vm = this;
			axios.get("/funcionarios/rs/funcionarios")
			.then(response => {vm.listaFuncionarios = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
    }
});