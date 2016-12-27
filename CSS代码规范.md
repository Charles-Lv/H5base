# CSS 代码规范


# 选择器部分

* 选择器命名，class命名时选择语义化的遵循SUIT命名规则

* 合理的避免id的使用，两个原因，一个是id修饰权重比较高，不容易被class修改重定义，第二个，id一般被用来定义特定模块的。如果该模块是可重用的，或者不具有特殊意义的不建议使用。
筛选出同时具有两个选择器效果的，中间不加任何符号和空白（知识盲点）。

* 伪类选择器以及属性选择器：css3中新增的伪类选择器以及属性选择器谨慎使用，学会优雅降级或者舍弃部分浏览器，或者引入兼容文件（见html规范的说明）。
区分好子选择器，后代选择器，同辈选择器的使用。

* 选择器的层级关系不宜过多，控制在三层。

> SUIT包括结构(Utilities)和组件(Components)。组件(Components)中又可以有修饰符(Modifiers)、后代(Descendants)和状态(States)。
 * SUIT使用Pascal命名法、驼峰命名法和破折号。SUIT的命名方式.SearchForm-textField。
 * Utilities      
 > Utilities是用来处理结构和位置方面的样式，组件中也可以用这种方式来写。常常在驼峰命名前加一个u-前缀。例如.u-clearFix。
 * Components   
 > SUIT中的Components组件的命名方式常常使用pascal命名，它们更容易识别。例如.SearcForm
 * 组件命名空间
 > 组件可以在命名前加一个nmsp-这样的命名空间，用来防止类名的冲突。比如.mine-SearchForm
 * Descendants  
 > SUIT中的Descendants相当于BEM中的Element。它使用破折号-和驼峰命名结合在一起来。例如.SearchForm-heading，.SearchForm-textField和.SearchForm-submitButto。
 * Modifie  r
 > SUIT中的Modifier和BEM中的一样，但SUIT对他们的角色控制的更为严格。SUIT中的Modifier只用于组件(Components)上，不用于Dedicated上。它也不能用于表示状态(State)变化，就算要用于状态的变化，SUIT也有自己一套专用的命名约定。
 * Modifier都用两个破折号--来连接，例如：SearchForm--advanced。
 * State  
 > State是用来反映组件更改的状态。通过不同的修饰词，反映出组件修改后的基本外观。如果有必要，State也可以应用于Descendent中。State一般都在驼峰命名前添加is-前缀。如：.SearchForm.is-invalid。


## 样式缩写：
复合属性可以缩写在一起，例如font,border,padding,margin,border-radius,background,list-style。
样式复用，某些标签可能具有一些相同样式，学会样式的复用，摘出通用部分，逗号完成。

###  常用选择器命名与页面结构相关的

> header  footer  content  main  nav  subnav  navItem  contBody  w  menu submenu  container  bot  wrapper breadCrumb  column
topNav   panel  sidebar  index  sep


### 与模块内容相关的

> summary  shop  detail info  service guide copyright friendlink  search regist login  title   comment summary  tips
item vote hot news list partner joinus  aboutus  banner  msg  brand

### 与功能相关的

> download   op   link    reject agree   fun add  del  remove hover   clearF   pay  file  

### 与页面元素相关的

> msg btn btnBlock  dataLabel  dataType dataValue  txt  defaultImg  icon logo  dataInput  dropdown

### 与组件大小相关
> lg sm md xs xl

### 与组件状态有关
> primary  danger succ status current disabled failure

### 模块样式：
以模块的思维去写样式代码，按照层级关系依次展开样式，保证模块清晰同时使得一些样式名称可复用，比如title,price等。其中模块样式顶级也可以理解为命名空间，模块子样式可以追加模块样式前缀
全局样式也称为通用样式，无任何其他修饰符，整个页面或者网站都可以使用的样式。定义全局样式的时候，注意样式污染的问题。


## 推荐属性编写顺序：
* 显示属性   display/list-style/position/float/clear     
* 盒子模型   width/height/margin/padding/border        
* 背景  background
* 行高，文本属性其他
line-height,color/font/text-decoration/text-align/,
text-indent/vertical-align/white-space/content,
cursor/z-index/zoom
* css3属性
transform/transition/animation/box-shadow/border-radius
* 链接的样式请严格按照如下顺序添加
a:link -> a:visited -> a:hover -> a:active
