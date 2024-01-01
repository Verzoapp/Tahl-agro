import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";



interface ActivityDetails {
  farmLotname: string;
  calendarActivity: {
    activity: {
      name: string;
    };
    startTime: string;
    endTime: string;
  };
}

interface ViewTaskModalProps {
  openViewTaskModal: boolean;
  setOpenViewTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
  activityDetails: ActivityDetails | undefined;
  cooperative: string
}


const ViewTaskModal = ({
  openViewTaskModal,
  setOpenViewTaskModal,
  activityDetails,
  cooperative
  
}: ViewTaskModalProps): JSX.Element => {
  return (
    <Transition.Root show={openViewTaskModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenViewTaskModal}>
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
          <div className="flex min-h-full max-w-[450px] mx-auto items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-8 pb-7 pt-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="mt-2 text-center mb-4">
                  <div className="text-lg font-medium leading-6 text-gray-700 tracking-tight">
                    View task
                  </div>
                </div>
                <form className=" flex h-auto w-full flex-col">
                          <div className="flex h-[70px] flex-col items-start mb-3">
                            <label
                              htmlFor="First Name"
                              className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                            >
                              {" "}
                              Farm Lot
                            </label>
                            <input
                              type="text"
                              value={activityDetails?.farmLotname}
                              readOnly
                              className=" block h-[38px] w-full text-gray-700 tracking-tight appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none  sm:text-sm"
                            />
                          </div>
                          <div className="flex h-[70px] flex-col items-start mb-4">
                            <label
                              htmlFor="First Name"
                              className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                            >
                              {" "}
                              Cooperative assigned to
                            </label>
                            <input
                              type="text"
                              value={cooperative}
                              readOnly
                              className=" block h-[38px] w-full text-gray-700 tracking-tight appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none sm:text-sm"
                            />
                          </div>
                          <div className="flex h-[70px] flex-col items-start mb-3">
                            <label
                              htmlFor="First Name"
                              className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                            >
                              {" "}
                              Task
                            </label>
                            <input
                              type="text"
                              readOnly
                              value={activityDetails?.calendarActivity.activity.name}
                              className=" block h-[38px] text-gray-700 tracking-tight w-full appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none  sm:text-sm"
                            />
                          </div>
                          <div className="flex h-[70px] flex-col items-start mb-3">
                            <label
                              htmlFor="First Name"
                              className=" text-[14px] font-normal leading-4 text-gray-600 tracking-tight mb-2"
                            >
                              {" "}
                              Date due
                            </label>
                            <input
                              type="text"
                              readOnly
                              value={activityDetails?.calendarActivity.endTime}
                              className=" block h-[38px] w-full text-gray-700 tracking-tight appearance-none rounded-md border border-gray-100 bg-gray-50 px-3 py-2 capitalize placeholder-gray-400 focus:outline-none  sm:text-sm"
                            />
                          </div>
                          <div className=" flex flex-row items-center justify-end">
                            <button
                              type="button"
                              className="flex w-[130px] items-center justify-center rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                              onClick={() => setOpenViewTaskModal(false)}
                            >
                              Cancel
                            </button>
                          </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ViewTaskModal;
