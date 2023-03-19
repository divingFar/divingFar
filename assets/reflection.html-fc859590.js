const e=JSON.parse('{"key":"v-78b1dd6e","path":"/java/basis/reflection.html","title":"Java 反射机制详解","lang":"zh-CN","frontmatter":{"title":"Java 反射机制详解","category":"Java","tag":["Java基础"],"description":"何为反射？ 如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。 反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。 通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。 反射的应用场景了解么？ 像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。 但是，这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/basis/reflection.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Java 反射机制详解"}],["meta",{"property":"og:description","content":"何为反射？ 如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。 反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。 通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。 反射的应用场景了解么？ 像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。 但是，这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-07-24T09:10:58.000Z"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:modified_time","content":"2022-07-24T09:10:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 反射机制详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-07-24T09:10:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"何为反射？","slug":"何为反射","link":"#何为反射","children":[]},{"level":2,"title":"反射的应用场景了解么？","slug":"反射的应用场景了解么","link":"#反射的应用场景了解么","children":[]},{"level":2,"title":"谈谈反射机制的优缺点","slug":"谈谈反射机制的优缺点","link":"#谈谈反射机制的优缺点","children":[]},{"level":2,"title":"反射实战","slug":"反射实战","link":"#反射实战","children":[{"level":3,"title":"获取 Class 对象的四种方式","slug":"获取-class-对象的四种方式","link":"#获取-class-对象的四种方式","children":[]},{"level":3,"title":"反射的一些基本操作","slug":"反射的一些基本操作","link":"#反射的一些基本操作","children":[]}]}],"git":{"createdTime":1642993265000,"updatedTime":1658653858000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"sam","email":"sam2008ext@gmail.com","commits":2},{"name":"Guide哥","email":"koushuangbwcx@163.com","commits":1},{"name":"Sr","email":"39112652+Itswag@users.noreply.github.com","commits":1},{"name":"hanfangyuan4396","email":"43166868+hanfangyuan4396@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.94,"words":1181},"filePathRelative":"java/basis/reflection.md","localizedDate":"2022年1月24日","excerpt":"<h2> 何为反射？</h2>\\n<p>如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。</p>\\n<p>反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。</p>\\n<p>通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。</p>\\n<h2> 反射的应用场景了解么？</h2>\\n<p>像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。</p>\\n<p>但是，这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。</p>","copyright":{},"autoDesc":true}');export{e as data};
