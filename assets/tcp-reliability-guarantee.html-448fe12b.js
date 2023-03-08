import{_ as r,X as s,Y as l,Z as t,a1 as n,$ as e,a2 as i,C as a}from"./framework-f0219f66.js";const c={},p=t("h2",{id:"tcp-如何保证传输的可靠性",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tcp-如何保证传输的可靠性","aria-hidden":"true"},"#"),n(" TCP 如何保证传输的可靠性？")],-1),g=t("li",null,[t("strong",null,"基于数据块传输"),n(" ：应用数据被分割成 TCP 认为最适合发送的数据块，再传输给网络层，数据块被称为报文段或段。")],-1),d=t("li",null,[t("strong",null,"对失序数据包重新排序以及去重"),n("：TCP 为了保证不发生丢包，就给每个包一个序列号，有了序列号能够将接收到的数据根据序列号排序，并且去掉重复序列号的数据就可以实现数据包去重。")],-1),h=t("li",null,[t("strong",null,"校验和"),n(" : TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。")],-1),u=t("strong",null,"超时重传",-1),_={href:"https://zh.wikipedia.org/wiki/%E4%B8%A2%E5%8C%85",target:"_blank",rel:"noopener noreferrer"},C=t("li",null,[t("strong",null,"流量控制"),n(" : TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议（TCP 利用滑动窗口实现流量控制）。")],-1),T=t("li",null,[t("strong",null,"拥塞控制"),n(" : 当网络拥塞时，减少数据的发送。")],-1),w=i('<h2 id="tcp-如何实现流量控制" tabindex="-1"><a class="header-anchor" href="#tcp-如何实现流量控制" aria-hidden="true">#</a> TCP 如何实现流量控制？</h2><p><strong>TCP 利用滑动窗口实现流量控制。流量控制是为了控制发送方发送速率，保证接收方来得及接收。</strong> 接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。</p><p><strong>为什么需要流量控制?</strong> 这是因为双方在通信的时候，发送方的速率与接收方的速率是不一定相等，如果发送方的发送速率太快，会导致接收方处理不过来。如果接收方处理不过来的话，就只能把处理不过来的数据存在 <strong>接收缓冲区(Receiving Buffers)</strong> 里（失序的数据包也会被存放在缓存区里）。如果缓存区满了发送方还在狂发数据的话，接收方只能把收到的数据包丢掉。出现丢包问题的同时又疯狂浪费着珍贵的网络资源。因此，我们需要控制发送方的发送速率，让接收方与发送方处于一种动态平衡才好。</p><p>这里需要注意的是（常见误区）：</p><ul><li>发送端不等同于客户端</li><li>接收端不等同于服务端</li></ul><p>TCP 为全双工(Full-Duplex, FDX)通信，双方可以进行双向通信，客户端和服务端既可能是发送端又可能是服务端。因此，两端各有一个发送缓冲区与接收缓冲区，两端都各自维护一个发送窗口和一个接收窗口。接收窗口大小取决于应用、系统、硬件的限制（TCP传输速率不能大于应用的数据处理速率）。通信双方的发送窗口和接收窗口的要求相同</p><p><strong>TCP 发送窗口可以划分成四个部分</strong> ：</p><ol><li>已经发送并且确认的TCP段（已经发送并确认）；</li><li>已经发送但是没有确认的TCP段（已经发送未确认）；</li><li>未发送但是接收方准备接收的TCP段（可以发送）；</li><li>未发送并且接收方也并未准备接受的TCP段（不可发送）。</li></ol><p><strong>TCP发送窗口结构图示</strong> ：</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/cs-basics/network/tcp-send-window.png" alt="TCP发送窗口结构"></p><ul><li><strong>SND.WND</strong> ：发送窗口。</li><li><strong>SND.UNA</strong>：Send Unacknowledged 指针，指向发送窗口的第一个字节。</li><li><strong>SND.NXT</strong>：Send Next 指针，指向可用窗口的第一个字节。</li></ul><p><strong>可用窗口大小</strong> = <code>SND.UNA + SND.WND - SND.NXT</code> 。</p><p><strong>TCP 接收窗口可以划分成三个部分</strong> ：</p><ol><li>已经接收并且已经确认的 TCP 段（已经接收并确认）；</li><li>等待接收且允许发送方发送 TCP 段（可以接收未确认）；</li><li>不可接收且不允许发送方发送TCP段（不可接收）。</li></ol><p><strong>TCP 接收窗口结构图示</strong> ：</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/cs-basics/network/tcp-receive-window.png" alt="TCP接收窗口结构"></p><p><strong>接收窗口的大小是根据接收端处理数据的速度动态调整的。</strong> 如果接收端读取数据快，接收窗口可能会扩大。 否则，它可能会缩小。</p><p>另外，这里的滑动窗口大小只是为了演示使用，实际窗口大小通常会远远大于这个值。</p><h2 id="tcp-的拥塞控制是怎么实现的" tabindex="-1"><a class="header-anchor" href="#tcp-的拥塞控制是怎么实现的" aria-hidden="true">#</a> TCP 的拥塞控制是怎么实现的？</h2><p>在某段时间，若对网络中某一资源的需求超过了该资源所能提供的可用部分，网络的性能就要变坏。这种情况就叫拥塞。拥塞控制就是为了防止过多的数据注入到网络中，这样就可以使网络中的路由器或链路不致过载。拥塞控制所要做的都有一个前提，就是网络能够承受现有的网络负荷。拥塞控制是一个全局性的过程，涉及到所有的主机，所有的路由器，以及与降低网络传输性能有关的所有因素。相反，流量控制往往是点对点通信量的控制，是个端到端的问题。流量控制所要做到的就是抑制发送端发送数据的速率，以便使接收端来得及接收。</p><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/cs-basics/network/tcp-congestion-control.png" alt="TCP的拥塞控制"></p><p>为了进行拥塞控制，TCP 发送方要维持一个 <strong>拥塞窗口(cwnd)</strong> 的状态变量。拥塞控制窗口的大小取决于网络的拥塞程度，并且动态变化。发送方让自己的发送窗口取为拥塞窗口和接收方的接受窗口中较小的一个。</p><p>TCP 的拥塞控制采用了四种算法，即 <strong>慢开始</strong> 、 <strong>拥塞避免</strong> 、<strong>快重传</strong> 和 <strong>快恢复</strong>。在网络层也可以使路由器采用适当的分组丢弃策略（如主动队列管理 AQM），以减少网络拥塞的发生。</p><ul><li><strong>慢开始：</strong> 慢开始算法的思路是当主机开始发送数据时，如果立即把大量数据字节注入到网络，那么可能会引起网络阻塞，因为现在还不知道网络的符合情况。经验表明，较好的方法是先探测一下，即由小到大逐渐增大发送窗口，也就是由小到大逐渐增大拥塞窗口数值。cwnd 初始值为 1，每经过一个传播轮次，cwnd 加倍。</li><li><strong>拥塞避免：</strong> 拥塞避免算法的思路是让拥塞窗口 cwnd 缓慢增大，即每经过一个往返时间 RTT 就把发送方的 cwnd 加 1.</li><li><strong>快重传与快恢复：</strong> 在 TCP/IP 中，快速重传和恢复（fast retransmit and recovery，FRR）是一种拥塞控制算法，它能快速恢复丢失的数据包。没有 FRR，如果数据包丢失了，TCP 将会使用定时器来要求传输暂停。在暂停的这段时间内，没有新的或复制的数据包被发送。有了 FRR，如果接收机接收到一个不按顺序的数据段，它会立即给发送机发送一个重复确认。如果发送机接收到三个重复确认，它会假定确认件指出的数据段丢失了，并立即重传这些丢失的数据段。有了 FRR，就不会因为重传时要求的暂停被耽误。 　当有单独的数据包丢失时，快速重传和恢复（FRR）能最有效地工作。当有多个数据信息包在某一段很短的时间内丢失时，它则不能很有效地工作。</li></ul><h2 id="arq-协议了解吗" tabindex="-1"><a class="header-anchor" href="#arq-协议了解吗" aria-hidden="true">#</a> ARQ 协议了解吗?</h2><p><strong>自动重传请求</strong>（Automatic Repeat-reQuest，ARQ）是 OSI 模型中数据链路层和传输层的错误纠正协议之一。它通过使用确认和超时这两个机制，在不可靠服务的基础上实现可靠的信息传输。如果发送方在发送后一段时间之内没有收到确认信息（Acknowledgements，就是我们常说的 ACK），它通常会重新发送，直到收到确认或者重试超过一定的次数。</p><p>ARQ 包括停止等待 ARQ 协议和连续 ARQ 协议。</p><h3 id="停止等待-arq-协议" tabindex="-1"><a class="header-anchor" href="#停止等待-arq-协议" aria-hidden="true">#</a> 停止等待 ARQ 协议</h3><p>停止等待协议是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认（回复 ACK）。如果过了一段时间（超时时间后），还是没有收到 ACK 确认，说明没有发送成功，需要重新发送，直到收到确认后再发下一个分组；</p><p>在停止等待协议中，若接收方收到重复分组，就丢弃该分组，但同时还要发送确认。</p><p><strong>1) 无差错情况:</strong></p><p>发送方发送分组,接收方在规定时间内收到,并且回复确认.发送方再次发送。</p><p><strong>2) 出现差错情况（超时重传）:</strong></p><p>停止等待协议中超时重传是指只要超过一段时间仍然没有收到确认，就重传前面发送过的分组（认为刚才发送过的分组丢失了）。因此每发送完一个分组需要设置一个超时计时器，其重传时间应比数据在分组传输的平均往返时间更长一些。这种自动重传方式常称为 <strong>自动重传请求 ARQ</strong> 。另外在停止等待协议中若收到重复分组，就丢弃该分组，但同时还要发送确认。</p><p><strong>3) 确认丢失和确认迟到</strong></p><ul><li><strong>确认丢失</strong> ：确认消息在传输过程丢失。当 A 发送 M1 消息，B 收到后，B 向 A 发送了一个 M1 确认消息，但却在传输过程中丢失。而 A 并不知道，在超时计时过后，A 重传 M1 消息，B 再次收到该消息后采取以下两点措施：1. 丢弃这个重复的 M1 消息，不向上层交付。 2. 向 A 发送确认消息。（不会认为已经发送过了，就不再发送。A 能重传，就证明 B 的确认消息丢失）。</li><li><strong>确认迟到</strong> ：确认消息在传输过程中迟到。A 发送 M1 消息，B 收到并发送确认。在超时时间内没有收到确认消息，A 重传 M1 消息，B 仍然收到并继续发送确认消息（B 收到了 2 份 M1）。此时 A 收到了 B 第二次发送的确认消息。接着发送其他数据。过了一会，A 收到了 B 第一次发送的对 M1 的确认消息（A 也收到了 2 份确认消息）。处理如下：1. A 收到重复的确认后，直接丢弃。2. B 收到重复的 M1 后，也直接丢弃重复的 M1。</li></ul><h3 id="连续-arq-协议" tabindex="-1"><a class="header-anchor" href="#连续-arq-协议" aria-hidden="true">#</a> 连续 ARQ 协议</h3><p>连续 ARQ 协议可提高信道利用率。发送方维持一个发送窗口，凡位于发送窗口内的分组可以连续发送出去，而不需要等待对方确认。接收方一般采用累计确认，对按序到达的最后一个分组发送确认，表明到这个分组为止的所有分组都已经正确收到了。</p><p><strong>优点：</strong> 信道利用率高，容易实现，即使确认丢失，也不必重传。</p><p><strong>缺点：</strong> 不能向发送方反映出接收方已经正确收到的所有分组的信息。 比如：发送方发送了 5 条 消息，中间第三条丢失（3 号），这时接收方只能对前两个发送确认。发送方无法知道后三个分组的下落，而只好把后三个全部重传一次。这也叫 Go-Back-N（回退 N），表示需要退回来重传已经发送过的 N 个消息。</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',41),P=t("li",null,"《计算机网络（第 7 版）》",-1),m=t("li",null,"《图解 HTTP》",-1),f={href:"https://www.9tut.com/tcp-and-udp-tutorial",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.brianstorti.com/tcp-flow-control/",target:"_blank",rel:"noopener noreferrer"},R=t("li",null,"TCP 流量控制(Flow Control)：https://notfalse.net/24/tcp-flow-control",-1),N=t("li",null,"TCP之滑动窗口原理 : https://cloud.tencent.com/developer/article/1857363",-1);function k(B,x){const o=a("ExternalLinkIcon");return s(),l("div",null,[p,t("ol",null,[g,d,h,t("li",null,[u,n(" : 当发送方发送数据之后，它启动一个定时器，等待目的端确认收到这个报文段。接收端实体对已成功收到的包发回一个相应的确认信息（ACK）。如果发送端实体在合理的往返时延（RTT）内未收到确认消息，那么对应的数据包就被假设为"),t("a",_,[n("已丢失"),e(o)]),n("并进行重传。")]),C,T]),w,t("ol",null,[P,m,t("li",null,[t("a",f,[n("https://www.9tut.com/tcp-and-udp-tutorial"),e(o)])]),t("li",null,[t("a",A,[n("https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md"),e(o)])]),t("li",null,[n("TCP Flow Control—"),t("a",b,[n("https://www.brianstorti.com/tcp-flow-control/"),e(o)])]),R,N])])}const M=r(c,[["render",k],["__file","tcp-reliability-guarantee.html.vue"]]);export{M as default};