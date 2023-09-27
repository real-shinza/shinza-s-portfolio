interface BiographyInfo {
  className: string,
  title: string,
  biographies: { date: string, description: string, }[]
};

function BiographyPeop(prop: BiographyInfo) {
  let propClassName: string = `${prop.className} prop`
  let titleClassName: string = `${prop.className} title`;
  let tableClassName: string = `${prop.className} table`;

  return (
    <div className={propClassName}>
      <h3 className={titleClassName}>
        {prop.title}
      </h3>
      <table className={tableClassName}>
        <tbody>
          {prop.biographies.map((biography) => (
            <tr>
              <td className="date">{biography.date}</td>
              <td className="description">{biography.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BiographyPeop;