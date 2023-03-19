const e=JSON.parse('{"key":"v-f75bbfdc","path":"/java/jvm/class-loading-process.html","title":"类加载过程详解","lang":"zh-CN","frontmatter":{"title":"类加载过程详解","category":"Java","tag":["JVM"],"description":"类的生命周期 类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。 这 7 个阶段的顺序如下图所示：","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/jvm/class-loading-process.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"类加载过程详解"}],["meta",{"property":"og:description","content":"类的生命周期 类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。 这 7 个阶段的顺序如下图所示："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-06T07:07:48.000Z"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-03-06T07:07:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载过程详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-06T07:07:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"类的生命周期","slug":"类的生命周期","link":"#类的生命周期","children":[]},{"level":2,"title":"类加载过程","slug":"类加载过程","link":"#类加载过程","children":[{"level":3,"title":"加载","slug":"加载","link":"#加载","children":[]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":3,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":3,"title":"解析","slug":"解析","link":"#解析","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}]},{"level":2,"title":"类卸载","slug":"类卸载","link":"#类卸载","children":[]}],"git":{"createdTime":1636463233000,"updatedTime":1678086468000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"guide","email":"koushuangbwcx@163.com","commits":1},{"name":"zdkcomeon","email":"89736679+zdkcomeon@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.99,"words":3296},"filePathRelative":"java/jvm/class-loading-process.md","localizedDate":"2021年11月9日","excerpt":"<h2> 类的生命周期</h2>\\n<p>类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。</p>\\n<p>这 7 个阶段的顺序如下图所示：</p>\\n<p><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/java/jvm/lifecycle-of-a-class.png\\" alt=\\"一个类的完整生命周期\\"></p>","copyright":{},"autoDesc":true}');export{e as data};
