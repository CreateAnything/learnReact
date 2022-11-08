# React学习

## 1.React基础

[TOC]



### 1.1.React虚拟Dom

1. 什么是Dom

   DOM是用一颗逻辑树来表示一个文档，树的每个分支的终点都是一个节点，可以用特定的方式（编写JS、CSS、HTML）来改变这个树的结构，从而改变文档结构、样式或内容。

2. 什么是虚拟Dom

   虚拟DOM就是一个JS对象，通过对象的方式来表示DOM结构，通过事务处理机制，将多次DOM修改的结果一次性更新到页面上，从而有效的减少页面渲染次数，减少修改DOM重绘重排的时间，提高渲染性能。

   React在内存中维护一个跟真实DOM一样的虚拟DOM树，再改动完组件后，会再生成一个新的虚拟DOM，React会将新的虚拟DOM和原来的虚拟DOM进行对比，找出两个DOM树的不同的地方（diff），然后在真实DOM上更新diff，提高渲染速度。

3. 为什么要使用虚拟dom

   1. 提供更好的性能
      - 对于真实DOM：生成HTML字符串，重建`所有`DOM元素
      - 对于虚拟DOM：生成虚拟DOM节点，采用diff算法，更新出现变化的真实DOM节点
   2. 虚拟DOM虽然要进行更多的步骤，但它的性能消耗是极低的。

### 1.2.虚拟Dom创建的两种方式

1. 使用jsx创建虚拟dom(推荐使用)

   ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <script type="text/babel">
           //1.创建虚拟dom
           const Vdom = (
               <h1 id="title"><span>Hello,React</span></h1>
           )//此处不要写引号，因为不是字符串
           //2.渲染虚拟dom到页面
           ReactDOM.render(Vdom,document.getElementById('test'))
           console.log(Vdom)
       </script>
   </body>
   </html>
   ```

   

2. 使用js创建虚拟dom(不推荐使用太繁琐)

   ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <script type="text/javascript">
           //1.创建虚拟dom
           const Vdom = React.createElement('h1',{
               id:'title'
           },React.createElement('span',{},'Hello,React'))
           //2.渲染虚拟dom到页面
           ReactDOM.render(Vdom,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

   

3. 什么是虚拟dom

   - 本质是object类型的对象(一般对象)

     ![image-20221108144449158](C:\Users\wmq39\AppData\Roaming\Typora\typora-user-images\image-20221108144449158.png)

   - 虚拟dom比较"轻",真实dom比较"重",因为虚拟DOM是React内部再用,无需真实DOM上那么多的属性

   - 虚拟DOM会被React转化为真实DOM,呈现在页面上

4. 总结:jsx创建虚拟dom就是原始js创建虚拟dom的语法糖

### 1.3.JSX的语法规则

1. 全称:JavaScript XML

2. React定义的一种类似于XML的JS扩展语法:JS + XML

3. 本质是React.createElement(component,props,...children)方法的语法糖

4. 作用:用来简化创建虚拟Dom

5. 定义虚拟dom时不要写引号

6. 标签中混入JS表达式时要用{}

7. 样式的类名指定不要用class,要用className

8. 内联样式要用style = {{key:value}}的方式书写

9. 只有一个根标签

10. 标签必须闭合

11. 标签首字母

    - 若小写字母开头，则将该标签转为html中同名的元素，若html中无该标签对应的同名元素，则会报错

    - 若大写字母开头，则react就去渲染对应的组件，若组件没有定义，则报错

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
              .title{
                  background-color: red;
                  width: 200px;
              }
          </style>
      </head>
      <body>
          <!-- 准备好一个容器 -->
          <div id="test"></div>
          <!-- react核心库 -->
          <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <!-- 引入react-dom,用于支持react操作Dom -->
          <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
          <!-- 用于将jsx转化为js -->
          <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
          <script type="text/babel">
              const myId = 'myId'
              const myData = 'Hello,React'
              //1.创建虚拟dom
              const VDOM = (
                  <div>
                      <h2 className='title' id={myId}>
                          <span style={{color:'white',fontSize:'29px'}}>
                              {myData.toLocaleLowerCase()}
                          </span>
                      </h2> 
                      <input type="text"/>          
                  </div>
              )
              //2.渲染虚拟dom到页面
              ReactDOM.render(VDOM,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      

### 1.4.模块与组件

1. 模块
   1. 理解：向外提供特定功能的js程序，一般就是一个js文件
   2. 为什么要拆成模块:随着业务逻辑的增加,代码越来越多且复杂
   3. 作用:复用js,简化js的编写，提高js运行效率
2. 组件
   1. 理解:用来实现局部功能效果的代码和资源的集合(html,css,js,image等等)
   2. 为什么L一个界面的功能更复杂的情况下往往需要拆分成不同的组件
   3. 作用:复用代码，简化项目编码，提高运行效率
3. 模块化
   1. 当应用的js都以模块来编写的，这个应用就是一个模块化的应用
4. 组件化
   1. 当应用是以多个组件的方式实现的情况下，这个应用就是一个组件化的应用

## 2.面向组件编程

### 2.1.函数式组件

### 2.2.类式组件

#### 2.2.1.类式组件的创建

1. 类式组件必须具有的条件

   1. 类式组件必须继承React.Component
   2. 类式组件必须有render函数
   3. 类式组件render必须有返回值

2. 代码

   ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <script type="text/babel">
           //1.创建类式组件
           class MyComponent extends React.Component{
               //render是放在哪里的? ---MyComponent类的原型对象上,供实列使用
               //render中的this是谁? --- MyComponent的实列对象。MyComponent组件实列对象
               render(){
                   return (
                       <h1>我是类式组件</h1>
                   )
               }
           }
           //渲染组件到页面
           ReactDOM.render(<MyComponent/>,document.getElementById('test'))
           /*
               执行ReactDOM,render(<MyCompnent/>,..)之后发生了什么?
               1.React解析组件标签，找到了MyCompnent组件
               2.发现组件是使用类定义的,随后new出来该类的实列,并通过实列调用到原型上的render方法
               3.将render返回的虚拟DOM转为真实的DOM,随后呈现在页面中
           */
       </script>
   </body>
   </html>
   ```

