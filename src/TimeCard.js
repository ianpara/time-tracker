import Ellipsis from './images/icon-ellipsis.svg';

const TimeCard = ({ time, currentTime }) => {

    let timeWord;
    if (currentTime === "weekly") {
        timeWord = "Last Week";
    } else if (currentTime === "monthly") {
        timeWord = "Last Month";
    } else {
        timeWord = "Yesterday";
    }

    return (
        <div className="w-full">
            {time.map((time) => (
                <div className="px-4 xs:px-0 xs:mx-auto lg:mx-0" key={time.title}>
                    <div className={`bg-${time.title.toLowerCase().replace(/ /g, '-')} relative h-20 rounded-t-xl overflow-hidden`}>
                        <img className="ml-auto transform -translate-y-2 w-16" src={require('./images/icon-' + time.title.toLowerCase().replace(/ /g, '-') + '.svg').default} alt="" />
                    </div>
                    <div className="relative p-6 bg-card-background rounded-xl -mt-10 hover:cursor-pointer filter brightness-100 hover:brightness-125">
                        <div className="flex items-center justify-between md:mb-5">
                            <p className="text-sm lg:text-md text-white">{time.title}</p>
                            <img className="w-4" src={Ellipsis} alt="Options" />
                        </div>
                        <div className="flex md:flex-col items-center md:items-start justify-between">
                            <p className="text-2xl lg:text-5xl font-light text-white md:mb-3">{time.timeframes[currentTime].current}hrs</p>
                            <p className="text-white text-opacity-75 text-xs ">{timeWord} - {time.timeframes[currentTime].previous}hrs</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TimeCard;