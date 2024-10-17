import { cards } from "../lib/data";
import { CardSolution } from "./cardsection";
import { NewIncidentCards } from "../lib/data";
import { NewIncidentCardSolution } from "./cardsection";

export const Card = () => {
  return (
    <section className="pt-[40px] pb-[40px]">
        <div >
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5 lg:gap-[25px] mx-auto">
          {cards.map((card, i) => (
            <CardSolution key={i} {...card} />
          ))}
        </div>
        </div>
    </section>
  );
};

export const NewIncidentCard = () => {
  return (
    <section className="pt-[40px] pb-[40px]">
        <div >
        <div className="container md:flex mx-auto justify-center gap-5 lg:gap-[25px] ">
          {NewIncidentCards.map((NewIncidentCard, i) => (
            <NewIncidentCardSolution key={i} {...NewIncidentCard} />
          ))}
        </div>
        </div>
    </section>
  );
};