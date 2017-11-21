const linha=document.getElementById('linha')

let variavel=[
	{
		imagem:'images/tijolo.jpg',
		texto:'meu tijolo'
	},
	{
		imagem:'images/pedra.jpg',
		texto:'minha pedra'
	},
	{
		imagem:'images/cimento.jpg',
		texto:'minha cimento'
	}
]

for(let i in variavel){
const col=document.createElement('div')
const card=document.createElement('div')
const cardImage=document.createElement('div')

const image=document.createElement('img')

const cardTitle=document.createElement('span')

const cardContent=document.createElement('div')

const p=document.createElement('p')

col.classList.add('col','s6','m5')
card.classList.add('card')
cardImage.classList.add('card-image')

cardTitle.classList.add('card-title')
cardContent.classList.add('card-content')

p.innerHTML=variavel[i].texto

image.src=variavel[i].imagem

cardContent.appendChild(p)

cardImage.appendChild(image)
cardImage.appendChild(cardTitle)
card.appendChild(cardImage)
card.appendChild(cardContent)

col.appendChild(card)

linha.appendChild(col)


}



