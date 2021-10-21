import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
  const handleModal = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selected}
        alt="modal"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
