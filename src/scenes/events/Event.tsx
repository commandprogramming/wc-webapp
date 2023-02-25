import moment, { Moment } from "moment";
import { EventType } from "../../shared/types";

type Props = {
  event: EventType;
};

type AttrType = {
  name: "name" | "date" | "link" | "status" | "address";
  date?: boolean;
  link?: boolean;
};

const Event = ({ event }: Props) => {
  const Attr = ({ name, date, link }: AttrType) => {
    let value = event[name] as string;
    if (date) {
      let d: Date = event[name] as Date;
      let m: Moment = moment(d);
      value = m.format("MMMM Do, YYYY");
    }

    return (
      <div className="mt-2">
        <p className="text-md text-gray-200">{name.toUpperCase()}</p>

        {link ? (
          <a className="-mt-1 text-lg text-white underline" href={value}>
            {value}
          </a>
        ) : (
          <p className="-mt-1 text-lg text-white">{value}</p>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
      <Attr name="name" />
      <Attr name="date" date />
      <Attr name="address" />

      {event.status === "upcoming" ? (
        <>
          {/* <Attr name="link" link /> */}
          <div className="mt-2">
            <iframe
              className="h-[350px] w-full rounded-md"
              src={event.map}
              loading="lazy"
            ></iframe>
          </div>
        </>
      ) : (
        <>
          {/* <div className="mt-2">
            <p className="text-md text-gray-200">RESULTS</p>
            <p className="-mt-1 text-lg text-white">No Data</p>
          </div> */}
          {event.img_url && (
            <img
              alt="result"
              src={event.img_url}
              className="mt-2 h-[350px] rounded-md object-cover"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Event;
