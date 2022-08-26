import { memo } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaListAlt, FaRegListAlt, FaCalendarAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { Container } from "./styles";

import logoImg from "../../assets/img/logo.svg";

function SideNavigation() {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Logo New Or Never" />
      </Link>

      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => isActive ? {opacity: 1} : {opacity: 0.5}}>
            {({ isActive }) => isActive ? <FaListAlt /> : <FaRegListAlt />}
          </NavLink>
          <span>Tarefas</span>
        </li>
        <li>
          <NavLink to="/calendar" style={({ isActive }) => isActive ? {opacity: 1} : {opacity: 0.5}}>
            {({ isActive }) => isActive ? <FaCalendarAlt /> : <FaRegCalendarAlt />}
          </NavLink>
          <span>Calendario</span>
        </li>
      </ul>
    </Container>
  );
}

export default memo(SideNavigation);