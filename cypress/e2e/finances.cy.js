//Chamada inicial para o site do DevFinance (verificar atalho para fazer o describe corretamente)
describe('Transações', () => {
    it('Cadastrar um entrada', () => {
        //comando para chamar a URL 
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        criarTransacao("Freelance 2", 300)

        //Fazendo um assert para ver se tem uma linha da coluna com o texto digitado
        cy.get("tbody tr td.description").should("have.text", "Freelance 2")
    });
    
    it('Cadastrar uma saída', () => {
        //comando para chamar a URL 
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        criarTransacao("Cinema", -55)

        //Fazendo um assert para ver se tem uma linha da coluna com o texto digitado
        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });
});

//Funcçao para cadastrar tanto entrado como sáida passando a descrição e valor como parâmetro
function criarTransacao(descricao, valor){
  //comando para fazer buscar um elemento que contém o texto informado
  cy.contains("Nova Transação").click()

  //comando para fazer interação com o campo descrição 
  cy.get('#description').type(descricao)

  //comando para fazer interação com o campo valor
  cy.get('#amount').type(valor)

  //comando para fazer interação com o campo Data
  cy.get('#date').type("2023-06-17")
  
  //Salvando a transação, pode ser utilizado também o contains button + o texto "Salvar" (cy.contains('button', 'Salvar'))
  cy.get('button').click()
}