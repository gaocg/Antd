2020/05/20  学习结果 {Antd:form表单 的labelCol,warapperCol参数}

labelCol,wrapperCol:效果同Grid布局，当labelCol = 8 ;wrapperCol=16时,代表左侧提示文字区域宽度为右侧输入框一半在,而二者相加的宽度为父元素宽度.(labelCol + wrapperCol = 24)

layout布局:Sider 组件会单独开辟一块区域(父元素的背景图不会占据该区域)

Form.Item存在时 Input子组件的value无效,在Form.Item的valuePropName属性里预设值。

hasFeedback:输入框尾部图标 配合validateStatus 可以固定展示对应图标，不选定则根据输入校验结果展示success 或者 error 

validateStatus:输入框尾部图标(success' 'warning''error''validating') 四种属性

addonBefore,addonAfter:Input 前置，后置标签，可以放入其他reactNode

initialValues : Form表单预设值,传入对象,所以是双大括号

antd-img-crop:图片裁剪插件, rotate 参数 提供图片旋转功能
