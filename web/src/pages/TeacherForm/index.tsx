import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: ''
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, {
      week_day: 0,
      from: '',
      to: ''
    }])
  }
  return (
    <div id="page-teacher-form">
      <PageHeader 
      title="Que incrível que você quer dar aulas." 
      description="O primeiro passo é preencher esse formulário." />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome completo" name="name"></Input>
          <Input label="Avatar" name="avatar"></Input>
          <Input label="Whatsapp" name="whatsapp"></Input>
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        
        <fieldset>
        <legend>Sobre a aula</legend>
            <Select 
          label="Matéria" 
          name="subject"
              options={[
            {value: "Eletromagnetismo", label: "Eletromagnetismo"},
            {value: "Física 3", label: "Física 3"},
              ]}
            ></Select>
        <Input label="Custo da sua hora aula" name="cost"></Input>
        </fieldset>
        
        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
          </legend>
          {scheduleItems.map(scheduleItem => (
            <div key={scheduleItem.week_day} className="schedule-item">
            <Select 
              label="Dia da semana" 
              name="week_day"
              value={scheduleItem.week_day}
              options={[
                {value: "0", label: "Domingo"},
                {value: "1", label: "Segunda-feira"},
                {value: "2", label: "Terça-feira"},
                {value: "3", label: "Quarta-feira"},
                {value: "4", label: "Quinta-feira"},
                {value: "5", label: "Sexta-feira"},
                {value: "6", label: "Sábado"},
              ]}
            ></Select>
            <Input label="Das" name="from" type="time" value={scheduleItem.from}></Input>
            <Input label="Até" name="to" type="time" value={scheduleItem.to}></Input>
          </div>
          ))}
          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante!<br/>
            Preencha todos os dados
          </p>

          <button>Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
            }
export default TeacherForm
