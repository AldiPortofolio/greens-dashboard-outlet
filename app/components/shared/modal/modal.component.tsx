import { FC, ReactNode, Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IModalInterface {
  open: boolean;
  close: any;
  children: ReactNode;
  size?: string;
}

const Modal: FC<IModalInterface> = ({
  children,
  open = false,
  close,
  size = 'md',
}) => {
  let completeButtonRef = useRef(null);
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        // onClose={close}
        initialFocus={completeButtonRef}
        static
        onClose={() => null}
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full 
                ${size === 'sm' && 'max-w-sm'}
                ${size === 'md' && 'max-w-md'}
                ${size === 'lg' && 'max-w-lg'}
                ${size === 'xl' && 'max-w-xl'}
                ${size === '3xl' && 'max-w-3xl'}
                ${size === '4xl' && 'max-w-4xl'}
                transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        <button className="overflow-hidden"></button>
      </Dialog>
    </Transition>
  );
};

export default Modal;
