const e=JSON.parse('{"key":"v-bc7654fa","path":"/system-design/web-real-time-message-push.html","title":"Web 实时消息推送详解","lang":"zh-CN","frontmatter":{"title":"Web 实时消息推送详解","category":"系统设计","icon":"messages","head":[["meta",{"name":"keywords","content":"消息推送,短轮询,长轮询,SSE,Websocket,MQTT"}],["meta",{"name":"description","content":"消息推送通常是指网站的运营工作等人员，通过某种工具对用户当前网页或移动设备 APP 进行的主动消息推送。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/web-real-time-message-push.html"}],["meta",{"property":"og:site_name","content":"知识库"}],["meta",{"property":"og:title","content":"Web 实时消息推送详解"}],["meta",{"property":"og:description","content":"原文地址：https://juejin.cn/post/7122014462181113887，JavaGuide 对本文进行了完善总结。 我有一个朋友做了一个小破站，现在要实现一个站内信 Web 消息推送的功能，对，就是下图这个小红点，一个很常用的功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-12T15:48:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-12T15:48:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Web 实时消息推送详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-12T15:48:43.000Z\\",\\"author\\":[]}"]],"description":"原文地址：https://juejin.cn/post/7122014462181113887，JavaGuide 对本文进行了完善总结。 我有一个朋友做了一个小破站，现在要实现一个站内信 Web 消息推送的功能，对，就是下图这个小红点，一个很常用的功能。"},"headers":[{"level":2,"title":"什么是消息推送？","slug":"什么是消息推送","link":"#什么是消息推送","children":[]},{"level":2,"title":"消息推送常见方案","slug":"消息推送常见方案","link":"#消息推送常见方案","children":[{"level":3,"title":"短轮询","slug":"短轮询","link":"#短轮询","children":[]},{"level":3,"title":"长轮询","slug":"长轮询","link":"#长轮询","children":[]},{"level":3,"title":"iframe 流","slug":"iframe-流","link":"#iframe-流","children":[]},{"level":3,"title":"SSE (我的方式)","slug":"sse-我的方式","link":"#sse-我的方式","children":[]},{"level":3,"title":"Websocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"MQTT","slug":"mqtt","link":"#mqtt","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1660878783000,"updatedTime":1678636123000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"hezongkui","email":"zongkuihe@gmail.com","commits":1}]},"readingTime":{"minutes":14.92,"words":4476},"filePathRelative":"system-design/web-real-time-message-push.md","localizedDate":"2022年8月19日","excerpt":"<blockquote>\\n<p>原文地址：https://juejin.cn/post/7122014462181113887，JavaGuide 对本文进行了完善总结。</p>\\n</blockquote>\\n<p>我有一个朋友做了一个小破站，现在要实现一个站内信 Web 消息推送的功能，对，就是下图这个小红点，一个很常用的功能。</p>\\n<p><img src=\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/system-design/web-real-time-message-push/1460000042192380.png\\" alt=\\"站内信 Web 消息推送\\"></p>","copyright":{},"autoDesc":true}');export{e as data};