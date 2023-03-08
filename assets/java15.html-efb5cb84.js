import{_ as a,X as n,Y as s,a2 as e}from"./framework-f0219f66.js";const t={},p=e(`<h2 id="charsequence" tabindex="-1"><a class="header-anchor" href="#charsequence" aria-hidden="true">#</a> CharSequence</h2><p><code>CharSequence</code> 接口添加了一个默认方法 <code>isEmpty()</code> 来判断字符序列为空，如果是则返回 true。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="treemap" tabindex="-1"><a class="header-anchor" href="#treemap" aria-hidden="true">#</a> TreeMap</h2><p><code>TreeMap</code> 新引入了下面这些方法：</p><ul><li><code>putIfAbsent()</code></li><li><code>computeIfAbsent()</code></li><li><code>computeIfPresent()</code></li><li><code>compute()</code></li><li><code>merge()</code></li></ul><h2 id="zgc-转正" tabindex="-1"><a class="header-anchor" href="#zgc-转正" aria-hidden="true">#</a> ZGC(转正)</h2><p>Java11 的时候 ，ZGC 还在试验阶段。</p><p>当时，ZGC 的出现让众多 Java 开发者看到了垃圾回收器的另外一种可能，因此备受关注。</p><p>经过多个版本的迭代，不断的完善和修复问题，ZGC 在 Java 15 已经可以正式使用了！</p><p>不过，默认的垃圾回收器依然是 G1。你可以通过下面的参数启动 ZGC：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">java</span> <span class="token parameter variable">-XX:+UseZGC</span> className
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="eddsa-数字签名算法" tabindex="-1"><a class="header-anchor" href="#eddsa-数字签名算法" aria-hidden="true">#</a> EdDSA(数字签名算法)</h2><p>新加入了一个安全性和性能都更强的基于 Edwards-Curve Digital Signature Algorithm （EdDSA）实现的数字签名算法。</p><p>虽然其性能优于现有的 ECDSA 实现，不过，它并不会完全取代 JDK 中现有的椭圆曲线数字签名算法( ECDSA)。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">KeyPairGenerator</span> kpg <span class="token operator">=</span> <span class="token class-name">KeyPairGenerator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Ed25519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">KeyPair</span> kp <span class="token operator">=</span> kpg<span class="token punctuation">.</span><span class="token function">generateKeyPair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> msg <span class="token operator">=</span> <span class="token string">&quot;test_string&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Signature</span> sig <span class="token operator">=</span> <span class="token class-name">Signature</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;Ed25519&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sig<span class="token punctuation">.</span><span class="token function">initSign</span><span class="token punctuation">(</span>kp<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sig<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> sig<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> encodedString <span class="token operator">=</span> <span class="token class-name">Base64</span><span class="token punctuation">.</span><span class="token function">getEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encodeToString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>encodedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0Hc0lxxASZNvS52WsvnncJOH/mlFhnA8Tc6D/k5DtAX5BSsNVjtPF4R4+yMWXVjrvB2mxVXmChIbki6goFBgAg==
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文本块-转正" tabindex="-1"><a class="header-anchor" href="#文本块-转正" aria-hidden="true">#</a> 文本块(转正)</h2><p>在 Java 15 ，文本块是正式的功能特性了。</p><h2 id="隐藏类-hidden-classes" tabindex="-1"><a class="header-anchor" href="#隐藏类-hidden-classes" aria-hidden="true">#</a> 隐藏类(Hidden Classes)</h2><p>隐藏类是为框架（frameworks）所设计的，隐藏类不能直接被其他类的字节码使用，只能在运行时生成类并通过反射间接使用它们。</p><h2 id="预览新特性" tabindex="-1"><a class="header-anchor" href="#预览新特性" aria-hidden="true">#</a> 预览新特性</h2><h3 id="密封类" tabindex="-1"><a class="header-anchor" href="#密封类" aria-hidden="true">#</a> 密封类</h3><p><strong>密封类（Sealed Classes）</strong> 是 Java 15 中的一个预览新特性。</p><p>没有密封类之前，在 Java 中如果想让一个类不能被继承和修改，我们可以使用<code>final</code> 关键字对类进行修饰。不过，这种方式不太灵活，直接把一个类的继承和修改渠道给堵死了。</p><p>密封类可以对继承或者实现它们的类进行限制，这样这个类就只能被指定的类继承。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 抽象类 Person 只允许 Employee 和 Manager 继承。</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">Person</span>
    <span class="token keyword">permits</span> <span class="token class-name">Employee</span><span class="token punctuation">,</span> <span class="token class-name">Manager</span> <span class="token punctuation">{</span>

    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，任何扩展密封类的类本身都必须声明为 <code>sealed</code>、<code>non-sealed</code> 或 <code>final</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">non-sealed</span> <span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20210820153955587.png" alt=""></p><p>如果允许扩展的子类和封闭类在同一个源代码文件里，封闭类可以不使用 permits 语句，Java 编译器将检索源文件，在编译期为封闭类添加上许可的子类。</p><h3 id="instanceof-模式匹配" tabindex="-1"><a class="header-anchor" href="#instanceof-模式匹配" aria-hidden="true">#</a> instanceof 模式匹配</h3><p>Java 15 并没有对此特性进行调整，继续预览特性，主要用于接受更多的使用反馈。</p><p>在未来的 Java 版本中，Java 的目标是继续完善 <code>instanceof</code> 模式匹配新特性。</p><h2 id="java15-其他新特性" tabindex="-1"><a class="header-anchor" href="#java15-其他新特性" aria-hidden="true">#</a> Java15 其他新特性</h2><ul><li><strong>Nashorn JavaScript 引擎彻底移除</strong> ：Nashorn 从 Java8 开始引入的 JavaScript 引擎，Java9 对 Nashorn 做了些增强，实现了一些 ES6 的新特性。在 Java 11 中就已经被弃用，到了 Java 15 就彻底被删除了。</li><li><strong>DatagramSocket API 重构</strong></li><li><strong>禁用和废弃偏向锁（Biased Locking）</strong> ： 偏向锁的引入增加了 JVM 的复杂性大于其带来的性能提升。不过，你仍然可以使用 <code>-XX:+UseBiasedLocking</code> 启用偏向锁定，但它会提示 这是一个已弃用的 API。</li><li>......</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="关于预览特性" tabindex="-1"><a class="header-anchor" href="#关于预览特性" aria-hidden="true">#</a> 关于预览特性</h3><p>先贴一段 oracle 官网原文：<code>This is a preview feature, which is a feature whose design, specification, and implementation are complete, but is not permanent, which means that the feature may exist in a different form or not at all in future JDK releases. To compile and run code that contains preview features, you must specify additional command-line options.</code></p><p>这是一个预览功能，该功能的设计，规格和实现是完整的，但不是永久性的，这意味着该功能可能以其他形式存在或在将来的 JDK 版本中根本不存在。 要编译和运行包含预览功能的代码，必须指定其他命令行选项。</p><p>就以<code>switch</code>的增强为例子，从 Java12 中推出，到 Java13 中将继续增强，直到 Java14 才正式转正进入 JDK 可以放心使用，不用考虑后续 JDK 版本对其的改动或修改</p><p>一方面可以看出 JDK 作为标准平台在增加新特性的严谨态度，另一方面个人认为是对于预览特性应该采取审慎使用的态度。特性的设计和实现容易，但是其实际价值依然需要在使用中去验证</p><h3 id="jvm-虚拟机优化" tabindex="-1"><a class="header-anchor" href="#jvm-虚拟机优化" aria-hidden="true">#</a> JVM 虚拟机优化</h3><p>每次 Java 版本的发布都伴随着对 JVM 虚拟机的优化，包括对现有垃圾回收算法的改进，引入新的垃圾回收算法，移除老旧的不再适用于今天的垃圾回收算法等</p><p>整体优化的方向是<strong>高效，低时延的垃圾回收表现</strong></p><p>对于日常的应用开发者可能比较关注新的语法特性，但是从一个公司角度来说，在考虑是否升级 Java 平台时更加考虑的是<strong>JVM 运行时的提升</strong></p>`,47),c=[p];function o(i,l){return n(),s("div",null,c)}const r=a(t,[["render",o],["__file","java15.html.vue"]]);export{r as default};