var j=Object.defineProperty;var z=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(z(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function y(){}function H(e){return e()}function I(){return Object.create(null)}function E(e){e.forEach(H)}function T(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function K(e){return Object.keys(e).length===0}function U(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function G(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}let x;function $(e){x=e}function W(){if(!x)throw new Error("Function called outside component initialization");return x}function X(e){W().$$.on_mount.push(e)}const g=[],R=[];let m=[];const S=[],Y=Promise.resolve();let N=!1;function Z(){N||(N=!0,Y.then(F))}function O(e){m.push(e)}const L=new Set;let p=0;function F(){if(p!==0)return;const e=x;do{try{for(;p<g.length;){const t=g[p];p++,$(t),D(t.$$)}}catch(t){throw g.length=0,p=0,t}for($(null),g.length=0,p=0;R.length;)R.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];L.has(n)||(L.add(n),n())}m.length=0}while(g.length);for(;S.length;)S.pop()();N=!1,L.clear(),$(e)}function D(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function ee(e){const t=[],n=[];m.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),m=t}const te=new Set;function ne(e,t){e&&e.i&&(te.delete(e),e.i(t))}function le(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),O(()=>{const l=e.$$.on_mount.map(H).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...l):E(l),e.$$.on_mount=[]}),i.forEach(O)}function ie(e,t){const n=e.$$;n.fragment!==null&&(ee(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(g.push(e),Z(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,r,i,l,s=null,d=[-1]){const u=x;$(e);const o=e.$$={fragment:null,ctx:[],props:l,update:y,not_equal:i,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:I(),dirty:d,skip_bound:!1,root:t.target||u.$$.root};s&&s(o.root);let w=!1;if(o.ctx=n?n(e,t.props||{},(a,c,...f)=>{const _=f.length?f[0]:c;return o.ctx&&i(o.ctx[a],o.ctx[a]=_)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](_),w&&re(e,a)),c}):[],o.update(),w=!0,E(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const a=Q(t.target);o.fragment&&o.fragment.l(a),a.forEach(C)}else o.fragment&&o.fragment.c();t.intro&&ne(e.$$.fragment),le(e,t.target,t.anchor),F()}$(u)}class se{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){ie(this,1),this.$destroy=y}$on(t,n){if(!T(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!K(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);const ce=Math.random,de=function e(t){function n(r,i){var l,s;return r=r==null?0:+r,i=i==null?1:+i,function(){var d;if(l!=null)d=l,l=null;else do l=t()*2-1,d=t()*2-1,s=l*l+d*d;while(!s||s>1);return r+i*d*Math.sqrt(-2*Math.log(s)/s)}}return n.source=e,n}(ce);function ae(e){let t;return{c(){t=V("div"),t.innerHTML='<div id="plot"></div> <div id="plot-inset" class="svelte-hbf8hw"></div> <div class="slidecontainer svelte-hbf8hw"><input type="range" min="1" max="2000" value="0" class="slider svelte-hbf8hw" id="myRange_1"/></div> <div id="value_1" class="output svelte-hbf8hw"></div> <div class="slidecontainer svelte-hbf8hw"><input type="range" min="1" max="2000" value="0" class="slider svelte-hbf8hw" id="myRange_2"/></div> <div id="value_2" class="output svelte-hbf8hw"></div>',G(t,"class","container svelte-hbf8hw")},m(n,r){U(n,t,r)},p:y,i:y,o:y,d(n){n&&C(t)}}}async function fe(){return await(await fetch("./peacoq_pulse_extended.json")).json()}function P(e,t,n){let r=e.sliding_pulse_1.slice(),i=e.sliding_pulse_2.slice();for(let l=0;l<e.existing_waveform.length;l++)l-t-n<0||l-t-n>e.sliding_pulse_1.length?e.current_waveform[l]=e.existing_waveform[l]:(e.current_waveform[l]=e.existing_waveform[l]+e.sliding_pulse_1[l-t]+e.sliding_pulse_2[l-n],r[l]=e.sliding_pulse_1[l-t],i[l]=e.sliding_pulse_2[l-n]+e.sliding_pulse_1[l-t]);return[e,r,i]}function _e(e){function t(c,f){const _=new Array(c),h=de(0,f);for(let v=0;v<c;v++)_[v]=h();return _}X(async()=>{const c=await fe();a(c)});var n=null,r=null;let i,l,s,d,u,o;function w(){s.innerHTML=i.value,d.innerHTML=l.value;var c=Math.round(parseFloat(i.value)),f=Math.round(parseFloat(l.value));let _,h;[u,_,h]=P(u,c,f),o.data.y=u.current_waveform,o.data.y_sliding_1=_,o.data.y_sliding_2=h,o.change.emit()}function a(c){u={sliding_pulse_1:c.y.slice(),sliding_pulse_2:c.y.slice(),existing_waveform:c.y.slice(),current_waveform:c.y.slice()};let f=t(1300,.2);u.existing_waveform.splice(-f.length,f.length),u.existing_waveform.unshift(...f),o=new Bokeh.ColumnDataSource({data:{x:c.x.map(B=>B-3200+84),y:u.current_waveform,y_stationary:u.existing_waveform,y_sliding_1:u.sliding_pulse_1,y_sliding_2:u.sliding_pulse_2}}),n=new Bokeh.Plotting.figure({tools:"",sizing_mode:"stretch_width",height:600,width:2e3,x_range:[-1e3,1e3],y_range:[-80,300]}),n.toolbar.logo=null,r=new Bokeh.Plotting.figure({tools:"",height:300,width:300,x_range:[-1,1],y_range:[150-100,150+100]}),r.toolbar.logo=null;const _=new Bokeh.Band({base:{field:"x"},lower:0,upper:{field:"y_sliding_2"},source:o,fill_alpha:.3,line_alpha:0,fill_color:"#f28c63"}),h=new Bokeh.Band({base:{field:"x"},lower:{field:"y_sliding_2"},upper:{field:"y_sliding_1"},source:o,fill_alpha:.2,line_alpha:0,fill_color:"#f542b0"});n.line({field:"x"},{field:"y"},{source:o,line_width:4,line_color:"#000000"}),n.add_layout(_),n.add_layout(h),r.line({field:"x"},{field:"y"},{source:o,line_width:3,line_color:"#000000"}),n.rect({x:0,y:150,width:16,height:200,alpha:.1,line_color:"red",line_alpha:1});const v=new Bokeh.Arrow({x_start:0,y_start:150,x_end:0,y_end:0,line_color:"red",line_alpha:1,line_width:3,line_cap:"round",end:new Bokeh.NormalHead({line_color:"red",fill_color:"red",size:15})});r.add_layout(v);const M=new Bokeh.Document;M.add_root(n),M.add_root(r),Bokeh.embed.add_document_standalone(M,document.getElementById("plot")),i=document.getElementById("myRange_1"),l=document.getElementById("myRange_2"),s=document.getElementById("value_1"),d=document.getElementById("value_2"),s.innerHTML=i.value,d.innerHTML=l.value,P(u,0,0),setTimeout(()=>{let B=document.querySelectorAll(".bk-Figure"),q=B[0],k=B[1],b=q.getBoundingClientRect();k.style.top=b.top+"px",k.style.left=b.left+2*b.width/3+"px",k.style.width=b.width/3+"px",k.style.height=b.height/2+"px"},20),i.oninput=w,l.oninput=w}return[]}class he extends se{constructor(t){super(),oe(this,t,_e,ae,J,{})}}new he({target:document.getElementById("app")});
