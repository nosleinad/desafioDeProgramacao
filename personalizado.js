function validarSenhaForca(){
	var senha = document.getElementById('senhaForca').value;
	var forca = 0;
	document.getElementById("impSenha").innerHTML = "<span style='font-weight: bold'> Senha: </span>" + senha;

	if((senha.length >= 0) && (senha.length < 6)){
		forca += 5;
	}	
	
	if((senha.length >= 6) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 15;
	}

	if((senha.length >= 6) && (senha.match(/[@#$%&;*]/))){
		forca += 20;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += 25;
	}

	mostraCaracteres(senha);
	mostrarForca(forca);
}

function mostraCaracteres(senha){
	document.getElementById("mostraCaracteres").innerHTML = "<span style='font-weight: bold'>Caracteres digitados: </span>" + senha.length;
}

function mostrarForca(forca){
	
	if(forca <= 5 ){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000; font-weight: bold' >Fraca</span>";
	}else if((forca > 5) && (forca < 45)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #FFD700; font-weight: bold'>Média</span>";
	}else if((forca >= 45) && (forca <= 75)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #00A85A; font-weight: bold'>Forte</span>";
	}
}