import { LastCard } from "./ui/lastCard"
import { MainCard } from "./ui/mainCard"
import {NavBar} from "./ui/navBar"
import { ControlCenter } from "./ui/controlCenter"

export default function Home() { 
  return (
    <>
      <div>
        <div className="flex flex-row">
          <NavBar/>
          <div className="mx-2 mt-2 p-5 rounded-md bg-base w-[100%]">
            <p className="text-3xl mt-8 font-bold">Добрий день!</p>
            <div className="grid grid-cols-3 gap-3 mt-7">
              <LastCard img='liked_songs.png' text='Пісні, що сподобалися'/>
              <LastCard text='22'/>
              <LastCard text='5'/>
              <LastCard text='56'/>
              <LastCard text='12'/>
              <LastCard text='11'/>
            </div>
            <div>
              <div className="flex justify-between mt-10">
                <p className="text-2xl">Для користвача ...</p>
                <p>Показти деталі</p>
              </div>
              <div className="flex justify-between">
                <MainCard img="main_card_test.jpeg" name='День 1' des='Скрябін'/>
                <MainCard img="main_card_test.jpeg" name='День 1' des='Скрябін'/>
                <MainCard img="main_card_test.jpeg" name='День 1' des='Скрябін'/>
                <MainCard img="main_card_test.jpeg" name='День 1' des='Скрябін'/>
                <MainCard img="main_card_test.jpeg" name='День 1' des='Скрябін'/>
                <MainCard img="main_card_test.jpeg" name='День 1' des='Скрябін'/>
              </div>
            </div>
          </div>
        </div>
        <ControlCenter/>
        </div>
    </>
  )
}