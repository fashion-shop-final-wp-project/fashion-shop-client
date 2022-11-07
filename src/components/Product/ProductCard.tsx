import {Rating} from "./Rating";

function ProductCard()
{
    return (
        <article className={"flex flex-col gap-[15px]"}>
            <img className={"border border-1"} src="https://cdn.wtaps.com/upload/save_image/0831135309_630ee935a1205.jpg" alt=""/>
            <section className={"flex gap-[20px] justify-between items-end"}>
                <div className={"flex flex-col gap-[8px]"}>
                    <span className={"text-[14px]"}>VEST / POLY. TAFFETA. FORTLESS, HOW TO COMM</span>
                    <Rating ratingTimes={90} star={3}/>
                </div>
                <div className={"text-[23px] text-csc-E font-bold"}>355$</div>
            </section>
        </article>
    )
}

export {ProductCard}
