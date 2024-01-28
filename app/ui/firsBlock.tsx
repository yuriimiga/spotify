import { LastCard } from "./lastCard"

export function FirsBlock() {
    return(
        <>
            <div>
                <p className="text-3xl mt-8 font-bold">Добрий день!</p>
                <div className="grid grid-cols-3 gap-3 mt-7">
                <LastCard img='liked_songs.png' text='Пісні, що сподобалися'/>
                <LastCard text='22'/>
                <LastCard text='5'/>
                <LastCard text='56'/>
                <LastCard text='12'/>
                <LastCard text='11'/>
                </div>
            </div>
        </>
    )
}