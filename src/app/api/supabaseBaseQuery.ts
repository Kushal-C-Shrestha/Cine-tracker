const supabaseBaseQuery = async (
  fn: () => PromiseLike<{ data: any; error: any }>
) => {
  const { data, error } = await fn()
  if (error) return { error: error.message as string }
  return { data }
}

export default supabaseBaseQuery
