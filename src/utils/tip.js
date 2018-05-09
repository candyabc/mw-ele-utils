/**
 * 提示与加载工具类
 */
import { Loading } from 'element-ui';
import { Message } from 'element-ui';
import { MessageBox } from 'element-ui';

export default class Tips {
  constructor() {
    this.useLoading = true;
  }
  /**
   * 弹出提示框
   */

  static success(title, duration = 1000) {
    Message.success({message:title,
      duration:duration,
      })
  }

  /**
   * 弹出确认窗口
   */
  static confirm(text, title) {
    return MessageBox.confirm(
      text,
      title||document.title,
      {
        type:"warning",
        showCancelButton: true,
        showConfirmButton:true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'})

  }

  /**
   * 警告框
   */
  static warning(title) {
    Message.warning({message:title,
      duration:1500,
    })
  }

  /**
   * 错误框
   */

  static error(title) {
    Message.error({message:title,
      duration:1500,
    })
  }

  /**
   * 弹出加载提示
   */
  static loading(target) {
    if(!this.useLoading) return
    this.loadingInstance = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
      target: target || 'document.body'
    })
  }
  /**
   * 加载完毕
   */
  static loaded() {
    if (this.loadingInstance){
      this.loadingInstance.close()
    }
  }


}

/**
 * 静态变量，是否加载中
 */
// Tips.isLoading = false;
Tips.useLoading = true
