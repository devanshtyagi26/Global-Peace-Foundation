import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Filter,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const EVENTS = [
    {
      id: 1,
      title: t("events.list.summit.title"),
      datefrom: "2024-03-19",
      dateto: "2024-03-20",
      time: "09:00 AM - 05:00 PM",
      location: t("events.list.summit.location"),
      type: "upcoming",
      capacity: 200,
      spotsLeft: 45,
      description: t("events.list.summit.description"),
      image: "/Events/IPPF.jpg",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdzzppL4bFxtgMsD5enI9n8ZV-7VRUyxKsRobSFYEiiGM1UdQ/viewform",
    },
  ];

  const filteredEvents = EVENTS.filter((event) =>
    filter === "all" ? true : event.type === filter
  );

  // const handleFilterChange = (newFilter: 'all' | 'upcoming' | 'past') => {
  const handleFilterChange = (newFilter: "all" | "upcoming") => {
    setIsLoading(true);
    setFilter(newFilter);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            {t("events.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("events.subtitle")}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => handleFilterChange("all")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "all"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {t("events.filters.all")}
            </button>
            <button
              onClick={() => handleFilterChange("upcoming")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "upcoming"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {t("events.filters.upcoming")}
            </button>
            {/* <button
              onClick={() => handleFilterChange('past')}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === 'past'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              {t('events.filters.past')}
            </button> */}
          </div>
        </div>

        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
        >
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-102 hover:shadow-xl animate-fade-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-[17rem] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                {/* {event.type === "upcoming" && event.spotsLeft > 0 && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium transform transition-transform duration-300 hover:scale-105">
                    {event.spotsLeft} {t("events.spotsLeft")}
                  </div>
                )} */}
                {event.type === "past" && (
                  <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t("events.pastEvent")}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-indigo-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 transition-transform duration-300 hover:translate-x-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>
                      {new Date(event.datefrom).toLocaleDateString()} -{" "}
                      {new Date(event.dateto).toLocaleDateString()}{" "}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 transition-transform duration-300 hover:translate-x-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600 transition-transform duration-300 hover:translate-x-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600 transition-transform duration-300 hover:translate-x-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span>
                      {t("events.capacity")}: {event.capacity}{" "}
                      {t("events.participants")}
                    </span>
                  </div>
                </div>

                {event.type === "upcoming" && event.spotsLeft > 0 && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 transition-all duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg"
                  >
                    {t("events.registerNow")}
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
