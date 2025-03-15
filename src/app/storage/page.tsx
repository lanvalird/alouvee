"use client";

import { db } from "@/libs/db";
import { useLiveQuery } from "dexie-react-hooks";
import Link from "next/link";

export default function Storage() {
  const notes = useLiveQuery(() => db.notes.toArray());

  async function addNote(title: string, content: string = "") {
    try {
      await db.notes.add({
        title,
        content,
      });
    } catch (error) {
      console.log(`Failed to add ${title}: ${error}`);
    }
  }

  async function removeNote(id: number) {
    try {
      await db.notes.delete(id);
    } catch (error) {
      console.log(`Failed to remove ${id}: ${error}`);
    }
  }

  return (
    <main>
      <Link className="btn" href="/">
        Назад
      </Link>

      {notes?.map(({ id, title, content }) => (
        <div key={id}>
          <h3>
            <span className="italic opacity-80">#{id}</span> {title}
          </h3>
          <p>{content}</p>
          <Link href={`/editor/note/${id}`} className="btn btn-primary mr-2">
            Изменить
          </Link>
          <button className="btn btn-secondary" onClick={() => removeNote(id)}>
            Удалить
          </button>
        </div>
      ))}

      <button className="btn" onClick={() => addNote("new note")}>
        Добавить записку
      </button>
    </main>
  );
}
