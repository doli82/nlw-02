import React from 'react'

import iconWhatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/39415174?s=460&u=f8435de293bde7eb6fd3d2509ab82bb87a322601&v=4" />
      <div>
        <strong>Daniel Oliveira</strong>
        <span>Matéria</span>
      </div>
    </header>
    <p>
          Entusiasta das melhores tecnologias.
      <br />
      <br />
          Descrição
    </p>
    <footer>
      <p>
            Preço/hora
        <strong>R$80,00</strong>
      </p>
      <button type="button">
        <img src={iconWhatsapp} alt=""/>
            Entrar em contato
      </button>
    </footer>
  </article>
)

export default TeacherItem
