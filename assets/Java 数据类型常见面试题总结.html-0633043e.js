import{_ as n,X as s,Y as a,a2 as e}from"./framework-f0219f66.js";const t={},p=e(`<p>这篇文章绝对干货！<strong>文章涉及到的概念经常会被面试官拿来考察求职者的 Java 基础。</strong></p><p>本篇采用大家比较喜欢的面试官问答的形式来展开。</p><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2><p>👨‍💻<strong>面试官</strong> ： Java 中有哪 8 种基本数据类型？</p><p>🙋 <strong>我</strong> ：Java 中有 8 种基本数据类型，分别为：</p><ol><li>6 种数字类型 ：byte、short、int、long、float、double</li><li>1 种字符类型：char</li><li>1 种布尔型：boolean。</li></ol><p>👨‍💻<strong>面试官</strong> ： 它们的默认值和占用的空间大小知道不？</p><p>🙋 <strong>我</strong> ：这 8 种基本数据类型的默认值以及所占空间的大小如下：</p><table><thead><tr><th>基本类型</th><th>位数</th><th>字节</th><th>默认值</th></tr></thead><tbody><tr><td>int</td><td>32</td><td>4</td><td>0</td></tr><tr><td>short</td><td>16</td><td>2</td><td>0</td></tr><tr><td>long</td><td>64</td><td>8</td><td>0L</td></tr><tr><td>byte</td><td>8</td><td>1</td><td>0</td></tr><tr><td>char</td><td>16</td><td>2</td><td>&#39;u0000&#39;</td></tr><tr><td>float</td><td>32</td><td>4</td><td>0f</td></tr><tr><td>double</td><td>64</td><td>8</td><td>0d</td></tr><tr><td>boolean</td><td>1</td><td></td><td>false</td></tr></tbody></table><p>另外，对于 boolean，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上理解是占用 1 位，但是实际中会考虑计算机高效存储因素。</p><p><strong>注意：</strong></p><ol><li>Java 里使用 long 类型的数据一定要在数值后面加上 <strong>L</strong>，否则将作为整型解析：</li><li>char a = &#39;h&#39;char :单引号，String a = &quot;hello&quot; :双引号</li></ol><h2 id="包装类型" tabindex="-1"><a class="header-anchor" href="#包装类型" aria-hidden="true">#</a> 包装类型</h2><p>👨‍💻<strong>面试官</strong> ： 说说这 8 种基本数据类型对应的包装类型。</p><p>🙋 <strong>我</strong> ：这八种基本类型都有对应的包装类分别为：Byte、Short、Integer、Long、Float、Double、Character、Boolean</p><p>👨‍💻<strong>面试官</strong> ：那基本类型和包装类型有啥区别不？</p><p>🙋 <strong>我</strong> ：包装类型不赋值就是 Null ，而基本类型有默认值且不是 Null。</p><p>另外，这个问题建议还可以先从 JVM 层面来分析。</p><p>基本数据类型直接存放在 Java 虚拟机栈中的局部变量表中，而包装类型属于对象类型，我们知道对象实例都存在于堆中。相比于对象类型， 基本数据类型占用的空间非常小。</p><p>《深入理解 Java 虚拟机》 ：局部变量表主要存放了编译期可知的基本数据类型**（boolean、byte、char、short、int、float、long、double）**、<strong>对象引用</strong>（reference 类型，它不同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或其他与此对象相关的位置）。</p><h3 id="包装类型的常量池技术" tabindex="-1"><a class="header-anchor" href="#包装类型的常量池技术" aria-hidden="true">#</a> 包装类型的常量池技术</h3><p>👨‍💻<strong>面试官</strong> ： 包装类型的常量池技术了解么？</p><p>🙋 <strong>我</strong> ： Java 基本类型的包装类的大部分都实现了常量池技术。</p><p>Byte,Short,Integer,Long 这 4 种包装类默认创建了数值 <strong>[-128，127]</strong> 的相应类型的缓存数据，Character 创建了数值在[0,127]范围的缓存数据，Boolean 直接返回 True Or False。</p><p><strong>Integer 缓存源码：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
*此方法将始终缓存-128 到 127（包括端点）范围内的值，并可以缓存此范围之外的其他值。
*/</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Character 缓存源码:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Character</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;=</span> <span class="token number">127</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// must cache</span>
      <span class="token keyword">return</span> <span class="token class-name">CharacterCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CharacterCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">CharacterCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Character</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">[</span><span class="token number">127</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Boolean 缓存源码：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>b <span class="token operator">?</span> <span class="token constant">TRUE</span> <span class="token operator">:</span> <span class="token constant">FALSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果超出对应范围仍然会去创建新的对象，缓存的范围区间的大小只是在性能和资源之间的权衡。</p><p>两种浮点数类型的包装类 Float,Double 并没有实现常量池技术。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 true</span>
<span class="token class-name">Float</span> i11 <span class="token operator">=</span> <span class="token number">333f</span><span class="token punctuation">;</span>
<span class="token class-name">Float</span> i22 <span class="token operator">=</span> <span class="token number">333f</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i11 <span class="token operator">==</span> i22<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 false</span>
<span class="token class-name">Double</span> i3 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
<span class="token class-name">Double</span> i4 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3 <span class="token operator">==</span> i4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们来看一下问题。下面的代码的输出结果是 true 还是 flase 呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token operator">==</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Integer i1=40 这一行代码会发生装箱，也就是说这行代码等价于 Integer i1=Integer.valueOf(40) 。因此，i1 直接使用的是常量池中的对象。而Integer i1 = new Integer(40) 会直接创建新的对象。</p><p>因此，答案是 false 。你答对了吗？</p><p>记住：<strong>所有整型包装类对象之间值的比较，全部使用 equals 方法比较</strong>。</p><p><img src="https://cdn.nlark.com/yuque/0/2021/png/738439/1624285912175-2a8e75e5-5948-423c-b148-6679eb024beb.png?x-oss-process=image%2Fresize%2Cw_1125%2Climit_0#averageHue=%23c7c7c7&amp;from=url&amp;id=m9y8O&amp;originHeight=231&amp;originWidth=1125&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p><strong>为什么要有包装类型？</strong></p><p>👨‍💻<strong>面试官</strong> ： 为什么要有包装类型？</p><p>🙋 <strong>我</strong> ：</p><p>Java 本身就是一门 OOP（面向对象编程）语言，对象可以说是 Java 的灵魂。</p><p>除了定义一些常量和局部变量之外，我们在其他地方比如方法参数、对象属性中很少会使用基本类型来定义变量。</p><p><strong>为什么呢？</strong></p><p>我举个例子，假如你有一个对象中的属性使用了 基本类型，那这个属性就必然存在默认值了。这个逻辑不正确的！因为很多业务场景下，对象的某些属性没有赋值，我就希望它的值为 null。你给我默认赋个值，不是帮倒忙么？</p><p>另外，像泛型参数不能是基本类型。因为基本类型不是 Object 子类，应该用基本类型对应的包装类型代替。我们直接拿 JDK 中线程的代码举例。</p><p>Java 中的集合在定义类型的时候不能使用基本类型的。比如：</p><h2 id="自动拆装箱" tabindex="-1"><a class="header-anchor" href="#自动拆装箱" aria-hidden="true">#</a> 自动拆装箱</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Set</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是自动拆装箱-原理" tabindex="-1"><a class="header-anchor" href="#什么是自动拆装箱-原理" aria-hidden="true">#</a> 什么是自动拆装箱？原理？</h3><p>👨‍💻<strong>面试官</strong> ： 什么是自动拆装箱？原理了解么？</p><p>🙋 <strong>我</strong> ：</p><p>基本类型和包装类型之间的互转。举例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//装箱</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> i<span class="token punctuation">;</span>   <span class="token comment">//拆箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两行代码对应的字节码为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> L1
    LINENUMBER <span class="token number">8</span> L1
    ALOAD <span class="token number">0</span>
    BIPUSH <span class="token number">10</span>
    INVOKESTATIC java/lang/Integer.valueOf <span class="token punctuation">(</span>I<span class="token punctuation">)</span>Ljava/lang/Integer<span class="token punctuation">;</span>
    PUTFIELD AutoBoxTest.i <span class="token builtin class-name">:</span> Ljava/lang/Integer<span class="token punctuation">;</span>
   L2
    LINENUMBER <span class="token number">9</span> L2
    ALOAD <span class="token number">0</span>
    ALOAD <span class="token number">0</span>
    GETFIELD AutoBoxTest.i <span class="token builtin class-name">:</span> Ljava/lang/Integer<span class="token punctuation">;</span>
    INVOKEVIRTUAL java/lang/Integer.intValue <span class="token punctuation">(</span><span class="token punctuation">)</span>I
    PUTFIELD AutoBoxTest.n <span class="token builtin class-name">:</span> I
    RETURN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从字节码中，我们发现装箱其实就是调用了 包装类的valueOf()方法，拆箱其实就是调用了 xxxValue()方法。</p><p>因此，</p><ul><li>Integer i = 10 等价于 Integer i = Integer.valueOf(10)</li><li>int n = i 等价于 int n = i.intValue();</li></ul><p><strong>自动拆箱引发的 NPE 问题</strong></p><p>👨‍💻<strong>面试官</strong> ： 自动拆箱可能会引发 NPE 问题，遇到过类似的场景么？</p><p>🙋 <strong>我</strong> ：</p><p><strong>案例 1</strong></p><p>在《阿里巴巴开发手册》上就有这样一条规定。</p><p><img src="https://cdn.nlark.com/yuque/0/2021/png/738439/1624285912192-daf314da-d5e2-482d-9f40-2e3b31adb49d.png?x-oss-process=image%2Fresize%2Cw_1125%2Climit_0#averageHue=%23d5d5d4&amp;from=url&amp;id=zYCeV&amp;originHeight=463&amp;originWidth=1125&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p><p>我们从上图可以看到，有一条是这样说的：“<strong>数据库的查询结果可能是 null，因为自动拆箱，用基本数据类型接收有 NPE 风险</strong>”。</p><p>我们来模拟一个实际的案例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AutoBoxTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span>  <span class="token function">should_Throw_NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">long</span> id <span class="token operator">=</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行代码之后，果然出现了 <strong>NPE</strong> 的问题。</p><p><strong>为什么会这样呢?</strong> 我们对 AutoBoxTest.class 进行反编译查看其字节码（我更推荐使用 IDEA 插件 jclasslib 来查看类的字节码）。</p><p>反编译后得到的 should_Throw_NullPointerException() 方法的字节码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">0</span> aload_0
<span class="token number">1</span> invokevirtual #<span class="token number">2</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>getNum<span class="token punctuation">&gt;</span></span>
<span class="token number">4</span> invokevirtual #<span class="token number">3</span> <span class="token operator">&lt;</span>java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Long</span><span class="token punctuation">.</span>longValue<span class="token operator">&gt;</span>
<span class="token number">7</span> lstore_1
<span class="token number">8</span> <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以发现自动拆箱 Long -&gt; long 的过程，不过是调用了 longValue() 方法罢了！</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说下面两行的代码实际是等价的:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">long</span> id <span class="token operator">=</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> id <span class="token operator">=</span> <span class="token function">getNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为，getNum()返回的值为 null ，一个 null 值调用方法，当然会有 <strong>NPE</strong> 的问题了。</p><p><strong>案例 2</strong></p><p>通过上面的分析之后，我来考了一个不论是平时开发还是面试中都经常会碰到的一个问题：“<strong>三目运算符使用不当会导致诡异的 NPE 异常</strong>”。</p><p>请你回答下面的代码会有 <strong>NPE</strong> 问题出现吗？如果有 NPE 问题出现的话，原因是什么呢？你会怎么分析呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案是会有 NPE 问题出现的。</p><p>我们还是通过查看其字节码来搞懂背后的原理（这里借助了 IDEA 插件 jclasslib 来查看类字节码）。</p><p><img src="https://pics-cloud.oss-cn-beijing.aliyuncs.com/202303152200899.png" alt=""></p><p>从字节码中可以看出，22 行的位置发生了 <strong>拆箱操作</strong> 。</p><p>详细解释下就是：flag ? 0 : i 这行代码中，0 是基本数据类型 int，返回数据的时候 i 会被强制拆箱成 int 类型，由于 i 的值是 null，因此就抛出了 NPE 异常。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">Boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果，我们把代码中 flag 变量的值修改为 true 的话，就不会存在 NPE 问题了，因为会直接返回 0，不会进行拆箱操作。</p><p>我们在实际项目中应该避免这样的写法，正确 ✅ 修改之后的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">Boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>flag <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">:</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 两者类型一致就不会有拆箱导致的 NPE 问题了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个问题也在 《阿里巴巴开发手册》中 被提到过。</p><p><img src="https://cdn.nlark.com/yuque/0/2021/png/738439/1624285912066-d03243a6-6f20-4bc8-ba95-35df9cc2ecf0.png?x-oss-process=image%2Fresize%2Cw_1152%2Climit_0#averageHue=%23e0dddd&amp;from=url&amp;id=TYLmo&amp;originHeight=490&amp;originWidth=1152&amp;originalType=binary&amp;ratio=1.5&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt=""></p>`,93),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","Java 数据类型常见面试题总结.html.vue"]]);export{r as default};
