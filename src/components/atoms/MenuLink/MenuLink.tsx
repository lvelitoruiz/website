import React, { FunctionComponent } from 'react';

interface IProps {
  text: string,
  link: string
}

export const MenuLink: FunctionComponent<IProps> = ({ link,text }) => {
  return (
    <a className='menu-link' href={ link }>{ text }</a>
  )
}
