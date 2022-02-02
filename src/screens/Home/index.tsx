import React from 'react'
import { StatusBar } from 'react-native'
import { Container, Header, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car'
import { CarList } from '../../components/Car/styles'

export function Home(){
  const carData1 = {
    brand: 'Audi A3',
    name: 'Rs5 Coupé',
    rent:{
      period: 'Ao dia',
      price: 120
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png"
  }

  const carData2 = {
    brand: 'Porsche',
    name: 'Panamera',
    rent:{
      period: 'Ao dia',
      price: 340
    },
    thumbnail: "https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png"
  }

  return (
    <Container>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor='transparent'
      />
      <Header>
        <Logo 
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars>
          Total de 12 carros
        </TotalCars>
      </Header>
      <CarList 
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={(item) => String(item)}
        renderItem={({item}) => <Car data={carData1}/>}
      />
      
    </Container>
  )
}