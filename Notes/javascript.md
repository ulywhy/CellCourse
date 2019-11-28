---


---

<h1 id="javascript">Javascript</h1>
<p>runtime environment</p>
<h2 id="conventions">Conventions</h2>
<ul>
<li>concatenation:</li>
</ul>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//use bactiks</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">'a'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>
<span class="token comment">// same as</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'c:'</span><span class="token operator">+</span>c<span class="token punctuation">)</span>
</code></pre>
<h2 id="variables">variables</h2>
<h3 id="let">let</h3>
<ul>
<li>cannot be redeclared in the same context</li>
</ul>
<h3 id="const">const</h3>
<ul>
<li>cannot be reddeclader nor redefined</li>
<li>recomended for security reasons</li>
<li>object can</li>
</ul>
<h3 id="var">var</h3>
<ul>
<li>can be redeclared and redefined</li>
</ul>
<h4 id="example">Example</h4>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">"hola"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
<h2 id="functions">Functions</h2>
<h3 id="scope">Scope</h3>
<pre><code>variables above functions are global 
functions can acces global variables
</code></pre>
<h3 id="optional-params">Optional params</h3>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token function">funtion</span><span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">default</span><span class="token operator">-</span>value<span class="token operator">&gt;</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">default</span><span class="token operator">-</span>value<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//a = &lt;default-value&gt;</span>
<span class="token comment">//b = &lt;default-value&gt;</span>
</code></pre>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//a = 4</span>
<span class="token comment">//b = &lt;default-value&gt;</span>
</code></pre>
<p>skip one param</p>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token function">foo</span><span class="token punctuation">(</span>undefined<span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// a = &lt;default-value&gt;</span>
<span class="token comment">// b = '8'</span>
</code></pre>
<h4 id="example-1">example</h4>
<pre class=" language-javascript"><code class="prism  language-javascript">
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

	b <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">;</span>

	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h5 id="using-params">using params</h5>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//functions.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Funciones"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token string">'a'</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">'b'</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        a <span class="token operator">=</span> <span class="token string">"AA"</span><span class="token punctuation">;</span>
        b <span class="token operator">=</span> <span class="token string">'BB'</span><span class="token punctuation">;</span>
        c <span class="token operator">=</span> <span class="token string">"CC"</span><span class="token punctuation">;</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">demo</span><span class="token punctuation">(</span>undefined<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="closures">Closures</h2>
<p>closures are fuctions that can “remember” their state (variables).</p>
<p>read about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">closures</a></p>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//closures.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">{</span>
                                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token string">"https://demo.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token string">"/products"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token string">"/100"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">c</span><span class="token punctuation">(</span><span class="token string">"?user=ulywhy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="template-literals">Template Literals</h2>
<pre class=" language-javascript"><code class="prism  language-javascript"> <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">"some text"</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
 <span class="token keyword">var</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	 <span class="token keyword">return</span> <span class="token string">"this is a function"</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>text<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | 
	</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">		    |
	</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num <span class="token operator">-</span> <span class="token number">50</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>
</code></pre>
<h2 id="destructuring">Destructuring</h2>
<p>another way to access values from arrays or objects</p>
<h3 id="useful-when">useful when</h3>
<ul>
<li>changing attributes name</li>
<li>accessing a known attribute</li>
</ul>
<h3 id="example-2">example</h3>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//destructuring.js</span>

<span class="token keyword">var</span> uno <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> dos <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//indexing </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uno<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//attribute access</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dos<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//destructuring arrays</span>
<span class="token keyword">var</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> uno<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//destructuring object</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span>a<span class="token punctuation">}</span> <span class="token operator">=</span> dos<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="operators">Operators</h2>
<pre class=" language-javascript"><code class="prism  language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">2</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 
`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token punctuation">:</span><span class="token string">'1'</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> q<span class="token punctuation">;</span>
<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f <span class="token operator">=</span> undefined<span class="token punctuation">;</span>
<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> d<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> fn<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> f<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="conditionals">Conditionals</h2>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//falsy values (0, null, '', "", undefined, false)</span>
<span class="token comment">//truthy values( any nuber, any string, any object)</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>condition<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token comment">//switch</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>variable<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span><span class="token punctuation">:</span>
<span class="token operator">...</span>
<span class="token keyword">break</span><span class="token punctuation">:</span>
<span class="token operator">...</span>
<span class="token keyword">default</span><span class="token punctuation">:</span> 
<span class="token operator">...</span>
<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//for loop</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//while</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//do while</span>
<span class="token keyword">do</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="lambdas-arrow-functions">Lambdas (arrow functions)</h2>
<h4 id="example-3">example:</h4>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//arrow.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">fn1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">*</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">fn3</span> <span class="token operator">=</span> a <span class="token operator">=&gt;</span> a<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn3</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//calcular area de rectangulo</span>

<span class="token keyword">const</span> <span class="token function-variable function">aRec</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">*</span>b<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">aRec</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//calcular area de triangulo</span>
<span class="token keyword">const</span> <span class="token function-variable function">aTri</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">*</span>b<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">aTri</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre>
<h2 id="arrays">Arrays</h2>
<h3 id="prototype-methods">Prototype Methods</h3>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//arrays.js</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'j'</span><span class="token punctuation">,</span> <span class="token string">'u'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- METHODS -----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- Transform -----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//pop()</span>
<span class="token keyword">let</span> last <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//push()</span>
<span class="token keyword">let</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//shift()</span>
<span class="token comment">//extracts first element</span>
<span class="token keyword">let</span> fisrt <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fisrt<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//sort()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//splice()</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//concat()</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> output <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//indexOf()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//join()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>c<span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objects<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'###'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//slice()</span>
<span class="token comment">//does not affect the array</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'j'</span><span class="token punctuation">,</span> <span class="token string">'u'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
	</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
	</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//toString()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- Iteration -----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token comment">//fiter</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`
	</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>elem<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> elem<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)}
`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">multiplos</span> <span class="token operator">=</span>  <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>e <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">multiplos</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre>
<h3 id="filter">Filter</h3>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//arrays2.js</span>

<span class="token keyword">let</span> personas <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Ana'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">,</span> 
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>title<span class="token punctuation">:</span><span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Juan'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>tile<span class="token punctuation">:</span><span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Pedro'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">,</span>
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span><span class="token string">'Matematicas'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Maria'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">,</span>
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">'Matematicas'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> old <span class="token operator">=</span> personas<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- personas -----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personas<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- old -----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>old<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//fiter de personas que hayan reprobado al menos una materia</span>
<span class="token keyword">const</span> <span class="token function-variable function">reprobadas</span> <span class="token operator">=</span> materias <span class="token operator">=&gt;</span> materias<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>avg <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> irregulares <span class="token operator">=</span> personas<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> <span class="token function">reprobadas</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>materias<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- irregulares -----"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>irregulares<span class="token punctuation">)</span>
</code></pre>
<h3 id="map">Map</h3>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//arrays3.js</span>

<span class="token keyword">let</span> personas <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Ana'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">18</span><span class="token punctuation">,</span> 
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>title<span class="token punctuation">:</span><span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Juan'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">,</span>
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>tile<span class="token punctuation">:</span><span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Pedro'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">,</span>
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span><span class="token string">'Matematicas'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">'Maria'</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">,</span>
		materias<span class="token punctuation">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">'Fisica'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">'Matematicas'</span><span class="token punctuation">,</span> avg<span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">}</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"----- personas -----"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personas<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> nombres <span class="token operator">=</span> personas<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nombres<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//extraer en nuevo objeto el nombre y la materia que reprobo</span>

<span class="token keyword">const</span> evaluaciones <span class="token operator">=</span> personas<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> materias <span class="token operator">=</span> p<span class="token punctuation">.</span>materias<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>avg <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>m <span class="token operator">=&gt;</span> m<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
		reprobo<span class="token punctuation">:</span> materias<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> materias<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">'NA'</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evaluaciones<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="prototypes">Prototypes</h2>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//classes1.js</span>

<span class="token comment">//using prototype</span>
<span class="token keyword">const</span> <span class="token function-variable function">Calificacion</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> avg <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>avg <span class="token operator">=</span> avg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">Persona</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>calif <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Calificacion</span><span class="token punctuation">(</span><span class="token string">'Fisica'</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Persona<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getAge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Persona<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isElder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Persona<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addCalif</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>calif<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Persona<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">removeCalif</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>calif <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>calif<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>name <span class="token operator">!==</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Persona<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">printCalif</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>calif<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token punctuation">.</span>avg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> persona1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Persona</span><span class="token punctuation">(</span><span class="token string">'Ana'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> persona2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Persona</span><span class="token punctuation">(</span><span class="token string">'Juan'</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona1<span class="token punctuation">.</span><span class="token function">isElder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
persona1<span class="token punctuation">.</span><span class="token function">addCalif</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Calificacion</span><span class="token punctuation">(</span><span class="token string">'Matematicas'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
persona1<span class="token punctuation">.</span><span class="token function">addCalif</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Calificacion</span><span class="token punctuation">(</span><span class="token string">'Geometria'</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona1<span class="token punctuation">.</span><span class="token function">printCalif</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona2<span class="token punctuation">.</span><span class="token function">isElder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
persona2<span class="token punctuation">.</span><span class="token function">removeCalif</span><span class="token punctuation">(</span><span class="token string">'Fisica'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>persona2<span class="token punctuation">.</span><span class="token function">printCalif</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="classes">Classes</h2>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token comment">//classes1.js</span>

<span class="token comment">//using prototype</span>
<span class="token keyword">class</span> <span class="token class-name">Calificacion</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">,</span> avg <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>avg <span class="token operator">=</span> avg<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Persona</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function-variable function">getAge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function-variable function">isElder</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Estudiante</span> <span class="token keyword">extends</span> <span class="token class-name">Persona</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> calif<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>calif <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Calificacion</span><span class="token punctuation">(</span><span class="token string">'Fisica'</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">addCalif</span><span class="token punctuation">(</span>calif<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>calif<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>calif<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">removeCalif</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>calif <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>calif<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>name <span class="token operator">!==</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stud <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Estudiante</span><span class="token punctuation">(</span><span class="token string">'said'</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stud<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

