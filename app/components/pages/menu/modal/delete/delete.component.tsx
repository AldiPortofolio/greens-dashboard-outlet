import Modal from '@/components/shared/modal/modal.component';
import {
  WrapperTitle,
  WrapperBody,
  WrapperIcon,
  WrapperSubTitle,
  WrapperInput,
  WrapperButton,
} from './delete.styles';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import MenuDanger from '@/app/assets/menu-danger.svg';
import Textbox from '@/components/shared/input/textbox/textbox.component';
import Button from '@/components/shared/button/button.component';
import { useState } from 'react';

interface IScanCodeProps {
  open: boolean;
  close: any;
  handleSubmit: any;
  back: any;
}

const ModalScanCode: React.FC<IScanCodeProps> = ({
  open,
  close,
  handleSubmit,
  back,
}) => {
  const [value, setvalue] = useState('');

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
          <WrapperIcon typeModal="decline">
            <Image src={MenuDanger} alt="icon" height={35} width={35} />
          </WrapperIcon>
          <WrapperSubTitle>
            Delete Menu
            <p>Please input password to confirm this action</p>
          </WrapperSubTitle>
          <WrapperInput>
            <Textbox
              value={value}
              onChange={(e: any) => setvalue(e.target.value)}
              placeholder="Password"
              borderFocusColor="danger"
              focus={true}
            />
          </WrapperInput>
          <div className="flex flex-row justify-center items-center gap-3">
            <Button
              title="Back"
              size="md"
              color="outlineDanger"
              rounded="sm"
              className="w-[50%]"
              onClick={() => {
                close();
                back();
              }}
            />
            <Button
              title="Confirm"
              size="md"
              color="danger"
              rounded="sm"
              disabled={!value}
              className="w-[50%]"
              onClick={handleSubmit}
            />
          </div>
        </WrapperBody>
      </Modal>
    </>
  );
};

export default ModalScanCode;
