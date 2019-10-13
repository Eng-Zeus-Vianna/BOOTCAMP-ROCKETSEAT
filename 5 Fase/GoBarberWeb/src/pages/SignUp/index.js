import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// Lib para validação
import * as Yup from 'yup';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email()
    .required('Insira um email válido'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <img src={Logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="text" name="name" id="" placeholder="Nome completo" />
        <Input type="text" name="email" id="" placeholder="Seu email" />
        <Input
          type="password"
          name="password"
          id=""
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
