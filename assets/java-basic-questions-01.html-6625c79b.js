const e=JSON.parse('{"key":"v-6124e2da","path":"/java/basis/java-basic-questions-01.html","title":"Java基础常见面试题总结(上)","lang":"zh-CN","frontmatter":{"title":"Java基础常见面试题总结(上)","category":"Java","tag":["Java基础"],"head":[["meta",{"name":"keywords","content":"JVM,JDK,JRE,字节码详解,Java 基本数据类型,装箱和拆箱"}],["meta",{"name":"description","content":"全网质量最高的Java基础常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javaguide.cn/docs/java/basis/java-basic-questions-01.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java基础常见面试题总结(上)"}],["meta",{"property":"og:description","content":"基础概念与常识 Java 语言有哪些特点? 简单易学； 面向对象（封装，继承，多态）； 平台无关性（ Java 虚拟机实现平台无关性）； 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）； 可靠性； 安全性； 支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）； 编译与解释并存；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-01T09:28:33.000Z"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2023-02-01T09:28:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础常见面试题总结(上)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-01T09:28:33.000Z\\",\\"author\\":[]}"]],"description":"基础概念与常识 Java 语言有哪些特点? 简单易学； 面向对象（封装，继承，多态）； 平台无关性（ Java 虚拟机实现平台无关性）； 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）； 可靠性； 安全性； 支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）； 编译与解释并存；"},"headers":[{"level":2,"title":"基础概念与常识","slug":"基础概念与常识","link":"#基础概念与常识","children":[{"level":3,"title":"Java 语言有哪些特点?","slug":"java-语言有哪些特点","link":"#java-语言有哪些特点","children":[]},{"level":3,"title":"JVM vs JDK vs JRE","slug":"jvm-vs-jdk-vs-jre","link":"#jvm-vs-jdk-vs-jre","children":[]},{"level":3,"title":"什么是字节码?采用字节码的好处是什么?","slug":"什么是字节码-采用字节码的好处是什么","link":"#什么是字节码-采用字节码的好处是什么","children":[]},{"level":3,"title":"为什么不全部使用 AOT 呢？","slug":"为什么不全部使用-aot-呢","link":"#为什么不全部使用-aot-呢","children":[]},{"level":3,"title":"为什么说 Java 语言“编译与解释并存”？","slug":"为什么说-java-语言-编译与解释并存","link":"#为什么说-java-语言-编译与解释并存","children":[]},{"level":3,"title":"Oracle JDK vs OpenJDK","slug":"oracle-jdk-vs-openjdk","link":"#oracle-jdk-vs-openjdk","children":[]},{"level":3,"title":"Java 和 C++ 的区别?","slug":"java-和-c-的区别","link":"#java-和-c-的区别","children":[]}]},{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"注释有哪几种形式？","slug":"注释有哪几种形式","link":"#注释有哪几种形式","children":[]},{"level":3,"title":"标识符和关键字的区别是什么？","slug":"标识符和关键字的区别是什么","link":"#标识符和关键字的区别是什么","children":[]},{"level":3,"title":"Java 语言关键字有哪些？","slug":"java-语言关键字有哪些","link":"#java-语言关键字有哪些","children":[]},{"level":3,"title":"自增自减运算符","slug":"自增自减运算符","link":"#自增自减运算符","children":[]},{"level":3,"title":"移位运算符","slug":"移位运算符","link":"#移位运算符","children":[]},{"level":3,"title":"continue、break 和 return 的区别是什么？","slug":"continue、break-和-return-的区别是什么","link":"#continue、break-和-return-的区别是什么","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"方法","slug":"方法","link":"#方法","children":[]}]},{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[{"level":3,"title":"Java 中的几种基本数据类型了解么？","slug":"java-中的几种基本数据类型了解么","link":"#java-中的几种基本数据类型了解么","children":[]},{"level":3,"title":"基本类型和包装类型的区别？","slug":"基本类型和包装类型的区别","link":"#基本类型和包装类型的区别","children":[]},{"level":3,"title":"包装类型的缓存机制了解么？","slug":"包装类型的缓存机制了解么","link":"#包装类型的缓存机制了解么","children":[]},{"level":3,"title":"自动装箱与拆箱了解吗？原理是什么？","slug":"自动装箱与拆箱了解吗-原理是什么","link":"#自动装箱与拆箱了解吗-原理是什么","children":[]},{"level":3,"title":"为什么浮点数运算的时候会有精度丢失的风险？","slug":"为什么浮点数运算的时候会有精度丢失的风险","link":"#为什么浮点数运算的时候会有精度丢失的风险","children":[]},{"level":3,"title":"如何解决浮点数运算的精度丢失问题？","slug":"如何解决浮点数运算的精度丢失问题","link":"#如何解决浮点数运算的精度丢失问题","children":[]},{"level":3,"title":"超过 long 整型的数据应该如何表示？","slug":"超过-long-整型的数据应该如何表示","link":"#超过-long-整型的数据应该如何表示","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1643618915000,"updatedTime":1675243713000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":24},{"name":"sam","email":"sam2008ext@gmail.com","commits":17},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Amos Chu","email":"hongweichu.ouc@gmail.com","commits":1},{"name":"Guide哥","email":"koushuangbwcx@163.com","commits":1},{"name":"Horstson","email":"41159121+Horstson@users.noreply.github.com","commits":1},{"name":"Raxcl","email":"70327089+Raxcl@users.noreply.github.com","commits":1},{"name":"ahh556","email":"86578895+ahh556@users.noreply.github.com","commits":1},{"name":"cckkrr","email":"51375775+cckkrr@users.noreply.github.com","commits":1},{"name":"daniubi","email":"804703017@qq.com","commits":1}]},"readingTime":{"minutes":36.31,"words":10892},"filePathRelative":"java/basis/java-basic-questions-01.md","localizedDate":"2022年1月31日","excerpt":"<h2> 基础概念与常识</h2>\\n<h3> Java 语言有哪些特点?</h3>\\n<ol>\\n<li>简单易学；</li>\\n<li>面向对象（封装，继承，多态）；</li>\\n<li>平台无关性（ Java 虚拟机实现平台无关性）；</li>\\n<li>支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）；</li>\\n<li>可靠性；</li>\\n<li>安全性；</li>\\n<li>支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）；</li>\\n<li>编译与解释并存；</li>\\n</ol>","copyright":{},"autoDesc":true}');export{e as data};
