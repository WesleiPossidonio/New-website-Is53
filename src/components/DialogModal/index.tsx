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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6aQxi4mJXEQ?si=TF_lDM1sQZ9ikoRj" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
          web-share" allowfullscreen 
        />
      </Content>
    </Dialog.Portal>
  )
}


