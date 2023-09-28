interface SkillInfo {
  className: string,
  title: string,
  skills: string[]
};

function SkillProp(prop: SkillInfo) {
  let propClassName: string = `${prop.className} prop`
  let titleClassName: string = `${prop.className} title`;
  let contentClassName: string = `${prop.className} content`;

  return (
    <div className={propClassName}>
      <h3 className={titleClassName}>
        {prop.title}
      </h3>
      <div className={contentClassName}>
        {prop.skills.map((skill, index) => (
          <div key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillProp;