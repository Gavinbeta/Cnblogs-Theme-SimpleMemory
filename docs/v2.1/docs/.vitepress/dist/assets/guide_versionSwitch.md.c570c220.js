import{_ as s,o as a,c as n,X as l}from"./chunks/framework.0b6918c2.js";const h=JSON.parse('{"title":"版本切换","description":"","frontmatter":{},"headers":[],"relativePath":"guide/versionSwitch.md","filePath":"guide/versionSwitch.md","lastUpdated":1692862703000}'),e={name:"guide/versionSwitch.md"},p=l(`<h1 id="版本切换" tabindex="-1">版本切换 <a class="header-anchor" href="#版本切换" aria-label="Permalink to &quot;版本切换&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">注意</p><p>任何版本的切换，最好都更新一下对应版本的 CSS 样式，不然可能会发生兼容性问题！</p></div><h2 id="v1-、v2-之间切换版本" tabindex="-1">v1 、v2 之间切换版本 <a class="header-anchor" href="#v1-、v2-之间切换版本" aria-label="Permalink to &quot;v1 、v2 之间切换版本&quot;">​</a></h2><p>由于 <code>v1.*.*</code> 、 <code>v2.*.*</code> 版本的整体配置方式不同，版本不能兼容，所以需要依据各版本的配置方式进行重新配置插件。</p><h2 id="v2-之间切换版本" tabindex="-1">v2 之间切换版本 <a class="header-anchor" href="#v2-之间切换版本" aria-label="Permalink to &quot;v2 之间切换版本&quot;">​</a></h2><h3 id="使用-jsdelivr-加载资源" tabindex="-1">使用 jsDelivr 加载资源 <a class="header-anchor" href="#使用-jsdelivr-加载资源" aria-label="Permalink to &quot;使用 jsDelivr 加载资源&quot;">​</a></h3><p>只需要更改 <code>simpleMemory.js</code> 文件引入的版本。</p><p>例如：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnblogsConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v2.0.0/dist/simpleMemory.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>变为</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnblogsConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v2.0.1/dist/simpleMemory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>版本变更： <code>v2.0.0</code> &gt;&gt;&gt; <code>v2.0.1</code></p><h3 id="使用自己的云资源" tabindex="-1">使用自己的云资源 <a class="header-anchor" href="#使用自己的云资源" aria-label="Permalink to &quot;使用自己的云资源&quot;">​</a></h3><p>如果你的资源是托管到自己的云资源上。</p><h4 id="随机参方式更新加载资源" tabindex="-1">随机参方式更新加载资源 <a class="header-anchor" href="#随机参方式更新加载资源" aria-label="Permalink to &quot;随机参方式更新加载资源&quot;">​</a></h4><blockquote><p>推荐这种方式来更新加载资源。</p></blockquote><p>例如：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://dbnuo.com/dist/simpleMemory.js?_12311</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>变为</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://dbnuo.com/dist/simpleMemory.js?_12322</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样浏览器就会加载最新的代码。</p><h4 id="更换文件方式更新加载资源" tabindex="-1">更换文件方式更新加载资源 <a class="header-anchor" href="#更换文件方式更新加载资源" aria-label="Permalink to &quot;更换文件方式更新加载资源&quot;">​</a></h4><p><code>/dist</code> 目录除了 <code>simpleMemory.js</code> 文件，还有一个带随机后缀名的文件：<code>simpleMemory.[8位随机串].js</code> 也可以每次更新代码后引入此文件，来达到更新加载资源的目的。</p><p>例如：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://dbnuo.com/dist/simpleMemory.y7i7sx47.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>变为</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://dbnuo.com/dist/simpleMemory.s8kn7hd6.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">defer</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样浏览器就会加载最新的代码。</p>`,28),o=[p];function t(r,c,i,D,F,y){return a(),n("div",null,o)}const m=s(e,[["render",t]]);export{h as __pageData,m as default};
