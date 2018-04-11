记录几个点

mongodb 安装完需要在系统 path 加入 mongodb 的 bin 文件地址  
  
db 文件夹为 数据库地址  
其命令行执行方法为  mongod --dbpath ./db  

controllers 文件夹为 数据控制器
分别是 操作每个数据表的方法并 export 为 koa 的路由中间件

例子也较为简单