#### 2.2.2.state的使用

- 理解

  1. state是组件对象最重要的属性,值是对象(可以包含多个key-value的组合)
  2. 组件被称为状态机，通过更新组件的state来更新对应的页面显示(重新渲染组件)

- state的使用

  ```react
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <!-- 准备好一个容器 -->
      <div id="test"></div>
      <!-- react核心库 -->
      <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <!-- 引入react-dom,用于支持react操作Dom -->
      <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <!-- 用于将jsx转化为js -->
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script type="text/babel">
          //1.创建类式组件
          class Weather extends React.Component{
              //构造器只调用一次
              constructor(props){
                  super(props)//调用父类构造器
                  this.state = {//初始化状态
                      isHot:true,
                      wind:'微风'
                  }
              }
              // changeWeather(){
              //     /*
              //         由于changeWeather为onClick的回调，所以不是通过
              //         实列调用的，是直接调用
              //         类中的方法默认开启了局部严格模式，所以changeWeather
              //         中的this为undefind
              //     */
              // }
              //如何解决这个问题(使用箭头函数)或者this.changeWeather = this.changeWeather.bind(this)
              changeWeather = () =>{
                  //严重注意:状态state不可以直接更改，需要借助内置的api去更改
                  //状态需要使用setState进行更改
                  this.setState({isHot:!this.state.isHot})
              }
              //render调用几次?--->1+n次
              //changeWeather执行几次 ->点几次执行几次
              render(){
                  //读取状态
                  const {isHot} = this.state
                  return (
                      <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>
                  )
              }
          }
          //渲染组件到页面
          ReactDOM.render(<Weather/>,document.getElementById('test'))
      </script>
  </body>
  </html>
  ```

