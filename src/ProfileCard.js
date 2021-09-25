import profilePic from './images/image-jeremy.png'

const ProfileCard = ({ handleTimeChange, currentTime }) => {

    return (
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 w-full">
            <div className="relative p-8 md:p-6 bg-profile rounded-xl flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-8 h-2/3">
                <div className="flex-shrink-0">
                    <img className="h-16 w-16 rounded-full border-2 border-white" src={profilePic} alt="Profile of Jeremy Robson" />
                </div>
                <div>
                    <p className="text-sm font-light text-white text-opacity-75">Report for</p>
                    <p className="text-xl md:text-4xl font-light text-white">Jeremy Robson</p>
                </div>
            </div>
            <div className="px-6 pt-7 pb-4 bg-card-background rounded-b-xl flex lg:flex-col justify-between md:justify-evenly gap-3 h-1/3-plus-75 -mt-3">
                <div><button className={`${(currentTime === "daily" ? "text-white" : "text-desat-blue")} hover:text-white`} onClick={() => handleTimeChange("daily")}>Daily</button></div>
                <div><button className={`${(currentTime === "weekly" ? "text-white" : "text-desat-blue")} hover:text-white`} onClick={() => handleTimeChange("weekly")}>Weekly</button></div>
                <div><button className={`${(currentTime === "monthly" ? "text-white" : "text-desat-blue")} hover:text-white`} onClick={() => handleTimeChange("monthly")}>Monthly</button></div>
            </div>
        </div>
    );
}

export default ProfileCard;