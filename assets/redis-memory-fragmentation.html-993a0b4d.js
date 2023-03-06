const e=JSON.parse('{"key":"v-65c8c4df","path":"/database/redis/redis-memory-fragmentation.html","title":"Redis 内存碎片详解","lang":"zh-CN","frontmatter":{"title":"Redis 内存碎片详解","category":"数据库","tag":["Redis"],"description":"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/docs/database/redis/redis-memory-fragmentation.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Redis 内存碎片详解"}],["meta",{"property":"og:description","content":"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-13T05:14:26.000Z"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2022-06-13T05:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 内存碎片详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-13T05:14:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是内存碎片?","slug":"什么是内存碎片","link":"#什么是内存碎片","children":[]},{"level":2,"title":"为什么会有 Redis 内存碎片?","slug":"为什么会有-redis-内存碎片","link":"#为什么会有-redis-内存碎片","children":[]},{"level":2,"title":"如何查看 Redis 内存碎片的信息？","slug":"如何查看-redis-内存碎片的信息","link":"#如何查看-redis-内存碎片的信息","children":[]},{"level":2,"title":"如何清理 Redis 内存碎片？","slug":"如何清理-redis-内存碎片","link":"#如何清理-redis-内存碎片","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1640928915000,"updatedTime":1655097266000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2}]},"readingTime":{"minutes":4.75,"words":1426},"filePathRelative":"database/redis/redis-memory-fragmentation.md","localizedDate":"2021年12月31日","excerpt":"<h2> 什么是内存碎片?</h2>\\n<p>你可以将内存碎片简单地理解为那些不可用的空闲内存。</p>\\n<p>举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。</p>\\n<p><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/memory-fragmentation.png\\" alt=\\"内存碎片\\"></p>\\n<p>Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。</p>","copyright":{},"autoDesc":true}');export{e as data};
