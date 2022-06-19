import Modal from '@/components/shared/modal/modal.component';
import {
  WrapperTitle,
  WrapperBody,
  WrapperIcon,
  WrapperSubTitle,
  WrapperInput,
  WrapperButton,
} from './scan-code.styles';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import OrderAccept from '@/app/assets/order-accept.svg';
import OrderDecline from '@/app/assets/order-decline.svg';
import Textbox from '@/components/shared/input/textbox/textbox.component';
import Button from '@/components/shared/button/button.component';

interface IScanCodeProps {
  open: boolean;
  close: any;
  type: 'accept' | 'decline';
  handleSubmit: any;
  handleChange: any;
  payload: any;
  loading: boolean;
}

const ModalScanCode: React.FC<IScanCodeProps> = ({
  open,
  close,
  type,
  handleSubmit,
  handleChange,
  payload,
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
            <Image
              src={type === 'accept' ? OrderAccept : OrderDecline}
              alt="icon"
              height={35}
              width={35}
            />
          </WrapperIcon>
          <WrapperSubTitle>
            {type === 'accept' ? 'Process Order' : 'Decline Order'}
            <p>
              {type === 'accept'
                ? 'To process order please input order code'
                : 'Please input the reason.'}
            </p>
          </WrapperSubTitle>
          <WrapperInput>
            {type === 'decline' && (
              <Textbox
                value={payload?.kitchenNotes}
                onChange={handleChange}
                placeholder={'Type here'}
                borderFocusColor={'danger'}
                focus={true}
                name="kitchenNotes"
              />
            )}
            {type === 'accept' && (
              <Textbox
                value={payload?.code}
                onChange={handleChange}
                placeholder={'Order Code'}
                borderFocusColor={'primary'}
                focus={true}
                name="code"
              />
            )}
          </WrapperInput>
          <WrapperButton>
            {type === 'accept' ? (
              <Button
                title="Print Order"
                size="md"
                color="primary"
                rounded="sm"
                disabled={!payload?.code}
                className="w-full mx-28"
                onClick={handleSubmit}
                isLoading={loading}
              />
            ) : (
              <Button
                title="Decline"
                size="md"
                color="danger"
                rounded="sm"
                disabled={!payload?.kitchenNotes}
                className="w-100 mx-28"
                onClick={handleSubmit}
                isLoading={loading}
              />
            )}
          </WrapperButton>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default ModalScanCode;
