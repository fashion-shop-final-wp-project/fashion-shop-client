import React from "react"
import {MdStarOutline, MdStar} from "react-icons/md"

interface RatingProps extends React.HTMLProps<HTMLDivElement>
{
    star: number
    ratingTimes: number
}

function Rating(props: RatingProps)
{
    return (
        <div className={"flex gap-[8px] items-center"}>
            <div className={"flex text-yellow-500 text-[20px]"}>
                {
                    Array(5).fill(1).map((value, index) => {
                        if (index < props.star) {
                            return <MdStar key={index}/>
                        } else {
                            return <MdStarOutline key={index}/>
                        }
                    })
                }
            </div>
            <div className={"text-[13px] text-"}>({props.ratingTimes})</div>
        </div>
    )
}

export {Rating}
