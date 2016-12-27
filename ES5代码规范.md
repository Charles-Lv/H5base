# javascript代码规范 v0.1

## 基础规范

### 变量命名规则

> 变量名包括全局变量，局部变量，类变量，函数参数等等，他们都属于这一类。变量命名都以类型前缀+有意义的单词组成，单词首字母都需要大写。例如：sUserName，nCount。并注意闭包造成的不可回收影响。

变量都需要有一个类型前缀，按照类型可以拆分或者组合(与全局或私有组合)：

* `s`：表示字符串。例如：sName，sHtml;
* `n`：表示数字。例如：nPage，nTotal;
* `b`：表示逻辑。例如：bChecked，bHasLogin;
* `a`：表示数组。例如：aList，aGroup;
* `r`：表示正则表达式。例如：rDomain，rEmail;
* `f`：表示函数。例如：fGetHtml，fInit;
* `o`：表示以上未涉及到的如json对象等，例如：oButton，oDate;
* `g`: 表示全局变量,例如 gfdebugmod;
* `_` : 表示私有变量 ` _finit`;

变量后缀规则：

* 类的名称可以为 模块 + 类名
* 某变量名称可以为 事件或模块名称+对象名：oLoginUser = {uname:"",pwd:""}
* 某事件响应函数命名方式为触发事件对象名+事件名或者模块名+触发事件对象名+事件名。   
例如：fDivClick()，fAddressSubmitButtonClick()

> 例外情况：
* 作用域不大临时变量（if语句，for语句等）可以简写，比如：str，num，bol，obj，fun，arr。
* 循环变量可以简写，比如：i，j，k等。

### Emacsript 5 及以下类的定义
``` javascript  
  //普通对象
  function oNamePro(sName){
    this.name = sName;
    this.sNameValid = check(this._name);
  }
  var oName =new oNamePro();
  oName.name;

  /**
   * 静态属性类
   */
  var oLoginLogic={
    _sName:"",
    _sPwd:"",
    _fInitPage:function(){
      //TODO something,exp:EventBind...
    },
    _fupLoadUserInfo(){}
  }
  oLoginLogin._fInitPage();

  /*** 定义静态类，类似jQuery ***/
  var StaticClass = (function(){
    //返回的对象
    var Return = {
      Property: "Test Static Property", //公有属性
      Method: function(){ //公有方法
        alert(_Field); //调用私用字段
        privateMethod(); //调用私用方法
      }
    }; //定义返回的公有对象
    var _Field = "Test Static Field"; //私有字段
    var privateMethod = function(){ //私有方法
      alert(Return.Property); //调用属性
    }
    return Return; //生成公有静态元素
  })();

  StaticClass.Method();
  StaticClass.Property = "Test2";
  StaticClass.Method();

  /***定义类***/
  var Aplle = function(){
    var _self = this;//把本身引用负值到一变量上

    var _Field = "Test Field"; //私有字段
    var privateMethod = function(){ //私有方法
        alert(_self.Property); //调用属性
    }
    //使用this包裹的才是公开方法或属性
    this.Property = "Test Property"; //公有属性
    this.Method = function(){ //公有方法
        alert(_Field); //调用私用字段
        privateMethod(); //调用私用方法
    }
    /***析构函数***/
    var init = function(){
        privateMethod();
    }
    init();
  }
  var c =new Aplle();
  c.Method();

    //ES5以下不推荐使用方法类的继承
    //一般都是通过原型链的方式实现或者call，apply。多少会有缺陷。
    //如果有需要可以直接原型链组合，或是属性拷贝
    function extend(Child, Parent) {
        var F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    }
    function extend2(Child, Parent) {
        var p = Parent.prototype;
        var c = Child.prototype;
        for (var i in p) {
        c[i] = p[i];
        }
        c.uber = p;
    }
```

### 使用 JSDoc 注释

```javascript
文件注释
// Copyright 2016 dianjia.io. All Rights Reserved.
/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @author user@google.com (Firstname Lastname)
 */

 函数注释
/**
 * fAddressGetEmail - 测试函数
 *
 * @param  {type} sEmail description
 * @return {type}     description
 */
function fAddressGetEmail(sEmail){
}

 变量注释
//a是一个空字符串
var a="";
a = a+"111111";//表达式注释

```
