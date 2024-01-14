export function LastCard(props) {

    return (
        <>
            <div className="bg-last-card h-16 rounded flex items-center">
                <img className="size-16 rounded-s mr-1.5" src={props.img}/>
                <p className="">{props.text}</p>
            </div>
        </>
    )
}