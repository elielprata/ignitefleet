import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin: 32px 0;
  padding: 22px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  align-items: center;
`

export const IconBox = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-right: 12px;

  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  flex: 1;
  text-align: justify;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const TextHighlight = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BRAND_LIGHT};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
