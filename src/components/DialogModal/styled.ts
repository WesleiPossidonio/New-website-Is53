import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  z-index: 99999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 65%;
  height: 35rem;

  z-index: 99999;
  min-width: 32rem;
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  > iframe {
    width: 100%;
    height: 100%;

    border-radius: 6px;
  }


  @media(max-width: 768px){
    width: 90%;
  }


  @media(max-width: 600px){
    width: 70%;
    height: 25rem;
    padding: 4rem;
  }

`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 0.8rem;
  right: 0.8rem;
  cursor: pointer;
  color: #2b3d63;


  @media(max-width: 600px){
    right: 4rem;
  }
`