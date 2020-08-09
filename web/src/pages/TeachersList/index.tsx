import React from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader'

import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'

const TeachersList = (): JSX.Element => (
  <div id="page-teacher-list">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers">
        <Input label="Matéria" name="subject"></Input>
        <Input label="Dia da semana" name="week_day"></Input>
        <Input label="Hora" name="time" type="time"></Input>
      </form>
    </PageHeader>

    <main>
      <TeacherItem />
    </main>
  </div>
)

export default TeachersList
