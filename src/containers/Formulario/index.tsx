import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, Input, MainContainer, Title } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrarTask } from '../../store/reducers/tarefas'

export const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const addTasks = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrarTask({
        title,
        priority,
        description,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova tarefa</Title>
      <Form onSubmit={addTasks}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>

        <ButtonSave>Cadastrar</ButtonSave>
      </Form>
    </MainContainer>
  )
}
