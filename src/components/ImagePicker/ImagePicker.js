// Import Modules
import { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const ImagePicker = ({ key, file, preview, setPreview, setFile, name }) => {
  const fileInput = useRef(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleClick = () => {
    fileInput?.current?.click();
  };

  return (
    <div className="flex flex-col relative h-1/2 bg-slate-700 w-[30vw] px-4 py-4 rounded">
      <div className="flex flex-row items-center justify-between">
        <div className="flex px-4 py-1 bg-slate-900 text-white text-sm border-gray-100 h-fit">
          { name }
        </div>
        <button
          className="bg-green-500 px-4 py-1 flex flex-row items-center text-sm font-semibold"
          onClick={handleClick}
        >
          <AiOutlineCloudUpload className="mr-1" />
          <p>Select Image</p>
        </button>
        <input
          type="file"
          name={key}
          className="hidden"
          ref={fileInput}
          onChange={handleUpload}
          accept="image/*"
        />
      </div>
      {preview ? (
        <img
          src={preview}
          alt="ima"
          className="h-[220px] object-contain my-4"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-white font-bold">
          <p>Upload a image to get started</p>
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
