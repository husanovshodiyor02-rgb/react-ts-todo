import TodoForm from "./components/TodoForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <TodoForm />
      </div>
    </div>
  );
}
