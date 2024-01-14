export function MainCard(props) {
    let img = props.img;
    let name = props.name;
    let des = props.des;

    return(
        <> 
            <div className="flex flex-col p-3.5 rounded-md bg-main-card size-fit">
                <img src={props.img} className="size-44 rounded-md"/>
                <p className="text-1xl mt-3">{props.name}</p>
                <p className="mt-1 text-xs text-sub">{props.des}</p>
            </div>
        </>
    )
}