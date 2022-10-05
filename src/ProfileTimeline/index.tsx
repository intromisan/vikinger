import React, { useState } from "react";
import Button from "../shared/components/Button";
import Modal from "../shared/components/Modal";
import HeroCard from "./components/HeroCard";

const ProfileTimeline = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="profile-timeline" style={{ width: "1184px" }}>
      <HeroCard />
      <Button text="Open modal" color="primary" onClick={modalToggle} />
      <Modal isOpen={modalOpen} onClose={modalToggle}>
        <h4>I am inside of the modal</h4>
        <p>I am as well</p>
      </Modal>
    </div>
  );
};

export default ProfileTimeline;
