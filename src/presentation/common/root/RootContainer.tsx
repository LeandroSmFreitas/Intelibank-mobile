import React from 'react';
import AppNavigation from '../navigation/Appnavigation';

import * as S from './styles';

import { toastConfig } from '../../../infrastructure/config/ToastConfig';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const RootContainer = () => {
  return (
    <S.Container>
      <>
        <AppNavigation />
      </>
      <Toast config={toastConfig} />
    </S.Container>
  );
};

export default RootContainer;
