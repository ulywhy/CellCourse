---


---

<h1 id="jsp">JSP</h1>
<p>JSP were slow on client side</p>
<h1 id="promises">Promises</h1>
<p>used for accessing data from 3dr party services or APIs</p>
<h4 id="example">example</h4>
<pre class=" language-javascript"><code class="prism  language-javascript">
<span class="token comment">// promise.js</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">promiseCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> req <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		req<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'http://localhost:3000/comments'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		req<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		req<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">reject</span><span class="token punctuation">(</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Network Error"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		req<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">resolvedAnswer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--resolvedAnswer--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">rejectedAnswer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--rejectedAnswer--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">promiseCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolvedAnswer<span class="token punctuation">,</span> rejectedAnswer<span class="token punctuation">)</span>
</code></pre>
<h2 id="using-fetch">using Fetch</h2>
<h4 id="example-1">example</h4>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">promiseCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://localhost:3000/posts'</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
				<span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">promiseCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--resolved--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'-&gt;'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--rejected--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'-&gt;'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<h2 id="async-await">async await</h2>
<pre class=" language-javascript"><code class="prism  language-javascript">
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncAwaitCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'http://jsonplaceholder.typicode.com/users/1'</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> error<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">asyncAwaitCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--resolved--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'-&gt;'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--rejected--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'-&gt;'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<h4 id="excercise">excercise</h4>
<pre class=" language-javascript"><code class="prism  language-javascript"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getAsyncUser</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'http://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span>
		<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		user<span class="token punctuation">.</span>posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAsyncPosts</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> user<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> error<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getAsyncPosts</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'http://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> posts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>p <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>userId <span class="token operator">===</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> error<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">getAsyncUser</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--resolved--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'-&gt;'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'--rejected--'</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">'-&gt;'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>downloads were unorganized and messy</p>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

