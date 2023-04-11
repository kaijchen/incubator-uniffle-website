"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={},o="Uniffle Coordinator Guide",i={unversionedId:"Deploy/coordinator-guide",id:"Deploy/coordinator-guide",title:"Uniffle Coordinator Guide",description:"Uniffle is a unified remote shuffle service for compute engines, the role of coordinator is responsibility for",source:"@site/docs/03-Deploy/00-coordinator-guide.md",sourceDirName:"03-Deploy",slug:"/Deploy/coordinator-guide",permalink:"/docs/Deploy/coordinator-guide",draft:!1,editUrl:"https://github.com/apache/incubator-uniffle/docs/03-Deploy/00-coordinator-guide.md",tags:[],version:"current",lastUpdatedBy:"Kaijie Chen",lastUpdatedAt:1681199622,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uniffle Shuffle Client Guide",permalink:"/docs/client-guide"},next:{title:"Uniffle Shuffle Server Guide",permalink:"/docs/Deploy/server-guide"}},s={},d=[{value:"Deploy",id:"deploy",level:2},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Common settings",id:"common-settings",level:3},{value:"AccessClusterLoadChecker settings",id:"accessclusterloadchecker-settings",level:3},{value:"AccessCandidatesChecker settings",id:"accesscandidateschecker-settings",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uniffle-coordinator-guide"},"Uniffle Coordinator Guide"),(0,a.kt)("p",null,"Uniffle is a unified remote shuffle service for compute engines, the role of coordinator is responsibility for\ncollecting status of shuffle server and doing the assignment for the job."),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"This document will introduce how to deploy Uniffle coordinators."),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"unzip package to RSS_HOME")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"update RSS_HOME/bin/rss-env.sh, eg,"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'  JAVA_HOME=<java_home>\n  HADOOP_HOME=<hadoop home>\n  XMX_SIZE="16g"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"update RSS_HOME/conf/coordinator.conf, eg,"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  rss.rpc.server.port 19999\n  rss.jetty.http.port 19998\n  rss.coordinator.server.heartbeat.timeout 30000\n  rss.coordinator.app.expired 60000\n  rss.coordinator.shuffle.nodes.max 5\n  # enable dynamicClientConf, and coordinator will be responsible for most of client conf\n  rss.coordinator.dynamicClientConf.enabled true\n  # config the path of client conf\n  rss.coordinator.dynamicClientConf.path <RSS_HOME>/conf/dynamic_client.conf\n  # config the path of excluded shuffle server\n  rss.coordinator.exclude.nodes.file.path <RSS_HOME>/conf/exclude_nodes\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"update <RSS_HOME>/conf/dynamic_client.conf, rss client will get default conf from coordinator eg,"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," # MEMORY_LOCALFILE_HDFS is recommandation for production environment\n rss.storage.type MEMORY_LOCALFILE_HDFS\n # multiple remote storages are supported, and client will get assignment from coordinator\n rss.coordinator.remote.storage.path hdfs://cluster1/path,hdfs://cluster2/path\n rss.writer.require.memory.retryMax 1200\n rss.client.retry.max 100\n rss.writer.send.check.timeout 600000\n rss.client.read.buffer.size 14m\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"update <RSS_HOME>/conf/exclude_nodes, coordinator will update excluded node by this file eg,"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},' # shuffleServer\'s ip and port, connected with "-"\n 110.23.15.36-19999\n 110.23.15.35-19996\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"start Coordinator"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," bash RSS_HOME/bin/start-coordnator.sh\n")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"common-settings"},"Common settings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.server.heartbeat.timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"30000"),(0,a.kt)("td",{parentName:"tr",align:null},"Timeout if can't get heartbeat from shuffle server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.server.periodic.output.interval.times"),(0,a.kt)("td",{parentName:"tr",align:null},"30"),(0,a.kt)("td",{parentName:"tr",align:null},"The periodic interval times of output alive nodes. The interval sec can be calculated by (rss.coordinator.server.heartbeat.timeout/3 * rss.coordinator.server.periodic.output.interval.times). Default output interval is 5min.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.assignment.strategy"),(0,a.kt)("td",{parentName:"tr",align:null},"PARTITION_BALANCE"),(0,a.kt)("td",{parentName:"tr",align:null},"Strategy for assigning shuffle server, PARTITION_BALANCE should be used for workload balance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.app.expired"),(0,a.kt)("td",{parentName:"tr",align:null},"60000"),(0,a.kt)("td",{parentName:"tr",align:null},"Application expired time (ms), the heartbeat interval should be less than it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.shuffle.nodes.max"),(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"The max number of shuffle server when do the assignment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.dynamicClientConf.path"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The path of configuration file which have default conf for rss client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.exclude.nodes.file.path"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The path of configuration file which have exclude nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.exclude.nodes.check.interval.ms"),(0,a.kt)("td",{parentName:"tr",align:null},"60000"),(0,a.kt)("td",{parentName:"tr",align:null},"Update interval (ms) for exclude nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.access.checkers"),(0,a.kt)("td",{parentName:"tr",align:null},"org.apache.uniffle.coordinator.AccessClusterLoadChecker"),(0,a.kt)("td",{parentName:"tr",align:null},"The access checkers will be used when the spark client use the DelegationShuffleManager, which will decide whether to use rss according to the result of the specified access checkers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.access.loadChecker.memory.percentage"),(0,a.kt)("td",{parentName:"tr",align:null},"15.0"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimal percentage of available memory percentage of a server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.dynamicClientConf.enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"whether to enable dynamic client conf, which will be fetched by spark client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.dynamicClientConf.path"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The dynamic client conf of this cluster and can be stored in HDFS or local")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.dynamicClientConf.updateIntervalSec"),(0,a.kt)("td",{parentName:"tr",align:null},"120"),(0,a.kt)("td",{parentName:"tr",align:null},"The dynamic client conf update interval in seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.remote.storage.cluster.conf"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Remote Storage Cluster related conf with format $clusterId,$key=$value, separated by ';'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.rpc.server.port"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"RPC port for coordinator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.jetty.http.port"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Http port for coordinator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.remote.storage.select.strategy"),(0,a.kt)("td",{parentName:"tr",align:null},"APP_BALANCE"),(0,a.kt)("td",{parentName:"tr",align:null},"Strategy for selecting the remote path")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.remote.storage.io.sample.schedule.time"),(0,a.kt)("td",{parentName:"tr",align:null},"60000"),(0,a.kt)("td",{parentName:"tr",align:null},"The time of scheduling the read and write time of the paths to obtain different HDFS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.remote.storage.io.sample.file.size"),(0,a.kt)("td",{parentName:"tr",align:null},"204800000"),(0,a.kt)("td",{parentName:"tr",align:null},"The size of the file that the scheduled thread reads and writes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.remote.storage.io.sample.access.times"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of times to read and write HDFS files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.startup-silent-period.enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable the startup-silent-period to reject the assignment requests for avoiding partial assignments. To avoid service interruption, this mechanism is disabled by default. Especially it's recommended to use in coordinator HA mode when restarting single coordinator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.startup-silent-period.duration"),(0,a.kt)("td",{parentName:"tr",align:null},"20000"),(0,a.kt)("td",{parentName:"tr",align:null},"The waiting duration(ms) when conf of rss.coordinator.startup-silent-period.enabled is enabled.")))),(0,a.kt)("h3",{id:"accessclusterloadchecker-settings"},"AccessClusterLoadChecker settings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.access.loadChecker.serverNum.threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimal required number of healthy shuffle servers when being accessed by client. And when not specified, it will use the required shuffle-server number from client as the checking condition. If there is no client shuffle-server number specified, the coordinator conf of rss.coordinator.shuffle.nodes.max will be adopted")))),(0,a.kt)("h3",{id:"accesscandidateschecker-settings"},"AccessCandidatesChecker settings"),(0,a.kt)("p",null,"AccessCandidatesChecker is one of the built-in access checker, which will allow user to define the candidates list to use rss."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.access.candidates.updateIntervalSec"),(0,a.kt)("td",{parentName:"tr",align:null},"120"),(0,a.kt)("td",{parentName:"tr",align:null},"Accessed candidates update interval in seconds, which is only valid when AccessCandidatesChecker is enabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rss.coordinator.access.candidates.path"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Accessed candidates file path, the file can be stored on HDFS")))))}u.isMDXComponent=!0}}]);