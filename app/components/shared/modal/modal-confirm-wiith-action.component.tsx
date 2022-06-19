import Modal from '@/components/shared/modal/modal.component';
import {
  WrapperTitle,
  WrapperBody,
  WrapperIcon,
  WrapperSubTitle,
} from './modal-confirm.styles';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import OrderAccept from '@/app/assets/order-accept.svg';
import OrderDecline from '@/app/assets/order-decline.svg';
import Textbox from '@/components/shared/input/textbox/textbox.component';
import Button from '@/components/shared/button/button.component';
import { useState } from 'react';

interface IScanCodeProps {
  open: boolean;
  close: any;
  type: 'success' | 'error';
  title: string;
  description: string;
  handleCancel: any;
  handleSubmit: any;
  icon: any;
  isBack: boolean;
  loading: boolean;
}

const ModalScanCode: React.FC<IScanCodeProps> = ({
  open,
  close,
  type,
  title,
  description,
  icon,
  handleCancel,
  handleSubmit,
  isBack,
  loading,
}) => {
  return (
    <>
      <Modal open={open} close={close}>
        <WrapperTitle>
          <XIcon
            height={20}
            width={20}
            className="cursor-pointer"
            onClick={close}
          />
        </WrapperTitle>
        <WrapperBody>
          <WrapperIcon typeModal={type}>
            <Image src={icon} alt="icon" height={35} width={35} />
          </WrapperIcon>
          <WrapperSubTitle>
            {title}
            <p>{description}</p>
          </WrapperSubTitle>
          <div className="w-full flex flex-row justify-center items-center mt-6 px-10 gap-3">
            <Button
              title={isBack ? 'Back' : 'Cancel'}
              size="md"
              color={type == 'success' ? 'outlinePrimary' : 'outlineDanger'}
              rounded="sm"
              className="w-[50%]"
              onClick={handleCancel}
            />
            <Button
              title="Confirm"
              size="md"
              color={type == 'success' ? 'primary' : 'danger'}
              rounded="sm"
              className="w-[50%] "
              onClick={handleSubmit}
              isLoading={loading}
              disabled={loading}
            />
          </div>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default ModalScanCode;
