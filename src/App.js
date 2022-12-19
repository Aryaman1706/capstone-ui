// Import Modules
import { useState } from "react";
import { AiFillFileImage, AiOutlineFormatPainter } from "react-icons/ai";

// Import Components
import ImagePicker from "./components/ImagePicker/ImagePicker";
import OutputImagePicker from "./components/ImagePicker/OutputImagePicker";

// Import Styles
import "./App.css";
import { callApi } from "./sdk/fn";
import ExampleContainer from "./components/ExampleContainer/ExampleContainer";

function App() {
  const [task, setTask] = useState("repose");
  const [body, setBody] = useState("upper_body");
  const [output, setOutput] = useState(null);
  const [file1, setFile1] = useState(null);
  const [preview1, setPreview1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateOutputImage = (base64Img) => {
    setLoading(false);
    setOutput(base64Img);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    callApi(file1, file2, task, body, updateOutputImage);
  };

  return (
    <div className="flex flex-col bg-slate-900 w-full min-h-screen px-8 py-4">
      {console.log(task, body)}
      <div className="flex bg-slate-900 w-full h-screen">
        <div className="flex flex-col gap-4">
          <ImagePicker
            key="input1"
            file={file1}
            setFile={setFile1}
            preview={preview1}
            setPreview={setPreview1}
            name={"Input"}
          />
          <ImagePicker
            key="input2"
            file={file2}
            setFile={setFile2}
            preview={preview2}
            setPreview={setPreview2}
            name={"Target"}
          />
        </div>
        <div className="flex flex-col w-1/3 justify-center items-center">
          <h1 className="text-white font-extrabold text-3xl flex mb-8">
            <AiOutlineFormatPainter /> EcTo
          </h1>
          <div className="bg-slate-700 text-white p-4 flex flex-col gap-4 rounded">
            <h3 className="font-bold text-center text-lg">Options</h3>
            <div className="flex gap-4 justify-between">
              <p>Task</p>
              <select
                name="task"
                id="task"
                value={task}
                // defaultValue={task}
                onChange={(e) => setTask(e.target.value)}
                className="bg-gray-400 rounded"
              >
                <option value={"repose"}>repose</option>
                <option value={"garment_transfer"}>garment transfer</option>
              </select>
            </div>
            <div className="flex gap-4 justify-between">
              <p>Body part to focus on</p>
              <select
                name="body"
                id="body"
                value={body}
                // defaultValue={body}
                onChange={(e) => setBody(e.target.value)}
                className="bg-gray-400 rounded"
              >
                <option value={"upper_body"}>Upper Body</option>
                <option value={"lower_body"}>Lower Body</option>
              </select>
            </div>
            <button
              className="bg-green-600 font-bold py-2 flex justify-center items-center"
              onClick={(e) => clickHandler(e)}
            >
              <AiFillFileImage /> Generate
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <OutputImagePicker output={output} setOutput={setOutput} loading={loading} />
        </div>
      </div>
      <div className="py-4">
        <h2 className="text-white font-bold mb-4">Examples</h2>
        <ExampleContainer
          file1={file1}
          setFile1={setFile1}
          preview1={preview1}
          setPreview1={setPreview1}
          file2={file2}
          setFile2={setFile2}
          preview2={preview2}
          setPreview2={setPreview2}
          setTask={setTask}
          setBody={setBody}
        />
      </div>
    </div>
  );
}

export default App;
