interface WorkLink {
  name: string,
  link: string,
  color_code: { backgroundColor: string },
}

interface WorkInfo {
  id: string,
  name: string,
  image: string,
  description_short?: string,
  description_long?: string,
  skills?: string[],
  links?: WorkLink[],
}
