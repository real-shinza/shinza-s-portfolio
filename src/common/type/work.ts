export type WorkData = {
  id: string,
  name: string,
  image: string,
  description_short: string,
  description_long: string,
  skills: string[],
  links?: {
    name: string,
    link: string,
    color_code: string,
  }[],
};

export type Works = WorkData[];
