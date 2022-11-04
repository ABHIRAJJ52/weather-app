export default function Weather(props) {
  return (
    props.wData && (
      <div className="md:w-[600px] w-[90%] mt-10 p-5 flex flex-col justify-center text-white">
        <p className=" text-lg font-light">
          {props.wData?.weather[0]?.description} - {props.wData?.name}
        </p>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-3 gap-8">
          <div>
            <p className="text-4xl font-medium">{props.wData?.main?.temp}</p>
          </div>
          <div>
            <p className="text-md font-medium tracking-wider">Feels Like</p>
            <p className="text-sm text-gray-200">
              {props.wData?.main?.feels_like}
            </p>
          </div>
          <div>
            <p className="text-md font-medium tracking-wider">Humidity</p>
            <p className="text-sm text-gray-200">
              {props.wData?.main?.humidity}
            </p>
          </div>
          <div>
            <p className="text-md font-medium tracking-wider">Speed</p>
            <p className="text-sm text-gray-200">{props.wData?.wind?.speed}</p>
          </div>
        </div>
      </div>
    )
  );
}
