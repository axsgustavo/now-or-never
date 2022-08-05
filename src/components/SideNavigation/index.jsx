import { Link, NavLink } from "react-router-dom";

import { useTasks } from "../../hooks/useTasks";

import { BiHomeAlt } from 'react-icons/bi';
import { CgList } from 'react-icons/cg';

import { Container } from "./styles";

import logoImg from "../../assets/img/logo.svg";

export function SideNavigation() {
  const { tasks } = useTasks();

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Logo New Or Never" />
      </Link>

      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive  }) => isActive  ? {opacity: 1} : {opacity: 0.5}}
          >
            <BiHomeAlt size={30} />
          </NavLink>
          <span>Inicio</span>
        </li>
        {/* {folders.length > 0 && (
          <li>
            <NavLink 
              to="/foledrs"
              style={({ isActive  }) => isActive  ? {opacity: 1} : {opacity: 0.5}}
            >
              <CgList size={30} />
            </NavLink>
            <span>Pastas</span>
          </li>
        )} */}
      </ul>
    </Container>
  );
}