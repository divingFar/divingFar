const e=JSON.parse('{"key":"v-4f15bdda","path":"/system-design/framework/spring/spring-knowledge-and-questions-summary.html","title":"Spring 常见面试题总结","lang":"zh-CN","frontmatter":{"title":"Spring 常见面试题总结","category":"框架","tag":["Spring"],"description":"这篇文章主要是想通过一些问题，加深大家对于 Spring 的理解，所以不会涉及太多的代码！ 下面的很多问题我自己在使用 Spring 的过程中也并没有注意，自己也是临时查阅了很多资料和书籍补上的。网上也有一些很多关于 Spring 常见问题/面试题整理的文章，我感觉大部分都是互相 copy，而且很多问题也不是很好，有些回答也存在问题。所以，自己花了一周的业余时间整理了一下，希望对大家有帮助。 Spring 基础 什么是 Spring 框架? Spring 是一款开源的轻量级 Java 开发框架，旨在提高开发人员的开发效率以及系统的可维护性。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Spring 常见面试题总结"}],["meta",{"property":"og:description","content":"这篇文章主要是想通过一些问题，加深大家对于 Spring 的理解，所以不会涉及太多的代码！ 下面的很多问题我自己在使用 Spring 的过程中也并没有注意，自己也是临时查阅了很多资料和书籍补上的。网上也有一些很多关于 Spring 常见问题/面试题整理的文章，我感觉大部分都是互相 copy，而且很多问题也不是很好，有些回答也存在问题。所以，自己花了一周的业余时间整理了一下，希望对大家有帮助。 Spring 基础 什么是 Spring 框架? Spring 是一款开源的轻量级 Java 开发框架，旨在提高开发人员的开发效率以及系统的可维护性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-13T03:34:21.000Z"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:modified_time","content":"2023-03-13T03:34:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 常见面试题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-13T03:34:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Spring 基础","slug":"spring-基础","link":"#spring-基础","children":[{"level":3,"title":"什么是 Spring 框架?","slug":"什么是-spring-框架","link":"#什么是-spring-框架","children":[]},{"level":3,"title":"Spring 包含的模块有哪些？","slug":"spring-包含的模块有哪些","link":"#spring-包含的模块有哪些","children":[]},{"level":3,"title":"Spring,Spring MVC,Spring Boot 之间什么关系?","slug":"spring-spring-mvc-spring-boot-之间什么关系","link":"#spring-spring-mvc-spring-boot-之间什么关系","children":[]}]},{"level":2,"title":"Spring IoC","slug":"spring-ioc","link":"#spring-ioc","children":[{"level":3,"title":"谈谈自己对于 Spring IoC 的了解","slug":"谈谈自己对于-spring-ioc-的了解","link":"#谈谈自己对于-spring-ioc-的了解","children":[]},{"level":3,"title":"什么是 Spring Bean？","slug":"什么是-spring-bean","link":"#什么是-spring-bean","children":[]},{"level":3,"title":"将一个类声明为 Bean 的注解有哪些?","slug":"将一个类声明为-bean-的注解有哪些","link":"#将一个类声明为-bean-的注解有哪些","children":[]},{"level":3,"title":"@Component 和 @Bean 的区别是什么？","slug":"component-和-bean-的区别是什么","link":"#component-和-bean-的区别是什么","children":[]},{"level":3,"title":"注入 Bean 的注解有哪些？","slug":"注入-bean-的注解有哪些","link":"#注入-bean-的注解有哪些","children":[]},{"level":3,"title":"@Autowired 和 @Resource 的区别是什么？","slug":"autowired-和-resource-的区别是什么","link":"#autowired-和-resource-的区别是什么","children":[]},{"level":3,"title":"Bean 的作用域有哪些?","slug":"bean-的作用域有哪些","link":"#bean-的作用域有哪些","children":[]},{"level":3,"title":"单例 Bean 的线程安全问题了解吗？","slug":"单例-bean-的线程安全问题了解吗","link":"#单例-bean-的线程安全问题了解吗","children":[]},{"level":3,"title":"Bean 的生命周期了解么?","slug":"bean-的生命周期了解么","link":"#bean-的生命周期了解么","children":[]}]},{"level":2,"title":"Spring AoP","slug":"spring-aop","link":"#spring-aop","children":[{"level":3,"title":"谈谈自己对于 AOP 的了解","slug":"谈谈自己对于-aop-的了解","link":"#谈谈自己对于-aop-的了解","children":[]},{"level":3,"title":"Spring AOP 和 AspectJ AOP 有什么区别？","slug":"spring-aop-和-aspectj-aop-有什么区别","link":"#spring-aop-和-aspectj-aop-有什么区别","children":[]},{"level":3,"title":"AspectJ 定义的通知类型有哪些？","slug":"aspectj-定义的通知类型有哪些","link":"#aspectj-定义的通知类型有哪些","children":[]},{"level":3,"title":"多个切面的执行顺序如何控制？","slug":"多个切面的执行顺序如何控制","link":"#多个切面的执行顺序如何控制","children":[]}]},{"level":2,"title":"Spring MVC","slug":"spring-mvc","link":"#spring-mvc","children":[{"level":3,"title":"说说自己对于 Spring MVC 了解?","slug":"说说自己对于-spring-mvc-了解","link":"#说说自己对于-spring-mvc-了解","children":[]},{"level":3,"title":"Spring MVC 的核心组件有哪些？","slug":"spring-mvc-的核心组件有哪些","link":"#spring-mvc-的核心组件有哪些","children":[]},{"level":3,"title":"SpringMVC 工作原理了解吗?","slug":"springmvc-工作原理了解吗","link":"#springmvc-工作原理了解吗","children":[]},{"level":3,"title":"统一异常处理怎么做？","slug":"统一异常处理怎么做","link":"#统一异常处理怎么做","children":[]}]},{"level":2,"title":"Spring 框架中用到了哪些设计模式？","slug":"spring-框架中用到了哪些设计模式","link":"#spring-框架中用到了哪些设计模式","children":[]},{"level":2,"title":"Spring 事务","slug":"spring-事务","link":"#spring-事务","children":[{"level":3,"title":"Spring 管理事务的方式有几种？","slug":"spring-管理事务的方式有几种","link":"#spring-管理事务的方式有几种","children":[]},{"level":3,"title":"Spring 事务中哪几种事务传播行为?","slug":"spring-事务中哪几种事务传播行为","link":"#spring-事务中哪几种事务传播行为","children":[]},{"level":3,"title":"Spring 事务中的隔离级别有哪几种?","slug":"spring-事务中的隔离级别有哪几种","link":"#spring-事务中的隔离级别有哪几种","children":[]},{"level":3,"title":"@Transactional(rollbackFor = Exception.class)注解了解吗？","slug":"transactional-rollbackfor-exception-class-注解了解吗","link":"#transactional-rollbackfor-exception-class-注解了解吗","children":[]}]},{"level":2,"title":"Spring Data JPA","slug":"spring-data-jpa","link":"#spring-data-jpa","children":[{"level":3,"title":"如何使用 JPA 在数据库中非持久化一个字段？","slug":"如何使用-jpa-在数据库中非持久化一个字段","link":"#如何使用-jpa-在数据库中非持久化一个字段","children":[]},{"level":3,"title":"JPA 的审计功能是做什么的？有什么用？","slug":"jpa-的审计功能是做什么的-有什么用","link":"#jpa-的审计功能是做什么的-有什么用","children":[]},{"level":3,"title":"实体之间的关联关系注解有哪些？","slug":"实体之间的关联关系注解有哪些","link":"#实体之间的关联关系注解有哪些","children":[]}]},{"level":2,"title":"Spring Security","slug":"spring-security","link":"#spring-security","children":[{"level":3,"title":"有哪些控制请求访问权限的方法？","slug":"有哪些控制请求访问权限的方法","link":"#有哪些控制请求访问权限的方法","children":[]},{"level":3,"title":"hasRole 和 hasAuthority 有区别吗？","slug":"hasrole-和-hasauthority-有区别吗","link":"#hasrole-和-hasauthority-有区别吗","children":[]},{"level":3,"title":"如何对密码进行加密？","slug":"如何对密码进行加密","link":"#如何对密码进行加密","children":[]},{"level":3,"title":"如何优雅更换系统使用的加密算法？","slug":"如何优雅更换系统使用的加密算法","link":"#如何优雅更换系统使用的加密算法","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1639388212000,"updatedTime":1678678461000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":12},{"name":"Guide","email":"koushuangbwcx@163.com","commits":4},{"name":"liubobo","email":"284115962@qq.com","commits":3},{"name":"fjut_shark","email":"1946955309@qq.com","commits":2},{"name":"hezongkui","email":"hezongkui@kuaishou.com","commits":1},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":1}]},"readingTime":{"minutes":30.5,"words":9150},"filePathRelative":"system-design/framework/spring/spring-knowledge-and-questions-summary.md","localizedDate":"2021年12月13日","excerpt":"<p>这篇文章主要是想通过一些问题，加深大家对于 Spring 的理解，所以不会涉及太多的代码！</p>\\n<p>下面的很多问题我自己在使用 Spring 的过程中也并没有注意，自己也是临时查阅了很多资料和书籍补上的。网上也有一些很多关于 Spring 常见问题/面试题整理的文章，我感觉大部分都是互相 copy，而且很多问题也不是很好，有些回答也存在问题。所以，自己花了一周的业余时间整理了一下，希望对大家有帮助。</p>\\n<h2> Spring 基础</h2>\\n<h3> 什么是 Spring 框架?</h3>\\n<p>Spring 是一款开源的轻量级 Java 开发框架，旨在提高开发人员的开发效率以及系统的可维护性。</p>","copyright":{},"autoDesc":true}');export{e as data};
