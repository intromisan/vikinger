import React, { useState } from "react";
import { addTodo, toggleModal } from "../redux/slices/todoSlice";
import Button from "../shared/components/Button";
import Card from "../shared/components/Card";
import Modal from "../shared/components/Modal";
import { useAppDispatch, useAppSelector } from "../shared/hooks";
import HeroCard from "./components/HeroCard";

const ProfileTimeline = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const todo = useAppSelector((state) => state.todo);
  const modalOpen = useAppSelector((state) => state.todo.isModalOpen);
  const dispatch = useAppDispatch();

  const addNewItem = () => {
    dispatch(
      addTodo({
        id: "qweasd",
        title,
        description,
        isDone: false,
      })
    );
  };

  return (
    <div className="profile-timeline" style={{ width: "1184px" }}>
      <HeroCard />
      <Button
        text="Open modal"
        color="primary"
        onClick={() => dispatch(toggleModal())}
      />
      <Modal isOpen={modalOpen} onClose={() => dispatch(toggleModal())}>
        <h4>I am inside of the modal</h4>
        <p>I am as well</p>
      </Modal>
      <Card>
        <div className="todo-container">
          <div className="input-row">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>
          <div className="input-row">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </div>
          <button onClick={addNewItem}>Add</button>

          <div className="todo-list">
            <ul>
              {todo.todoList.map((todo, index) => {
                return (
                  <li key={index}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileTimeline;
