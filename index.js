
 alert("Se estiver em um dispositivo mobile, utilize-o com modo paisagem.")

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
	personagem.addEventListener('mouseenter', () =>{
		const personagemSelecionado = document.querySelector('.selecionado')
		personagemSelecionado.classList.remove('selecionado')

		personagem.classList.add('selecionado')


		const idSelecionado = personagem.attributes.id.value;

		const imagemJogador1 = document.getElementById('personagem-jogador1')
		imagemJogador1.src = `src/css/imagens/${idSelecionado}.png`

		const nomeJogador = document.getElementById('nome-personagem-jogador');
		const nomeSelecionado = personagem.getAttribute('data-name')
		nomeJogador.innerHTML = nomeSelecionado

        const botao = document.querySelector('.play-btn')
        const play = () => botao.classList.toggle('show')
		personagemSelecionado.addEventListener('click', play)
	})
})




