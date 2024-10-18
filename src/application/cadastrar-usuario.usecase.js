module.exports = function cadastrarUsuarioUseCase() {
    return async function ({ nome_completo, CPF, telefone, endereço, email }) {
        await usuariosRepository.cadastrar({
            nome_completo,
            CPF,
            telefone,
            endereço,
            email
        });
    }
};