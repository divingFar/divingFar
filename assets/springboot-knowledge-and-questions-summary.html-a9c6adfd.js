const t=JSON.parse('{"key":"v-216f3e61","path":"/system-design/framework/spring/springboot-knowledge-and-questions-summary.html","title":"SpringBoot常见面试题总结","lang":"zh-CN","frontmatter":{"title":"SpringBoot常见面试题总结","category":"框架","tag":["Spring"],"description":"SpringBoot 常见面试题总结 1. 简单介绍一下 Spring?有啥缺点? Spring 是重量级企业开发框架 Enterprise JavaBean（EJB） 的替代品，Spring 为企业级 Java 开发提供了一种相对简单的方法，通过 依赖注入 和 面向切面编程 ，用简单的 Java 对象（Plain Old Java Object，POJO） 实现了 EJB 的功能 虽然 Spring 的组件代码是轻量级的，但它的配置却是重量级的（需要大量 XML 配置） 。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/framework/spring/springboot-knowledge-and-questions-summary.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"SpringBoot常见面试题总结"}],["meta",{"property":"og:description","content":"SpringBoot 常见面试题总结 1. 简单介绍一下 Spring?有啥缺点? Spring 是重量级企业开发框架 Enterprise JavaBean（EJB） 的替代品，Spring 为企业级 Java 开发提供了一种相对简单的方法，通过 依赖注入 和 面向切面编程 ，用简单的 Java 对象（Plain Old Java Object，POJO） 实现了 EJB 的功能 虽然 Spring 的组件代码是轻量级的，但它的配置却是重量级的（需要大量 XML 配置） 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-21T15:29:46.000Z"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:modified_time","content":"2023-03-21T15:29:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot常见面试题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-21T15:29:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"1. 简单介绍一下 Spring?有啥缺点?","slug":"_1-简单介绍一下-spring-有啥缺点","link":"#_1-简单介绍一下-spring-有啥缺点","children":[]},{"level":3,"title":"2.  为什么要有 SpringBoot?","slug":"_2-为什么要有-springboot","link":"#_2-为什么要有-springboot","children":[]},{"level":3,"title":"3.  说出使用 Spring Boot 的主要优点","slug":"_3-说出使用-spring-boot-的主要优点","link":"#_3-说出使用-spring-boot-的主要优点","children":[]},{"level":3,"title":"4.什么是 Spring Boot Starters?","slug":"_4-什么是-spring-boot-starters","link":"#_4-什么是-spring-boot-starters","children":[]},{"level":3,"title":"5. Spring Boot 支持哪些内嵌 Servlet 容器？","slug":"_5-spring-boot-支持哪些内嵌-servlet-容器","link":"#_5-spring-boot-支持哪些内嵌-servlet-容器","children":[]},{"level":3,"title":"6. 如何在 Spring Boot 应用程序中使用 Jetty 而不是 Tomcat?","slug":"_6-如何在-spring-boot-应用程序中使用-jetty-而不是-tomcat","link":"#_6-如何在-spring-boot-应用程序中使用-jetty-而不是-tomcat","children":[]},{"level":3,"title":"7. 介绍一下@SpringBootApplication 注解","slug":"_7-介绍一下-springbootapplication-注解","link":"#_7-介绍一下-springbootapplication-注解","children":[]},{"level":3,"title":"8. Spring Boot 的自动配置是如何实现的?","slug":"_8-spring-boot-的自动配置是如何实现的","link":"#_8-spring-boot-的自动配置是如何实现的","children":[]},{"level":3,"title":"9. 开发 RESTful Web 服务常用的注解有哪些？","slug":"_9-开发-restful-web-服务常用的注解有哪些","link":"#_9-开发-restful-web-服务常用的注解有哪些","children":[]},{"level":3,"title":"10. Spirng Boot 常用的两种配置文件","slug":"_10-spirng-boot-常用的两种配置文件","link":"#_10-spirng-boot-常用的两种配置文件","children":[]},{"level":3,"title":"11. 什么是 YAML？YAML 配置的优势在哪里 ?","slug":"_11-什么是-yaml-yaml-配置的优势在哪里","link":"#_11-什么是-yaml-yaml-配置的优势在哪里","children":[]},{"level":3,"title":"12. Spring Boot 常用的读取配置文件的方法有哪些？","slug":"_12-spring-boot-常用的读取配置文件的方法有哪些","link":"#_12-spring-boot-常用的读取配置文件的方法有哪些","children":[]},{"level":3,"title":"13. Spring Boot 加载配置文件的优先级了解么？","slug":"_13-spring-boot-加载配置文件的优先级了解么","link":"#_13-spring-boot-加载配置文件的优先级了解么","children":[]},{"level":3,"title":"14. 常用的 Bean 映射工具有哪些？","slug":"_14-常用的-bean-映射工具有哪些","link":"#_14-常用的-bean-映射工具有哪些","children":[]},{"level":3,"title":"15. Spring Boot 如何监控系统实际运行状况？","slug":"_15-spring-boot-如何监控系统实际运行状况","link":"#_15-spring-boot-如何监控系统实际运行状况","children":[]},{"level":3,"title":"16. Spring Boot 如何做请求参数校验？","slug":"_16-spring-boot-如何做请求参数校验","link":"#_16-spring-boot-如何做请求参数校验","children":[]},{"level":3,"title":"17. 如何使用 Spring Boot 实现全局异常处理？","slug":"_17-如何使用-spring-boot-实现全局异常处理","link":"#_17-如何使用-spring-boot-实现全局异常处理","children":[]},{"level":3,"title":"18. Spring Boot 中如何实现定时任务 ?","slug":"_18-spring-boot-中如何实现定时任务","link":"#_18-spring-boot-中如何实现定时任务","children":[]}],"git":{"createdTime":1655097266000,"updatedTime":1679412586000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":6},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":2},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1},{"name":"diving-cloud","email":"43922483+diving-cloud@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.47,"words":4041},"filePathRelative":"system-design/framework/spring/springboot-knowledge-and-questions-summary.md","localizedDate":"2022年6月13日","excerpt":"<h1> SpringBoot 常见面试题总结</h1>\\n<h3> 1. 简单介绍一下 Spring?有啥缺点?</h3>\\n<p>Spring 是重量级企业开发框架 <strong>Enterprise JavaBean（EJB）</strong> 的替代品，Spring 为企业级 Java 开发提供了一种相对简单的方法，通过 <strong>依赖注入</strong> 和 <strong>面向切面</strong>编程 ，用简单的 <strong>Java 对象（Plain Old Java Object，POJO）</strong> 实现了 EJB 的功能</p>\\n<p><strong>虽然 Spring 的组件代码是轻量级的，但它的配置却是重量级的（需要大量 XML 配置） 。</strong></p>","copyright":{},"autoDesc":true}');export{t as data};