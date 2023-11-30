import styled from 'styled-components'

interface RegularTextProps {
  size?: 'm' | 's'
  color?: 'white' | 'gray'
  weight?: string | number
}

interface TitleTextProps {
  size?: 'l' | 'm' | 's' 
  color?: 'white' | 'blue' | 'gray' 
  weight?: string | number
  family?: 'dosis' | 'roboto'
  lineHeight?: 'l' | 'm' | 's' 
}

export const TextRegular = styled.p<RegularTextProps>`
  font-family:${({theme}) => theme.fontFamily['base-roboto']};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'white'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontSizes[`text-regular-${size ?? 's'}`]};
  line-height: 1.875rem;
  font-weight: ${({ weight }) => weight ?? 400};
`
export const TitleText = styled.h1<TitleTextProps>`
font-family: ${({ theme, family }) => theme.fontFamily[`base-${family ?? 'dosis'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'white'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontSizes[`title-regular-${size ?? 's'}`]};
  line-height: ${({ theme, lineHeight }) =>
    theme.lineHeight[`line-title-${lineHeight ?? 's'}`]};
  font-weight: ${({ weight }) => weight ?? 400};

`
