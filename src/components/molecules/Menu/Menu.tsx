import React, { FunctionComponent } from 'react';
import { MenuLink } from '../../atoms/MenuLink/MenuLink';

interface IProps {
  area: string,
  onClick:()=>void;
}

export const Menu: FunctionComponent<IProps> = ({ area,onClick }) => {

  const items = [
    {
      link: './',
      text: 'Home'
    },
    {
      link: './about',
      text: 'About me'
    },
    {
      link: './projects',
      text: 'Projects'
    },
  ]

  const handleParent = () => {
    onClick();
  }

  return (
    <>
      <div className='bg-white h-full duration-500 top-0 left-0 ease-in-out flex items-center justify-center w-[75%] fixed z-40' style={{ transform: 'translateX('+area+')'}}>
        <div className='relative'>
          {
            items.map( ({link,text}) => {
              return <p key={ link }><MenuLink text={text} link={link} onClick={ handleParent } /></p>
            })
          }
        </div>
      </div>
      <div className='fixed z-30 w-full h-full top-0 left-0 bg-web-black opacity-40 duration-1000 ease-in-out' style={{ transform: 'translateX('+area+')'}}>

      </div>
    </>
  )
}
