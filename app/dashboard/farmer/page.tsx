import React from "react";

const people = [
  {
    name: "Farmer A",
    email: "farmera@gmail.com",
    cooperative: "Cooperative A",
    datejoined: "23-06-10",
  },
  {
    name: "Farmer B",
    email: "farmerb@gmail.com",
    cooperative: "Cooperative B",
    datejoined: "23-06-13",
  },
  {
    name: "Farmer C",
    email: "farmerc@gmail.com",
    cooperative: "Cooperative C",
    datejoined: "23-06-20",
  },
  {
    name: "Farmer D",
    email: "farmerd@gmail.com",
    cooperative: "Cooperative D",
    datejoined: "23-09-10",
  },
  {
    name: "Farmer E",
    email: "farmere@gmail.com",
    cooperative: "Cooperative E",
    datejoined: "23-06-19",
  },
  {
    name: "Farmer F",
    email: "farmerf@gmail.com",
    cooperative: "Cooperative F",
    datejoined: "23-02-21",
  },
  {
    name: "Farmer G",
    email: "farmerg@gmail.com",
    cooperative: "Cooperative G",
    datejoined: "23-08-30",
  },
  {
    name: "Farmer H",
    email: "farmerh@gmail.com",
    cooperative: "Cooperative H",
    datejoined: "23-10-14",
  },
  // More people...
];

const Farmers = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Farmers
        </h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-[#2aa249] px-4 py-[6px] text-sm font-normal text-white hover:bg-primary-verzobluehover focus:outline-none"
          >
            Create new
          </button>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Cooperative
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Date joined
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.name}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="font-normal tracking-tight text-gray-600">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700">
                      <div className="font-normal tracking-tight text-gray-600">
                        {person.email}
                      </div>
                    </td>
                    <td className="whitespace-nowrap capitalize px-3 py-5 text-sm font-normal tracking-tight text-gray-600">
                      {person.cooperative}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm font-normal tracking-tight text-gray-600">
                      {person.datejoined}
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-normal tracking-tight text-gray-600 sm:pr-0">
                      <a
                        href="#"
                        className="text-[#2aa249] hover:text-[#2aa249] font-normal"
                      >
                        <span className="sr-only">, {person.name}</span>
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmers;
