"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[267],{1267:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,i,o=t(9439),a=t(2791),s=t(1243),c=t(7596),l=(t(5462),t(1087)),d=t(5838),u=t(168),p=t(3237),h=p.Z.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  padding: 20px 0;\n  font-size: 20px;\n  form {\n    display: flex;\n  }\n\n  input {\n    width: 400px;\n    height: 20px;\n    border: solid 1px #081c4b;\n    padding: 5px;\n    font-size: 16px;\n  }\n"]))),f=p.Z.button(i||(i=(0,u.Z)(["\n  border: none;\n  width: 140px;\n  height: 32px;\n  padding: 0 5px;\n  cursor: pointer;\n  font-family: 'Roboto Slab', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.88;\n  letter-spacing: 0.06em;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: #ffffff;\n  background-color: #081c4b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: #044813;\n  }\n"]))),g=t(184),m=function(){var n,e=(0,a.useState)(""),t=(0,o.Z)(e,2),r=t[0],i=t[1],u=(0,l.lr)(""),p=(0,o.Z)(u,2),m=p[0],x=p[1],b=null!==(n=m.get("queryMovie"))&&void 0!==n?n:"",v=(0,a.useState)((function(){return b})),Z=(0,o.Z)(v,2),y=Z[0],w=Z[1];return(0,a.useEffect)((function(){""!==y&&s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=8d99b39cb91a8ab8040b3ee85cb6e931&language=en-US&query=".concat(y,"&page=1&include_adult=false")).then((function(n){0===n.data.results.length?c.Am.warning("No movies found for your search!"):i(n.data.results)})).catch((function(n){c.Am.error("".concat(n.message))}))}),[y]),(0,g.jsxs)(h,{children:[(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),w(b)},children:[(0,g.jsx)("label",{htmlFor:"search",children:(0,g.jsx)("input",{type:"text",name:"search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:b,onChange:function(n){x({queryMovie:n.target.value})}})}),(0,g.jsx)(f,{type:"submit",children:"Search"})]}),r.length>0&&(0,g.jsx)(d.Z,{arrFilms:r}),(0,g.jsx)(c.Ix,{autoClose:3e3})]})}},5838:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,o,a=t(168),s=t(1087),c=t(7689),l=t(7691),d=t(3237),u=d.Z.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n\n  margin: 10px auto;\n  padding: 0 5px;\n  list-style: none;\n  font-size: 20px;\n"]))),p=d.Z.li(i||(i=(0,a.Z)(["\n  width: 100%;\n  margin-bottom: 5px;\n"]))),h=t(787),f=t(184),g=(0,l.ZP)(s.rU)(o||(o=(0,a.Z)(["\n  color: #000000;\n  text-decoration: none;\n  margin-right: 10px;\n  font-weight: 500;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  img {\n    margin-right: 20px;\n    display: block;\n    :hover {\n      transform: scale(1.5);\n    }\n  }\n\n  &:hover {\n    color: #7f1f58;\n  }\n"]))),m=function(n){var e=n.arrFilms,t=(0,c.TH)();return(0,f.jsx)(u,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.title,i=n.backdrop_path;return(0,f.jsx)(p,{children:(0,f.jsxs)(g,{to:"/movies/".concat(e),state:{from:t},children:[(0,f.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):h,alt:r,width:80}),r]})},e)}))})}}}]);
//# sourceMappingURL=267.4d3b36ae.chunk.js.map