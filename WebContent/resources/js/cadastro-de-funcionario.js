var app = new Vue({
	el: "#app",
	data: {
		listaSetores: [],
		listaSetoresHeader: [
			{ sortable: false, key: "setor.id", label: "ID" },
			{ sortable: false, key: "setor.nome", label: "Nome" }
		],
		listaFuncionarios: [],
        listaFuncionariosHeader: [
			{sortable: false, key: "funcionario.id", label:"ID"},
			{sortable: false, key: "funcionario.nome", label:"Nome"},
            {sortable: false, key: "funcionario.setor.nome", label:"Setor"},
            {sortable: false, key: "funcionario.salario", label:"Salário"},
            {sortable: false, key: "funcionario.email", label:"Email"},
            {sortable: false, key: "funcionario.idade", label:"Idade"}
		],
		funcionario: {
			id: '',
			nome: '',
			idade: '',
			salario: '',
			email: '',
			setor: []
		},
		errors: []
	},
	created: function () {	
		let vm = this;
		let lf = this;
		vm.buscaTodosSetores();
		lf.buscaTodosFuncionarios();
	},
	methods: {
		buscaTodosSetores: function () {
			const vm = this;
			axios.get("/funcionarios/rs/setores")
				.then(response => {
					vm.listaSetores = response.data;
				}).catch(function (error) {
					vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
				}).finally(function () {
				});
		},
		buscaTodosFuncionarios: function(){
			const lf = this;
			axios.get("/funcionarios/rs/funcionarios")
			.then(response => {lf.listaFuncionarios = response.data;
			}).catch(function (error) {
				lf.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
		enviarFormulario: function (e) {
			if (!this.validarFormulario()) {
				e.preventDefault();
			} else {
				if (!this.funcionario.id) {
					axios({
						method: 'post',
						url: '/funcionarios/rs/funcionarios',
						data: {							
							nome: this.funcionario.nome,
							setor: this.funcionario.setor,
							salario: this.funcionario.salario,
							email: this.funcionario.email,
							idade: this.funcionario.idade
						}
					})
					.then(() => { alert("Funcionário adicionado com sucesso");})
                    .catch((error) => { console.log(error); });   
				} else {
					axios({
						method: 'put',
						url: '/funcionarios/rs/funcionarios/' + this.funcionario.id,
						data: {		
							id: this.funcionario.id,					
							nome: this.funcionario.nome,
							setor: this.funcionario.setor,
							salario: this.funcionario.salario,
							email: this.funcionario.email,
							idade: this.funcionario.idade
						}
					})
					.then(() => { })
                    .catch((error) => { console.log(error); }); 
				}	
			}		
		},
		deletarFuncionario: function(id){			
			axios.delete("/funcionarios/rs/funcionarios/" + id)
			.then(response => {                
                window.location.reload();
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi possível deletar usuário");
			}).finally(function() {
			});
		},
		editarFuncionario(funcionario) {
            this.funcionario = funcionario;
        },
		validarFormulario: function () {
			this.errors = [];

			if (!this.funcionario.nome) {
				this.errors.push('O nome é obrigatório.');
			}
			if (!this.funcionario.idade) {
				this.errors.push('A idade é obrigatória.');
			}
			if (!this.funcionario.salario) {
				this.errors.push('O salário é obrigatório.');
			}
			if (!this.funcionario.email) {
				this.errors.push('O e-mail é obrigatório.');
			} else if (!this.validEmail(this.funcionario.email)) {
				this.errors.push('Utilize um e-mail válido.');
			}
			if (!this.errors.length) {
				return true;
			}
		},
		validEmail: function (email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	}
});