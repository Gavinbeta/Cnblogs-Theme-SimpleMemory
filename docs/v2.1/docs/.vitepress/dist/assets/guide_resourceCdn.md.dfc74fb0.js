import{_ as s,o as n,c as a,X as e}from"./chunks/framework.0b6918c2.js";const u=JSON.parse('{"title":"资源托管","description":"","frontmatter":{},"headers":[],"relativePath":"guide/resourceCdn.md","filePath":"guide/resourceCdn.md","lastUpdated":1692862703000}'),p={name:"guide/resourceCdn.md"},l=e(`<h1 id="资源托管" tabindex="-1">资源托管 <a class="header-anchor" href="#资源托管" aria-label="Permalink to &quot;资源托管&quot;">​</a></h1><p>可以将插件托管到自己的云资源或其它 CDN 加速节点上。</p><p>例如：我的网站为 <code>www.dbnuo.com</code>（实际根据情况可以是 IP 或其它 host）</p><p>然后我将编译后的文件夹 <code>dist</code> 放到了网站的根目录。</p><p>这样我可以通过加载 <code>https://www.dbnuo.com/dist/simpleMemory.js</code> 来安装插件：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnblogsConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.dbnuo.com/dist/simpleMemory.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,6),o=[l];function t(c,r,i,D,d,F){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
