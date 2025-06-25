interface ServiceItemProps {
  name: string;
  icon: string;
  description: string;
}

export const ServicesItem = ({ name, icon, description }: ServiceItemProps) => {
  return (
    <li
      key={name}
      className="flex flex-col justify-center h-fit w-fit gap-6 bg-[#1A5BBD] rounded-2xl p-6"
    >
      <img
        // src={icon}
        src="/vacio.jpg"
        // className="w-[4.5rem] bg-[#83CEE4] p-3 rounded-lg"
        className={`w-[4.5rem] p-3 rounded-lg transition-all ease-in-out duration-300 hover:-translate-y-3 $`}
      />
      <div className="flex flex-col gap-4 text-white">
        <p className="text-lg font-bold">{name}</p>
        <p className="pr-8 font-normal text-[#CCCCCC] text-sm">{description}</p>
      </div>
    </li>
  );
};
