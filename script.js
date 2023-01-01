async function BuscaEndereco(){
    try{
        var consutaCep = await fetch("https://viacep.com.br/ws/01001000/json/")
        var ConsultaCepConvertida = await consutaCep.json()
        console.log(ConsultaCepConvertida)
    }
    catch (erro){
        console.log(erro)
    }
}

BuscaEndereco()