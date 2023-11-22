import './license.css'
import Prop from './license_prop'

function License() {
  return (
    <div className="license card">
      <h1 className="license-title">
        所有資格
      </h1>
      <Prop
        className="license"
        licenses={[
          { date: "2019年3月", name: "普通自動車第一種運転免許 取得" },
          { date: "2021年1月", name: "ITパスポート試験 合格" },
          { date: "2021年5月", name: "LinuCレベル1 Version10.0 認定" },
          { date: "2022年4月", name: "Oracle Certified Java Programmer, Silver SE 11 合格" }
        ]}
      />
    </div>
  );
}

export default License;