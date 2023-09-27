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
          "普通自動車第一種運転免許 取得",
          "ITパスポート試験 合格",
          "LinuCレベル1 Version10.0 認定",
          "Oracle Certified Java Programmer, Silver SE 11 合格"
        ]}
      />
    </div>
  )
}

export default License;