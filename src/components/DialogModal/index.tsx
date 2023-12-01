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
        <iframe src="https://www.youtube.com/embed/6aQxi4mJXEQ?si=TF_lDM1sQZ9ikoRj" 
          title="YouTube video player"  allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
          web-share"  
        />
      </Content>
    </Dialog.Portal>
  )
}


