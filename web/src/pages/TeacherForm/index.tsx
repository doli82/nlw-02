import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

const TeacherForm = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState(0)

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: ''
    },
  ]);

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, {
      week_day: 0,
      from: '',
      to: ''
    }])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=>{
      if(index===position) {
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem;
    })
    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(event: FormEvent){
    event.preventDefault()
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(()=>history.push('/'))
    .catch(()=>alert('Falha ao realizar o cadastro'))
  }
  return (
    <div id="page-teacher-form">
      <PageHeader 
      title="Que incrível que você quer dar aulas." 
      description="O primeiro passo é preencher esse formulário." />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input 
              label="Nome completo" 
              name="name"
              value={name}
              onChange={(event)=>setName(event.target.value)}
              ></Input>
            <Input 
              label="Avatar" 
              name="avatar"
              value={avatar}
              onChange={(event)=>setAvatar(event.target.value)}
              ></Input>
            <Input 
              label="Whatsapp" 
              name="whatsapp"
              value={whatsapp}
              onChange={(event)=>setWhatsapp(event.target.value)}
              ></Input>
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={bio}
              onChange={(event)=>setBio(event.target.value)}
              />
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
            value={subject}
            onChange={(event)=>setSubject(event.target.value)}
              ></Select>
          <Input 
            label="Custo da sua hora aula" 
            name="cost"
            value={cost}
            onChange={(event)=>setCost(Number(event.target.value))}
            ></Input>
          </fieldset>
          
          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
            </legend>
            {scheduleItems.map((scheduleItem, position) => (
              <div key={scheduleItem.week_day} className="schedule-item">
              <Select 
                label="Dia da semana" 
                name="week_day"
                options={[
                  {value: "0", label: "Domingo"},
                  {value: "1", label: "Segunda-feira"},
                  {value: "2", label: "Terça-feira"},
                  {value: "3", label: "Quarta-feira"},
                  {value: "4", label: "Quinta-feira"},
                  {value: "5", label: "Sexta-feira"},
                  {value: "6", label: "Sábado"},
                ]}
                value={scheduleItem.week_day}
                onChange={(event)=>setScheduleItemValue(position, 'week_day', event.target.value)}
              ></Select>
              <Input 
                label="Das" 
                name="from" 
                type="time"
                value={scheduleItem.from}
                onChange={(event)=>setScheduleItemValue(position, 'from', event.target.value)}
                ></Input>
              <Input 
              label="Até" 
              name="to" 
              type="time" 
              value={scheduleItem.to}            
              onChange={(event)=>setScheduleItemValue(position, 'to', event.target.value)}
              ></Input>
            </div>
            ))}
            
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante!<br/>
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
            }
export default TeacherForm
