const e=JSON.parse('{"key":"v-4bcd12a8","path":"/database/redis/redis-data-structures-02.html","title":"Redis 3 种特殊数据结构详解","lang":"zh-CN","frontmatter":{"title":"Redis 3 种特殊数据结构详解","category":"数据库","tag":["Redis"],"head":[["meta",{"name":"keywords","content":"Redis常见数据结构"}],["meta",{"name":"description","content":"Redis特殊数据结构总结：HyperLogLogs（基数统计）、Bitmap （位存储）、Geospatial (地理位置)。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/docs/database/redis/redis-data-structures-02.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Redis 3 种特殊数据结构详解"}],["meta",{"property":"og:description","content":"除了 5 种基本的数据结构之外，Redis 还支持 3 种特殊的数据结构 ：Bitmap、HyperLogLog、GEO。 Bitmap 介绍 Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。 你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-03T03:14:20.000Z"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2022-12-03T03:14:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 3 种特殊数据结构详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-03T03:14:20.000Z\\",\\"author\\":[]}"]],"description":"除了 5 种基本的数据结构之外，Redis 还支持 3 种特殊的数据结构 ：Bitmap、HyperLogLog、GEO。 Bitmap 介绍 Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。 你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。"},"headers":[{"level":2,"title":"Bitmap","slug":"bitmap","link":"#bitmap","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"HyperLogLog","slug":"hyperloglog","link":"#hyperloglog","children":[{"level":3,"title":"介绍","slug":"介绍-1","link":"#介绍-1","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-1","link":"#常用命令-1","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-1","link":"#应用场景-1","children":[]}]},{"level":2,"title":"Geospatial index","slug":"geospatial-index","link":"#geospatial-index","children":[{"level":3,"title":"介绍","slug":"介绍-2","link":"#介绍-2","children":[]},{"level":3,"title":"常用命令","slug":"常用命令-2","link":"#常用命令-2","children":[]},{"level":3,"title":"应用场景","slug":"应用场景-2","link":"#应用场景-2","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1658300895000,"updatedTime":1670037260000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":6}]},"readingTime":{"minutes":5.18,"words":1554},"filePathRelative":"database/redis/redis-data-structures-02.md","localizedDate":"2022年7月20日","excerpt":"<p>除了 5 种基本的数据结构之外，Redis 还支持 3 种特殊的数据结构 ：Bitmap、HyperLogLog、GEO。</p>\\n<h2> Bitmap</h2>\\n<h3> 介绍</h3>\\n<p>Bitmap 存储的是连续的二进制数字（0 和 1），通过 Bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 Bitmap 本身会极大的节省储存空间。</p>\\n<p>你可以将 Bitmap 看作是一个存储二进制数字（0 和 1）的数组，数组中每个元素的下标叫做 offset（偏移量）。</p>","copyright":{},"autoDesc":true}');export{e as data};
