
export default function Star({color}) {


    return (

        <div className="w-2/5 text-center space-y-2 mt-4 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 text-3xl">
                <div className={`line h-1 w-32 bg-${color}`}></div>
                <i className={`fa-solid fa-star text-${color}`}></i>
                <div className={`line h-1 w-32 bg-${color}`}></div>
            </div>
        </div>
        
    );
}
