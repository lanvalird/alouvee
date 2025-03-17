'use client'

import { db, Note } from '@/libs/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { useRouter } from 'next/navigation'

export default function NoteEditor({ noteId }: { noteId: number }) {
  const router = useRouter()

  const note = useLiveQuery(() => db.notes.get(noteId))

  function saveNote(note: Partial<Note>) {
    db.notes.update(noteId, note)
  }

  return (
    <main className="flex flex-col">
      <h1 className="mb-2">{note?.title || '...'}</h1>
      {note ? (
        <>
          <input
            className="mb-2 rounded-sm border border-gray-400 p-2"
            type="text"
            onChange={(e) => saveNote({ title: e.currentTarget.value })}
            placeholder="My Awesome Title..."
            defaultValue={note?.title}
          />
          <textarea
            className="mb-2 rounded-sm border border-gray-400 p-2"
            name="note-content"
            rows={10}
            onChange={(e) => saveNote({ content: e.currentTarget.value })}
            defaultValue={note?.content}
          />
        </>
      ) : (
        'loading'
      )}
      <button className="btn" onClick={() => router.back()}>
        Return
      </button>
    </main>
  )
}
