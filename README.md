2020/05/20  学习结果 {Antd:form表单 的labelCol,warapperCol参数}
labelCol,wrapperCol:效果同Grid布局，当labelCol = 8 ;wrapperCol=16时,代表左侧提示文字区域宽度为右侧输入框一半在,而二者相加的宽度为父元素宽度.(labelCol + wrapperCol = 24)
layout布局:Sider 组件会单独开辟一块区域(父元素的背景图不会占据该区域)
Form.Item存在时 Input子组件的value无效,在Form.Item的valuePropName属性里预设值。