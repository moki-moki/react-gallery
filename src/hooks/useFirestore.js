import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase/config";

const useFirestore = (imgCollection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, imgCollection);

    const q = query(collectionRef, orderBy("timeStamp", "desc"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((item) => {
        documents.push({ ...item.data(), id: item.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collection, imgCollection]);

  return { docs };
};

export default useFirestore;
