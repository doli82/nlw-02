import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeachersList from './pages/TeachersList'
import TeacherForm from './pages/TeacherForm'

const Routes = ():JSX.Element => (
  <BrowserRouter>
    <Route path="/" component={Landing} exact />
    <Route path="/study" component={TeachersList} />
    <Route path="/give-classes" component={TeacherForm} />
  </BrowserRouter>
)

export default Routes
