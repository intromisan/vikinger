import { toggleModal } from "../redux/slices/todoSlice";
import { useAppDispatch, useAppSelector } from "../shared/hooks";

const Newsfeed = () => {
  const todoList = useAppSelector((state) => state.todo.todoList);
  const dispatch = useAppDispatch();

  return (
    <div>
      Newsfeed
      <button onClick={() => dispatch(toggleModal())}>open</button>
      <div className="todo-list">
        <ul>
          {todoList.map((todo, index) => {
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
  );
};

export default Newsfeed;
