export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.item.coverImg} />
                {badgeText && <p className="curr-situation">{badgeText}</p>}
            </div>
            <div className="desc">
                <div className="rating">
                    <div>
                        <img className="star" src="https://res.cloudinary.com/da5mimn3m/image/upload/v1672502188/Airbnb%20experience/Star_fnwskm.png" />
                        <h3>{props.item.stats.rating}</h3>
                    </div>
                    <div>
                        <h3>({props.item.stats.reviewCount}) • {props.item.location}</h3>
                    </div>

                </div>
                <h2 className="title">
                    {props.item.title}
                </h2>
                <div className="price">
                    <p>
                        <b>From ${props.item.price}/</b> person
                    </p>
                </div>
            </div>
        </div>
    )
}