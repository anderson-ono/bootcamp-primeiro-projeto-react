import React from 'react';
import { Title, Form, Repositories } from './styles'
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return(
    <>
      <img src={logoImg} alt="Github explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/57741436?s=460&u=9eb47486620e3f96011d5bb1a2a7553b633264fa&v=4"
          alt="Anderson Ono"/>
          <div>
            <strong>anderson-ono/bootcamp-gostack-desafio-01</strong>
            <p>No description, website, or topics provided.</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/57741436?s=460&u=9eb47486620e3f96011d5bb1a2a7553b633264fa&v=4"
          alt="Anderson Ono"/>
          <div>
            <strong>anderson-ono/bootcamp-gostack-desafio-01</strong>
            <p>No description, website, or topics provided.</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/57741436?s=460&u=9eb47486620e3f96011d5bb1a2a7553b633264fa&v=4"
          alt="Anderson Ono"/>
          <div>
            <strong>anderson-ono/bootcamp-gostack-desafio-01</strong>
            <p>No description, website, or topics provided.</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
