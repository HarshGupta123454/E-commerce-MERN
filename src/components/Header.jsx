import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
export default function Header() {
  const Mheader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    height: 4rem;
    padding: 4em;
  `;
  const withouSidebarRoutes = ["/register", "/login", "/forgot"];
  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;
  return (
    <Mheader>
      <NavLink to="/">
        <h3>MY store</h3>
      </NavLink>
      <Nav />
    </Mheader>
  );
}
