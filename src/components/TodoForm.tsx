import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";
import { Todo } from "../types";
import TodoItem from "../components/TodoItem";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export default function TodoForm() {
  const qc = useQueryClient();
  const [title, setTitle] = useState("");

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => (await api.get("/todos")).data,
  });

  const create = useMutation({
    mutationFn: (todo: Omit<Todo, "id">) => api.post("/todos", todo),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["todos"] }),
  });

  return (
    <>
      <div className="flex gap-2 mb-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task..."
        />
        <Button
          onClick={() => {
            create.mutate({
              title,
              completed: false,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            });
            setTitle("");
          }}
        >
          Add
        </Button>
      </div>

      <div className="space-y-2">
        {data?.map((t: Todo) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </div>
    </>
  );
}
