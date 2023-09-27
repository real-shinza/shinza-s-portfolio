interface LicenseInfo {
  className: string,
  licenses: string[]
};

function LicenseProp(prop: LicenseInfo) {
  let propClassName: string = `${prop.className}-prop`;

  return (
    <div className={propClassName}>
      {prop.licenses.map((license) => (
        <div>{license}</div>
      ))}
    </div>
  )
}

export default LicenseProp;