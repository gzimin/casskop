"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6728],{9674:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var a=t(5071),n=t(4848),o=t(8453);const i={slug:"dynamics_sidecars_storage",title:"Casskop 0.5.1 - Dynamic sidecars and storage configuration feature",author:"Alexandre Guitton",author_title:"Alexandre Guitton",author_url:"https://github.com/erdrix",author_image_url:"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4",tags:["casskop","cassandra","0.5.2","sidecars","storage"]},r=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Purposes",id:"purposes",level:2},{value:"Dynamics sidecars configurations",id:"dynamics-sidecars-configurations",level:2},{value:"Sidecars : environment variables",id:"sidecars--environment-variables",level:2},{value:"Storage configuration",id:"storage-configuration",level:2},{value:"Volume Claim Template and statefulset",id:"volume-claim-template-and-statefulset",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["In a previous post, I was talking about how ",(0,n.jsx)(s.a,{href:"/casskop/blog/2020/01/15/multicasskop_gke",children:"Setting up Cassandra Multi-Site on Google Kubernetes Engine with Casskop"}),".\nSince then, two new versions ",(0,n.jsx)(s.a,{href:"https://github.com/cscetbon/casskop/releases/tag/v0.5.1-release",children:"0.5.1"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/cscetbon/casskop/releases/tag/v0.5.2-release",children:"0.5.2"})," had been released.\nIn another post, Cyril Scetbon focused on the ",(0,n.jsx)(s.a,{href:"https://medium.com/@cscetbon/new-probes-in-casskop-0-5-1-bfd1d6547967",children:"New Probes feature"})," which was added with the [PR #184\xd8(",(0,n.jsx)(s.a,{href:"https://github.com/cscetbon/casskop/pull/184",children:"https://github.com/cscetbon/casskop/pull/184"}),"),"," in this post I will focus on the dynamic sidecars and storage configurations added to the operator, which give more flexibility to users to configure their Cassandra cluster deployments."]}),"\n",(0,n.jsx)(s.h2,{id:"purposes",children:"Purposes"}),"\n",(0,n.jsxs)(s.p,{children:["During our production migration from bare metal Cassandra Cluster to Kubernetes, the main challenge was to perform the smoothest transition for our OPS teams, allowing them to reuse their homemade tools, to facilitate the cluster operationalization.\nHowever, the operator in this previous form did not leave much room for tuning statefulset and therefore the Cassandra Cluster deployed.\nYou could use the bootstrap image to customize your cassandra node configuration, but not for the tools revolving around.\nThat is why we added to the ",(0,n.jsx)(s.strong,{children:"CassandraCluster"})," the possibility to define containers into the pod in addition to the cassandra ones, these are the ",(0,n.jsx)(s.strong,{children:"sidecars"}),", and to configure extract storage for the pods (ie ",(0,n.jsx)(s.strong,{children:"VolumeClaimTemplates"})," to the Statefulset configuration)."]}),"\n",(0,n.jsx)(s.h2,{id:"dynamics-sidecars-configurations",children:"Dynamics sidecars configurations"}),"\n",(0,n.jsxs)(s.p,{children:["To keep the ",(0,n.jsx)(s.a,{href:"https://cloud.google.com/blog/products/gcp/7-best-practices-for-building-containers",children:"container\u2019s best practices"})," and address our OPS needs, we added the ability to define a dynamic list of containers into a ",(0,n.jsx)(s.strong,{children:"CassandraCluster.Spec"})," resource definition: ",(0,n.jsx)(s.a,{href:"https://github.com/cscetbon/casskop/blob/master/pkg/apis/db/v2/cassandracluster_types.go#L803",children:"cassandracluster_types.go#L803"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'spec:\n  ...\n  sidecarConfigs:\n    - args: ["tail", "-F", "/var/log/cassandra/system.log"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: cassandra-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: cassandra-logs\n    - args: ["tail", "-F", "/var/log/cassandra/gc.log.0.current"]\n      image: ez123/alpine-tini\n      imagePullPolicy: Always\n      name: gc-log\n      resources:\n        limits:\n          cpu: 50m\n          memory: 50Mi\n        requests:\n          cpu: 10m\n          memory: 10Mi\n      volumeMounts:\n        - mountPath: /var/log/cassandra\n          name: gc-logs\n  ...\n'})}),"\n",(0,n.jsxs)(s.p,{children:["These sidecars are classic ",(0,n.jsx)(s.a,{href:"https://godoc.org/k8s.io/api/core/v1#Container",children:"kubernetes container resources"}),", leaving you the full power on what you want to do.\nWith this example, we add two simple sidecars allowing to distinguish cassandra and GC logs in two different stdout."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"with this feature you can do everything you want, and obviously some bad things. This feature is not here to make a Cassandra Cluster works, the operator has everything for this, but to allow you to simplify some add-ons usage around Cassandra."})}),"\n",(0,n.jsx)(s.h2,{id:"sidecars--environment-variables",children:"Sidecars : environment variables"}),"\n",(0,n.jsxs)(s.p,{children:["All sidecars added with this configuration will have, at the container init, some of the environment variables from ",(0,n.jsx)(s.strong,{children:"cassandra container"})," merged with those defined into the sidecar container"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"CASSANDRA_CLUSTER_NAME"}),"\n",(0,n.jsx)(s.li,{children:"CASSANDRA_SEEDS"}),"\n",(0,n.jsx)(s.li,{children:"CASSANDRA_DC"}),"\n",(0,n.jsx)(s.li,{children:"CASSANDRA_RACK"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"storage-configuration",children:"Storage configuration"}),"\n",(0,n.jsxs)(s.p,{children:["In the previous version, the only option about storage was the ",(0,n.jsx)(s.a,{href:"/casskop/docs/configuration_deployment/storage",children:"data volume configuration"})," allowing you to define :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"dataCapacity"}),': Defines the size of the persistent volume claim, for example, "1000Gi".']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"dataStorageClass"}),": Defines the type of storage to use (or use default one). We recommend to use local-storage for better performances but it can be any storage with high ssd throughput."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The dynamic sidecar doesn\u2019t really suit, unless you put everything in one folder."}),"\n",(0,n.jsx)(s.admonition,{title:"Spoiler alert",type:"warning",children:(0,n.jsx)(s.p,{children:"It\u2019s not a good idea"})}),"\n",(0,n.jsxs)(s.p,{children:["That is why we add the ",(0,n.jsx)(s.code,{children:"CassandraCluster.Spec.StorageConfig"})," field, to the ",(0,n.jsx)(s.code,{children:"CassandraCluster"})," resource definition :"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'spec:\n ...\n storageConfigs:\n   - mountPath: "/var/lib/cassandra/log"\n     name: "gc-logs"\n     pvcSpec:\n       accessModes:\n         - ReadWriteOnce\n       storageClassName: local-storage\n       resources:\n         requests:\n           storage: 5Gi\n   - mountPath: "/var/log/cassandra"\n     name: "cassandra-logs"\n     pvcSpec:\n       accessModes:\n         - ReadWriteOnce\n       storageClassName: local-storage\n         resources:\n           requests:\n             storage: 10Gi\n ...\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"storageConfigs"})," : Defines the list of storage config object, which will instantiate ",(0,n.jsx)(s.code,{children:"Persitence Volume Claim"})," and associate volume to pod of cassandra node."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"mountPath"}),": Defines the path into cassandra container where the volume will be mounted."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"name"}),": Used to define the PVC and VolumeMount names."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"pvcSpec"}),": pvcSpec describes the PVC used for the mountPath described above, it requires a kubernetes PVC spec."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In this example, we add the two volumes required by our sidecars previously configured, to be able via the sidecars to access to the logs that we want to expose on the stdout."}),"\n",(0,n.jsx)(s.h2,{id:"volume-claim-template-and-statefulset",children:"Volume Claim Template and statefulset"}),"\n",(0,n.jsx)(s.p,{children:"Keep in mind that Casskop operator works on Statefulset, but have some constraints such as :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-log",children:"updates to statefulset spec for fields other than 'replicas', 'template', and 'updateStrategy' are forbidden.\n"})}),"\n",(0,n.jsx)(s.p,{children:"So if you want to add or remove some storages configurations, today you have to perform manually it, by removing the Statefulset, which will be recreated by the operator."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"It\u2019s not a sake operation, and should be performed carefully, because you will loose a rack. Maybe in some releases we will manage it, but today we assume that this operation is an exceptional one."})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/cscetbon/casskop",children:"CassKop"})," is open source so don\u2019t hesitate to try it out, contribute by first trying to fix a discovered issue and let\u2019s enhance it together!"]}),"\n",(0,n.jsxs)(s.p,{children:["In a next post, I will speak about the IP management into Casskop, and the ",(0,n.jsx)(s.a,{href:"https://github.com/cscetbon/casskop/issues/170",children:"cross IPs issue"}),", so stay connected !"]})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var a=t(6540);const n={},o=a.createContext(n);function i(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:s},e.children)}},5071:e=>{e.exports=JSON.parse('{"permalink":"/casskop/blog/dynamics_sidecars_storage","editUrl":"https://github.com/cscetbon/casskop/edit/master/website/blog/blog/2020-03-26-dynamics_sidecars_storage.md","source":"@site/blog/2020-03-26-dynamics_sidecars_storage.md","title":"Casskop 0.5.1 - Dynamic sidecars and storage configuration feature","description":"In a previous post, I was talking about how Setting up Cassandra Multi-Site on Google Kubernetes Engine with Casskop.","date":"2020-03-26T00:00:00.000Z","tags":[{"inline":true,"label":"casskop","permalink":"/casskop/blog/tags/casskop"},{"inline":true,"label":"cassandra","permalink":"/casskop/blog/tags/cassandra"},{"inline":true,"label":"0.5.2","permalink":"/casskop/blog/tags/0-5-2"},{"inline":true,"label":"sidecars","permalink":"/casskop/blog/tags/sidecars"},{"inline":true,"label":"storage","permalink":"/casskop/blog/tags/storage"}],"readingTime":3.99,"hasTruncateMarker":false,"authors":[{"name":"Alexandre Guitton","title":"Alexandre Guitton","url":"https://github.com/erdrix","imageURL":"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4","key":null,"page":null}],"frontMatter":{"slug":"dynamics_sidecars_storage","title":"Casskop 0.5.1 - Dynamic sidecars and storage configuration feature","author":"Alexandre Guitton","author_title":"Alexandre Guitton","author_url":"https://github.com/erdrix","author_image_url":"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4","tags":["casskop","cassandra","0.5.2","sidecars","storage"]},"unlisted":false,"nextItem":{"title":"Multi-Casskop on Google Kubernetes Engine","permalink":"/casskop/blog/2020/01/15/multicasskop_gke"}}')}}]);