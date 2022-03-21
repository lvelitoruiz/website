import React, { FunctionComponent } from 'react';

interface IProps {
  menuOpen: boolean,
  onClick:()=>void
}

export const Header: FunctionComponent<IProps> = ({ menuOpen, onClick }) => {
  return (
    <div className='fixed md:hidden flex justify-between z-50 w-full p-6'>
      <p></p>
      <p className='w-[44px] h-[44px] flex justify-center items-center rounded-full bg-white' onClick={ onClick }>
        {
          menuOpen ?
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14.356" width="0.780861" height="20.3024" transform="rotate(45 14.356 0)" fill="#010002"/>
            <rect x="0.000213623" y="0.552185" width="0.780861" height="20.3024" transform="rotate(-45 0.000213623 0.552185)" fill="#010002"/>
          </svg> : 
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.6667" width="18.3333" height="3.66667" fill="#1D1D1D"/>
            <rect x="9.1667" y="11" width="12.8333" height="3.66667" fill="#1D1D1D"/>
            <rect y="5.5" width="22" height="3.66667" fill="#1D1D1D"/>
          </svg>
        }
      </p>
    </div>
  )
}
