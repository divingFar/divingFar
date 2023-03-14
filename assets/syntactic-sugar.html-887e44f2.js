const e=JSON.parse('{"key":"v-ee5ccb16","path":"/java/basis/syntactic-sugar.html","title":"Java 语法糖详解","lang":"zh-CN","frontmatter":{"title":"Java 语法糖详解","category":"Java","tag":["Java基础"],"head":[["meta",{"name":"keywords","content":"Java 语法糖"}],["meta",{"name":"description","content":"这篇文章介绍了 12 种 Java 中常用的语法糖。所谓语法糖就是提供给开发人员便于开发的一种语法而已。但是这种语法只有开发人员认识。要想被执行，需要进行解糖，即转成 JVM 认识的语法。当我们把语法糖解糖之后，你就会发现其实我们日常使用的这些方便的语法，其实都是一些其他更简单的语法构成的。有了这些语法糖，我们在日常开发的时候可以大大提升效率，但是同时也要避免过渡使用。使用之前最好了解下原理，避免掉坑。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/java/basis/syntactic-sugar.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Java 语法糖详解"}],["meta",{"property":"og:description","content":"作者：Hollis 原文：https://mp.weixin.qq.com/s/o4XdEMq1DL-nBS-f8Za5Aw 语法糖是大厂 Java 面试常问的一个知识点。 本文从 Java 编译原理角度，深入字节码及 class 文件，抽丝剥茧，了解 Java 中的语法糖原理及用法，帮助大家在学会如何使用 Java 语法糖的同时，了解这些语法糖背后的原理。 什么是语法糖？ 语法糖（Syntactic Sugar） 也称糖衣语法，是英国计算机学家 Peter.J.Landin 发明的一个术语，指在计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。简而言之，语法糖让程序更加简洁，有更高的可读性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-29T11:22:15.000Z"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2023-01-29T11:22:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 语法糖详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-29T11:22:15.000Z\\",\\"author\\":[]}"]],"description":"作者：Hollis 原文：https://mp.weixin.qq.com/s/o4XdEMq1DL-nBS-f8Za5Aw 语法糖是大厂 Java 面试常问的一个知识点。 本文从 Java 编译原理角度，深入字节码及 class 文件，抽丝剥茧，了解 Java 中的语法糖原理及用法，帮助大家在学会如何使用 Java 语法糖的同时，了解这些语法糖背后的原理。 什么是语法糖？ 语法糖（Syntactic Sugar） 也称糖衣语法，是英国计算机学家 Peter.J.Landin 发明的一个术语，指在计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。简而言之，语法糖让程序更加简洁，有更高的可读性。"},"headers":[{"level":2,"title":"什么是语法糖？","slug":"什么是语法糖","link":"#什么是语法糖","children":[]},{"level":2,"title":"Java 中有哪些常见的语法糖？","slug":"java-中有哪些常见的语法糖","link":"#java-中有哪些常见的语法糖","children":[{"level":3,"title":"switch 支持 String 与枚举","slug":"switch-支持-string-与枚举","link":"#switch-支持-string-与枚举","children":[]},{"level":3,"title":"泛型","slug":"泛型","link":"#泛型","children":[]},{"level":3,"title":"自动装箱与拆箱","slug":"自动装箱与拆箱","link":"#自动装箱与拆箱","children":[]},{"level":3,"title":"可变长参数","slug":"可变长参数","link":"#可变长参数","children":[]},{"level":3,"title":"枚举","slug":"枚举","link":"#枚举","children":[]},{"level":3,"title":"内部类","slug":"内部类","link":"#内部类","children":[]},{"level":3,"title":"条件编译","slug":"条件编译","link":"#条件编译","children":[]},{"level":3,"title":"断言","slug":"断言","link":"#断言","children":[]},{"level":3,"title":"数值字面量","slug":"数值字面量","link":"#数值字面量","children":[]},{"level":3,"title":"for-each","slug":"for-each","link":"#for-each","children":[]},{"level":3,"title":"try-with-resource","slug":"try-with-resource","link":"#try-with-resource","children":[]},{"level":3,"title":"Lambda 表达式","slug":"lambda-表达式","link":"#lambda-表达式","children":[]}]},{"level":2,"title":"可能遇到的坑","slug":"可能遇到的坑","link":"#可能遇到的坑","children":[{"level":3,"title":"泛型","slug":"泛型-1","link":"#泛型-1","children":[]},{"level":3,"title":"自动装箱与拆箱","slug":"自动装箱与拆箱-1","link":"#自动装箱与拆箱-1","children":[]},{"level":3,"title":"增强 for 循环","slug":"增强-for-循环","link":"#增强-for-循环","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1660826701000,"updatedTime":1674991335000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"EscapeReality846089495","email":"846089495@qq.com","commits":1}]},"readingTime":{"minutes":19.38,"words":5813},"filePathRelative":"java/basis/syntactic-sugar.md","localizedDate":"2022年8月18日","excerpt":"<blockquote>\\n<p>作者：Hollis</p>\\n<p>原文：https://mp.weixin.qq.com/s/o4XdEMq1DL-nBS-f8Za5Aw</p>\\n</blockquote>\\n<p>语法糖是大厂 Java 面试常问的一个知识点。</p>\\n<p>本文从 Java 编译原理角度，深入字节码及 class 文件，抽丝剥茧，了解 Java 中的语法糖原理及用法，帮助大家在学会如何使用 Java 语法糖的同时，了解这些语法糖背后的原理。</p>\\n<h2> 什么是语法糖？</h2>\\n<p><strong>语法糖（Syntactic Sugar）</strong> 也称糖衣语法，是英国计算机学家 Peter.J.Landin 发明的一个术语，指在计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。简而言之，语法糖让程序更加简洁，有更高的可读性。</p>","copyright":{},"autoDesc":true}');export{e as data};
