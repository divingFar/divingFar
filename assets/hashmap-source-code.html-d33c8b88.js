const e=JSON.parse('{"key":"v-79a9b916","path":"/java/collection/hashmap-source-code.html","title":"HashMap源码&底层数据结构分析","lang":"zh-CN","frontmatter":{"title":"HashMap源码&底层数据结构分析","category":"Java","tag":["Java集合"],"description":"感谢 changfubai 对本文的改进做出的贡献！ HashMap 简介 HashMap 主要用来存放键值对，它基于哈希表的 Map 接口实现，是常用的 Java 集合之一，是非线程安全的。 HashMap 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/docs/java/collection/hashmap-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"HashMap源码&底层数据结构分析"}],["meta",{"property":"og:description","content":"感谢 changfubai 对本文的改进做出的贡献！ HashMap 简介 HashMap 主要用来存放键值对，它基于哈希表的 Map 接口实现，是常用的 Java 集合之一，是非线程安全的。 HashMap 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-24T03:39:12.000Z"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2022-08-24T03:39:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap源码&底层数据结构分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-24T03:39:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"HashMap 简介","slug":"hashmap-简介","link":"#hashmap-简介","children":[]},{"level":2,"title":"底层数据结构分析","slug":"底层数据结构分析","link":"#底层数据结构分析","children":[{"level":3,"title":"JDK1.8 之前","slug":"jdk1-8-之前","link":"#jdk1-8-之前","children":[]},{"level":3,"title":"JDK1.8 之后","slug":"jdk1-8-之后","link":"#jdk1-8-之后","children":[]}]},{"level":2,"title":"HashMap 源码分析","slug":"hashmap-源码分析","link":"#hashmap-源码分析","children":[{"level":3,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":3,"title":"put 方法","slug":"put-方法","link":"#put-方法","children":[]},{"level":3,"title":"get 方法","slug":"get-方法","link":"#get-方法","children":[]},{"level":3,"title":"resize 方法","slug":"resize-方法","link":"#resize-方法","children":[]}]},{"level":2,"title":"HashMap 常用方法测试","slug":"hashmap-常用方法测试","link":"#hashmap-常用方法测试","children":[]}],"git":{"createdTime":1636214511000,"updatedTime":1661312352000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Sr","email":"39112652+Itswag@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":12.79,"words":3836},"filePathRelative":"java/collection/hashmap-source-code.md","localizedDate":"2021年11月6日","excerpt":"<blockquote>\\n<p>感谢 <a href=\\"https://github.com/changfubai\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">changfubai</a> 对本文的改进做出的贡献！</p>\\n</blockquote>\\n<h2> HashMap 简介</h2>\\n<p>HashMap 主要用来存放键值对，它基于哈希表的 Map 接口实现，是常用的 Java 集合之一，是非线程安全的。</p>\\n<p><code>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个</p>","copyright":{},"autoDesc":true}');export{e as data};
