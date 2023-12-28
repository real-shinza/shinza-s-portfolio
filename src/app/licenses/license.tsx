import './license.css';
import data from '../../data/license.json';

function License() {
  const licenses: LicenseData[] = data.licenses;
  return (
    <div className="card" id="license">
      <h1 className="title">
        所有資格
      </h1>
      <div className="prop">
        <table className="table">
          <tbody>
            {licenses.map((license, index) => (
              <tr key={index}>
                <td className="date">{license.date}</td>
                <td className="name">{license.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default License;
