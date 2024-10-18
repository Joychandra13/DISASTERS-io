import { cards } from "../lib/data";
import { CardSolution } from "./cardsection";
import { NewIncidentCards } from "../lib/data";
import { NewIncidentCardSolution } from "./cardsection";
import { LocationsCards } from "../lib/data";
import { ActivitiesCardSolution } from "./cardsection";
import { LocationsActivitiesCards } from "../lib/data";
import { LocationsDocumentsCards } from "../lib/data";
import { IncidentIconCardSolution } from "./cardsection";
import { IncidentIconCards } from "../lib/data";

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


export const LocationsCard = () => {
  return (
    <section className="pt-[15px]">
        <div >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 lg:gap-[17.5px]">
          {LocationsCards.map((LocationsCard, i) => (
            <CardSolution key={i} {...LocationsCard} />
          ))}
        </div>
        </div>
    </section>
  );
};

export const ActivitiesCard = () => {
  return (
    <section className="pt-[15px]">
        <div >
        <div className=" place-items-center gap-5 lg:gap-[17.5px]">
          {LocationsActivitiesCards.map((ActivitiesCard, i) => (
            <ActivitiesCardSolution key={i} {...ActivitiesCard} />
          ))}
        </div>
        </div>
    </section>
  );
};

export const DocumentsCard = () => {
  return (
    <section className="pt-[15px]">
        <div >
        <div className="place-items-center gap-5 lg:gap-[17.5px]">
          {LocationsDocumentsCards.map((DocumentsCard, i) => (
            <ActivitiesCardSolution key={i} {...DocumentsCard} />
          ))}
        </div>
        </div>
    </section>
  );
};

export const IncidentIconCard = () => {
  return (
    <section className="pt-[15px]">
        <div >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[25px] md:w-[750px] justify-between container mx-auto">
          {IncidentIconCards.map((IncidentIconCard, i) => (
            <IncidentIconCardSolution key={i} {...IncidentIconCard} />
          ))}
        </div>
        </div>
    </section>
  );
};

