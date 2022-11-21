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

#### 2.2.4.refs的使用

1. 字符串形式的ref

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
               showData = () =>{
                 const {input1} = this.refs
                 alert(input1.value)
               }
               
               showData2 = () =>{
                 const {input2} = this.refs
                 alert(input2.value)
               }
               render(){
                   return (
                       <div>
                           <input ref="input1" type="text" placeholder="点击按钮提示数据"/>
                           <button onClick={this.showData}>点我提示左侧数据</button>  
                           <input ref="input2" onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>                
                       </div>
                   )
               }
           }
           ReactDOM.render(<MyComponent/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

   这种字符串类型的refs已经过时,我们不建议使用它，因为 string 类型的 refs 存在 [**一些问题**](https://github.com/facebook/react/pull/8333#issuecomment-271648615)。它已过时并可能会在未来的版本被移除

2. 回调形式的ref

   1. 回调形式的ref

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
                  showData = () =>{
                      console.log(this.input1.value)
                  }
              
                  render(){
                      return (
                          <div>
                              <input ref={c =>this.input1 = c} type="text" placeholder="点击按钮提示数据"/>
                              <button onClick={this.showData}>点我提示左侧数据</button>               
                          </div>
                      )
                  }
              }
              ReactDOM.render(<MyComponent/>,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      问题:当页面渲染时(除去第一次渲染)该回调会被执行两次，第一次为null，第二次为最新的dom节点。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。(但是对性能影响不大)开发中常用

   2. class 的绑定函数的方式

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
                  state = {
                      isHot:true
                  }
                  showData = () =>{
                      console.log(this.input1.value)
                  }
      
                  saveInput = (c) =>{
                      this.input1 = c
                      console.log('@',c)
                  }
      
                  changeWeather = () =>{
                      const {isHot} = this.state
                      this.setState({isHot:!isHot})
                  }
                  render(){
                      const {isHot} = this.state
                      return (
                          <div>
                              <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据"/>
                              <button onClick={this.showData}>点我提示左侧数据</button>
                              <h1>今天天气很{isHot ? '炎热' : '凉爽'}</h1>       
                              <button onClick={this.changeWeather}>点击修改天气</button>     
                          </div>
                      )
                  }
              }
              ReactDOM.render(<MyComponent/>,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      使用类绑定模式只会在第一次渲染时执行回调

3. createRef容器

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
               /*
                   React.createRef()调用后可以返回一个容器可以存储被ref标识的节点
                   该容器是专人专用的只能存一个
               */
               myRef = React.createRef()
               myRef2 = React.createRef()
   
               showData = () =>{
                   console.log(this.myRef.current.value)
               }
               inputBlur = () =>{
                   console.log(this.myRef2.current.value)
               }
               render(){
                   return (
                       <div>
                           <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
                           <button onClick={this.showData}>点我提示左侧数据</button>  
                           <input ref={this.myRef2} onBlur = {this.inputBlur} type="text" placeholder="失去焦点提示数据"/>             
                       </div>
                   )
               }
           }
           ReactDOM.render(<MyComponent/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

   这是react最推荐的一种写法

4. 注意

   1. **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例
   2. 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其`current` 属性
   3. 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性
   4. 请勿过度使用ref

#### 2.2.5.react中的事件处理

1. 事件处理

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
           /*
               react中的事件处理
               1.通过onXxx属性指定事件处理函数(注意大小写)
                   a.React使用的是自定义(合成)事件，而不是使用的原生Dom事件 ---为了更好的兼容性
                   b.React中的事件是通过事件委托方式处理的(委托给组件最外层元素)---事件委托的方式效率更高
               2.通过Event.target得到发生事件的Dom元素对象---- 不要过度使用ref(发生事件的元素正好是你要操作的元素就可以使用事件委托)
           */
           //1.创建类式组件
           class MyComponent extends React.Component{
               //创建ref容器
               myRef = React.createRef()
               myRef2 = React.createRef()
   
               showData = () =>{
                   console.log(this.myRef.current.value)
               }
   
               inputBlur = (event) =>{//发生事件的元素正好是你要操作的元素就可以使用事件委托
                   console.log(event.target.value)
               }
               render(){
                   return (
                       <div>
                           <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
                           <button onClick={this.showData}>点我提示左侧数据</button>  
                           <input onBlur = {this.inputBlur} type="text" placeholder="失去焦点提示数据"/>             
                       </div>
                   )
               }
           }
           ReactDOM.render(<MyComponent/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

   

2. 非受控组件

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
           //1.非受控组件(现用现取的组件)
           class Login extends React.Component{
               handleSubmit = (event) =>{
                   event.preventDefault()//阻止表单提交
                   const {username,password} = this
                   console.log(username.value,password.value)
               }
               render(){
                   return (
                       <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                           用户名:<input ref={c =>this.username = c} type="text" name="username"/>
                           密码:<input ref={c =>this.password = c} type="password"name="password" />
                           <button>登录</button>
                       </form>
                   )
               }
           }
           ReactDOM.render(<Login/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

   

3. 受控组件

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
           //1.受控组件(随着输入就可以维护到状态中，使用的话就可以取出来)
           class Login extends React.Component{
               state = {
                   username:'',
                   password:''
               }
               handleSubmit = (event) =>{
                   event.preventDefault()
                   const {username,password} = this.state
                   alert(`你的账号为${username},密码为${password}`)
               }
               usernameChange = (event) =>{
                   this.setState({
                       username:event.target.value
                   })
               }
               passwordChange = () =>{
                   this.setState({
                       password:event.target.value
                   })
               }
               render(){
                   return (
                       <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
                           用户名:<input onChange={this.usernameChange} type="text" name="username"/>
                           密码:<input onChange={this.passwordChange} type="password"name="password" />
                           <button>登录</button>
                       </form>
                   )
               }
           }
           ReactDOM.render(<Login/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

   

### 2.3.组件生命周期

#### 2.3.1.旧版本生命周期

1. 引出生命周期

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
           class Life extends React.Component{
               state  = {
                   opacity:0.5,
               }
               //组件挂载完毕调用(只触发一次)
               componentDidMount(){
                   let {opacity} = this.state
                   this.timer = setInterval(() =>{
                       opacity -= 0.1
                       if(opacity<=0) opacity = 1
                       this.setState({opacity})
                   },200)
               }
   
               //组件将要卸载时调用
               componentWillUnmount(){
                   //清除定时器
                   clearInterval(this.timer)
               }
               death = () =>{
                   //卸载组件
                   ReactDOM.unmountComponentAtNode(document.getElementById('test'))
               }
               render(){
                   const {opacity} = this.state
                   return (
                       <div>
                           <h2 style={{opacity}} >React学不会怎么办?</h2>
                           <button onClick={this.death}>不活了</button>                        
                       </div>
                   )
               }
           }
           //渲染组件到页面
           ReactDOM.render(<Life/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

2. 组件挂载流程

   1. 旧版本流程图

      ![](https://img-blog.csdnimg.cn/20200702114631693.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE3NDgzMTk=,size_16,color_FFFFFF,t_70)

      ![](D:\myWork\learn-web@2022\react\learnReact\资源\生命周期(旧).png)

   2. 组件初始化生命周期过程

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
              class Count extends React.Component{
                  constructor(props){
                      console.log('count---constructor')
                      super(props)
                      this.state = {
                          count:0
                      }
                  }
                  //组件将要挂载时调用
                  componentWillMount(){
                      console.log('count---componentWillMount')
                  }
      
                  //组件挂载完毕调用
                  componentDidMount(){
                      console.log('count---componentDidMount')
                  }
      
                  //组件将要卸载时调用
                  componentWillUnmount(){
                      console.log('count---componentWillUnmount')
                  }
                  handleAddNum = () =>{
                      let {count} = this.state
                      this.setState({
                          count:count+1
                      })
                  }
                  render(){
                      console.log('count---render')
                      const {count} = this.state
                      return (
                          <div>
                              <h1>当前求和为:{count}</h1>
                              <button onClick={this.handleAddNum}>点我+1</button>&nbsp;
                          </div>
                      )
                  }
              }
              //渲染组件到页面
              ReactDOM.render(<Count/>,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      总结:组件渲染时生命周期过程为constructor->componentWillMount->render->componentDidMount

   3. 组件卸载过程

      总结:componentWillUnmount ->unmountComponentAtNode

   4. 组件状态更新过程

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
              class Count extends React.Component{
                  constructor(props){
                      console.log('count---constructor')
                      super(props)
                      this.state = {
                          count:0
                      }
                  }
                  //组件将要挂载时调用
                  componentWillMount(){
                      console.log('count---componentWillMount')
                  }
      
                  //组件挂载完毕调用
                  componentDidMount(){
                      console.log('count---componentDidMount')
                  }
      
                  //组件将要卸载时调用
                  componentWillUnmount(){
                      console.log('count---componentWillUnmount')
                  }
                  //判断组件是否需要更新默认返回true需要更新,返回false则不会更新
                  shouldComponentUpdate(){
                      console.log('count---shouldComponentUpdate')
                      return true
                  }
                  //组件将要更新
                  componentWillUpdate(){
                      console.log('count-componentWillUpdate')
                  }
                  //组件更新完毕
                  componentDidUpdate(){
                      console.log('count---componentDidUpdate')
                  }
      
                  handleAddNum = () =>{
                      let {count} = this.state
                      this.setState({
                          count:count+1
                      })
                  }
                  death = () =>{
                      //卸载组件
                      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
                      console.log('count---unmountComponentAtNode')
                  }
                  render(){
                      console.log('count---render')
                      const {count} = this.state
                      return (
                          <div>
                              <h1>当前求和为:{count}</h1>
                              <button onClick={this.handleAddNum}>点我+1</button>&nbsp;
                              <button onClick={this.death}>卸载组件</button>
                          </div>
                      )
                  }
              }
              //渲染组件到页面
              ReactDOM.render(<Count/>,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      组件更新流程为

      shouldComponentUpdate ->componentWillUpdate->render->componentDidUpdate\

   5. 强制更新流程

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
              class Count extends React.Component{
                  constructor(props){
                      console.log('count---constructor')
                      super(props)
                      this.state = {
                          count:0
                      }
                  }
                  //组件将要挂载时调用
                  componentWillMount(){
                      console.log('count---componentWillMount')
                  }
      
                  //组件挂载完毕调用
                  componentDidMount(){
                      console.log('count---componentDidMount')
                  }
      
                  //组件将要卸载时调用
                  componentWillUnmount(){
                      console.log('count---componentWillUnmount')
                  }
                  //判断组件是否需要更新默认返回true需要更新,返回false则不会更新
                  shouldComponentUpdate(){
                      console.log('count---shouldComponentUpdate')
                      return false
                  }
                  //组件将要更新
                  componentWillUpdate(){
                      console.log('count-componentWillUpdate')
                  }
                  //组件更新完毕
                  componentDidUpdate(){
                      console.log('count---componentDidUpdate')
                  }
      
                  handleAddNum = () =>{
                      let {count} = this.state
                      this.setState({
                          count:count+1
                      })
                  }
                  //卸载组件
                  death = () =>{
                      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
                      console.log('count---unmountComponentAtNode')
                  }
                  //强制更新按钮回调
                  force = () =>{
                      this.forceUpdate()
                  }
                  render(){
                      console.log('count---render')
                      const {count} = this.state
                      return (
                          <div>
                              <h1>当前求和为:{count}</h1>
                              <button onClick={this.handleAddNum}>点我+1</button>&nbsp;
                              <button onClick={this.death}>卸载组件</button>
                              <button onClick={this.force}>不更改任何状态数据强制更新</button>
                          </div>
                      )
                  }
              }
              //渲染组件到页面
              ReactDOM.render(<Count/>,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      总结:强制更新流程forceUpdate ->componentWillUpdate->-render->componentDidUpdate

   6. 父组件render流程

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
              //1.创建组件
              class Father extends React.Component{
                  state = {
                      carName:'奔驰'
                  }
                  changeCar = () =>{
                      this.setState({carName:'奥拓'})
                  }
                  render(){
                      return (
                          <div>
                              <div>我是Father组件</div>
                              <button onClick={this.changeCar}>换车</button>
                              <Child carName={this.state.carName}/>
                          </div>
                      )
                  }
              }
              class Child extends React.Component{
                  //组件将要接受新的props
                  componentWillReceiveProps(props){
                      console.log('Child---componentWillReceiveProps',props)
                  }
                  //控制组件更新的阀门
                  shouldComponentUpdate(){
                      console.log('Child---shouldComponentUpdate')
                      return true
                  }
                  //组件将要更新
                  componentWillUpdate(){
                      console.log('Child-componentWillUpdate')
                  }
                  //组件更新完毕
                  componentDidUpdate(){
                      console.log('Child---componentDidUpdate')
                  }            
                  render(){
                      const {carName} = this.props
                      return (
                          <div>我是Child组件,我的车为{carName}</div>
                      )
                  }
              }       
              //渲染组件到页面
              ReactDOM.render(<Father/>,document.getElementById('test'))
          </script>
      </body>
      </html>
      ```

      总结:当父组件初次渲染时并不会触发子组件componentWillReceiveProps方法当父组件传递给子组件props变化时，会调用子组件的更新。执行过程为:

      componentWillReceiveProps->shouldComponentUpdate->componentWillUpdate->componentDidUpdate

   7. 总结

      1. **初始化阶段**：由ReactDOM.rnder()触发一次渲染

         1. constructor()

         2. componentWillMount()

         3. render()

         4. componentDidMount()

            常用:一般在这钩子中做一些初始化的事,列如:开启定时器,发送网络请求,订阅消息

      2. **更新阶段**：由组件内部this.setState()或父组件更新render()触发

         1. shouldComponentUpdate()
         2. componentWillUpdate()
         3. render()
         4. componentDidUpdate()

      3. **卸载组件**:由ReactDOM.unmountComponentAtNode()触发

         1. componentWillUnmount()

            一般在这个钩子中做一些收尾的事,列如:关闭定时器，取消订阅消息

      

#### 2.3.2.新版本生命周期

1. 生命周期图

    ![https://img-blog.csdnimg.cn/20200702115139495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE3NDgzMTk=,size_16,color_FFFFFF,t_70](https://img-blog.csdnimg.cn/20200702115139495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTE3NDgzMTk=,size_16,color_FFFFFF,t_70)
   
2. getDerivedStateFormProps的使用(极低)

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
           class Count extends React.Component{
               constructor(props){
                   console.log('count---constructor')
                   super(props)
                   this.state = {
                       count:0
                   }
               }
               //若state的值任何时候都取决于props可以使用getDerivedStateFromProps
               static getDerivedStateFromProps(props,state){
                   console.log('getDerivedStateFromProps',props,state)
                   return null
               }
   
               //组件挂载完毕调用
               componentDidMount(){
                   console.log('count---componentDidMount')
               }
   
               //组件将要卸载时调用
               componentWillUnmount(){
                   console.log('count---componentWillUnmount')
               }
               
               //判断组件是否需要更新默认返回true需要更新,返回false则不会更新
               shouldComponentUpdate(){
                   console.log('count---shouldComponentUpdate')
                   return true
               }           
               
               //组件更新完毕
               componentDidUpdate(){
                   console.log('count---componentDidUpdate')
               }
   
               handleAddNum = () =>{
                   let {count} = this.state
                   this.setState({
                       count:count+1
                   })
               }
               death = () =>{
                   //卸载组件
                   ReactDOM.unmountComponentAtNode(document.getElementById('test'))
                   console.log('count---unmountComponentAtNode')
               }
               render(){
                   console.log('count---render')
                   const {count} = this.state
                   return (
                       <div>
                           <h1>当前求和为:{count}</h1>
                           <button onClick={this.handleAddNum}>点我+1</button>&nbsp;
                           <button onClick={this.death}>卸载组件</button>
                       </div>
                   )
               }
           }       
           
           //渲染组件到页面
           ReactDOM.render(<Count count={199}/>,document.getElementById('test'))
       </script>
   </body>
   </html>
   ```

3. getSnapshotBeforeUpdate的使用

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
        class Count extends React.Component{
            constructor(props){
                console.log('count---constructor')
                super(props)
                this.state = {
                    count:0
                }
            }
            //若state的值任何时候都取决于props可以使用getDerivedStateFromProps
            static getDerivedStateFromProps(props,state){
                console.log('getDerivedStateFromProps',props,state)
                return null
            }

            //组件挂载完毕调用
            componentDidMount(){
                console.log('count---componentDidMount')
            }

            //组件将要卸载时调用
            componentWillUnmount(){
                console.log('count---componentWillUnmount')
            }
            
            //判断组件是否需要更新默认返回true需要更新,返回false则不会更新
            shouldComponentUpdate(){
                console.log('count---shouldComponentUpdate')
                return true
            }           
            //在更新之前获取快照
            getSnapshotBeforeUpdate(state){
                console.log('count---getSnapshotBeforeUpdate')
                return 'atguigu'//此处返回的值会在componentDidUpdate第三个参数中接收
            }
            //组件更新完毕
            componentDidUpdate(preProps,preState,snapshotValue){
                console.log('count---componentDidUpdate',preProps,preState,snapshotValue)
            }

            handleAddNum = () =>{
                let {count} = this.state
                this.setState({
                    count:count+1
                })
            }
            death = () =>{
                //卸载组件
                ReactDOM.unmountComponentAtNode(document.getElementById('test'))
                console.log('count---unmountComponentAtNode')
            }
            render(){
                console.log('count---render')
                const {count} = this.state
                return (
                    <div>
                        <h1>当前求和为:{count}</h1>
                        <button onClick={this.handleAddNum}>点我+1</button>&nbsp;
                        <button onClick={this.death}>卸载组件</button>
                    </div>
                )
            }
        }       
        
        //渲染组件到页面
        ReactDOM.render(<Count count={199}/>,document.getElementById('test'))
    </script>
</body>
</html>
```

实际应用场景

```react
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .list{
            width: 200px;
            height: 150px;
            background-color:black;
            overflow: auto;
        }
        .news{
            width: 100%;
            border-bottom: 1px solid white;
            line-height: 30px;
            height: 30px;
            color: white;
            font-size: 13px;
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
        //1.创建类式组件
        class NewsList extends React.Component{
            state = {
                newsArr:[]
            }
            conRef = React.createRef()
            componentDidMount(){
                setInterval(() =>{
                    const {newsArr} = this.state
                    const news = `新闻${newsArr.length+1}`
                    this.setState({
                        newsArr:[news,...newsArr]
                    })
                },1000)
            }

            getSnapshotBeforeUpdate(){
                return this.conRef.current.scrollHeight
            }

            componentDidUpdate(preProps,preState,height){
                const distance =  this.conRef.current.scrollHeight - height
                this.conRef.current.scrollTop += distance
            }
            render(){
                return (
                    <div  ref={this.conRef} className="list">
                        {
                            this.state.newsArr.map((item,index) =>{
                                return <div key={index} className="news">{item}</div>
                            })
                        }
                    </div>
                )
            }
        }       
        
        //渲染组件到页面
        ReactDOM.render(<NewsList />,document.getElementById('test'))
    </script>
</body>
</html>
```

总结

1. 新版本生命周期废除了旧版本三个生命周期componentWillMount,componentWillUpdate,componentWillReceiveProps.若在新版本中使用需要加UNSAFE_的前缀

2. 新版本的**初始化过程**为:由React.render()触发---初次渲染

   constructor() ->getDerivedStateFromProps()->render()->componentDidMount

3. 新版本**更新过程**:由组件内部this.setState()或父组件重新render触发

   getDerivedStateFromProps()->shouldComponentUpdate()->render()->getSnapshotBeforeUpdate()->getSnapshotBeforeUpdate()

4. **卸载过程**:由ReactDOM.unmountComponentAtNode()触发

   1.componentWillUnmount()常用->一般在这个钩子里面做一些收尾的事,l比如关闭定时器,取消订阅消息\

5. 重要的勾子

   1. render() 初始化渲染或更新渲染调用
   2. componentDidMound()->开启监听发送请求
   3. componentWillUnmount()->做一些收尾的事,l比如关闭定时器,取消订阅消息

6. 即将**废弃**的钩子

   1. componentWillMount()

   2. componentWillUpdate()

   3. componentWillReceiveProps()

      现在使用会出现警告,下一个大版本需要加上UNSAFE_前缀才能使用,以后可能会彻底废弃不建议使用

## 3.DOM的Diff算法

## 4.React应用

### 4.1利用脚手架创建react项目

1. 全局安装:npm install -g create-react-app
2. 切换到你想创建项目的目录,使用命令:create-react-app xx (项目名称)

### 4.2.脚手架文件介绍

![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221110194456.png)

1. public文件夹下一般放静态资源(图片,图标,css等)

2. src文件夹一般放项目源代码

   ![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221110194706.png)

   1. App.js 为一个react根组件

   2. App.test,js 一个测试文件

   3. index.js项目入口文件

      ![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221110210136.png)

      1. React.StrictMode:包裹后可以验证react组件写法是否合理
      2. reportWebVitals:用于记录页面上性能的

   4. setupTests.js应用的整体测试---组件单元测试的文件(需要jest---dom)

   5. reportWebVitals.js ---页面性能分析文件(需要web-vitals库的支持)

      

### 4.3.创建一个简单的hello组件

![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221110213824.png)

![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221110213857.png)



### 4.4.react路由的使用

#### 4.4.1.react路由v5的使用

##### 4.4.1.1.如何使用路由

1. 执行npm i react-router-dom@5.3.1 下载路由插件

2. 在组件中使用路由

   ```react
   import React, { Component } from 'react'
   import { NavLink, Route, Switch } from 'react-router-dom'
   import AppStyle from './App.module.css'
   import About from './component/abount/index'
   import Home from './component/home/index'
   export default class App extends Component {
     render() {
       return (
         <div style={{display:'flex',padding:'100px'}}>
           <div className={AppStyle.left}>
             <NavLink  to='/home' className="btn  btn-primary active">Home</NavLink>
             <NavLink  to='/about' style={{marginTop:'10px'}} className="btn  btn-primary">About</NavLink>
           </div>
           <div className={AppStyle.right}>
                 <Switch>
                     <Route path='/home' component={Home}/>
                     <Route path='/about' component={About}/>
                 </Switch>
           </div>
         </div>
       )
     }
   }
   
   ```

   ```react
   import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter } from 'react-router-dom';
   import App from './App';
   
   ReactDOM.render(
       <BrowserRouter>
           <App/>
       </BrowserRouter>
       ,document.getElementById('root'))
   ```

   路由使用必须在使用组件范围内包裹BrowserRouter或HashRouter

   navLink组件中className选中默认会出现active类类名，该类名也可通过属性activeClassName进行修改

   Switch组件匹配path以后就不会匹配相同的路一个路径只匹配一次，可以调高效率

##### 4.4.1.2.自定义navLink

```react
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default class MyNavLink extends Component {
  render() {
    return (
        <NavLink className="btn  btn-primary" {...this.props}/>
    )
  }
}
```

1. 被Route组件注册的组件可以在内部props获取到路由的相关信息

   ![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221119110048.png)

##### 4.4.1.3.路由的模糊匹配和严格匹配

- 模糊匹配

  ```react
  import React, { Component } from 'react'
  import { Route, Switch } from 'react-router-dom'
  import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
  import AppStyle from './App.module.css'
  import About from './component/abount/index'
  import Home from './component/home/index'
  import MyNavLink from './component/mylink'
  export default class App extends Component {
    render() {
      return (
        <div style={{display:'flex',padding:'100px'}}>
          <div className={AppStyle.left}>
            <MyNavLink  to='/home/aaa'>Home</MyNavLink>
            <MyNavLink  style={{marginTop:'10px'}} to='/about'>About</MyNavLink>
          </div>
          <div className={AppStyle.right}>
                <Switch>
                    <Route  path='/home' component={Home}/>
                    <Route  path='/about' component={About}/>
                </Switch>
          </div>
        </div>
      )
    }
  }
  
  ```

  默认使用的是模糊匹配(简单记:{输入的路径}必须要包含{匹配的路径},且顺序要一致)

- 严格匹配

  ```react
  import React, { Component } from 'react'
  import { Route, Switch } from 'react-router-dom'
  import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
  import AppStyle from './App.module.css'
  import About from './component/abount/index'
  import Home from './component/home/index'
  import MyNavLink from './component/mylink'
  export default class App extends Component {
    render() {
      return (
        <div style={{display:'flex',padding:'100px'}}>
          <div className={AppStyle.left}>
            <MyNavLink  to='/home/aaa'>Home</MyNavLink>
            <MyNavLink  style={{marginTop:'10px'}} to='/about'>About</MyNavLink>
          </div>
          <div className={AppStyle.right}>
                <Switch>
                    <Route  exact path='/home' component={Home}/>
                    <Route  exact path='/about' component={About}/>
                </Switch>
          </div>
        </div>
      )
    }
  }
  
  ```

  exact={true}开启严格匹配

  严格匹配不要随便开启,需要时候再打开,有些时候开启会导致无法继续匹配二级路由.(使用的时候需要慎重考虑是否符合自己的需求)

##### 4.4.1.4.路由重定向Redirect的使用

```react
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AppStyle from './App.module.css'
import About from './component/abount/index'
import Home from './component/home/index'
import MyNavLink from './component/mylink'
export default class App extends Component {
  render() {
    return (
      <div style={{display:'flex',padding:'100px'}}>
        <div className={AppStyle.left}>
          <MyNavLink  to='/home/aaa'>Home</MyNavLink>
          <MyNavLink  style={{marginTop:'10px'}} to='/about'>About</MyNavLink>
        </div>
        <div className={AppStyle.right}>
              <Switch>
                  <Route  path='/home' component={Home}/>
                  <Route  path='/about' component={About}/>
                  <Redirect to='/home'/>
              </Switch>
        </div>
      </div>
    )
  }
}
```

##### 4.4.1.5.嵌套路由的使用

```react
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AppStyle from './App.module.css'
import About from './component/abount/index'
import Home from './component/home/index'
import MyNavLink from './component/mylink'
export default class App extends Component {
  render() {
    return (
      <div style={{display:'flex',padding:'100px'}}>
        <div className={AppStyle.left}>
          <MyNavLink  to='/home/aaa'>Home</MyNavLink>
          <MyNavLink  style={{marginTop:'10px'}} to='/about'>About</MyNavLink>
        </div>
        <div className={AppStyle.right}>
              <Switch>
                  <Route  path='/home' component={Home}/>
                  <Route  path='/about' component={About}/>
                  <Redirect to='/home'/>
              </Switch>
        </div>
      </div>
    )
  }
}

```

```react
import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Message from '../message/index'
import MyNavLink from '../mylink/index'
import News from '../news/index'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
              <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{marginBottom:'10px'}}>
                  <MyNavLink to='/home/news'>news</MyNavLink>
                  <MyNavLink to='/home/message' style={{marginLeft:'3px'}}>message</MyNavLink>
              </div>
              <div>
                <Switch>
                   <Route path='/home/news' component={News}/>
                   <Route path='/home/message' component={Message}/>
                   <Redirect to='/home/news'/>
                </Switch>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

```

##### 4.4.1.6.向嵌套路由传参

1. 传递params参数

   ```react
   import React, { Component } from 'react'
   import { Link, Route } from 'react-router-dom'
   import Detail from './detail'
   export default class Message extends Component {
     state = {
       messageArr:[
         {
           id:'01',
           title:'消息1'
         },
         {
           id:'02',
           title:'消息2'
         },
         {
           id:'03',
           title:'消息3'
         },
         {
           id:'04',
           title:'消息4'
         }
       ]
     }
     render() {
       const {messageArr} = this.state
       return (
         <div>
           <ul className="list-group">
             {
               messageArr.map(msg =>{
                 return (
                   // {向路由组件传递params参数}
                   <Link key={msg.id} to={`/home/message/detail/${msg.id}/${msg.title}`} className="list-group-item">{msg.title}</Link>
                 )
               })
             }
           </ul>
           <hr/>
           {/* {声明接受params参数} */}
           <Route  path="/home/message/detail/:id/:title" component={Detail}/>     
         </div>
       )
     }
   }
   
   ```

   ```react
   import React, { Component } from 'react'
   const data = [
     {id:'01',content:'你好中国1'},
     {id:'02',content:'你好中国2'},
     {id:'03',content:'你好中国3'},
     {id:'04',content:'你好中国4'}
   ]
   export default class Detail extends Component {
     render() {
       console.log(this.props)
       const {id,title} = this.props.match.params
       const findRes = data.find(it =>it.id === id)
       return (
         <div>
            <ul>
               <li>{id}</li>
               <li>{title}</li>
               <li>{findRes.content}</li>
            </ul>
         </div>
       )
     }
   }
   
   ```

   总结:

   - 路由链接(携带参数):<Link to='/demo/test/18'>详情<Link/>
   - 注册路由(声明参数):<Route path='/demo/test/:id' component={Detail}/>
   - 接收参数:const {id} = this.props.match.params

2. 传递search参数

   ```react
   import React, { Component } from 'react'
   import { Link, Route } from 'react-router-dom'
   import Detail from './detail'
   export default class Message extends Component {
     state = {
       messageArr:[
         {
           id:'01',
           title:'消息1'
         },
         {
           id:'02',
           title:'消息2'
         },
         {
           id:'03',
           title:'消息3'
         },
         {
           id:'04',
           title:'消息4'
         }
       ]
     }
     render() {
       const {messageArr} = this.state
       return (
         <div>
           <ul className="list-group">
             {
               messageArr.map(msg =>{
                 return (
                   // {像路由传递search参数}
                   <Link key={msg.id} to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`} className="list-group-item">{msg.title}</Link>
                 )
               })
             }
           </ul>
           <hr/>
           {/* {声明接收search参数(search参数无须声明接收)} */}
           <Route  path="/home/message/detail" component={Detail}/>     
         </div>
       )
     }
   }
   
   ```

   ```react
   import qs from 'qs'
   import React, { Component } from 'react'
   const data = [
     {id:'01',content:'你好中国1'},
     {id:'02',content:'你好中国2'},
     {id:'03',content:'你好中国3'},
     {id:'04',content:'你好中国4'}
   ]
   export default class Detail extends Component {
     render() {
       // {接收search参数}
       const {search} = this.props.location
       const {id,title} = qs.parse(search.slice(1))
       const findRes = data.find(it =>it.id === id)
       return (
         <div>
            <ul>
               <li>{id}</li>
               <li>{title}</li>
               <li>{findRes.content}</li>
            </ul>
         </div>
       )
     }
   }
   
   ```

   总结

   - 路由链接(携带参数):<Link to='/demo/test/?id=18'>详情<Link/>

   - 注册路由(无需声明,正常注册即可):<Route path='/demo/test' component={Detail}/>

   - 接收参数:const {search} = this.props.location

     备注:获取到的search是urlencoded编码的字符串需要借助qs进行解析:const {id} = qs.parse(search.slice(1))

3. 传递state参数 

   ```react
   import React, { Component } from 'react'
   import { Link, Route } from 'react-router-dom'
   import Detail from './detail'
   export default class Message extends Component {
     state = {
       messageArr:[
         {
           id:'01',
           title:'消息1'
         },
         {
           id:'02',
           title:'消息2'
         },
         {
           id:'03',
           title:'消息3'
         },
         {
           id:'04',
           title:'消息4'
         }
       ]
     }
     render() {
       const {messageArr} = this.state
       return (
         <div>
           <ul className="list-group">
             {
               messageArr.map(msg =>{
                 return (
                   // {向路由传递state参数}
                   <Link key={msg.id} to={{pathname:'/home/message/detail',state:msg}} className="list-group-item">{msg.title}</Link>
                 )
               })
             }
           </ul>
           <hr/>
           {/* {state参数无需接收}   */}
           <Route  path="/home/message/detail" component={Detail}/>   
         </div>
       )
     }
   }
   
   ```

   ```react
   import React, { Component } from 'react'
   const data = [
     {id:'01',content:'你好中国1'},
     {id:'02',content:'你好中国2'},
     {id:'03',content:'你好中国3'},
     {id:'04',content:'你好中国4'}
   ]
   export default class Detail extends Component {
     render() {
       // {接收state参数}
       const {id,title} = this.props.location.state
       const findRes = data.find(it =>it.id === id)
       return (
         <div>
            <ul>
               <li>{id}</li>
               <li>{title}</li>
               <li>{findRes.content}</li>
            </ul>
         </div>
       )
     }
   }
   
   ```

   总结:

   - 路由链接(携带参数):<Link to={{pathname:'/demo/test',state:{id:1,title:'你好啊'}}}>详情</Link>

   - 注册路由(无需声明，正常注册):<Route path='/demo/test' component={Detail}/>

   - 接收参数:this.props.location.state

     接收参数:this.props.location.state

##### 4.4.1.7.路由跳转的两种方式

```react
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detail'
export default class Message extends Component {
  state = {
    messageArr:[
      {
        id:'01',
        title:'消息1'
      },
      {
        id:'02',
        title:'消息2'
      },
      {
        id:'03',
        title:'消息3'
      },
      {
        id:'04',
        title:'消息4'
      }
    ]
  }
  replaceShow = (id,title) =>{
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

     //replace跳转+携带search参数
    //  this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

     //replace跳转+携带state参数
     this.props.history.replace({pathname:'/home/message/detail',state:{id,title}})
  }
  pushShow = (id,title) =>{
     //push+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push+携带search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    //push+携带state参数
    this.props.history.push({pathname:'/home/message/detail',state:{id,title}})
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul className="list-group">
          {
            messageArr.map(msg =>{
              return (
                <div  key={msg.id} style={{display:'flex',marginTop:'5px'}}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`} className="list-group-item">{msg.title}</Link> */}

                  {/* 像路由传递search参数 */}
                  {/* <Link key={msg.id} to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`} className="list-group-item">{msg.title}</Link> */}

                  {/* 向路由传递state参数 */}
                  <Link replace={true} key={msg.id} to={{pathname:'/home/message/detail',state:msg}} className="list-group-item">{msg.title}</Link>                    
                  
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button onClick={() =>this.pushShow(msg.id,msg.title)} type="button" className="btn btn-danger" style={{marginLeft:'5px'}}>push查看</button>
                      <button onClick={() =>this.replaceShow(msg.id,msg.title)} type="button" className="btn btn-warning" style={{marginLeft:'5px'}} >replace查看</button>
                  </div>              
                </div>
              )
            })
          }
        </ul>
        <hr/>
        {/* {声明接受params参数} */}
        {/* <Route  path="/home/message/detail/:id/:title" component={Detail}/>  */}

        {/* {声明接收search参数(search参数无须声明接收)} */}
        {/* <Route  path="/home/message/detail" component={Detail}/>    */}
        
        {/* {state参数无需接收}   */}
        <Route  path="/home/message/detail" component={Detail}/>   
      </div>
    )
  }
}

```

编程式路由导航

借助this.props.history对象身上的Api对操作路由跳转，前进，后退

this.props.history.push()

this.props.history.replace()

this.props.history.goBack()

this.props.history.goForward()

this.props.history.go()

##### 4.4.1.8.withRouter的使用

```react
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
    back = () =>{
        this.props.history.goBack()
    }
    forward = () =>{
        this.props.history.goForward()
    }
    go = () =>{
        this.props.history.go(-2)
    }
    render() {
        console.log(this.props)
        return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={this.back} type="button" className="btn btn-danger">回退</button>
                <button onClick={this.forward} type="button" className="btn btn-warning">前进</button>
                <button onClick={this.go} type="button" className="btn btn-success">go</button>
            </div>
        </div>
        )
    }
}
//withRouter可以加工一般组件，让一般组件具备路由组件特有的Api
//withRouter的返回值是一个新的组件
export default withRouter(Header)

```

##### 4.4.1.9.*BrowserRouter*和HashRouter的区别

1. 底层原理不一样

   BrowserRouter的使用是H5的history Api,不兼容IE9及一下的版本

   HashRouter使用的是URL的哈希值

2. url表现形式不一样

   BrowserRouter的路径中没用#列如:localhst:3000/demo/test

   HashRouter中路径包含#列如:localhost:3000/#/demo/test

3. **刷新后对路由state参数的影响**

   BrowserRouter没用任何影响，因为state保存在history对象中

   HashRouter刷新后会导致state参数的丢失

4. 备注:HashRouter可以解决一些路径错误相关的问题

#### 4.4.2 react路由v6的使用

### 5.redux的使用

#### 5.1.redux的简介

1. redux是什么?

   [redux](https://so.csdn.net/so/search?q=redux&spm=1001.2101.3001.7020)是[react](https://so.csdn.net/so/search?q=react&spm=1001.2101.3001.7020)中进行state状态管理的JS库，一般是管理多个组件中共享数据的，它并不是react的插件，是一个独立的库vue和angular等等一些框架都是可以使用的

   `React-Redux`是`Redux`的官方`React`绑定库。它能够使你的`React`组件从`Redux store`中读取数据，并且向`store`分发`actions`以更新数据

2. 什么情况下需要使用redux?

   1. 某个组件的状态，需要让其他组件可以随时拿到(共享)
   2. 一个组件需要改变另一个组件的状态(通信)
   3. 总体原则:能不用就不用，如果不用比较吃力才考虑使用

#### 5.2.redux工作流程

1. redux原理图

   ![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221120210201.png)

#### 5.3.redux的三个核心概念

1. action
   1. 动作的对象
   2. 包含两个属性
      - type:标识属性，值为字符串,唯一，必要属性
      - data:数据属性，值类型任意，可选属性
   3. 列子:{type:'ADD_STUDENT',data:{name:'tom',age:18}}
2. reducer
   1. 用于初始化状态，加工状态
   2. 加工时，根据旧的state和action，产生新的state的**纯函数**
3. store
   1. 将state,action,reducer联系在一起的对象
   2. 如何得到此对象?
      1. import {createStore} from 'redux'
      2. import reducer from './reducers'
      3. subscribe(listner):注册监听，当产生了新的state时自动调用

#### 5.4.redux精简版基本使用

1. 安装redux

   yarn add redux react-redux

2. 创建redux文件夹,并创建reducer.js

   ```react
   /*
       1.该文件是用于创建一个为count组件服务的reducer,reducer的本质就是一个函数
       2.reducer函数会接到两个参数分别为:之前的状态(preState),动作对象(action)
   */
   const initState = 0
   export default function countReducer(preState = initState,action){
       console.log(preState,action)
       const {type,data} = action
       switch(type){
           case 'INCREMENT'://加
              return preState + data
           case 'DECREMENT'://减
              return preState - data
           default://初始化
              return preState
       }
   }
   ```

3. 在redux文件夹下创建store.js

   ```react
   //该文件专门用于暴露一个store对象，整个应用只有一个store对象
   //引入createStire,专门用与创建核心的store对象
   import { legacy_createStore as createStore } from 'redux'
   //引入为Count组件服务的reducer
   import countReducer from './count_reducer'
   export default createStore(countReducer)
   ```

4. 在组件中使用

   ```react
   import React, { Component } from 'react'
   //引入store用于获取redux中保存的状态
   import store from '../../redux/store'
   export default class Count extends Component {
     //加法
     increment = () =>{
       store.dispatch({type:'INCREMENT',data:1})
     }
     render() {
       return (
         <div>
               <h2>当前求和为:{store.getState()}</h2>
               <div style={{display:'flex'}}>
                   <div className="dropdown">
                       <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          请选择添加数值
                       </button>
                       <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                           <li className="dropdown-item">1</li>
                           <li className="dropdown-item">3</li>
                           <li className="dropdown-item">5</li>
                       </ul>
                   </div>
                   <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                       <button type="button" className="btn btn-danger">当前求和为奇数再加</button>
                       <button type="button" className="btn btn-warning">异步加</button>
                       <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                       <button type="button" className="btn btn btn-info">-</button>
                   </div>                
               </div>
         </div>
       )
     }
   }
   
   ```

5. 在index.js中检测store中状态的改变，一旦发生改变需重新渲染App

   ```react
   import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter } from 'react-router-dom';
   import App from './App';
   import store from "./redux/store";
   store.subscribe(() =>{
       //检测redux中状态的变化，只要变化，旧调用render
       ReactDOM.render(<App/>,document.getElementById('root'))
   })
   ReactDOM.render(
       <BrowserRouter>
           <App/>
       </BrowserRouter>
       ,document.getElementById('root'))
   ```

#### 5.5.redux完整版

1. 在redux文件夹创建constant.js文件

   ```react
   /**
    * 该模块是用于定义action对象中type类型的常量值,便于管理的同时防止程序员单词写错
    */
   export const INCREMENT = 'increment'
   export const DECREMENT = 'decrement'
   ```

2. 在redux文件夹中创建count_action.js文件

   ```react
   /**
    * 该文件专门为count组件生成action对象
    */
    import { DECREMENT, INCREMENT } from './constant'
   export const createIncrementAction = data =>({type:INCREMENT,data})
   
   export const createDecrementAction = data =>({type:DECREMENT,data})
   ```

3. 在redux文件夹中修改count_reducer.js文件

   ```react
   /*
       1.该文件是用于创建一个为count组件服务的reducer,reducer的本质就是一个函数
       2.reducer函数会接到两个参数分别为:之前的状态(preState),动作对象(action)
   */
   import { DECREMENT, INCREMENT } from './constant'
   const initState = 0
   export default function countReducer(preState = initState,action){
       console.log(preState,action)
       const {type,data} = action
       switch(type){
           case INCREMENT://加
              return preState + data
           case DECREMENT://减
              return preState - data
           default://初始化
              return preState
       }
   }
   ```

4. 在组件中使用redux

   ```react
   import React, { Component } from 'react'
   //引入store用于获取redux中保存的状态
   import { createDecrementAction, createIncrementAction } from '../../redux/count_action'
   import store from '../../redux/store'
   export default class Count extends Component {
     //加法
     increment = () =>{
       store.dispatch(createIncrementAction(1))
     }
     //减法
     decrement = () =>{
       store.dispatch(createDecrementAction(1))
     }
     render() {
       return (
         <div>
               <h2>当前求和为:{store.getState()}</h2>
               <div style={{display:'flex'}}>
                   <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                       <button type="button" className="btn btn-danger">当前求和为奇数再加</button>
                       <button type="button" className="btn btn-warning">异步加</button>
                       <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                       <button onClick={this.decrement} type="button" className="btn btn btn-info">-</button>
                   </div>                
               </div>
         </div>
       )
     }
   }
   ```

#### 5.5.redux异步action版

1. 执行命令下载cnpm i redux-thunk 来处理异步任务

2. 在count_action中创建异步action

   ```react
   /**
    * 该文件专门为count组件生成action对象
    */
   import { DECREMENT, INCREMENT } from './constant'
   //同步Aaction返回一个对象{type:xxx,data:xxx}
   export const createIncrementAction = data =>({type:INCREMENT,data})
   
   export const createDecrementAction = data =>({type:DECREMENT,data})
   
   //异步Action须返回一个函数,异步action中一般都会调用同步action
   export const createIncrementAsyncAction = (data,time) =>{
       return (dispatch) =>{
           setTimeout(() =>{
               dispatch(createIncrementAction(data))//通知reducer更新状态
           },time)
       }
   }
   ```

3. 在store中使用中间件redux-thunk

   ```react
   //该文件专门用于暴露一个store对象，整个应用只有一个store对象
   //引入createStire,专门用与创建核心的store对象
   import { applyMiddleware, legacy_createStore as createStore } from 'redux'
   //引入为Count组件服务的reducer
   import countReducer from './count_reducer'
   //引入redux-thunk,用于支持异步action
   import thunk from 'redux-thunk'
   export default createStore(countReducer,applyMiddleware(thunk))
   ```

4. 在组件中使用异步分发异步action

   ```react
   import React, { Component } from 'react'
   //引入store用于获取redux中保存的状态
   import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'
   import store from '../../redux/store'
   export default class Count extends Component {
     //加法
     increment = () =>{
       store.dispatch(createIncrementAction(1))
     }
     //减法
     decrement = () =>{
       store.dispatch(createDecrementAction(1))
     }
     //异步加
     incrementAsync = () =>{
         store.dispatch(createIncrementAsyncAction(1,500))
     }
     render() {
       return (
         <div>
               <h2>当前求和为:{store.getState()}</h2>
               <div style={{display:'flex'}}>
                   <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                       <button type="button" className="btn btn-danger">当前求和为奇数再加</button>
                       <button onClick={this.incrementAsync} type="button" className="btn btn-warning">异步加</button>
                       <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                       <button onClick={this.decrement} type="button" className="btn btn btn-info">-</button>
                   </div>                
               </div>
         </div>
       )
     }
   }
   ```

   总结：异步action不是必须要写的,完全可以自己等待异步任务的结果再去分发同步action

#### 5.6.react-redux的使用

##### 5.6.1.react-redux介绍

react-redux是react官方推出的redux绑定库。react-redux将所有组件分为两大类：UI组件和容器组件，其中所有容器组件包裹着UI组件，构成父子关系。容器组件负责和redux交互，里面使用redux API函数，UI组件负责页面渲染，不使用任何redux API。容器组件会给UI组件传递redux中保存对的状态（state）和操作状态的方法（action）。

react-redux模型图

![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221121140839.png)

##### 5.6.2.连接UI组件和容器组件

1. 创建containers文件夹并创建Count容器的jsx文件

2. 在Count文件夹下的Index.jsx中连接UI和容器

   ```react
   //引入Count的UI组件
   import CountUI from '../../component/count/index'
   //引入connect用于连接UI组件与redux
   import { connect } from 'react-redux'
   
   export default connect()(CountUI)
   ```

3. 在组件中使用容器下中的Count组件，并将store传入(不传入store将会报错)

   ```react
   import React, { Component } from 'react'
   import Count from './containers/Count/index'
   import store from './redux/store'
   export default class App extends Component {
     render() {
       return (
         <div>
           <Count store={store}/>
         </div>
       )
     }
   }
   ```

##### 5.6.3.react-redux的简单使用

1. 创建Count容器并连接UI和容器

   ```react
   //引入Count的UI组件
   import CountUI from '../../component/count/index'
   //引入connect用于连接UI组件与redux
   import { connect } from 'react-redux'
   //引入action
   import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'
   /*
       1.mapStateToProps函数返回的对象中的key,就作为传递UI组件props的key,
       2.valu就作为UI组件props的value 
       3.mapStateToProps用于传递状态
   */
   function mapStateToProps(state){
       return {count:state}
   }
   /*
       1.mapDispatchToProps函数返回对象中的key就作为传递给UI组件props的key
       2.value就作为UI组件props的value
       3.mapDispatchToProps用于操作状态
   */
   function mapDispatchToProps(dispatch){
       return {
           //通知redux执行加法
           'increment':num => dispatch(createIncrementAction(num)),
           'decrement':num => dispatch(createDecrementAction(num)),
           'incrementAsync':(num,time) =>dispatch(createIncrementAsyncAction(num,time))
       }
   }
   //使用connect()()创建并暴露一个Count的容器组件
   export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
   ```

2. 在组件中使用该创建容器时mapStateToProps和mapDispatchToProps传递的状态和操作状态的方法

   ```react
   import React, { Component } from 'react'
   export default class Count extends Component {
     //加法
     increment = () =>{
       this.props.increment(1)
     }
     //减法
     decrement = () =>{
       this.props.decrement(1)
     }
     //异步加
     incrementAsync = () =>{
       this.props.incrementAsync(2,500)
     }
     render() {
       const {count} = this.props
       return (
         <div>
               <h2>当前求和为:{count}</h2>
               <div style={{display:'flex'}}>
                   <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                       <button onClick={this.incrementAsync} type="button" className="btn btn-warning">异步加</button>
                       <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                       <button onClick={this.decrement} type="button" className="btn btn btn-info">-</button>
                   </div>                
               </div>
         </div>
       )
     }
   }
   ```

3. 此时可以去除index.js监听store的方法(connect内部已经实现监听)

   ```react
   import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter } from 'react-router-dom';
   import App from './App';
   
   ReactDOM.render(
       <BrowserRouter>
           <App/>
       </BrowserRouter>,
       document.getElementById('root'))
   ```

4. 在使用Count容器的地方传递store给props

   ```react
   import React, { Component } from 'react'
   import Count from './containers/Count/index'
   import store from './redux/store'
   export default class App extends Component {
     render() {
       return (
         <div>
           {/* {给容器组件传递store} */}
           <Count store={store}/>
         </div>
       )
     }
   }
   ```

##### 5.6.4.mapDispatch的简写

1. 一般简写

   ```react
   //引入Count的UI组件
   import CountUI from '../../component/count/index'
   //引入connect用于连接UI组件与redux
   import { connect } from 'react-redux'
   //引入action
   import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'
   
   //使用connect()()创建并暴露一个Count的容器组件
   export default connect(
       state =>({count:state}),
       dispatch =>(
           {
               'increment':num => dispatch(createIncrementAction(num)),
               'decrement':num => dispatch(createDecrementAction(num)),
               'incrementAsync':(num,time) =>dispatch(createIncrementAsyncAction(num,time))
           })
       )(CountUI)
   ```

2. 精简写法

   ```react
   //引入Count的UI组件
   import CountUI from '../../component/count/index'
   //引入connect用于连接UI组件与redux
   import { connect } from 'react-redux'
   //引入action
   import { 
       	createDecrementAction, 
       	createIncrementAction, 
   		createIncrementAsyncAction } from '../../redux/count_action'
   //使用connect()()创建并暴露一个Count的容器组件
   export default connect(
       state =>({count:state}),
       {
           increment:createIncrementAction,
           decrement:createDecrementAction,
           incrementAsync:createIncrementAsyncAction
       }
       )(CountUI)
   ```

3. 最终写法

   1. 在action中简写action的名字

      ```react
      /**
       * 该文件专门为count组件生成action对象
       */
      import { DECREMENT, INCREMENT } from '../constant'
      //同步Aaction返回一个对象{type:xxx,data:xxx}
      export const increment = data =>({type:INCREMENT,data})
      
      export const decrement = data =>({type:DECREMENT,data})
      
      //异步Action须返回一个函数,异步action中一般都会调用同步action
      export const incrementAsync = (data,time) =>{
          return (dispatch) =>{
              setTimeout(() =>{
                  dispatch(increment(data))//通知reducer更新状态
              },time)
          }
      }
      ```

   2. 在容器中使用

      ```react
      //引入Count的UI组件
      import CountUI from './count_ui'
      //引入connect用于连接UI组件与redux
      import { connect } from 'react-redux'
      //引入action
      import { decrement, increment, incrementAsync } from '../../redux/actions/count'
      //使用connect()()创建并暴露一个Count的容器组件
      export default connect(
          ({count,person}) =>({count,personLength:person.length}),
          {
              increment,
              decrement,
              incrementAsync
          }
          )(CountUI)
      ```

      

##### 5.6.5.Provider组件的使用

```react
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root'))
```

总结:使用Provider之后，则在别的容器中无需传入store即可使用(避免多组件使用store重复传入使用provicer以后只需传入一次)

##### 5.6.6.react-redux文件目录优化

1. 目录优化我们一般将需要使用redux的组件放在containers/xxx文件夹中

   ![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221121172100.png)

##### 5.6.7.多组件数据共享版

1. 创建Person组件的action,reducer

   1. 创建action

      ```react
      import { ADD_PERSON } from '../constant'
      //创建增加一个人的Action动作对象
      export const createPersonAction = data => ({type:ADD_PERSON,data})
      ```

   2. 创建reducer

      ```react
      import { ADD_PERSON } from '../constant'
      const initState = []
      
      export default function createReducer(preState = initState,action){
          const {type,data} = action
          switch(type){
              case ADD_PERSON:
                  return [data,...preState]
              default:
                  return preState
          }
      }
      ```

2. 创建Person组件和容器

   1. 创建Person组件

      ```react
      import React, { Component } from 'react'
      import { v4 as uuidv4 } from 'uuid'
      export default class Person extends Component {
          state = {
              FormData:{
                  name:'',
                  age:''
              }
          }
          handleNameChange = (event) =>{
              const {value:name} = event.target
              const {FormData} = this.state
              this.setState({
                  FormData:{...FormData,name}
              })
          }
          handleAgeChange = (event) =>{
              const {value:age} = event.target
              const {FormData} = this.state
              this.setState({
                  FormData:{...FormData,age}
              })
          }
          handleSubmit = (event) =>{
              event.preventDefault()
              const id = uuidv4()
              const person = {id,...this.state.FormData}
              this.props.addPerson(person)
          }
        render() {
          const {person,count} = this.props
          return (
              <div>
                  <h2>当前求和为:{count}</h2>
                  <div className="card" style={{width:'300px'}}>
                      <div className="card-body">
                          <form>
                              <div className="mb-3">
                                  <label  className="form-label">Name</label>
                                  <input onChange={this.handleNameChange} placeholder='Please enter your name' type="text" id='NameInput' className="form-control" aria-describedby="emailHelp"/>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label">Age</label>
                                  <input onChange={this.handleAgeChange} placeholder='Please enter your age' type="text" className="form-control" id="AgeInput"/>
                              </div>
                              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                          </form>
                      </div>
                  </div>  
                  <hr/>
                  <table className="table table-striped" style={{width:'700px'}}>
                      <thead>
                          <tr>
                          <th scope="col">id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Age</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              person.map(item =>{
                                  return (
                                      <tr key={item.id}>
                                          <th scope="row">{item.id}</th>
                                          <td>{item.name}</td>
                                          <td>{item.age}</td> 
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>                      
              </div>
          )
        }
      }
      
      ```

   2. 创建Person容器

      ```react
      import { connect } from 'react-redux'
      import { createPersonAction } from '../../redux/actions/person'
      import PersonUI from './person_ui'
      export default connect(
          ({person,count}) =>({person,count}),
          {
              addPerson:createPersonAction
          }
      )(PersonUI)
      ```

   3.文件目录为

   ![](D:\myWork\learn-web@2022\react\learnReact\资源\react_public\QQ图片20221121220958.png)

   总结:此时即可在person组件中使用count组件的求和值(count组件代码见上一节)

##### 5.6.8.纯函数

1. 一类特别的函数，只要是同样的输入(实参),必定得到同意的输出(返回)
2. 必须遵守以下一些约束
   1. 不得改写参数的数据
   2. 不会产生任何副作用,列如网络请求，输入和输出设备
   3. 不能调用Date.now()或者Math.random()等不纯的方法
3. redux的reducer函数必须是一个纯函数

##### 5.6.9.使用Redux DevTools开发者工具

1. 在谷歌应用商店下载插件Redux DevTools

2. 在项目中通过cnpm i redux-devtools-extension下载插件

3. 在redux中store.js文件中使用 redux-devtools-extension

   ```react
   //该文件专门用于暴露一个store对象，整个应用只有一个store对象
   //引入createStire,专门用与创建核心的store对象
   import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
   //引入为Count组件服务的reducer
   import countReducer from './reducers/count'
   //引入Person组件服务的reducer
   import personReducer from './reducers/person'
   //引入redux-thunk,用于支持异步action
   import thunk from 'redux-thunk'
   //引入redux-devtools-extension
   import { composeWithDevTools } from 'redux-devtools-extension'
   //汇总所有的reducer变为一个总的reducer
   const allReducer = combineReducers({
       count:countReducer,
       person:personReducer
   })
   //暴露store
   export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
   ```

##### 5.6.10.项目打包运行

1. 执行npm run build打包文件
2. 全局下载cnpm i serve -g
3. 执行serve build即可开启一个服务器

