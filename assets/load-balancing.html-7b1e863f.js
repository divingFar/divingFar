const e=JSON.parse('{"key":"v-aa603cd4","path":"/high-performance/load-balancing.html","title":"负载均衡详解","lang":"zh-CN","frontmatter":{"title":"负载均衡详解","category":"高性能","icon":"fuzaijunheng","head":[["meta",{"name":"keywords","content":"客户端负载均衡,服务负载均衡,Nginx,负载均衡算法,七层负载均衡,DNS解析"}],["meta",{"name":"description","content":"负载均衡指的是将用户请求分摊到不同的服务器上处理，以提高系统整体的并发处理能力。负载均衡可以简单分为服务端负载均衡和客户端负载均衡 这两种。服务端负载均衡涉及到的知识点更多，工作中遇到的也比较多，因为，我会花更多时间来介绍。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/high-performance/load-balancing.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"负载均衡详解"}],["meta",{"property":"og:description","content":"相关面试题 ： 服务端负载均衡一般怎么做？ 四层负载均衡和七层负载均衡的区别？ 负载均衡的常见算法有哪些？ 七层负载均衡常见解决方案有哪些？ 客户端负载均衡的常见解决方案有哪些？ 什么是负载均衡？ 负载均衡 指的是将用户请求分摊到不同的服务器上处理，以提高系统整体的并发处理能力以及可靠性。负载均衡服务可以有由专门的软件或者硬件来完成，一般情况下，硬件的性能更好，软件的价格更便宜（后文会详细介绍到）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-21T15:28:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-21T15:28:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"负载均衡详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-21T15:28:08.000Z\\",\\"author\\":[]}"]],"description":"相关面试题 ： 服务端负载均衡一般怎么做？ 四层负载均衡和七层负载均衡的区别？ 负载均衡的常见算法有哪些？ 七层负载均衡常见解决方案有哪些？ 客户端负载均衡的常见解决方案有哪些？ 什么是负载均衡？ 负载均衡 指的是将用户请求分摊到不同的服务器上处理，以提高系统整体的并发处理能力以及可靠性。负载均衡服务可以有由专门的软件或者硬件来完成，一般情况下，硬件的性能更好，软件的价格更便宜（后文会详细介绍到）。"},"headers":[{"level":2,"title":"什么是负载均衡？","slug":"什么是负载均衡","link":"#什么是负载均衡","children":[{"level":3,"title":"服务端负载均衡","slug":"服务端负载均衡","link":"#服务端负载均衡","children":[]}]},{"level":2,"title":"客户端负载均衡","slug":"客户端负载均衡","link":"#客户端负载均衡","children":[]},{"level":2,"title":"负载均衡常见的算法有哪些？","slug":"负载均衡常见的算法有哪些","link":"#负载均衡常见的算法有哪些","children":[{"level":3,"title":"随机法","slug":"随机法","link":"#随机法","children":[]},{"level":3,"title":"轮询法","slug":"轮询法","link":"#轮询法","children":[]},{"level":3,"title":"一致性 Hash 法","slug":"一致性-hash-法","link":"#一致性-hash-法","children":[]}]},{"level":2,"title":"客户端负载均衡通常是怎么做的？","slug":"客户端负载均衡通常是怎么做的","link":"#客户端负载均衡通常是怎么做的","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1646270096000,"updatedTime":1679412488000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":10},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":2},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1},{"name":"diving-cloud","email":"43922483+diving-cloud@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":12.14,"words":3641},"filePathRelative":"high-performance/load-balancing.md","localizedDate":"2022年3月3日","excerpt":"<p><strong>相关面试题</strong> ：</p>\\n<ul>\\n<li>服务端负载均衡一般怎么做？</li>\\n<li>四层负载均衡和七层负载均衡的区别？</li>\\n<li>负载均衡的常见算法有哪些？</li>\\n<li>七层负载均衡常见解决方案有哪些？</li>\\n<li>客户端负载均衡的常见解决方案有哪些？</li>\\n</ul>\\n<h2> 什么是负载均衡？</h2>\\n<p><strong>负载均衡</strong> 指的是将用户请求分摊到不同的服务器上处理，以提高系统整体的并发处理能力以及可靠性。负载均衡服务可以有由专门的软件或者硬件来完成，一般情况下，硬件的性能更好，软件的价格更便宜（后文会详细介绍到）。</p>","copyright":{},"autoDesc":true}');export{e as data};