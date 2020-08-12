///<reference types="cypress" />

import '../support/commands'
import loc from '../support/locators'


describe('Validação dos campos', () => {
 
        before(() => {
            cy.visit('https://jobs.solides.com/jack5')
        })

        describe('realizar cadastro', () => {
          
            it('cadastro com validacao', () => {
               
                cy.selecionar_vaga('1')

                cy.registrar_candidato('ana', 'jshfand@gmail.com', '16393727179','852675216')

                cy.curriculo_dados('Analista de qualidade','4000,00','https://www.linkedin.com/in/natali-silva-inacio/','Procuro sempre enfatizar a importância da qualidade nos produtos desenvolvidos.')
           
                cy.curriculo_info_pessoais('05-02-1990','joaomm@gmail.com','3138861131','31984203892','Feminino','joaomm@gmail.com','brasileira','paulista','95.544.888-8','8574123690', 'B', 'SP', '03-07-2010', '16-02-2010','857412036','968574123','Solteiro','Operacional')

                cy.curriculo_midias_sociais('Ana Moreira', "Aninha", "Aninha", "Ana M", "Ana moreira")

                cy.curriculo_endereco('12242840','apartamento','Jardim Esplanada', '191','apt86')

                cy.curriculo_idioma_principal('Português','Fluente')

                cy.adicionar_idioma('Inglês',"Intermediário")

                cy.curriculo_formacao('Ciência da Computação','Universidade Federal de Viçosa','15-02-2011','29-07-2016','Superior Completo')

                cy.curriculo_experiencia('Analista de Qualidade','Sólides Tecnologia','01-01-2020','Experiência como QA')   

                cy.get('#envia_dados').click()

                cy.get('#iniciar-teste').click()

                cy.get(loc.TESTE.ADJETIVOS('1','6','10')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','6','15')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','6','20')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','7','24')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','7','30')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','7','32')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','8','47')).click()
                cy.get(loc.TESTE.ADJETIVOS('1','8','58')).click()

                cy.get('#parte-2').click()

                cy.get(loc.TESTE.ADJETIVOS('2','6','10')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','6','15')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','6','20')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','7','24')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','7','30')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','7','32')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','8','47')).click()
                cy.get(loc.TESTE.ADJETIVOS('2','8','58')).click()           

                //finalizar teste
                cy.get('.col-md-12 > .btn').click() 
            
                // ver vaga
                cy.get(':nth-child(2) > .col-sm-6').click()

            })

        })

 })
