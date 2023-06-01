import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconUser } from 'images/svg/icon_user.svg';
import { getPermission, selectUser, getUserAvatar } from 'redux/auth/selectors';
import css from './userNav.module.scss';

export const MobileUserNav = () => {
  const user = useSelector(selectUser);
  const avatar = useSelector(getUserAvatar);
  const permission = useSelector(getPermission);

  return permission === 'admin' ? (
    <NavLink
      to="/admin"
      className={
        css.btn + ' ' + css['btn--mode-light'] + ' ' + css['btn--size-m']
      }
    >
      {avatar ? (
        <img className={css.avatar} src={avatar} alt="User" />
      ) : (
        <IconUser className={css.avatar} />
      )}
      {user}
    </NavLink>
  ) : (
    <NavLink
      to="/user"
      className={
        css.btn + ' ' + css['btn--mode-light'] + ' ' + css['btn--size-m']
      }
    >
      {avatar ? (
        <img className={css.avatar} src={avatar} alt="User" />
      ) : (
        <IconUser className={css.avatar} />
      )}
      {user}
    </NavLink>
  );
};

export const UserNav = () => {
  const user = useSelector(selectUser);
  const avatar = useSelector(getUserAvatar);
  const permission = useSelector(getPermission);

  return permission === 'admin' ? (
    <NavLink
      to="/admin"
      className={
        css.btn + ' ' + css['btn--mode-dark'] + ' ' + css['btn--size-m']
      }
    >
      {avatar ? (
        <img className={css.avatar} src={avatar} alt="User" />
      ) : (
        <IconUser className={css.avatar} />
      )}
      {user}
    </NavLink>
  ) : (
    <NavLink
      to="/user"
      className={
        css.btn + ' ' + css['btn--mode-dark'] + ' ' + css['btn--size-m']
      }
    >
      {avatar ? (
        <img className={css.avatar} src={avatar} alt="User" />
      ) : (
        <IconUser className={css.avatar} />
      )}
      {user}
    </NavLink>
  );
};
