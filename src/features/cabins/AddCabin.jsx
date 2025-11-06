import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [openModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((openModal) => !openModal)}>
        Add new Cabin
      </Button>
      {openModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
