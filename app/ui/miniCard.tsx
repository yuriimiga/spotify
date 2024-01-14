export function MiniCard(props) {
    return(
        <>
            <div>
                <img src={props.img} className={`size-12 mb-4 ${props.mode}`}/>
            </div>
        </>
    )
}