import { useEffect, useState } from "react";
import { projectStorage, db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prec = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prec);
        console.log("Upload is" + prec + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        setError(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadlUrl) => {
          setUrl(downloadlUrl);
          try {
            addDoc(collection(db, "images"), {
              url: downloadlUrl,
              timeStamp: serverTimestamp(),
            });
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};
export default useStorage;
