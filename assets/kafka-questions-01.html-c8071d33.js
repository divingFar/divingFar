const e=JSON.parse('{"key":"v-560ccc08","path":"/high-performance/message-queue/kafka-questions-01.html","title":"Kafka常见面试题总结","lang":"zh-CN","frontmatter":{"title":"Kafka常见面试题总结","category":"高性能","tag":["消息队列"],"description":"Kafka 是什么？主要应用场景有哪些？ Kafka 是一个分布式流式处理平台。这到底是什么意思呢？ 流平台具有三个关键功能： 消息队列：发布和订阅消息流，这个功能类似于消息队列，这也是 Kafka 也被归类为消息队列的原因。 容错的持久方式存储记录消息流： Kafka 会把消息持久化到磁盘，有效避免了消息丢失的风险。 流式处理平台： 在消息发布的时候进行处理，Kafka 提供了一个完整的流式处理类库。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/high-performance/message-queue/kafka-questions-01.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Kafka常见面试题总结"}],["meta",{"property":"og:description","content":"Kafka 是什么？主要应用场景有哪些？ Kafka 是一个分布式流式处理平台。这到底是什么意思呢？ 流平台具有三个关键功能： 消息队列：发布和订阅消息流，这个功能类似于消息队列，这也是 Kafka 也被归类为消息队列的原因。 容错的持久方式存储记录消息流： Kafka 会把消息持久化到磁盘，有效避免了消息丢失的风险。 流式处理平台： 在消息发布的时候进行处理，Kafka 提供了一个完整的流式处理类库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-26T01:26:39.000Z"}],["meta",{"property":"article:tag","content":"消息队列"}],["meta",{"property":"article:modified_time","content":"2022-09-26T01:26:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka常见面试题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-26T01:26:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"Kafka 是什么？主要应用场景有哪些？","slug":"kafka-是什么-主要应用场景有哪些","link":"#kafka-是什么-主要应用场景有哪些","children":[]},{"level":3,"title":"和其他消息队列相比,Kafka的优势在哪里？","slug":"和其他消息队列相比-kafka的优势在哪里","link":"#和其他消息队列相比-kafka的优势在哪里","children":[]},{"level":3,"title":"队列模型了解吗？Kafka 的消息模型知道吗？","slug":"队列模型了解吗-kafka-的消息模型知道吗","link":"#队列模型了解吗-kafka-的消息模型知道吗","children":[]},{"level":3,"title":"什么是Producer、Consumer、Broker、Topic、Partition？","slug":"什么是producer、consumer、broker、topic、partition","link":"#什么是producer、consumer、broker、topic、partition","children":[]},{"level":3,"title":"Kafka 的多副本机制了解吗？带来了什么好处？","slug":"kafka-的多副本机制了解吗-带来了什么好处","link":"#kafka-的多副本机制了解吗-带来了什么好处","children":[]},{"level":3,"title":"Zookeeper 在 Kafka 中的作用知道吗？","slug":"zookeeper-在-kafka-中的作用知道吗","link":"#zookeeper-在-kafka-中的作用知道吗","children":[]},{"level":3,"title":"Kafka 如何保证消息的消费顺序？","slug":"kafka-如何保证消息的消费顺序","link":"#kafka-如何保证消息的消费顺序","children":[]},{"level":3,"title":"Kafka 如何保证消息不丢失","slug":"kafka-如何保证消息不丢失","link":"#kafka-如何保证消息不丢失","children":[]},{"level":3,"title":"Kafka 如何保证消息不重复消费","slug":"kafka-如何保证消息不重复消费","link":"#kafka-如何保证消息不重复消费","children":[]},{"level":3,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1646270096000,"updatedTime":1664155599000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4}]},"readingTime":{"minutes":15.81,"words":4742},"filePathRelative":"high-performance/message-queue/kafka-questions-01.md","localizedDate":"2022年3月3日","excerpt":"<h3> Kafka 是什么？主要应用场景有哪些？</h3>\\n<p>Kafka 是一个分布式流式处理平台。这到底是什么意思呢？</p>\\n<p>流平台具有三个关键功能：</p>\\n<ol>\\n<li><strong>消息队列</strong>：发布和订阅消息流，这个功能类似于消息队列，这也是 Kafka 也被归类为消息队列的原因。</li>\\n<li><strong>容错的持久方式存储记录消息流</strong>： Kafka 会把消息持久化到磁盘，有效避免了消息丢失的风险。</li>\\n<li><strong>流式处理平台：</strong> 在消息发布的时候进行处理，Kafka 提供了一个完整的流式处理类库。</li>\\n</ol>","copyright":{},"autoDesc":true}');export{e as data};
