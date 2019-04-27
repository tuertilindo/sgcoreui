import React from "react"
import {Alert} from "antd"

export default ({logs = []}) => (
  <div>
    {logs.map(item => (
      <Alert
        message={item.message}
        description={item.description}
        type={item.type || "success"}
        showIcon
      />
    ))}
  </div>
)
