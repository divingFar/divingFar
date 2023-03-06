const e=JSON.parse('{"key":"v-62957c64","path":"/system-design/security/sso-intro.html","title":"SSO 单点登录详解","lang":"zh-CN","frontmatter":{"title":"SSO 单点登录详解","category":"系统设计","tag":["安全"],"description":"本文授权转载自 ： https://ken.io/note/sso-design-implement 作者：ken.io SSO 介绍 什么是 SSO？ SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。 例如你登录网易账号中心（https://reg.163.com/ ）之后访问以下站点都是登录状态。 网易直播 https://v.163.com 网易博客 https://blog.163.com 网易花田 https://love.163.com 网易考拉 https://www.kaola.com 网易 Lofter http://www.lofter.com","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/docs/system-design/security/sso-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试+学习指南)"}],["meta",{"property":"og:title","content":"SSO 单点登录详解"}],["meta",{"property":"og:description","content":"本文授权转载自 ： https://ken.io/note/sso-design-implement 作者：ken.io SSO 介绍 什么是 SSO？ SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。 例如你登录网易账号中心（https://reg.163.com/ ）之后访问以下站点都是登录状态。 网易直播 https://v.163.com 网易博客 https://blog.163.com 网易花田 https://love.163.com 网易考拉 https://www.kaola.com 网易 Lofter http://www.lofter.com"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-08-27T04:16:32.000Z"}],["meta",{"property":"article:tag","content":"安全"}],["meta",{"property":"article:modified_time","content":"2022-08-27T04:16:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SSO 单点登录详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-08-27T04:16:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SSO 介绍","slug":"sso-介绍","link":"#sso-介绍","children":[{"level":3,"title":"什么是 SSO？","slug":"什么是-sso","link":"#什么是-sso","children":[]},{"level":3,"title":"SSO 有什么好处？","slug":"sso-有什么好处","link":"#sso-有什么好处","children":[]}]},{"level":2,"title":"SSO 设计与实现","slug":"sso-设计与实现","link":"#sso-设计与实现","children":[{"level":3,"title":"核心应用与依赖","slug":"核心应用与依赖","link":"#核心应用与依赖","children":[]},{"level":3,"title":"用户登录状态的存储与校验","slug":"用户登录状态的存储与校验","link":"#用户登录状态的存储与校验","children":[]},{"level":3,"title":"用户登录/登录校验","slug":"用户登录-登录校验","link":"#用户登录-登录校验","children":[]},{"level":3,"title":"用户登出","slug":"用户登出","link":"#用户登出","children":[]},{"level":3,"title":"跨域登录、登出","slug":"跨域登录、登出","link":"#跨域登录、登出","children":[]}]},{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1661573792000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":6}]},"readingTime":{"minutes":4.72,"words":1417},"filePathRelative":"system-design/security/sso-intro.md","localizedDate":"2021年11月9日","excerpt":"<blockquote>\\n<p>本文授权转载自 ： https://ken.io/note/sso-design-implement 作者：ken.io</p>\\n</blockquote>\\n<h2> SSO 介绍</h2>\\n<h3> 什么是 SSO？</h3>\\n<p>SSO 英文全称 Single Sign On，单点登录。SSO 是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。</p>\\n<p>例如你登录网易账号中心（https://reg.163.com/ ）之后访问以下站点都是登录状态。</p>\\n<ul>\\n<li>网易直播 <a href=\\"https://v.163.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://v.163.com</a></li>\\n<li>网易博客 <a href=\\"https://blog.163.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://blog.163.com</a></li>\\n<li>网易花田 <a href=\\"https://love.163.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://love.163.com</a></li>\\n<li>网易考拉 <a href=\\"https://www.kaola.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.kaola.com</a></li>\\n<li>网易 Lofter <a href=\\"http://www.lofter.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.lofter.com</a></li>\\n</ul>","copyright":{},"autoDesc":true}');export{e as data};
