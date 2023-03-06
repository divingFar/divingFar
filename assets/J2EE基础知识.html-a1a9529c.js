const e=JSON.parse('{"key":"v-c2d3c54c","path":"/system-design/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html","title":"","lang":"zh-CN","frontmatter":{"description":"点击关注公众号及时获取笔主最新更新文章，并可免费领取本文档配套的《Java面试突击》以及Java工程师必备学习资源。 Servlet总结 阐述Servlet和CGI的区别? CGI的不足之处: Servlet的优点： Servlet接口中有哪些方法及Servlet生命周期探秘 get和post请求的区别 什么情况下调用doGet()和doPost() 转发（Forward）和重定向（Redirect）的区别 自动刷新(Refresh) Servlet与线程安全 JSP和Servlet是什么关系 JSP工作原理 JSP有哪些内置对象、作用分别是什么 Request对象的主要方法有哪些 request.getAttribute()和 request.getParameter()有何区别 include指令include的行为的区别 JSP九大内置对象，七大动作，三大指令 讲解JSP中的四种作用域 如何实现JSP或Servlet的单线程模式 实现会话跟踪的技术有哪些 Cookie和Session的的区别","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/docs/system-design/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:description","content":"点击关注公众号及时获取笔主最新更新文章，并可免费领取本文档配套的《Java面试突击》以及Java工程师必备学习资源。 Servlet总结 阐述Servlet和CGI的区别? CGI的不足之处: Servlet的优点： Servlet接口中有哪些方法及Servlet生命周期探秘 get和post请求的区别 什么情况下调用doGet()和doPost() 转发（Forward）和重定向（Redirect）的区别 自动刷新(Refresh) Servlet与线程安全 JSP和Servlet是什么关系 JSP工作原理 JSP有哪些内置对象、作用分别是什么 Request对象的主要方法有哪些 request.getAttribute()和 request.getParameter()有何区别 include指令include的行为的区别 JSP九大内置对象，七大动作，三大指令 讲解JSP中的四种作用域 如何实现JSP或Servlet的单线程模式 实现会话跟踪的技术有哪些 Cookie和Session的的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-08T12:15:23.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-08T12:15:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-08T12:15:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Servlet总结","slug":"servlet总结","link":"#servlet总结","children":[]},{"level":2,"title":"阐述Servlet和CGI的区别?","slug":"阐述servlet和cgi的区别","link":"#阐述servlet和cgi的区别","children":[{"level":3,"title":"CGI的不足之处:","slug":"cgi的不足之处","link":"#cgi的不足之处","children":[]},{"level":3,"title":"Servlet的优点:","slug":"servlet的优点","link":"#servlet的优点","children":[]}]},{"level":2,"title":"Servlet接口中有哪些方法及Servlet生命周期探秘","slug":"servlet接口中有哪些方法及servlet生命周期探秘","link":"#servlet接口中有哪些方法及servlet生命周期探秘","children":[]},{"level":2,"title":"get和post请求的区别","slug":"get和post请求的区别","link":"#get和post请求的区别","children":[]},{"level":2,"title":"什么情况下调用doGet()和doPost()","slug":"什么情况下调用doget-和dopost","link":"#什么情况下调用doget-和dopost","children":[]},{"level":2,"title":"转发(Forward)和重定向(Redirect)的区别","slug":"转发-forward-和重定向-redirect-的区别","link":"#转发-forward-和重定向-redirect-的区别","children":[]},{"level":2,"title":"自动刷新(Refresh)","slug":"自动刷新-refresh","link":"#自动刷新-refresh","children":[]},{"level":2,"title":"Servlet与线程安全","slug":"servlet与线程安全","link":"#servlet与线程安全","children":[]},{"level":2,"title":"JSP和Servlet是什么关系","slug":"jsp和servlet是什么关系","link":"#jsp和servlet是什么关系","children":[]},{"level":2,"title":"JSP工作原理","slug":"jsp工作原理","link":"#jsp工作原理","children":[]},{"level":2,"title":"JSP有哪些内置对象、作用分别是什么","slug":"jsp有哪些内置对象、作用分别是什么","link":"#jsp有哪些内置对象、作用分别是什么","children":[]},{"level":2,"title":"Request对象的主要方法有哪些","slug":"request对象的主要方法有哪些","link":"#request对象的主要方法有哪些","children":[]},{"level":2,"title":"request.getAttribute()和 request.getParameter()有何区别","slug":"request-getattribute-和-request-getparameter-有何区别","link":"#request-getattribute-和-request-getparameter-有何区别","children":[]},{"level":2,"title":"include指令include的行为的区别","slug":"include指令include的行为的区别","link":"#include指令include的行为的区别","children":[]},{"level":2,"title":"JSP九大内置对象，七大动作，三大指令","slug":"jsp九大内置对象-七大动作-三大指令","link":"#jsp九大内置对象-七大动作-三大指令","children":[]},{"level":2,"title":"讲解JSP中的四种作用域","slug":"讲解jsp中的四种作用域","link":"#讲解jsp中的四种作用域","children":[]},{"level":2,"title":"如何实现JSP或Servlet的单线程模式","slug":"如何实现jsp或servlet的单线程模式","link":"#如何实现jsp或servlet的单线程模式","children":[]},{"level":2,"title":"实现会话跟踪的技术有哪些","slug":"实现会话跟踪的技术有哪些","link":"#实现会话跟踪的技术有哪些","children":[]},{"level":2,"title":"Cookie和Session的区别","slug":"cookie和session的区别","link":"#cookie和session的区别","children":[]},{"level":2,"title":"公众号","slug":"公众号","link":"#公众号","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1659960923000,"contributors":[{"name":"ZapBird","email":"zhaolx5@asiainfo.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":18.58,"words":5573},"filePathRelative":"system-design/J2EE基础知识.md","localizedDate":"2021年11月9日","excerpt":"<p>点击关注<a href=\\"#%E5%85%AC%E4%BC%97%E5%8F%B7\\">公众号</a>及时获取笔主最新更新文章，并可免费领取本文档配套的《Java面试突击》以及Java工程师必备学习资源。</p>\\n<!-- MarkdownTOC -->\\n<ul>\\n<li><a href=\\"#servlet%E6%80%BB%E7%BB%93\\">Servlet总结</a></li>\\n<li><a href=\\"#%E9%98%90%E8%BF%B0servlet%E5%92%8Ccgi%E7%9A%84%E5%8C%BA%E5%88%AB\\">阐述Servlet和CGI的区别?</a>\\n<ul>\\n<li><a href=\\"#cgi%E7%9A%84%E4%B8%8D%E8%B6%B3%E4%B9%8B%E5%A4%84\\">CGI的不足之处:</a></li>\\n<li><a href=\\"#servlet%E7%9A%84%E4%BC%98%E7%82%B9\\">Servlet的优点：</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#servlet%E6%8E%A5%E5%8F%A3%E4%B8%AD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B9%E6%B3%95%E5%8F%8Aservlet%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%8E%A2%E7%A7%98\\">Servlet接口中有哪些方法及Servlet生命周期探秘</a></li>\\n<li><a href=\\"#get%E5%92%8Cpost%E8%AF%B7%E6%B1%82%E7%9A%84%E5%8C%BA%E5%88%AB\\">get和post请求的区别</a></li>\\n<li><a href=\\"#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E8%B0%83%E7%94%A8doget%E5%92%8Cdopost\\">什么情况下调用doGet()和doPost()</a></li>\\n<li><a href=\\"#%E8%BD%AC%E5%8F%91forward%E5%92%8C%E9%87%8D%E5%AE%9A%E5%90%91redirect%E7%9A%84%E5%8C%BA%E5%88%AB\\">转发（Forward）和重定向（Redirect）的区别</a></li>\\n<li><a href=\\"#%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0refresh\\">自动刷新(Refresh)</a></li>\\n<li><a href=\\"#servlet%E4%B8%8E%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8\\">Servlet与线程安全</a></li>\\n<li><a href=\\"#jsp%E5%92%8Cservlet%E6%98%AF%E4%BB%80%E4%B9%88%E5%85%B3%E7%B3%BB\\">JSP和Servlet是什么关系</a></li>\\n<li><a href=\\"#jsp%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86\\">JSP工作原理</a></li>\\n<li><a href=\\"#jsp%E6%9C%89%E5%93%AA%E4%BA%9B%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%E3%80%81%E4%BD%9C%E7%94%A8%E5%88%86%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88\\">JSP有哪些内置对象、作用分别是什么</a></li>\\n<li><a href=\\"#request%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%B8%BB%E8%A6%81%E6%96%B9%E6%B3%95%E6%9C%89%E5%93%AA%E4%BA%9B\\">Request对象的主要方法有哪些</a></li>\\n<li><a href=\\"#requestgetattribute%E5%92%8C-requestgetparameter%E6%9C%89%E4%BD%95%E5%8C%BA%E5%88%AB\\">request.getAttribute()和 request.getParameter()有何区别</a></li>\\n<li><a href=\\"#include%E6%8C%87%E4%BB%A4include%E7%9A%84%E8%A1%8C%E4%B8%BA%E7%9A%84%E5%8C%BA%E5%88%AB\\">include指令include的行为的区别</a></li>\\n<li><a href=\\"#jsp%E4%B9%9D%E5%A4%A7%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%EF%BC%8C%E4%B8%83%E5%A4%A7%E5%8A%A8%E4%BD%9C%EF%BC%8C%E4%B8%89%E5%A4%A7%E6%8C%87%E4%BB%A4\\">JSP九大内置对象，七大动作，三大指令</a></li>\\n<li><a href=\\"#%E8%AE%B2%E8%A7%A3jsp%E4%B8%AD%E7%9A%84%E5%9B%9B%E7%A7%8D%E4%BD%9C%E7%94%A8%E5%9F%9F\\">讲解JSP中的四种作用域</a></li>\\n<li><a href=\\"#%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0jsp%E6%88%96servlet%E7%9A%84%E5%8D%95%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%BC%8F\\">如何实现JSP或Servlet的单线程模式</a></li>\\n<li><a href=\\"#%E5%AE%9E%E7%8E%B0%E4%BC%9A%E8%AF%9D%E8%B7%9F%E8%B8%AA%E7%9A%84%E6%8A%80%E6%9C%AF%E6%9C%89%E5%93%AA%E4%BA%9B\\">实现会话跟踪的技术有哪些</a></li>\\n<li><a href=\\"#cookie%E5%92%8Csession%E7%9A%84%E7%9A%84%E5%8C%BA%E5%88%AB\\">Cookie和Session的的区别</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
