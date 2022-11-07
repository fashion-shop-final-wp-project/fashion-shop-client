import React from "react"
import {Button} from "../../components/Core"

interface TopProductImageContainerProps extends React.HTMLProps<HTMLDivElement>
{

}

function TopProductImageContainer(props: TopProductImageContainerProps)
{
    return (
        <section className={`relative ${props.className}`}>
            <div className={`grid grid-cols-[1fr_1fr_1fr] gap-[30px] p-[25px] bg-[#0d0d0d]`}>
                <img src="https://cdn.wtaps.com/asset/img/visual/2022aw/07/visual3.jpg" alt=""/>
                <img src="https://cdn.wtaps.com/asset/img/visual/2022aw/07/visual4.jpg" alt=""/>
                <img src="https://cdn.wtaps.com/asset/img/visual/2022aw/07/visual1.jpg" alt=""/>
            </div>
            <div className={"px-[150px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center font-bold"}>
                <div className={"text-[50px] whitespace-nowrap mb-[15px] text-csc-A"}>VISUAL 03-2022-2nd COLLECTION</div>
                <div className={"flex gap-[30px] justify-center"}>
                    <Button>READ MORE</Button>
                    <Button>DISCOVER</Button>
                </div>
            </div>
        </section>
    )
}

export {TopProductImageContainer}