import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface AddTaskModalProps {
  openDailyTasksModal: boolean;
  setOpenDailyTasksModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const meetings = [
  {
    id: 1,
    date: "June 10th, 2022",
    time: "4:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Abraham Ayegba",
    task: "Farm clearing",
    location: "Kogi west",
  },
  {
    id: 2,
    date: "June 12th, 2022",
    time: "1:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Favour Obafemi",
    task: "Fertilizer application",
    location: "Lagos",
  },
  {
    id: 3,
    date: "June 14th, 2022",
    time: "3:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Tamara",
    task: "Crop planting",
    location: "Anambra",
  },
  {
    id: 4,
    date: "June 30th, 2022",
    time: "9:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Simi sola",
    task: "Farm clearing",
    location: "Ilorin",
  },
  {
    id: 5,
    date: "June 16th, 2022",
    time: "2:00 PM",
    datetime: "2022-01-10T17:00",
    task: "Crop watering",
    name: "Farmer D",
    location: "Kogi south",
  },
  {
    id: 6,
    date: "July 10th, 2022",
    time: "3:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Farmer H",
    task: "Farm clearing",
    location: "Lagos",
  },
  {
    id: 7,
    date: "January 10th, 2022",
    time: "8:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Farmer T",
    task: "Crop planting",
    location: "Adamawa",
  },
  {
    id: 8,
    date: "February 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Abiodun bidemi",
    task: "Fertilizer application",
    location: "Ibadan",
  },
  //   {
  //     id: 8,
  //     date: "January 10th, 2022",
  //     time: "5:00 PM",
  //     datetime: "2022-01-10T17:00",
  //     name: "Leslie Alexander",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     location: "Starbucks",
  //   },
  //   {
  //     id: 9,
  //     date: "January 10th, 2022",
  //     time: "5:00 PM",
  //     datetime: "2022-01-10T17:00",
  //     name: "Leslie Alexander",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //     location: "Starbucks",
  //   },
  // More meetings...
];

const DailyTasksModal = ({
  openDailyTasksModal,
  setOpenDailyTasksModal,
}: AddTaskModalProps): JSX.Element => {
  return (
    <Transition.Root show={openDailyTasksModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setOpenDailyTasksModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full max-w-[600px] mx-auto items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden w-full rounded-lg bg-white px-4 pb-7 pt-6 text-left shadow-xl transition-all sm:my-8 ">
                <div className="mt-2 text-center mb-4">
                  <div className="text-lg font-medium leading-6 text-gray-700 tracking-tight">
                    Tasks for today
                  </div>
                </div>
                <ul
                  role="list"
                  className="divide-y divide-gray-100 h-[550px] overflow-y-auto"
                >
                  {meetings.map((meeting) => (
                    <li
                      key={meeting.id}
                      className="relative py-5 hover:bg-gray-50"
                    >
                      <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                          <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-medium leading-6 text-gray-600 tracking-tight">
                                <a className=" flex items-center">
                                  <span className="absolute inset-x-0 -top-px bottom-0" />
                                  {meeting.name}
                                  <span className="inline-flex capitalize ml-[9px] flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    farmer
                                  </span>
                                </a>
                              </p>
                              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                                <a className="relative truncate hover:underline">
                                  {meeting.location}
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-4">
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                              <p className="text-sm leading-6 text-gray-600 tracking-tight">
                                {meeting.task}
                              </p>
                              <div className="flex space-x-3 items-center text-gray-500 tracking-tight text-[13px] mt-1">
                                <dt className="mt-0.5">
                                  <span className="sr-only">Date</span>
                                  <CalendarIcon
                                    className="h-4 w-4 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </dt>
                                <dd>
                                  <time dateTime={meeting.datetime}>
                                    {meeting.date} at {meeting.time}
                                  </time>
                                </dd>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className=" flex items-center justify-end w-full pr-4 mt-2">
                  <button
                    type="button"
                    className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium tracking-tight hover:bg-gray-50 text-gray-600 hover:text-gray-700 focus:outline-none"
                    onClick={() => setOpenDailyTasksModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DailyTasksModal;
