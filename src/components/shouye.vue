<template>
  <div>
       首页 
      <h3>MD5加密</h3>
      <div>
           <label for="uesrName">首页</label>
           <input type="text" v-model="name" id="uesrName">
      </div>
      <div>
          <label for="pwd">密码</label>
          <input type="password" v-model="pwd" id="pwd">
      </div>
      <div>
          <button @click="test()">测试</button>
      </div>

      <h3>base64加密</h3>
      <div>
           <label for="base_uesrName">首页</label>
           <input type="text" v-model="base_name" id="base_uesrName">
      </div>
      <div>
          <label for="base_pwd">密码</label>
          <input type="password" v-model="base_pwd" id="base_pwd">
      </div>
      <div>
          <button @click="base_test()">测试</button>
      </div>
        
      <h3>3DES加密</h3>  
      <div>
           <label for="base_uesrName">首页</label>
           <input type="text" v-model="DES_name" id="DES_uesrName">
      </div>
      <div>
          <label for="base_pwd">密码</label>
          <input type="password" v-model="DES_pwd" id="DES_pwd">
      </div>
      <div>
          <button @click="DES_test()">测试</button>
      </div>



  </div>
</template>

<script>

//base加密
let Base64 = require('js-base64').Base64;
//进入3DES加密
import CryptoJS from 'crypto-js'

export default {
  name: 'HelloWorld',
  data () {
    return {
        name:'',
        pwd:'',
        base_name:'',
        base_pwd:'',
        DES_name:'',
        DES_pwd:'',
        DES_encryption:""
    }
  },
  methods:{
      test(){
          console.log(this.pwd)
          let test = this.$md5(this.pwd);
        //   console.log(this.name);
          console.log(test);
        //   console.log(test);
      },
      base_test(){
          console.log(Base64.encode("123456"));
          console.log(Base64.decode("MTIzNDU2"));
      },

      //3DES加密测试
        //DES加密
        encryptByDES(message, key){
                const keyHex = CryptoJS.enc.Utf8.parse(key);
                const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
                return encrypted.toString();
        },
        //DES解密
        decryptByDES(ciphertext, key){
                const keyHex = CryptoJS.enc.Utf8.parse(key);
                const decrypted = CryptoJS.DES.decrypt({
                            ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
                }, keyHex, {
                            mode: CryptoJS.mode.ECB,
                            padding: CryptoJS.pad.Pkcs7
                });
                return decrypted.toString(CryptoJS.enc.Utf8);
        },
        DES_test(){
            this.DES_encryption = this.encryptByDES(this.DES_pwd);
            console.log("加密：" + this.DES_encryption);
            console.log("解密：" + this.decryptByDES(this.DES_encryption));
            var text = this.encryptByDES(this.DES_name);
            console.log("加密：" + text);
            console.log("解密：" + this.decryptByDES(text));
        }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

