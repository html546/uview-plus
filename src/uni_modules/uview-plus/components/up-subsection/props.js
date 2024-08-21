import { defineMixin } from '../../libs/vue.js'
import defProps from '../../libs/config/props.js'
export const props = defineMixin({
    props: {
        // tab的数据
        list: {
            type: Array,
            default: () => defProps.subsection.list
        },
        // 当前活动的tab的index
        current: {
            type: [String, Number],
            default: () => defProps.subsection.current
        },
        // 激活的颜色
        activeColor: {
            type: String,
            default: () => defProps.subsection.activeColor
        },
        // 未激活的颜色
        inactiveColor: {
            type: String,
            default: () => defProps.subsection.inactiveColor
        },
        // 模式选择，mode=button为按钮形式，mode=subsection时为分段模式
        mode: {
            type: String,
            default: () => defProps.subsection.mode
        },
        // 字体大小
        fontSize: {
            type: [String, Number],
            default: () => defProps.subsection.fontSize
        },
        // 激活tab的字体是否加粗
        bold: {
            type: Boolean,
            default: () => defProps.subsection.bold
        },
        // mode = button时，组件背景颜色
        bgColor: {
            type: String,
            default: () => defProps.subsection.bgColor
        },
		// 从list元素对象中读取的键名
		keyName: {
			type: String,
			default: () => defProps.subsection.keyName
		}
    }
})
