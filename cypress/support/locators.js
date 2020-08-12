
const locators = {

    LISTA_VAGAS: {
        VAGA: posicao => `:nth-child(${posicao}) > .job-list-content > .job-tag > .pull-right > .btn-common`
    },

    CURRICULO: { 
        TELEFONE: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'telefone')]`,
        HANGOUTS: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'skype_hangout')]`,
        ESTADO_CIVIL: `//div[contains(@class,'form-group is-empty') ]//select[contains(@name, 'estado_civil')]`,
        SENIORIDADE: `//div[contains(@class,'form-group is-empty') ]//select[contains(@name, 'senioridade')]`,
        ADRESS: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'complemento')]`,
        NOME_IDIOMA: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'idioma[]')]`,
        NIVEL_IDIOMA: `//div[contains(@class,'form-group is-empty') ]//select[contains(@name, 'nivel_idioma[]')]`,
        BLOCO_NOME_IDIOMA: `//div[contains(@class,'bloco-idiomas') ]//input[contains(@name, 'idioma[]')]`,
        BLOCO_NIVEL_IDIOMA: `//div[contains(@class,'bloco-idiomas') ]//select[contains(@name, 'nivel_idioma[]')]`,
        CURSO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'curso[]')]`,
        INSTITUICAO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'instituicao[]')]`,
        DATA_INICIO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'formacao_dta_inicio[]')]`,
        DATA_TERMINO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'formacao_dta_termino[]')]`,
        NIVEL_FORMACAO: `//div[contains(@class,'form-group is-empty') ]//select[contains(@name, 'nv_formacao[]')]`,
        CARGO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'cargo[]')]`,
        EMPRESA: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'empresa[]')]`,
        EXPERIENCIA_DATA_INICIO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'experiencia_dta_inicio[]')]`,
        EXPERIENCIA_DATA_TERMINO: `//div[contains(@class,'form-group is-empty') ]//input[contains(@name, 'experiencia_dta_termino[]')]`,
        DESCRICAO: `//div[contains(@class,'form-group is-empty') ]//textarea[contains(@name, 'descricao_atividades[]')]`     
    },

    VAGA:{
        CANDIDATAR: '.text-right-j.mobile-hidden > .btn'
    },

    TESTE: {
        ADJETIVOS: (teste,coluna,linha) => `#questionario_${teste} > :nth-child(${coluna}) > :nth-child(${linha}) > .funkyradio-success > label`
    }

}

export default locators;