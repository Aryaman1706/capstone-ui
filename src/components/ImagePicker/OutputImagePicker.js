const OutputImagePicker = ({ output, setOutput, loading }) => {
  return (
    <div className="flex flex-col h-full bg-slate-700 w-full px-4 py-4 rounded">
      <div className="flex flex-row items-center">
        <div className="flex px-4 py-1 bg-slate-900 text-white text-sm border-gray-100 h-fit">
          Output
        </div>
      </div>
      {output ? (
        <img src={output} alt="ima" className="h-[620px] object-contain my-4" />
      ) : (
        <div className="flex h-full items-center justify-center text-white font-bold">
          <p>{loading ? "Loading..." : "Generate an image by uploading input images"}</p>
        </div>
      )}
    </div>
  );
};

export default OutputImagePicker;
