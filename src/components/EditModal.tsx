import { Todo } from "../types";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";

export default function EditModal({ todo }: { todo: Todo }) {
  const [val, setVal] = useState(todo.title);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <Input value={val} onChange={(e) => setVal(e.target.value)} />
      </DialogContent>
    </Dialog>
  );
}
