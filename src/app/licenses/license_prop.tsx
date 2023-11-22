interface LicenseInfo {
  className: string,
  licenses: { date: string, name: string }[]
};

function LicenseProp(prop: LicenseInfo) {
  let propClassName: string = `${prop.className} prop`;
  let tableClassName: string = `${prop.className} table`;

  return (
    <div className={propClassName}>
      <table className={tableClassName}>
        <tbody>
          {prop.licenses.map((license, index) => (
            <tr key={index}>
              <td className="date">{license.date}</td>
              <td className="name">{license.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LicenseProp;