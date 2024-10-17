import{c,g as d,m as a}from"/build-v1/_shared/chunk-JU7SZQRR.js";function s(t){return d(t)}function i(t){return s(t).account}function u(t){return s(t).generator.dynamicCode}function g(t){return s(t).generator}var D=a.model("Stats",{qridsMap:a.map(a.literal(1)),stackLines:!0,from:a.optional(a.Date,()=>{let t=new Date;return t.setDate(t.getDate()-14),t}),to:a.optional(a.Date,()=>new Date),groupBy:a.optional(a.enumeration("groupBy",["day","city","country"]),"day"),chartType:a.optional(a.enumeration("chartType",["graph","table"]),"graph"),initialized:!1,noOfDays:14}).views(t=>({get qrids(){return Array.from(t.qridsMap.keys())},get codes(){let e=i(t).mycodes;return this.qrids.map(o=>e.get(o)).filter(o=>!!o)},isSelected(e){return t.qridsMap.has(e)},hasFolderAllSelected(e){return e.codes.length>0&&e.codes.every(o=>t.qridsMap.has(o.qrid))},hasFolderSomeSelected(e){return e.codes.some(o=>t.qridsMap.has(o.qrid))}})).actions(t=>({setGroupBy(e){e&&(t.groupBy=e)},setChartType(e){e&&(t.chartType=e)},setStackLines(e){t.stackLines=e},setQrids(e){t.qridsMap.replace(new Map(e.map(o=>[o,null])))},setDate(e,o){t.from=e,t.to=o},toggle(e){t.qridsMap.has(e)?t.qridsMap.delete(e):t.qridsMap.set(e,1)},setSnapshot(e){c(t,e)},toggleFolderItems(e){let o=e.codes.map(r=>r.qrid),n=t.hasFolderSomeSelected(e);for(let r of o)n?t.qridsMap.delete(r):t.qridsMap.set(r,1)},initialize(){t.initialized||(t.initialized=!0,this.selectAllCodes())},selectAllCodes(){let o=i(t).allCodes;for(let n of o)t.qridsMap.get(n.qrid)||t.qridsMap.set(n.qrid,1)},selectSpecificCodes(e){this.deselectAllCodes();for(let o of e)t.qridsMap.set(o,1);t.initialized=!0},deselectAllCodes(){t.qridsMap.clear()},setNoOfDays(e){t.noOfDays=e}}));export{s as a,i as b,u as c,g as d,D as e};
