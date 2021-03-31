var app = new Vue({
	el:"#app",
    data: {
        listaSetores: [],
        listaSetoresHeader: [
			{sortable: false, key: "setor.id", label:"ID"},
			{sortable: false, key: "setor.nome", label:"Nome"}			
		]
    },
    created: function(){
        let vm =  this;
        vm.buscaTodosSetores();
    },
    methods:{
        buscaTodosSetores: function(){
			const vm = this;
			axios.get("/rs/setor")
			.then(response => {vm.listaSetores = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
    }
});