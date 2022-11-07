import React from "react"

interface FilterProps extends React.HTMLProps<HTMLDivElement>
{

}

function Filter(props: FilterProps)
{
    return (
        <div className={`flex flex-col gap-[20px] ${props.className}`}>

            <section className={"border border-0 border-t-[1px] border-t-csc-F"}>
                <div className={"text-[25px] uppercase py-[10px] font-bold"}>Category</div>
                <div className={"flex flex-col"}>
                    <span>JACKET</span>
                    <span>LONG PAINT</span>
                    <span>JACKET</span>
                </div>
            </section>

            <section className={"border border-0 border-t-[1px] border-t-csc-F"}>
                <div className={"text-[25px] uppercase py-[10px] font-bold"}>
                    COLOR
                </div>
                <div className={"grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[10px]"}>
                    <div className={"bg-csc-B w-[100%] pt-[100%]"}></div>
                    <div className={"bg-csc-C w-[100%] pt-[100%]"}></div>
                    <div className={"bg-csc-D w-[100%] pt-[100%]"}></div>
                    <div className={"bg-csc-E w-[100%] pt-[100%]"}></div>
                    <div className={"bg-csc-F w-[100%] pt-[100%]"}></div>
                </div>
            </section>

        </div>
    )
}

export {Filter}
