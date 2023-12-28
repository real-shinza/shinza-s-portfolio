interface BiographyInfo {
  id: string,
  subtitle: string,
  biographies: BiographyData[],
}

interface BiographyData {
  date: string,
  description: string,
}
