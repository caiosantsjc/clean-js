## Dados

Usuário -> [nome_completo, CPF, telefone, endereço, email]
Livro -> [nome, quantidade, autor, genero, ISBN]
Empréstimo -> [usuario_id, livro_id, data_retorno, data_devolucao, data_saida]

## Escopo

É uma biblioteca que pretende com o sistema controlar entrada e saída de livros.

## Funcionalidades


 -> CADASTRAR OS LIVROS DA BIBLIOTECA;
 -> PODER EMPRESTAR OS LIVROS DA BIBLIOTECA PARA OS USUÁRIOS;
 -> BUSCAR OS REGISTROS DE EMPRÉSTIMOS.

# UseCases (Regras de Negócio)
    -> Cadastrar Usuário; 
        * CPF ou E-mail devem ser únicos!
    
    -> Buscar Usuário pelo CPF
        * Retornar um usuário ou vazio!
    
    -> Cadastrar um novo Livro
        * ISBN deve ser único!
    
    -> Buscar livro pelo nome ou ISBN
        * Retornar um livro ou vazio!

    -> Emprestar Livro ao Usuário
        * Data de retorno não pode ser antes que a data de saída!
        * Um mesmo usuário não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo!
        * Um usuário pode estar com mais de um livro com ISBN diferente ao mesmo tempo!
        * Ao cadastrar empréstimo, será enviado um email automaticamente ao usuário informando:
            Nome do livro,
            Nome do Usuário,
            CPF,
            Data de Saída,
            Data de Retorno.
    
    -> Devolver o livro emprestado
        * Caso o usuário atrase, multa fixa de 10,00.

    -> Mostrar todos os empréstimos pendentes com:
        Nome do livro,
        Nome do Usuário,
        CPF,
        Data de Saída,
        Data de Retorno.
        * Ordenados pela data de retorno mais antiga!