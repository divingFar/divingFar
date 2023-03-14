const l=JSON.parse('{"key":"v-3930485a","path":"/cs-basics/algorithms/10-classical-sorting-algorithms.html","title":"十大经典排序算法总结","lang":"zh-CN","frontmatter":{"title":"十大经典排序算法总结","category":"计算机基础","tag":["算法"],"description":"本文转自：http://www.guoyaohua.com/sorting.html，JavaGuide 对其做了补充完善。 引言 所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。排序算法，就是如何使得记录按照要求排列的方法。排序算法在很多领域得到相当地重视，尤其是在大量数据的处理方面。一个优秀的算法可以节省大量的资源。在各个领域中考虑到数据的各种限制和规范，要得到一个符合实际的优秀算法，得经过大量的推理和分析。 两年前，我曾在博客园发布过一篇《十大经典排序算法最强总结（含 JAVA 代码实现）》博文，简要介绍了比较经典的十大排序算法，不过在之前的博文中，仅给出了 Java 版本的代码实现，并且有一些细节上的错误。所以，今天重新写一篇文章，深入了解下十大经典排序算法的原理及实现。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/algorithms/10-classical-sorting-algorithms.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"十大经典排序算法总结"}],["meta",{"property":"og:description","content":"本文转自：http://www.guoyaohua.com/sorting.html，JavaGuide 对其做了补充完善。 引言 所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。排序算法，就是如何使得记录按照要求排列的方法。排序算法在很多领域得到相当地重视，尤其是在大量数据的处理方面。一个优秀的算法可以节省大量的资源。在各个领域中考虑到数据的各种限制和规范，要得到一个符合实际的优秀算法，得经过大量的推理和分析。 两年前，我曾在博客园发布过一篇《十大经典排序算法最强总结（含 JAVA 代码实现）》博文，简要介绍了比较经典的十大排序算法，不过在之前的博文中，仅给出了 Java 版本的代码实现，并且有一些细节上的错误。所以，今天重新写一篇文章，深入了解下十大经典排序算法的原理及实现。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-22T07:40:30.000Z"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:modified_time","content":"2022-09-22T07:40:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"十大经典排序算法总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-09-22T07:40:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"术语说明","slug":"术语说明","link":"#术语说明","children":[]},{"level":3,"title":"算法分类","slug":"算法分类","link":"#算法分类","children":[]}]},{"level":2,"title":"冒泡排序 (Bubble Sort)","slug":"冒泡排序-bubble-sort","link":"#冒泡排序-bubble-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤","link":"#算法步骤","children":[]},{"level":3,"title":"图解算法","slug":"图解算法","link":"#图解算法","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":3,"title":"算法分析","slug":"算法分析","link":"#算法分析","children":[]}]},{"level":2,"title":"选择排序 (Selection Sort)","slug":"选择排序-selection-sort","link":"#选择排序-selection-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-1","link":"#算法步骤-1","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-1","link":"#图解算法-1","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-1","link":"#代码实现-1","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-1","link":"#算法分析-1","children":[]}]},{"level":2,"title":"插入排序 (Insertion Sort)","slug":"插入排序-insertion-sort","link":"#插入排序-insertion-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-2","link":"#算法步骤-2","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-2","link":"#图解算法-2","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-2","link":"#代码实现-2","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-2","link":"#算法分析-2","children":[]}]},{"level":2,"title":"希尔排序 (Shell Sort)","slug":"希尔排序-shell-sort","link":"#希尔排序-shell-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-3","link":"#算法步骤-3","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-3","link":"#图解算法-3","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-3","link":"#代码实现-3","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-3","link":"#算法分析-3","children":[]}]},{"level":2,"title":"归并排序 (Merge Sort)","slug":"归并排序-merge-sort","link":"#归并排序-merge-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-4","link":"#算法步骤-4","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-4","link":"#图解算法-4","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-4","link":"#代码实现-4","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-4","link":"#算法分析-4","children":[]}]},{"level":2,"title":"快速排序 (Quick Sort)","slug":"快速排序-quick-sort","link":"#快速排序-quick-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-5","link":"#算法步骤-5","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-5","link":"#图解算法-5","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-5","link":"#代码实现-5","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-5","link":"#算法分析-5","children":[]}]},{"level":2,"title":"堆排序 (Heap Sort)","slug":"堆排序-heap-sort","link":"#堆排序-heap-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-6","link":"#算法步骤-6","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-6","link":"#图解算法-6","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-6","link":"#代码实现-6","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-6","link":"#算法分析-6","children":[]}]},{"level":2,"title":"计数排序 (Counting Sort)","slug":"计数排序-counting-sort","link":"#计数排序-counting-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-7","link":"#算法步骤-7","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-7","link":"#图解算法-7","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-7","link":"#代码实现-7","children":[]}]},{"level":2,"title":"算法分析","slug":"算法分析-7","link":"#算法分析-7","children":[]},{"level":2,"title":"桶排序 (Bucket Sort)","slug":"桶排序-bucket-sort","link":"#桶排序-bucket-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-8","link":"#算法步骤-8","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-8","link":"#图解算法-8","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-8","link":"#代码实现-8","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-8","link":"#算法分析-8","children":[]}]},{"level":2,"title":"基数排序 (Radix Sort)","slug":"基数排序-radix-sort","link":"#基数排序-radix-sort","children":[{"level":3,"title":"算法步骤","slug":"算法步骤-9","link":"#算法步骤-9","children":[]},{"level":3,"title":"图解算法","slug":"图解算法-9","link":"#图解算法-9","children":[]},{"level":3,"title":"代码实现","slug":"代码实现-9","link":"#代码实现-9","children":[]},{"level":3,"title":"算法分析","slug":"算法分析-9","link":"#算法分析-9","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1653620939000,"updatedTime":1663832430000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"chensiquan","email":"40712868+SiQuan77@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":21.54,"words":6463},"filePathRelative":"cs-basics/algorithms/10-classical-sorting-algorithms.md","localizedDate":"2022年5月27日","excerpt":"<blockquote>\\n<p>本文转自：http://www.guoyaohua.com/sorting.html，JavaGuide 对其做了补充完善。</p>\\n</blockquote>\\n<h2> 引言</h2>\\n<p>所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。排序算法，就是如何使得记录按照要求排列的方法。排序算法在很多领域得到相当地重视，尤其是在大量数据的处理方面。一个优秀的算法可以节省大量的资源。在各个领域中考虑到数据的各种限制和规范，要得到一个符合实际的优秀算法，得经过大量的推理和分析。</p>\\n<p>两年前，我曾在<a href=\\"https://www.cnblogs.com/guoyaohua/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">博客园</a>发布过一篇<a href=\\"https://www.cnblogs.com/guoyaohua/p/8600214.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">《十大经典排序算法最强总结（含 JAVA 代码实现）》</a>博文，简要介绍了比较经典的十大排序算法，不过在之前的博文中，仅给出了 Java 版本的代码实现，并且有一些细节上的错误。所以，今天重新写一篇文章，深入了解下十大经典排序算法的原理及实现。</p>","copyright":{},"autoDesc":true}');export{l as data};
