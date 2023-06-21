interface CardProps {
  data: {
    imgSrc: string;
    name: string;
    surname: string;
    street: string;
    postCode: string;
    town: string;
    subRegion: string;
    phoneNumber: string;
  };
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
        <img className="h-full w-full object-cover" src={data.imgSrc} />
      </div>
      <div className="flex flex-col">
        <div>
          {data.name} {data.surname}
        </div>
        <div>Adress</div>
        <div>
          {data.street} {data.postCode}
        </div>
        <div>{data.town}</div>
        <div>{data.subRegion}</div>
        <div>{data.phoneNumber}</div>
      </div>
    </div>
  );
};
