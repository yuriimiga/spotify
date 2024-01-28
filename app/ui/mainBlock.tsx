import { MainCard } from "./mainCard"

export function MainBlock() {
    return(
        <>
            <div className="flex justify-between mt-10 w-full">
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
        </>  
    )
}