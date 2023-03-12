import{_ as e,X as i,Y as g,Z as r,a1 as t,$ as n,a2 as s,C as a}from"./framework-f0219f66.js";const l={},p=s("<p>很多读者抱怨计算操作系统的知识点比较繁杂，自己也没有多少耐心去看，但是面试的时候又经常会遇到。所以，我带着我整理好的操作系统的常见问题来啦！这篇文章总结了一些我觉得比较重要的操作系统相关的问题比如<strong>进程管理</strong>、<strong>内存管理</strong>、<strong>虚拟内存</strong>等等。</p><p>文章形式通过大部分同学比较喜欢的面试官和求职者之间的对话形式展开。另外，我也只是在大学的时候学习过操作系统，不过基本都忘了，为了写这篇文章这段时间看了很多相关的书籍和博客。</p><p>这篇文章只是对一些操作系统比较重要概念的一个概览，深入学习的话，建议大家还是老老实实地去看书。另外， 这篇文章的很多内容参考了《现代操作系统》第三版这本书，非常感谢。</p><p>开始本文的内容之前，我们先聊聊为什么要学习操作系统。</p><ul><li><strong>从对个人能力方面提升来说</strong> ：操作系统中的很多思想、很多经典的算法，你都可以在我们日常开发使用的各种工具或者框架中找到它们的影子。比如说我们开发的系统使用的缓存（比如 Redis）和操作系统的高速缓存就很像。CPU 中的高速缓存有很多种，不过大部分都是为了解决 CPU 处理速度和内存处理速度不对等的问题。我们还可以把内存看作外存的高速缓存，程序运行的时候我们把外存的数据复制到内存，由于内存的处理速度远远高于外存，这样提高了处理速度。同样地，我们使用的 Redis 缓存就是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。高速缓存一般会按照局部性原理（2-8 原则）根据相应的淘汰算法保证缓存中的数据是经常会被访问的。我们平常使用的 Redis 缓存很多时候也会按照 2-8 原则去做，很多淘汰算法都和操作系统中的类似。既说了 2-8 原则，那就不得不提命中率了，这是所有缓存概念都通用的。简单来说也就是你要访问的数据有多少能直接在缓存中直接找到。命中率高的话，一般表明你的缓存设计比较合理，系统处理速度也相对较快。</li><li><strong>从面试角度来说</strong> ：尤其是校招，对于操作系统方面知识的考察是非常非常多的。</li></ul><p><strong>简单来说，学习操作系统能够提高自己思考的深度以及对技术的理解力，并且，操作系统方面的知识也是面试必备。</strong></p>",6),h={href:"https://www.zhihu.com/question/270998611/answer/1640198217",target:"_blank",rel:"noopener noreferrer"},d=s('<h2 id="操作系统基础" tabindex="-1"><a class="header-anchor" href="#操作系统基础" aria-hidden="true">#</a> 操作系统基础</h2><p>面试官顶着蓬松的假发向我走来，只见他一手拿着厚重的 Thinkpad ，一手提着他那淡黄的长裙。</p><h3 id="什么是操作系统" tabindex="-1"><a class="header-anchor" href="#什么是操作系统" aria-hidden="true">#</a> 什么是操作系统？</h3><p>👨‍💻<strong>面试官</strong> ： 先来个简单问题吧！<strong>什么是操作系统？</strong></p><p>🙋 <strong>我</strong> ：我通过以下四点向您介绍一下什么是操作系统吧！</p><ol><li><strong>操作系统（Operating System，简称 OS）是管理计算机硬件与软件资源的程序，是计算机的基石。</strong></li><li><strong>操作系统本质上是一个运行在计算机上的软件程序 ，用于管理计算机硬件和软件资源。</strong> 举例：运行在你电脑上的所有应用程序都通过操作系统来调用系统内存以及磁盘等等硬件。</li><li><strong>操作系统存在屏蔽了硬件层的复杂性。</strong> 操作系统就像是硬件使用的负责人，统筹着各种相关事项。</li><li><strong>操作系统的内核（Kernel）是操作系统的核心部分，它负责系统的内存管理，硬件设备的管理，文件系统的管理以及应用程序的管理</strong>。 内核是连接应用程序和硬件的桥梁，决定着系统的性能和稳定性。</li></ol><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303122226113.png" alt="Kernel_Layout"></p><h3 id="系统调用" tabindex="-1"><a class="header-anchor" href="#系统调用" aria-hidden="true">#</a> 系统调用</h3><p>👨‍💻<strong>面试官</strong> ：<strong>什么是系统调用呢？</strong> 能不能详细介绍一下。</p><p>🙋 <strong>我</strong> ：介绍系统调用之前，我们先来了解一下用户态和系统态。</p><p>根据进程访问资源的特点，我们可以把进程在系统上的运行分为两个级别：</p><ol><li>用户态(user mode) : 用户态运行的进程可以直接读取用户程序的数据。</li><li>系统态(kernel mode):可以简单的理解系统态运行的进程或程序几乎可以访问计算机的任何资源，不受限制。</li></ol><p>说了用户态和系统态之后，那么什么是系统调用呢？</p><p>我们运行的程序基本都是运行在用户态，如果我们调用操作系统提供的系统态级别的子功能咋办呢？那就需要系统调用了！</p><p>也就是说在我们运行的用户程序中，凡是与系统态级别的资源有关的操作（如文件管理、进程控制、内存管理等)，都必须通过系统调用方式向操作系统提出服务请求，并由操作系统代为完成。</p><p>这些系统调用按功能大致可分为如下几类：</p><ul><li>设备管理。完成设备的请求或释放，以及设备启动等功能。</li><li>文件管理。完成文件的读、写、创建及删除等功能。</li><li>进程控制。完成进程的创建、撤销、阻塞及唤醒等功能。</li><li>进程通信。完成进程之间的消息传递或信号传递等功能。</li><li>内存管理。完成内存的分配、回收以及获取作业占用内存区大小及地址等功能。</li></ul><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2><h3 id="进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#进程和线程的区别" aria-hidden="true">#</a> 进程和线程的区别</h3><p>👨‍💻<strong>面试官</strong>: 好的！我明白了！那你再说一下： <strong>进程和线程的区别</strong>。</p><p>🙋 <strong>我：</strong> 好的！ 下图是 Java 内存区域，我们从 JVM 的角度来说一下线程和进程之间的关系吧！</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303122227186.png" alt="Java 运行时数据区域（JDK1.8 之后）"></p><p>从上图可以看出：一个进程中可以有多个线程，多个线程共享进程的<strong>堆</strong>和<strong>方法区 (JDK1.8 之后的元空间)<strong>资源，但是每个线程有自己的</strong>程序计数器</strong>、<strong>虚拟机栈</strong> 和 <strong>本地方法栈</strong>。</p><p><strong>总结：</strong> 线程是进程划分成的更小的运行单位,一个进程在其执行的过程中可以产生多个线程。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。线程执行开销小，但不利于资源的管理和保护；而进程正相反。</p><h3 id="进程有哪几种状态" tabindex="-1"><a class="header-anchor" href="#进程有哪几种状态" aria-hidden="true">#</a> 进程有哪几种状态?</h3><p>👨‍💻<strong>面试官</strong> ： 那你再说说<strong>进程有哪几种状态?</strong></p>',26),c=r("strong",null,"我",-1),u={href:"https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/Multithread/JavaConcurrencyBasicsCommonInterviewQuestionsSummary.md#6-%E8%AF%B4%E8%AF%B4%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%92%8C%E7%8A%B6%E6%80%81",target:"_blank",rel:"noopener noreferrer"},_=s('<ul><li><strong>创建状态(new)</strong> ：进程正在被创建，尚未到就绪状态。</li><li><strong>就绪状态(ready)</strong> ：进程已处于准备运行状态，即进程获得了除了处理器之外的一切所需资源，一旦得到处理器资源(处理器分配的时间片)即可运行。</li><li><strong>运行状态(running)</strong> ：进程正在处理器上上运行(单核 CPU 下任意时刻只有一个进程处于运行状态)。</li><li><strong>阻塞状态(waiting)</strong> ：又称为等待状态，进程正在等待某一事件而暂停运行如等待某资源为可用或等待 IO 操作完成。即使处理器空闲，该进程也不能运行。</li><li><strong>结束状态(terminated)</strong> ：进程正在从系统中消失。可能是进程正常结束或其他原因中断退出运行。</li></ul><blockquote><p>订正：下图中 running 状态被 interrupt 向 ready 状态转换的箭头方向反了。</p></blockquote><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303122227185.png" alt="process-state"></p><h3 id="进程间的通信方式" tabindex="-1"><a class="header-anchor" href="#进程间的通信方式" aria-hidden="true">#</a> 进程间的通信方式</h3><p>👨‍💻<strong>面试官</strong> ：<strong>进程间的通信常见的的有哪几种方式呢?</strong></p><p>🙋 <strong>我</strong> ：大概有 7 种常见的进程间的通信方式。</p>',6),b={href:"https://www.jianshu.com/p/c1015f5ffa74",target:"_blank",rel:"noopener noreferrer"},f=s('<ol><li><strong>管道/匿名管道(Pipes)</strong> ：用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。</li><li><strong>有名管道(Named Pipes)</strong> : 匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循<strong>先进先出(first in first out)</strong>。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。</li><li><strong>信号(Signal)</strong> ：信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生；</li><li><strong>消息队列(Message Queuing)</strong> ：消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显式地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。<strong>消息队列克服了信号承载信息量少，管道只能承载无格式字 节流以及缓冲区大小受限等缺点。</strong></li><li><strong>信号量(Semaphores)</strong> ：信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。</li><li><strong>共享内存(Shared memory)</strong> ：使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。</li><li><strong>套接字(Sockets)</strong> : 此方法主要用于在客户端和服务器之间通过网络进行通信。套接字是支持 TCP/IP 的网络通信的基本操作单元，可以看做是不同主机之间的进程进行双向通信的端点，简单的说就是通信的两方的一种约定，用套接字中的相关函数来完成通信过程。</li></ol><h3 id="线程间的同步的方式" tabindex="-1"><a class="header-anchor" href="#线程间的同步的方式" aria-hidden="true">#</a> 线程间的同步的方式</h3><p>👨‍💻<strong>面试官</strong> ：<strong>那线程间的同步的方式有哪些呢?</strong></p><p>🙋 <strong>我</strong> ：线程同步是两个或多个共享关键资源的线程的并发执行。应该同步线程以避免关键的资源使用冲突。操作系统一般有下面三种线程同步的方式：</p><ol><li><strong>互斥量(Mutex)</strong>：采用互斥对象机制，只有拥有互斥对象的线程才有访问公共资源的权限。因为互斥对象只有一个，所以可以保证公共资源不会被多个线程同时访问。比如 Java 中的 synchronized 关键词和各种 Lock 都是这种机制。</li><li><strong>信号量(Semaphore)</strong> ：它允许同一时刻多个线程访问同一资源，但是需要控制同一时刻访问此资源的最大线程数量。</li><li><strong>事件(Event)</strong> :Wait/Notify：通过通知操作的方式来保持多线程同步，还可以方便的实现多线程优先级的比较操作。</li></ol><h3 id="进程的调度算法" tabindex="-1"><a class="header-anchor" href="#进程的调度算法" aria-hidden="true">#</a> 进程的调度算法</h3><p>👨‍💻<strong>面试官</strong> ：<strong>你知道操作系统中进程的调度算法有哪些吗?</strong></p><p>🙋 <strong>我</strong> ：嗯嗯！这个我们大学的时候学过，是一个很重要的知识点！</p><p>为了确定首先执行哪个进程以及最后执行哪个进程以实现最大 CPU 利用率，计算机科学家已经定义了一些算法，它们是：</p><ul><li><strong>先到先服务(FCFS)调度算法</strong> : 从就绪队列中选择一个最先进入该队列的进程为之分配资源，使它立即执行并一直执行到完成或发生某事件而被阻塞放弃占用 CPU 时再重新调度。</li><li><strong>短作业优先(SJF)的调度算法</strong> : 从就绪队列中选出一个估计运行时间最短的进程为之分配资源，使它立即执行并一直执行到完成或发生某事件而被阻塞放弃占用 CPU 时再重新调度。</li><li><strong>时间片轮转调度算法</strong> : 时间片轮转调度是一种最古老，最简单，最公平且使用最广的算法，又称 RR(Round robin)调度。每个进程被分配一个时间段，称作它的时间片，即该进程允许运行的时间。</li><li><strong>多级反馈队列调度算法</strong> ：前面介绍的几种进程调度的算法都有一定的局限性。如<strong>短进程优先的调度算法，仅照顾了短进程而忽略了长进程</strong> 。多级反馈队列调度算法既能使高优先级的作业得到响应又能使短作业（进程）迅速完成。，因而它是目前<strong>被公认的一种较好的进程调度算法</strong>，UNIX 操作系统采取的便是这种调度算法。</li><li><strong>优先级调度</strong> ： 为每个流程分配优先级，首先执行具有最高优先级的进程，依此类推。具有相同优先级的进程以 FCFS 方式执行。可以根据内存要求，时间要求或任何其他资源要求来确定优先级。</li></ul><h3 id="什么是死锁" tabindex="-1"><a class="header-anchor" href="#什么是死锁" aria-hidden="true">#</a> 什么是死锁</h3><p>👨‍💻<strong>面试官</strong> ：<strong>你知道什么是死锁吗?</strong></p><p>🙋 <strong>我</strong> ：死锁描述的是这样一种情况：多个进程/线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于进程/线程被无限期地阻塞，因此程序不可能正常终止。</p><h3 id="死锁的四个必要条件" tabindex="-1"><a class="header-anchor" href="#死锁的四个必要条件" aria-hidden="true">#</a> 死锁的四个必要条件</h3><p>👨‍💻<strong>面试官</strong> ：<strong>产生死锁的四个必要条件是什么?</strong></p><p>🙋 <strong>我</strong> ：</p><ul><li><strong>互斥</strong>：资源必须处于非共享模式，即一次只有一个进程可以使用。如果另一进程申请该资源，那么必须等待直到该资源被释放为止。</li><li><strong>占有并等待</strong>：一个进程至少应该占有一个资源，并等待另一资源，而该资源被其他进程所占有。</li><li><strong>非抢占</strong>：资源不能被抢占。只能在持有资源的进程完成任务后，该资源才会被释放。</li><li><strong>循环等待</strong>：有一组等待进程 <code>{P0, P1,..., Pn}</code>， <code>P0</code> 等待的资源被 <code>P1</code> 占有，<code>P1</code> 等待的资源被 <code>P2</code> 占有，......，<code>Pn-1</code> 等待的资源被 <code>Pn</code> 占有，<code>Pn</code> 等待的资源被 <code>P0</code> 占有。</li></ul><p><strong>注意 ⚠️</strong> ：这四个条件是产生死锁的 <strong>必要条件</strong> ，也就是说只要系统发生死锁，这些条件必然成立，而只要上述条件之一不满足，就不会发生死锁。</p><p>下面是百度百科对必要条件的解释：</p><blockquote><p>如果没有事物情况 A，则必然没有事物情况 B，也就是说如果有事物情况 B 则一定有事物情况 A，那么 A 就是 B 的必要条件。从逻辑学上看，B 能推导出 A，A 就是 B 的必要条件，等价于 B 是 A 的充分条件。</p></blockquote><h3 id="解决死锁的方法" tabindex="-1"><a class="header-anchor" href="#解决死锁的方法" aria-hidden="true">#</a> 解决死锁的方法</h3><p>解决死锁的方法可以从多个角度去分析，一般的情况下，有<strong>预防，避免，检测和解除四种</strong>。</p><ul><li><p><strong>预防</strong> 是采用某种策略，<strong>限制并发进程对资源的请求</strong>，从而使得死锁的必要条件在系统执行的任何时间上都不满足。</p></li><li><p><strong>避免</strong>则是系统在分配资源时，根据资源的使用情况<strong>提前做出预测</strong>，从而<strong>避免死锁的发生</strong></p></li><li><p><strong>检测</strong>是指系统设有<strong>专门的机构</strong>，当死锁发生时，该机构能够检测死锁的发生，并精确地确定与死锁有关的进程和资源。</p></li><li><p><strong>解除</strong> 是与检测相配套的一种措施，用于<strong>将进程从死锁状态下解脱出来</strong>。</p></li></ul><h4 id="死锁的预防" tabindex="-1"><a class="header-anchor" href="#死锁的预防" aria-hidden="true">#</a> 死锁的预防</h4><p>死锁四大必要条件上面都已经列出来了，很显然，只要破坏四个必要条件中的任何一个就能够预防死锁的发生。</p><p>破坏第一个条件 <strong>互斥条件</strong>：使得资源是可以同时访问的，这是种简单的方法，磁盘就可以用这种方法管理，但是我们要知道，有很多资源 <strong>往往是不能同时访问的</strong> ，所以这种做法在大多数的场合是行不通的。</p><p>破坏第三个条件 <strong>非抢占</strong> ：也就是说可以采用 <strong>剥夺式调度算法</strong>，但剥夺式调度方法目前一般仅适用于 <strong>主存资源</strong> 和 <strong>处理器资源</strong> 的分配，并不适用于所有的资源，会导致 <strong>资源利用率下降</strong>。</p><p>所以一般比较实用的 <strong>预防死锁的方法</strong>，是通过考虑破坏第二个条件和第四个条件。</p><p><strong>1、静态分配策略</strong></p><p>静态分配策略可以破坏死锁产生的第二个条件（占有并等待）。所谓静态分配策略，就是指一个进程必须在执行前就申请到它所需要的全部资源，并且知道它所要的资源都得到满足之后才开始执行。进程要么占有所有的资源然后开始执行，要么不占有资源，不会出现占有一些资源等待一些资源的情况。</p><p>静态分配策略逻辑简单，实现也很容易，但这种策略 <strong>严重地降低了资源利用率</strong>，因为在每个进程所占有的资源中，有些资源是在比较靠后的执行时间里采用的，甚至有些资源是在额外的情况下才使用的，这样就可能造成一个进程占有了一些 <strong>几乎不用的资源而使其他需要该资源的进程产生等待</strong> 的情况。</p><p><strong>2、层次分配策略</strong></p><p>层次分配策略破坏了产生死锁的第四个条件(循环等待)。在层次分配策略下，所有的资源被分成了多个层次，一个进程得到某一次的一个资源后，它只能再申请较高一层的资源；当一个进程要释放某层的一个资源时，必须先释放所占用的较高层的资源，按这种策略，是不可能出现循环等待链的，因为那样的话，就出现了已经申请了较高层的资源，反而去申请了较低层的资源，不符合层次分配策略，证明略。</p><h4 id="死锁的避免" tabindex="-1"><a class="header-anchor" href="#死锁的避免" aria-hidden="true">#</a> 死锁的避免</h4><p>上面提到的 <strong>破坏</strong> 死锁产生的四个必要条件之一就可以成功 <strong>预防系统发生死锁</strong> ，但是会导致 <strong>低效的进程运行</strong> 和 <strong>资源使用率</strong> 。而死锁的避免相反，它的角度是允许系统中<strong>同时存在四个必要条件</strong> ，只要掌握并发进程中与每个进程有关的资源动态申请情况，做出 <strong>明智和合理的选择</strong> ，仍然可以避免死锁，因为四大条件仅仅是产生死锁的必要条件。</p><p>我们将系统的状态分为 <strong>安全状态</strong> 和 <strong>不安全状态</strong> ，每当在未申请者分配资源前先测试系统状态，若把系统资源分配给申请者会产生死锁，则拒绝分配，否则接受申请，并为它分配资源。</p><blockquote><p>如果操作系统能够保证所有的进程在有限的时间内得到需要的全部资源，则称系统处于安全状态，否则说系统是不安全的。很显然，系统处于安全状态则不会发生死锁，系统若处于不安全状态则可能发生死锁。</p></blockquote><p>那么如何保证系统保持在安全状态呢？通过算法，其中最具有代表性的 <strong>避免死锁算法</strong> 就是 Dijkstra 的银行家算法，银行家算法用一句话表达就是：当一个进程申请使用资源的时候，<strong>银行家算法</strong> 通过先 <strong>试探</strong> 分配给该进程资源，然后通过 <strong>安全性算法</strong> 判断分配后系统是否处于安全状态，若不安全则试探分配作废，让该进程继续等待，若能够进入到安全的状态，则就 <strong>真的分配资源给该进程</strong>。</p>',38),m={href:"https://blog.csdn.net/qq_33414271/article/details/80245715",target:"_blank",rel:"noopener noreferrer"},k=s('<p>操作系统教程书中讲述的银行家算法也比较清晰，可以一看.</p><p>死锁的避免(银行家算法)改善了 <strong>资源使用率低的问题</strong> ，但是它要不断地检测每个进程对各类资源的占用和申请情况，以及做 <strong>安全性检查</strong> ，需要花费较多的时间。</p><h4 id="死锁的检测" tabindex="-1"><a class="header-anchor" href="#死锁的检测" aria-hidden="true">#</a> 死锁的检测</h4><p>对资源的分配加以限制可以 <strong>预防和避免</strong> 死锁的发生，但是都不利于各进程对系统资源的<strong>充分共享</strong>。解决死锁问题的另一条途径是 <strong>死锁检测和解除</strong> (这里突然联想到了乐观锁和悲观锁，感觉死锁的检测和解除就像是 <strong>乐观锁</strong> ，分配资源时不去提前管会不会发生死锁了，等到真的死锁出现了再来解决嘛，而 <strong>死锁的预防和避免</strong> 更像是悲观锁，总是觉得死锁会出现，所以在分配资源的时候就很谨慎)。</p><p>这种方法对资源的分配不加以任何限制，也不采取死锁避免措施，但系统 <strong>定时地运行一个 “死锁检测”</strong> 的程序，判断系统内是否出现死锁，如果检测到系统发生了死锁，再采取措施去解除它。</p><h5 id="进程-资源分配图" tabindex="-1"><a class="header-anchor" href="#进程-资源分配图" aria-hidden="true">#</a> 进程-资源分配图</h5><p>操作系统中的每一刻时刻的<strong>系统状态</strong>都可以用<strong>进程-资源分配图</strong>来表示，进程-资源分配图是描述进程和资源申请及分配关系的一种有向图，可用于<strong>检测系统是否处于死锁状态</strong>。</p><p>用一个方框表示每一个资源类，方框中的黑点表示该资源类中的各个资源，每个键进程用一个圆圈表示，用 <strong>有向边</strong> 来表示<strong>进程申请资源和资源被分配的情况</strong>。</p><p>图中 2-21 是<strong>进程-资源分配图</strong>的一个例子，其中共有三个资源类，每个进程的资源占有和申请情况已清楚地表示在图中。在这个例子中，由于存在 <strong>占有和等待资源的环路</strong> ，导致一组进程永远处于等待资源的状态，发生了 <strong>死锁</strong>。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303122227118.jpeg" alt="进程-资源分配图"></p><p>进程-资源分配图中存在环路并不一定是发生了死锁。因为循环等待资源仅仅是死锁发生的必要条件，而不是充分条件。图 2-22 便是一个有环路而无死锁的例子。虽然进程 P1 和进程 P3 分别占用了一个资源 R1 和一个资源 R2，并且因为等待另一个资源 R2 和另一个资源 R1 形成了环路，但进程 P2 和进程 P4 分别占有了一个资源 R1 和一个资源 R2，它们申请的资源得到了满足，在有限的时间里会归还资源，于是进程 P1 或 P3 都能获得另一个所需的资源，环路自动解除，系统也就不存在死锁状态了。</p><h5 id="死锁检测步骤" tabindex="-1"><a class="header-anchor" href="#死锁检测步骤" aria-hidden="true">#</a> 死锁检测步骤</h5><p>知道了死锁检测的原理，我们可以利用下列步骤编写一个 <strong>死锁检测</strong> 程序，检测系统是否产生了死锁。</p><ol><li>如果进程-资源分配图中无环路，则此时系统没有发生死锁</li><li>如果进程-资源分配图中有环路，且每个资源类仅有一个资源，则系统中已经发生了死锁。</li><li>如果进程-资源分配图中有环路，且涉及到的资源类有多个资源，此时系统未必会发生死锁。如果能在进程-资源分配图中找出一个 <strong>既不阻塞又非独立的进程</strong> ，该进程能够在有限的时间内归还占有的资源，也就是把边给消除掉了，重复此过程，直到能在有限的时间内 <strong>消除所有的边</strong> ，则不会发生死锁，否则会发生死锁。(消除边的过程类似于 <strong>拓扑排序</strong>)</li></ol><h4 id="死锁的解除" tabindex="-1"><a class="header-anchor" href="#死锁的解除" aria-hidden="true">#</a> 死锁的解除</h4><p>当死锁检测程序检测到存在死锁发生时，应设法让其解除，让系统从死锁状态中恢复过来，常用的解除死锁的方法有以下四种：</p><ol><li><strong>立即结束所有进程的执行，重新启动操作系统</strong> ：这种方法简单，但以前所在的工作全部作废，损失很大。</li><li><strong>撤销涉及死锁的所有进程，解除死锁后继续运行</strong> ：这种方法能彻底打破<strong>死锁的循环等待</strong>条件，但将付出很大代价，例如有些进程可能已经计算了很长时间，由于被撤销而使产生的部分结果也被消除了，再重新执行时还要再次进行计算。</li><li><strong>逐个撤销涉及死锁的进程，回收其资源直至死锁解除。</strong></li><li><strong>抢占资源</strong> ：从涉及死锁的一个或几个进程中抢占资源，把夺得的资源再分配给涉及死锁的进程直至死锁解除。</li></ol><h2 id="操作系统内存管理基础" tabindex="-1"><a class="header-anchor" href="#操作系统内存管理基础" aria-hidden="true">#</a> 操作系统内存管理基础</h2><h3 id="内存管理介绍" tabindex="-1"><a class="header-anchor" href="#内存管理介绍" aria-hidden="true">#</a> 内存管理介绍</h3><p>👨‍💻 <strong>面试官</strong>: <strong>操作系统的内存管理主要是做什么？</strong></p><p>🙋 <strong>我：</strong> 操作系统的内存管理主要负责内存的分配与回收（malloc 函数：申请内存，free 函数：释放内存），另外地址转换也就是将逻辑地址转换成相应的物理地址等功能也是操作系统内存管理做的事情。</p><h3 id="常见的几种内存管理机制" tabindex="-1"><a class="header-anchor" href="#常见的几种内存管理机制" aria-hidden="true">#</a> 常见的几种内存管理机制</h3><p>👨‍💻 <strong>面试官</strong>: <strong>操作系统的内存管理机制了解吗？内存管理有哪几种方式?</strong></p><p>🙋 <strong>我：</strong> 这个在学习操作系统的时候有了解过。</p><p>简单分为<strong>连续分配管理方式</strong>和<strong>非连续分配管理方式</strong>这两种。连续分配管理方式是指为一个用户程序分配一个连续的内存空间，常见的如 <strong>块式管理</strong> 。同样地，非连续分配管理方式允许一个程序使用的内存分布在离散或者说不相邻的内存中，常见的如<strong>页式管理</strong> 和 <strong>段式管理</strong>。</p><ol><li><strong>块式管理</strong> ： 远古时代的计算机操作系统的内存管理方式。将内存分为几个固定大小的块，每个块中只包含一个进程。如果程序运行需要内存的话，操作系统就分配给它一块，如果程序运行只需要很小的空间的话，分配的这块内存很大一部分几乎被浪费了。这些在每个块中未被利用的空间，我们称之为碎片。</li><li><strong>页式管理</strong> ：把主存分为大小相等且固定的一页一页的形式，页较小，相比于块式管理的划分粒度更小，提高了内存利用率，减少了碎片。页式管理通过页表对应逻辑地址和物理地址。</li><li><strong>段式管理</strong> ： 页式管理虽然提高了内存利用率，但是页式管理其中的页并无任何实际意义。 段式管理把主存分为一段段的，段是有实际意义的，每个段定义了一组逻辑信息，例如,有主程序段 MAIN、子程序段 X、数据段 D 及栈段 S 等。 段式管理通过段表对应逻辑地址和物理地址。</li></ol><p>简单来说：页是物理单位，段是逻辑单位。分页可以有效提高内存利用率，分段可以更好满足用户需求。</p><p>👨‍💻<strong>面试官</strong> ： 回答的还不错！不过漏掉了一个很重要的 <strong>段页式管理机制</strong> 。段页式管理机制结合了段式管理和页式管理的优点。简单来说段页式管理机制就是把主存先分成若干段，每个段又分成若干页，也就是说 <strong>段页式管理机制</strong> 中段与段之间以及段的内部的都是离散的。</p><p>🙋 <strong>我</strong> ：谢谢面试官！刚刚把这个给忘记了～</p><h3 id="快表和多级页表" tabindex="-1"><a class="header-anchor" href="#快表和多级页表" aria-hidden="true">#</a> 快表和多级页表</h3><p>👨‍💻<strong>面试官</strong> ： 页表管理机制中有两个很重要的概念：快表和多级页表，这两个东西分别解决了页表管理中很重要的两个问题。你给我简单介绍一下吧！</p><p>🙋 <strong>我</strong> ：在分页内存管理中，很重要的两点是：</p><ol><li>虚拟地址到物理地址的转换要快。</li><li>解决虚拟地址空间大，页表也会很大的问题。</li></ol><h4 id="快表" tabindex="-1"><a class="header-anchor" href="#快表" aria-hidden="true">#</a> 快表</h4><p>为了提高虚拟地址到物理地址的转换速度，操作系统在 <strong>页表方案</strong> 基础之上引入了 <strong>快表</strong> 来加速虚拟地址到物理地址的转换。我们可以把快表理解为一种特殊的高速缓冲存储器（Cache），其中的内容是页表的一部分或者全部内容。作为页表的 Cache，它的作用与页表相似，但是提高了访问速率。由于采用页表做地址转换，读写内存数据时 CPU 要访问两次主存。有了快表，有时只要访问一次高速缓冲存储器，一次主存，这样可加速查找并提高指令执行速度。</p><p>使用快表之后的地址转换流程是这样的：</p><ol><li>根据虚拟地址中的页号查快表；</li><li>如果该页在快表中，直接从快表中读取相应的物理地址；</li><li>如果该页不在快表中，就访问内存中的页表，再从页表中得到物理地址，同时将页表中的该映射表项添加到快表中；</li><li>当快表填满后，又要登记新页时，就按照一定的淘汰策略淘汰掉快表中的一个页。</li></ol><p>看完了之后你会发现快表和我们平时经常在开发系统中使用的缓存（比如 Redis）很像，的确是这样的，操作系统中的很多思想、很多经典的算法，你都可以在我们日常开发使用的各种工具或者框架中找到它们的影子。</p><h4 id="多级页表" tabindex="-1"><a class="header-anchor" href="#多级页表" aria-hidden="true">#</a> 多级页表</h4><p>引入多级页表的主要目的是为了避免把全部页表一直放在内存中占用过多空间，特别是那些根本就不需要的页表就不需要保留在内存中。</p><p>多级页表属于时间换空间的典型场景。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>为了提高内存的空间性能，提出了多级页表的概念；但是提到空间性能是以浪费时间性能为基础的，因此为了补充损失的时间性能，提出了快表（即 TLB）的概念。 不论是快表还是多级页表实际上都利用到了程序的局部性原理，局部性原理在后面的虚拟内存这部分会介绍到。</p><h3 id="分页机制和分段机制的共同点和区别" tabindex="-1"><a class="header-anchor" href="#分页机制和分段机制的共同点和区别" aria-hidden="true">#</a> 分页机制和分段机制的共同点和区别</h3><p>👨‍💻<strong>面试官</strong> ： <strong>分页机制和分段机制有哪些共同点和区别呢？</strong></p><p>🙋 <strong>我</strong> ：</p><ol><li><strong>共同点</strong> ： <ul><li>分页机制和分段机制都是为了提高内存利用率，减少内存碎片。</li><li>页和段都是离散存储的，所以两者都是离散分配内存的方式。但是，每个页和段中的内存是连续的。</li></ul></li><li><strong>区别</strong> ： <ul><li>页的大小是固定的，由操作系统决定；而段的大小不固定，取决于我们当前运行的程序。</li><li>分页仅仅是为了满足操作系统内存管理的需求，而段是逻辑信息的单位，在程序中可以体现为代码段，数据段，能够更好满足用户的需要。</li></ul></li></ol><h3 id="逻辑-虚拟-地址和物理地址" tabindex="-1"><a class="header-anchor" href="#逻辑-虚拟-地址和物理地址" aria-hidden="true">#</a> 逻辑(虚拟)地址和物理地址</h3><p>👨‍💻<strong>面试官</strong> ：你刚刚还提到了<strong>逻辑地址和物理地址</strong>这两个概念，我不太清楚，你能为我解释一下不？</p><p>🙋 <strong>我：</strong> em...好的嘛！我们编程一般只有可能和逻辑地址打交道，比如在 C 语言中，指针里面存储的数值就可以理解成为内存里的一个地址，这个地址也就是我们说的逻辑地址，逻辑地址由操作系统决定。物理地址指的是真实物理内存中地址，更具体一点来说就是内存地址寄存器中的地址。物理地址是内存单元真正的地址。</p><h3 id="cpu-寻址了解吗-为什么需要虚拟地址空间" tabindex="-1"><a class="header-anchor" href="#cpu-寻址了解吗-为什么需要虚拟地址空间" aria-hidden="true">#</a> CPU 寻址了解吗?为什么需要虚拟地址空间?</h3><p>👨‍💻<strong>面试官</strong> ：<strong>CPU 寻址了解吗?为什么需要虚拟地址空间?</strong></p><p>🙋 <strong>我</strong> ：这部分我真不清楚！</p><p>于是面试完之后我默默去查阅了相关文档！留下了没有技术的泪水。。。</p>',54),w={href:"https://docs.microsoft.com/zh-cn/windows-hardware/drivers/gettingstarted/virtual-address-spaces?redirectedfrom=MSDN",target:"_blank",rel:"noopener noreferrer"},x=s('<p>现代处理器使用的是一种称为 <strong>虚拟寻址(Virtual Addressing)</strong> 的寻址方式。<strong>使用虚拟寻址，CPU 需要将虚拟地址翻译成物理地址，这样才能访问到真实的物理内存。</strong> 实际上完成虚拟地址转换为物理地址的硬件是 CPU 中含有一个被称为 <strong>内存管理单元（Memory Management Unit, MMU）</strong> 的硬件。如下图所示：</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303122227048.png" alt="MMU_principle_updated"></p><p><strong>为什么要有虚拟地址空间呢？</strong></p><p>先从没有虚拟地址空间的时候说起吧！没有虚拟地址空间的时候，<strong>程序直接访问和操作的都是物理内存</strong> 。但是这样有什么问题呢？</p><ol><li>用户程序可以访问任意内存，寻址内存的每个字节，这样就很容易（有意或者无意）破坏操作系统，造成操作系统崩溃。</li><li>想要同时运行多个程序特别困难，比如你想同时运行一个微信和一个 QQ 音乐都不行。为什么呢？举个简单的例子：微信在运行的时候给内存地址 1xxx 赋值后，QQ 音乐也同样给内存地址 1xxx 赋值，那么 QQ 音乐对内存的赋值就会覆盖微信之前所赋的值，这就造成微信这个程序会崩溃。</li></ol><p><strong>总结来说：如果直接把物理地址暴露出来的话会带来严重问题，比如可能对操作系统造成伤害以及给同时运行多个程序造成困难。</strong></p><p>通过虚拟地址访问内存有以下优势：</p><ul><li>程序可以使用一系列相邻的虚拟地址来访问物理内存中不相邻的大内存缓冲区。</li><li>程序可以使用一系列虚拟地址来访问大于可用物理内存的内存缓冲区。当物理内存的供应量变小时，内存管理器会将物理内存页（通常大小为 4 KB）保存到磁盘文件。数据或代码页会根据需要在物理内存与磁盘之间移动。</li><li>不同进程使用的虚拟地址彼此隔离。一个进程中的代码无法更改正在由另一进程或操作系统使用的物理内存。</li></ul><h2 id="虚拟内存" tabindex="-1"><a class="header-anchor" href="#虚拟内存" aria-hidden="true">#</a> 虚拟内存</h2><h3 id="什么是虚拟内存-virtual-memory" tabindex="-1"><a class="header-anchor" href="#什么是虚拟内存-virtual-memory" aria-hidden="true">#</a> 什么是虚拟内存(Virtual Memory)?</h3><p>👨‍💻<strong>面试官</strong> ：再问你一个常识性的问题！<strong>什么是虚拟内存(Virtual Memory)?</strong></p><p>🙋 <strong>我</strong> ：这个在我们平时使用电脑特别是 Windows 系统的时候太常见了。很多时候我们使用了很多占内存的软件，这些软件占用的内存可能已经远远超出了我们电脑本身具有的物理内存。<strong>为什么可以这样呢？</strong> 正是因为 <strong>虚拟内存</strong> 的存在，通过 <strong>虚拟内存</strong> 可以让程序拥有超过系统物理内存大小的可用内存空间。另外，<strong>虚拟内存为每个进程提供了一个一致的、私有的地址空间，它让每个进程产生了一种自己在独享主存的错觉（每个进程拥有一片连续完整的内存空间）</strong>。这样会更加有效地管理内存并减少出错。</p>',12),P=r("strong",null,"虚拟内存",-1),E=r("strong",null,"虚拟内存的重要意义是它定义了一个连续的虚拟地址空间",-1),y=r("strong",null,"把内存扩展到硬盘空间",-1),A={href:"https://juejin.im/post/59f8691b51882534af254317",target:"_blank",rel:"noopener noreferrer"},B=r("p",null,"维基百科中有几句话是这样介绍虚拟内存的。",-1),C=r("strong",null,"虚拟内存",-1),q={href:"https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},F=s('<h3 id="局部性原理" tabindex="-1"><a class="header-anchor" href="#局部性原理" aria-hidden="true">#</a> 局部性原理</h3><p>👨‍💻<strong>面试官</strong> ：要想更好地理解虚拟内存技术，必须要知道计算机中著名的<strong>局部性原理</strong>。另外，局部性原理既适用于程序结构，也适用于数据结构，是非常重要的一个概念。</p><p>🙋 <strong>我</strong> ：局部性原理是虚拟内存技术的基础，正是因为程序运行具有局部性原理，才可以只装入部分程序到内存就开始运行。</p><blockquote><p>以下内容摘自《计算机操作系统教程》 第 4 章存储器管理。</p></blockquote><p>早在 1968 年的时候，就有人指出我们的程序在执行的时候往往呈现局部性规律，也就是说在某个较短的时间段内，程序执行局限于某一小部分，程序访问的存储空间也局限于某个区域。</p><p>局部性原理表现在以下两个方面：</p><ol><li><strong>时间局部性</strong> ：如果程序中的某条指令一旦执行，不久以后该指令可能再次执行；如果某数据被访问过，不久以后该数据可能再次被访问。产生时间局部性的典型原因，是由于在程序中存在着大量的循环操作。</li><li><strong>空间局部性</strong> ：一旦程序访问了某个存储单元，在不久之后，其附近的存储单元也将被访问，即程序在一段时间内所访问的地址，可能集中在一定的范围之内，这是因为指令通常是顺序存放、顺序执行的，数据也一般是以向量、数组、表等形式簇聚存储的。</li></ol><p>时间局部性是通过将近来使用的指令和数据保存到高速缓存存储器中，并使用高速缓存的层次结构实现。空间局部性通常是使用较大的高速缓存，并将预取机制集成到高速缓存控制逻辑中实现。虚拟内存技术实际上就是建立了 “内存一外存”的两级存储器的结构，利用局部性原理实现髙速缓存。</p><h3 id="虚拟存储器" tabindex="-1"><a class="header-anchor" href="#虚拟存储器" aria-hidden="true">#</a> 虚拟存储器</h3><blockquote><p><strong>勘误：虚拟存储器又叫做虚拟内存，都是 Virtual Memory 的翻译，属于同一个概念。</strong></p></blockquote><p>👨‍💻<strong>面试官</strong> ：<s>都说了虚拟内存了。你再讲讲<strong>虚拟存储器</strong>把！</s></p><p>🙋 <strong>我</strong> ：</p>',12),U={href:"https://wizardforcel.gitbooks.io/wangdaokaoyan-os/content/13.html",target:"_blank",rel:"noopener noreferrer"},M=s('<p>基于局部性原理，在程序装入时，可以将程序的一部分装入内存，而将其他部分留在外存，就可以启动程序执行。由于外存往往比内存大很多，所以我们运行的软件的内存大小实际上是可以比计算机系统实际的内存大小大的。在程序执行过程中，当所访问的信息不在内存时，由操作系统将所需要的部分调入内存，然后继续执行程序。另一方面，操作系统将内存中暂时不使用的内容换到外存上，从而腾出空间存放将要调入内存的信息。这样，计算机好像为用户提供了一个比实际内存大得多的存储器——<strong>虚拟存储器</strong>。</p><p>实际上，我觉得虚拟内存同样是一种时间换空间的策略，你用 CPU 的计算时间，页的调入调出花费的时间，换来了一个虚拟的更大的空间来支持程序的运行。不得不感叹，程序世界几乎不是时间换空间就是空间换时间。</p><h3 id="虚拟内存的技术实现" tabindex="-1"><a class="header-anchor" href="#虚拟内存的技术实现" aria-hidden="true">#</a> 虚拟内存的技术实现</h3><p>👨‍💻<strong>面试官</strong> ：<strong>虚拟内存技术的实现呢？</strong></p><p>🙋 <strong>我</strong> ：<strong>虚拟内存的实现需要建立在离散分配的内存管理方式的基础上。</strong> 虚拟内存的实现有以下三种方式：</p><ol><li><strong>请求分页存储管理</strong> ：建立在分页管理之上，为了支持虚拟存储器功能而增加了请求调页功能和页面置换功能。请求分页是目前最常用的一种实现虚拟存储器的方法。请求分页存储管理系统中，在作业开始运行之前，仅装入当前要执行的部分段即可运行。假如在作业运行的过程中发现要访问的页面不在内存，则由处理器通知操作系统按照对应的页面置换算法将相应的页面调入到主存，同时操作系统也可以将暂时不用的页面置换到外存中。</li><li><strong>请求分段存储管理</strong> ：建立在分段存储管理之上，增加了请求调段功能、分段置换功能。请求分段储存管理方式就如同请求分页储存管理方式一样，在作业开始运行之前，仅装入当前要执行的部分段即可运行；在执行过程中，可使用请求调入中断动态装入要访问但又不在内存的程序段；当内存空间已满，而又需要装入新的段时，根据置换功能适当调出某个段，以便腾出空间而装入新的段。</li><li><strong>请求段页式存储管理</strong></li></ol><p><strong>这里多说一下？很多人容易搞混请求分页与分页存储管理，两者有何不同呢？</strong></p><p>请求分页存储管理建立在分页管理之上。他们的根本区别是是否将程序所需的全部地址空间都装入主存，这也是请求分页存储管理可以提供虚拟内存的原因，我们在上面已经分析过了。</p><p>它们之间的根本区别在于是否将一作业的全部地址空间同时装入主存。请求分页存储管理不要求将作业全部地址空间同时装入主存。基于这一点，请求分页存储管理可以提供虚存，而分页存储管理却不能提供虚存。</p><p>不管是上面那种实现方式，我们一般都需要：</p><ol><li>一定容量的内存和外存：在载入程序的时候，只需要将程序的一部分装入内存，而将其他部分留在外存，然后程序就可以执行了；</li><li><strong>缺页中断</strong>：如果<strong>需执行的指令或访问的数据尚未在内存</strong>（称为缺页或缺段），则由处理器通知操作系统将相应的页面或段<strong>调入到内存</strong>，然后继续执行程序；</li><li><strong>虚拟地址空间</strong> ：逻辑地址到物理地址的变换。</li></ol><h3 id="页面置换算法" tabindex="-1"><a class="header-anchor" href="#页面置换算法" aria-hidden="true">#</a> 页面置换算法</h3><p>👨‍💻<strong>面试官</strong> ：虚拟内存管理很重要的一个概念就是页面置换算法。那你说一下 <strong>页面置换算法的作用?常见的页面置换算法有哪些?</strong></p><p>🙋 <strong>我</strong> ：</p><blockquote><p>这个题目经常作为笔试题出现，网上已经给出了很不错的回答，我这里只是总结整理了一下。</p></blockquote><p>地址映射过程中，若在页面中发现所要访问的页面不在内存中，则发生缺页中断 。</p><blockquote><p><strong>缺页中断</strong> 就是要访问的<strong>页</strong>不在主存，需要操作系统将其调入主存后再进行访问。 在这个时候，被内存映射的文件实际上成了一个分页交换文件。</p></blockquote><p>当发生缺页中断时，如果当前内存中并没有空闲的页面，操作系统就必须在内存选择一个页面将其移出内存，以便为即将调入的页面让出空间。用来选择淘汰哪一页的规则叫做页面置换算法，我们可以把页面置换算法看成是淘汰页面的规则。</p><ul><li><strong>OPT 页面置换算法（最佳页面置换算法）</strong> ：最佳(Optimal, OPT)置换算法所选择的被淘汰页面将是以后永不使用的，或者是在最长时间内不再被访问的页面,这样可以保证获得最低的缺页率。但由于人们目前无法预知进程在内存下的若千页面中哪个是未来最长时间内不再被访问的，因而该算法无法实现。一般作为衡量其他置换算法的方法。</li><li><strong>FIFO（First In First Out） 页面置换算法（先进先出页面置换算法）</strong> : 总是淘汰最先进入内存的页面，即选择在内存中驻留时间最久的页面进行淘汰。</li><li><strong>LRU （Least Recently Used）页面置换算法（最近最久未使用页面置换算法）</strong> ：LRU 算法赋予每个页面一个访问字段，用来记录一个页面自上次被访问以来所经历的时间 T，当须淘汰一个页面时，选择现有页面中其 T 值最大的，即最近最久未使用的页面予以淘汰。</li><li><strong>LFU （Least Frequently Used）页面置换算法（最少使用页面置换算法）</strong> : 该置换算法选择在之前时期使用最少的页面作为淘汰页。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',20),j=r("li",null,"《计算机操作系统—汤小丹》第四版",-1),v={href:"https://book.douban.com/subject/1230413/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://zh.wikipedia.org/wiki/%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E5%8D%95%E5%85%83",target:"_blank",rel:"noopener noreferrer"},S={href:"https://baike.baidu.com/item/%E5%BF%AB%E8%A1%A8/19781679",target:"_blank",rel:"noopener noreferrer"},I=r("li",null,"https://www.jianshu.com/p/1d47ed0b46d5",-1),z={href:"https://www.studytonight.com/operating-system",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.geeksforgeeks.org/interprocess-communication-methods/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://juejin.im/post/59f8691b51882534af254317",target:"_blank",rel:"noopener noreferrer"},N=r("li",null,"王道考研操作系统知识点整理： https://wizardforcel.gitbooks.io/wangdaokaoyan-os/content/13.html",-1);function J(O,Q){const o=a("ExternalLinkIcon");return i(),g("div",null,[p,r("p",null,[t("关于如何学习操作系统，可以看这篇回答："),r("a",h,[t("https://www.zhihu.com/question/270998611/answer/1640198217"),n(o)]),t("。")]),d,r("p",null,[t("🙋 "),c,t(" ：我们一般把进程大致分为 5 种状态，这一点和"),r("a",u,[t("线程"),n(o)]),t("很像！")]),_,r("blockquote",null,[r("p",null,[t("下面这部分总结参考了:"),r("a",b,[t("《进程间通信 IPC (InterProcess Communication)》"),n(o)]),t(" 这篇文章，推荐阅读，总结的非常不错。")])]),f,r("p",null,[t("银行家算法详情可见："),r("a",m,[t("《一句话+一张图说清楚——银行家算法》"),n(o)]),t(" 。")]),k,r("blockquote",null,[r("p",null,[t("这部分内容参考了 Microsoft 官网的介绍，地址："),r("a",w,[t("https://docs.microsoft.com/zh-cn/windows-hardware/drivers/gettingstarted/virtual-address-spaces?redirectedfrom=MSDN"),n(o)])])]),x,r("p",null,[P,t("是计算机系统内存管理的一种技术，我们可以手动设置自己电脑的虚拟内存。不要单纯认为虚拟内存只是“使用硬盘空间来扩展内存“的技术。"),E,t("，并且 "),y,t("。推荐阅读："),r("a",A,[t("《虚拟内存的那点事儿》"),n(o)])]),B,r("blockquote",null,[r("p",null,[C,t(" 使得应用程序认为它拥有连续的可用的内存（一个连续完整的地址空间），而实际上，它通常是被分隔成多个物理内存碎片，还有部分暂时存储在外部磁盘存储器上，在需要时进行数据交换。与没有使用虚拟内存技术的系统相比，使用这种技术的系统使得大型程序的编写变得更容易，对真正的物理内存（例如 RAM）的使用也更有效率。目前，大多数操作系统都使用了虚拟内存，如 Windows 家族的“虚拟内存”；Linux 的“交换空间”等。From:"),r("a",q,[t("https://zh.wikipedia.org/wiki/虚拟内存"),n(o)])])]),F,r("blockquote",null,[r("p",null,[t("这部分内容来自："),r("a",U,[t("王道考研操作系统知识点整理"),n(o)]),t("。")])]),M,r("ul",null,[j,r("li",null,[r("a",v,[t("《深入理解计算机系统》"),n(o)])]),r("li",null,[r("a",R,[t("https://zh.wikipedia.org/wiki/输入输出内存管理单元"),n(o)])]),r("li",null,[r("a",S,[t("https://baike.baidu.com/item/快表/19781679"),n(o)])]),I,r("li",null,[r("a",z,[t("https://www.studytonight.com/operating-system"),n(o)])]),r("li",null,[r("a",L,[t("https://www.geeksforgeeks.org/interprocess-communication-methods/"),n(o)])]),r("li",null,[r("a",D,[t("https://juejin.im/post/59f8691b51882534af254317"),n(o)])]),N])])}const T=e(l,[["render",J],["__file","operating-system-basic-questions-01.html.vue"]]);export{T as default};
