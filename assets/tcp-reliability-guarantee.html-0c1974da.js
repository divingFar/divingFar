const e=JSON.parse('{"key":"v-7399bf52","path":"/cs-basics/network/tcp-reliability-guarantee.html","title":"TCP 传输可靠性保障（传输层）","lang":"zh-CN","frontmatter":{"title":"TCP 传输可靠性保障（传输层）","category":"计算机基础","tag":["计算机网络"],"description":"TCP 如何保证传输的可靠性？ 基于数据块传输 ：应用数据被分割成 TCP 认为最适合发送的数据块，再传输给网络层，数据块被称为报文段或段。 对失序数据包重新排序以及去重：TCP 为了保证不发生丢包，就给每个包一个序列号，有了序列号能够将接收到的数据根据序列号排序，并且去掉重复序列号的数据就可以实现数据包去重。 校验和 : TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。 超时重传 : 当发送方发送数据之后，它启动一个定时器，等待目的端确认收到这个报文段。接收端实体对已成功收到的包发回一个相应的确认信息（ACK）。如果发送端实体在合理的往返时延（RTT）内未收到确认消息，那么对应的数据包就被假设为已丢失并进行重传。 流量控制 : TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议（TCP 利用滑动窗口实现流量控制）。 拥塞控制 : 当网络拥塞时，减少数据的发送。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/network/tcp-reliability-guarantee.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"TCP 传输可靠性保障（传输层）"}],["meta",{"property":"og:description","content":"TCP 如何保证传输的可靠性？ 基于数据块传输 ：应用数据被分割成 TCP 认为最适合发送的数据块，再传输给网络层，数据块被称为报文段或段。 对失序数据包重新排序以及去重：TCP 为了保证不发生丢包，就给每个包一个序列号，有了序列号能够将接收到的数据根据序列号排序，并且去掉重复序列号的数据就可以实现数据包去重。 校验和 : TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。 超时重传 : 当发送方发送数据之后，它启动一个定时器，等待目的端确认收到这个报文段。接收端实体对已成功收到的包发回一个相应的确认信息（ACK）。如果发送端实体在合理的往返时延（RTT）内未收到确认消息，那么对应的数据包就被假设为已丢失并进行重传。 流量控制 : TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议（TCP 利用滑动窗口实现流量控制）。 拥塞控制 : 当网络拥塞时，减少数据的发送。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T15:01:38.000Z"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:modified_time","content":"2023-03-10T15:01:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCP 传输可靠性保障（传输层）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-10T15:01:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"TCP 如何保证传输的可靠性？","slug":"tcp-如何保证传输的可靠性","link":"#tcp-如何保证传输的可靠性","children":[]},{"level":2,"title":"TCP 如何实现流量控制？","slug":"tcp-如何实现流量控制","link":"#tcp-如何实现流量控制","children":[]},{"level":2,"title":"TCP 的拥塞控制是怎么实现的？","slug":"tcp-的拥塞控制是怎么实现的","link":"#tcp-的拥塞控制是怎么实现的","children":[]},{"level":2,"title":"ARQ 协议了解吗?","slug":"arq-协议了解吗","link":"#arq-协议了解吗","children":[{"level":3,"title":"停止等待 ARQ 协议","slug":"停止等待-arq-协议","link":"#停止等待-arq-协议","children":[]},{"level":3,"title":"连续 ARQ 协议","slug":"连续-arq-协议","link":"#连续-arq-协议","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1660468217000,"updatedTime":1678460498000,"contributors":[{"name":"Kunle Li","email":"67528514+unw9527@users.noreply.github.com","commits":1},{"name":"Wenqi Tang","email":"35358984+super233@users.noreply.github.com","commits":1},{"name":"chanper","email":"qianchaosolo@gmail.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":1}]},"readingTime":{"minutes":10.91,"words":3274},"filePathRelative":"cs-basics/network/tcp-reliability-guarantee.md","localizedDate":"2022年8月14日","excerpt":"<h2> TCP 如何保证传输的可靠性？</h2>\\n<ol>\\n<li><strong>基于数据块传输</strong> ：应用数据被分割成 TCP 认为最适合发送的数据块，再传输给网络层，数据块被称为报文段或段。</li>\\n<li><strong>对失序数据包重新排序以及去重</strong>：TCP 为了保证不发生丢包，就给每个包一个序列号，有了序列号能够将接收到的数据根据序列号排序，并且去掉重复序列号的数据就可以实现数据包去重。</li>\\n<li><strong>校验和</strong> : TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。</li>\\n<li><strong>超时重传</strong> : 当发送方发送数据之后，它启动一个定时器，等待目的端确认收到这个报文段。接收端实体对已成功收到的包发回一个相应的确认信息（ACK）。如果发送端实体在合理的往返时延（RTT）内未收到确认消息，那么对应的数据包就被假设为<a href=\\"https://zh.wikipedia.org/wiki/%E4%B8%A2%E5%8C%85\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">已丢失</a>并进行重传。</li>\\n<li><strong>流量控制</strong> : TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议（TCP 利用滑动窗口实现流量控制）。</li>\\n<li><strong>拥塞控制</strong> : 当网络拥塞时，减少数据的发送。</li>\\n</ol>","copyright":{},"autoDesc":true}');export{e as data};
