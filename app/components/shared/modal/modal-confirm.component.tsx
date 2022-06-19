import Modal from './modal.component';
import { XIcon, CheckIcon } from '@heroicons/react/solid';
import { FC } from 'react';
import {
  WrapperBody,
  WrapperIcon,
  WrapperSubTitle,
  WrapperTitle,
} from './modal-confirm.styles';

interface IConfirmProps {
  open: boolean;
  close: any;
  typeModal: 'success' | 'error';
  icons: 'success' | 'error';
  title: string;
  description: string;
}

const ModalConfirm: FC<IConfirmProps> = ({
  open,
  close,
  typeModal,
  icons,
  title,
  description,
}) => {
  return (
    <Modal open={open} close={close} size="sm">
      <WrapperTitle>
        <XIcon
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={close}
        />
      </WrapperTitle>
      <WrapperBody>
        <WrapperIcon typeModal={typeModal}>
          {typeModal === 'success' && (
            <CheckIcon height={35} width={35} className="main-color" />
          )}
          {typeModal === 'error' && icons === 'success' && (
            <CheckIcon height={35} width={35} className="danger-color" />
          )}

          {typeModal === 'error' && icons === 'error' && (
            <XIcon height={35} width={35} className="danger-color" />
          )}
        </WrapperIcon>
        <WrapperSubTitle>
          {title}
          <p>{description}</p>
        </WrapperSubTitle>
        <button className="overflow-hidden"></button>
      </WrapperBody>
    </Modal>
  );
};

export default ModalConfirm;
