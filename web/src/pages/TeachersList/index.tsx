import React from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader'

import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

const TeachersList = (): JSX.Element => (
  <div id="page-teacher-list">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers">
        <Select 
          label="Matéria" 
          name="subject"
          options={[
            {value: "Eletromagnetismo", label: "Eletromagnetismo"},
            {value: "Eletrônica Aplicada", label: "Eletrônica Aplicada"},
            {value: "Inteligência Artificial", label: "Inteligência Artificial"}
          ]}
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
        ></Select>
        <Input label="Hora" name="time" type="time"></Input>
      </form>
    </PageHeader>

    <main>
      <TeacherItem />
    </main>
  </div>
)

export default TeachersList
