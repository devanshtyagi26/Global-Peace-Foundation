import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Filter,
} from "lucide-react";

const EVENTS = [
  {
    id: 1,
    title: "Youth Leadership Summit 2024",
    date: "2024-06-15",
    time: "09:00 AM - 05:00 PM",
    location: "Singapore",
    type: "upcoming",
    capacity: 200,
    spotsLeft: 45,
    description:
      "Join young leaders from across the Indo-Pacific region for a day of inspiration, networking, and skill-building.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    registrationLink: "#register",
  },
  {
    id: 2,
    title: "Cultural Exchange Workshop",
    date: "2024-07-20",
    time: "02:00 PM - 06:00 PM",
    location: "Tokyo, Japan",
    type: "upcoming",
    capacity: 50,
    spotsLeft: 15,
    description:
      "Experience and share cultural traditions from different Indo-Pacific nations through interactive workshops.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    registrationLink: "#register",
  },
  {
    id: 3,
    title: "Regional Peace Conference",
    date: "2024-03-10",
    time: "10:00 AM - 04:00 PM",
    location: "Bangkok, Thailand",
    type: "past",
    capacity: 150,
    spotsLeft: 0,
    description:
      "A successful gathering of youth representatives discussing peace initiatives and regional cooperation.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    registrationLink: "#",
  },
];

const Events = () => {
  // const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [filter, setFilter] = useState<"all" | "upcoming">("all");

  const filteredEvents = EVENTS.filter((event) =>
    filter === "all" ? true : event.type === filter
  );

  return (
    <section id="events" className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Events & Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our transformative events designed to empower youth across the
            Indo-Pacific region.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setFilter("all")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === "all"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Events
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === "upcoming"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              Upcoming
            </button>
            {/* <button
              onClick={() => setFilter('past')}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'past'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Past Events
            </button> */}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {event.type === "upcoming" && event.spotsLeft > 0 && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.spotsLeft} spots left
                  </div>
                )}
                {event.type === "past" && (
                  <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Past Event
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Capacity: {event.capacity} participants</span>
                  </div>
                </div>

                {event.type === "upcoming" && event.spotsLeft > 0 && (
                  <a
                    href={event.registrationLink}
                    className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Register Now
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
