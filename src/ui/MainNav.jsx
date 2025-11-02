/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          {/* To prevent full page reloads, 
          we use the NavLink component provided by React Router. 
          This component enables smooth navigation between pages without causing page transitions or reloads.
           We replace the anchor tags with NavLink components 
          and use the to prop to specify the target routes. */}
          <Link to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </Link>
          <li>
            <Link to="/bookings">
              <HiOutlineCalendarDays />
              <span>Bookings</span>
            </Link>
          </li>
          <li>
            <Link to="/cabins">
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <HiOutlineUsers />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </Link>
          </li>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
