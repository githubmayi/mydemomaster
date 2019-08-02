/**
 * Vue的辅助插件存放公共方法 2019-8-2
 */

 export default{
     install(Vue){
         Vue.prototype.$const = {
             login: 'login'
         }

         Vue.prototype.$plugins = {
             SetLocalStorage: (item,val) => {
                 window.localStorage[item] = val;
             },
             setSessionStorage: (item,val) => {
                 window.sessionStorage[item] = val;
             },
             GetStorage: (type,item) => {
                 let val;
                 if (type == 'localStorage' || type == 'local') {
                     val = localStorage.getItem(item);
                 }else{
                     val = sessionStorage.getItem(item);
                 }
                 return val;
             }
         }
     }
 }