const formatDate = date => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('id-ID', options)
}

export { formatDate }
