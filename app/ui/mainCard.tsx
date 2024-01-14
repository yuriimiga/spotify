export function MainCard(props) {
    let img = props.img;
    let name = props.name;
    let des = props.des;

    return(
        <> 
            <div className="flex flex-col p-3.5 rounded-md bg-main-card size-fit">
                <img src={img} className="size-44 rounded-md"/>
                <p className="text-1xl mt-3">{name}</p>
                <p className="mt-1 text-xs text-sub">{des}</p>
            </div>
        </>
    )
}