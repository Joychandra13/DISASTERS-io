export const CardSolution= ({ title, img, des, money }) => (
    <div >
        <div className="pt-[35px]">
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
        <div className="pt-[35px] mx-auto mt-3 w-[235px] h-[300px] rounded-[10px] border-[1px] py-[25px] px-[20px] bg-[#F4F4F5]">
            <img src={img} alt= {title} />
            <div className="mt-[68px] w-[195px] h-[95px]">
                <h1 className="font-bold text-[16px] text-primary mb-[22px] w-[170px]">{title}</h1>
                <p className="text-[14px] text-secondary mb-[25px]">{des}</p>
            </div>
        </div>
    </div>
  );