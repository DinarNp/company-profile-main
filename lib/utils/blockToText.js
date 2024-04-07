export const blockToText = block => {
  let filtered = block.filter(
    item =>
      item.type in
      { heading: 'heading', paragraph: 'paragraph', quote: 'quote' }
  )
  let result = ''
  filtered.forEach(item => {
    item.children.forEach(itm => {
      result += itm.text + ' '
    })
  })

  return result
}
