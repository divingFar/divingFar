const e=JSON.parse('{"key":"v-c0bb9b3a","path":"/java/new-features/java14.html","title":"Java 14 新特性概览","lang":"zh-CN","frontmatter":{"title":"Java 14 新特性概览","category":"Java","tag":["Java新特性"],"description":"空指针异常精准提示 通过 JVM 参数中添加-XX:+ShowCodeDetailsInExceptionMessages，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。 a.b.c.i = 99; // 假设这段代码会发生空指针","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/docs/java/new-features/java14.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"Java 14 新特性概览"}],["meta",{"property":"og:description","content":"空指针异常精准提示 通过 JVM 参数中添加-XX:+ShowCodeDetailsInExceptionMessages，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。 a.b.c.i = 99; // 假设这段代码会发生空指针"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-28T12:35:46.000Z"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2022-09-28T12:35:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 14 新特性概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-28T12:35:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"空指针异常精准提示","slug":"空指针异常精准提示","link":"#空指针异常精准提示","children":[]},{"level":2,"title":"switch 的增强(转正)","slug":"switch-的增强-转正","link":"#switch-的增强-转正","children":[]},{"level":2,"title":"预览新特性","slug":"预览新特性","link":"#预览新特性","children":[{"level":3,"title":"record 关键字","slug":"record-关键字","link":"#record-关键字","children":[]},{"level":3,"title":"文本块","slug":"文本块","link":"#文本块","children":[]},{"level":3,"title":"instanceof 增强","slug":"instanceof-增强","link":"#instanceof-增强","children":[]}]},{"level":2,"title":"Java14 其他特性","slug":"java14-其他特性","link":"#java14-其他特性","children":[]}],"git":{"createdTime":1664368546000,"updatedTime":1664368546000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":2.63,"words":789},"filePathRelative":"java/new-features/java14.md","localizedDate":"2022年9月28日","excerpt":"<h2> 空指针异常精准提示</h2>\\n<p>通过 JVM 参数中添加<code>-XX:+ShowCodeDetailsInExceptionMessages</code>，可以在空指针异常中获取更为详细的调用信息，更快的定位和解决问题。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>a<span class=\\"token punctuation\\">.</span>b<span class=\\"token punctuation\\">.</span>c<span class=\\"token punctuation\\">.</span>i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">99</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 假设这段代码会发生空指针</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
