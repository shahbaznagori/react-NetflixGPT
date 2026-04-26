const VideoTitle = ({title, overview})=>{
    return(
     <div className="w-screen aspect-video  pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
     <h1 className="text-6xl font-bold">{title} </h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex gap-2">
            <button className="bg-white  border border-black text-black p-2 px-10 text-lg rounded-lg hover:bg-opacity-80">▶︎  Play</button>
            <button className="bg-gray-500 bg-opacity-50  border border-black text-white p-1 px-10 hover:bg-opacity-20">More Info</button>
        </div>
        </div>
    );
}

export default VideoTitle;