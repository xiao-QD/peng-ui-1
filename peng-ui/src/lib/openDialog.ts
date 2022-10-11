import {createApp,h} from 'vue'
import Dialog from './Dialog.vue'

//创建一个函数专门用于打开弹窗
export const openDialog = (options)=>{
    const{title,content,ok,cancel} = options  //解构出标题和内容以及点击确定取消时调用的函数
    const div = document.createElement('div')  //创建一个div元素，将弹窗挂载在它身上
    document.body.appendChild(div)

    //定义关闭函数
    const close = ()=>{
        app.unmount()
        div.remove()
    }
    const app = createApp({
        render(){
            //h可以接受第二个参数，visible，以展示弹窗
            //属性，标题内容之类在第三个参数里传进去
            return h(
                //第一个参数
                Dialog,
                //第二个参数
                {visible:true,
                'onUpdate:visible':(newVisible)=>{
                    //当关闭弹窗时，变量visible的值为false，监测到之后，就销毁弹窗组件
                        if(newVisible == false){
                            //调用上面定义好的关闭函数
                            close()
                        }
                    },
                    ok,cancel
                },
                //第三 个参数
                {title,content }
                
                )
        }
    })
    app.mount(div)     //利用h函数渲染Dialog

}