import NoteEditor from './NoteEditor'

export default async function Editor({
  params,
}: {
  params: Promise<{ itemType: string; itemId: string }>
}) {
  const { itemType, itemId } = await params

  const id = +itemId

  if (isNaN(id)) return 'ID is not number'

  if (itemType === 'note') {
    return <NoteEditor noteId={id} />
  }

  return 'Load failed (bad parameters)'
}
