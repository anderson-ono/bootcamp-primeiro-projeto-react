import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/57741436?s=460&u=9eb47486620e3f96011d5bb1a2a7553b633264fa&v=4" alt="anderson"></img>
          <div>
            <strong>anderson-ono</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>3</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>

      </RepositoryInfo>

      <Issues>
        <Link to="asdsa">
          <div>
            <strong>repository.full_name </strong>
            <p> repository.description </p>
          </div>

          <FiChevronRight size={20}/>
        </Link>
      </Issues>
    </>
  )
}

export default Repository;
