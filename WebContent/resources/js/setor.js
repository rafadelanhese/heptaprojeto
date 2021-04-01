var setores = new Vue({
    el: "#setores",
    data: {
        listaSetores: [],
        listaSetoresHeader: [
            { sortable: false, key: "setor.id", label: "ID" },
            { sortable: false, key: "setor.nome", label: "Nome" }
        ],
        setor: {
            id: '',
            nome: '',
        },
        errors: []
    },
    created: function () {
        let vm = this;
        vm.buscaTodosSetores();
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
        enviarFormulario: function (e) {
            if (!this.validarFormulario(e)) {
                e.preventDefault();
            } else {
                if (!this.setor.id) {
                    axios({
                        method: 'post',
                        url: '/funcionarios/rs/setores',
                        data: {
                            nome: this.setor.nome
                        }
                    })
                    .then(() => { alert("Setor adicionado com sucesso"); window.location.reload();})
                    .catch((error) => { console.log(error); });                    
                }else{
                    axios({
                        method: 'put',
                        url: '/funcionarios/rs/setores/' + this.setor.id,
                        data: {
                            id: this.setor.id,
                            nome: this.setor.nome
                        }
                    })
                    .then(() => { })
                    .catch((error) => { console.log(error); });                    
                }
            }
        },
        deletarSetor: function (id) {
            axios.delete("/funcionarios/rs/setores/" + id)
                .then(response => {
                    window.location.reload();
                }).catch(function (error) {
                    vm.mostraAlertaErro("Erro interno", "Não foi possível deletar setor");
                });
        },
        editarSetor(setor) {
            this.setor = setor;
        },
        validarFormulario: function () {
            this.errors = [];

            if (!this.setor.nome) {
                this.errors.push('O nome é obrigatório.');
            }
            if (!this.errors.length) {
                return true;
            }
        }
    }
});