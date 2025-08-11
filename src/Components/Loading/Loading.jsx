import { ScaleLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[40vh]'>
            <ScaleLoader />
        </div>
    );
};

export default Loading;