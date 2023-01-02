import Card from "./components/card";
import data from "./components/data"
import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"

export default function SlidingCards() {
    const cardElements = data.map((item) => {
        return (
            <Card
                id={item.id}
                item={item}
            />
        )
    })

    const scrollLeft = () => {
        const slider = document.querySelector(".slider")
        slider.scrollBy({
            top: 0,
            left: -300,
            behavior: "smooth"
        })
    }
    const scrollRight = () => {
        const slider = document.querySelector(".slider")
        slider.scrollBy({
            top: 0,
            left: 300,
            behavior: "smooth"
        })
    }
    return (
        <section className="card-section">
            <div className="slider">
                <button className="prev-btn btn" onClick={scrollLeft}>
                    <FaChevronLeft />
                </button>
                {cardElements}
                <button className="next-btn btn" onClick={scrollRight}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    )
}