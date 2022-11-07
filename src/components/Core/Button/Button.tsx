import React from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>
{

}

function Button(props: ButtonProps)
{
    return <button {...props} className={"bg-csc-A py-[10px] px-[25px] rounded-3xl"}>{props.children}</button>
}

export {Button}