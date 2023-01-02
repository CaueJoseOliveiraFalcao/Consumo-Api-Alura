async function BuscaEndereco(){
    try {
        var ConsultaCep = await fetch("https://viacep.com.br/ws/01001000/json/")
        var ConsultaCepConvertida = await ConsultaCep.json()
        console.log(ConsultaCepConvertida)
    }
    catch (erro){
        console.log(erro)
    }
}

BuscaEndereco()