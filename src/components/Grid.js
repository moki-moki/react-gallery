import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Grid = ({ setSelected }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="grid">
      {docs &&
        docs.map((i) => (
          <motion.div
            layout
            className="imgContainer"
            key={i.id}
            onClick={() => setSelected(i.url)}
          >
            <motion.img
              src={i.url}
              alt="pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Grid;
