describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {

    //Esperando 1 segundo para executar as funções abaixo
    cy.visit('https://meupc.net')

    //Clicando no botão de menu pela classe '.navbar-burger'
    cy.wait(1000)

    cy.get('.navbar-burger').click()

    cy.wait(1000)

    //Clicando no botão de cadastro
    cy
    
    .get('ul.menu-list') //Pegando a ul com a classe ul.menu-list

    .children('li') //Pegando os filhos da ul

    .children('a[href="https://meupc.net/cadastro"]') //Pegando o filho da li que tem o href com o valor 'https://meupc.net'

    .click()

    //Preenchendo o campo nome do cadastro com o valor bruno teste
    cy.get('input[name="nome"]').type('bruno teste')

    //Preenchendo o campo e-mail do cadastro com o valor bruno@exemple.com
    cy.get('input[name="email"]').type('bruno@exemple.com')

    //Preenchendo o campo senha do cadastro com o valor 12345678
    cy.get('input[placeholder="Defina uma senha"]').type('12345678')

    //Clicando no checkbox de aceitar os termos de uso
    cy.get('input[type="checkbox"]').check({ force: true})

    //Clicando no botão cadastrar
    cy.contains('Cadastrar-se').click()

    //Verificando se chegamos na tela final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible')
  })
})
