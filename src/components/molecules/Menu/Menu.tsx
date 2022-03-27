import React, { FunctionComponent } from 'react';
import { menuLinks } from '../../../enums/IndexText';
import { MenuLink } from '../../atoms/MenuLink/MenuLink';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

interface IProps {
  area: string,
  onClick:()=>void;
}

export const Menu: FunctionComponent<IProps> = ({ area,onClick }) => {

  const items = [
    {
      link: menuLinks.homeLink,
      text: menuLinks.home
    },
    {
      link: menuLinks.aboutLink,
      text: menuLinks.about
    },
    {
      link: menuLinks.projectsLink,
      text: menuLinks.projects
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
          <div className='mt-24'>
            <Paragraph classes={'lato text-sm px-4 mb-1'} text={menuLinks.location} />
            <Paragraph classes={'lato extra-bold text-base px-4 mb-1'} text={menuLinks.phone} />
            <Paragraph classes={'lato extra-bold text-base px-4 mb-1'} text={menuLinks.mail} />
          </div>
        </div>
      </div>
      <div className='fixed z-30 w-full h-full top-0 left-0 bg-web-black opacity-40 duration-1000 ease-in-out' style={{ transform: 'translateX('+area+')'}}>

      </div>
    </>
  )
}
