import {Filter} from "./Filter";
import {ProductContainer} from "./ProductContainer";
import {TopProductImageContainer} from "./TopProductImageContainer";
import React from "react"

function Collection()
{
   return (
      <div className={"w-9/12 m-auto"}>
         <TopProductImageContainer className={"mb-[30px]"}/>
         <div className={"grid grid-cols-[300px_3.5fr] gap-[30px]"}>
            <div className={"relative"}>
               <Filter className={"w-[300px] h-[100vh]"}/>
            </div>
            <ProductContainer/>
         </div>
      </div>
   )
}

export {Collection}
