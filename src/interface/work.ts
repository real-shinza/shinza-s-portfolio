interface WorkInfo {
  id: string,
  name: string,
  image: string,
  description_short?: string,
  description_long?: string,
  skills?: string[],
  links?: WorkLink[],
}

interface WorkLink {
  name: string,
  link: string,
  color_code: { backgroundColor: string },
}
