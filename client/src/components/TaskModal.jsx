import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";

const TaskModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-5">
        Create Task
      </h2>

      <div className="space-y-4">
        <Input placeholder="Task Title" />

        <textarea
          placeholder="Task Description"
          className="w-full p-3 bg-slate-800 rounded-xl h-32"
        ></textarea>

        <Input type="date" />

        <select className="w-full p-3 bg-slate-800 rounded-xl">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <Button className="w-full">
          Create Task
        </Button>
      </div>
    </Modal>
  );
};

export default TaskModal;