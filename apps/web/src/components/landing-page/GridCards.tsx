import CardLeft from "./grid-cards/card-left";
import CardMiddle from "./grid-cards/card-middle";
import CardRight from "./grid-cards/card-right";

export default function GridCards() {
    return (
        <div className="flex flex-col items-center py-24 md:py-32">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <CardLeft />
                <CardMiddle />
                <CardRight />
            </div>
        </div>
    )
}