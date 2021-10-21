import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const uploadHandler = (e) => {
    let files = e.target.files[0];

    if (files && types.includes(files.type)) {
      setFile(files);
      setError("");
    } else {
      setFile(null);
      setError("Select PNG or JPEG for a image type please");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={uploadHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error ? <div>{file.name}</div> : <div>{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