- state的简化操作

  ```react
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <!-- 准备好一个容器 -->
      <div id="test"></div>
      <!-- react核心库 -->
      <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <!-- 引入react-dom,用于支持react操作Dom -->
      <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <!-- 用于将jsx转化为js -->
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script type="text/babel">
          //1.创建类式组件
          class Weather extends React.Component{
              state = {
                  isHot:true
              }
              changeWeather = () =>{
                  this.setState({isHot:!this.state.isHot})
              }
              render(){
                  const {isHot} = this.state
                  return (
                      <h1 onClick={this.changeWeather}>
                          今天天气很{isHot ? '炎热' : '凉爽'}
                      </h1>
                  )
              }
          }
          //渲染组件到页面
          ReactDOM.render(<Weather/>,document.getElementById('test'))
      </script>
  </body>
  </html>
  ```

- 总结

  1. 组件中render方法中的this为组件实列对象
  2. 组件自定义的方法中this为undefined如何解决?
     1. 强制绑定this,通过函数对象的bind()
     2. 箭头函数
  3. 状态数据,不能直接修改或更新

#### 2.2.3.props的使用

1. 如何在类式组件中使用props

   ```react
   
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test1"></div>
       <div id="test2"></div>
       <div id="test3"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <script type="text/babel">
           //1.创建类式组件
           class Person extends React.Component{
               render(){
                   const {name,age,sex} = this.props
                   return (
                       <ul>
                           <li>姓名:{name}</li>
                           <li>性别:{sex}</li>
                           <li>年龄:{age}</li>
                       </ul>
                   )
               }
           }
           //渲染组件到页面
           const person = {
               name:'老刘',
               age:35,
               sex:'男'
           }
           let person1 = {...person,name:'老王'}
           //如果属性过多的情况下可以
           ReactDOM.render(<Person {...person}/>,document.getElementById('test3'))
           ReactDOM.render(<Person {...person1} />,document.getElementById('test1'))
           ReactDOM.render(<Person name="AL" age="18" sex="男"/>,document.getElementById('test2'))
       </script>
   </body>
   </html>
   ```

2. 如何使用propType验证props的数据类型

   ```react
   
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test1"></div>
       <div id="test2"></div>
       <div id="test3"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <!-- 引入proptype.js用于验证props类型 -->
       <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
       <script type="text/babel">
           //1.创建类式组件
           class Person extends React.Component{
               render(){
                   const {name,age,sex} = this.props
                   return (
                       <ul>
                           <li>姓名:{name}</li>
                           <li>性别:{sex}</li>
                           <li>年龄:{age}</li>
                       </ul>
                   )
               }
           }
           //对标签进行类型,必要性限制
           Person.propTypes = {
               name:PropTypes.string.isRequired,//名字必须是string类型而且必须是必传
               age:PropTypes.number,//性别必须是number类型(非必传)
               sex:PropTypes.string,//性别必须为string类型(非必传)
               speak:PropTypes.func//方法必须为一个function(非必传)
   
           }
           //指定默认值
           Person.defaultProps = {
               sex:'男',
               age:18
           }        
           //渲染组件到页面
           const person = {
               name:'老刘',
               age:35,
               sex:'男'
           }
           let person1 = {...person,name:'老王'}//修改
           function speak(){
               console.log('我说话了')
           }
           //如果属性过多的情况下可以
           ReactDOM.render(<Person {...person}/>,document.getElementById('test3'))
           ReactDOM.render(<Person speak={speak} name="wmq" age={99} sex="女" />,document.getElementById('test1'))
           ReactDOM.render(<Person name="AL" age={18} sex="男"/>,document.getElementById('test2'))
       </script>
   </body>
   </html>
   ```

