const e=JSON.parse('{"key":"v-fa48f88a","path":"/java/jvm/jvm-intro.html","title":"大白话带你认识 JVM","lang":"zh-CN","frontmatter":{"title":"大白话带你认识 JVM","category":"Java","tag":["JVM"],"description":"来自说出你的愿望吧丷投稿，原文地址：https://juejin.im/post/5e1505d0f265da5d5d744050 。 前言 如果在文中用词或者理解方面出现问题，欢迎指出。此文旨在提及而不深究，但会尽量效率地把知识点都抛出来 一、JVM 的基本介绍 JVM 是 Java Virtual Machine 的缩写，它是一个虚构出来的计算机，一种规范。通过在实际的计算机上仿真模拟各类计算机功能实现···","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/docs/java/jvm/jvm-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"大白话带你认识 JVM"}],["meta",{"property":"og:description","content":"来自说出你的愿望吧丷投稿，原文地址：https://juejin.im/post/5e1505d0f265da5d5d744050 。 前言 如果在文中用词或者理解方面出现问题，欢迎指出。此文旨在提及而不深究，但会尽量效率地把知识点都抛出来 一、JVM 的基本介绍 JVM 是 Java Virtual Machine 的缩写，它是一个虚构出来的计算机，一种规范。通过在实际的计算机上仿真模拟各类计算机功能实现···"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-13T10:18:26.000Z"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-02-13T10:18:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大白话带你认识 JVM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-13T10:18:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"一、JVM 的基本介绍","slug":"一、jvm-的基本介绍","link":"#一、jvm-的基本介绍","children":[{"level":3,"title":"1.1 Java 文件是如何被运行的","slug":"_1-1-java-文件是如何被运行的","link":"#_1-1-java-文件是如何被运行的","children":[]},{"level":3,"title":"1.2 简单的代码例子","slug":"_1-2-简单的代码例子","link":"#_1-2-简单的代码例子","children":[]}]},{"level":2,"title":"二、类加载器的介绍","slug":"二、类加载器的介绍","link":"#二、类加载器的介绍","children":[{"level":3,"title":"2.1 类加载器的流程","slug":"_2-1-类加载器的流程","link":"#_2-1-类加载器的流程","children":[]},{"level":3,"title":"2.2 类加载器的加载顺序","slug":"_2-2-类加载器的加载顺序","link":"#_2-2-类加载器的加载顺序","children":[]},{"level":3,"title":"2.3 双亲委派机制","slug":"_2-3-双亲委派机制","link":"#_2-3-双亲委派机制","children":[]}]},{"level":2,"title":"三、运行时数据区","slug":"三、运行时数据区","link":"#三、运行时数据区","children":[{"level":3,"title":"3.1 本地方法栈和程序计数器","slug":"_3-1-本地方法栈和程序计数器","link":"#_3-1-本地方法栈和程序计数器","children":[]},{"level":3,"title":"3.2 方法区","slug":"_3-2-方法区","link":"#_3-2-方法区","children":[]},{"level":3,"title":"3.3 虚拟机栈和虚拟机堆","slug":"_3-3-虚拟机栈和虚拟机堆","link":"#_3-3-虚拟机栈和虚拟机堆","children":[]},{"level":3,"title":"3.4 垃圾回收算法","slug":"_3-4-垃圾回收算法","link":"#_3-4-垃圾回收算法","children":[]},{"level":3,"title":"3.5 （了解）各种各样的垃圾回收器","slug":"_3-5-了解-各种各样的垃圾回收器","link":"#_3-5-了解-各种各样的垃圾回收器","children":[]},{"level":3,"title":"3.6 （了解）JVM 的常用参数","slug":"_3-6-了解-jvm-的常用参数","link":"#_3-6-了解-jvm-的常用参数","children":[]}]},{"level":2,"title":"四、关于 JVM 调优的一些方面","slug":"四、关于-jvm-调优的一些方面","link":"#四、关于-jvm-调优的一些方面","children":[{"level":3,"title":"4.1 调整最大堆内存和最小堆内存","slug":"_4-1-调整最大堆内存和最小堆内存","link":"#_4-1-调整最大堆内存和最小堆内存","children":[]},{"level":3,"title":"4.2 调整新生代和老年代的比值","slug":"_4-2-调整新生代和老年代的比值","link":"#_4-2-调整新生代和老年代的比值","children":[]},{"level":3,"title":"4.3 调整 Survivor 区和 Eden 区的比值","slug":"_4-3-调整-survivor-区和-eden-区的比值","link":"#_4-3-调整-survivor-区和-eden-区的比值","children":[]},{"level":3,"title":"4.4 设置年轻代和老年代的大小","slug":"_4-4-设置年轻代和老年代的大小","link":"#_4-4-设置年轻代和老年代的大小","children":[]},{"level":3,"title":"4.5 小总结","slug":"_4-5-小总结","link":"#_4-5-小总结","children":[]},{"level":3,"title":"4.6 永久区的设置","slug":"_4-6-永久区的设置","link":"#_4-6-永久区的设置","children":[]},{"level":3,"title":"4.7 JVM 的栈参数调优","slug":"_4-7-jvm-的栈参数调优","link":"#_4-7-jvm-的栈参数调优","children":[]},{"level":3,"title":"4.8 (可以直接跳过了)JVM 其他参数介绍","slug":"_4-8-可以直接跳过了-jvm-其他参数介绍","link":"#_4-8-可以直接跳过了-jvm-其他参数介绍","children":[]}]},{"level":2,"title":"finally","slug":"finally","link":"#finally","children":[]}],"git":{"createdTime":1636463233000,"updatedTime":1676283506000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Konjacor","email":"59204522+Konjacor@users.noreply.github.com","commits":1},{"name":"fjut_shark","email":"1946955309@qq.com","commits":1},{"name":"yueyang","email":"yy1023178796@gmail.com","commits":1}]},"readingTime":{"minutes":32.12,"words":9636},"filePathRelative":"java/jvm/jvm-intro.md","localizedDate":"2021年11月9日","excerpt":"<blockquote>\\n<p>来自<a href=\\"https://juejin.im/user/5c2400afe51d45451758aa96\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">说出你的愿望吧丷</a>投稿，原文地址：https://juejin.im/post/5e1505d0f265da5d5d744050 。</p>\\n</blockquote>\\n<h2> 前言</h2>\\n<p>如果在文中用词或者理解方面出现问题，欢迎指出。此文旨在提及而不深究，但会尽量效率地把知识点都抛出来</p>\\n<h2> 一、JVM 的基本介绍</h2>\\n<p>JVM 是 Java Virtual Machine 的缩写，它是一个虚构出来的计算机，一种规范。通过在实际的计算机上仿真模拟各类计算机功能实现···</p>","copyright":{},"autoDesc":true}');export{e as data};
