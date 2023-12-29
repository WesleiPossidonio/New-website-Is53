import { TextRegular, TitleText } from "../../../../components/typograph"
import { Button, CardSwiper, ContainerStore, Footer } from "./styled"

import { Swiper } from 'swiper/react';

import Camiset1 from '../../../../assets/Camiseta1.webp'
import Camiset2 from '../../../../assets/Camiseta2.webp'
import Camiset3 from '../../../../assets/Camiseta3.webp'
import Camiset4 from '../../../../assets/Camiseta4.webp'
import Camiset5 from '../../../../assets/Camiseta5.webp'
import Camiset6 from '../../../../assets/Camiseta6.webp'
import Camiset7 from '../../../../assets/Camiseta7.webp'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export const SectioStore = () => {
  return (
    <ContainerStore id="store">
      <TitleText size="l" weight={300} family="dosis" lineHeight="l">Loja Is53</TitleText>
      <TextRegular size="s" color="gray">Confira os Nossos últimos Lançamentos!</TextRegular>
   
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            980: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination, Autoplay ]}
        className="mySwiper"
      >
        <CardSwiper>
            <img src={Camiset1} alt="" />

            <Footer href="https://reserva.ink/is53/product/camisa-basica-elementos-do-simbolo" target="_blank">
                <TextRegular size="m">Camisa Básica Elementos do Símbolo</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
        <CardSwiper>
            <img src={Camiset2} alt="" />
            <Footer href="https://reserva.ink/is53/product/camisa-basica-foi-no-deserto" target="_blank">
                <TextRegular size="m">Camisa Básica Foi no Deserto</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
        <CardSwiper>
            <img src={Camiset3} alt="" />
            <Footer href="https://reserva.ink/is53/product/camiseta-greenk-qr-code" target="_blank">
                <TextRegular size="m">Camiseta Greenk Qr Code</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
        <CardSwiper>
            <img src={Camiset4} alt="" />
            <Footer href="https://reserva.ink/is53/product/camiseta-basica-is53" target="_blank">
                <TextRegular size="m">Camiseta Básica IS53</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
        <CardSwiper>
            <img src={Camiset5} alt="" />
            <Footer href="https://reserva.ink/is53/product/camisa-basica-god-of-power" target="_blank">
                <TextRegular size="m">Camisa Básica God of Power</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
        <CardSwiper>
            <img src={Camiset6} alt="" />
            <Footer href="https://reserva.ink/is53/product/camisa-pardal-meme-verde" target="_blank">
                <TextRegular size="m">Camisa Pardal Meme Verde</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
        <CardSwiper>
            <img src={Camiset7} alt="" />
            <Footer href="https://reserva.ink/is53/product/camisa-basica-deus-de-poder" target="_blank">
                <TextRegular size="m">Camisa Básica Deus de Poder</TextRegular>
                 <TitleText size="m" weight={700}>R$ 89,90</TitleText>
            </Footer>
        </CardSwiper>
      </Swiper>


      <Button href="https://reserva.ink/is53" target="_blank">Ver Todos os Produtos</Button>
      
    </ContainerStore>
  )
}


