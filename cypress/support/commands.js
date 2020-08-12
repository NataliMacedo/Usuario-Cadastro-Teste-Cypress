import loc from './locators'

Cypress.Commands.add('selecionar_vaga', (posicao) => {
    cy.get(loc.LISTA_VAGAS.VAGA(posicao)).click()
    cy.get(loc.VAGA.CANDIDATAR).click()
})

Cypress.Commands.add('registrar_candidato', (nome,email,cpf,senha) => {
    cy.get('#switcher-registrar').click()
    cy.get('#nome').type(nome)
    cy.get('#sender-email').type(email)
    cy.get('#cpf').type(cpf)
    cy.get('#password').type(senha)
    cy.get('#confirma_senha').type(senha)
    cy.get('#politica_privacidade').check()
    cy.get('#registrar_button').click()
})

Cypress.Commands.add('curriculo_dados', (profissao,salario,video,sobre) => {
    cy.get('#headline').type(profissao)
    cy.get('#pretensao_salarial').type(salario)
    cy.get('#url_video_apresentacao').type(video)
    cy.get('#sobre_mim').type(sobre)
})

Cypress.Commands.add('curriculo_info_pessoais', (nascimento,email,telefone,celular,genero,hangouts,nacionalidade,naturalidade,rg,cnh,categoria,emissao,data_habilitacao,data_emissao,ctps_num,ctps_serie,estado_civil,senioridade) => {
    cy.get('#data_nascimento').type(nascimento)
    cy.get('#email_secundario').type(email)
    cy.xpath(loc.CURRICULO.TELEFONE).type(telefone)
    cy.get('#celular').type(celular)
    cy.get('#sexo').select(genero)
    cy.xpath(loc.CURRICULO.HANGOUTS).type(hangouts)
    cy.get('#nacionalidade').type(nacionalidade)
    cy.get('#naturalidade').type(naturalidade)
    cy.get('#rg').type(rg)
    cy.get('#cnh').type(cnh)
    cy.get('#cnh_categoria').type(categoria)
    cy.get('#cnh_uf').type(emissao)
    cy.get('#cnh_data_primeira_habilitacao').type(data_habilitacao)
    cy.get('#cnh_data_emissao').type(data_emissao)
    cy.get('#ctps_num').type(ctps_num)
    cy.get('#ctps_serie').type(ctps_serie)
    cy.xpath(loc.CURRICULO.ESTADO_CIVIL).select(estado_civil)
    cy.xpath(loc.CURRICULO.SENIORIDADE).select(senioridade)
})

Cypress.Commands.add('curriculo_midias_sociais', (linkedin,twitter,facebook,instagram,youtube) => {
    cy.get('#linkedin').type(linkedin)
    cy.get('#twitter').type(twitter)
    cy.get('#facebook').type(facebook)
    cy.get('#instagram').type(instagram)
    cy.get('#youtube').type(youtube)
})

Cypress.Commands.add('curriculo_endereco', (cep,logradouro,bairro,numero,adress) => {
    cy.get('#cep').type(cep)
    cy.get('#logradouro').type(logradouro)
    cy.get('#bairro').type(bairro)
    cy.get('#numero').type(numero)
    cy.xpath(loc.CURRICULO.ADRESS).type(adress)
    //cy.get('#cidade').type('São José dos Campos')
    //cy.get('#estado').type('SP')
})

Cypress.Commands.add('curriculo_idioma_principal', (nome,nivel) => {
    cy.xpath(loc.CURRICULO.NOME_IDIOMA).type(nome)
    cy.xpath(loc.CURRICULO.NIVEL_IDIOMA).select(nivel)
})

Cypress.Commands.add('adicionar_idioma', (nome,nivel) => {
    cy.get('.adiciona-idioma').click()
    cy.xpath(loc.CURRICULO.BLOCO_NOME_IDIOMA).type(nome)
    cy.xpath(loc.CURRICULO.BLOCO_NIVEL_IDIOMA).select(nivel)
})

Cypress.Commands.add('curriculo_formacao', (curso,instituicao,data_inicio,data_termino,nivel) => {
    cy.xpath(loc.CURRICULO.CURSO).type(curso)
    cy.xpath(loc.CURRICULO.INSTITUICAO).type(instituicao)
    cy.xpath(loc.CURRICULO.DATA_INICIO).type(data_inicio)
    cy.xpath(loc.CURRICULO.DATA_TERMINO).type(data_termino)
    cy.xpath(loc.CURRICULO.NIVEL_FORMACAO).select(nivel)
})

Cypress.Commands.add('curriculo_experiencia', (cargo,empresa,data_inicio,descricao) => {
    cy.xpath(loc.CURRICULO.CARGO).type(cargo)
    cy.xpath(loc.CURRICULO.EMPRESA).type(empresa)
    cy.xpath(loc.CURRICULO.EXPERIENCIA_DATA_INICIO).type(data_inicio)
    cy.get('.exp_em_andamento').check()
    cy.xpath(loc.CURRICULO.DESCRICAO).type(descricao)
})







