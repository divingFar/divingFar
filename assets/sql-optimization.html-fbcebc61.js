import{_ as o,X as t,Y as l,Z as s,a1 as n,$ as e,a2 as p,C as i}from"./framework-f0219f66.js";const c={},r=p('<h2 id="避免使用-select" tabindex="-1"><a class="header-anchor" href="#避免使用-select" aria-hidden="true">#</a> 避免使用 SELECT *</h2><ul><li>SELECT * 会消耗更多的 CPU。</li><li>SELECT * 无用字段增加网络带宽资源消耗，增加数据传输时间，尤其是大字段（如 varchar、blob、text）。</li><li>SELECT * 无法使用 MySQL 优化器覆盖索引的优化（基于 MySQL 优化器的“覆盖索引”策略又是速度极快，效率极高，业界极为推荐的查询优化方式）</li><li>SELECT &lt;字段列表&gt; 可减少表结构变更带来的影响。</li></ul><h2 id="分页优化" tabindex="-1"><a class="header-anchor" href="#分页优化" aria-hidden="true">#</a> 分页优化</h2><p>普通的分页在数据量小</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span> <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的时候耗费时间还是比较短的。</p><p>如果数据量变大，达到百万甚至是千万级别，普通的分页耗费的时间就非常长了。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span> <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token number">10</span>\n<span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span> <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1000000</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如何优化呢？</strong> 可以将上述 SQL 语句修改为子查询。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> <span class="token keyword">WHERE</span> id <span class="token operator">&gt;=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> id <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> <span class="token keyword">LIMIT</span> <span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">LIMIT</span> <span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们先查询出 limit 第一个参数对应的主键值，再根据这个主键值再去过滤并 limit，这样效率会更快。</p><p>阿里巴巴《Java 开发手册》中也有对应的描述：</p><p>利用延迟关联或者子查询优化超多分页场景。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191732322.png" alt="31fff0d5-d320-496c-80e9-0e94c77085ba"></p><p>不过，子查询的结果会产生一张新表，会影响性能，应该尽量避免大量使用子查询。</p><p>除了子查询之外，还以采用延迟查询的方式来优化。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> a<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> id <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>cus_order<span class="token punctuation">`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">`</span>score<span class="token punctuation">`</span></span> <span class="token keyword">DESC</span> <span class="token keyword">LIMIT</span> <span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> b <span class="token keyword">where</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们先提取对应的主键，再将这个主键表与原数据表关联。</p><p>相关阅读：</p>',19),d={href:"https://juejin.cn/post/6863668253898735629",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.cn/post/6985478936683610149",target:"_blank",rel:"noopener noreferrer"},k=p('<h2 id="尽量避免多表做-join" tabindex="-1"><a class="header-anchor" href="#尽量避免多表做-join" aria-hidden="true">#</a> 尽量避免多表做 join</h2><p>阿里巴巴《Java 开发手册》中有这样一段描述：</p><p>【强制】超过三个表禁止 join。需要 join 的字段，数据类型保持绝对一致;多表关联查询时，保证被关联 的字段需要有索引。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191738979.png" alt="image-20230319173836888"></p><p>join 的效率比较低，主要原因是因为其使用嵌套循环（Nested Loop）来实现关联查询，三种不同的实现效率都不是很高：</p><ul><li><strong>Simple Nested-Loop Join</strong> ：没有进过优化，直接使用笛卡尔积实现 join，逐行遍历/全表扫描，效率最低。</li><li><strong>Block Nested-Loop Join</strong> ：利用 JOIN BUFFER 进行优化，性能受到 JOIN BUFFER 大小的影响，相比于 Simple Nested-Loop Join 性能有所提升。不过，如果两个表的数据过大的话，无论如何优化，Block Nested-Loop Join 对性能的提升都非常有限。</li><li><strong>Index Nested-Loop Join</strong> ：在必要的字段上增加索引，使 join 的过程中可以使用到这个索引，这样可以让 Block Nested-Loop Join 转换为 Index Nested-Loop Join，性能得到进一步提升。</li></ul><p>实际业务场景避免多表 join 常见的做法有两种：</p><ol><li><strong>单表查询后在内存中自己做关联</strong> ：对数据库做单表查询，再根据查询结果进行二次查询，以此类推，最后再进行关联。</li><li><strong>数据冗余</strong>，把一些重要的数据在表中做冗余，尽可能地避免关联查询。很笨的一张做法，表结构比较稳定的情况下才会考虑这种做法。进行冗余设计之前，思考一下自己的表结构设计的是否有问题。</li></ol><p>更加推荐第一种，这种在实际项目中的使用率比较高，除了性能不错之外，还有如下优势：</p><ol><li><strong>拆分后的单表查询代码可复用性更高</strong> ：join 联表 SQL 基本不太可能被复用。</li><li><strong>单表查询更利于后续的维护</strong> ：不论是后续修改表结构还是进行分库分表，单表查询维护起来都更容易。</li></ol><p>不过，如果系统要求的并发量不大的话，我觉得多表 join 也是没问题的。很多公司内部复杂的系统，要求的并发量不高，很多数据必须 join 5 张以上的表才能查出来。</p>',11),m={href:"https://www.zhihu.com/question/68258877",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="建议不要使用外键与级联" tabindex="-1"><a class="header-anchor" href="#建议不要使用外键与级联" aria-hidden="true">#</a> 建议不要使用外键与级联</h2><p>阿里巴巴《Java 开发手册》中有这样一段描述：</p><p>不得使用外键与级联，一切外键概念必须在应用层解决。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191739649.png" alt="image-20230319173909584"></p><p>网络上已经有非常多分析外键与级联缺陷的文章了，个人认为不建议使用外键主要是因为对分库分表不友好，性能方面的影响其实是比较小的。</p><h2 id="选择合适的字段类型" tabindex="-1"><a class="header-anchor" href="#选择合适的字段类型" aria-hidden="true">#</a> 选择合适的字段类型</h2><p>存储字节越小，占用也就空间越小，性能也越好。</p><p><strong>a.某些字符串可以转换成数字类型存储比如可以将 IP 地址转换成整型数据。</strong></p><p>数字是连续的，性能更好，占用空间也更小。</p><p>MySQL 提供了两个方法来处理 ip 地址</p><ul><li>INET_ATON() ： 把 ip 转为无符号整型 (4-8 位)</li><li>INET_NTOA() :把整型的 ip 转为地址</li></ul><p>插入数据前，先用 INET_ATON() 把 ip 地址转为整型，显示数据时，使用 INET_NTOA() 把整型的 ip 地址转为地址显示即可。</p><p><strong>b.对于非负型的数据 (如自增 ID,整型 IP，年龄) 来说,要优先使用无符号整型来存储。</strong></p><p>无符号相对于有符号可以多出一倍的存储空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SIGNED INT -2147483648~2147483647
UNSIGNED INT 0~4294967295
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>c.小数值类型（比如年龄、状态表示如 0/1）优先使用 TINYINT 类型。</strong></p><p><strong>d.对于日期类型来说， DateTime 类型耗费空间更大且没有时区信息，建议使用 Timestamp。</strong></p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191746244.jpg" alt="d56a9859-9cd0-4e6f-bb82-564c31a7e4bf"></p><p><strong>e.金额字段用 decimal，避免精度丢失。</strong></p><p><strong>f.尽量使用自增 id 作为主键。</strong></p><p>如果主键为自增 id 的话，每次都会将数据加在 B+树尾部（本质是双向链表），时间复杂度为 O(1)。在写满一个数据页的时候，直接申请另一个新数据页接着写就可以了。</p><p>如果主键是非自增 id 的话，为了让新加入数据后 B+树的叶子节点还能保持有序，它就需要往叶子结点的中间找，查找过程的时间复杂度是 O(lgn)。如果这个也被写满的话，就需要进行页分裂。页分裂操作需要加悲观锁，想能非常低。</p><p>不过， 像分库分表这类场景就不建议使用自增 id 作为主键，应该使用分布式 ID 比如 uuid 。</p>`,23),h={href:"https://mp.weixin.qq.com/s/vNRIFKjbe7itRTxmq-bkAA",target:"_blank",rel:"noopener noreferrer"},b=p('<h2 id="尽量用-union-all-代替-union" tabindex="-1"><a class="header-anchor" href="#尽量用-union-all-代替-union" aria-hidden="true">#</a> 尽量用 UNION ALL 代替 UNION</h2><p>UNION 会把两个结果集的所有数据放到临时表中后再进行去重操作，更耗时，更消耗 CPU 资源。</p><p>UNION ALL 不会再对结果集进行去重操作，获取到的数据包含重复的项。</p><p>不过，如果实际业务场景中不允许产生重复数据的话，还是可以使用 UNION。</p><h2 id="批量操作" tabindex="-1"><a class="header-anchor" href="#批量操作" aria-hidden="true">#</a> 批量操作</h2><p>对于数据库中的数据更新，如果能使用批量操作就要尽量使用，减少请求数据库的次数，提高性能。</p><h2 id="show-profile-分析-sql-执行性能" tabindex="-1"><a class="header-anchor" href="#show-profile-分析-sql-执行性能" aria-hidden="true">#</a> Show Profile 分析 SQL 执行性能</h2>',7),g={href:"https://dev.mysql.com/doc/refman/5.7/en/show-profile.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://dev.mysql.com/doc/refman/5.7/en/show-profiles.html",target:"_blank",rel:"noopener noreferrer"},L=p(`<p>MySQL 在 5.0.37 版本之后才支持 Profiling，select @@have_profiling 命令返回 YES 表示该功能可以使用。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> @<span class="token variable">@have_profiling</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------------+</span>
<span class="token operator">|</span> @<span class="token variable">@have_profiling</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+</span>
<span class="token operator">|</span> YES              <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_=s("strong",null,"注意",-1),f={href:"https://dev.mysql.com/doc/refman/8.0/en/performance-schema.html",target:"_blank",rel:"noopener noreferrer"},S=p(`<p>想要使用 Profiling，请确保你的 profiling 是开启（on）的状态。</p><p>你可以通过 SHOW VARIABLES 命令查看其状态：</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191748858.png" alt="image-20230319174812805"></p><p>也可以通过 SELECT @@profiling命令进行查看：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> @<span class="token variable">@profiling</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-------------+</span>
<span class="token operator">|</span> @<span class="token variable">@profiling</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+</span>
<span class="token operator">|</span>           <span class="token number">0</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下， Profiling 是关闭（off）的状态，你直接通过SET @@profiling=1命令即可开启。</p><p>开启成功之后，我们执行几条 SQL 语句。执行完成之后，使用 SHOW PROFILES 可以展示当前 Session 下所有 SQL 语句的简要的信息包括 Query_ID（SQL 语句的 ID 编号） 和 Duration（耗时）。</p><p>具体能收集多少个 SQL，由参数 profiling_history_size 决定，默认值为 15，最大值为 100。如果设置为 0，等同于关闭 Profiling。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191749279.png" alt="image-20230319174922219"></p><p>如果想要展示一个 SQL 语句的执行耗时细节，可以使用SHOW PROFILE 命令。</p><p>SHOW PROFILE 命令的具体用法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> PROFILE <span class="token punctuation">[</span><span class="token keyword">type</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword">type</span><span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">FOR</span> QUERY n<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> row_count <span class="token punctuation">[</span><span class="token keyword">OFFSET</span> <span class="token keyword">offset</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token keyword">type</span>: {
    <span class="token keyword">ALL</span>
  <span class="token operator">|</span> BLOCK IO
  <span class="token operator">|</span> CONTEXT SWITCHES
  <span class="token operator">|</span> CPU
  <span class="token operator">|</span> IPC
  <span class="token operator">|</span> MEMORY
  <span class="token operator">|</span> PAGE FAULTS
  <span class="token operator">|</span> SOURCE
  <span class="token operator">|</span> SWAPS
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行SHOW PROFILE 命令时，可以加上类型子句，比如 CPU、IPC、MEMORY 等，查看具体某类资源的消耗情况：</p><p>如果不加 FOR QUERY {n}子句，默认展示最新的一次 SQL 的执行情况，加了 FOR QUERY {n}，表示展示 Query_ID 为 n 的 SQL 的执行情况。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303191750991.png" alt="image-20230319175054939"></p><h2 id="优化慢-sql" tabindex="-1"><a class="header-anchor" href="#优化慢-sql" aria-hidden="true">#</a> 优化慢 SQL</h2><p>为了优化慢 SQL ，我们首先要找到哪些 SQL 语句执行速度比较慢。</p><p>MySQL 慢查询日志是用来记录 MySQL 在执行命令中，响应时间超过预设阈值的 SQL 语句。因此，通过分析慢查询日志我们就可以找出执行速度比较慢的 SQL 语句。</p><p>出于性能层面的考虑，慢查询日志功能默认是关闭的，你可以通过以下命令开启：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启慢查询日志功能</span>
SET GLOBAL slow_query_log <span class="token operator">=</span> <span class="token string">&#39;ON&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 慢查询日志存放位置</span>
SET GLOBAL slow_query_log_file <span class="token operator">=</span> <span class="token string">&#39;/var/lib/mysql/ranking-list-slow.log&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 无论是否超时，未被索引的记录也会记录下来。</span>
SET GLOBAL log_queries_not_using_indexes <span class="token operator">=</span> <span class="token string">&#39;ON&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 慢查询阈值（秒），SQL 执行超过这个阈值将被记录在日志中。</span>
SET <span class="token environment constant">SESSION</span> long_query_time <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment"># 慢查询仅记录扫描行数大于此参数的 SQL</span>
SET <span class="token environment constant">SESSION</span> min_examined_row_limit <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置成功之后，使用 show variables like &#39;slow%&#39;; 命令进行查看。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">|</span> Variable_name       <span class="token operator">|</span> Value                                <span class="token operator">|</span>
+---------------------+--------------------------------------+
<span class="token operator">|</span> slow_launch_time    <span class="token operator">|</span> <span class="token number">2</span>                                    <span class="token operator">|</span>
<span class="token operator">|</span> slow_query_log      <span class="token operator">|</span> ON                                   <span class="token operator">|</span>
<span class="token operator">|</span> slow_query_log_file <span class="token operator">|</span> /var/lib/mysql/ranking-list-slow.log <span class="token operator">|</span>
+---------------------+--------------------------------------+
<span class="token number">3</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们故意在百万数据量的表(未使用索引)中执行一条排序的语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">\`</span>score<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>cus_order<span class="token punctuation">\`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">\`</span>score<span class="token punctuation">\`</span></span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确保自己有对应目录的访问权限</p><div class="language-b line-numbers-mode" data-ext="b"><pre class="language-b"><code>chmod 755 /var/lib/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看应的慢查询日志：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">cat</span> /var/lib/mysql/ranking-list-slow.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们刚刚故意执行的 SQL 语句已经被慢查询日志记录了下来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Time: 2022-10-09T08:55:37.486797Z
# User@Host: root[root] @  [172.17.0.1]  Id:    14
# Query_time: 0.978054  Lock_time: 0.000164 Rows_sent: 999999  Rows_examined: 1999998
SET timestamp=1665305736;
SELECT \`score\`,\`name\` FROM \`cus_order\` ORDER BY \`score\` DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里对日志中的一些信息进行说明：</p><ul><li>Time ：被日志记录的代码在服务器上的运行时间。</li><li>User@Host：谁执行的这段代码。</li><li>Query_time：这段代码运行时长。</li><li>Lock_time：执行这段代码时，锁定了多久。</li><li>Rows_sent：慢查询返回的记录。 Rows_examined：慢查询扫描过的行数。</li></ul><p>实际项目中，慢查询日志通常会比较复杂，我们需要借助一些工具对其进行分析。像 MySQL 内置的 mysqldumpslow 工具就可以把相同的 SQL 归为一类，并统计出归类项的执行次数和每次执行的耗时等一系列对应的情况。</p><p>找到了慢 SQL 之后，我们可以通过 EXPLAIN 命令分析对应的 SELECT 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">EXPLAIN</span> <span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">\`</span>score<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>cus_order<span class="token punctuation">\`</span></span> <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token identifier"><span class="token punctuation">\`</span>score<span class="token punctuation">\`</span></span> <span class="token keyword">DESC</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+----------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> select_type <span class="token operator">|</span> <span class="token keyword">table</span>     <span class="token operator">|</span> partitions <span class="token operator">|</span> <span class="token keyword">type</span> <span class="token operator">|</span> possible_keys <span class="token operator">|</span> <span class="token keyword">key</span>  <span class="token operator">|</span> key_len <span class="token operator">|</span> ref  <span class="token operator">|</span> <span class="token keyword">rows</span>   <span class="token operator">|</span> filtered <span class="token operator">|</span> Extra          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+----------------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> <span class="token keyword">SIMPLE</span>      <span class="token operator">|</span> cus_order <span class="token operator">|</span> <span class="token boolean">NULL</span>       <span class="token operator">|</span> <span class="token keyword">ALL</span>  <span class="token operator">|</span> <span class="token boolean">NULL</span>          <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token number">997572</span> <span class="token operator">|</span>   <span class="token number">100.00</span> <span class="token operator">|</span> <span class="token keyword">Using</span> filesort <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+-------------+-----------+------------+------+---------------+------+---------+------+--------+----------+----------------+</span>
<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较重要的字段说明：</p><ul><li>select_type ：查询的类型，常用的取值有 SIMPLE（普通查询，即没有联合查询、子查询）、PRIMARY（主查询）、UNION（UNION 中后面的查询）、SUBQUERY（子查询）等。</li><li>table ：表示查询涉及的表或衍生表。</li><li>type ：执行方式，判断查询是否高效的重要参考指标，结果值从差到好依次是：ALL &lt; index &lt; range ~ index_merge &lt; ref &lt; eq_ref &lt; const &lt; system。</li><li>rows : SQL 要查找到结果集需要扫描读取的数据行数，原则上 rows 越少越好。</li><li>......</li></ul>`,37),w={href:"https://segmentfault.com/a/1190000008131735",target:"_blank",rel:"noopener noreferrer"},E=p('<h2 id="正确使用索引" tabindex="-1"><a class="header-anchor" href="#正确使用索引" aria-hidden="true">#</a> 正确使用索引</h2><p>正确使用索引可以大大加快数据的检索速度（大大减少检索的数据量）。</p><h3 id="选择合适的字段创建索引" tabindex="-1"><a class="header-anchor" href="#选择合适的字段创建索引" aria-hidden="true">#</a> 选择合适的字段创建索引</h3><ul><li><strong>不为 NULL 的字段</strong> ：索引字段的数据应该尽量不为 NULL，因为对于数据为 NULL 的字段，数据库较难优化。如果字段频繁被查询，但又避免不了为 NULL，建议使用 0,1,true,false 这样语义较为清晰的短值或短字符作为替代。</li><li><strong>被频繁查询的字段</strong> ：我们创建索引的字段应该是查询操作非常频繁的字段。</li><li><strong>被作为条件查询的字段</strong> ：被作为 WHERE 条件查询的字段，应该被考虑建立索引。</li><li><strong>频繁需要排序的字段</strong> ：索引已经排序，这样查询可以利用索引的排序，加快排序查询时间。</li><li><strong>被经常频繁用于连接的字段</strong> ：经常用于连接的字段可能是一些外键列，对于外键列并不一定要建立外键，只是说该列涉及到表与表的关系。对于频繁被连接查询的字段，可以考虑建立索引，提高多表连接查询的效率。</li></ul><h3 id="被频繁更新的字段应该慎重建立索引" tabindex="-1"><a class="header-anchor" href="#被频繁更新的字段应该慎重建立索引" aria-hidden="true">#</a> 被频繁更新的字段应该慎重建立索引</h3><p>虽然索引能带来查询上的效率，但是维护索引的成本也是不小的。 如果一个字段不被经常查询，反而被经常修改，那么就更不应该在这种字段上建立索引了。</p><h3 id="尽可能的考虑建立联合索引而不是单列索引" tabindex="-1"><a class="header-anchor" href="#尽可能的考虑建立联合索引而不是单列索引" aria-hidden="true">#</a> 尽可能的考虑建立联合索引而不是单列索引</h3><p>因为索引是需要占用磁盘空间的，可以简单理解为每个索引都对应着一颗 B+树。如果一个表的字段过多，索引过多，那么当这个表的数据达到一个体量后，索引占用的空间也是很多的，且修改索引时，耗费的时间也是较多的。如果是联合索引，多个字段在一个索引上，那么将会节约很大磁盘空间，且修改数据的操作效率也会提升。</p><h3 id="注意避免冗余索引" tabindex="-1"><a class="header-anchor" href="#注意避免冗余索引" aria-hidden="true">#</a> 注意避免冗余索引</h3><p>冗余索引指的是索引的功能相同，能够命中索引(a, b)就肯定能命中索引(a) ，那么索引(a)就是冗余索引。如（name,city ）和（name ）这两个索引就是冗余索引，能够命中前者的查询肯定是能够命中后者的 在大多数情况下，都应该尽量扩展已有的索引而不是创建新索引。</p><h3 id="考虑在字符串类型的字段上使用前缀索引代替普通索引" tabindex="-1"><a class="header-anchor" href="#考虑在字符串类型的字段上使用前缀索引代替普通索引" aria-hidden="true">#</a> 考虑在字符串类型的字段上使用前缀索引代替普通索引</h3><p>前缀索引仅限于字符串类型，较普通索引会占用更小的空间，所以可以考虑使用前缀索引带替普通索引。</p><h3 id="避免索引失效" tabindex="-1"><a class="header-anchor" href="#避免索引失效" aria-hidden="true">#</a> 避免索引失效</h3><p>索引失效也是慢查询的主要原因之一，常见的导致索引失效的情况有下面这些：</p>',14),O=s("li",null,"使用 SELECT * 进行查询;",-1),I=s("li",null,"创建了组合索引，但查询条件未准守最左匹配原则;",-1),q=s("li",null,"在索引列上进行计算、函数、类型转换等操作;",-1),x=s("li",null,"以 % 开头的 LIKE 查询比如 like '%abc';;",-1),N=s("li",null,"查询条件中使用 or，且 or 的前后条件中有一个列没有索引，涉及的索引都不会被使用到;",-1),T={href:"https://javaguide.cn/database/mysql/index-invalidation-caused-by-implicit-conversion.html",target:"_blank",rel:"noopener noreferrer"},R=s("li",null,"......",-1),Q=p('<h3 id="删除长期未使用的索引" tabindex="-1"><a class="header-anchor" href="#删除长期未使用的索引" aria-hidden="true">#</a> 删除长期未使用的索引</h3><p>删除长期未使用的索引，不用的索引的存在会造成不必要的性能损耗 MySQL 5.7 可以通过查询 sys 库的 schema_unused_indexes 视图来查询哪些索引从未被使用</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>MySQL 8.2 Optimizing SQL Statements：https://dev.mysql.com/doc/refman/8.0/en/statement-optimization.html</li><li>为什么阿里巴巴禁止数据库中做多表 join - Hollis：https://mp.weixin.qq.com/s/GSGVFkDLz1hZ1OjGndUjZg</li><li>MySQL 的 COUNT 语句，竟然都能被面试官虐的这么惨 - Hollis：https://mp.weixin.qq.com/s/IOHvtel2KLNi-Ol4UBivbQ</li><li>MySQL 性能优化神器 Explain 使用分析：https://segmentfault.com/a/1190000008131735</li><li>如何使用 MySQL 慢查询日志进行性能优化 ：https://kalacloud.com/blog/how-to-use-mysql-slow-query-log-profiling-mysqldumpslow/</li></ul>',4);function C(M,U){const a=i("ExternalLinkIcon");return t(),l("div",null,[r,s("ul",null,[s("li",null,[s("a",d,[n("面试官：一千万数据，怎么快速查询？"),e(a)])]),s("li",null,[s("a",u,[n("【得物技术】MySQL 深分页优化"),e(a)])])]),k,s("p",null,[n("知乎上也有关于这个问题的讨论："),s("a",m,[n("MySQL 多表关联查询效率高点还是多次单表查询效率高，为什么？"),e(a)]),n("，感兴趣的可以看看。")]),v,s("p",null,[n("相关阅读："),s("a",h,[n("数据库主键一定要自增吗？有哪些场景不建议自增？"),e(a)]),n("。")]),b,s("p",null,[n("为了更精准定位一条 SQL 语句的性能问题，需要清楚地知道这条 SQL 语句运行时消耗了多少系统资源。 "),s("a",g,[n("SHOW PROFILE"),e(a)]),n(" 和 "),s("a",y,[n("SHOW PROFILES"),e(a)]),n(" 展示 SQL 语句的资源使用情况，展示的消息包括 CPU 的使用，CPU 上下文切换，IO 等待，内存使用等。")]),L,s("p",null,[_,n(" ：SHOW PROFILE 和 SHOW PROFILES 已经被弃用，未来的 MySQL 版本中可能会被删除，取而代之的是使用 "),s("a",f,[n("Performance Schema"),e(a)]),n("。在该功能被删除之前，我们简单介绍一下其基本使用方法。")]),S,s("p",null,[n("关于 Explain 的详细介绍，请看这篇文章："),s("a",w,[n("MySQL 性能优化神器 Explain 使用分析 - 永顺"),e(a)]),n("。")]),E,s("ul",null,[O,I,q,x,N,s("li",null,[n("发生"),s("a",T,[n("隐式转换"),e(a)]),n(";")]),R]),Q])}const F=o(c,[["render",C],["__file","sql-optimization.html.vue"]]);export{F as default};