function SkillProp(prop: SkillInfo) {
  return (
    <div className="prop" id={prop.id}>
      <h3 className="subtitle">
        {prop.subtitle}
      </h3>
      <table className="table">
        <tbody>
          {prop.skills.map((skill, index) => (
            <tr key={index}>
              <td className="name">{skill.name}</td>
              <td className="exp">{skill.exp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SkillProp;
