const e=JSON.parse('{"key":"v-721723bc","path":"/java/concurrent/threadlocal.html","title":"ThreadLocal 详解","lang":"zh-CN","frontmatter":{"title":"ThreadLocal 详解","category":"Java","tag":["Java并发"],"description":"本文来自一枝花算不算浪漫投稿， 原文地址：https://juejin.cn/post/6844904151567040519。 前言 全文共 10000+字，31 张图，这篇文章同样耗费了不少的时间和精力才创作完成，原创不易，请大家点点关注+在看，感谢。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/concurrent/threadlocal.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"ThreadLocal 详解"}],["meta",{"property":"og:description","content":"本文来自一枝花算不算浪漫投稿， 原文地址：https://juejin.cn/post/6844904151567040519。 前言 全文共 10000+字，31 张图，这篇文章同样耗费了不少的时间和精力才创作完成，原创不易，请大家点点关注+在看，感谢。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-04T13:00:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ThreadLocal 详解"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2022-08-04T13:00:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ThreadLocal 详解\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":\\"2022-08-04T13:00:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":3,"title":"ThreadLocal代码演示","slug":"threadlocal代码演示","link":"#threadlocal代码演示","children":[]},{"level":3,"title":"ThreadLocal的数据结构","slug":"threadlocal的数据结构","link":"#threadlocal的数据结构","children":[]},{"level":3,"title":"GC 之后 key 是否为 null？","slug":"gc-之后-key-是否为-null","link":"#gc-之后-key-是否为-null","children":[]},{"level":3,"title":"ThreadLocal.set()方法源码详解","slug":"threadlocal-set-方法源码详解","link":"#threadlocal-set-方法源码详解","children":[]},{"level":3,"title":"ThreadLocalMap Hash 算法","slug":"threadlocalmap-hash-算法","link":"#threadlocalmap-hash-算法","children":[]},{"level":3,"title":"ThreadLocalMap Hash 冲突","slug":"threadlocalmap-hash-冲突","link":"#threadlocalmap-hash-冲突","children":[]},{"level":3,"title":"ThreadLocalMap.set()详解","slug":"threadlocalmap-set-详解","link":"#threadlocalmap-set-详解","children":[]},{"level":3,"title":"ThreadLocalMap过期 key 的探测式清理流程","slug":"threadlocalmap过期-key-的探测式清理流程","link":"#threadlocalmap过期-key-的探测式清理流程","children":[]},{"level":3,"title":"ThreadLocalMap扩容机制","slug":"threadlocalmap扩容机制","link":"#threadlocalmap扩容机制","children":[]},{"level":3,"title":"ThreadLocalMap.get()详解","slug":"threadlocalmap-get-详解","link":"#threadlocalmap-get-详解","children":[]},{"level":3,"title":"ThreadLocalMap过期 key 的启发式清理流程","slug":"threadlocalmap过期-key-的启发式清理流程","link":"#threadlocalmap过期-key-的启发式清理流程","children":[]},{"level":3,"title":"InheritableThreadLocal","slug":"inheritablethreadlocal","link":"#inheritablethreadlocal","children":[]},{"level":3,"title":"ThreadLocal项目中使用实战","slug":"threadlocal项目中使用实战","link":"#threadlocal项目中使用实战","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1659618003000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"marlonDML","email":"ismarlonding@gmail.com","commits":1}]},"readingTime":{"minutes":24.05,"words":7214},"filePathRelative":"java/concurrent/threadlocal.md","localizedDate":"2021年11月9日","excerpt":"<blockquote>\\n<p>本文来自一枝花算不算浪漫投稿， 原文地址：<a href=\\"https://juejin.cn/post/6844904151567040519\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://juejin.cn/post/6844904151567040519</a>。</p>\\n</blockquote>\\n<h3> 前言</h3>\\n<p></p>\\n<p><strong>全文共 10000+字，31 张图，这篇文章同样耗费了不少的时间和精力才创作完成，原创不易，请大家点点关注+在看，感谢。</strong></p>","copyright":{},"autoDesc":true}');export{e as data};
