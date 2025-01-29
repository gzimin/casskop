"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4852],{5537:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"configuration_deployment/storage","title":"Storage","description":"Configuration","source":"@site/docs/3_configuration_deployment/3_storage.md","sourceDirName":"3_configuration_deployment","slug":"/configuration_deployment/storage","permalink":"/casskop/docs/configuration_deployment/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/cscetbon/casskop/edit/master/website/docs/3_configuration_deployment/3_storage.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Storage","sidebar_label":"Storage"},"sidebar":"docs","previous":{"title":"Cassandra Cluster","permalink":"/casskop/docs/configuration_deployment/cassandra_cluster"},"next":{"title":"Cluster topology","permalink":"/casskop/docs/configuration_deployment/cluster_topology"}}');var t=n(4848),o=n(8453);const r={title:"Storage",sidebar_label:"Storage"},i=void 0,c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Storage class",id:"storage-class",level:3},{value:"Storage scope",id:"storage-scope",level:3},{value:"Persistent volume claim management",id:"persistent-volume-claim-management",level:2},{value:"Additional storage configurations",id:"additional-storage-configurations",level:2}];function d(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"Cassandra is a stateful application. It needs to store data on disks. CassKop allows you to configure the type of\nstorage you want to use."}),"\n",(0,t.jsx)(s.h3,{id:"storage-class",children:"Storage class"}),"\n",(0,t.jsxs)(s.p,{children:["We recommend using a ",(0,t.jsx)(s.strong,{children:"custom StorageClass"})," to leverage the volume binding mode ",(0,t.jsx)(s.code,{children:"WaitForFirstConsumer"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Remember to set your CassandraCluster CRD properly to use the newly created StorageClass."})}),"\n",(0,t.jsx)(s.h3,{id:"storage-scope",children:"Storage scope"}),"\n",(0,t.jsxs)(s.p,{children:["Storage can be configured using the ",(0,t.jsx)(s.code,{children:"storage"})," property in ",(0,t.jsx)(s.code,{children:"CassandraCluster.spec"})," for global Data Centers configuration, or can be overriden at ",(0,t.jsx)(s.code,{children:"CassandraCluster.spec.topology.dc"})," level."]}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsx)(s.p,{children:"Once the Cassandra cluster is deployed, the storage cannot be changed."})}),"\n",(0,t.jsxs)(s.p,{children:["Persistent storage uses Persistent Volume Claims to provision persistent volumes for storing data.\nThe ",(0,t.jsx)(s.code,{children:"PersistentVolumeClaim"})," can use a ",(0,t.jsx)(s.code,{children:"StorageClass"})," to trigger automatic volume provisioning."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["It is recommended to use local-storage with quick ssd disk access for low latency. We have only tested the\n",(0,t.jsx)(s.code,{children:"local-storage"})," storage class within CassKop."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"CassandraCluster fragment of persistent storage definition :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'...\n  # Global configuration\n  dataCapacity: "300Gi"\n  dataStorageClass: "local-storage"\n  deletePVC: true\n  ...\n  topology:\n     dc:\n       - name: dc1\n         # DC level configuration\n         dataCapacity: "10Gi"\n         dataStorageClass: "test-storage"\n         ...\n       - name: dc2\n         ...\n  ...\n...\n\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dataCapacity"}),' (required): Defines the size of the persistent volume claim, for example, "1000Gi".']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dataStorageClass"}),"(optional): Define the type of storage to use (or use\ndefault one). We recommand to use local-storage for better performances but\nit can be any storage with high ssd througput."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"deletePVC"}),"(optional): Boolean value which specifies if the Persistent Volume Claim has to be deleted when the cluster\nis deleted. Default is ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["In this example, all statefulsets related to the ",(0,t.jsx)(s.code,{children:"dc2"})," will have the default configuration for the ",(0,t.jsx)(s.code,{children:"data"})," PV :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dataCapacity"})," : 300Gi"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dataStorageClass"}),": local-storage"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["All statefulsets related to the ",(0,t.jsx)(s.code,{children:"dc1"})," will have the specific configuration for the ",(0,t.jsx)(s.code,{children:"data"})," PV :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dataCapacity"})," : 10Gi"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dataStorageClass"})," : test-storage"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"Resizing persistent storage for existing CassandraCluster is not currently supported. You must decide the\nnecessary storage size before deploying the cluster."})}),"\n",(0,t.jsx)(s.p,{children:"The above example requires that each node has 300Gi of data volumes to persist the Cassandra data's using the\nlocal-storage storage class provider.\nThe parameter deletePVC is used to control if the data storage must persist when the according statefulset is deleted."}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"If we don't specify dataCapacity, then CassKop will use the Docker Container ephemeral storage, and\nall data will be lost in case of a cassandra node reboot."})}),"\n",(0,t.jsx)(s.h2,{id:"persistent-volume-claim-management",children:"Persistent volume claim management"}),"\n",(0,t.jsx)(s.p,{children:"When the persistent storage is used, it will create PersistentVolumeClaims with the following names:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"data-<cluster-name>-<dc-name>-<rack-name>-<idx>"})}),"\n",(0,t.jsxs)(s.p,{children:["Persistent Volume Claim for the volume used for storing data of the cluster ",(0,t.jsx)(s.code,{children:"<cluster-name>"})," for the Cassandra DC\n",(0,t.jsx)(s.code,{children:"<dc-name>"})," and the rack ",(0,t.jsx)(s.code,{children:"<rack-name>"})," for the Pod with ID ",(0,t.jsx)(s.code,{children:"<idx>"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsx)(s.p,{children:"Note that with local-storage the PVC object makes a link between the pod and the node. While this\nobject exists the pod will be sticked to the node chosen by the scheduler. If you want to move the\nCassandra node to a new Kubernetes node, you will need to manually delete the associated PVC so that the\nscheduler can choose another node for scheduling. This is covered in the Operation document."})}),"\n",(0,t.jsx)(s.h2,{id:"additional-storage-configurations",children:"Additional storage configurations"}),"\n",(0,t.jsxs)(s.p,{children:["For extra needs not covered by the default volumes managed through the CassandraCluster CRD, we are allowing you to define your own storage configurations.\nTo do this, you will configure the ",(0,t.jsx)(s.code,{children:"storageConfigs"})," property in ",(0,t.jsx)(s.code,{children:"CassandraCluster.Spec"}),". These volumes can then be used by additional sidecars if needed (see next page on sidecars)."]}),"\n",(0,t.jsx)(s.p,{children:"CassandraCluster fragment for dynamic persistent storage definition :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'# ...\n     storageConfigs:\n        - mountPath: "/var/lib/cassandra/log"\n          name: "gc-logs"\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: local-storage\n            resources:\n              requests:\n                storage: 5Gi\n        - mountPath: "/var/log/cassandra"\n          name: "cassandra-logs"\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: local-storage\n            resources:\n              requests:\n                storage: 10Gi\n# ...\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"storageConfigs"})," ",(0,t.jsx)(s.em,{children:"(required)"})," : Defines the list of storage config object, which will instantiate ",(0,t.jsx)(s.code,{children:"Persitence Volume Claim"})," and associate volume to pod of cassandra node.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"mountPath"})," ",(0,t.jsx)(s.em,{children:"(required)"})," : Defines the path into ",(0,t.jsx)(s.code,{children:"cassandra container"})," where the volume will be mounted."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"name"})," ",(0,t.jsx)(s.em,{children:"(required)"})," : Used to define the ",(0,t.jsx)(s.code,{children:"PVC"})," and ",(0,t.jsx)(s.code,{children:"VolumeMount"})," names."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pvcSpec"})," ",(0,t.jsx)(s.em,{children:"(required)"})," : pvcSpec describes the PVC used for the mountPath described above it requires a kubernetes PVC spec."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["With the above configuration, the following configuration will be added to the ",(0,t.jsx)(s.code,{children:"rack statefulset"})," definition :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"# ...\n  volumeMounts:\n  #...\n  - mountPath: /var/lib/cassandra/log\n    name: gc-logs\n  - mountPath: /var/log/cassandra\n    name: cassandra-logs\n  #...\n# ...\n  volumeClaimTemplates:\n  #...\n  - metadata:\n      name: gc-logs\n      labels:\n        app: cassandracluster\n        cassandracluster: cassandra-demo\n        cassandraclusters.db.orange.com.dc: dcsts\n        cassandraclusters.db.orange.com.rack: rack1\n        cluster: casskop\n        dc-rack: dcsts-rack1\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: local-storage\n      volumeMode: Filesystem\n  - metadata:\n      name: cassandra-logs\n      labels:\n        app: cassandracluster\n        cassandracluster: cassandra-demo\n        cassandraclusters.db.orange.com.dc: dcsts\n        cassandraclusters.db.orange.com.rack: rack1\n        cluster: casskop\n        dc-rack: dcsts-rack1\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: local-storage\n      volumeMode: Filesystem\n  #...\n# ...\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var a=n(6540);const t={},o=a.createContext(t);function r(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);