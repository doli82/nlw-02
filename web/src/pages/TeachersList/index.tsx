import React, { useState, FormEvent } from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

const TeachersList = (): JSX.Element => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(event: FormEvent){
    event.preventDefault()
    const response = await api.get('classes', {
      params:{
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            label="Matéria" 
            name="subject"
            options={[
              {value: "Eletromagnetismo", label: "Eletromagnetismo"},
              {value: "Eletrônica Aplicada", label: "Eletrônica Aplicada"},
              {value: "Inteligência Artificial", label: "Inteligência Artificial"}
            ]}
            value={subject}
            onChange={(event)=>setSubject(event.target.value)}
          ></Select>
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
            value={week_day}
            onChange={(event)=>setWeekDay(event.target.value)}
          ></Select>
          <Input 
          label="Hora" 
          name="time" 
          type="time"          
          value={time}
          onChange={(event)=>setTime(event.target.value)}
          ></Input>
          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher)=>(<TeacherItem key={teacher.id} teacher={teacher} />))}
      </main>
    </div>
  )
        }
export default TeachersList
