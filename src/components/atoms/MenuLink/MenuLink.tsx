import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  text: string,
  link: string,
  onClick:()=>void
}

export const MenuLink: FunctionComponent<IProps> = ({ link,text,onClick }) => {

  const navigate = useNavigate();

  const handleLocation = (event: any) => {
    event.preventDefault();
    navigate(link); 
    onClick();
  }; 

  return (
    <a className='menu-link' href={ link } onClick={ handleLocation } >{ text }</a>
  )
}
