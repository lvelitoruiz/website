import React, { FunctionComponent } from 'react';

interface IProps {
  text: string,
  link: string,
  classes: string
}

export const Links: FunctionComponent<IProps> = ({ classes,link,text }) => {
  return (
    <a className={ classes } href={ link }>{ text }</a>
  )
}
