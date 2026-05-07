import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";

const AddMemberModal = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-5">
        Add Team Member
      </h2>

      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Member Email"
        />

        <Button className="w-full">
          Add Member
        </Button>
      </div>
    </Modal>
  );
};

export default AddMemberModal;