3. 类式组件中prpType的简写形式

   ```react
   
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test1"></div>
       <div id="test2"></div>
       <div id="test3"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <!-- 引入proptype.js用于验证props类型 -->
       <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
       <script type="text/babel">
           //1.创建类式组件
           class Person extends React.Component{
               //对标签属性进行类型，必要性的限制
               static propTypes = {
                   name:PropTypes.string.isRequired,//名字必须是string类型而且必须是必传
                   age:PropTypes.number,//性别必须是number类型(非必传)
                   sex:PropTypes.string,//性别必须为string类型(非必传)
                   speak:PropTypes.func//方法必须为一个function(非必传)                
               }
               //指定默认标签属性值
               static defaultProps = {
                   sex:'男',
                   age:18              
               }
               render(){
                   const {name,age,sex} = this.props
                   //props是只读的不能修改
                   return (
                       <ul>
                           <li>姓名:{name}</li>
                           <li>性别:{sex}</li>
                           <li>年龄:{age}</li>
                       </ul>
                   )
               }
           }
           //渲染组件到页面
           const person = {
               name:'老刘',
               age:35,
               sex:'男'
           }
           let person1 = {...person,name:'老王'}//修改
           function speak(){
               console.log('我说话了')
           }
           //如果属性过多的情况下可以
           ReactDOM.render(<Person {...person}/>,document.getElementById('test3'))
           ReactDOM.render(<Person speak={speak} name="wmq" age={99} sex="女" />,document.getElementById('test1'))
           ReactDOM.render(<Person name="AL" age={18} sex="男"/>,document.getElementById('test2'))
       </script>
   </body>
   </html>
   ```

4. 类式组件中的props和构造器

   ```react
   
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <!-- 引入proptype.js用于验证props类型 -->
       <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
       <script type="text/babel">
           //1.创建类式组件
           class Person extends React.Component{
               /*
                   通常在React中构造函数仅用于以下两种情况
                   1.通过this.state赋值对象来初始化内部state
                   2.为事件处理函数绑定实列
                   注意:在构造器中不要调用setState()方法,如果你的组件需要使用内部的state
                   轻直接在构造函数中为this.state赋初始state
               */
               constructor(props){
                   //构造器是否接受props,是否传递给super取决于是否希望在构造器中通过this访问props
                   super(props)
               }
               //对标签属性进行类型，必要性的限制
               static propTypes = {
                   name:PropTypes.string.isRequired,//名字必须是string类型而且必须是必传
                   age:PropTypes.number,//性别必须是number类型(非必传)
                   sex:PropTypes.string,//性别必须为string类型(非必传)              
               }
               //指定默认标签属性值
               static defaultProps = {
                   sex:'男',
                   age:18              
               }
               render(){
                   const {name,age,sex} = this.props
                   //props是只读的不能修改
                   return (
                       <ul>
                           <li>姓名:{name}</li>
                           <li>性别:{sex}</li>
                           <li>年龄:{age}</li>
                       </ul>
                   )
               }
           }
           
           //渲染组件到页面
           ReactDOM.render(<Person name="老王"/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

5. 函数组件中props的使用

   ```react
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- 准备好一个容器 -->
       <div id="test"></div>
       <!-- react核心库 -->
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <!-- 引入react-dom,用于支持react操作Dom -->
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <!-- 用于将jsx转化为js -->
       <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
       <!-- 引入proptype.js用于验证props类型 -->
       <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
       <script type="text/babel">
           //1.创建函数式组件
           function Person(props){
               const {name,age,sex} = props
               return (
                   <ul>
                       <li>姓名:{name}</li>
                       <li>性别:{sex}</li>
                       <li>年龄:{age}</li>
                   </ul>
               )
           }
               //对标签属性进行类型，必要性的限制
           Person.propTypes = {
                   name:PropTypes.string.isRequired,//名字必须是string类型而且必须是必传
                   age:PropTypes.number,//性别必须是number类型(非必传)
                   sex:PropTypes.string,//性别必须为string类型(非必传)
                   speak:PropTypes.func//方法必须为一个function(非必传)                
           }
               //指定默认标签属性值
           Person.defaultProps = {
                   sex:'男',
                   age:18              
           }        
           //渲染组件到页面
           ReactDOM.render(<Person name="wmq" age={18} sex="男"/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```
