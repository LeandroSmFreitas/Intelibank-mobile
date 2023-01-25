import styled from 'styled-components/native';
import { ToastType } from '../../domain/enums/ToastType';
import normalizePixel from '../utils/NormalizePixel';

interface ToastProps {
  type: ToastType;
}

export const ToastContainer = styled.View<ToastProps>`
  background-color: ${({ theme }) => '#008000'};
  border-color: ${({ theme, type }) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    type === ToastType.SUCCESS
      ? '#008000'
      : type === ToastType.ERROR
      ? '#ff0000'
      : 	'#FFFF00'};
  border-width: 2px;
  border-radius: 8px;
  padding-horizontal: ${normalizePixel(16)}px;
  padding-vertical: ${normalizePixel(12)}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: 98%;
`;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
export const ToastText = styled.Text`
  font-size: ${normalizePixel(14)}px;
  color: ${({ theme }) => '#fff'};
  margin-left: ${normalizePixel(8)}px;
`;