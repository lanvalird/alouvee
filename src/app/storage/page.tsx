'use client'

import { db } from '@/libs/db'
import { useLiveQuery } from 'dexie-react-hooks'
import Link from 'next/link'

export default function Storage() {
  const notes = useLiveQuery(() => db.notes.toArray())

  async function addNote(title: string, content: string = '') {
    try {
      await db.notes.add({
        title,
        content,
      })
    } catch (error) {
      console.log(`Failed to add ${title}: ${error}`)
    }
  }

  async function removeNote(id: number) {
    try {
      await db.notes.delete(id)
    } catch (error) {
      console.log(`Failed to remove ${id}: ${error}`)
    }
  }

  return (
    <main>
      {notes?.map(({ id, title, content }) => (
        <article className="card mb-4" role="note" key={id}>
          <header className="card-header">
            <h2>{title}</h2>
          </header>

          <div className="card-body">
            <p>{content}</p>
          </div>

          <div className="card-footer">
            <Link href={`/editor/note/${id}`} className="btn btn-primary">
              Edit
            </Link>
            <button
              className="btn btn-secondary"
              onClick={() => removeNote(id)}
            >
              Delete
            </button>
          </div>
        </article>
      ))}

      <div className="mt-8 flex w-full flex-col gap-2 sm:flex-row">
        <Link className="btn" href="/">
          Back
        </Link>

        <button
          className="btn w-full"
          onClick={() =>
            addNote('new note', 'Hello! I am a new note. You can edit me!')
          }
        >
          Add note
        </button>
      </div>
    </main>
  )
}
