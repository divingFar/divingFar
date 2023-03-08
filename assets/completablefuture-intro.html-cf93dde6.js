const e=JSON.parse('{"key":"v-808f5656","path":"/java/concurrent/completablefuture-intro.html","title":"CompletableFuture入门","lang":"zh-CN","frontmatter":{"title":"CompletableFuture入门","category":"Java","tag":["Java并发"],"description":"自己在项目中使用 CompletableFuture 比较多，看到很多开源框架中也大量使用到了 CompletableFuture 。 因此，专门写一篇文章来介绍这个 Java 8 才被引入的一个非常有用的用于异步编程的类。 简单介绍 CompletableFuture 同时实现了 Future 和 CompletionStage 接口。 public class CompletableFuture&lt;T&gt; implements Future&lt;T&gt;, CompletionStage&lt;T&gt; { }","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/concurrent/completablefuture-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"CompletableFuture入门"}],["meta",{"property":"og:description","content":"自己在项目中使用 CompletableFuture 比较多，看到很多开源框架中也大量使用到了 CompletableFuture 。 因此，专门写一篇文章来介绍这个 Java 8 才被引入的一个非常有用的用于异步编程的类。 简单介绍 CompletableFuture 同时实现了 Future 和 CompletionStage 接口。 public class CompletableFuture&lt;T&gt; implements Future&lt;T&gt;, CompletionStage&lt;T&gt; { }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-13T10:18:26.000Z"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-02-13T10:18:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CompletableFuture入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-13T10:18:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简单介绍","slug":"简单介绍","link":"#简单介绍","children":[]},{"level":2,"title":"常见操作","slug":"常见操作","link":"#常见操作","children":[{"level":3,"title":"创建 CompletableFuture","slug":"创建-completablefuture","link":"#创建-completablefuture","children":[]},{"level":3,"title":"处理异步结算的结果","slug":"处理异步结算的结果","link":"#处理异步结算的结果","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]},{"level":3,"title":"组合 CompletableFuture","slug":"组合-completablefuture","link":"#组合-completablefuture","children":[]},{"level":3,"title":"并行运行多个 CompletableFuture","slug":"并行运行多个-completablefuture","link":"#并行运行多个-completablefuture","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1676283506000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":8.74,"words":2622},"filePathRelative":"java/concurrent/completablefuture-intro.md","localizedDate":"2021年11月9日","excerpt":"<p>自己在项目中使用 <code>CompletableFuture</code> 比较多，看到很多开源框架中也大量使用到了 <code>CompletableFuture</code> 。</p>\\n<p>因此，专门写一篇文章来介绍这个 Java 8 才被引入的一个非常有用的用于异步编程的类。</p>\\n<h2> 简单介绍</h2>\\n<p><code>CompletableFuture</code> 同时实现了 <code>Future</code> 和 <code>CompletionStage</code> 接口。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CompletableFuture</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Future</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">CompletionStage</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">T</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};