export const CardSolution= ({ title, img, des, money }) => (
    <div >
        <div className="pt-[35px] transition-transform duration-300 ease-in-out transform hover:p-6 hover:rounded-md hover:scale-105 hover:shadow-md">
            <img src={img} alt= {title} />
            <div className="mt-[20px]">
                <h1 className="font-bold text-[16px] text-primary">{title}</h1>
                <p className="text-[14px] text-secondary">{des}</p>
                <h1 className="font-bold text-[16px] text-primary">{money}</h1>
            </div>
        </div>
    </div>
  );

export const NewIncidentCardSolution= ({ title, img, des}) => (
    <div >
        <div className="pt-[35px] mx-auto mt-5 w-[235px] h-[300px] rounded-[10px] border-[1px] py-[25px] px-[20px] bg-[#F4F4F5] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
            <img src={img} alt= {title} />
            <div className="mt-[68px] w-[195px] h-[95px]">
                <h1 className="font-bold text-[16px] text-primary mb-[22px] w-[170px]">{title}</h1>
                <p className="text-[14px] text-secondary mb-[25px]">{des}</p>
            </div>
        </div>
    </div>
  );


  export const ActivitiesCardSolution= ({ title, img, des, money }) => (
    <div >
        <div className="mt-4 max-w-full] py-[15px] px-[10px] flex bg-[#F4F4F5] border rounded-[10px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
            <img src={img} alt= {title} />
            <div className="ms-[20px] ">
                <h1 className="font-bold text-[16px] text-primary">{title}</h1>
                <p className="text-[14px] text-secondary">{des}</p>
                <h1 className="font-bold text-[16px] text-primary">{money}</h1>
            </div>
        </div>
    </div>
  );

  export const IncidentIconCardSolution= ({ title, img }) => (
    <div >
        <div className="w-[180px] py-[22px] px-[20px] flex bg-[#F4F4F5] rounded-[10px] text-secondary hover:bg-button text-sm hover:text-white border-[1px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
            <img className="w-[25px] h-[25px]" src={img} alt= {title} />
            <div className=" ms-2 ">
                <h1 className="text-[12px]">{title}</h1>
            </div>
        </div>
    </div>
  );