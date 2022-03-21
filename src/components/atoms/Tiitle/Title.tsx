import React, { FunctionComponent } from 'react';

interface IProps {
  stroke: string,
  type: string,
  text: string,
  width: string
}

export const Title: FunctionComponent<IProps> = ({ stroke, type, text, width }) => {
  return (
    <>
      <svg width="50" height="12" viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3L8 9L14 3L20 9L25.5 3L31 9L36.5 3L42.5 9L48.5 3" stroke={stroke} strokeWidth="3"/>
      </svg>
      <h2 className={ width + ' ' + type}>{text}</h2>
    </>
  )
}
