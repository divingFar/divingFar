const e=JSON.parse('{"key":"v-e6d5f0d8","path":"/database/mysql/innodb-implementation-of-mvcc.html","title":"InnoDB存储引擎对MVCC的实现","lang":"zh-CN","frontmatter":{"title":"InnoDB存储引擎对MVCC的实现","category":"数据库","tag":["MySQL"],"description":"一致性非锁定读和锁定读 一致性非锁定读 对于 一致性非锁定读（Consistent Nonlocking Reads） 的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/innodb-implementation-of-mvcc.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"InnoDB存储引擎对MVCC的实现"}],["meta",{"property":"og:description","content":"一致性非锁定读和锁定读 一致性非锁定读 对于 一致性非锁定读（Consistent Nonlocking Reads） 的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-05-25T10:00:26.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"InnoDB存储引擎对MVCC的实现"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2022-05-25T10:00:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"InnoDB存储引擎对MVCC的实现\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":\\"2022-05-25T10:00:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一致性非锁定读和锁定读","slug":"一致性非锁定读和锁定读","link":"#一致性非锁定读和锁定读","children":[{"level":3,"title":"一致性非锁定读","slug":"一致性非锁定读","link":"#一致性非锁定读","children":[]},{"level":3,"title":"锁定读","slug":"锁定读","link":"#锁定读","children":[]}]},{"level":2,"title":"InnoDB 对 MVCC 的实现","slug":"innodb-对-mvcc-的实现","link":"#innodb-对-mvcc-的实现","children":[{"level":3,"title":"隐藏字段","slug":"隐藏字段","link":"#隐藏字段","children":[]},{"level":3,"title":"ReadView","slug":"readview","link":"#readview","children":[]},{"level":3,"title":"undo-log","slug":"undo-log","link":"#undo-log","children":[]},{"level":3,"title":"数据可见性算法","slug":"数据可见性算法","link":"#数据可见性算法","children":[]}]},{"level":2,"title":"RC 和 RR 隔离级别下 MVCC 的差异","slug":"rc-和-rr-隔离级别下-mvcc-的差异","link":"#rc-和-rr-隔离级别下-mvcc-的差异","children":[]},{"level":2,"title":"MVCC 解决不可重复读问题","slug":"mvcc-解决不可重复读问题","link":"#mvcc-解决不可重复读问题","children":[{"level":3,"title":"在 RC 下 ReadView 生成情况","slug":"在-rc-下-readview-生成情况","link":"#在-rc-下-readview-生成情况","children":[]},{"level":3,"title":"在 RR 下 ReadView 生成情况","slug":"在-rr-下-readview-生成情况","link":"#在-rr-下-readview-生成情况","children":[]}]},{"level":2,"title":"MVCC➕Next-key-Lock 防止幻读","slug":"mvcc➕next-key-lock-防止幻读","link":"#mvcc➕next-key-lock-防止幻读","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1636197814000,"updatedTime":1653472826000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":3}]},"readingTime":{"minutes":12.56,"words":3767},"filePathRelative":"database/mysql/innodb-implementation-of-mvcc.md","localizedDate":"2021年11月6日","excerpt":"<h2> 一致性非锁定读和锁定读</h2>\\n<h3> 一致性非锁定读</h3>\\n<p>对于 <a href=\\"https://dev.mysql.com/doc/refman/5.7/en/innodb-consistent-read.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>一致性非锁定读（Consistent Nonlocking Reads）</strong> </a>的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见</p>","copyright":{},"autoDesc":true}');export{e as data};
