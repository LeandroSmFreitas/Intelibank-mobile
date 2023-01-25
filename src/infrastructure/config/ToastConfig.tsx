import * as React from 'react';
import { BaseToastProps } from 'react-native-toast-message';

import ErrorToastIcon from '../../infrastructure/assets/svgs/errorToast.svg';
import SuccessToastIcon from '../../infrastructure/assets/svgs/successToast.svg';
import WarningToastIcon from '../../infrastructure/assets/svgs/warningToast.svg';
import { SvgProps } from 'react-native-svg';
import { ToastType } from '../../domain/enums/ToastType';
import * as S from './styles';

interface ToastBaseProps {
  text?: string;
  Icon: React.FC<SvgProps>;
  type: ToastType;
}

const ToastBase = ({ text, Icon, type }: ToastBaseProps) => {
  return (
    <S.ToastContainer type={type}>
      <Icon />
      {text ? <S.ToastText>{text}</S.ToastText> : null}
    </S.ToastContainer>
  );
};

export const toastConfig = {
  success: ({ text1 }: BaseToastProps) => (
    <ToastBase text={text1} Icon={SuccessToastIcon} type={ToastType.SUCCESS} />
  ),
  error: ({ text1 }: BaseToastProps) => (
    <ToastBase text={text1} Icon={ErrorToastIcon} type={ToastType.ERROR} />
  ),
  warning: ({ text1 }: BaseToastProps) => (
    <ToastBase text={text1} Icon={WarningToastIcon} type={ToastType.WARNING} />
  ),
  withoutConnection: ({ text1 }: BaseToastProps) => (
    <ToastBase
      text={text1}
      Icon={WifiToastIcon}
      type={ToastType.WITHOUT_CONNECT}
    />
  ),
};
