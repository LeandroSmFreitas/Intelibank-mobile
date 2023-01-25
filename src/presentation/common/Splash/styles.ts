import normalizePixel from '../../../infrastructure/utils/NormalizePixel';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #7000ff;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: ${normalizePixel(40)}px;
  color: #ffffff;
`;
