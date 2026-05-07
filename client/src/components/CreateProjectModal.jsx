import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";

const CreateProjectModal = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-5">
        Create Project
      </h2>

      <div className="space-y-4">
        <Input placeholder="Project Name" />

        <textarea
          placeholder="Project Description"
          className="w-full p-3 bg-slate-800 rounded-xl h-32"
        ></textarea>

        <Button className="w-full">
          Create Project
        </Button>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;