"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2396],{4633:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"operations/backup_restore","title":"Backup and restore","description":"Tip: For a full working example step by step, please check also this well written article. This also explain more deeply how Casskop Backup & Restore works in background","source":"@site/docs/5_operations/3_backup_restore.md","sourceDirName":"5_operations","slug":"/operations/backup_restore","permalink":"/casskop/docs/operations/backup_restore","draft":false,"unlisted":false,"editUrl":"https://github.com/cscetbon/casskop/edit/master/website/docs/5_operations/3_backup_restore.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Backup and restore","sidebar_label":"Backup and restore"},"sidebar":"docs","previous":{"title":"Multi-CassKop","permalink":"/casskop/docs/operations/multi_casskop"},"next":{"title":"Upgrade Operator","permalink":"/casskop/docs/operations/upgrade_operator"}}');var n=a(4848),r=a(8453);const c={title:"Backup and restore",sidebar_label:"Backup and restore"},i=void 0,o={},d=[{value:"Backup",id:"backup",level:2},{value:"Supported storage",id:"supported-storage",level:3},{value:"Life cycle of the CassandraBackup object",id:"life-cycle-of-the-cassandrabackup-object",level:3},{value:"Restore",id:"restore",level:2},{value:"Rename",id:"rename",level:3},{value:"Entities",id:"entities",level:3},{value:"Datacenter",id:"datacenter",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Tip"}),": For a full working example step by step, please check also this ",(0,n.jsx)(s.a,{href:"https://cscetbon.medium.com/casskop-1-0-1-backup-and-restore-ba92f01c00df",children:"well written article"}),". This also explain more deeply how Casskop Backup & Restore works in background"]}),"\n",(0,n.jsxs)(s.p,{children:["In order to provide Backup/Restore abilities we use InstaCluster's ",(0,n.jsx)(s.a,{href:"https://github.com/instaclustr/cassandra-sidecar",children:"cassandra-sidecar project"})," and add it to each Cassandra node to spawn. We want to thant Instaclustr for the modifications they made to make it work with CassKop!"]}),"\n",(0,n.jsx)(s.h2,{id:"backup",children:"Backup"}),"\n",(0,n.jsxs)(s.p,{children:["It is possible to backup keyspaces or tables from a cluster managed by Casskop. To start or schedule a backup, you\ncreate an object of type ",(0,n.jsx)(s.a,{href:"/casskop/docs/references/cassandra_backup",children:"CassandraBackup"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'apiVersion: db.orange.com/v2\nkind: CassandraBackup\nmetadata:\n  name: nightly-cassandra-backup\n  labels:\n    app: cassandra\nspec:\n  cassandraCluster: test-cluster\n  datacenter: dc1\n  storageLocation: s3://cassie\n  snapshotTag: SnapshotTag2\n  secret: cloud-backup-secrets\n  schedule: "@midnight"\n  entities: k1.t1,k2.t3\n'})}),"\n",(0,n.jsx)(s.p,{children:"If there is no schedule defined, the backup will start as soon as it's created and won't be start again with that object.\nYou can always delete the object and recreate it though."}),"\n",(0,n.jsx)(s.h3,{id:"supported-storage",children:"Supported storage"}),"\n",(0,n.jsx)(s.p,{children:"The following storage options for storing the backups are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"s3 (as in the example above)"}),"\n",(0,n.jsx)(s.li,{children:"gcp"}),"\n",(0,n.jsx)(s.li,{children:"azure"}),"\n",(0,n.jsx)(s.li,{children:"oracle cloud"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["More details can be found on ",(0,n.jsx)(s.a,{href:"https://github.com/instaclustr/cassandra-backup",children:"Instaclustr's Cassandra backup page"})]}),"\n",(0,n.jsx)(s.h3,{id:"life-cycle-of-the-cassandrabackup-object",children:"Life cycle of the CassandraBackup object"}),"\n",(0,n.jsx)(s.p,{children:"When this object gets created, CassKop does a few checks to ensure:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The specified Cassandra cluster exists"}),"\n",(0,n.jsx)(s.li,{children:"If there is a secret that it has the expected parameters depending on the chosen backend"}),"\n",(0,n.jsxs)(s.li,{children:["If there is a schedule that its format is correct (",(0,n.jsx)(s.a,{href:"https://godoc.org/gopkg.in/robfig/cron.v3#hdr-CRON_Expression_Format",children:"Cron expressions"}),",\n",(0,n.jsx)(s.a,{href:"https://godoc.org/gopkg.in/robfig/cron.v3#hdr-Predefined_schedules",children:"Predefined schedules"})," or ",(0,n.jsx)(s.a,{href:"https://godoc.org/gopkg.in/robfig/cron.v3#hdr-Intervals",children:"Intervals"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Then, if all those checks pass, it triggers the backup if there is no schedule, or creates a Cron task with the specified schedule."}),"\n",(0,n.jsx)(s.p,{children:"When this object gets deleted, if there is a scheduled task, it is unscheduled."}),"\n",(0,n.jsx)(s.p,{children:"When this object gets updated, and the change is located in the spec section, CassKop unschedules the existing task and schedules a new one with the new parameters provided."}),"\n",(0,n.jsx)(s.h2,{id:"restore",children:"Restore"}),"\n",(0,n.jsxs)(s.p,{children:["Following the same logic, a ",(0,n.jsx)(s.a,{href:"/casskop/docs/references/cassandra_restore",children:"CassandraRestore"})," object must be created to trigger a restore, and it must refer to an\nexisting ",(0,n.jsx)(s.a,{href:"/casskop/docs/references/cassandra_backup",children:"CassandraBackup"})," object in K8S:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"apiVersion: db.orange.com/v2\nkind: CassandraRestore\nmetadata:\n  name: nightly-cassandra-backup\n  labels:\n    app: cassandra\nspec:\n  cassandraBackup: nightly-cassandra-backup\n  cassandraCluster: test-cluster\n  entities: k1.t1\n"})}),"\n",(0,n.jsx)(s.h3,{id:"rename",children:"Rename"}),"\n",(0,n.jsx)(s.p,{children:"It's possible to restore the content of tables into other existing tables. Here is an example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"apiVersion: db.orange.com/v2\nkind: CassandraRestore\nmetadata:\n  name: nightly-cassandra-backup\n  labels:\n    app: cassandra\nspec:\n  cassandraBackup: nightly-cassandra-backup\n  cassandraCluster: test-cluster\n  entities: k1.t1\n  rename:\n    k1.t1: k1.t2\n"})}),"\n",(0,n.jsx)(s.p,{children:"With the object above, table k1.t1 will be restored under k1.t2 using the backup nightly-cassandra-backup"}),"\n",(0,n.jsx)(s.h3,{id:"entities",children:"Entities"}),"\n",(0,n.jsx)(s.p,{children:"In the restore phase, you can specify a subset of the entities specified in the backup. For instance, you can backup 2\ntables and only restore one."}),"\n",(0,n.jsx)(s.h3,{id:"datacenter",children:"Datacenter"}),"\n",(0,n.jsx)(s.p,{children:"It can be specified in a backup or a restore and declares where data must be backed up or restored. If not specified it\nwill run everywhere and entities must exist if they're specified. Specifying it in a restore will declare where data\nwill be restored but as icarus truncates entities it restores, it won't prevent the truncate from cleaning data in non\nchosen datacenters."})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>i});var t=a(6540);const n={},r=t.createContext(n);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);