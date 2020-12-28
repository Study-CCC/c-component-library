import React from 'react'
import classNames from 'classnames'

type ButtonSize = 'lg' | 'sm'

type ButtonType = 'default' | 'primary' | 'danger' | 'text' 

interface ButtonPropsTpye{
  size?:ButtonSize,
  type?:ButtonType,
  target?:string,
  onClick?:(e:any)=>void,
  className?:string,
  disabled?:boolean,
  children?: React.ReactNode,
  [propsName:string]:any
}

const Button = (props:ButtonPropsTpye)=>{
  const {
    size,
    type,
    href,
    children,
    className,
    disabled,
    onClick,
    ...rest
  } = props

  const classes = classNames('btn',className,{
    [`btn-${size}`]:size,
    [`btn-${type}`]:type,
    'disabled':disabled
  })
  if(type==='text'){
    return <a className={classes} onClick={onClick} href={href} {...rest}>{children}</a>
  }else{
    return <button className={classes} onClick={onClick} {...rest}>{children}</button>
  }
}
Button.defaultProps = {
  type:"default",
  disabled:false
}
export default Button