import { Play } from "@phosphor-icons/react"
import { TitleText } from "../../../../components/typograph"
import { ButtonPlay, ContainerNews } from "./styled"

import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from "../../../../components/DialogModal"

export const SectionNews = () => {
  return (
    <ContainerNews id="news">
      <TitleText color="white" size="s" weight={900} family="roboto">Último Lançamento</TitleText>
      <TitleText size="m" lineHeight="m" weight={300}>Deus de Poder, Ao Vivo</TitleText>
    
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonPlay>
            <Play size={32} weight="fill" color="#fff" />
            </ButtonPlay>
          </Dialog.Trigger>
          <Modal />
      </Dialog.Root>
    </ContainerNews>
  )
}