import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styled'
import { X } from '@phosphor-icons/react'

export const Modal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24}  color='#fff' />
        </CloseButton>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YahEadwL9ho?si=1hdF8WF20W-_DcC2" 
          title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share" 
        />
      </Content>
    </Dialog.Portal>
  )
}


