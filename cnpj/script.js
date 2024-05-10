function buscarCNPJ() {
    var cnpj = document.getElementById("cnpj").value;
    var url = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação. Status do erro: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            var resultado = `
                <p><strong>Razão Social:</strong> ${data['RAZAO SOCIAL']}</p>
                <p><strong>Nome Fantasia:</strong> ${data['NOME FANTASIA']}</p>
                <p><strong>CNPJ:</strong> ${data.CNPJ}</p>
                <p><strong>Status:</strong> ${data.STATUS}</p>
                <p><strong>CNAE Principal:</strong> ${data['CNAE PRINCIPAL DESCRICAO']}</p>
                <p><strong>Data de Abertura:</strong> ${data['DATA ABERTURA']}</p>
                <p><strong>Endereço:</strong> ${data['LOGRADOURO']}, ${data['NUMERO']} - ${data['BAIRRO']}, ${data['MUNICIPIO']} - ${data.UF}</p>
                <p><strong>CEP:</strong> ${data.CEP}</p>
                <p><strong>Telefone:</strong> (${data.DDD}) ${data.TELEFONE}</p>
                <p><strong>E-mail:</strong> ${data.EMAIL}</p>
            `;
            document.getElementById("resultado").innerHTML = resultado;
        })
        .catch(error => console.error("Erro ao buscar CNPJ:", error));
}
