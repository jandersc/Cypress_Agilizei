//Chamada inicial para o site do DevFinance (verificar atalho para fazer o describe corretamente)
describe('Transações', () => {
    it('Cadastrar um entrada', () => {
        //comando para chamar a URL 
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        //comando para fazer buscar um elemento que contém o texto informado
        cy.contains("Nova Transação").click()

        //comando para fazer interação com o campo descrição 
        cy.get('#description').type("Freelance")

        //comando para fazer interação com o campo valor
        cy.get('#amount').type(200)

        //comando para fazer interação com o campo Data
        cy.get('#date').type("2023-06-17")

        //Salvando a transação, pode ser utilizado também o contains button + o texto "Salvar" (cy.contains('button', 'Salvar'))
        cy.get('button').click()

        //Fazendo um assert para ver se tem uma linha da coluna com o texto digitado
        cy.get("tbody tr td.description").should("have.text", "Freelance")
    });
});