export default function BiographyPeop(prop: BiographyInfo) {
  return (
    <div className="prop" id={prop.id}>
      <h3 className="subtitle">
        {prop.subtitle}
      </h3>
      <table className="table">
        <tbody>
          {prop.biographies.map((biography, index) => (
            <tr key={index}>
              <td className="date">{biography.date}</td>
              <td className="description">{biography.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
