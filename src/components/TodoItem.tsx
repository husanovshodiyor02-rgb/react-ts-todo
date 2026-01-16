import { Todo } from "../types";
import { Checkbox } from "../components/ui/checkbox";
import EditModal from "../components/EditModal";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className="bg-white p-3 rounded flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Checkbox checked={todo.completed} />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
      </div>
      <EditModal todo={todo} />
    </div>
  );
}
