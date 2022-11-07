import {Logo} from "../Logo";
import {AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {BsBag} from 'react-icons/bs';

function Header() {
   function Navigation() {
      return (
         <nav>
            <ul className={"flex gap-[40px]"}>
               <li>Home</li>
               <li>Shop</li>
               <li>News</li>
               <li>Test</li>
            </ul>
         </nav>
      )
   }

   function ExtraNavigation() {
      return (
         <nav>
            <ul className={"flex text-[13px] text-csc-D gap-[30px]"}>
               <li>Shop</li>
               <li>News</li>
               <li>Test</li>
            </ul>
         </nav>
      )
   }

   function Tools() {
      return (
         <ul className={"flex gap-[18px] text-csc-E text-[25px]"}>
            <li><AiOutlineUser/></li>
            <li><BiSearch/></li>
            <li><BsBag/></li>
         </ul>
      )
   }

   function Slogan() {
      return (
         <section className="">
            <div className={"flex items-center gap-[10px]"}>
               <img className={"h-[15px]"}
                    src="https://cms.nkm-atelier.de/img/nkm-ratings-trusted-shops-bewertungen.png" alt=""/>
               <span className={"text-[13px]"}>4.95/5 Trusted Shops</span>
            </div>
         </section>
      )
   }


   return (
      <header className="border border-0 border-b border-b-csc-B py-[10px] w-9/12 m-auto">
         <section className={"mb-[10px] flex justify-between"}>
            <Slogan/>
            <ExtraNavigation/>
         </section>
         <section className="flex justify-between items-center">
            <Logo/>
            <div className={"flex items-center gap-[50px]"}>
               <Navigation/>
               <Tools/>
            </div>
         </section>
      </header>
   )
}

export {Header}
