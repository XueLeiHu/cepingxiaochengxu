Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    text:{
      type:String
    },
    bgColor:{
      type:String,
      value:"#eeecf4"
    },
    fontColor:{
      type: String,
      value: "#9d97ad"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
