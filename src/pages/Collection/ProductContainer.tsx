import {ProductCard} from "../../components/Product";
import React from "react";

interface ProductContainerProps extends React.HTMLProps<HTMLDivElement> {

}

function ProductContainer(props: ProductContainerProps)
{
   return (
      <section className={`grid grid-cols-[1fr_1fr_1fr] gap-x-[30px] gap-y-[50px] ${props.className}`}>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
      </section>
   )
}

export {ProductContainer}
