import React from "react";

const people = [
  {
    name: "Land group A",
    geoarea: "Kogi",
    noofmembers: "10",
    datecreated: "23-06-10",
  },
  {
    name: "Land group B",
    geoarea: "Lagos",
    noofmembers: "15",
    datecreated: "23-06-11",
  },
  {
    name: "Land group C",
    geoarea: "Anambra",
    noofmembers: "20",
    datecreated: "23-06-14",
  },
  {
    name: "Land group D",
    geoarea: "Benue",
    noofmembers: "44",
    datecreated: "23-06-17",
  },
  {
    name: "Land group E",
    geoarea: "Ibadan",
    noofmembers: "22",
    datecreated: "23-06-16",
  },
  {
    name: "Land group F",
    geoarea: "Ilorin",
    noofmembers: "30",
    datecreated: "23-06-21",
  },
  {
    name: "Land group G",
    geoarea: "Omu",
    noofmembers: "33",
    datecreated: "23-06-24",
  },
  {
    name: "Land group H",
    geoarea: "Ilorin west",
    noofmembers: "90",
    datecreated: "23-06-15",
  },
  // More people...
];

const LandGroups = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-600">
          Land groups
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
                    Geo Area
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    No of members
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-medium tracking-tight text-gray-600"
                  >
                    Date created
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
                        {person.geoarea}
                      </div>
                    </td>
                    <td className="whitespace-nowrap capitalize px-3 py-5 text-sm font-normal tracking-tight text-gray-600">
                      {person.noofmembers}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm font-normal tracking-tight text-gray-600">
                      {person.datecreated}
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

export default LandGroups;
