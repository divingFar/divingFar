import{_ as i,X as l,Y as n,Z as a,$ as e,a0 as o,a2 as t,C as h}from"./framework-9b4b2ab3.js";const s="/docs/assets/message-queue-pub-sub-model-63a717b4.png",p="/docs/assets/message-queue-queue-model-3aa809bf.png",d={},c=t('<p>“RabbitMQ？”“Kafka？”“RocketMQ？”...在日常学习与开发过程中，我们常常听到消息队列这个关键词。我也在我的多篇文章中提到了这个概念。可能你是熟练使用消息队列的老手，又或者你是不懂消息队列的新手，不论你了不了解消息队列，本文都将带你搞懂消息队列的一些基本理论。</p><p>如果你是老手，你可能从本文学到你之前不曾注意的一些关于消息队列的重要概念，如果你是新手，相信本文将是你打开消息队列大门的一板砖。</p><h2 id="什么是消息队列" tabindex="-1"><a class="header-anchor" href="#什么是消息队列" aria-hidden="true">#</a> 什么是消息队列？</h2><p>我们可以把消息队列看作是一个存放消息的容器，当我们需要使用消息的时候，直接从容器中取出消息供自己使用即可。由于队列 Queue 是一种先进先出的数据结构，所以消费消息时也是按照顺序来消费的。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/消息队列/message-queue-small.png" alt="Message queue"></p><p>参与消息传递的双方称为 <strong>生产者</strong> 和 <strong>消费者</strong> ，生产者负责发送消息，消费者负责处理消息。</p><p><img src="'+s+'" alt="发布/订阅（Pub/Sub）模型"></p><p>我们知道操作系统中的进程通信的一种很重要的方式就是消息队列。我们这里提到的消息队列稍微有点区别，更多指的是各个服务以及系统内部各个组件/模块之前的通信，属于一种 <strong>中间件</strong> 。</p><p>维基百科是这样介绍中间件的：</p><blockquote><p>中间件（英语：Middleware），又译中间件、中介层，是一类提供系统软件和应用软件之间连接、便于软件各部件之间的沟通的软件，应用软件可以借助中间件在不同的技术架构之间共享信息与资源。中间件位于客户机服务器的操作系统之上，管理着计算资源和网络通信。</p></blockquote><p>简单来说： <strong>中间件就是一类为应用软件服务的软件，应用软件是为用户服务的，用户不会接触或者使用到中间件。</strong></p><p>除了消息队列之外，常见的中间件还有 RPC 框架、分布式组件、HTTP 服务器、任务调度框架、配置中心、数据库层的分库分表工具和数据迁移工具等等。</p><p>关于中间件比较详细的介绍可以参考阿里巴巴淘系技术的一篇回答： https://www.zhihu.com/question/19730582/answer/1663627873 。</p><p>随着分布式和微服务系统的发展，消息队列在系统设计中有了更大的发挥空间，使用消息队列可以降低系统耦合性、实现任务异步、有效地进行流量削峰，是分布式和微服务系统中重要的组件之一。</p><h2 id="消息队列有什么用" tabindex="-1"><a class="header-anchor" href="#消息队列有什么用" aria-hidden="true">#</a> 消息队列有什么用？</h2><p>通常来说，使用消息队列能为我们的系统带来下面三点好处：</p><ol><li><strong>通过异步处理提高系统性能（减少响应所需时间）</strong></li><li><strong>削峰/限流</strong></li><li><strong>降低系统耦合性。</strong></li></ol><p>如果在面试的时候你被面试官问到这个问题的话，一般情况是你在你的简历上涉及到消息队列这方面的内容，这个时候推荐你结合你自己的项目来回答。</p><h3 id="通过异步处理提高系统性能-减少响应所需时间" tabindex="-1"><a class="header-anchor" href="#通过异步处理提高系统性能-减少响应所需时间" aria-hidden="true">#</a> 通过异步处理提高系统性能（减少响应所需时间）</h3><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/Asynchronous-message-queue.png" alt="通过异步处理提高系统性能"></p><p>将用户的请求数据存储到消息队列之后就立即返回结果。随后，系统再对消息进行消费。</p><p>因为用户请求数据写入消息队列之后就立即返回给用户了，但是请求数据在后续的业务校验、写数据库等操作中可能失败。因此，<strong>使用消息队列进行异步处理之后，需要适当修改业务流程进行配合</strong>，比如用户在提交订单之后，订单数据写入消息队列，不能立即返回用户订单提交成功，需要在消息队列的订单消费者进程真正处理完该订单之后，甚至出库后，再通过电子邮件或短信通知用户订单成功，以免交易纠纷。这就类似我们平时手机订火车票和电影票。</p><h3 id="削峰-限流" tabindex="-1"><a class="header-anchor" href="#削峰-限流" aria-hidden="true">#</a> 削峰/限流</h3><p><strong>先将短时间高并发产生的事务消息存储在消息队列中，然后后端服务再慢慢根据自己的能力去消费这些消息，这样就避免直接把后端服务打垮掉。</strong></p><p>举例：在电子商务一些秒杀、促销活动中，合理使用消息队列可以有效抵御促销活动刚开始大量订单涌入对系统的冲击。如下图所示：</p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/削峰-消息队列.png" alt="削峰"></p><h3 id="降低系统耦合性" tabindex="-1"><a class="header-anchor" href="#降低系统耦合性" aria-hidden="true">#</a> 降低系统耦合性</h3><p>使用消息队列还可以降低系统耦合性。我们知道如果模块之间不存在直接调用，那么新增模块或者修改模块就对其他模块影响较小，这样系统的可扩展性无疑更好一些。还是直接上图吧：</p><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/消息队列-解耦.png" alt="解耦"></p><p>生产者（客户端）发送消息到消息队列中去，接受者（服务端）处理消息，需要消费的系统直接去消息队列取消息进行消费即可而不需要和其他系统有耦合，这显然也提高了系统的扩展性。</p><p><strong>消息队列使用发布-订阅模式工作，消息发送者（生产者）发布消息，一个或多个消息接受者（消费者）订阅消息。</strong> 从上图可以看到<strong>消息发送者（生产者）和消息接受者（消费者）之间没有直接耦合</strong>，消息发送者将消息发送至分布式消息队列即结束对消息的处理，消息接受者从分布式消息队列获取该消息后进行后续处理，并不需要知道该消息从何而来。<strong>对新增业务，只要对该类消息感兴趣，即可订阅该消息，对原有系统和业务没有任何影响，从而实现网站业务的可扩展性设计</strong>。</p><p>消息接受者对消息进行过滤、处理、包装后，构造成一个新的消息类型，将消息继续发送出去，等待其他消息接受者订阅该消息。因此基于事件（消息对象）驱动的业务架构可以是一系列流程。</p><p>另外，为了避免消息队列服务器宕机造成消息丢失，会将成功发送到消息队列的消息存储在消息生产者服务器上，等消息真正被消费者服务器处理后才删除消息。在消息队列服务器宕机后，生产者服务器会选择分布式消息队列服务器集群中的其他服务器发布消息。</p><p><strong>备注：</strong> 不要认为消息队列只能利用发布-订阅模式工作，只不过在解耦这个特定业务环境下是使用发布-订阅模式的。除了发布-订阅模式，还有点对点订阅模式（一个消息只有一个消费者），我们比较常用的是发布-订阅模式。另外，这两种消息模型是 JMS 提供的，AMQP 协议还提供了另外 5 种消息模型。</p><h3 id="实现分布式事务" tabindex="-1"><a class="header-anchor" href="#实现分布式事务" aria-hidden="true">#</a> 实现分布式事务</h3><p>我们知道分布式事务的解决方案之一就是 MQ 事务。</p><p>RocketMQ 、 Kafka、Pulsar 、QMQ 都提供了事务相关的功能。事务允许事件流应用将消费，处理，生产消息整个过程定义为一个原子操作。</p>',37),g={href:"https://javaguide.cn/distributed-system/distributed-transaction.html",target:"_blank",rel:"noopener noreferrer"},u=t('<p><img src="https://img-blog.csdnimg.cn/img_convert/07b338324a7d8894b8aef4b659b76d92.png" alt="分布式事务详解 - MQ事务"></p><h2 id="使用消息队列会带来哪些问题" tabindex="-1"><a class="header-anchor" href="#使用消息队列会带来哪些问题" aria-hidden="true">#</a> 使用消息队列会带来哪些问题？</h2><ul><li><strong>系统可用性降低：</strong> 系统可用性在某种程度上降低，为什么这样说呢？在加入 MQ 之前，你不用考虑消息丢失或者说 MQ 挂掉等等的情况，但是，引入 MQ 之后你就需要去考虑了！</li><li><strong>系统复杂性提高：</strong> 加入 MQ 之后，你需要保证消息没有被重复消费、处理消息丢失的情况、保证消息传递的顺序性等等问题！</li><li><strong>一致性问题：</strong> 我上面讲了消息队列可以实现异步，消息队列带来的异步确实可以提高系统响应速度。但是，万一消息的真正消费者并没有正确消费消息怎么办？这样就会导致数据不一致的情况了!</li></ul><h2 id="jms-和-amqp" tabindex="-1"><a class="header-anchor" href="#jms-和-amqp" aria-hidden="true">#</a> JMS 和 AMQP</h2><h3 id="jms-是什么" tabindex="-1"><a class="header-anchor" href="#jms-是什么" aria-hidden="true">#</a> JMS 是什么？</h3><p>JMS（JAVA Message Service,java 消息服务）是 Java 的消息服务，JMS 的客户端之间可以通过 JMS 服务进行异步的消息传输。<strong>JMS（JAVA Message Service，Java 消息服务）API 是一个消息服务的标准或者说是规范</strong>，允许应用程序组件基于 JavaEE 平台创建、发送、接收和读取消息。它使分布式通信耦合度更低，消息服务更加可靠以及异步性。</p><p>JMS 定义了五种不同的消息正文格式以及调用的消息类型，允许你发送并接收以一些不同形式的数据：</p><ul><li><code>StreamMessage：Java</code> 原始值的数据流</li><li><code>MapMessage</code>：一套名称-值对</li><li><code>TextMessage</code>：一个字符串对象</li><li><code>ObjectMessage</code>：一个序列化的 Java 对象</li><li><code>BytesMessage</code>：一个字节的数据流</li></ul><p><strong>ActiveMQ（已被淘汰） 就是基于 JMS 规范实现的。</strong></p><h3 id="jms-两种消息模型" tabindex="-1"><a class="header-anchor" href="#jms-两种消息模型" aria-hidden="true">#</a> JMS 两种消息模型</h3><h4 id="点到点-p2p-模型" tabindex="-1"><a class="header-anchor" href="#点到点-p2p-模型" aria-hidden="true">#</a> 点到点（P2P）模型</h4><p><img src="'+p+'" alt="队列模型"></p><p>使用<strong>队列（Queue）<strong>作为消息通信载体；满足</strong>生产者与消费者模式</strong>，一条消息只能被一个消费者使用，未被消费的消息在队列中保留直到被消费或超时。比如：我们生产者发送 100 条消息的话，两个消费者来消费一般情况下两个消费者会按照消息发送的顺序各自消费一半（也就是你一个我一个的消费。）</p><h4 id="发布-订阅-pub-sub-模型" tabindex="-1"><a class="header-anchor" href="#发布-订阅-pub-sub-模型" aria-hidden="true">#</a> 发布/订阅（Pub/Sub）模型</h4><p><img src="'+s+'" alt="发布/订阅（Pub/Sub）模型"></p><p>发布订阅模型（Pub/Sub） 使用<strong>主题（Topic）<strong>作为消息通信载体，类似于</strong>广播模式</strong>；发布者发布一条消息，该消息通过主题传递给所有的订阅者，<strong>在一条消息广播之后才订阅的用户则是收不到该条消息的</strong>。</p><h3 id="amqp-是什么" tabindex="-1"><a class="header-anchor" href="#amqp-是什么" aria-hidden="true">#</a> AMQP 是什么？</h3><p>AMQP，即 Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准 <strong>高级消息队列协议</strong>（二进制应用层协议），是应用层协议的一个开放标准，为面向消息的中间件设计，兼容 JMS。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件同产品，不同的开发语言等条件的限制。</p><p><strong>RabbitMQ 就是基于 AMQP 协议实现的。</strong></p><h3 id="jms-vs-amqp" tabindex="-1"><a class="header-anchor" href="#jms-vs-amqp" aria-hidden="true">#</a> JMS vs AMQP</h3><table><thead><tr><th style="text-align:center;">对比方向</th><th style="text-align:left;">JMS</th><th style="text-align:left;">AMQP</th></tr></thead><tbody><tr><td style="text-align:center;">定义</td><td style="text-align:left;">Java API</td><td style="text-align:left;">协议</td></tr><tr><td style="text-align:center;">跨语言</td><td style="text-align:left;">否</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:center;">跨平台</td><td style="text-align:left;">否</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:center;">支持消息类型</td><td style="text-align:left;">提供两种消息模型：①Peer-2-Peer;②Pub/sub</td><td style="text-align:left;">提供了五种消息模型：①direct exchange；②fanout exchange；③topic change；④headers exchange；⑤system exchange。本质来讲，后四种和 JMS 的 pub/sub 模型没有太大差别，仅是在路由机制上做了更详细的划分；</td></tr><tr><td style="text-align:center;">支持消息类型</td><td style="text-align:left;">支持多种消息类型 ，我们在上面提到过</td><td style="text-align:left;">byte[]（二进制）</td></tr></tbody></table><p><strong>总结：</strong></p><ul><li>AMQP 为消息定义了线路层（wire-level protocol）的协议，而 JMS 所定义的是 API 规范。在 Java 体系中，多个 client 均可以通过 JMS 进行交互，不需要应用修改代码，但是其对跨平台的支持较差。而 AMQP 天然具有跨平台、跨语言特性。</li><li>JMS 支持 <code>TextMessage</code>、<code>MapMessage</code> 等复杂的消息类型；而 AMQP 仅支持 <code>byte[]</code> 消息类型（复杂的类型可序列化后发送）。</li><li>由于 Exchange 提供的路由算法，AMQP 可以提供多样化的路由方式来传递消息到消息队列，而 JMS 仅支持 队列 和 主题/订阅 方式两种。</li></ul><h2 id="rpc-和消息队列的区别" tabindex="-1"><a class="header-anchor" href="#rpc-和消息队列的区别" aria-hidden="true">#</a> RPC 和消息队列的区别</h2><p>RPC 和消息队列都是分布式微服务系统中重要的组件之一，下面我们来简单对比一下两者：</p><ul><li><strong>从用途来看</strong> ：RPC 主要用来解决两个服务的远程通信问题，不需要了解底层网络的通信机制。通过 RPC 可以帮助我们调用远程计算机上某个服务的方法，这个过程就像调用本地方法一样简单。消息队列主要用来降低系统耦合性、实现任务异步、有效地进行流量削峰。</li><li><strong>从通信方式来看</strong> ：RPC 是双向直接网络通讯，消息队列是单向引入中间载体的网络通讯。</li><li><strong>从架构上来看</strong> ：消息队列需要把消息存储起来，RPC 则没有这个要求，因为前面也说了 RPC 是双向直接网络通讯。</li><li><strong>从请求处理的时效性来看</strong> ：通过 RPC 发出的调用一般会立即被处理，存放在消息队列中的消息并不一定会立即被处理。</li></ul><p>RPC 和消息队列本质上是网络通讯的两种不同的实现机制，两者的用途不同，万不可将两者混为一谈。</p><h2 id="消息队列技术选型" tabindex="-1"><a class="header-anchor" href="#消息队列技术选型" aria-hidden="true">#</a> 消息队列技术选型</h2><h3 id="常见的消息队列有哪些" tabindex="-1"><a class="header-anchor" href="#常见的消息队列有哪些" aria-hidden="true">#</a> 常见的消息队列有哪些？</h3><h4 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/high-performance/message-queue/kafka-logo.png" alt=""></p><p>Kafka 是 LinkedIn 开源的一个分布式流式处理平台，已经成为 Apache 顶级项目，早期被用来用于处理海量的日志，后面才慢慢发展成了一款功能全面的高性能消息队列。</p><p>流式处理平台具有三个关键功能：</p><ol><li><strong>消息队列</strong>：发布和订阅消息流，这个功能类似于消息队列，这也是 Kafka 也被归类为消息队列的原因。</li><li><strong>容错的持久方式存储记录消息流</strong>： Kafka 会把消息持久化到磁盘，有效避免了消息丢失的风险。</li><li><strong>流式处理平台：</strong> 在消息发布的时候进行处理，Kafka 提供了一个完整的流式处理类库。</li></ol><p>Kafka 是一个分布式系统，由通过高性能 TCP 网络协议进行通信的服务器和客户端组成，可以部署在在本地和云环境中的裸机硬件、虚拟机和容器上。</p><p>在 Kafka 2.8 之前，Kafka 最被大家诟病的就是其重度依赖于 Zookeeper 做元数据管理和集群的高可用。在 Kafka 2.8 之后，引入了基于 Raft 协议的 KRaft 模式，不再依赖 Zookeeper，大大简化了 Kafka 的架构，让你可以以一种轻量级的方式来使用 Kafka。</p><p>不过，要提示一下：<strong>如果要使用 KRaft 模式的话，建议选择较高版本的 Kafka，因为这个功能还在持续完善优化中。Kafka 3.3.1 版本是第一个将 KRaft（Kafka Raft）共识协议标记为生产就绪的版本。</strong></p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/high-performance/message-queue/kafka3.3.1-kraft- production-ready.png" alt=""></p><p>Kafka 官网：http://kafka.apache.org/</p><p>Kafka 更新记录（可以直观看到项目是否还在维护）：https://kafka.apache.org/downloads</p><h4 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/high-performance/message-queue/rocketmq-logo.png" alt=""></p><p>RocketMQ 是阿里开源的一款云原生“消息、事件、流”实时数据处理平台，借鉴了 Kafka，已经成为 Apache 顶级项目。</p><p>RocketMQ 的核心特性（摘自 RocketMQ 官网）：</p><ul><li>云原生：生与云，长与云，无限弹性扩缩，K8s 友好</li><li>高吞吐：万亿级吞吐保证，同时满足微服务与大数据场景。</li><li>流处理：提供轻量、高扩展、高性能和丰富功能的流计算引擎。</li><li>金融级：金融级的稳定性，广泛用于交易核心链路。</li><li>架构极简：零外部依赖，Shared-nothing 架构。</li><li>生态友好：无缝对接微服务、实时计算、数据湖等周边生态。</li></ul><p>根据官网介绍：</p><blockquote><p>Apache RocketMQ 自诞生以来，因其架构简单、业务功能丰富、具备极强可扩展性等特点被众多企业开发者以及云厂商广泛采用。历经十余年的大规模场景打磨，RocketMQ 已经成为业内共识的金融级可靠业务消息首选方案，被广泛应用于互联网、大数据、移动互联网、物联网等领域的业务场景。</p></blockquote><p>RocketMQ 官网：https://rocketmq.apache.org/ （文档很详细，推荐阅读）</p><p>RocketMQ 更新记录（可以直观看到项目是否还在维护）：https://github.com/apache/rocketmq/releases</p><h4 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/high-performance/message-queue/rabbitmq-logo.png" alt=""></p><p>RabbitMQ 是采用 Erlang 语言实现 AMQP(Advanced Message Queuing Protocol，高级消息队列协议）的消息中间件，它最初起源于金融系统，用于在分布式系统中存储转发消息。</p><p>RabbitMQ 发展到今天，被越来越多的人认可，这和它在易用性、扩展性、可靠性和高可用性等方面的卓著表现是分不开的。RabbitMQ 的具体特点可以概括为以下几点：</p><ul><li><strong>可靠性：</strong> RabbitMQ 使用一些机制来保证消息的可靠性，如持久化、传输确认及发布确认等。</li><li><strong>灵活的路由：</strong> 在消息进入队列之前，通过交换器来路由消息。对于典型的路由功能，RabbitMQ 己经提供了一些内置的交换器来实现。针对更复杂的路由功能，可以将多个交换器绑定在一起，也可以通过插件机制来实现自己的交换器。这个后面会在我们讲 RabbitMQ 核心概念的时候详细介绍到。</li><li><strong>扩展性：</strong> 多个 RabbitMQ 节点可以组成一个集群，也可以根据实际业务情况动态地扩展集群中节点。</li><li><strong>高可用性：</strong> 队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队列仍然可用。</li><li><strong>支持多种协议：</strong> RabbitMQ 除了原生支持 AMQP 协议，还支持 STOMP、MQTT 等多种消息中间件协议。</li><li><strong>多语言客户端：</strong> RabbitMQ 几乎支持所有常用语言，比如 Java、Python、Ruby、PHP、C#、JavaScript 等。</li><li><strong>易用的管理界面：</strong> RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息、集群中的节点等。在安装 RabbitMQ 的时候会介绍到，安装好 RabbitMQ 就自带管理界面。</li><li><strong>插件机制：</strong> RabbitMQ 提供了许多插件，以实现从多方面进行扩展，当然也可以编写自己的插件。感觉这个有点类似 Dubbo 的 SPI 机制</li></ul><p>RabbitMQ 官网：https://www.rabbitmq.com/ 。</p><p>RabbitMQ 更新记录（可以直观看到项目是否还在维护）：https://www.rabbitmq.com/news.html</p><h4 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h4><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/high-performance/message-queue/pulsar-logo.png" alt=""></p><p>Pulsar 是下一代云原生分布式消息流平台，最初由 Yahoo 开发 ，已经成为 Apache 顶级项目。</p><p>Pulsar 集消息、存储、轻量化函数式计算为一体，采用计算与存储分离架构设计，支持多租户、持久化存储、多机房跨区域数据复制，具有强一致性、高吞吐、低延时及高可扩展性等流数据存储特性，被看作是云原生时代实时消息流传输、存储和计算最佳解决方案。</p><p>Pulsar 的关键特性如下（摘自官网）：</p><ul><li>是下一代云原生分布式消息流平台。</li><li>Pulsar 的单个实例原生支持多个集群，可跨机房在集群间无缝地完成消息复制。</li><li>极低的发布延迟和端到端延迟。</li><li>可无缝扩展到超过一百万个 topic。</li><li>简单的客户端 API，支持 Java、Go、Python 和 C++。</li><li>主题的多种订阅模式（独占、共享和故障转移）。</li><li>通过 Apache BookKeeper 提供的持久化消息存储机制保证消息传递 。</li><li>由轻量级的 serverless 计算框架 Pulsar Functions 实现流原生的数据处理。</li><li>基于 Pulsar Functions 的 serverless connector 框架 Pulsar IO 使得数据更易移入、移出 Apache Pulsar。</li><li>分层式存储可在数据陈旧时，将数据从热存储卸载到冷/长期存储（如 S3、GCS）中。</li></ul><p>Pulsar 官网：https://pulsar.apache.org/</p><p>Pulsar 更新记录（可以直观看到项目是否还在维护）：https://github.com/apache/pulsar/releases</p><h4 id="activemq" tabindex="-1"><a class="header-anchor" href="#activemq" aria-hidden="true">#</a> ActiveMQ</h4><p>目前已经被淘汰，不推荐使用，不建议学习。</p><h3 id="如何选择" tabindex="-1"><a class="header-anchor" href="#如何选择" aria-hidden="true">#</a> 如何选择？</h3><blockquote><p>参考《Java 工程师面试突击第 1 季-中华石杉老师》</p></blockquote><table><thead><tr><th>对比方向</th><th>概要</th></tr></thead><tbody><tr><td>吞吐量</td><td>万级的 ActiveMQ 和 RabbitMQ 的吞吐量（ActiveMQ 的性能最差）要比十万级甚至是百万级的 RocketMQ 和 Kafka 低一个数量级。</td></tr><tr><td>可用性</td><td>都可以实现高可用。ActiveMQ 和 RabbitMQ 都是基于主从架构实现高可用性。RocketMQ 基于分布式架构。 Kafka 也是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用</td></tr><tr><td>时效性</td><td>RabbitMQ 基于 Erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级，其他几个都是 ms 级。</td></tr><tr><td>功能支持</td><td>Pulsar 的功能更全面，支持多租户、多种消费模式和持久性模式等功能，是下一代云原生分布式消息流平台。</td></tr><tr><td>消息丢失</td><td>ActiveMQ 和 RabbitMQ 丢失的可能性非常低， Kafka、RocketMQ 和 Pulsar 理论上可以做到 0 丢失。</td></tr></tbody></table><p><strong>总结：</strong></p><ul><li>ActiveMQ 的社区算是比较成熟，但是较目前来说，ActiveMQ 的性能比较差，而且版本迭代很慢，不推荐使用，已经被淘汰了。</li><li>RabbitMQ 在吞吐量方面虽然稍逊于 Kafka 、RocketMQ 和 Pulsar，但是由于它基于 Erlang 开发，所以并发能力很强，性能极其好，延时很低，达到微秒级。但是也因为 RabbitMQ 基于 Erlang 开发，所以国内很少有公司有实力做 Erlang 源码级别的研究和定制。如果业务场景对并发量要求不是太高（十万级、百万级），那这几种消息队列中，RabbitMQ 或许是你的首选。</li><li>RocketMQ 和 Pulsar 支持强一致性，对消息一致性要求比较高的场景可以使用。</li><li>RocketMQ 阿里出品，Java 系开源项目，源代码我们可以直接阅读，然后可以定制自己公司的 MQ，并且 RocketMQ 有阿里巴巴的实际业务场景的实战考验。</li><li>Kafka 的特点其实很明显，就是仅仅提供较少的核心功能，但是提供超高的吞吐量，ms 级的延迟，极高的可用性以及可靠性，而且分布式可以任意扩展。同时 Kafka 最好是支撑较少的 topic 数量即可，保证其超高吞吐量。Kafka 唯一的一点劣势是有可能消息重复消费，那么对数据准确性会造成极其轻微的影响，在大数据领域中以及日志采集中，这点轻微影响可以忽略这个特性天然适合大数据实时计算以及日志收集。如果是大数据领域的实时计算、日志采集等场景，用 Kafka 是业内标准的，绝对没问题，社区活跃度很高，绝对不会黄，何况几乎是全世界这个领域的事实性规范。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>《大型网站技术架构 》</li><li>KRaft: Apache Kafka Without ZooKeeper：https://developer.confluent.io/learn/kraft/</li><li>消息队列的使用场景是什么样的？：https://mp.weixin.qq.com/s/4V1jI6RylJr7Jr9JsQe73A</li></ul>',73);function b(M,m){const r=h("ExternalLinkIcon");return l(),n("div",null,[c,a("p",null,[e("详细介绍可以查看 "),a("a",g,[e("分布式事务详解(付费)"),o(r)]),e(" 这篇文章。")]),u])}const k=i(d,[["render",b],["__file","message-queue.html.vue"]]);export{k as default};
