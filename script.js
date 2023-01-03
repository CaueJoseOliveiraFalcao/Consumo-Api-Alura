function PegaValor(){
    let inputCep = document.querySelector('#cep').value
    BuscaEndereco(inputCep)
}
async function BuscaEndereco(inputCep){
    try {
        var ConsultaCep = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
        var ConsultaCepConvertida = await ConsultaCep.json()
        if (ConsultaCepConvertida.erro){
            throw Error(alert('CEP VALIDO MAS NÃO EXISTENTE'))
            return
        }
        document.querySelector('#endereco').value = ConsultaCepConvertida.logradouro
        document.querySelector('#complemento').value = ConsultaCepConvertida.complemento
        document.querySelector('#bairro').value = ConsultaCepConvertida.bairro
        document.querySelector("#cidade").value = ConsultaCepConvertida.localidade
        document.querySelector("#uf").value = ConsultaCepConvertida.uf
        return ConsultaCepConvertida
    }
    catch (erro){
        console.log(erro)
    }
}

