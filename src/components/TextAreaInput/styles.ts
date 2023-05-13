import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 150px;

  padding: 15px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Input = styled.TextInput`
  vertical-align: top;
  margin-top: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
