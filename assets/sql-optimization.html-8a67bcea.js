const e=JSON.parse('{"key":"v-b7424108","path":"/high-performance/sql-optimization.html","title":"常见 SQL 优化手段总结","lang":"zh-CN","frontmatter":{"title":"常见 SQL 优化手段总结","category":"高性能","icon":"mysql","head":[["meta",{"name":"keywords","content":"分页优化,索引,Show Profile,慢 SQL"}],["meta",{"name":"description","content":"SQL 优化是一个大家都比较关注的热门话题，无论你在面试，还是工作中，都很有可能会遇到。如果某天你负责的某个线上接口，出现了性能问题，需要做优化。那么你首先想到的很有可能是优化 SQL 优化，因为它的改造成本相对于代码来说也要小得多。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/high-performance/sql-optimization.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"常见 SQL 优化手段总结"}],["meta",{"property":"og:description","content":"避免使用 SELECT * SELECT * 会消耗更多的 CPU。 SELECT * 无用字段增加网络带宽资源消耗，增加数据传输时间，尤其是大字段（如 varchar、blob、text）。 SELECT * 无法使用 MySQL 优化器覆盖索引的优化（基于 MySQL 优化器的“覆盖索引”策略又是速度极快，效率极高，业界极为推荐的查询优化方式） SELECT &lt;字段列表&gt; 可减少表结构变更带来的影响。 分页优化 普通的分页在数据量小"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-19T09:55:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-19T09:55:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见 SQL 优化手段总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-19T09:55:04.000Z\\",\\"author\\":[]}"]],"description":"避免使用 SELECT * SELECT * 会消耗更多的 CPU。 SELECT * 无用字段增加网络带宽资源消耗，增加数据传输时间，尤其是大字段（如 varchar、blob、text）。 SELECT * 无法使用 MySQL 优化器覆盖索引的优化（基于 MySQL 优化器的“覆盖索引”策略又是速度极快，效率极高，业界极为推荐的查询优化方式） SELECT &lt;字段列表&gt; 可减少表结构变更带来的影响。 分页优化 普通的分页在数据量小"},"headers":[{"level":2,"title":"避免使用 SELECT *","slug":"避免使用-select","link":"#避免使用-select","children":[]},{"level":2,"title":"分页优化","slug":"分页优化","link":"#分页优化","children":[]},{"level":2,"title":"尽量避免多表做 join","slug":"尽量避免多表做-join","link":"#尽量避免多表做-join","children":[]},{"level":2,"title":"建议不要使用外键与级联","slug":"建议不要使用外键与级联","link":"#建议不要使用外键与级联","children":[]},{"level":2,"title":"选择合适的字段类型","slug":"选择合适的字段类型","link":"#选择合适的字段类型","children":[]},{"level":2,"title":"尽量用 UNION ALL 代替 UNION","slug":"尽量用-union-all-代替-union","link":"#尽量用-union-all-代替-union","children":[]},{"level":2,"title":"批量操作","slug":"批量操作","link":"#批量操作","children":[]},{"level":2,"title":"Show Profile 分析 SQL 执行性能","slug":"show-profile-分析-sql-执行性能","link":"#show-profile-分析-sql-执行性能","children":[]},{"level":2,"title":"优化慢 SQL","slug":"优化慢-sql","link":"#优化慢-sql","children":[]},{"level":2,"title":"正确使用索引","slug":"正确使用索引","link":"#正确使用索引","children":[{"level":3,"title":"选择合适的字段创建索引","slug":"选择合适的字段创建索引","link":"#选择合适的字段创建索引","children":[]},{"level":3,"title":"被频繁更新的字段应该慎重建立索引","slug":"被频繁更新的字段应该慎重建立索引","link":"#被频繁更新的字段应该慎重建立索引","children":[]},{"level":3,"title":"尽可能的考虑建立联合索引而不是单列索引","slug":"尽可能的考虑建立联合索引而不是单列索引","link":"#尽可能的考虑建立联合索引而不是单列索引","children":[]},{"level":3,"title":"注意避免冗余索引","slug":"注意避免冗余索引","link":"#注意避免冗余索引","children":[]},{"level":3,"title":"考虑在字符串类型的字段上使用前缀索引代替普通索引","slug":"考虑在字符串类型的字段上使用前缀索引代替普通索引","link":"#考虑在字符串类型的字段上使用前缀索引代替普通索引","children":[]},{"level":3,"title":"避免索引失效","slug":"避免索引失效","link":"#避免索引失效","children":[]},{"level":3,"title":"删除长期未使用的索引","slug":"删除长期未使用的索引","link":"#删除长期未使用的索引","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1667489612000,"updatedTime":1679219704000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1},{"name":"diving-cloud","email":"43922483+diving-cloud@users.noreply.github.com","commits":1},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":1}]},"readingTime":{"minutes":14.87,"words":4461},"filePathRelative":"high-performance/sql-optimization.md","localizedDate":"2022年11月3日","excerpt":"<h2> 避免使用 SELECT *</h2>\\n<ul>\\n<li>SELECT * 会消耗更多的 CPU。</li>\\n<li>SELECT * 无用字段增加网络带宽资源消耗，增加数据传输时间，尤其是大字段（如 varchar、blob、text）。</li>\\n<li>SELECT * 无法使用 MySQL 优化器覆盖索引的优化（基于 MySQL 优化器的“覆盖索引”策略又是速度极快，效率极高，业界极为推荐的查询优化方式）</li>\\n<li>SELECT &lt;字段列表&gt; 可减少表结构变更带来的影响。</li>\\n</ul>\\n<h2> 分页优化</h2>\\n<p>普通的分页在数据量小</p>","copyright":{},"autoDesc":true}');export{e as data};
