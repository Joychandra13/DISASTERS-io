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