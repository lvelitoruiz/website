import React, { FunctionComponent } from 'react';

interface IProps {
  text: string,
  classes: string
}

export const Paragraph: FunctionComponent<IProps> = ({ text, classes }) => {
  
  return(
    <p className={ classes }>{ text }</p>
  )

}
