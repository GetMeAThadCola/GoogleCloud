const questions = [
    {
        "question": "You are managing a large number of GCP resources across multiple projects. You need to ensure that billing alerts are set up for all projects. What is the most efficient way to manage these alerts?",
        "choices": ["Use Cloud Pub/Sub to broadcast alert conditions to all projects.", "Use Cloud Billing API to programmatically create alerts.", "Manually set up alerts in each project.", "Consolidate all projects under a single billing account and set up alerts there."],
         "answer": "Consolidate all projects under a single billing account and set up alerts there.",
        "explanation": "Consolidate all projects under a single billing account and set up alerts there.Consolidating all projects under a single billing account allows for centralized management of billing alerts, making the process more efficient."
    },
    {
        "question": "You are designing a microservices architecture for your application on Google Cloud. What Google Cloud service should you use to manage API traffic, apply rate limiting, and enforce security policies for your microservices?",
        "choices": ["Google Kubernetes Engine (GKE)", "Google Cloud Endpoints", "Google Cloud Pub/Sub", "Google Cloud Dataflow"],
         "answer": "Google Cloud Endpoints",
        "explanation": "Google Cloud Endpoints allows you to manage API traffic, apply rate limiting, and enforce security policies for microservices in a microservices architecture."
    },
    {
        "question": "Your company wants to implement a data warehousing solution in Google Cloud. Which service is suitable for this purpose and can handle large-scale data analytics workloads?",
        "choices": ["Google Cloud Dataflow", "Google BigQuery", "Google Cloud Datastore", "Google Cloud Dataprep"],
         "answer": "Google BigQuery",
        "explanation": "Google BigQuery is a fully managed, serverless, and highly scalable data warehousing and analytics service on Google Cloud."
    },
    {
        "question": "You need to create a Cloud SQL instance and ensure it's highly available. What configuration should you choose?",
        "choices": ["Configure the instance as a regional instance.", "Choose a machine type with high memory.", "Enable automatic backups.", "Use a larger disk size for better performance."],
         "answer": "Configure the instance as a regional instance.",
        "explanation": "Configure the instance as a regional instance.Configuring a Cloud SQL instance as a regional instance provides high availability by replicating the instance across two zones in the same region."
    },
    {
        "question": "You want to securely store your application's sensitive credentials and API keys in Google Cloud. Which Google Cloud service should you use for this purpose?",
        "choices": ["Google Cloud Identity and Access Management (IAM)", "Google Cloud Secret Manager", "Google Cloud KMS (Key Management Service)", "Google Cloud Storage"],
         "answer": "Google Cloud Secret Manager",
        "explanation": "Google Cloud Secret Manager is designed for securely storing and managing sensitive data such as credentials and API keys."
    },
    {
        "question": "Your company has multiple Google Cloud projects and wants to consolidate billing and access management across them. Which Google Cloud service allows you to achieve this?",
        "choices": ["Google Cloud Organization", "Google Cloud Resource Manager", "Google Cloud Billing", "Google Cloud IAM (Identity and Access Management)"],
         "answer": "Google Cloud Organization",
        "explanation": "Google Cloud Organization Google Cloud Organization allows you to consolidate billing and access management across multiple Google Cloud projects."
    },
    {
        "question": "You have an App Engine application built by your team that is running in your development environment. The application has successfully passed the necessary regression tests and you need to build a new project for your production environment.What should you do?",
        "choices": ["Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.", "Utilize the gcloud tool to build the new project named production. Copy the deployed application to the new project.", "Create a new project named production using the Cloud Console. Set up a Deployment Manager configuration file that replicates the current App Engine deployment into the newly created project.", "Deploy your application again using the gcloud tool and supply the project parameter named production to create the new project."],
         "answer": "Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.",
        "explanation": "Hence, the correct answer is: Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.The option that says: Create a new project named production using the Cloud Console. Set up a Deployment Manager configuration file that replicates the current App Engine deployment into the newly created project is incorrect because the Deployment Manager is not capable of replicating an App Engine deployment.The option that says: Deploy your application again using the gcloud tool and supply the project parameter named production to create the new project is incorrect because specifying the project parameter during deployment of the application in the App Engine does not automatically create a new project. You still need to create the project before deploying the application.The option that says: Utilize the gcloud tool to build the new project named production. Copy the deployed application to the new project is incorrect because you cannot just copy an application and put it in the new project. You need to use the gcloud app deploy command to deploy your application to App Engine."
    },
    {
        "question": "Your team is testing a new application hosted on a general-purpose Compute Engine instance that uses Zonal SSD Persistent Disk and Google Cloud Storage (GCS) to process and store data. Upon testing, you found out that the application encounters excessive disk read throttling. You have to provide the maximum disk throughput to improve performance in a cost-effective manner.What should you do?",
        "choices": ["Create a disk partition on the Zonal SSD Persistent Disk.", "Use a Regional SSD Persistent Disk instead of Zonal SSD Persistent Disk.", "Increase the number of CPU cores of the instance.", "Use a Local SSD instead of Zonal SSD Persistent Disk."],
         "answer": "Use a Local SSD instead of Zonal SSD Persistent Disk.",
        "explanation": "Use a Local SSD instead of Zonal SSD Persistent Disk.The option that says: Create a disk partition on the Zonal SSD Persistent Disk is incorrect because creating a disk partition doesn’t help to increase the throughput performance of a disk. Even when creating multiple partitions, the instance is still using the same Zonal SSD Persistent Disk which is not designed for high IOPS and low latency processing.The option that says: Increase the number of CPU cores of the instance is incorrect because increasing the CPU cores doesn’t improve the disk throughput. It may also be a waste of resources since the root cause of the issue is related to disk performance, and not CPU performance.The option that says: Use a Regional SSD Persistent Disk instead of Zonal SSD Persistent Disk is incorrect because Regional SSD Persistent Disk offers the same disk performance as Zonal SSD. The only difference is that Regional SSD Persistent Disk offers higher durability and data replication between two zones in the same region."
    },
    {
        "question": "Your company just deployed a major version release of its web application to Google App Engine. A few hours later, users started reporting a critical issue with the latest release. You decided to quickly revert back to the previous version of the application while your team is investigating the issue.What should you do?",
        "choices": ["Use the Cloud Console to go to the App Engine Versions page. Reroute 100% of the traffic to the previous working version of the application.", "On the Cloud Shell, execute the command gcloud components restore.", "Use the Cloud Console to go to the App Engine Versions page. Choose the previous web application version to split the traffic between the current and previous versions.", "Deploy the working version of your web app as a separate application. Go to App Engine settings and configure the application to route 100% of the traffic to the original version."],
         "answer": "Use the Cloud Console to go to the App Engine Versions page. Reroute 100% of the traffic to the previous working version of the application.",
        "explanation": "Traffic migration on App Engine switches the request routing between the versions within a service of your application, moving traffic from one or more versions to a single new version.To migrate traffic in App Engine using the Cloud Console, go to the Versions page:Select the version to which you want to migrate 100% of the traffic. Click Migrate traffic. Optional: When warmup requests are enabled, your traffic is migrated gradually. To migrate traffic immediately, select the option under the Show advanced options section"
    },
    {
        "question": "You have a technical report stored in an object in Google Cloud Storage (GCS) that needs to be evaluated by an external auditing firm. The report contains sensitive information, so you decided to limit the object’s access to four hours only. The auditing firm does not own a Google account where you can delegate the necessary privileges to access the object. You must implement a secure approach to do this task and have it done with the fewest possible steps.",
        "choices": ["Set up the storage bucket to host a static website and submit the object’s URL to the auditing firm. Manually delete the object from the Cloud Storage bucket after four hours.", "Edit the object’s permission to allow allUsers access. Add an object lifecycle policy to delete the object after four hours.", "Generate a signed URL and specify the expiration to four hours. Share the signed URL with the auditing firm.", "Provision a new bucket dedicated for the auditing firm. Move the object to the new bucket. Create an object lifecycle policy to remove the object after four hours."],
         "answer": "Generate a signed URL and specify the expiration to four hours. Share the signed URL with the auditing firm.",
        "explanation": "Signed URLs give time-limited read or write access to a specific Cloud Storage resource. Anyone in possession of the signed URL can use it while it’s active, regardless of whether they have a Google account."
    },
    {
        "question": "You just finished building an application and you deployed it on a Google Kubernetes Engine (GKE) cluster in a custom-mode VPC in the us-west1 region. The application exposes a TCP endpoint backed with several replicas of the application.You are running another Compute Engine instance located in the same region as your cluster, but in a different custom-mode VPC called td-compute-network. The CIDR ranges of the two VPCs do not overlap. You have to establish a connection between your Compute Engine instance and the application on GKE.You want to reduce the amount of work required to accomplish the task. What should you do?",
        "choices": ["1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Use Cloud Armor Security Policy to the load balancer to whitelist the internal IP addresses of the instances found in the managed instance group.3. Connect the two VPCs using VPC Peering.4. Configure the Compute Engine instance to use the IP address of the load balancer that you just created.", "1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Set the externalTrafficPolicy value to Cluster in the Service configuration file.3. Configure the Compute Engine instance to use the IP address of the load balancer that you just created.", "1. Provision a Service of type NodePort that uses the application’s Pods as its backend.2. Build a new Compute Engine instance named proxy with two network interfaces, each assigned to a VPC.3. Manage iptables rule on the new instance to forward traffic coming from the td-compute-network to the GKE nodes.4. Set up your Compute Engine instance to use the address of proxy in td-compute-network as endpoint.", "1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Set the annotation for the service’s metadata to service: cloud.google.com/load-balancer-type: Internal 3. Connect the two VPCs using VPC Peering.4. Configure the Compute Engine instance to use the IP address of the load balancer that you just created."],
         "answer": "1. Provision a Service of type LoadBalancer that uses the application’s Pods as its backend.2. Set the annotation for the service’s metadata to service: cloud.google.com/load-balancer-type: Internal 3. Connect the two VPCs using VPC Peering.4. Configure the Compute Engine instance to use the IP address of the load balancer that you just created.",
        "explanation": "When you specify type:LoadBalancer in the resource manifest, GKE creates a Service of the type LoadBalancer. GKE makes the appropriate Google Cloud API calls to create either an external network load balancer or an internal TCP/UDP load balancer. GKE creates an internal TCP/UDP load balancer when you add the cloud.google.com/load-balancer-type: Internal annotation; otherwise, GKE creates an external network load balancer."
    },
    {
        "question": "Your company has deployed multiple GCP resources that span across various projects and are linked to different billing accounts. Your finance team is currently analyzing cost patterns on your company’s cloud expenditure and asked you to provide a dashboard to visualize all the costs incurred. You want to finish the task as quickly as possible.",
        "choices": ["Go to the Billing page in the GCP Console. Export your Cloud Billing data to a CSV file.", "Export your Cloud Billing data to BigQuery. Use Google Data Studio to visualize the data.", "Export your Cloud Billing data to BigQuery. Use the Data Catalog to visualize the Cloud Billing data.", "Use the GCP Pricing Calculator to analyze the cost."],
         "answer": "Export your Cloud Billing data to BigQuery. Use Google Data Studio to visualize the data.",
        "explanation": "Data visualization tools can help you make sense of your BigQuery data and help you analyze the data interactively. You can use visualization tools to help you identify trends, respond to them, and make predictions using your data.Data Studio is a free data visualization tool from Google that helps you analyze and visualize your data by creating interactive and fully customizable dashboards and reports.You can use Google Data Studio to get up-to-date Cloud Billing graphs throughout the day and use labels to slice and dice your Google Cloud bill. To do this, you need to export your Cloud Billing data to a BigQuery dataset and then use this as a data source for your Data Studio report."
    },
    {
        "question": "A company has an application that uses Cloud Spanner as its backend database. After a few months of monitoring your Cloud Spanner resource, you noticed that the incoming traffic of the application has a predictable pattern. You need to set up automatic scaling that will scale up or scale down your Spanner nodes based on the incoming traffic. You don’t want to use an open-source tool as much as possible.",
        "choices": ["Set up an Autoscaler infrastructure in the same project where the Cloud Spanner is deployed to automatically scale the Cloud Spanner resources according to its CPU metric.", "Set up an alerting policy on Cloud Monitoring that sends an email alert to on-call Site Reliability Engineers (SRE) when the Cloud Spanner CPU metric exceeds the desired threshold. The SREs shall scale the resources up or down appropriately.", "Set up an alerting policy on Cloud Monitoring that sends an alert to a webhook when the Cloud Spanner CPU metric is over or under your desired threshold. Create a Cloud Function that listens to this HTTP webhook and resizes Spanner resources appropriately.", "Set up an alerting policy on Cloud Monitoring that sends an email alert to Google Cloud Support email when the Cloud Spanner CPU metric exceeds the desired threshold. The Google Support team shall scale the resources up or down appropriately."],
         "answer": "Set up an alerting policy on Cloud Monitoring that sends an alert to a webhook when the Cloud Spanner CPU metric is over or under your desired threshold. Create a Cloud Function that listens to this HTTP webhook and resizes Spanner resources appropriately.",
        "explanation": "In the scenario, you have to find a method where you can automatically scale your Cloud Spanner resources based on a traffic pattern. As much as possible, you also don’t want to use an open-source tool. Since Cloud Spanner does not scale automatically, you have to check for CPU usage of your Spanner instances and find a way to trigger your Cloud Spanner database to scale its resources accordingly. Moreover, you have to ensure that these steps are done automatically."
    },
    {
        "question": "A new auditor joins your organization and you need to add him to your team’s Google Cloud project. The auditor needs to have read access permissions but should be restricted from modifying resources in the project.How should you grant the necessary permissions to the new auditor?",
        "choices": ["Build a custom IAM role with view-only project permissions and attach it to the user's account.", "Build a custom IAM role with view-only service permissions and attach it to the user's account.", "Use the built-in existing IAM service Viewer role to grant the required permissions. Attach this role to the user's account.", "Use the built-in IAM project Viewer role to grant the required permissions. Attach this role to the user's account."],
         "answer": "Use the built-in IAM project Viewer role to grant the required permissions. Attach this role to the user's account.",
        "explanation": "There are several basic roles that existed prior to the introduction of IAM: Owner, Editor, and Viewer. These roles are concentric; that is, the Owner role includes the permissions in the Editor role, and the Editor role includes the permissions in the Viewer role. They were originally known as “primitive roles.”"
    },
    {
        "question": "Your organization plans to backup a 32 GB CCTV footage stored in a single file to a Nearline Storage bucket. For this task, a 1 Gbps WAN connection has been dedicated for your exclusive use. You want to maximize your connection speed as much as possible so you can upload the files to Cloud Storage at the quickest time.What do you think should be done to upload the file rapidly?",
        "choices": ["Using gsutil, activate parallel composite uploads during the file transfer for faster upload.", "Set the storage class of the bucket from Nearline to Regional.", "Use the Cloud Storage browser in the Google Cloud Console to upload the file.", "Lower down the value of the TCP window size when you upload the file to Cloud Storage."],
         "answer": "Using gsutil, activate parallel composite uploads during the file transfer for faster upload.",
        "explanation": "One strategy for uploading large files is called parallel composite uploads. In this upload method, a file is divided into up to 32 chunks. The chunks are uploaded in parallel to temporary objects, the final object is recreated using the temporary objects, and the temporary objects are deleted. You can use this to speed up file uplaods if disk speed and network speed are not a bottleneck."
    },
    {
        "question": "Your company has a live application deployed in a Google App Engine environment. You developed a new version of the application containing several new enhancements and you want to test it first with only 1% of users before entirely switching over to the new version.",
        "choices": ["Use gcloud app deploy to deploy a new version of the app with --traffic-split flag to split the traffic between the current and new version.", "Use gcloud app create to deploy a new app with --traffic-split flag to split the traffic between the current and new app.", "Deploy a new application that includes the enhancements. Configure App Engine to split traffic between the two applications.", "Deploy a new version of the app that includes the enhancements. Configure App Engine to split traffic between the current and new versions."],
         "answer": "Deploy a new version of the app that includes the enhancements. Configure App Engine to split traffic between the current and new versions.",
        "explanation": "Google App Engine allows you to split traffic between application versions. Traffic splitting distributes a percentage of traffic to versions of your application. You can split traffic to move 100% of traffic to a single version or to route percentages of traffic to multiple versions. Splitting traffic to two or more versions allows you to conduct A/B testing between your versions and provides control over the pace when rolling out features. YOU CAN SPLIT TRAFFIC BETWEEN TWO VERSION BUT NOT BETWEEN TWO APPS"
    },
    {
        "question": "You are currently investigating an issue that requires you to access and analyze the audit logs of several GCP projects. You need to run custom queries against these logs for the past 60 days in the easiest way possible. You want to follow Google-recommended best practices.",
        "choices": ["Configure a Cloud Function that will export all the logs to a Cloud Engine instance from Cloud Logging. Delete the Cloud Engine instance after 60 days.", "In the Google Cloud Console, export the audit logs from Cloud Logging and select Cloud Storage as the Sink destination. Create a bucket lifecycle rule to remove objects after 60 days.", "Go to Cloud Logging and select all projects in the search filter.", "Export the audit logs from Cloud Logging and select a BigQuery dataset as the Sink destination. Configure the table expiration to 60 days."],
         "answer": "Export the audit logs from Cloud Logging and select a BigQuery dataset as the Sink destination. Configure the table expiration to 60 days.",
        "explanation": "BigQuery is a serverless, highly scalable, and cost-effective multi-cloud data warehouse service. You can use SQL to quickly analyze large data like Cloud Logging logs with ease using this service. You can also set a table expiration to automate deletion to save cost. YOU USE BIGQUERY TO ANALYZE LOGS"
    },    {
        "question": "Your company has a mission-critical application deployed on Google Compute Engine. You want to avoid the accidental deletion of this instance.What should you do?",
        "choices": ["Add the tag DeletionProtection with the value set to Yes.", "Turn on the Deletion Protection feature on the instance.", "Create a snapshot of the instance.", "Deploy the application in a Managed Instance Group and add a health check to monitor the instance."],
         "answer": "Turn on the Deletion Protection feature on the instance.",
        "explanation": "The Google Compute Engine has a Deletion Protection feature that prevents users from accidentally deleting an instance. This is a must-have feature for instances with critical workloads. You can enable this upon instance creation or in the management section of an existing instance."
    },
    {
        "question": "Your company just started using Google Cloud Platform to host their application. You are tasked to ensure that the finance department can only view the billing reports of all of the company’s GCP projects. You want to follow Google’s recommended best practices.",
        "choices": ["Create a group for the finance department. Grant the roles/billing user role to the finance group.", "Create a group for the finance department. Grant the roles/billing viewer role to the finance group.", "Grant the roles/billing user role to finance users individually.", "Grant the roles/billing viewer role to finance users individually."],
         "answer": "Create a group for the finance department. Grant the roles/billing viewer role to the finance group.",
        "explanation": "To view the Cloud Billing reports for your Cloud Billing account, including viewing the cost information for all of the Cloud projects that are linked to the account, you need to be a Billing Account Administrator or Billing Account Viewer on your Cloud Billing account."
    },
    {
        "question": "You are working as a Cloud Security Officer in your company. You are asked to log all read requests and activities on your Cloud Storage bucket where you store all of the company’s sensitive data. You need to enable this feature as soon as possible because this is also a compliance requirement that will be checked on the next audit.What should you do?",
        "choices": ["Enable Data Access audit logs for Cloud Storage", "Enable Object Versioning on the bucket.", "Enable Certificate Authority (CA) Service on the bucket.", "Enable Identity-Aware Proxy feature on the Cloud Storage."],
         "answer": "Enable Data Access audit logs for Cloud Storage",
        "explanation": " Data Access logs: Entries for operations that modify objects or read a project, bucket, or object. There are several sub-types of data access logs."
    },
    {
        "question": "Your company conducts a quarterly security audit as part of its effort to comply with government requirements. You are assigned to provide IAM access to some external auditors on your company’s BigQuery audit logs. You want to follow Google-recommended practices.What should you do?",
        "choices": ["Attach the auditors’ accounts to the logging.viewer and bigQuery.dataViewer predefined IAM roles.", "Create two new custom IAM roles. Add the auditors' group to the new custom roles.", "Create two new custom IAM roles. Add the auditor user accounts to the new custom roles.", "Create a new Google group for the auditors. Attach the logging.viewer and bigQuery.dataViewer predefined IAM roles to the newly created group."],
         "answer": "Create a new Google group for the auditors. Attach the logging.viewer and bigQuery.dataViewer predefined IAM roles to the newly created group.",
        "explanation": "Rather than directly assigning permissions, you assign roles. IAM roles are collections of permissions. For example, the BigQuery Data Viewer role contains the permissions to list, read, and query BigQuery tables, but does not include permissions to create new tables or modify existing data. IAM provides many predefined roles to handle a wide range of common use cases. It also enables you to create custom roles."
    },
    {
        "question": "All employees in your organization have a Google account. Your operations team needs to manage over a hundred Compute Engine instances. The members of this team must be provided only with administrative access to the VM instances. Moreover, the security team wants to audit instance logins and ensure that the provision of credentials is operationally efficient.What should you do?",
        "choices": ["Require each member of the team to generate a new SSH key pair. Have them send their public key to you. Utilize a configuration management tool to deploy those SSH keys on each instance.", "Create a new SSH key pair. Issue the private key to each member of the team. Configure the public key in the metadata of each instance.", "Create a new SSH key pair. Issue the private key to each member of the operations team. Configure the public key as a project-wide public SSH key in your project. Lastly, allow project-wide public SSH keys on each instance.", "Require each member of the team to generate a new SSH key pair and to add the public key to their respective Google account. Then grant the compute.osAdminLogin role to the corresponding Google group of the operations team."],
         "answer": "Require each member of the team to generate a new SSH key pair and to add the public key to their respective Google account. Then grant the compute.osAdminLogin role to the corresponding Google group of the operations team.",
        "explanation": "Each member needs tp generate a key pair to ensure integrity. The public key is then added to the Google account of the team member. The compute.osAdminLogin role is granted to the corresponding Google group of the operations team."
    },
    {
        "question": "Your company is having its yearly audit. You need to grant access to a group of auditors who want to view the folders and project hierarchy on your company’s GCP account. You want to follow Google-recommended best practices.What should you do?",
        "choices": ["Create a group for the auditors. Grant roles/browser role to the group.", "Create a group for the auditors. Grant roles/viewer role to the group", "Grant roles/browser role to the auditors individually.", "Grant roles/viewer role to the auditors individually."],
         "answer": "Create a group for the auditors. Grant roles/browser role to the group.",
        "explanation": "Need to make a group for the auditors. Use the roles/browser role as it allows them to view the project and folder hierarchy."
    },
    {
        "question": "You are training four newly hired junior cloud engineers in your company. Part of their training is to familiarize themselves with Cloud Spanner. You need to provide access to these four users to view and edit table information on a Cloud Spanner instance found in the test project.What should you do?",
        "choices": ["Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.viewer --project my-project command on Cloud Shell. Attach the users to a newly created Google group and add the group to the role.", "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.viewer --project my-project command on Cloud Shell. Attach the users to the role.", "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.databaseUser command on Cloud Shell. Attach the users to a newly created Google group and add the group to the role.", "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.databaseUser command on Cloud Shell. Attach the users to the role."],
         "answer": "Using the gcloud tool, execute the gcloud iam roles describe roles/spanner.databaseUser command on Cloud Shell. Attach the users to a newly created Google group and add the group to the role.",
        "explanation": "The predefined role roles/spanner.databaseUser contains the permissions spanner.databases.read and spanner.database.write."
    },
    {
        "question": "Your company is having its yearly business audit. Your external editor needs to review the Data Access and Access Transparency audit logs of your Google Cloud Platform account. Your company also wants to keep a copy of these logs as a reference for the next audit. You want to follow Google-recommended practices on granting Cloud IAM roles.What should you do?",
        "choices": ["Grant the external auditor a custom role that has logging.logs.list and logging.logServices.list permissions. Create a log sink and export the logs to BigQuery.", "Grant the external auditor the roles/logging.privateLogViewer IAM role. Create a log sink and export the logs to Cloud Storage.", "Grant the external auditor the roles/logging.viewer IAM role. Create a log sink and export the logs to Cloud Storage.", "Grant the external auditor the Project Viewer IAM role. Create a log sink and export the logs to BigQuery."],
         "answer": "Grant the external auditor the roles/logging.privateLogViewer IAM role. Create a log sink and export the logs to Cloud Storage.",
        "explanation": "Logs Viewer ( roles/logging.viewer ) – gives you read-only access to all features of Logging, except Access Transparency logs and Data Access audit logs.Private Logs Viewer ( roles/logging.privateLogViewer ) – includes roles/logging.viewer, plus the ability to read Access Transparency logs and Data Access audit logs."
    },
    {
        "question": "You are running a group of Compute Engine instances on the Google Cloud Platform. You want to set up the necessary permissions to allow all of your instances to write data into a specific Cloud Storage bucket. You want to follow Google-recommended practices.What should you do?",
        "choices": ["Using the GCP Console, create a service account with an IAM role of storage.objectCreator. Use it for your GCE instances to get write permissions on the bucket.", "Create an authentication request from your application to access the Google API with https://www.googleapis.com/auth/devstorage.read_only as an access scope.", "Using the GCP Console, create a service account with an IAM role of storage.objectAdmin. Use it for your GCE instances to get write permissions on the bucket.", "Create an authentication request from your application to access Google API with https://www.googleapis.com/auth/compute as an access scope."],
         "answer": "Using the GCP Console, create a service account with an IAM role of storage.objectCreator. Use it for your GCE instances to get write permissions on the bucket.",
        "explanation": "Storage Object Creator (roles/storage.objectCreator) – allows users to create objects. It does not give permission to view, delete, or overwrite objects.Storage Object Admin (roles/storage.objectAdmin) – grants full control over objects, including listing, creating, viewing, and deleting objects."
    },
    {
        "question": "A senior developer in your company is assigned to manage and create service accounts for your company’s Google Cloud projects. You have to make sure that the assigned personnel is granted the least permissions to manage the projects.What should you do?",
        "choices": ["Grant the roles/iam.roleAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountKeyAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountUser role to the senior developer’s account."],
         "answer": "Grant the roles/iam.serviceAccountAdmin role to the senior developer’s account.",
        "explanation": "roles/iam.roleAdmin – Provides access to all custom roles in the project.roles/iam.serviceAccountKeyAdmin – Create and manage (and rotate) service account keys.roles/iam.serviceAccountUser – Run operations as the service account.roles/iam.serviceAccountAdmin – Create and manage service accounts."
    },
    {
        "question": "Your company is deploying an application to a Compute Engine VM instance that will run in Windows 10. You want to remotely access the instance using the Remote Desktop Protocol (RDP) to install and manage custom applications.What should you do?",
        "choices": ["Set the credentials by adding Username and Password on the VM instance Tag.", "Use the gcloud compute reset-windows-password command to retrieve credentials of the instance.", "Use the gcloud compute get-windows-password command to retrieve the credentials of the instance.", "Set the credentials by defining Username and Password on the VM instance metadata."],
         "answer": "Use the gcloud compute reset-windows-password command to retrieve credentials of the instance.",
        "explanation": "You can generate Windows passwords using either the Google Cloud Console or the gcloud command-line tool. If you forget your password, you can also use this procedure to reset it.Use the gcloud compute reset-windows-password command to create a new account and password or reset the existing account password for the logged-in user:"
    },
    {
        "question": "Your company has an application hosted on a VM instance in Google Compute Engine. This application is configured to persist its system logs on the disk. You want to stream the application logs to troubleshoot a user-reported issue.What should you do?",
        "choices": ["In the GCP Console, go to Cloud Logging and view the application logs.", "Connect to the instance using the interactive serial console and download the application logs.", "Configure a custom script that copies application logs to a Cloud Storage bucket.", "Configure the Cloud Logging Agent on the VM instance to collect the logs. Navigate to Cloud Logging in the GCP console to view the logs."],
         "answer": "Configure the Cloud Logging Agent on the VM instance to collect the logs. Navigate to Cloud Logging in the GCP console to view the logs.",
        "explanation": "Cloud Logging Agent allows you to stream logs of common third-party applications and system software. You can view these logs on Cloud Logging. Logging agent can be installed on a VM running on either Linux or Windows. You can also use this to collect logs from an Amazon EC2 instance and on-premises environment."
    },
    {
        "question": "You are working for a startup that wants to track the operational costs of its cloud resources. The startup has three separate projects on the Google Cloud Platform. You need to analyze your cost estimates on a daily and monthly basis as well as by service type across all projects for the next six months. You also want to use standard query syntax for cost analysis.What should you do?",
        "choices": ["Enable billing data export on your Cloud Billing Account. Export your billing report to a Cloud Storage bucket and import it into Google Sheets to conduct the analysis.", "Enable billing data export on your Cloud Billing Account. Export your billing report to a BigQuery dataset and write SQL queries for analysis.", "Enable billing data export on your Cloud Billing Account. Export your billing to a Cloud Storage bucket and import it into Cloud Bigtable to conduct the analysis.", "Enable billing data export on your Cloud Billing Account. Export your billing transactions to a JSON file, and produce a summary report using a desktop tool."],
         "answer": "Enable billing data export on your Cloud Billing Account. Export your billing report to a BigQuery dataset and write SQL queries for analysis.",
        "explanation": "Cloud Billing export to BigQuery enables you to export detailed Google Cloud billing data (such as usage, cost estimates, and pricing data) automatically throughout the day to a BigQuery dataset that you specify. Then you can access your Cloud Billing data from BigQuery for detailed analysis, or use a tool like Google Data Studio to visualize your data"
    },
    {
        "question": "Your company wants to review the IAM users and roles assigned on a specific Google Cloud project named finance-project. What should you do to fulfill this requirement?",
        "choices": ["Set up the Cloud SDK to run the gcloud iam roles list command and review the output.", "Using the Cloud Console, navigate to the finance-project, and go to the Roles section. From there, review the Roles and Status of the project.", "Using the Cloud Console, navigate to the finance-project, and go to the IAM section. Under the 'Permissions' tab, review the Members and Roles section.", "Use the Cloud Shell to run the gcloud iam service-accounts list command and then review the output."],
         "answer": "Using the Cloud Console, navigate to the finance-project, and go to the IAM section. Under the 'Permissions' tab, review the Members and Roles section.",
        "explanation": ""
    },
    {
        "question": "You are managing your company’s cloud resources that are residing in multiple GCP projects. You are tasked to set up centralized monitoring of all the CPU, memory, and disk metrics of your resources. You want to follow Google’s recommended best practices. What should you do",
        "choices": ["Create an export sink on each project. Export the logs on a single BigQuery dataset.", "Enable Cloud Monitoring on all projects to monitor all resources. Create a custom application that processes metrics from Cloud Monitoring.", "Configure Metrics Scope in Cloud Monitoring. Create a new scoping project and include all GCP Projects for monitoring.", "Deploy a Cloud Monitoring agent on all projects to collect metrics. Create an application that consumes and presents these metrics."],
         "answer": "Configure Metrics Scope in Cloud Monitoring. Create a new scoping project and include all GCP Projects for monitoring.",
        "explanation": "A scoping project hosts a metrics scope. Because every Google Cloud project hosts a metrics scope, every project is also a scoping project. The scoping project stores information about its metrics scope. It also stores the alerts, uptime checks, dashboards, and monitoring groups that you configure for the metrics scope. You can identify the scoping project for a metrics scope as the project selected by the Cloud Console project picker."
    },
    {
        "question": "Your company has 1 TB of unstructured data in various file formats that are securely stored on its on-premises data center. The Data Analytics team needs to perform ETL (Extract, Transform, Load) processes on these data which will eventually be consumed by a Dataflow SQL job.What should you do?",
        "choices": ["Using the gsutil command-line tool in Cloud SDK, move your on-premises data to Cloud Storage.", "Run a Dataflow import job using gcloud to upload the data into Cloud Spanner.", "Use the Google Cloud Console to import the unstructured data by performing a dump into Cloud SQL.", "Use the bq command-line tool in Cloud Shell and upload your on-premises data to Google BigQuery."],
         "answer": "Using the gsutil command-line tool in Cloud SDK, move your on-premises data to Cloud Storage.",
        "explanation": "It is stated in the scenario that you need to upload unstructured data to the Google Cloud. Among the possible sources of data for running a Dataflow SQL job, Google Cloud Storage is the only storage that can support various data formats or unstructured data."
    },
    {
        "question": "You created a test project on GCP and defined the appropriate IAM roles that will be used by the users. You now need to replicate the exact same IAM roles on the production project. Your manager wants you to accomplish this task with the fewest possible steps.",
        "choices": ["Using the Cloud Shell, run the gcloud iam roles copy command and specify the production project as the destination project.", "Utilize the CREATE ROLE FROM SELECTION functionality found in the IAM page.", "Utilize the CREATE ROLE functionality in the Cloud Console and select all applicable permissions.", "Using the Cloud Shell, run the gcloud iam roles copy command and specify your organization as the destination organization."],
         "answer": "Using the Cloud Shell, run the gcloud iam roles copy command and specify the production project as the destination project.",
        "explanation": "The gcloud iam roles copy command creates a role from an existing role into an another project. "
    },
    {
        "question": "You are assigned to deploy an application to Compute Engine on a managed instance group (MIG). You need to ensure that the application is up and running at all times, but there should only be one VM instance running on the project at any given time to save costs. What should you do?",
        "choices": ["While creating the MIG, configure the autoscaling setting to On. Set the minimum number of instances to 1. Then set the maximum number of instances to 1.", "Upon creation of the MIG, configure the autoscaling to Don’t Autoscale. Set the minimum number of instances to 1. Then set the maximum number of instances to 1.", "While creating the MIG, configure the autoscaling setting to On. Set the minimum number of instances to 1. Then set the maximum number of instances to 2", "Upon creation of the MIG, configure the autoscaling setting to Don’t Autoscale. Set the minimum number of instances to 1. Then set the maximum number of instances to 2."],
         "answer": "While creating the MIG, configure the autoscaling setting to On. Set the minimum number of instances to 1. Then set the maximum number of instances to 1.",
        "explanation": "You need autoscaling enabled incase of failure of the VM. The minimum number of instances should be 1 and the maximum number of instances should be 1."
    },
    {
        "question": "You have a microservice running on Google Kubernetes Engine (GKE) cluster running on asia-southeast1 region. The GKE cluster has the autoscaler feature enabled. You realized that you need to monitor containers in your cluster. You have to deploy a monitoring pod on each node of your cluster that transmits container metrics to a third-party cloud monitoring system.What should you do?",
        "choices": ["Deploy the monitoring pod into your cluster in a DaemonSet object.", "Deploy the monitoring pod into your GKE cluster inside a StatefulSet object.", "Create a Service object that references the monitoring pod.", "Reference the monitoring pod into your cluster in a Deployment object."],
         "answer": "Deploy the monitoring pod into your cluster in a DaemonSet object.",
        "explanation": "DaemonSets are useful for deploying ongoing background tasks that you need to run on all or certain nodes and do not require user intervention. Examples of such tasks include storage daemons like ceph, log collection daemons like fluentd, and node monitoring daemons like collectd."
    },
    {
        "question": "What is the purpose of using a Virtual Private Network",
        "choices": ["Its a virtual network implemented insiden of Google's prodction network", "To launch VM's into production ", "It is a method to detect security vulnerabilities", "To enable a secure communication method to connect two trusted enviroments through the internet"],
         "answer": "To enable a secure communication method to connect two trusted enviroments through the internet",
        "explanation": "Cloud VPN Securely connects your on-premises network to Google Cloud using an IPsec VPN tunnel. Cloud VPN is a fully-managed service that provides a highly available and scalable solution for connecting your on-premises network to your Google Cloud network. Cloud VPN is a fully-managed service that provides a highly available and scalable solution for connecting your on-premises network to your Google Cloud network."
    },
    {
        "question": "An application runs on your on premises datacenter and uses MySQL as a database engine. You want to migrate your database to the Google Cloud. Which storage service should you use?",
        "choices": ["Cloud Storage", "Cloud Spanner", "Cloud SQL", "Cloud Bigtable"],
         "answer": "Cloud SQL",
        "explanation": "Cloud SQL is a fully-managed database service that helps you set up, maintain, and manage your relational databases in the cloud. It supports several popular open-source database engines, including MySQL, PostgreSQL, and SQL. Cloud SQL is a fully-managed database service that helps you set up, maintain, and manage your relational databases in the cloud. It supports several popular open-source database engines, including MySQL, PostgreSQL, and SQL Server."
    },
    {
        "question": "Suppose you have two GCP projects. Each project has a different default region and zone. You want to effciently create a virtual machine in each of these projects using gcloud. What should you do",
        "choices": ["You should create these virtual machines manually", "You should create new named configurations using gcloud config configurations create [config name] for each project. Then, execute config list command.", "You cannot automate this process", "You should create new named configurations using gcloud config configuration create [config name] for each project. Then execute gcloud config configurations activate [config name] for each project. Then execute gclooud config configurations activate [config name] to activate the first configuration, and gcloud compute instances create to create the VM. Repeat the steps for the second configuration"],
         "answer": "You should create new named configurations using gcloud config configuration create [config name] for each project. Then execute gcloud config configurations activate [config name] for each project. Then execute gclooud config configurations activate [config name] to activate the first configuration, and gcloud compute instances create to create the VM. Repeat the steps for the second configuration",
        "explanation": "A configuration is named set of Google Cloud CLI properties. These properties are key-value pairs, organized in sections, that govern the behavior of the gcloud CLI"
    },
    {
        "question": "As a Cloud Engineer, you are responsible for monitoring all changes in Cloud Storage bucket. For each change, you must invoke an action that will verify the compliance of the change in near real-time What should you do?",
        "choices": ["You should use a Python script to get appropriate logs, analyze them, and run the security script", "You should use Cloud Function events, and call your security script from the Cloud Function triggers", "You should use Crone Scheduler to schedule your security script", "You should use the built-in traiggering mechanism of Cloud Storage to run your security script"],
         "answer": "You should use Cloud Function events, and call your security script from the Cloud Function triggers",
        "explanation": "Using Cloud Function is correct because it provides fast response and requires the minimal amount setup"
    },
    {
        "question": "You have a staic website to host. Which storage service will you use ?",
        "choices": ["Cloud SDK", "Cloud Endpoints", "Cloud Storage", "Cloud Datastore"],
         "answer": "Cloud Storage",
        "explanation": "Cloud Storage is an objet storage for companies of all sizes. Store any amount of data. Retrieve it as often as you'd like. Cloud Storage allows world-wide storage and retrieval of any amount of data at any time"
    },
    {
        "question": "Compute Engine virtual machines are ",
        "choices": ["global", "regional", "zonal", "multi-regional"],
         "answer": "zonal",
        "explanation": "Compute engine is a computing and hosting service that lets you create and run virtual machines on Google Infrastructure."
    },
    {
        "question": "To offer transactional consistency at gloabl scale you should use ...",
        "choices": ["Cloud SQL", "Cloud Spanner", "Cloud Bigtable", "Cloud Datastore"],
         "answer": "Cloud Spanner",
        "explanation": "Cloud Spanner is a fully managed, mission-critical database service that offers transactional consistency at global scale, so you can elastically scale your workload and pay only for the resources you use. Cloud Spanner is a fully managed, mission-critical database service that offers transactional consistency at global scale, so you can elastically scale your workload and pay only for the resources you use."
    },
    {
        "question": "Select the non basic (primitive) IAM roles in GCP",
        "choices": ["Admin", "Editor", "Viewer", "Owner"],
         "answer": "Admin",
        "explanation": "There are several basic roles that existed prior to the introudction of IAM: Owner, Editor and Viewer. These roles are still available in IAM, but they are not considered to be basic roles anymore. They are now considered to be composite roles. The basic roles are: Owner, Editor and Viewer."
    },
    {
        "question": "You have an existing Google Compute Engine (GCE) instance running on 2 vCPUs and 4GB memory machine type. Lately, the instance has been having trouble and is running out of memory. You plan to increase the memory of the instance to 8GB to improve performance. What should you do?",
        "choices": ["Wait for GCP to perform live migration on your VM instance to move your workload to another instance with more memory that can accommodate our issue.", "Add metadata information to the VM instance using the gcloud tool. Set the metadata key to upgrade-memory and the value to the number of memory.", "Use the gcloud compute instances stop to stop the instance . Configure the machine type with gcloud compute instances set-machine-type. Start the VM instance once done with the configuration.", "Use the Cloud Console to stop the VM instance. Edit the machine type to n1-standard-8. Start the VM instance once done with the configuration."],
         "answer": "Use the gcloud compute instances stop to stop the instance . Configure the machine type with gcloud compute instances set-machine-type. Start the VM instance once done with the configuration.",
        "explanation": " is incorrect because an n1-standard-8 machine type does not have an 8GB memory. The number 8 in n1-standard-8 represents the number of vCPUs. An n1-stnadard-8 machine type has 30GB of memory and we only need 8GB of memory so this solution is too impractical."
    },
    {
        "question": "Your team is developing a new mobile application for your company and you are working on a tight timeline. You want to use Jenkins as your CI/CD solution for your application and you need to deploy this solution as quickly as possible. What should you do?",
        "choices": ["Create an instance template with the Jenkins installation script as a startup script. Use the template to launch a managed instance group.", "Go to Google Cloud Marketplace in the GCP console and search for Jenkins. Select and configure the appropriate Jenkins solution.", "Deploy a new Kubernetes Engine cluster. Use kubectl to create deployment using Jenkins docker image.", "Deploy a new Compute Engine instance. Download and execute the Jenkins installer."],
         "answer": "Go to Google Cloud Marketplace in the GCP console and search for Jenkins. Select and configure the appropriate Jenkins solution.",
        "explanation": "Google Cloud Marketplace allows you to deploy functional software packages that run on Google Cloud. You can deploy these preconfigured solutions instantly from the Cloud Marketplace in GCP Console."
    },
    {
        "question": "You built an application and deployed it to the Google Cloud Platform. This application needs to connect to a licensing server that you plan to host on Compute Engine. You configure the application to connect to the licensing server on the 10.146.0.17 IP address. You intend to keep this setting intact to avoid manually reconfiguring the application. What should you do?",
        "choices": ["Start the licensing server with an automatically generated ephemeral IP address. Afterward, promote it to a static external IP address set to 10.0.146.0.17.", "Using the Cloud Console, create a Compute Engine instance. Configure the External IP as a static IP address and set it to 10.146.0.17.", "Using the Cloud Console, create a Compute Engine instance. Configure the Primary internal IP as a static internal IP address and set it to 10.146.0.17.", "Do not assign an IP while creating the licensing server on Compute Engine to automatically get an ephemeral internal IP address."],
         "answer": "Using the Cloud Console, create a Compute Engine instance. Configure the Primary internal IP as a static internal IP address and set it to 10.146.0.17.",
        "explanation": "Static internal IPs provide the ability to reserve internal IP addresses from the IP range configured in the subnet, then assign those reserved internal addresses to resources as needed. Reserving an internal IP address takes that address out of the dynamic allocation pool and prevents it from being used for automatic allocations. Reserving static internal IP addresses requires specific IAM permissions so that only authorized users can reserve a static internal IP address."
    },
    {
        "question": "Your team deployed a new application on a VM instance on Google Compute Engine. You are expecting large traffic in the next coming weeks as your application becomes more popular. You want to launch multiple copies of your instance to handle this traffic. You want to follow Google’s recommended best practices.",
        "choices": ["Create a snapshot of your instance boot disk. Create a custom image from the snapshot to handle the large traffic.", "Create a snapshot of your instance's base VM. Use the snapshot to launch new instances.", "Create a snapshot of your instance’s base VM. Use the snapshot to handle the large traffic.", "Create a snapshot of your instance boot disk. Create a custom image from the snapshot. Use the custom image to launch new instances."],
         "answer": "Create a snapshot of your instance boot disk. Create a custom image from the snapshot. Use the custom image to launch new instances.",
        "explanation": "When creating multiple copies of an instance, Google recommends creating a custom image from the snapshot of the persistent disk used by the instance; then use the custom image to launch a new instance. Creating an instance boot disk from a custom image is more efficient and quick when compared to creating from a disk snapshot."
    },
    {
        "question": "You deploy a web application running on a Cloud Engine instance in the asia-northeast1-a zone. You want to eliminate the risk of possible downtime due to the failure of a single Compute Engine zone while minimizing costs.",
        "choices": ["Create an instance template and deploy a managed instance group in a single zone. Configure a health check to monitor the instances.", "Create a snapshot schedule for your instance. Set up a Cloud Monitoring Alert to monitor the instance. Restore the instance using the snapshot when the instance goes down.", "Deploy multiple instances on asia-northeast1-a, asia-northeast1-b, and asia-northeast1-c. Balance the load across all zones using an Internal Load Balancer (ILB).", "Deploy another instance in asia-northeast1-b. Balance the load in asia-northeast1-a, and asia-northeast1-b using an Internal Load Balancer (ILB)."],
         "answer": "Deploy another instance in asia-northeast1-b. Balance the load in asia-northeast1-a, and asia-northeast1-b using an Internal Load Balancer (ILB).",
        "explanation": "You can host your Compute Engine resources in different geographical locations called regions. A region is composed of three or more zones. Zones are isolated locations within a region. Compute resources like VMs and persistent disks are hosted on these regions. Google recommends deploying applications in multiple regions and zones to protect them from unforeseen component failures or even sudden zonal and regional outages. This makes your application fault-tolerant and highly available."
    },
    {
        "question": "Your organization plans to backup a 32 GB CCTV footage stored in a single file to a Nearline Storage bucket. For this task, a 1 Gbps WAN connection has been dedicated for your exclusive use. You want to maximize your connection speed as much as possible so you can upload the files to Cloud Storage at the quickest time. What do you think should be done to upload the file rapidly?",
        "choices": ["Use the Cloud Storage browser in the Google Cloud Console to upload the file.", "Set the storage class of the bucket from Nearline to Regional.", "Lower down the value of the TCP window size when you upload the file to Cloud Storage.", "Using gsutil, activate parallel composite uploads during the file transfer for faster upload."],
         "answer": "Using gsutil, activate parallel composite uploads during the file transfer for faster upload.",
        "explanation": "One strategy for uploading large files is called parallel composite uploads. In this upload method, a file is divided into up to 32 chunks. The chunks are uploaded in parallel to temporary objects, the final object is recreated using the temporary objects, and the temporary objects are deleted."
    },
    {
        "question": "Your organization backs up sensitive medical data records on 5 different Cloud Storage buckets with data access logging enabled. Your audit team recently reported that an unauthorized customer service representative is viewing and downloading files from the storage. They also noticed that bucket labels are frequently changed which affects the workflow of other users. These reports prompt an investigation, and you need to quickly verify the activities of a specific user on all of the buckets.What should you do?",
        "choices": ["In the GCP Console, visit the Cloud Storage page. Click on the Configuration tab to view relevant information.", "Filter the Legacy Logs Explorer based on the findings of the audit team to find relative information about the investigation.", "Utilize the Activity Log in the GCP Console to filter information regarding the buckets and the specific user.", "Set up an alert policy in Cloud Monitoring that sends an email to the auditors so they can monitor the activity in the buckets."],
         "answer": "Filter the Legacy Logs Explorer based on the findings of the audit team to find relative information about the investigation.",
        "explanation": "The Legacy Logs viewer can filter logs based on resources, severity, including the specific time frame you want to define. You can also restrict it to display logs about a specific user towards the five storage buckets currently under investigation."
    },
    {
        "question": "Your development team wants to migrate an on-premises web application, which is hosted in multiple VMs, to the Google Cloud Platform. The new cloud infrastructure must be highly available and can scale automatically based on CPU usage. You must also be able to access the new VMs directly. You need to implement this with the least number of steps while maintaining operational efficiency. What should you do?",
        "choices": ["Deploy your application using Google Kubernetes Engine and enable horizontal pod autoscaling.", "Build an instance template on Compute Engine. Using the template, configure a managed instance group and enable autoscaling.", "Build an instance template on Compute Engine. Using the template, configure a managed instance group that scales vertically based on your preferred time of day.", "Research and implement third-party tools to build an automated workflow that scales the application up and down accordingly based on Cloud Monitoring CPU usage metrics."],
         "answer": "Build an instance template on Compute Engine. Using the template, configure a managed instance group and enable autoscaling.",
        "explanation": "Managed instance groups (MIGs) offer autoscaling capabilities that let you automatically add or delete virtual machine (VM) instances from a MIG based on increases or decreases in load. Autoscaling helps your apps gracefully handle increases in traffic and reduce costs when the need for resources is lower. You define the autoscaling policy and the autoscaler performs automatic scaling based on the measured load."
    },
    {
        "question": "You have an App Engine application built by your team that is running in your development environment. The application has successfully passed the necessary regression tests and you need to build a new project for your production environment. What should you do?",
        "choices": ["Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.", "Utilize the gcloud tool to build the new project named production. Copy the deployed application to the new project.", "Create a new project named production using the Cloud Console. Set up a Deployment Manager configuration file that replicates the current App Engine deployment into the newly created project.", "Deploy your application again using the gcloud tool and supply the project parameter named production to create the new project."],
         "answer": "Utilize the gcloud tool to build a new project named production. Deploy your team’s application to the newly created project.",
        "explanation": "Each Cloud project can contain only a single App Engine application and once created, you cannot change the location of your App Engine application.You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app’s metadata. You can use gcloud app deploy command to deploy both code and configuration to the App Engine server."
    },
    {
        "question": "You have designed a cloud solution that uses a wide variety of Google Cloud Platform Services. Your company agreed to use these cloud services but asked you to provide an estimated cost of running this cloud solution. You need to submit an estimate to properly forecast future expenses.",
        "choices": ["Provide a list of GCP services of your cloud solution and check its pricing details on the GCP products pricing page. Create a Google Sheet with a monthly estimate of GCP services cost.", "Deploy the solution on Google Cloud Platform. Leave the solution running for a week. Go to the GCP console and navigate to the Billing Report page. Multiply the 1-week cost by four to determine the monthly costs.", "Provide a list of GCP services of your cloud solution. Submit an email to GCP support with your GCP services list and ask them to estimate the monthly cost.", "Provide a list of GCP services of your cloud solution. Use the GCP Pricing Calculator and input the necessary details to get an estimated monthly cost for each GCP product."],
         "answer": "Provide a list of GCP services of your cloud solution. Use the GCP Pricing Calculator and input the necessary details to get an estimated monthly cost for each GCP product.",
        "explanation": "Operational cost is one big factor that many companies consider when looking at the cloud path. Google Cloud Platform provides a tool that gives its current and potential users an estimated cost of their GCP solution once deployed. In Google Cloud Pricing Calculator, you only need to define all the GCP services along with their specifications to get an estimate. You also have an option to save and send the estimate results via email."
    },
    {
        "question": "Your company has decided to use Google Cloud Platform to host their applications. Your network team created a VPC on GCP and connected it to your company’s on-premises network via a secure VPN. You need to create a VM instance using Google Compute Engine to host an application. This instance should not be accessible from the public Internet.",
        "choices": ["Create the VM instance outside the VPC.", "Create the VM instance with a deny-all egress firewall.", "Create the VM instance with no External IP address.", "Create the VM instance and enable the Private Google Access option."],
         "answer": "Create the VM instance with no External IP address.",
        "explanation": "VM instances that only have internal IP addresses (no external IP addresses) can use Private Google Access. They can reach the external IP addresses of Google APIs and services. The source IP address of the packet can be the primary internal IP address of the network interface or an address in an alias IP range that is assigned to the interface. If you disable Private Google Access, the VM instances can no longer reach Google APIs and services; they can only send traffic within the VPC network. Private Google Access has no effect on instances that have external IP addresses. Instances with external IP addresses can access the Internet, according to the Internet access requirements. They don’t need any special configuration to send requests to the external IP addresses of Google APIs and services."
    },
    {
        "question": "Category: ACE – Deploying and Implementing a Cloud Solution. You plan to implement new changes to a previous production deployment using the Google Cloud Deployment Manager. You want to achieve this without any resource downtime during the deployment. What command should you utilize to accomplish this?",
        "choices": [
            "gcloud deployment-manager deployments update --config {deployment-config-path}",
            "gcloud deployment-manager deployments create --config {deployment-config-path}",
            "gcloud deployment-manager deployments cancel-preview --config {deployment-config-path}",
            "gcloud deployment-manager deployments delete --config {deployment-config-path}"
        ],
        "answer": "gcloud deployment-manager deployments update --config {deployment-config-path}",
        "explanation": "The gcloud deployment-manager deployments update command updates a deployment based on a provided config file, ensuring that existing resources are modified without downtime."
    },
    
    {
        "question": "You are working as a Cloud Security Officer in your company. You are asked to log all read requests and activities on your Cloud Storage bucket where you store all of the company’s sensitive data. You need to enable this feature as soon as possible because this is also a compliance requirement that will be checked on the next audit. What should you do?",
        "choices": ["Enable Object Versioning on the bucket.", "Enable Data Access audit logs for Cloud Storage", "Enable Identity-Aware Proxy feature on the Cloud Storage.", "Enable Certificate Authority (CA) Service on the bucket."],
         "answer": "Enable Data Access audit logs for Cloud Storage",
        "explanation": "Google Cloud services write audit logs to help you answer the questions, “Who did what, where, and when?” Your Cloud projects contain only the audit logs for resources that are directly within the project. Other entities, such as folders, organizations, and Cloud Billing accounts, contain the audit logs for the entity itself.You can enable the Data Access audit logs from the IAM & Admin section of the Google Cloud Console by selecting Access Approval from the service list."
    },
    {
        "question": "You have installed the gcloud command-line interface (CLI) on your windows machine and have successfully authenticated it with your corporate Google Account. You are working on a project in which resources are mostly deployed in asia-southeast1-a zone. You want to deploy instances on this region but you don’t want to define its zone every time you run a gcloud command. What should you do?",
        "choices": ["On your CLI, set the default compute zone by running the gcloud init command.", "On your Windows machine, go to the C:\Windows\System32\drivers\etc directory. Open your host file and add this line: asia-southeast1-a compute/zone.", "On your CLI, set the asia-southeast1-a as the default compute zone by using the gcloud config set compute/zone ZONE command.", "On your CLI, set the asia-southeast1-a as the default compute zone by using the gcloud config set zone ZONE command."],
         "answer": "On your CLI, set the asia-southeast1-a as the default compute zone by using the gcloud config set compute/zone ZONE command.",
        "explanation": "Some gcloud compute commands require --region or --zone flags. To avoid specifying the zone every time you run a command, you can set a default region and zone for your project. You might be prompted to provide a --region or --zone flag or encounter an error if you run a region or zone-dependent command without setting a default region and zone.In your local client, the default region and zone set in your local client override the default region and zone set in the metadata server. For setting the default region and zone in the local client, use the following commands:gcloud config set compute/region REGION gcloud config set compute/zone ZONE"
    },

    {
        "question": "You have a Google Cloud Platform (GCP) project in your organization that is used for managing confidential files and documents. There is a need to delegate the management of buckets and files in Cloud Storage to your co-workers. You want to follow Google-recommended practices. Which of the following IAM roles should you grant to your co-workers?",
        "choices": ["Project Editor", "Storage Admin", "Storage Object Admin", "Storage Object Creator"],
         "answer": "Storage Admin",
        "explanation": "A role contains a set of permissions that allows you to perform specific actions on Google Cloud resources. To make permissions available to members, including users, groups, and service accounts, you grant roles to the members.Storage Object Creator – Allows users to create objects. Does not give permission to view, delete, or replace objects. Storage Object Viewer – Grants access to view objects and their metadata, excluding ACLs. Can also list the objects in a bucket. Storage Object Admin – Grants full control over objects, including listing, creating, viewing, and deleting objects. Storage HMAC Key Admin – Full control over HMAC keys in a project. This role can only be applied to a project. Storage Admin – Grants full control of buckets and objects. When applied to an individual bucket, control applies only to the specified bucket and objects within the bucket."
    },

    {
        "question": "You are assigned to set up a storage policy on a specific Cloud Storage Regional bucket that stores CCTV videos for your company. The files must be moved to Coldline storage after 3 months (90 days) and then automatically be deleted after a year from their creation date. What policy should you set up?",
        "choices": ["Specify Object Lifecycle Management conditions on the Cloud Storage bucket then configure the SetStorageClass action to 90 days and configure the Delete action to 275 days.", "Utilize the gsutil tool on Cloud Shell and execute the gsutil rewrite command then set the Delete action to 365 days.", "Specify Object Lifecycle Management conditions on the Cloud Storage bucket then configure the SetStorageClass action to 90 days and configure the Delete action to 365 days", "Utilize the gsutil tool on Cloud Shell and execute the gsutil rewrite command then set the Delete action to 275 days."],
         "answer": "Specify Object Lifecycle Management conditions on the Cloud Storage bucket then configure the SetStorageClass action to 90 days and configure the Delete action to 365 days.",
        "explanation": "You can assign a lifecycle management configuration to a bucket. The configuration contains a set of rules which apply to current and future objects in the bucket. When an object meets the criteria of one of the rules, Cloud Storage automatically performs a specified action on the object.The SetStorageClass action that switches the object to the storage class with the lowest at-rest storage pricing takes precedence.The Delete action deletes an object when the object meets all conditions specified in the lifecycle rule.The Age condition is satisfied when an object reaches the specified age (in days). Age is measured from the object’s creation time."
    },

    {
        "question": "You are asked to get a list of all the enabled APIs for all of the GCP Projects on your company’s GCP account as preparation for the upcoming audit. You have been instructed to use the gcloud command-line tool to complete this task. What should you do?",
        "choices": ["Use the gcloud projects list command to get the Project ID. Invoke the gcloud services list --project {ProjectID} command to get the list of enabled GCP APIs for each project.", "Use the gcloud projects list command to get the Project ID. Invoke the gcloud services list --available --project {ProjectID} command to get the list of enabled GCP APIs for each project.", "Use the gcloud projects get-list command to get the Project ID. Invoke the gcloud services list --project {ProjectID} command to get the list of enabled GCP APIs for each project.", "Use gcloud projects get-list command to get the Project ID. Invoke the gcloud services list --available --project {ProjectID} command to get the list of enabled GCP APIs for each project."],
         "answer": "Use the gcloud projects list command to get the Project ID. Invoke the gcloud services list --project {ProjectID} command to get the list of enabled GCP APIs for each project.",
        "explanation": "The gcloud projects command lets you create and manage IAM policies for projects on the Google Cloud Platform. Resources are organized hierarchically and assigned to a particular project. A Project resource is required to use Google Cloud Platform, and forms the basis for creating, enabling and using all Cloud Platform services, managing APIs, enabling billing, adding and removing collaborators, and managing permissions.The gcloud projects command has different sub-commands that you can invoke. Here’s the list of commonly used sub-commands: gcloud projects list Lists all active projects, where the active account has Owner, Editor, or Viewer permissions. Projects are listed in alphabetical order by project name. gcloud services list This command lists the services that are enabled or available to be enabled by a project. If no options are specified, the command will return enabled services for the current project. –available Return the services available to the project to enable. This list will include any services that the project has already enabled. –enabled Return the services which the project has currently enabled. –project List the services for a specific project"
    },
    {
        "question": "You have an existing Deployment Manager template deployed on the Google Cloud Platform. You recently developed some significant changes on the said template and you want to implement the new changes. But first, you need to confirm that all defined resources’ dependencies are met before deploying the template to the project. You want the quickest way to get feedback on the changes you made. What should you do?",
        "choices": ["On the Cloud Logging page of the GCP Console, visit the Logs Explorer and monitor the activity of the Deployment Manager execution by filtering the logs.", "Maximize the use of the built-in, Python-based granular logging statements within the Deployment Manager template.", "Create a deployment in the same project with the new template and use the --preview flag. Carefully observe the state of interdependent resources and if there are errors in the summary table.", "Create a deployment on a separate project with the new template using the same configuration. Monitor the project for failures."],
         "answer": "Create a deployment in the same project with the new template and use the --preview flag. Carefully observe the state of interdependent resources and if there are errors in the summary table.",
        "explanation": "After you have written a configuration file, you can preview the configuration before you create a deployment. Previewing a configuration lets you see the resources that Deployment Manager would create but does not actually instantiate any actual resources. The Deployment Manager service previews the configuration by: Expanding the full configuration, including any templates Creating a deployment and “shell” resources You can preview your configuration by using the preview query parameter."
    },
    {
        "question": "Your team is hosting a website on Google Cloud Storage (GCS). On the website, you provided links to PDF files found on your Cloud Storage. You noticed that the browser always prompts you to save the files on your local machine when you click the links on the website. You want the PDF files to be displayed on the browser window right away instead of prompting users to save the files locally.What should you do?",
        "choices": ["Activate Cloud CDN on your website", "Add a new label to the GCS bucket with a key of Content-Type and value of application/pdf.", "Activate the “Share publicly” setting on all the PDF objects in the bucket.", "Edit the PDF objects in Cloud Storage and reconfigure their Content-Type metadata into application/pdf."],
         "answer": "Edit the PDF objects in Cloud Storage and reconfigure their Content-Type metadata into application/pdf.",
        "explanation": "The most commonly set metadata is Content-Type (also known as media type), which lets browsers render the object properly. All objects have a value specified in their Content-Type metadata, but this value does not have to match the underlying type of the object. For example, if the Content-Type is not specified by the uploader and cannot be determined, it is set to application/octet-stream or application/x-www-form-urlencoded, depending on how you uploaded the object. //media.tutorialsdojo.com/google_cloud_storage_content_type.PNG Since setting the correct Content-Type lets browsers render GCS objects properly, it means that we just need to define the correct Content-Type to solve the issue. For PDF objects, we just have to set the Content-Type metadata of an object to application/ pdf."
    },
    {
        "question": "You are assigned as a team leader for a project that builds a microservice application on a Google Kubernetes (GKE) cluster. You need to ensure that this GKE cluster is patched against vulnerabilities of all severities and will always support a stable version of Kubernetes. What should you do?",
        "choices": ["In the Cloud Console, activate the Node Auto-Upgrades configuration for your Google Kubernetes Engine cluster.", "When choosing a node image for the GKE cluster on Cloud Console, select the default value of Container-Optimized OS (cos).", "In the Cloud Console, activate the Node Auto-Repair feature for your Google Kubernetes Engine cluster.", "Explicitly define the latest available cluster version for your Google Kubernetes Engine when creating the cluster."],
         "answer": "In the Cloud Console, activate the Node Auto-Upgrades configuration for your Google Kubernetes Engine cluster.",
        "explanation": "Node auto-upgrades help you keep the nodes in your cluster up-to-date with the cluster control plane (master) version when your control plane is updated on your behalf. When you create a new cluster or node pool with Google Cloud Console or the gcloud command, node auto-upgrade is enabled by default. Node pools with auto-upgrades enabled are scheduled for upgrades when they meet the selection criteria. Rollouts are phased across multiple weeks to ensure cluster and fleet stability. When the upgrade is performed, nodes are drained and re-created to match the current control plane version."
    },
    {
        "question": "Your company created a Dataproc cluster running on a Virtual Private Cloud (VPC) network within a single subnet with a CIDR range of 10.0.0.0/24. You have to deploy new VMs that can communicate with your existing cluster. However, there are neither private nor alias IP addresses available that you can use in the VPC network. You must deploy the VMs with the least possible steps. What should you do?",
        "choices": ["Expand the existing subnet range to 10.0.0.0/23.", "Set up a new Secondary CIDR Range in the VPC. Configure the VMs to use IPs from the new CIDR range.", "Set up a new VPC network and deploy the new VMs to it with a subnet of 10.0.1.0/24. Perform VPC Network Peering between the Dataproc VPC network and the new VPC network. Set up a custom Route exchange between these networks.", "Set up a new VPC network and deploy the new VMs to it. Activate VPC Peering between the new VPC network and the Dataproc cluster’s VPC network."],
         "answer": "Set up a new VPC network and deploy the new VMs to it. Activate VPC Peering between the new VPC network and the Dataproc cluster’s VPC network.",
        "explanation": "Google Cloud VPC Network Peering allows internal IP address connectivity across two Virtual Private Cloud (VPC) networks regardless of whether they belong to the same project or the same organization. VPC Network Peering enables you to connect VPC networks so that workloads in different VPC networks can communicate internally. Traffic stays within Google’s network and doesn’t traverse the public Internet. An alias IP range is either a single IP address (/32) or a CIDR block (for example, a /24 or /16) assigned to a network interface of a VM. Alias IP addresses can come from either the primary or secondary IP ranges of a subnet."
    },
    {
        "question": "Your company uses Cloud Storage to store all of its application files where objects are written once and are stored for processing. The objects are frequently accessed for a month (30 days) and are rarely accessed for the entire year. These objects must be archived for three years. The Object Lifecycle Management on the Cloud Storage bucket must be configured to minimize the storage costs. What should you do?",
        "choices": ["Create a policy that uses Nearline Storage for 30 days. Move the objects to Archive storage for three years.", "Create a policy that uses Standard storage for 30 days. Move the objects to Archive storage for three years.", "Create a policy that uses Nearline storage for 30 days. Move the objects to Coldline for one year, and then transition to Archive storage for two years.", "Create a policy that uses Standard storage for 30 days. Move the objects to Coldline for one year and afterward, transition the objects to Archive storage for two years."],
         "answer": "Create a policy that uses Standard storage for 30 days. Move the objects to Coldline for one year and afterward, transition the objects to Archive storage for two years.",
        "explanation": "Standard Storage is best for data that is frequently accessed (“hot” data) and/or stored for only brief periods of time.Nearline Storage is a low-cost, highly durable storage service for storing infrequently accessed data. Nearline Storage is a better choice than Standard Storage in scenarios where slightly lower availability, a 30-day minimum storage duration, and costs for data access are acceptable trade-offs for lowered at-rest storage costs. Nearline Storage is ideal for data that you plan to read or modify on average once per month or less. For example, if you want to continuously add files to Cloud Storage and plan to access those files once a month for analysis, Nearline Storage is a great choice. Coldline Storage is a very-low-cost, highly durable storage service for storing infrequently accessed data. Coldline Storage is a better choice than Standard Storage or Nearline Storage in scenarios where slightly lower availability, a 90-day minimum storage duration, and higher costs for data access are acceptable trade-offs for lowered at-rest storage costs. Coldline Storage is ideal for data that you plan to read or modify at most once a quarter. Note, however, that for data being kept entirely for backup or archiving purposes, Archive Storage is more cost-effective, as it offers the lowest storage costs. Archive Storage is the lowest-cost, highly durable storage service for data archiving, online backup, and disaster recovery. Unlike the “coldest” storage services offered by other Cloud providers, your data is available within milliseconds, not hours or days. It is stated in the scenario that the objects are frequently accessed only for 30 days from the time it is created. Standard Storage satisfies this requirement. After 30 days, objects are seldom accessed. For this, Coldline Storage is a better choice since this has a lower storage cost with a 90-day minimum storage duration compared to Nearline Storage. Archival Storage is best for long-term storage of objects, this will satisfy the requirement of keeping the objects in the next few years."
    },
    {
        "question": "Your team manager wants you to configure a group of autohealing Compute Engine instances that run on multiple zones for network load balancing. You want to accomplish this task with the least amount of steps possible.You have to ensure that all the Compute Engine instances are automatically recreated if they are unresponsive after three attempts with a 10-second interval. What should you do?",
        "choices": ["Build a managed instance group. Set the Autohealing health check to healthy (HTTP).", "Provision an HTTP load balancer that references its backend to an existing instance group. Configure the health check to healthy (HTTP).", "Provision an HTTP load balancer that references its backend to an existing instance group. Specify a balancing mode and set the maximum RPS (request per second) to 10.", "Build a managed instance group. Activate the autoscaling setting."],
         "answer": "Build a managed instance group. Set the Autohealing health check to healthy (HTTP).",
        "explanation": "Managed instance groups (MIGs) maintain high availability of your applications by proactively keeping your virtual machine (VM) instances available, which means in RUNNING state. If a managed instance stops running, but the change of state was not initiated by the MIG, then the MIG automatically recreates that instance. On the other hand, if the MIG intentionally stops an instance from RUNNING—for example, when an autoscaler deletes an instance—then the MIG doesn’t recreate that instance.However, relying on an instance’s state to determine application health might not be sufficient. For example, a check for whether an instance is RUNNING does not detect application failures, such as freezing, overloading, or crashing. To further improve the availability of your application and to verify that your application is responding, you can configure an autohealing policy for your MIG."
    },
    {
        "question": "A company has an application that uses Cloud Spanner as its backend database. After a few months of monitoring your Cloud Spanner resource, you noticed that the incoming traffic of the application has a predictable pattern. You need to set up automatic scaling that will scale up or scale down your Spanner nodes based on the incoming traffic. You don’t want to use an open-source tool as much as possible. What should you do?",
        "choices": ["Set up an Autoscaler infrastructure in the same project where the Cloud Spanner is deployed to automatically scale the Cloud Spanner resources according to its CPU metric.", "Set up an alerting policy on Cloud Monitoring that sends an email alert to on-call Site Reliability Engineers (SRE) when the Cloud Spanner CPU metric exceeds the desired threshold. The SREs shall scale the resources up or down appropriately.", "Set up an alerting policy on Cloud Monitoring that sends an alert to a webhook when the Cloud Spanner CPU metric is over or under your desired threshold. Create a Cloud Function that listens to this HTTP webhook and resizes Spanner resources appropriately.", "Set up an alerting policy on Cloud Monitoring that sends an email alert to Google Cloud Support email when the Cloud Spanner CPU metric exceeds the desired threshold. The Google Support team shall scale the resources up or down appropriately."],
         "answer": "Set up an alerting policy on Cloud Monitoring that sends an alert to a webhook when the Cloud Spanner CPU metric is over or under your desired threshold. Create a Cloud Function that listens to this HTTP webhook and resizes Spanner resources appropriately.",
        "explanation": "When you create a Cloud Spanner instance, you choose the number of nodes that provide compute resources for the instance. As the instance’s workload changes, Cloud Spanner does not automatically adjust the number of nodes in the instance. As a result, you need to set up several alerts or use an Autoscaler tool to ensure that the instance stays within the recommended maximums for CPU utilization and the recommended limit for storage per node. You can invoke Cloud Functions with an HTTP request using the POST, PUT, GET, DELETE, and OPTIONS HTTP methods. To create an HTTP endpoint for your function, specify –trigger-http as the trigger type when deploying your function. From the caller’s perspective, HTTP invocations are synchronous, meaning the result of the function execution will be returned in the response to the HTTP request."
    },
    {
        "question": "You have deployed a standalone application in a Compute Engine VM hosted in a private VPC. You want the application to be accessed through angat.tutorialsdojo.com URL within its VPC. You also don’t want the IP address to change in case the VM reboots or has recovered from a crash. You want to deploy a solution with minimal cost and setup. What should you do?",
        "choices": ["Reserve a static internal IP address for the VM. Create a public zone on Cloud DNS with tutorialsdojo.com as DNS. Configure the static internal IP address to resolve to angat.tutorialsdojo.com using the record set.", "Configure the DNS route using Cloud DNS. Monitor the VM status using Google Cloud’s operations suite. Modify the Cloud DNS record set if there are changes from the VM IP Address.", "Reserve a static internal IP address for the VM. Create a private zone on Cloud DNS with tutorialsdojo.com as DNS. Configure the static internal IP address to resolve to angat.tutorialsdojo.com using the record set.", "Deploy a DNS Server from Google Cloud Marketplace. Configure the VM IP address to resolve to angat.tutorialsdojo.com."],
         "answer": "Reserve a static internal IP address for the VM. Create a private zone on Cloud DNS with tutorialsdojo.com as DNS. Configure the static internal IP address to resolve to angat.tutorialsdojo.com using the record set.",
        "explanation": "DNS is a hierarchical distributed database that lets you store IP addresses and other data and look them up by name. Cloud DNS lets you publish your zones and records in DNS without the burden of managing your own DNS servers and software.Cloud DNS offers both public zones and private managed DNS zones. A public zone is visible to the public internet, while a private zone is visible only from one or more Virtual Private Cloud (VPC) networks that you specify."
    },
    {
        "question": "Your team maintains an application that receives SSL/TLS-encrypted traffic on port 443. Your customers from various parts of the globe report latency issues when accessing your application.  What should you do?",
        "choices": ["Use an External HTTP(S) Load Balancer in front of your application.", "Use an SSL Proxy Load Balancer in front of your application.", "Use an Internal HTTP(S) Load Balancer in front of your application.", "Use a TCP Proxy in front of your application."],
         "answer": "Use an SSL Proxy Load Balancer in front of your application.",
        "explanation": "The external HTTP(S) load balancer and SSL proxy load balancer terminate Transport Layer Security (TLS) in locations that are distributed globally, so as to minimize latency between clients and the load balancer. If you require geographic control over where TLS is terminated, you should use Network Load Balancing instead, and terminate TLS on backends that are located in regions appropriate to your needs."
    },
    {
        "question": "Your company uses Cloud Storage to offer storage, archive, and backup services to your customers. A client wants you to archive files that have multiple versions after 30 days. She also requires previous file versions to be accessed once a month for audit purposes. The client also asked you to ensure that the archived data can be modified at the end of the month if needed. What should you do?",
        "choices": ["Create a bucket lifecycle configuration that transitions data from a regional storage bucket after 30 days into a Nearline Storage.", "Create a bucket lifecycle configuration that transitions newer versions of data after 30 days into a Coldline Storage.", "Create a bucket lifecycle configuration that transitions newer versions of data after 30 days into a Nearline Storage.", "Create a bucket lifecycle configuration that transitions data from a regional storage bucket after 30 days into a Coldline Storage."],
         "answer": "Create a bucket lifecycle configuration that transitions newer versions of data after 30 days into a Nearline Storage.",
        "explanation": "Nearline Storage is ideal for data that you plan to read or modify on average once per month or less. For example, if you want to continuously add files to Cloud Storage and plan to access those files once a month for analysis, Nearline Storage is a great choice. Coldline Storage is ideal for data that you plan to read or modify at most once a quarter. However, for data being kept entirely for backup or archiving purposes, Archive Storage is more cost-effective than Coldline Storage, as it offers the lowest storage costs. Archive Storage is the lowest-cost, highly durable storage service for data archiving, online backup, and disaster recovery. Unlike the “coldest” storage services offered by other Cloud providers, your data is available within milliseconds, not hours or days. Unlike other Cloud Storage storage classes, Archive Storage has no availability SLA, though the typical availability is comparable to Nearline Storage and Coldline Storage. Archive Storage also has higher costs for data access and operations, as well as a 365-day minimum storage duration. Archive Storage is the best choice for data that you plan to access less than once a year."
    },
    {
        "question": "You are working on a mobile application that is backed by a NoSQL database. The DevOps administrator required you to use Cloud Datastore for your database. You need to test the mobile application and the database integration locally using an Ubuntu machine that has Google Cloud SDK installed. What should you do?",
        "choices": ["Create a VM instance that uses Ubuntu in Google Compute Engine. Attach a Service Account with the necessary permissions to access Datastore.", "Install the Google Cloud SDK on the Ubuntu Machine. Install the Datastore emulator using the gcloud components install command.", "Use the gcloud datastore export command to export all Datastore entities and save them in the Ubuntu machine.", "Install the Datastore emulator using apt-get install cloud-datastore-emulator command."],
         "answer": "Install the Google Cloud SDK on the Ubuntu Machine. Install the Datastore emulator using the gcloud components install command.",
        "explanation": "The Datastore emulator provides local emulation of the production Datastore environment. You can use the emulator to develop and test your application locally. In addition, the emulator can help you generate indexes for your production Firestore in Datastore mode instance and delete unneeded indexes. Use the following command to install the Datastore emulator. gcloud components install cloud-datastore-emulator"
    },
    {
        "question": "Your company decided to use the Google Kubernetes Engine service with local PersistentVolumes to handle its batch processing jobs. These jobs only run overnight to process non-critical workloads and can be restarted at any time. You are tasked to deploy the most cost-effective solution. What should you do?",
        "choices": ["Create a Google Kubernetes Engine Cluster. Create a node pool and select the Enable preemptible nodes checkbox.", "Create a Google Kubernetes Engine Cluster. Enable autoscaling to automatically create and delete nodes.", "Create a Google Kubernetes Engine Cluster and enable the node auto-provisioning feature.", " Create a Google Kubernetes Engine Cluster and enable Vertical Pod Autoscaling using the VerticalPodAutoscaler custom resource."],
         "answer": "Create a Google Kubernetes Engine Cluster. Create a node pool and select the Enable preemptible nodes checkbox.",
        "explanation": "Preemptible VMs are Compute Engine VM instances that last a maximum of 24 hours in general and provide no availability guarantees. Preemptible VMs are priced lower than standard Compute Engine VMs and offer the same machine types and options. You can use preemptible VMs in your GKE clusters or node pools to run batch or fault-tolerant jobs that are less sensitive to the ephemeral, non-guaranteed nature of preemptible VMs. When GKE clusters or node pools create Compute Engine VMs, the VMs behave like a managed instance group. Preemptible VMs in GKE are subject to the same limitations as preemptible instances in a managed instance group. Preemptible instances terminate after 30 seconds upon receiving a preemption notice."
    },
    {
        "question": "Your company wants to set up a new Virtual Private Cloud (VPC) behind a firewall to secure the data egress. You have to filter the traffic flowing out of the VPC. You need to configure the VPC to have the least possible number of open egress ports. What should you do?",
        "choices": ["Create a firewall rule that allows inbound traffic to specific ports needed and set its priority to 1000. Remove both the implied allow egress rule and implied allow egress rule.", "Create a firewall rule that blocks all egress traffic and allows specific ports with the same priority number.", "Create a firewall rule that blocks all egress traffic with a low-priority number of 65534. Create another firewall rule that allows egress traffic for specific ports needed with a high-priority number set to 200.", "Create a firewall rule that blocks all egress traffic with a high-priority number of 200. Create another firewall rule that allows egress traffic for specific ports needed with a high-priority number of 65534."],
         "answer": "Create a firewall rule that blocks all egress traffic with a low-priority number of 65534. Create another firewall rule that allows egress traffic for specific ports needed with a high-priority number set to 200.",
        "explanation": "The firewall rule priority is an integer from 0 to 65535, inclusive. Lower integers indicate higher priorities. If you do not specify a priority when creating a rule, it is assigned a priority of 1000. The highest priority rule applicable to a target for a given type of traffic takes precedence. Target specificity does not matter. For example, a higher priority ingress rule for certain destination ports and protocols intended for all targets overrides a similarly defined rule with lower priority for the same destination ports and protocols intended for specific targets. A rule with a deny action overrides another with an allow action only if the two rules have the same priority."
    },
    {
        "question": "Your team is building a cost-effective Disaster Recovery solution for your company. You are tasked to archive 5 TB worth of data in Cloud Storage that is only accessed quarterly. What should you do?",
        "choices": [
            "Use the Coldline Storage class to store the data.",
            "Use the Standard Storage class to store the data.",
            "Use the Nearline Storage class to store the data.",
            "Use the Archive Storage class to store the data."
        ],
        "answer": "Use the Coldline Storage class to store the data.",
        "explanation": "Coldline Storage is a very low-cost, highly durable storage service designed for data that is infrequently accessed. It is a better choice than Standard or Nearline Storage when lower availability, a 90-day minimum storage duration, and higher data access costs are acceptable trade-offs for lower storage costs. Since the data is accessed quarterly, Coldline Storage is the most suitable and cost-effective option for this scenario."
    },
    
    {
        "question": "You are asked to deploy a Node.js application in your company’s GCP environment. The application must run every time an object is deleted on a specific Cloud Storage bucket. You want to follow Google-recommended best practices. What should you do?",
        "choices": ["Deploy your application to Google Kubernetes Engine (GKE). Configure a cron job to trigger the application using Cloud Pub/Sub.", "Deploy your code to Google Cloud Functions. Set a Cloud Storage trigger when an object is deleted from your bucket.", "Create a batch job with your code by using Cloud Dataflow. Configure the bucket as a data source.", "Utilize App Engine and configure Cloud Scheduler to trigger the application using a Pub/Sub subscription."],
         "answer": "Deploy your code to Google Cloud Functions. Set a Cloud Storage trigger when an object is deleted from your bucket.",
        "explanation": "Cloud Functions can respond to change notifications emerging from Google Cloud Storage. These notifications can be configured to trigger in response to various events inside a bucket—object creation, deletion, archiving, and metadata updates. Storage-triggered functions support four trigger types. These trigger type values are used upon function deployment to specify which Cloud Storage events will trigger your functions: You need to be able to detect whenever there is a delete event on the Cloud Storage. Cloud Functions supports responding to events inside a Cloud Storage bucket. Hence, the correct answer is: Deploy your code to Google Cloud Functions. Set a Cloud Storage trigger when an object is deleted from your bucket."
    },
    {
        "question": "Your company just started using Google Cloud Platform to host their application. You are tasked to ensure that the finance department can only view the billing reports of all of the company’s GCP projects. You want to follow Google’s recommended best practices. What should you do?",
        "choices": ["Create a group for the finance department. Grant the roles/billing user role to the finance group.", "Create a group for the finance department. Grant the roles/billing viewer role to the finance group.", "Grant the roles/billing user role to finance users individually.", "Grant the roles/billing viewer role to finance users individually."],
         "answer": "Create a group for the finance department. Grant the roles/billing viewer role to the finance group.",
        "explanation": "The Cloud Billing Reports page lets you view your Google Cloud usage costs at a glance and discover and analyze trends. The Reports page displays a chart that plots usage costs for all projects linked to a Cloud Billing account. To view the Cloud Billing reports for your Cloud Billing account, including viewing the cost information for all of the Cloud projects that are linked to the account, you need to be a Billing Account Administrator or Billing Account Viewer on your Cloud Billing account. Additionally, Project Owners, Project Editors, and Project Viewers can also view Cloud Billing reports for their specific Cloud projects."
    },
    {
        "question": "Your company has hundreds of user identities in Microsoft Active Directory. Your company needs to retain the use of your Active Directory as your source of truth for user identities and authorization. Your company requires to have full control over the employees’ Google accounts for all Google services as well as your Google Cloud Platform (GCP) organization. What should you do?",
        "choices": ["Write a custom script using the Cloud Identity APIs to synchronize users to Cloud Identity.", "Export the company’s users from the Microsoft Active Directory as a CSV file. Import them into Google Cloud Identity via the Admin Console.", "Require each employee to set up a Google account using the self signup process. Mandate each employee to use their corporate email address and password.", "Utilize Google Cloud Directory Sync (GCDS) to synchronize users into Google Cloud Identity."],
         "answer": "Utilize Google Cloud Directory Sync (GCDS) to synchronize users into Google Cloud Identity.",
        "explanation": "All Google services, including Google Cloud, Google Marketing Platform, and Google Ads, rely on Google Sign-In to authenticate users. Instead of manually creating and maintaining user accounts in Cloud Identity or Google Workspace for each employee, you can federate Cloud Identity or Google Workspace with your external identity provider (IdP) such as Active Directory or Azure Active Directory. Google Cloud Directory Sync enables administrators to synchronize users, groups, and other data from an Active Directory/LDAP service to their Google Cloud domain directory."
    },
    {
        "question": "Your company heavily uses BigQuery to host the majority of its relational data. Currently, your company has thousands of datasets across hundreds of GCP projects. You are asked to find the tables that have customer_id columns across all the datasets. You want to perform this task as quickly as possible. What should you do?",
        "choices": ["Navigate to the Data Catalog page in the Cloud Console. Enter the customer_id on the search box and click search.", "Use bq ls command to list all the datasets. Check all the datasets by running a query on INFORMATION_SCHEMA.TABLES.", "Create a custom script that runs a query on INFORMATION_SCHEMA overnight to find the tables that have customer_id columns.", "Go to the BigQuery page in the Cloud Console. Use the Query Editor box to run a query on the INFORMATION_SCHEMA."],
         "answer": "Navigate to the Data Catalog page in the Cloud Console. Enter the customer_id on the search box and click search.",
        "explanation": "Data Catalog is a fully managed and highly scalable data discovery and metadata management service in GCP. This offers a unified view of all datasets. This integrates with BigQuery, Pub/Sub, Cloud Storage, and many connectors to provide a unified view and tagging mechanism for technical and business metadata."
    },
    {
        "question": "A Software as a Service (SaaS) company runs its services on GCP and has several Compute Engine instances in a private subnet for data processing and analytics. These instances require occasional access to the internet to download updates and interact with external services. The company is looking for a cost-effective solution that maintains the security of its instances. What is the most appropriate way for the company to provide internet access to the Compute Engine instances in the private subnet?",
        "choices": ["Set up a Cloud NAT gateway in the VPC and configure it for the private subnet.", "Use a NAT instance with custom routing tables to manage internet access.", "Implement a VPN connection to a network that has direct internet access.", "Assign static public IP addresses to the instances and restrict access using firewall rules."],
         "answer": "Set up a Cloud NAT gateway in the VPC and configure it for the private subnet.",
        "explanation": "Cloud NAT (Network Address Translation) is a managed service offered by Google Cloud Platform (GCP) that enables virtual machine instances in private subnets to safely access the internet without the use of public IP addresses. Outbound connections can be formed using Cloud NAT while the instances remain concealed from inbound internet traffic. This increases security by reducing the attack surface and ensuring that internal resources are kept secret. Cloud NAT is scalable and Google-managed, reducing the client’s operating responsibility."
    },
    {
        "question": "Your company has deployed multiple GCP resources that span across various projects and are linked to different billing accounts. Your finance team is currently analyzing cost patterns on your company’s cloud expenditure and asked you to provide a dashboard to visualize all the costs incurred. You want to finish the task as quickly as possible. What should you do?",
        "choices": ["Use the GCP Pricing Calculator to analyze the cost.", "Export your Cloud Billing data to BigQuery. Use the Data Catalog to visualize the Cloud Billing data.", "Export your Cloud Billing data to BigQuery. Use Google Data Studio to visualize the data.", "Go to the Billing page in the GCP Console. Export your Cloud Billing data to a CSV file."],
         "answer": "Export your Cloud Billing data to BigQuery. Use Google Data Studio to visualize the data.",
        "explanation": "Data visualization tools can help you make sense of your BigQuery data and help you analyze the data interactively. You can use visualization tools to help you identify trends, respond to them, and make predictions using your data. Data Studio is a free data visualization tool from Google that helps you analyze and visualize your data by creating interactive and fully customizable dashboards and reports."
    },
    {
        "question": "Your development team deployed a CRM web application on a managed instance group (MIG) and is ready to serve customers all over the world. You continuously update your application every week, and you are preparing to deploy the new version gradually. You need to ensure that during the deployment, the available number of instances does not decrease. What should you do?",
        "choices": ["Build a new managed instance group using an instance template that uses your web application's recent image version. Use a load balancer to direct traffic to the newly created instance group. Delete the old instance group once the instances on the new managed instance group are healthy.", "Build a new instance template that contains the latest version of your application. Update the managed instance group to use this new template. Delete the instances in the managed instance group to rebuild new instances using the new instance template.", "On the Cloud Console, select the managed instance group you want to update and click Rolling Action. Configure the Maximum surge to 1 and Maximum unavailable to 0.", "On the Cloud Console, choose the managed instance group you want to update and click Rolling Action. Set the Maximum surge to 0 and Maximum unavailable to 1."],
         "answer": "On the Cloud Console, select the managed instance group you want to update and click Rolling Action. Configure the Maximum surge to 1 and Maximum unavailable to 0.",
        "explanation": "The MIG automatic updater lets you safely deploy new versions of software to instances in your MIG and supports a flexible range of rollout scenarios, such as rolling updates and canary updates. You can control the speed and scope of deployment as well as the level of disruption to your service. Use the maxSurge option to configure how many new instances the MIG can create above its targetSize during an automated update. For example, if you set maxSurge to 5, the MIG uses the new instance template to create up to 5 new instances above your target size. Use the maxUnavailable option to configure how many instances are unavailable at any time during an automated update. For example, if you set maxUnavailable to 5, then only 5 instances are taken offline for updating at a time. Use this option to control how disruptive the update is to your service and to control the rate at which the update is deployed."
    },
    {
        "question": "Your team is building an application hosted on a VM instance in Compute Engine. The application is designed to enhance and resize images. You want your application to be able to upload images on a Cloud Storage bucket. You want to do this with the least number of steps possible without compromising security. What should you do?",
        "choices": ["Set the Cloud Storage bucket to public and configure the objects to have a randomized suffix in its object name.", "Verify if the VM instance and the bucket have the same region.", "Create a Service Account with roles/storage.objectAdmin (Storage Object Admin) role. Configure the VM instance to use the Service Account.", "Create a Service Account with roles/storage.objectCreator (Storage Object Creator) role. Configure the VM instance to use the Service Account."],
         "answer": "Create a Service Account with roles/storage.objectCreator (Storage Object Creator) role. Configure the VM instance to use the Service Account.",
        "explanation": "A service account is a special type of Google account that represents a resource instead of a user to gain access to other services or resources. You can configure a VM instance to use a Service Account to gain access to other services like Google Compute Engine.  To be able to create/upload files in Google Compute Engine, a user or service account should have at least Storage Object Creator (roles/storage.objectCreator) role or with resourcemanager.projects.get, resourcemanager.projects.list, storage.objects.create permissions."
    },
    {
        "question": "Your organization plans to migrate your on-premises environment to the Google Cloud Platform. You have several development teams that use Cassandra databases to store data from their users. You want to set up isolated environments for your development teams that contain Cassandra instances. You need to migrate to GCP as fast as possible, and you want this done with minimal support effort. What should you do?",
        "choices": ["1. Create a step-by-step guide to install Cassandra on a Compute Engine instance.2. Share the instruction guide to your development teams.", "1. Have your development teams visit the Cloud Marketplace.2. Advise them to launch a Cassandra image from the Cloud Marketplace.", "Provision a Cassandra Compute Engine instance and take a snapshot of it.", "1. Install Cassandra on a Compute Engine instance and take a snapshot. 2. Create Compute Engine instances for your development teams using the newly created snapshot."],
         "answer": "1. Have your development teams visit the Cloud Marketplace.2. Advise them to launch a Cassandra image from the Cloud Marketplace.",
        "explanation": "Google Cloud Marketplace lets you quickly deploy functional software packages that run on Google Cloud. Even if you are unfamiliar with services like Compute Engine or Cloud Storage, you can start up a familiar software package without having to manually configure the software, virtual machine (VM) instances, storage, or network settings. You can deploy a software package now, and scale that deployment later when your apps require additional capacity."
    },
    {
        "question": "You are working in a rapidly-growing FinTech company as a Google Cloud Administrator. As your company’s business expands, it needs to accelerate its project deployments in Google Cloud. You want to ensure the deployments are efficient and consistent. You want to follow Google-recommended practices. What should you do?",
        "choices": ["Use the template from Cloud Foundation Toolkit to create a repeatable Google Cloud environment. Customize the template according to the needs and deploy using Deployment Manager.", "Create a Terraform configuration for each deployment. Automate the project deployment using the same configuration.", "Use Config Connector to deploy resources for the Google Cloud projects.", "Using Cloud Shell, create a script that uses gcloud commands to deploy the environments."],
         "answer": "Use the template from Cloud Foundation Toolkit to create a repeatable Google Cloud environment. Customize the template according to the needs and deploy using Deployment Manager.",
        "explanation": "Google Cloud Deployment Manager is an infrastructure deployment service that automates the creation and management of Google Cloud resources. You can use Google Cloud Deployment Manager to create a set of Google Cloud resources and manage them as a unit called a deployment."
    },
    {
        "question": "Your company stores all of its container images on Google Artifact Registry in a project called td-devops. The development team created a Google Kubernetes Engine (GKE) cluster on a separate project and needs to download container images from the td-devops project. What should you do to ensure that Kubernetes can download the images from Artifact Registry securely?",
        "choices": ["In the Google Cloud Storage, configure the ACLs on each container image stored and provide read-write access to the service account used by the GKE nodes.", "Generate a P12 key for a new service account. Use the generated key as an imagePullSecrets in Kubernetes to access the private registry", "Upon creating the GKE cluster, set the Access Scopes setting under Node Security to Allow Full Access to all Cloud APIs.", "In the td-devops project, assign the Storage Object Viewer IAM role to the service account used by the GKE nodes."],
         "answer": "In the td-devops project, assign the Storage Object Viewer IAM role to the service account used by the GKE nodes.",
        "explanation": "Google Artifact Registry manages container images directly without relying on individual Cloud Storage buckets for each image. Instead, Artifact Registry is a unified platform that provides repository-level permissions, allowing more granular access control over specific repositories and images. To enable a Kubernetes Engine (GKE) cluster to access images stored in the Artifact Registry from another project, the appropriate IAM permissions must be set for the service account used by the GKE nodes. In this case, assigning the Artifact Registry Reader or Storage Object Viewer role (depending on the level of access needed) at the repository level in the td-devops project to the GKE service account will allow the nodes to securely pull images as needed. This approach eliminates the need for bucket-specific or object-level permissions associated with Cloud Storage, providing a simpler and more secure method for controlling access to container images."
    },
    {
        "question": "Your company strictly observes the best practice of giving least-privilege access to control the GCP projects and other resources. Your Site Reliability Engineers (SRE) team recently opened a support case to Google Cloud Support. The SREs should be able to grant permission requests from the Google Cloud Support team while working through the case. You want to follow Google-recommended practices. What should you do?",
        "choices": ["Create a Google group named sre-group. Use the predefined roles/iam.roleAdmin role and assign it to the newly created group.", "Use the predefined roles/iam.roleAdmin role and assign it to the accounts of your SREs", "Create a Google group named sre-group. Use the predefined roles/accessapproval role and assign it to the newly created group.", "Use the predefined roles/iam.organizationRoleAdmin role and assign it to the accounts of your SREs."],
         "answer": "Create a Google group named sre-group. Use the predefined roles/accessapproval role and assign it to the newly created group.",
        "explanation": "Google groups can help you manage users at scale. Each member of a Google group inherits the Identity and Access Management (IAM) roles granted to that group. This inheritance means that you can use a group’s membership to manage users’ roles instead of granting IAM roles to individual users."
    },
    {
        "question": "A senior developer in your company is assigned to manage and create service accounts for your company’s Google Cloud projects. You have to make sure that the assigned personnel is granted the least permissions to manage the projects. What should you do?",
        "choices": ["Grant the roles/iam.serviceAccountAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountKeyAdmin role to the senior developer’s account.", "Grant the roles/iam.serviceAccountUser role to the senior developer’s account.", "Grant the roles/iam.roleAdmin role to the senior developer’s account."],
         "answer": "Grant the roles/iam.serviceAccountAdmin role to the senior developer’s account.",
        "explanation": "A role contains a set of permissions that allows you to perform specific actions on Google Cloud resources. To make permissions available to members, including users, groups, and service accounts, you grant roles to the members. A service account is a special kind of account used by an application or a virtual machine (VM) instance, not a person. Applications use service accounts to make authorized API calls, authorized as either the service account itself or as Google Workspace or Cloud Identity users through domain-wide delegation."
    },
    {
        "question": "Your company is in the process of merging with another company that also uses GCP as its cloud infrastructure. Both companies manage hundreds of GCP projects and have their own billing accounts. Your company’s finance officer asked you to consolidate the costs for both GCP Organizations into a single invoice and submit it by tomorrow. What should you do?",
        "choices": ["Configure a third GCP Organization linked to a new billing account. Migrate the projects of both Organizations into the newly created Organization by creating a support case to Google. Configure the projects to use the newly created billing account.", "Create a BigQuery dataset and configure both Organizations to export their billing data into the same dataset.", "Open a support case to Google to migrate the projects of the other company into your Organization. Link your billing account to your Organization.", "Attach your Organization's billing account to the projects of the other Organization."],
         "answer": "Attach your Organization's billing account to the projects of the other Organization.",
        "explanation": "The link between projects and billing accounts is preserved, irrespective of the hierarchy. When you move your existing projects into the organization, they will continue to work and be billed as they used to before the migration, even if the corresponding billing account has not been migrated yet. Similarly, if you move a billing account into the organization, all projects linked to it will continue to work even if they are still outside of the organization. There should be no server downtime or impact as a result of migration."
    },
    {
        "question": "You have a technical report stored in an object in Google Cloud Storage (GCS) that needs to be evaluated by an external auditing firm. The report contains sensitive information, so you decided to limit the object’s access to four hours only. The auditing firm does not own a Google account where you can delegate the necessary privileges to access the object. You must implement a secure approach to do this task and have it done with the fewest possible steps.What should you do?",
        "choices": ["Generate a signed URL and specify the expiration to four hours. Share the signed URL with the auditing firm.", "Edit the object’s permission to allow allUsers access. Add an object lifecycle policy to delete the object after four hours.", "Provision a new bucket dedicated for the auditing firm. Move the object to the new bucket. Create an object lifecycle policy to remove the object after four hours.", "Set up the storage bucket to host a static website and submit the object’s URL to the auditing firm. Manually delete the object from the Cloud Storage bucket after four hours."],
         "answer": "Generate a signed URL and specify the expiration to four hours. Share the signed URL with the auditing firm.",
        "explanation": "A signed URL is a URL that provides limited permission and time to make a request. Signed URLs contain authentication information in their query string, allowing users without credentials to perform specific actions on a resource. When you generate a signed URL, you specify a user or service account which must have sufficient permission to make the request that the signed URL will make. After you generate a signed URL, anyone who possesses it can use the signed URL to perform specified actions, such as reading an object within a specified period of time."
    },
    {
        "question": "You developed a decoupled application that is set to be deployed on a Kubernetes cluster on Google Kubernetes Engine (GKE). You need to be able to run on high IOPS for the application’s high-performance computing and you also need to use disk snapshots as part of your disaster recovery strategy. You used the GCP Pricing Calculator to generate a cost estimate and entered some information regarding your cluster, such as the number of nodes, average days, and average hours. What should you do next?",
        "choices": ["Enter the number of Local SSDs you want to use. Check the option to add the cost estimate for GKE cluster management.", "Enter the number of Local SSDs you want to use. Fill out Persistent Disk storage and snapshot storage fields.", "Request for quotation from the GCP Cloud Support Team.", "Tick the add GPUs option. Check the option to add the cost estimate for GKE cluster management."],
         "answer": "Enter the number of Local SSDs you want to use. Fill out Persistent Disk storage and snapshot storage fields.",
        "explanation": "GKE clusters accrue a management fee, irrespective of cluster size or topology. One zonal (single-zone or multi-zonal) cluster per billing account is free. GKE cluster management fees do not apply to Anthos clusters. Unlike Persistent Disks, Local SSDs are physically attached to the server that hosts your VM instance. This tight coupling offers superior performance, very high input/output operations per second (IOPS), and very low latency compared to persistent disks."
    },

    {
        "question": "You have been assigned to launch three new Compute Engine instances in your test environment in GCP. These servers should accept incoming TCP traffic on port 8080 and can be managed using RDP. You want to follow Google-recommended best practices in configuring an instance firewall. What should you do?",
        "choices": ["Create a firewall rule to allow incoming TCP traffic in ports 8080 and 3389, then leave the firewall target to default.", "Add a network tag for the three instances. Create an ingress firewall rule that allows UDP traffic in ports 8080 and 636, then specify the instance’s network tag as the target tag.", "Create an egress firewall rule using gcloud compute firewall-rules create command and specify the network tags and ports.", "Create a network tag for the three instances. Create an ingress firewall rule that allows TCP traffic in ports 8080 and 3389 then specify the instance’s network tag as target tags."],
         "answer": "Create a network tag for the three instances. Create an ingress firewall rule that allows TCP traffic in ports 8080 and 3389 then specify the instance’s network tag as target tags.",
        "explanation": "A tag is simply a character string added to a tags field in a resource, such as Compute Engine virtual machine (VM) instances or instance templates. Tags enable you to make firewall rules and routes applicable to specific VM instances. You can assign network tags to new VMs at the creation time or edit the set of assigned tags at any time later. Modifying network tags of a running VM can be done without it being stopped. Firewall rules are defined at the network level and only apply to the network where they are created; however, the name you choose for each of them must be unique to the project."
    },

    {
        "question": "Your manager asked you to confirm the creation time of a specific Google Cloud service account used by the development team. What should you do?",
        "choices": ["In the Logs Explorer, select Project as the scope and select policy as the log type. Click Run Query.", "In the Logs Explorer, go to Library Queries. Run the query for Service Account creation key logs under the IAM service.", "In the Logs Explorer, select activity as the log type and Service Account as the resource type. Click Stream logs.", "In the Logs Explorer, select activity as the log type and Service Account as the resource type. Click Run Query."],
         "answer": "In the Logs Explorer, select activity as the log type and Service Account as the resource type. Click Run Query.",
        "explanation": "Admin Activity audit logs contain log entries for API calls or other actions that modify the configuration or metadata of resources. For example, these logs record when users create VM instances or change Identity and Access Management permissions."
    },

    {
        "question": "Your team built a decoupled e-commerce application on a Google Kubernetes Engine (GKE) cluster that runs multiple pods. The nodes on the default node pool run on an n2-standard-2 machine type. You are required to deploy additional pods configured to use n2-highmem-48 machine types. The application serves mission-critical requests, and you need to implement this change without causing any downtime. What should you do?",
        "choices": ["Using the Cloud Console, run the gcloud container clusters upgrade command. Deploy the additional pods.", "Build a new cluster with a node pool that contains both n2-standard-2 and n2-highmem-48 nodes. Redeploy all the pods used for the application, including the new pods, and delete the old cluster.", "Build a new node pool and specify the nodes to use n2-highmem-48 machine type. Deploy the additional pods.", "Build a new cluster with a node pool that contains n2-highmem-48 nodes. Redeploy all the pods used for the application and delete the old cluster."],
         "answer": "Build a new node pool and specify the nodes to use n2-highmem-48 machine type. Deploy the additional pods.",
        "explanation": "A node pool is a group of nodes within a cluster that all have the same configuration. Node pools use a NodeConfig specification. Each node in the pool has a Kubernetes node label, cloud.google.com/gke-nodepool, which has the node pool’s name as its value. A node pool can contain one or multiple nodes. When you create a cluster, the number of nodes and type of nodes that you specify becomes the default node pool. Then, you can add additional custom node pools of different sizes and types to your cluster. All nodes in any given node pool are identical to one another."
    },

    {
        "question": "Your company regularly executes a batch job process hosted in an on-premises server which takes around 33 hours in total to complete. The batch job consists of smaller tasks that can be performed offline and can be restarted in case of process interruption. You are assigned to migrate this workload to the Google Cloud Platform and implement a cost-effective solution. What should you do?",
        "choices": ["Move your workload to a Compute Engine instance. Start and stop the instance in the event of failure.", "Use Google Kubernetes Engine (GKE) to build Preemptible nodes.", "Build an instance template configured to launch a Preemptible VM. Provision a managed instance group (MIG) from the template you just created. Adjust the Target CPU Utilization setting.", "Use Compute Engine Preemptible VMs for your workload."],
         "answer": "Build an instance template configured to launch a Preemptible VM. Provision a managed instance group (MIG) from the template you just created. Adjust the Target CPU Utilization setting.",
        "explanation": "Managed instance groups (MIGs) let you operate apps on multiple identical VMs. You can make your workloads scalable and highly available by taking advantage of automated MIG services, including: autoscaling, autohealing, regional (multiple zone) deployment, and automatic updating."
    },

    {
        "question": "Your company is having its yearly audit. You need to grant access to a group of auditors who want to view the folders and project hierarchy on your company’s GCP account. You want to follow Google-recommended best practices. What should you do?",
        "choices": ["Create a group for the auditors. Grant roles/browser role to the group.", "Create a group for the auditors. Grant roles/viewer role to the group.", "Grant roles/browser role to the auditors individually.", "Grant roles/viewer role to the auditors individually."],
         "answer": "Create a group for the auditors. Grant roles/browser role to the group.",
        "explanation": "Google Cloud resources are organized hierarchically. Starting from the bottom of the hierarchy, projects are the first level, and they contain other resources. All resources except for organizations have exactly one parent. The Organization is at the top of the hierarchy and does not have a parent."
    },
    {
        "question": "You are developing your product on a Kubernetes cluster in the Google Cloud Platform. You dedicate one Pod for each of your customers, and they are allowed to deploy untrusted code in their respective Pod. Knowing this, you want to make sure that you isolate the Pods from each other to avoid issues. What should you do?",
        "choices": ["Utilize the cos_containerd image when creating GKE nodes. Add a nodeSelector field to your pod configuration with the value of cloud.google.com/gke-os-distribution: cos_containerd.", "Add a custom node pool and configure the Enable sandbox with gVisor option. Add the runtimeClassName:gvisor parameter to each of your customers’ Pods.", "Whitelist the container images used by your customers' Pods using Binary Authorization.", "Identify security vulnerabilities among the containers used by your customers' Pods using the Container Analysis API."],
         "answer": "Add a custom node pool and configure the Enable sandbox with gVisor option. Add the runtimeClassName:gvisor parameter to each of your customers’ Pods.",
        "explanation": "Binary Authorization is a deploy-time security control that ensures only trusted container images are deployed on Google Kubernetes Engine (GKE). Container Analysis API is an implementation of the Grafeas API, which stores and enables querying and retrieval of critical metadata about all of your software artifacts. NodeSelector is the simplest recommended form of node selection constraint. Basically, NodeSelector is a field of PodSpec. It specifies a map of key-value pairs. For the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels. The most common usage is one key-value pair."
    },
    {
        "question": "You are running VMs that are currently reaching the maximum capacity on your on-premises data center. You decided to extend your data center infrastructure to Google Cloud to accommodate new workloads. You have to ensure that the VMs that you provisioned in GCP can communicate directly with on-premises resources via a private IP range. What should you do?",
        "choices": ["Create a VPC on Google Cloud and configure it as a host for a Shared VPC.", "Provision virtual machines on your on-premises and Google Cloud VPC networks that will serve as bastion hosts. Configure the VMs as proxy servers using public IP addresses.", "Build a custom-mode VPC. Set up VPC Network Peering between your on-premises network and your newly created VPC to establish a connection through a private IP range.", "Set up Cloud VPN between your on-premises network to a VPC network through an IPsec VPN connection."],
         "answer": "Set up Cloud VPN between your on-premises network to a VPC network through an IPsec VPN connection.",
        "explanation": "On-premises hosts can reach Google APIs and services by using Cloud VPN or Cloud Interconnect from your on-premises network to Google Cloud. On-premises hosts can send traffic from the following types of source IP addresses:"
    },
    {
        "question": "Your team is planning to move a mission-critical application to GCP. Your team decided to do a lift-and-shift migration strategy and host it in a Google Compute Engine. The application is monolithic and requires a custom number of vCPUs and memory to run efficiently. What should you do?",
        "choices": ["Launch the VM instance using default settings. Add 2 vCPUs at a time until the application runs smoothly.", "Select Custom as machine type during instance creation. Configure the desired number of vCPUs and memory.", "Utilize the Tau T2D VM to host the application and optimize the workloads.", "Launch two VM instances in separate zones. Enable the Rightsizing Recommendations to resize the virtual machines to the desired number of vCPU and memory."],
         "answer": "Select Custom as machine type during instance creation. Configure the desired number of vCPUs and memory.",
        "explanation": "It is stated in the scenario that a custom number of vCPU and memory is required to host the mission-critical application. Google Cloud allows you to set a custom number for vCPUs and memory by selecting Custom as machine type."
    },
    {
        "question": "Your mobile app development company uses Google Workspace to run your regular daily communication and team collaboration. You need to give some of these Google Workspace users access to a newly created GCP project. What should you do?",
        "choices": ["Generate a CSV file that contains a list of users. Utilize the gcloud tool to convert the CSV into Google Cloud accounts.", "Create a Google group called gcp-console-users@tutorialsdojo.com. Wait for Google Cloud to automatically grant the permissions needed to access the project once users join the newly created group.", "Go to the IAM page and grant the Google Workspace email addresses with appropriate IAM roles to access the project.", "Activate the Cloud Identity API in the GCP Console for your domain."],
         "answer": "Go to the IAM page and grant the Google Workspace email addresses with appropriate IAM roles to access the project.",
        "explanation": "In IAM, permission to access a resource isn’t granted directly to the end-user. Instead, permissions are grouped into roles, and roles are granted to authenticated members. An IAM policy defines and enforces what roles are granted to which members, and this policy is attached to a resource. When an authenticated member attempts to access a resource, IAM checks the resource’s policy to determine whether the action is permitted."
    },
    {
        "question": "You developed an application packaged in a container image and you are ready to deploy it on the Google Cloud Platform. You want to deploy the application to a cost-effective GCP service that provides a stable out-of-the-box HTTPS endpoint. The application only receives few client requests per day. What should you do?",
        "choices": ["Use Google Kubernetes Engine to create a cluster with horizontal pod scaling and cluster autoscaling enabled. Deploy the container image on the infrastructure you just created.", "Use Cloud Run to deploy the container image.", "Use a Compute Engine instance with Cloud IAP enabled to deploy the container image.", "Use App Engine Flexible to deploy the container image."],
         "answer": "Use Cloud Run to deploy the container image.",
        "explanation": "The Cloud Run (fully managed) platform allows you to deploy stateless containers without having to worry about the underlying infrastructure. Your workloads are automatically scaled out or in to zero depending on the traffic to your app. You only pay when your app is running, billed to the nearest 100 milliseconds. Each Cloud Run service gets an out-of-the-box stable HTTPS endpoint, with TLS termination handled for you."
    },
    {
        "question": "Your company has a live application deployed in a Google App Engine environment. You developed a new version of the application containing several new enhancements and you want to test it first with only 1% of users before entirely switching over to the new version. What should you do?",
        "choices": ["Use gcloud app create to deploy a new app with --traffic-split flag to split the traffic between the current and new app.", "Use gcloud app deploy to deploy a new version of the app with --traffic-split flag to split the traffic between the current and new version.", "Deploy a new version of the app that includes the enhancements. Configure App Engine to split traffic between the current and new versions.", "Deploy a new application that includes the enhancements. Configure App Engine to split traffic between the two applications."],
         "answer": "Deploy a new version of the app that includes the enhancements. Configure App Engine to split traffic between the current and new versions.",
        "explanation": "Google App Engine allows you to split traffic between application versions. Traffic splitting distributes a percentage of traffic to versions of your application. You can split traffic to move 100% of traffic to a single version or to route percentages of traffic to multiple versions. Splitting traffic to two or more versions allows you to conduct A/B testing between your versions and provides control over the pace when rolling out features."
    },
    {
        "question": "You are the head engineer of a software development organization, and you control the IAM access for everyone. You granted the Project Creator role to all engineering team users, but you don’t want them to link projects to a billing account. It is also essential that the finance team can link projects to a billing account, but they should not have the privilege to access or perform changes on any resource in the organization. What should you do?",
        "choices": ["Grant the Billing Account User role on the billing account to all of the users in the engineering team.", "Grant the Billing Account User role on the billing account to all of the users in the finance team.", "Grant the Billing Account User role on the billing account as well as the Project Billing Manager role on the organization to all of the users in the finance team.", "Grant the Billing Account User role on the billing account as well as the Project Billing Manager role on the organization to all of the users in the engineering team."],
         "answer": "Grant the Billing Account User role on the billing account as well as the Project Billing Manager role on the organization to all of the users in the finance team.",
        "explanation": "Billing Account User – This role has very restricted permissions, so you can grant it broadly, typically in combination with Project Creator. These two roles allow a user to create new projects linked to the billing account on which the role is granted. Project Billing Manager – This role allows a user to attach the project to the billing account, but does not grant any rights over resources. Project Owners can use this role to allow someone else to manage the billing for the project without granting them resource access."
    },
    {
        "question": "You are working for a tech company that plans to deploy a web application that serves HTTPS requests. You need to build a managed instance group that scales automatically for this application. Part of the requirement is to have the capability to recreate unhealthy virtual instances automatically. What should you do?",
        "choices": ["In the Instance Group page, create a managed instance group and select Multi-Zone instead of Single-Zone.", "Add the health-check label with a value of https when creating an instance template.", "Build an instance template and add a startup script that sends a message to a Cloud Pub/Sub topic via Cloud Function that triggers recreating the instance if it is unhealthy.", "Configure a health check and set the Protocol settings to HTTPS. Define the appropriate health criteria. Use this health check when you create a managed instance group."],
         "answer": "Configure a health check and set the Protocol settings to HTTPS. Define the appropriate health criteria. Use this health check when you create a managed instance group.",
        "explanation": "Managed instance groups maintain high availability of your applications by proactively keeping your instances available, which means in RUNNING state. A MIG automatically recreates an instance that is not RUNNING. However, relying only on VM state may not be sufficient. You may want to recreate instances when an application freezes, crashes, or runs out of memory. The health checks used to monitor MIGs are similar to the health checks used for load balancing, with some differences in behavior. Load balancing health checks help direct traffic away from non-responsive instances and toward healthy instances; these health checks do not cause Compute Engine to recreate instances. On the other hand, managed instance group health checks proactively signal to delete and recreate instances that become UNHEALTHY."
    },
    {
        "question": "You want to create new VM instances in your existing subnet that has a 255.255.255.240 subnet mask. You noticed that you can’t create an instance anymore because there are no available IP addresses in the subnet. Your instances need to communicate with each other without additional routes. What should you do?",
        "choices": ["Create a new VPC on the same project. Create a VPC Network Peering connection between the new and current VPC.", "Use gcloud compute networks subnets delete command to delete the current subnet. Create new a bigger subnet using gcloud compute networks subnets create command.", "Use gcloud compute networks subnets expand-ip-range command to expand the IP range.", "Create a new project and use Shared VPC to allow connection between the new and current VPC."],
         "answer": "Use gcloud compute networks subnets expand-ip-range command to expand the IP range.",
        "explanation": "You can expand the primary IP range of an existing subnet by modifying its subnet mask, setting the prefix length to a smaller number. The gcloud compute networks subnets expand-ip-range command is used to extend the current IP range of a subnetwork. Expanding the primary IP range of a subnet cannot be undone. You cannot shrink the primary IP range of a subnet. Expand primary IP ranges conservatively; you can always expand them again. Consider IP address space in any networks to which your VPC network is or will be connected before you expand a subnet’s primary IP range."
    },
    {
        "question": "Your company has a 5 TB file in Parquet format stored in Google Cloud Storage bucket. A team of analysts, who are only proficient in SQL, needs to temporarily access these files to run ad-hoc queries. You need a cost-effective solution to fulfill their request as soon as possible.What should you do?",
        "choices": ["Load the data in a new BigQuery table. Use the bq load command, specify PARQUET using the --source_format flag, and include a Cloud Storage URL.", "Load the data in BigTable. Give the analysts the necessary IAM roles to run SQL queries.", "Create external tables in BigQuery. Use the Cloud Storage URL as a data source.", "Import the data to Memorystore to provide quick access to Parquet data in the Cloud Storage bucket."],
         "answer": "Create external tables in BigQuery. Use the Cloud Storage URL as a data source.",
        "explanation": "An external data source (also known as a federated data source) is a data source that you can query directly even though the data is not stored in BigQuery. Instead of loading or streaming the data, you create a table that references the external data source. To query a Cloud Storage external data source, provide the Cloud Storage URL path to your data, and create a table that references the data source. The table used to reference the Cloud Storage data source can be a permanent table or a temporary table. It is stated in the scenario that a low-cost and temporary access to Parquet data should be provided. Using the BigQuery temporary external table will satisfy this requirement compared to loading the data to permanent tables that use datasets to store the data. Querying an external data source using a temporary table is useful for one-time, ad-hoc queries over external data, or for extract, transform, and load (ETL) processes."
    },
    {
        "question": "You have two groups of Compute Engine instances deployed in separate GCP projects. Each group of instances runs on its own VPC. You need to enable network traffic between the two groups. What should you do?",
        "choices": ["Confirm that both projects belong to a single Organization. Set up a new Shared VPC host project from the first project and send a request to allow the Compute Engine instances from the other project to use this Shared VPC.", "", "", ""],
         "answer": "Confirm that both projects belong to a single Organization. Set up a new Shared VPC host project from the first project and send a request to allow the Compute Engine instances from the other project to use this Shared VPC.",
        "explanation": "An organization can use Shared VPC to keep a VPC network in a common host project. Authorized IAM members from other projects in the same organization can create resources that use subnets of the Shared VPC network. Shared VPC allows an organization to connect resources from multiple projects to a common Virtual Private Cloud (VPC) network, so that they can communicate with each other securely and efficiently using internal IPs from that network. When you use Shared VPC, you designate a project as a host project and attach one or more other service projects to it. The VPC networks in the host project are called Shared VPC networks. Eligible resources from service projects can use subnets in the Shared VPC network. "
    },
    {
        "question": "Your company runs hundreds of projects on the Google Cloud Platform. You are tasked to store the company’s audit log files for three years for compliance purposes. You need to implement a solution to store these audit logs in a cost-effective manner. What should you do?",
        "choices": ["Configure all resources to be a publisher on a Cloud Pub/Sub topic and publish all the message logs received from the topic to Cloud SQL to store the logs.", "Create a Cloud Storage bucket using a Coldline storage class. Then on the Logs Router, create a sink. Choose Cloud Storage as a sink service and select the bucket you previously created.", "On the Logs Router, create a sink with Cloud BigQuery as a destination to save audit logs.", "Develop a custom script written in Python that utilizes the Logging API to duplicate the logs generated by Operations Suite to BigQuery."],
         "answer": "Create a Cloud Storage bucket using a Coldline storage class. Then on the Logs Router, create a sink. Choose Cloud Storage as a sink service and select the bucket you previously created.",
        "explanation": "To keep audit logs for a longer period of time or to use more powerful search capabilities, you can export copies of your audit logs to Cloud Storage, BigQuery, or Pub/Sub. Using Pub/Sub, you can export to other applications, other repositories, and to third parties. The filter and destination are held in an object called a sink. Sinks can be created in Google Cloud project, organizations, folders, and billing accounts."
    },
    {
        "question": "You are a freelance web developer hired to build a web application that serves users worldwide. The application persists relational data from users to a database. Your client is concerned about how the database will scale as her business grows. You then plan to implement a database solution that scales as the user base of your client grows. You want the scaling to be convenient without a lot of configuration changes involved. Which database storage solution should you use?",
        "choices": ["Cloud SQL", "Cloud BigQuery", "Cloud Bigtable", "Cloud Spanner"],
         "answer": "Cloud Spanner",
        "explanation": "Cloud Spanner is a fully managed relational database with unlimited scale and strong consistency. It is a distributed, globally scalable SQL database service that decouples compute from storage, which makes it possible to scale processing resources separately from storage. No matter where your users may be, apps backed by Cloud Spanner can read and write up-to-date strongly consistent data globally. Additionally, when running a multi-region instance, your database is able to survive a regional failure and offers industry-leading 99.999% availability. Cloud Spanner optimizes performance by automatically sharding the data based on request load and size of the data. As a result, you can spend less time worrying about how to scale your database, and instead focus on scaling your business."
    },
    {
        "question": "Your company has several applications that use Compute Engine and Cloud Storage services in GCP. You were assigned to set up a budget alert for the total Cloud Storage service cost incurred in all of your GCP projects. All of these projects are using the same billing account. You want to follow Google-recommended best practices. What should you do?",
        "choices": ["Ensure that you are the Billing Account Administrator. Select the billing account and create the budget alert for each of the projects.", "Ensure that you are the Billing Account User. Select the billing account and create a budget. Select all projects and the Cloud Storage service as the budget scope and finally, create the budget alert.", "Ensure that you are the Billing Account Administrator. Select the billing account and create a budget. Select all projects and the Cloud Storage service as the budget scope and finally, create the budget alert.", "Ensure that you are the Billing Account User. Select the billing account and create a budget. Set the budget scope as default then create the budget alert."],
         "answer": "Ensure that you are the Billing Account Administrator. Select the billing account and create a budget. Select all projects and the Cloud Storage service as the budget scope and finally, create the budget alert.",
        "explanation": "You can use the Cloud Billing budgets to monitor all of your Google Cloud charges in one place. A budget enables you to track your actual Google Cloud spend against your planned spend. After you’ve set a budget amount, you set budget alert threshold rules that are used to trigger email notifications. Budget alert emails help you stay informed about how your spend is tracking against your budget. You can also use budgets to automate cost control responses. Note that budgets only trigger alerts to inform you of how your usage costs are trending over time. This doesn’t cap Google Cloud usage and spending. Budget alert emails might prompt you to take action to control your costs, but do not automatically prevent the use or billing of your services when the budget amount or threshold rules are met or exceeded."
    },
    {
        "question": "You are assigned to set up a solution that stores a large amount of financial data in a cost-effective manner and archive it after 30 days. The data will only be accessed once a year for auditing purposes. As part of compliance objectives, you also have to ensure that the data is stored in a single geographic location. What should you do?",
        "choices": ["Create a Cloud Storage bucket and set its location to Dual-Region. Configure an object bucket lifecycle rule that transitions the bucket into Nearline Storage after 30 days.", "Create a Cloud Storage bucket and set its location to Multi-Regional. Configure an object lifecycle rule that transitions the bucket into Cloud Storage after 30 days.", "Create a Cloud Storage bucket and set its location to Regional. Configure an object lifecycle rule that transitions the bucket into Coldline Storage after 30 days.", "Create a Cloud Storage bucket and set its location to Regional. Configure an object lifecycle rule that transitions the bucket into Nearline Storage after 30 days."],
         "answer": "Create a Cloud Storage bucket and set its location to Regional. Configure an object lifecycle rule that transitions the bucket into Coldline Storage after 30 days.",
        "explanation": "Nearline Storage is ideal for data that you plan to read or modify on average once per month or less. For example, if you want to continuously add files to Cloud Storage and plan to access those files once a month for analysis, Nearline Storage is a great choice. Coldline Storage is ideal for data you plan to read or modify at most once a quarter. Note, however, that for data being kept entirely for backup or archiving purposes, Archive Storage is more cost-effective, as it offers the lowest storage cost"
    },
    {
        "question": "You are tasked with developing a process to automatically extract text from audio files uploaded to a Google Cloud Storage bucket. Your solution must be serverless, fully managed, and comply with Google’s best practices, including authentication requirements. The goal is to have each audio file automatically submitted to the Google Speech-to-Text API as soon as it arrives in the bucket. What should you do?",
        "choices": ["Schedule a Google Cloud Run service that periodically checks the Cloud Storage bucket for new audio files and submits each one found to the Speech-to-Text API.", "Utilize a Cloud Function designed to be triggered by new file uploads to the Cloud Storage bucket to pass the file URIs to the Google Speech-to-Text API automatically.", "Deploy a service configured to respond to Cloud Storage bucket notifications in the App Engine standard environment. Configure the service to send audio file URIs to the Google Speech-to-Text API for processing.", "Implement a continuous Kubernetes job that monitors the Cloud Storage bucket for new files. Upon detecting new uploads, it invokes the Speech-to-Text API for each new file found."],
         "answer": "Utilize a Cloud Function designed to be triggered by new file uploads to the Cloud Storage bucket to pass the file URIs to the Google Speech-to-Text API automatically.",
        "explanation": "Cloud Functions serve as an integrative logic layer, empowering you to develop code that links and enhances cloud services. This capability enables your applications to automatically react to specific events, such as uploading files to Cloud Storage, logging modifications, or receiving messages via Pub/Sub topics. By adding Cloud Functions to your cloud infrastructure, you expand the potential applications of your cloud resources by implementing custom programming logic. This adaptability allows Cloud Functions to support a broad spectrum of operational scenarios. A Cloud Storage trigger in Cloud Functions allows a function to be executed in response to changes in Cloud Storage. When you add a Cloud Storage trigger to a function, you select an event type and a Cloud Storage bucket. The function you wrote will be run whenever an object in the specified bucket changes."
    },
    {
        "question": "Your organization is planning to transition its on-premises data assets to Google Cloud to leverage advanced cloud capabilities and improve data accessibility. The migration goals include the following tasks: Moving 80 TB of high-resolution images from an on-premises NAS (Network Attached Storage) to a Google Cloud Storage bucket. Transferring a data warehouse currently hosted on Snowflake to BigQuery for enhanced analytics capabilities. Migrating 100 GB of PDF documents stored in an Azure Blob Storage container to a different Cloud Storage bucket. The migration strategy should follow Google-recommended best practices, ensuring minimal complexity and avoiding the need for custom code development. Which approach should be adopted to achieve these goals effectively?",
        "choices": ["Implement the Storage Transfer Service for all file types, images to one Cloud Storage bucket and PDFs to another, then use the BigQuery Data Transfer Service for the data warehouse data.", "Employ Google Cloud Data Fusion to orchestrate and manage the data integration for the images. For data warehouse data, use the BigQuery Data Transfer Service, and utilize the Storage Transfer Service for PDF documents.", "Utilize Google's Transfer Appliance to transfer images in bulk, the BigQuery Data Transfer Service to transfer data warehouse content, and the Storage Transfer Service to transfer PDF documents.", "Use Cloud Storage buckets for storing the 80 TB of images, employ Google's Dataflow for processing the data warehouse data, and leverage Storage Transfer Service for the PDF documents."],
         "answer": "Utilize Google's Transfer Appliance to transfer images in bulk, the BigQuery Data Transfer Service to transfer data warehouse content, and the Storage Transfer Service to transfer PDF documents.",
        "explanation": "Google’s Transfer Appliance is a physical device designed to facilitate the transfer of large volumes of data, such as the 80 TB of high-resolution images in this scenario. By using the Transfer Appliance, organizations can securely and efficiently move substantial datasets to Google Cloud Storage without the complexities and potential bandwidth limitations of online transfers. The appliance is shipped to the user’s location, filled with data, and then returned to Google for uploading to the cloud. This method is particularly useful for migrations involving large datasets that would be impractical to transfer over the Internet.The BigQuery Data Transfer Service automates the process of moving data from external sources like Snowflake into BigQuery, Google’s fully managed, serverless data warehouse. This service simplifies the migration by eliminating the need for custom ETL scripts, providing a seamless transition to enhanced analytics capabilities in BigQuery. Additionally, the Storage Transfer Service is designed to transfer data from other cloud storage providers, such as Azure Blob Storage, to Google Cloud Storage. This service ensures that data migrations are managed and automated efficiently, supporting various data sources and enabling smooth transfers to the cloud with minimal manual intervention."
    },
    {
        "question": "You manage resources across multiple Google Cloud projects, each linked to a different billing account. To forecast future charges more accurately, you aim to consolidate and visualize all cost data in one place, ensuring new cost data is integrated promptly.Which approach should you consider to take?",
        "choices": ["Utilize the Google Cloud Pricing Calculator for each project to estimate upcoming monthly costs.", "Enable Billing Data Export to BigQuery for all projects and use Looker Studio for data visualization.", "Access the Cost Management tools in the Google Cloud Console for a comprehensive view of your expenditures.", "Navigate to the Cost Table page to export cost data as a CSV file, then analyze it using Looker Studio."],
         "answer": "Enable Billing Data Export to BigQuery for all projects and use Looker Studio for data visualization.",
        "explanation": "Google BigQuery is a serverless platform for data analytics that eliminates the need to configure and manage individual computing instances or virtual machines. This innovative solution automatically assigns computational resources based on your needs, ensuring that your data analysis jobs have adequate power without the need for manual provisioning. Looker Studio offers a free and powerful way to transform your data into easy-to-understand shareable dashboards and reports that you can specifically customize based on your needs. It gives you the flexibility to convey your message through data, using an array of charts such as line, bar, and pie charts, as well as geo maps and bubble graphs. You can also organize your data into neatly paginated tables and detailed pivot tables, all through an easy-to-use drag-and-drop interface. This tool is designed to help you easily make sense of your data and present it in a way that speaks to your audience, making complex information accessible and engaging."
    },
    {
        "question": "Your development team has finalized an enterprise-grade application critical to your business operations. The next step involves deploying this application within a Kubernetes environment, prioritizing system reliability. The team looks to leverage Google Cloud’s Kubernetes Engine (GKE) and wishes to adopt Google’s best practices for cluster provision. Which solution should you do?",
        "choices": ["Initiate a regional Google Cloud Kubernetes Engine (GKE) standard cluster. Ensure to subscribe to the rapid-release channel for updates.", "Configure a Google Cloud Kubernetes Engine (GKE) Autopilot cluster and associate the cluster with the rapid-release channel.", "Set up a Google Cloud Kubernetes Engine (GKE) Autopilot cluster and link it to the stable release channel.", "Establish a zonal Google Cloud Kubernetes Engine (GKE) standard cluster and choose the stable release channel."],
         "answer": "Set up a Google Cloud Kubernetes Engine (GKE) Autopilot cluster and link it to the stable release channel.",
        "explanation": "Google Kubernetes Engine (GKE) is a service that offers managed environments for deploying, managing, and scaling applications using Google’s infrastructure. GKE provides two modes of operation, namely Autopilot and Standard. Autopilot mode is suitable for teams that prioritize operational simplicity and reliability. It automates much of the cluster management and optimizes the Kubernetes cluster’s performance and cost without requiring manual tweaking of the underlying infrastructure. On the other hand, the Standard mode provides more granular control over the cluster’s configuration and resources, making it appealing to teams with specific customization requirements."
    },
    {
        "question": "Your team recently created a new deployment that creates two replicas in a Google Kubernetes Engine (GKE) cluster configured with a single preemptible node pool. After waiting for a few minutes, you noticed that the Pod’s status is still Pending after running kubectl get pods command.What is the most likely cause of this issue?",
        "choices": ["The pending Pod was scheduled on a node that was getting preempted. You need to wait while it's being scheduled to a new node.", "The service account used for the node pool does not have the right permissions to pull images from the Artifact Registry.", "The pending Pod is stuck and can't be scheduled to a node. There are too many Pods running in the cluster, and you don't have enough node resources left.", "The pending Pod's resource request is too small for the single cluster node."],
         "answer": "The pending Pod is stuck and can't be scheduled to a node. There are too many Pods running in the cluster, and you don't have enough node resources left.",
        "explanation": "If a Pod is stuck in Pending status, it means that it can’t be scheduled onto a node. Generally, this is because there are insufficient resources of one type or another that prevent scheduling. You can issue the kubectl describe command to investigate the issue. There should be messages from the scheduler as to why it can not schedule your pod. – You don’t have enough resources: You may have exhausted the supply of CPU or Memory in your cluster, in this case, you need to delete Pods, adjust resource requests, or add new nodes to your cluster.– You are using hostPort: When you bind a Pod to a hostPort, there are a limited number of places where the pod can be scheduled. In most cases, hostPort is unnecessary, try using a Service object to expose your Pod. If you do require hostPort, then you can only schedule as many Pods as there are nodes in your Kubernetes cluster."
    },
    {
        "question": "Your startup has recently experienced a security breach. In response, your company is exploring ways to enhance its visibility into activities within its Google Cloud infrastructure, specifically aiming to detect any unexpected modifications in firewall settings and the generation of new instances. The company wants straightforward solutions to achieve this objective. Which solution should you do to meet this requirement?",
        "choices": ["Enable logging for Google Cloud firewall rule activities. Configure notifications for any create, modify, or remove operations related to firewall rules.", "Implement Cloud Logging filters to establish log-based metrics to track firewall setting modifications and instance creation. Utilize the metrics to monitor changes and configure alerts based on predefined criteria.", "Configure a log sink to channel Cloud Audit Logs for firewall modifications and new instance generation to a Cloud Storage bucket. Utilize Cloud BigQuery to regularly inspect the log data stored in the bucket.", "Deploy an instance with Kibana installed. Set up a logging sink to route Cloud Audit Logs for firewall modifications and compute resource deployments to a Cloud Pub/Sub topic. Ensure that the Pub/Sub topic should be enabled to forward log entries to the Kibana instance for real-time log analysis."],
         "answer": "Implement Cloud Logging filters to establish log-based metrics to track firewall setting modifications and instance creation. Utilize the metrics to monitor changes and configure alerts based on predefined criteria.",
        "explanation": "Cloud Logging and log-based metrics in Google Cloud Platform (GCP) offer a robust and flexible system for monitoring, analyzing, and reacting to the events occurring within your cloud infrastructure. Cloud Logging is at the core of this system, a service designed to aggregate logs from various sources across your GCP environment, including Compute Engine instances, Google Kubernetes Engine (GKE) clusters, and other GCP services. These logs provide detailed insights into operations and activities within your infrastructure, such as changes to firewall settings or the creation of new compute instances. Log-based metrics expand the capabilities of Cloud Logging by allowing you to create custom metrics based on the content of the logs. This feature enables you to monitor specific events or patterns within your logs, such as the frequency of certain types of operations or the occurrence of specific error messages. Once these metrics are defined, you can set up alerting policies in Cloud Monitoring to notify you when certain thresholds are exceeded or particular events occur. This alerting mechanism is essential for maintaining the security and reliability of your infrastructure, as it enables you to respond promptly to potential issues or security threats. By using Cloud Logging and log-based metrics, you can effectively maintain visibility and control over your Google Cloud infrastructure. These services allow you to detect any unexpected changes or potential security incidents promptly, enabling you to take quick action to reduce risks. This capability is essential for upholding the integrity and security of your cloud environment, ensuring that your resources are safeguarded and function as intended."
    },
    {
        "question": "You have three different projects for your development, staging, and production environments in your GCP account. You want to use Cloud SDK to develop a script that generates a list of all Google Compute Engine instances in your account. What should you do?",
        "choices": ["Create three different configurations using the gcloud config command for your development, staging, and production environments. Use the gcloud compute instances list command to list all the compute resources for each configuration.", "Use the bq compute instances list command to list all the available compute resources in your entire account.", "Create one configuration for your development, staging, and production environments using the gcloud config command. Use the gsutil compute instances list command to list all the compute resources in your account.", "Set up three different configurations using the gsutil config command for your development, staging, and production environments. Invoke the gsutil compute instances list command to list all the compute resources for each configuration."],
         "answer": "Create three different configurations using the gcloud config command for your development, staging, and production environments. Use the gcloud compute instances list command to list all the compute resources for each configuration.",
        "explanation": "In Cloud SDK, a configuration is a named set of SDK properties. These properties are key-value pairs, organized in sections, that govern the behavior of the gcloud command-line tool and other SDK tools.Properties that are commonly stored in configurations include default Google Compute Engine zone, verbosity level, usage reporting, project ID, and an active user or service account. Configurations allow you to define and enable these and other settings together as a group."
    },
    {
        "question": "Your client requires you to develop a secure, scalable website capable of autoscaling based on the CPU load of compute instances. The site’s load page must be improved by storing static assets in Cloud Storage. Your task is to determine which configurations are necessary to efficiently distribute user traffic across the system.Which configuration would best fulfill the client’s requirements?",
        "choices": ["Implement an external HTTP(S) load balancer with self-managed SSL certificates installed directly on the backend instances. Incorporate URL mapping to route requests for static content specifically to Cloud Storage.", "Utilize an internal HTTP(S) load balancer, enhanced with Identity-Aware Proxy to secure and streamline HTTPS traffic within the organization's internal networks.", "Set up an external network load balancer to evenly distribute incoming traffic to backend instances, which handle dynamic routing of requests for static content to Cloud Storage.", "Deploy a managed SSL certificate for traffic distribution using an external HTTP(S). Utilize a URL map to direct static content requests to Cloud Storage to ensure secure content delivery."],
         "answer": "Deploy a managed SSL certificate for traffic distribution using an external HTTP(S). Utilize a URL map to direct static content requests to Cloud Storage to ensure secure content delivery.",
        "explanation": "A few key architectural components become crucial when tasked with developing a secure and scalable website that autoscales based on CPU load and utilizes cloud storage for static content. First, using an HTTP(S) load balancer is essential as it can efficiently distribute incoming traffic across multiple compute instances. This load balancer also handles the SSL termination, which simplifies security management by centralizing the SSL handling at the load balancer level rather than on each server. Secondly, integrating cloud storage for serving static content reduces the load on the compute instances. It speeds up the delivery of these assets, which is vital for maintaining high performance as the user base grows. In such a configuration, the load balancer is important in managing traffic flow and ensuring that the backend servers are adequately utilized. Using URL mapping, the load balancer can direct requests for static content directly to cloud storage, thereby offloading a significant amount of work from the backend servers. This approach not only enhances the performance by reducing the number of requests that backend servers need to handle but also improves scalability by ensuring that dynamic content requests are efficiently managed and distributed based on the current load, which is critical for autoscaling. Furthermore, employing a managed SSL certificate with the load balancer simplifies security management by eliminating the need to install and manage SSL certificates on each backend server, enhancing security and reducing administrative overhead."
    },
    {
        "question": "You are tasked with configuring a Google Kubernetes Engine (GKE) cluster that requires verifiable node identity and integrity. The cluster’s nodes should not be accessible from the internet, and operational overhead of managing your cluster must be minimized and in line with Google’s best practices. Which of the following options should you choose?",
        "choices": ["Launch a standard GKE cluster with Workload Identity enabled.", "Configure a standard GKE cluster with Shielded Nodes enabled and restrict external access.", "Launch a private GKE Autopilot cluster.", "Configure a GKE Autopilot cluster with limited access to the public endpoint."],
         "answer": "Launch a private GKE Autopilot cluster.",
        "explanation": "Google Kubernetes Engine Autopilot is a feature within Google Kubernetes Engine where Google takes the helm, managing your cluster’s setup, scaling, security, and more, according to preset configurations. It can efficiently manage various production workloads and dynamically allocate computing resources based on the instructions given through Kubernetes. This approach ensures that your configurations adhere to GKE’s top recommendations for performance, scalability, and safety but also simplifies the process, allowing you to concentrate on your applications rather than on infrastructure management. Autopilot streamlines your operations to align with industry best practices, offering a balance of ease and professionalism. A private cluster in GKE is designed to isolate its nodes from the public internet. This is done by assigning private IP addresses to the nodes from within the VPC (Virtual Private Cloud), which helps prevent direct access outside the VPC. As a result, this setup improves security by reducing the potential surface area for attacks."
    },
    {
        "question": "You are deploying a new web application on Google Kubernetes Engine (GKE) that requires persistent storage for its database component. The application must ensure that each database instance retains its state even after rescheduling. Additionally, the application needs to handle rolling updates without downtime and maintain a stable network identity for each database instance.Which solution will meet this requirement?",
        "choices": ["Deploy the database using a Deployment with PersistentVolumes (PVs) and a LoadBalancer Service for stable network identities.", "Create a StatefulSet with PersistentVolumeClaims (PVCs) for storage and define a Headless Service for stable network identities.", "Implement the database deployment using a ReplicaSet with PersistentVolumeClaims (PVCs) and a NodePort Service for stable network identities.", "Use a DaemonSet with HostPath volumes for storage and define a ClusterIP Service for network identities."],
         "answer": "Create a StatefulSet with PersistentVolumeClaims (PVCs) for storage and define a Headless Service for stable network identities.",
        "explanation": "A StatefulSet is a Kubernetes controller designed specifically for managing stateful applications. Unlike Deployments, which are suitable for stateless applications, StatefulSets ensure that each pod maintains a unique and consistent identity. This unique identity is crucial for stateful applications like databases, where each instance needs to be distinguishable from others and must retain its state across rescheduling or restarts. StatefulSets achieves this by providing stable, persistent storage through PersistentVolumeClaims (PVCs) and stable network identities through Headless Services. This ensures that each pod can always be reached with the same DNS name."
    },
    {
        "question": "Your team leader has assigned you the task of deploying a new application to a Kubernetes cluster. The application’s resource demands are currently unknown and may fluctuate based on user interactions, integration points, and other dynamic factors. You need a method that provides efficient and cost-effective recommendations for CPU and memory allocations while ensuring stable performance under varying conditions. You aim to adhere to Google-recommended practices for managing Kubernetes resources. What approach should you take?",
        "choices": ["Utilize the Vertical Pod Autoscaler to auto-tune CPU and memory allocations for optimal application performance, and employ the Cluster Autoscaler to dynamically adjust the number of nodes in the cluster as needed.", "Employ the Horizontal Pod Autoscaler to ensure sufficient application availability, then use the Vertical Pod Autoscaler to obtain resource allocation recommendations.", "Set up the Horizontal Pod Autoscaler to scale the number of pods based on observed CPU demand. Use Kubernetes Resource Quotas to manage resource limits within the namespace.", "Implement the Horizontal Pod Autoscaler to manage pod scaling based on CPU utilization, and use the Cluster Autoscaler to adjust cluster size based on resource recommendation data."],
         "answer": "Employ the Horizontal Pod Autoscaler to ensure sufficient application availability, then use the Vertical Pod Autoscaler to obtain resource allocation recommendations.",
        "explanation": "When deploying a new application to a Kubernetes cluster with unpredictable resource demands, it’s essential to use a strategy that can dynamically adapt the resources allocated to individual pods and the scaling behavior of the pods. This ensures efficient resource utilization and maintains application performance under varying load conditions. Google Kubernetes Engine (GKE) provides several tools to facilitate this dynamic adjustment. In Kubernetes, two primary autoscaling tools can be utilized: the Horizontal Pod Autoscaler (HPA) and the Vertical Pod Autoscaler (VPA). Horizontal Pod Autoscaler adjusts the number of pods in a deployment based on observed CPU usage or other metrics. This is useful for handling changes in application load. However, it does not adjust individual pods’ CPU and memory allocations, which is critical in scenarios with fluctuating resource needs."
    },
    {
        "question": "You have a business-critical workload running on Google Compute Engine. You need to regularly create a backup of the data on the boot disk as part of your Disaster Recovery requirement. You should have the ability to be able to quickly restore backups in the event of system outages and the older backups should be automatically deleted to minimize the cost.What should you do?",
        "choices": ["Create a Cloud Task to export disk image to Cloud Storage bucket.", "Create a snapshot schedule for the persistent disk and set a snapshot retention policy.", "Create a script that will create a disk regularly from the boot disk using the gcloud command-line interface.", "Configure a third-party enterprise backup solution on your Cloud Engine instance."],
         "answer": "Create a snapshot schedule for the persistent disk and set a snapshot retention policy.",
        "explanation": "In Google Compute Engine, you can create snapshots to back up data on your zonal and regional persistent disks. You can use this to restore a new disk or instance within the same project. You can also have your snapshot created automatically by setting up a scheduled snapshot. Snapshot schedule frequency can be set to hourly, daily, or weekly; depending on your requirement. You also need to set a number of days in the snapshot retention policy. This will determine how long your snapshots will be kept."
    },
    {
        "question": "Your company requires short-lived credentials for service account keys to enhance security during development. All necessary service accounts must be consolidated within a designated project named td-service-accounts. Additionally, the validity of each service account key must be restricted to a duration of two days. Your goal is to adopt the Google-recommended solution that also ensures cost efficiency. Which solution will best meet these requirements?",
        "choices": ["Apply a DENY organizational policy constraint limiting service account key validity to 48 hours. Prohibit the association of service accounts with resources across all projects, with an exemption provided for td-service-accounts.", "Configure a Kubernetes CronJob to rotate all service account keys within td-service-accounts every 48 hours. Prohibit the association of service accounts with resources across all projects, except for td-service-accounts.", "Deploy a Scheduled Cloud Function that automatically deletes existing service account keys and creates new ones within td-service-accounts every 48 hours while enforcing a policy that limits key lifetime.", "Apply an organizational policy constraint that limits the lifespan of service account keys to 48 hours. Additionally, implement an organizational policy constraint to deny the creation of new service account keys, with an exemption for td-service-accounts."],
         "answer": "Apply an organizational policy constraint that limits the lifespan of service account keys to 48 hours. Additionally, implement an organizational policy constraint to deny the creation of new service account keys, with an exemption for td-service-accounts.",
        "explanation": "A service account key enables you to authenticate a request as a service account. By default, service account keys do not expire. You can change the default by specifying an expiry time for all newly produced keys in your project, folder, or company.The constraints/iam.serviceAccountKeyExpiryHours list constraint defines the number of hours a recently formed key is valid. After this time, the service account key expires and is no longer useful. Take note that this constraint cannot be combined with a parent policy. To implement this constraint, update or acquire the parent policy."
    },
    {
        "question": "You are currently investigating an issue that requires you to access and analyze the audit logs of several GCP projects. You need to run custom queries against these logs for the past 60 days in the easiest way possible. You want to follow Google-recommended best practices.What should you do?",
        "choices": ["Configure a Cloud Function that will export all the logs to a Cloud Engine instance from Cloud Logging. Delete the Cloud Engine instance after 60 days.", "In the Google Cloud Console, export the audit logs from Cloud Logging and select Cloud Storage as the Sink destination. Create a bucket lifecycle rule to remove objects after 60 days.", "Go to Cloud Logging and select all projects in the search filter.", "Export the audit logs from Cloud Logging and select a BigQuery dataset as the Sink destination. Configure the table expiration to 60 days"],
         "answer": "Export the audit logs from Cloud Logging and select a BigQuery dataset as the Sink destination. Configure the table expiration to 60 days",
        "explanation": "Cloud Logging is a fully managed service that performs at scale and can ingest application and system log data, as well as custom log data from GKE environments, VMs, and Google Cloud services. Cloud Logging allows you to analyze selected logs and accelerate application troubleshooting. You can export these logs using Cloud Logging Export to a Cloud Storage, Bigquery, Pub/Sub, or in Cloud Logging logs bucket on another GCP Project."
    },
    {
        "question": "Your company is having its yearly business audit. Your external editor needs to review the Data Access and Access Transparency audit logs of your Google Cloud Platform account. Your company also wants to keep a copy of these logs as a reference for the next audit. You want to follow Google-recommended practices on granting Cloud IAM roles. What should you do?",
        "choices": ["Grant the external auditor the Project Viewer IAM role. Create a log sink and export the logs to BigQuery.", "Grant the external auditor a custom role that has logging.logs.list and logging.logServices.list permissions. Create a log sink and export the logs to BigQuery.", "Grant the external auditor the roles/logging.viewer IAM role. Create a log sink and export the logs to Cloud Storage.", "Grant the external auditor the roles/logging.privateLogViewer IAM role. Create a log sink and export the logs to Cloud Storage."],
         "answer": "Grant the external auditor the roles/logging.privateLogViewer IAM role. Create a log sink and export the logs to Cloud Storage.",
        "explanation": "Access Transparency logs record the actions that Google personnel take when accessing your content. Access Transparency logs give you different information than Cloud Audit Logs. Cloud Audit Logs record the actions that members in your Google Cloud organization have taken in your Google Cloud resources, whereas Access Transparency logs record the actions taken by Google personnel. Private Logs Viewer ( roles/logging.privateLogViewer ) – includes roles/logging.viewer, plus the ability to read Access Transparency logs and Data Access audit logs."
    },
    {
        "question": "Your development team has created an application packaged within Docker images. The goal is to deploy it on Google Cloud to minimize operational overhead. You must ensure the deployment solution supports seamless, automatic scaling as the application’s user base expands.What solution should you do?",
        "choices": ["Store the Docker images in Artifact Registry and use Cloud Run to deploy the application.", "Construct an instance template incorporating the Docker container image. Utilize this template to set up a Managed Instance Group with Autoscaling capabilities.", "Transfer the Docker images to Artifact Registry. Orchestrate the application deployment through Google Kubernetes Engine (GKE) in its Standard environment.", "Upload Docker images to Cloud Storage, and deploy the application on GKE using Standard mode."],
         "answer": "Transfer the Docker images to Artifact Registry. Orchestrate the application deployment through Google Kubernetes Engine (GKE) in its Standard environment.",
        "explanation": "Google Cloud Run is a platform that simplifies the process of deploying, scaling, and managing containerized applications. It considerably reduces the complexity involved in deploying applications to the cloud. Cloud Run allows developers to easily deploy their Docker containers to a secure and scalable environment without worrying about the underlying infrastructure. As a result, Cloud Run automatically scales up or down to zero based on traffic, which is an ideal solution for applications with different loads. This feature ensures that resources are utilized efficiently, thus reducing costs and complexity associated with manual scaling."
    },
    {
        "question": "Your company is reviewing its GCP expenses in order to determine ways to reduce its monthly expenditure. You are tasked to decommission all resources on one particular GCP project that is used in the previous testing activities, and you need to do this with the fewest possible steps. You want to follow Google-recommended practices. What should you do?",
        "choices": ["1. Confirm that you have the Organizational Administrator IAM role for this project.2. Select the project in the GCP console, go to Admin > Settings, click Shut down and enter the Project ID to confirm the deletion.", "1. Confirm that you have the Organizational Administrators IAM role for this project.2. Select the project in the GCP console, find the resources, and delete them.", "1. Confirm that you have the Project Owners IAM role for this project.2. Select the project in the GCP console, find the resources, and delete them.", "1. Confirm that you have the Project Owners IAM role for this project.2. Select the project in the GCP console, go to Admin > Settings, click Shut down and enter the Project ID to confirm the deletion"],
         "answer": "1. Confirm that you have the Project Owners IAM role for this project.2. Select the project in the GCP console, go to Admin > Settings, click Shut down and enter the Project ID to confirm the deletion",
        "explanation": "Google Cloud project is the base-level organizing entity. Its primary purpose is to group and organize all of your cloud resources. In short, this is where your cloud resources reside. You can also create multiple projects, let’s say for your dev, test, and prod environment.If a project is no longer in use, you can delete its resources to save cost. This action requires the role/owner or resourcemanager.projects.delete permission. When you delete a project, you also delete everything inside it. So be cautious when doing this.You can delete a project by selecting the project on the project list and navigating to the Admin > Settings page on the Google Cloud Console. You can also delete a project using the Cloud Resource Manager or via the gcloud command-line interface using the following comman"
    },
    {
        "question": "You have a company that plans to transition its on-premises workloads to Google Cloud. The current setup includes a Django-based online application, a backend API, and a long-running background job for ETL and reporting, scheduled periodically. Your goal is to minimize operational costs by leveraging serverless solutions in accordance with Google’s recommended practices.Which solution will meet these requirements?",
        "choices": ["Deploy the online application to App Engine and the backend API to Cloud Run. Configure the background job on Compute Engine utilizing Cloud Tasks.", "Deploy the online application to App Engine and the backend API to Cloud Run. Utilize Cloud Tasks to execute the background job on Cloud Functions.", "Implement the online application to App Engine and the backend API to Cloud Run. Manage the background job on Cloud Run with Cloud Tasks.", "Set up the online application on Cloud Functions and the backend API on Cloud Run. Employ Cloud Tasks to schedule the background job on Cloud Run."],
         "answer": "Implement the online application to App Engine and the backend API to Cloud Run. Manage the background job on Cloud Run with Cloud Tasks.",
        "explanation": "Google App Engine is a fully managed serverless platform that is well-suited for web applications. It allows developers to focus on writing code without worrying about managing the underlying infrastructure. By deploying the Django-based web application to App Engine, the company benefits from automatic scaling, load balancing, and built-in security, which helps minimize operational costs and complexity."
    },
    {
        "question": "You have configured Google Cloud CLI in your on-premises server. During the setup, you also configured a proxy server to route your requests. To maintain security, it is necessary to prevent the proxy credentials from being logged in the Google Cloud CLI logs.Which solution will meet this requirement?",
        "choices": ["Utilize the environment variable in the CLI and set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties", "Configure a firewall rule to block outgoing traffic to the proxy server, preventing the credentials from being used.", "Encrypt the proxy credentials using SHA-256, save them to a file, and reference the file in the gcloud config set core/custom_ca_certs_file command", "Utilize the commands gcloud config set proxy/username and gcloud config set proxy/password to configure the username and password."],
         "answer": "Utilize the environment variable in the CLI and set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties",
        "explanation": "The Google Cloud CLI consists of tools designed to create and manage Google Cloud resources. These tools allow users to perform various common platform tasks either from the command line or through scripts and automation.The Google Cloud CLI adheres to the http_proxy, https_proxy, and no_proxy environment variables defined in your proxy setup. These variables manage the proxy server for HTTP connections, the proxy server for HTTPS connections which is usually more relevant for most Google Cloud CLI commands, and the domains that should bypass the proxy, respectively. Configure your gcloud proxy settings only if you need to use a different proxy. If gcloud proxy settings are specified, they will override the existing proxy configuration, including ignoring the no_proxy setting."
    },
    {
        "question": "You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
        "choices": ["A. gcloud deployment-manager deployments create --config <deployment-config-path>", "B. gcloud deployment-manager deployments update --config <deployment-config-path> ", "C. gcloud deployment-manager resources create --config <deployment-config-path>", "D. gcloud deployment-manager resources update --config <deployment-config-path>"],
         "answer": "B. gcloud deployment-manager deployments update --config <deployment-config-path> ",
        "explanation": "B is correct Additional tip, update and create resource is not even a command under deployment management service."
    },
    {
        "question": "You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?",
        "choices": ["A. Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.", "B. Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.", "C. Export your transactions to a local file, and perform analysis with a desktop tool.", "D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis."],
         "answer": "D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.",
        "explanation": "Cloud Storage bucket'........'Cloud Bigtable'. Not feasible, mainly because cloud BigTable is not good for Structured Data (or Relational Data on which we can run SQL queries as per the question's requirements). BigTable is better suited for Semi Structured data and NoSQL data."
    },
    {
        "question": "You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
        "choices": ["A. When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.", "B. Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service- account.", "C. Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine- service-account.", "D. Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service- account.json."],
         "answer": "A. When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.",
        "explanation": "If you want to run the VM as a different identity, or you determine that the instance needs a different set of scopes to call the required APIs, you can change the service account and the access scopes of an existing instance"
    },
    {
        "question": "You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
        "choices": ["A. Use gcloud to create the new project, and then deploy your application to the new project.", "B. Use gcloud to create the new project and to copy the deployed application to the new project.", "C. Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project.", "D. Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project."],
         "answer": "A. Use gcloud to create the new project, and then deploy your application to the new project.",
        "explanation": "Correct is A.Option B is wrong as the option to use gcloud app cp does not exist.Option C is wrong as Deployment Manager does not copy the application, but allows you to specify all the resources needed for your application in a declarative format using yaml Option D is wrong as gcloud app deploy would not create a new project. The project should be created before usage"
    },
    {
        "question": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
        "choices": ["A. Deploy the monitoring pod in a StatefulSet object.", "B. Deploy the monitoring pod in a DaemonSet object. ", "C. Reference the monitoring pod in a Deployment object.", "D. Reference the monitoring pod in a cluster initializer at the GKE cluster creation time."],
         "answer": "B. Deploy the monitoring pod in a DaemonSet object.",
        "explanation": "Some typical uses of a DaemonSet are:running a cluster storage daemon on every node running a logs collection daemon on every node running a node monitoring daemon on every node"
    },
    {
        "question": "You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
        "choices": ["A. Enable the Cloud Pub/Sub API in the API Library on the GCP Console. ", "B. Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.", "C. Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs used by the application being deployed.", "D. Grant the App Engine Default service account the role of Cloud Pub/Sub Admin. Have your application enable the API on the first connection to Cloud Pub/ Sub."],
         "answer": "A. Enable the Cloud Pub/Sub API in the API Library on the GCP Console. ",
        "explanation": "Since the Cloud Pub/Sub API is currently disabled, the first step is to enable it. This can be done through the API Library on the GCP Console. Once the API is enabled, the service account can be used to authenticate the App Engine application to the Cloud Pub/Sub API."
    },
    {
        "question": "You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?",
        "choices": ["A. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.", "B. Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.", "C. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.", "D. Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2."],
         "answer": "A. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.",
        "explanation": "A. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1."
    },
    {
        "question": "You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
        "choices": ["A. Run gcloud iam roles list. Review the output section.", "B. Run gcloud iam service-accounts list. Review the output section.", "C. Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.", "D. Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status."],
         "answer": "C. Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.",
        "explanation": "Correct answer is C as IAM section provides the list of both Members and Roles.Option A is wrong as it would provide information about the roles only.Option B is wrong as it would provide only the service accounts.Option D is wrong as it would provide information about the roles only."
    },
    {
        "question": "You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
        "choices": ["A. Verify that you are Project Billing Manager for the GCP project. Update the existing project to link it to the existing billing account.", "B. Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.", "C. Verify that you are Billing Administrator for the billing account. Create a new project and link the new project to the existing billing account.", "D. Verify that you are Billing Administrator for the billing account. Update the existing project to link it to the existing billing account."],
         "answer": "B. Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.",
        "explanation": "Option B is the accurate approach. As a Project Billing Manager, you have the authority to create a new billing account and link it to an existing Google Cloud Platform project. This way, you maintain control over both the project and its associated billing."
    },    
    {
        "question": "You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
        "choices": ["A. Download the private key from the service account, and add it to each VMs custom metadata.", "B. Download the private key from the service account, and add the private key to each VM's SSH keys.", "C. Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.", "D. When creating the VMs, set the service account's API scope for Compute Engine to read/write."],
         "answer": "C. Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.",
        "explanation": "To illustrate how we can use a service account among projects, let’s first start with an existing service account in one of our GCP projects: Navigate to IAM & Admin → Service accounts in the project you have created the service account in initially (let’s name it project A) and mark the email down, as it will be needed later on. Go to the destination project, i.e. the one that we want to grant the service account, in IAM & Admin → IAM and click on “ADD” at the top Use the email you noted at step 1 and grant the role of your choice (e.g. Kubernetes Engine Cluster Viewer, or a custom role if needed) Voila! You have created a service account in project A and granted it permissions in another project! Steps 2 and 3 can be repeated for as many projects as you would like to grant the service account access to 🚀"
    },    
    {
        "question": "You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us- central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
        "choices": ["A. Change the default region property setting in the existing GCP project to asia-northeast1.", "B. Change the region property setting in the existing App Engine application from us-central to asia-northeast1.", "C. Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.", "D. Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application."],
         "answer": "D. Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application.",
        "explanation": "Option D is correct, as there can be only one App Engine application inside a project . C is incorrect, as GCP can't have two app engine applications..Each Google Cloud project can contain only a single App Engine application, and once created you cannot change the location of your App Engine application"
    },    
    {
        "question": "You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
        "choices": ["A. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role.", "B. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role. ", "C. Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to the role.", "D. Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to a new group. Add the group to the role."],
         "answer": "B. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role. ",
        "explanation": "I think it should be B, setup a group first are suggested way from Google."
    },    
    {
        "question": "You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
        "choices": ["A. Enable the Node Auto-Repair feature for your GKE cluster.", "B. Enable the Node Auto-Upgrades feature for your GKE cluster", "C. Select the latest available cluster version for your GKE cluster.", "D. Select ג€Container-Optimized OS (cos)ג€ as a node image for your GKE cluster."],
         "answer": "B. Enable the Node Auto-Upgrades feature for your GKE cluster",
        "explanation": "Answer B is correct. Google Kubernetes Engine (GKE) supports multiple versions of Kubernetes, and new versions are regularly released. To ensure that your GKE cluster runs a supported and stable version of Kubernetes, it is recommended to enable the Node Auto-Upgrades feature. This feature automatically upgrades the Kubernetes version of each node in the cluster to the latest stable version."
    },    
    {
        "question": "You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
        "choices": ["A. Configure an HTTP(S) load balancer. ", "B. Configure an internal TCP load balancer.", "C. Configure an external SSL proxy load balancer.", "D. Configure an external TCP proxy load balancer."],
         "answer": "A. Configure an HTTP(S) load balancer. ",
        "explanation": "In opt B, Internal tcp only deals with ip and ports in a vpc i.e 'internally' and does not deal with http/s or ssl/tls In opt C external SSL can serve application over https but not the ssl termination part. In opt D external TCP only deals with web application over HTTP and not the secured one. To top it off, it can't even terminate SSL session. Hence the only viable option is HTTP(S) load balancer."
    },    
    {
        "question": "You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?",
        "choices": ["A. Use the GCP Console to transfer the file instead of gsutil.", "B. Enable parallel composite uploads using gsutil on the file transfer.", "C. Decrease the TCP window size on the machine initiating the transfer.", "D. Change the storage class of the bucket from Nearline to Multi-Regional."],
         "answer": "B. Enable parallel composite uploads using gsutil on the file transfer.",
        "explanation": "This option is correct because parallel composite uploads can break down a large file into smaller components, upload them in parallel, and recombine them into a single object in the cloud. This method takes advantage of the available bandwidth more efficiently than serial uploads, as it can simultaneously transmit multiple parts of the file over the network. The gsutil tool has a -o option that allows enabling of parallel composite uploads."
    },    
    {
        "question": "You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
        "choices": ["A. Store the database password inside the Docker image of the container, not in the YAML file.", "B. Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.", "C. Store the database password inside a ConfigMap object. Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.", "D. Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container."],
         "answer": "B. Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.",
        "explanation": "it is good practice to use Secrets for confidential data (like API keys) and ConfigMaps for non-confidential data (like port numbers). B is correct."
    },    
    {
        "question": "You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The autoscaling policy is configured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of five VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds.The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?",
        "choices": ["A. Set the maximum number of instances to 1.", "B. Decrease the maximum number of instances to 3.", "C. Use a TCP health check instead of an HTTP health check.", "D. Increase the initial delay of the HTTP health check to 200 seconds."],
         "answer": "D. Increase the initial delay of the HTTP health check to 200 seconds.",
        "explanation": "If is going to be taking 180 seconds for additional vm to be avaliable then health check of 30second interval would not be ideal.Over provisioning will occur."
    },    
    {
        "question": "You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
        "choices": ["A. Select Google Kubernetes Engine. Use a single-node cluster with a small instance type.", "B. Select Google Kubernetes Engine. Use a three-node cluster with micro instance types.", "C. Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.", "D. Select Compute Engine. Use VM instance types that support micro bursting."],
         "answer": "C. Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.",
        "explanation": "Preemptible VM instances offer the lowest cost for batch processing jobs in the Google Cloud Platform. Preemptible VM instances are computed instances that can run for a maximum of 24 hours and provide no availability guarantees. Preemptible VM instances are up to 80% cheaper than standard compute instances, making them an excellent choice for batch-processing workloads that can be interrupted"
    },    
    {
        "question": "You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
        "choices": ["A. Run gcloud app restore.", "B. On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.", "C. On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.", "D. Deploy the original version as a separate application. Then go to App Engine settings and split traffic between applications so that the original version serves 100% of the requests."],
         "answer": "C. On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.",
        "explanation": "Option A is wrong as gcloud app restore was used for backup and restore and has been deprecated.Option B is wrong as there is no application revert functionality available.Option D is wrong as App Engine maintains version and need not be redeployed."
    },    
    {
        "question": "You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?",
        "choices": ["A. Check the app.yaml file for your application and check project settings.", "B. Check the web-application.xml file for your application and check project settings.", "C. Go to Deployment Manager and review settings for deployment of applications.", "D. Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment."],
         "answer": "D. Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment.",
        "explanation": "I would opt option D : as it would help to check the config details and Option A is not correct, as app.yaml would have only the runtime and script to run parameters and not the Project details"
    },    
    {
        "question": "You want to configure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?",
        "choices": ["A. Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group. ", "B. Create an instance template for the instances. Set 'Automatic Restart' to off. Set 'On-host maintenance' to Terminate VM instances. Add the instance template to an instance group.", "C. Create an instance group for the instances. Set the 'Autohealing' health check to healthy (HTTP).", "D. Create an instance group for the instance. Verify that the 'Advanced creation options' setting for 'do not retry machine creation' is set to off."],
         "answer": "A. Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group. ",
        "explanation": "A is correct because automatic restart will restart the instance if it crashes and setting on host maintenance to migrate the instance will not let the application go down during maintenance. It fulfills the requirements of automatically restarting the instances if they crash and ensuring that they are not lost during system maintenance activity. By setting the 'Automatic Restart' to on, the instances will attempt to automatically restart if they crash. By setting the 'On-host maintenance' to Migrate VM instance, the instances will be migrated to another host during system maintenance, preventing any downtime."
    },    
    {
        "question": "You host a static website on Cloud Storage. Recently, you began to include links to PDF files on this site. Currently, when users click on the links to these PDF files, their browsers prompt them to save the file onto their local system. Instead, you want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?",
        "choices": ["A. Enable Cloud CDN on the website frontend.", "B. Enable 'Share publicly' on the PDF file objects.", "C. Set Content-Type metadata to application/pdf on the PDF file objects.", "D. Add a label to the storage bucket with a key of Content-Type and value of application/pdf."],
         "answer": "C. Set Content-Type metadata to application/pdf on the PDF file objects.",
        "explanation": "Explanation: The Content-Type metadata indicates the media type of the content and helps the browser understand how to handle the file. In this case, by setting the Content-Type metadata of the PDF files to application/pdf, you're informing the browser that the files are in PDF format, and the browser will attempt to display them directly within the browser window, rather than prompting the user to download them."
    },    
    {
        "question": "You have a virtual machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?",
        "choices": ["A. Rely on live migration to move the workload to a machine with more memory.", "B. Use gcloud to add metadata to the VM. Set the key to required-memory-size and the value to 8 GB.", "C. Stop the VM, change the machine type to n1-standard-8, and start the VM.", "D. Stop the VM, increase the memory to 8 GB, and start the VM. "],
         "answer": "D. Stop the VM, increase the memory to 8 GB, and start the VM. ",
        "explanation": "D is correct. If you pay attention to the question, option C mentions n1-standard-8. That instance type has 8vCPUs and 30 GB RAM, and we only need 8GB. On top of that, it is possible to use custom machine type to adjust current VM RAM to the value we need."
    },    
    {
        "question": "You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All the VMs must be able to reach each other over Internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?",
        "choices": ["A. Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.", "B. Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range.", "C. Create 2 custom VPCs, each with a single subnet. Create each subnet in a different region and with a different CIDR range.", "D. Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region and with the same CIDR range."],
         "answer": "A. Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.",
        "explanation": "ANSWER A meets the requirement because it creates a single custom VPC with 2 subnets, with each subnet in a different region and with a different CIDR range. This ensures that the production and test VMs are in separate subnets and that they can communicate with each other over Internal IP without creating additional routes. Since the subnets are in different regions, they will also have different internal routing tables, which can help isolate the traffic between the two subnets. This configuration provides the necessary network isolation and connectivity required by the production and test workloads."
    },    
    {
        "question": "You need to create an autoscaling managed instance group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?",
        "choices": ["A. Create a health check on port 443 and use that when creating the Managed Instance Group.", "B. Select Multi-Zone instead of Single-Zone when creating the Managed Instance Group.", "C. In the Instance Template, add the label 'health-check'.", "D. In the Instance Template, add a startup script that sends a heartbeat to the metadata server."],
         "answer": "A. Create a health check on port 443 and use that when creating the Managed Instance Group.",
        "explanation": "Option B is related to the availability and distribution of instances across multiple zones, but it does not directly address the requirement of recreating unhealthy VMs. Option C is incorrect because labels are not used for configuring health checks in GCP. Option D is an alternative method for health checking, but it is not as straightforward as using the built-in health check functionality provided by GCP for managed instance groups."
    },    
    {
        "question": "Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members. You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
        "choices": ["A. 1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery jobUser role to the group.", "B. 1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery dataViewer user role to the group.", "C. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.", "D. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery dataViewer user role to the group."],
         "answer": "C. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.",
        "explanation": "This approach allows for central management of permissions by adding and removing users from the Google group as needed, rather than individually managing permissions for each user. The jobUser role provides the necessary permissions for running queries in BigQuery, allowing the data science team to perform their tasks without granting unnecessary permissions."
    },    
    {
        "question": "You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?",
        "choices": ["A. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.", "A. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.", "C. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.", "D. 1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint."],
         "answer": "A. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.",
        "explanation": "ANSWER A is the correct answer because it follows Google's recommended practices of using a single VPC per project and creating a new subnetwork in the same VPC in the europe-west1 region. This allows the new instance to communicate with the existing instance using its private IP address as the endpoint."
    },
    {
        "question": "You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?",
        "choices": ["A. Deploy the new version in the same application and use the --migrate option.", "B. Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.", "C. Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.", "D. Create a new App Engine application in the same project. Deploy the new version in that application. Configure your network load balancer to send 1% of the traffic to that new application."],
         "answer": "B. Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.",
        "explanation": "By using the App Engine's traffic splitting feature, we can easily direct a certain percentage of traffic to a specific version of our application. In this case, we want to send 1% of traffic to the new test version and keep the remaining 99% on the current version. This can be achieved by deploying the new version in the same application and using the `--splits` option to give a weight of 99 to the current version and a weight of 1 to the new version. Answer A is incorrect because the `--migrate` option is used for migrating traffic to a new version after it has been fully tested and is ready for full deployment. Answer C is incorrect because it requires additional configuration to proxy requests to the new version, increasing complexity unnecessarily. Answer D is incorrect because it involves configuring a network load balancer, which is not necessary for this use case and adds unnecessary complexity."
    },
    {
        "question": "You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?",
        "choices": ["A. Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.", "B. Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.", "C. Create a new managed instance group with an updated instance template. Add the group to the backend service for the load balancer. When all instances in the new managed instance group are healthy, delete the old managed instance group.", "D. Create a new instance template with the new application version. Update the existing managed instance group with the new instance template. Delete the instances in the managed instance group to allow the managed instance group to recreate the instance using the new instance template."],
         "answer": "B. Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.",
        "explanation": "Correct option is B. We need to ensure the global capacity remains intact, for that reason we need to establish maxUnavailable to 0. On the other hand, we need to ensure new instances can be created. We do that by establishing the maxSurge to 1. Option C is more expensive and more difficult to set up and option D won't meet requirements since it won't keep global capacity intact."
    },
    {
        "question": "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
        "choices": ["A. Cloud SQL", "B. Cloud Spanner", "C. Cloud Firestore", "D. Cloud Datastore"],
         "answer": "B. Cloud Spanner",
        "explanation": "Cloud SQL for small relational data, scaled manually Cloud Spanner for relational data, scaled automatically Cloud Firestore for app-based data(?) Cloud Datastore for non-relational data"
    },
    {
        "question": "You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?",
        "choices": ["A. Assign the finance team only the Billing Account User role on the billing account.", "B. Assign the engineering team only the Billing Account User role on the billing account.", "C. Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization. ", "D. Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization."],
         "answer": "C. Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization. ",
        "explanation": "Project Billing Manager does not allow to make any changes to projects. It's just about linking+unlinking projects to billing accounts On the other hand, the single role billing account user does not grant any right to view projects. Even less likely to link them to any billing account. (see https://cloud.google.com/iam/docs/job-functions/billing The Billing Account User role gives the service account the permissions to enable billing (associate projects with the organization's billing account for all projects in the organization) and thereby permit the service account to enable APIs that require billing to be enabled.). Thus A is not the correct answer."
    },
    {
        "question": "You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the first VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?",
        "choices": ["A. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Set the service's externalTrafficPolicy to Cluster. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created.", "B. 1. In GKE, create a Service of type NodePort that uses the application's Pods as backend. 2. Create a Compute Engine instance called proxy with 2 network interfaces, one in each VPC. 3. Use iptables on this instance to forward traffic from gce-network to the GKE nodes. 4. Configure the Compute Engine instance to use the address of proxy in gce-network as endpoint.", "C. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.", "D. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add a Cloud Armor Security Policy to the load balancer that whitelists the internal IPs of the MIG's instances. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created."],
         "answer": "C. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.",
        "explanation": "Not A, exposing the service with an external LoadBalancer (externalTrafficPolicy set to Cluster) and not peering VPCs or using an internal load balancer unnecessarily exposes the service to the internet, which is not required for inter-VPC communication and could lead to security concerns. All the details in the question are pushing to answer C."
    },
    {
        "question": "Your organization is a financial company that needs to store audit log files for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log file retention. What should you do?",
        "choices": ["A. Create an export to the sink that saves logs from Cloud Audit to BigQuery.", "B. Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.", "C. Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.", "D. Export these logs to Cloud Pub/Sub and write a Cloud Dataflow pipeline to store logs to Cloud SQL."],
         "answer": "B. Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.",
        "explanation": "B is correct because Coldline Storage is the perfect service to store audit logs from all the projects and is very cost-efficient as well. Coldline Storage is a very low-cost, highly durable storage service for storing infrequently accessed data."
    },
    {
        "question": "You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specific reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?",
        "choices": ["A. Create a Cloud Memorystore for Redis instance with 32-GB capacity.", "B. Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.", "C. Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.", "D. Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 GB."],
         "answer": "A. Create a Cloud Memorystore for Redis instance with 32-GB capacity.",
        "explanation": "We are looking for latency-sensitive website What it's good for Memorystore for Redis provides a fast, in-memory store for use cases that require fast, real-time processing of data. From simple caching use cases to real time analytics, Memorystore for Redis provides the performance you need. Caching: Cache is an integral part of modern application architectures. Memorystore for Redis provides low latency access and high throughput for heavily accessed data, compared to accessing the data from a disk based backend store. Session management, frequently accessed queries, scripts, and pages are common examples of caching."
    },
    {
        "question": "You are hosting an application on bare-metal servers in your own data center. The application needs access to Cloud Storage. However, security policies prevent the servers hosting the application from having public IP addresses or access to the internet. You want to follow Google-recommended practices to provide the application with access to Cloud Storage. What should you do?",
        "choices": ["A. 1. Use nslookup to get the IP address for storage.googleapis.com. 2. Negotiate with the security team to be able to give a public IP address to the servers. 3. Only allow egress traffic from those servers to the IP addresses for storage.googleapis.com.", "B. 1. Using Cloud VPN, create a VPN tunnel to a Virtual Private Cloud (VPC) in Google Cloud. 2. In this VPC, create a Compute Engine instance and install the Squid proxy server on this instance. 3. Configure your servers to use that instance as a proxy to access Cloud Storage.", "C. 1. Use Migrate for Compute Engine (formerly known as Velostrata) to migrate those servers to Compute Engine. 2. Create an internal load balancer (ILB) that uses storage.googleapis.com as backend. 3. Configure your new instances to use this ILB as proxy.", "D. 1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, configure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com. "],
         "answer": "D. 1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, configure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com. ",
        "explanation": "A. It's bad practice to use nslookup to try find a permanent IP address because IPs can change. That's what DNS is for! Also, the security team aren't going to budge... this is just a silly answer.B. We're getting warmer. Any time a question mentions on-prem and cloud, Google wants you to think about Cloud VPN. This solution might even work, but installing Squid? This is a messy solution to a more simple problem. C. Talk about using a sledge hammer to swat a mosquito. I think this could work, but migrating servers to cloud to solve a simple networking problem? D. Once more Google's favorite Cloud VPN is in the answer. I'm not sure about the networking component of this question."
    },
    {
        "question": "You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. You want to follow Google-recommended practices. What should you do?",
        "choices": ["A. 1. Create a Cloud Function that uses a Cloud Pub/Sub trigger on that topic. 2. Call your application on Cloud Run from the Cloud Function for every message.", "B. 1. Grant the Pub/Sub Subscriber role to the service account used by Cloud Run. 2. Create a Cloud Pub/Sub subscription for that topic. 3. Make your application pull messages from that subscription.", "C. 1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.", "D. 1. Deploy your application on Cloud Run on GKE with the connectivity set to Internal. 2. Create a Cloud Pub/Sub subscription for that topic. 3. In the same Google Kubernetes Engine cluster as your application, deploy a container that takes the messages and sends them to your application."],
         "answer": "C. 1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.",
        "explanation": "You can use Pub/Sub to push messages to the endpoint of your Cloud Run service, where the messages are subsequently delivered to containers as HTTP requests. You cannot use Pub/Sub pull subscriptions because Cloud Run only allocates CPU during the processing of a request."
    },
    {
        "question": "You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?",
        "choices": ["A. Deploy the container on Cloud Run.", "B. Deploy the container on Cloud Run on GKE.", "C. Deploy the container on App Engine Flexible.", "D. Deploy the container on GKE with cluster autoscaling and horizontal pod autoscaling enabled."],
         "answer": "A. Deploy the container on Cloud Run.",
        "explanation": "Cloud Run is a fully managed, serverless platform that automatically scales to zero when there are no requests, making it highly cost-efficient for applications with infrequent traffic. It is designed to run containerized applications and exposes HTTP endpoints natively. You only pay for the resources used during request processing, which is ideal for an application that receives very few requests per day.\n\n**Why Not the Other Options?**\n- **B. Cloud Run on GKE**: Requires a Kubernetes cluster, incurring baseline infrastructure costs even when idle.\n- **C. App Engine Flexible**: Has a minimum instance requirement, resulting in costs even without traffic.\n- **D. GKE with autoscaling**: Although it can scale based on demand, it still involves cluster management costs, making it more expensive than a fully serverless solution like Cloud Run.\n\nTherefore, **Cloud Run** is the most cost-effective choice for this scenario."
    },
 

    {   
        "question": "Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?",
        "choices": [
            "A. Link the acquired company's projects to your company's billing account.",
            "B. Configure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.",
            "C. Migrate the acquired company's projects into your company's GCP organization. Link the migrated projects to your company's billing account.",
            "D. Create a new GCP organization and a new billing account. Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account."
        ],
        "answer": "A. Link the acquired company's projects to your company's billing account.",
        "explanation": "To consolidate all GCP costs onto a single invoice as of tomorrow, you need to link the acquired company's projects to your company's billing account. This ensures that all charges are aggregated under a single invoice immediately. Migrating projects to a different organization (as suggested in option C) is a complex process and does not immediately affect billing consolidation. Option B only consolidates data in BigQuery but does not change invoicing. Option D involves creating a new organization and billing account, which is unnecessary and time-consuming for this requirement."
    },

    {
        "question": "You built an application on Google Cloud that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data. You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?",
        "choices": [
            "A. Add the support team group to the roles/monitoring.viewer role.",
            "B. Add the support team group to the roles/spanner.databaseUser role.",
            "C. Add the support team group to the roles/spanner.databaseReader role.",
            "D. Add the support team group to the roles/stackdriver.accounts.viewer role."
        ],
        "answer": "A. Add the support team group to the roles/monitoring.viewer role.",
        "explanation": "The `roles/monitoring.viewer` role grants read-only access to monitoring and logging data in Cloud Monitoring, allowing the support team to monitor the environment without accessing actual table data. This follows the principle of least privilege, ensuring the team can observe system performance without modifying or viewing sensitive database contents.\n\n**Why Not the Other Options?**\n- **B. roles/spanner.databaseUser**: Grants permissions to execute queries and modify schema, which is more than needed.\n- **C. roles/spanner.databaseReader**: Grants read access to table data, which is not required for monitoring purposes.\n- **D. roles/stackdriver.accounts.viewer**: This role provides access to Stackdriver billing accounts and settings but does not grant monitoring access to Cloud Spanner.\n\nThus, the correct answer is **A. roles/monitoring.viewer**."
    },
    {
        "question": "For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Cloud Logging agent on all the instances. You want to minimize cost. What should you do?",
        "choices": [
            "A. 1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances. 2. Update your instances' metadata to add the following value: logs-destination: bq://platform-logs.",
            "B. 1. In Cloud Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink. 2. Create a Cloud Function that is triggered by messages in the logs topic. 3. Configure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.",
            "C. 1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.",
            "D. 1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset. 2. Configure this Cloud Function to create a BigQuery Job that executes this query: INSERT INTO dataset.platform-logs (timestamp, log) SELECT timestamp, log FROM compute.logs WHERE timestamp > DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) 3. Use Cloud Scheduler to trigger this Cloud Function once a day."
        ],
        "answer": "C. 1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.",
        "explanation": "The most cost-effective and efficient way to send Compute Engine logs to BigQuery is by using **Cloud Logging exports**. This method allows logs to be directly exported to BigQuery without additional infrastructure costs or custom processing.\n\n**Why Not the Other Options?**\n- **A. Updating instance metadata**: There is no such feature where instances can directly send logs to BigQuery via metadata settings.\n- **B. Using Cloud Pub/Sub and Cloud Functions**: This approach adds unnecessary complexity and costs associated with Pub/Sub and Cloud Functions execution.\n- **D. Using Cloud Scheduler and Cloud Functions**: This approach requires periodic execution of a BigQuery job, adding complexity and delays in log ingestion.\n\nThus, **Option C** is the best approach, as it directly exports logs from Cloud Logging to BigQuery in real-time with minimal cost."
    },
    {
        "question": "You are using Deployment Manager to create a Google Kubernetes Engine cluster. Using the same Deployment Manager deployment, you also want to create a DaemonSet in the kube-system namespace of the cluster. You want a solution that uses the fewest possible services. What should you do?",
        "choices": [
            "A. Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
            "B. Use the Deployment Manager Runtime Configurator to create a new Config resource that contains the DaemonSet definition.",
            "C. With Deployment Manager, create a Compute Engine instance with a startup script that uses kubectl to create the DaemonSet.",
            "D. In the cluster's definition in Deployment Manager, add a metadata that has kube-system as key and the DaemonSet manifest as value."
        ],
        "answer": "A. Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
        "explanation": "The most efficient and integrated way to deploy both a Google Kubernetes Engine (GKE) cluster and a DaemonSet using Deployment Manager is to define the Kubernetes API as a **Type Provider** in Deployment Manager. This allows Deployment Manager to create and manage Kubernetes resources (such as a DaemonSet) directly within the same deployment.\n\n**Why Not the Other Options?**\n- **B. Runtime Configurator**: While it can store configurations, it does not natively interact with Kubernetes resources or apply them automatically.\n- **C. Compute Engine instance with startup script**: This is an indirect method that requires extra resources (a VM instance), making it inefficient.\n- **D. Adding metadata to the cluster definition**: Metadata keys do not support direct deployment of Kubernetes resources like a DaemonSet.\n\nThus, **Option A** is the best solution as it directly integrates Deployment Manager with the Kubernetes API, following best practices and minimizing additional services."
    },
    {
        "question": "You are building an application that will run in your data center. The application will use Google Cloud Platform (GCP) services like AutoML. You created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises environment. What should you do?",
        "choices": [
            "A. Use service account credentials in your on-premises application.",
            "B. Use gcloud to create a key file for the service account that has appropriate permissions.",
            "C. Set up direct interconnect between your data center and Google Cloud Platform to enable authentication for your on-premises applications.",
            "D. Go to the IAM & admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center."
        ],
        "answer": "B. Use gcloud to create a key file for the service account that has appropriate permissions.",
        "explanation": "The best approach to authenticate an on-premises application to Google Cloud APIs like AutoML is to use a **service account key file**. This allows your application to securely authenticate using the service account’s credentials.\n\n**Steps:**\n1. Use `gcloud iam service-accounts keys create` to generate a key file.\n2. Store the key securely on your on-premises system.\n3. Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to point to the key file in your application.\n\n**Why Not the Other Options?**\n- **A. Use service account credentials in your on-premises application**: This is a vague answer. The proper way is to use a key file, as described in option B.\n- **C. Set up direct interconnect**: This is unnecessary for authentication; interconnect only provides private networking, not authentication services.\n- **D. Use a user account for authentication**: This is against best practices because user credentials are not designed for automated services and could lead to security risks.\n\nThus, **Option B** is the correct answer as it follows Google's best practices for service account authentication."
    },
    {
        "question": "In your data center you want to deploy an application. This application will use GCP services like AutoML. For this you created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises enviroment. What should you do?",
        "choices": ["You should go to the IAM & Admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center", "You should set up a direct interconnect between your data center and GCP to enable authentication for your on premises applications", "You should use service account credentials in your on-premises application", "You should use gcloud to create a key file for the service account that has appropriate permissions"],
         "answer": "You should use gcloud to create a key file for the service account that has appropriate permissions",
        "explanation": "The best approach to authenticate an on-premises application to Google Cloud APIs like AutoML is to use a **service account key file**. This allows your application to securely authenticate using the service account’s credentials.\n\n**Steps:**\n1. Use `gcloud iam service-accounts keys create` to generate a key file.\n2. Store the key securely on your on-premises system.\n3. Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to point to the key file in your application.\n\n**Why Not the Other Options?**\n- **A. Use service account credentials in your on-premises application**: This is a vague answer. The proper way is to use a key file, as described in option B.\n- **C. Set up direct interconnect**: This is unnecessary for authentication; interconnect only provides private networking, not authentication services.\n- **D. Use a user account for authentication**: This is against best practices because user credentials are not designed for automated services and could lead to security risks.\n\nThus, **Option B** is the correct answer as it follows Google's best practices for service account authentication."
    },
    {
        "question": "Which of the following solutions gives you the ability to administer projects from a browser-based command line ?",
        "choices": ["IAM & Admin", "Cloud CMD", "Cloud 9", "Cloud Shell"],
         "answer": "Cloud Shell",
        "explanation": "Cloud Shell is an interactive shell enviroment for Google Cloud that makes it easy for you to learn and experiment with Google Cloud and manage your projects and resources from your web browser"
    },
    {
        "question": "A budget is set at 1000$ and an alert is set at 100%. What happens when the full amount is spent",
        "choices": ["A notification email will be sent to the Billing Administrator", "All services in the project will be suspended", "You have 12 hours before Google Suspends all services", "Nothing"],
         "answer": "A notification email will be sent to the Billing Administrator",
        "explanation": "Setting a budget alert at 100% means that once the total spending reaches $1000, a notification email is sent to the **Billing Administrator** and other configured recipients. However, this does not automatically suspend services. Google Cloud **does not** enforce spending limits based on budgets; it only provides alerts. To stop services from incurring additional charges, you must manually disable billing or use programmatic budget enforcement mechanisms."
    },
    {
        "question": "As a Mobile Game Developer, you use Cloud Spanner for storing player profiles. Your operational team wants access to view and edit player profiles to support users. What should you do?",
        "choices": ["You should grant Cloud Spanner Database User role to operational team group", "You should grant Cloud Spanner Database Reader role to operational team group", "You should grant Cloud Spanner Database Admin role to operational team group", "You should grant Cloud Spanner Database User role to all user accounts in the operational team"],
         "answer": "You should grant Cloud Spanner Database User role to operational team group",
        "explanation": "A principal with Cloud Spanner Database User role can: \n - read from and write to Cloud Spanner Database \n - execute SQL queries on the databse, including DML and Partitioned DML \n view and update schema for the database \n Lowest-level resources where you can grant this role: - database "
    },
    {
        "question": "Which of these compute services users dont have to worry about infrastructure management ?",
        "choices": ["Compute Engine", "Cloud Firestore", "App Engine", "Google Kubernetes Engine"],
         "answer": "App Engine",
        "explanation": "App Engine is a fully managed, serverless platform for developing and hosting web applications at scale. You can choose form several popular languages, libraires and frameworks to develop your apps and then let App Engine take care of provisioning servers and scaling your app instances based on demand"
    },
    {
        "question": "Which of these compute services users don't have to worry about infrastructure management",
        "choices": ["Compute Engine", "Cloud Functions", "Google Kubernetes Engine", "Google Cloud Spanner"],
         "answer": "Cloud Functions",
        "explanation": "Cloud Functions is a lightweight compute solution for developers to create single-purpose, stand-alone functions that respond to Cloud events without the need to manage a server or runtime enviroment."
    },
    {
        "question": "One of your applications is deployed to the GKE cluster as a Kubernetes workload with DaemonSets and is gaining popularity. You want to add more pods to your workload and want to make sure the cluster scales up and down automatically based on volume. What should you do ?",
        "choices": ["You should create another identical Kubernetes workload and split traffic between the two workloads", "You should enable Horizontal Pod Autoscaling for the Kubernetes delpoyment", "You should perform a rolling update to modify machine type to a higher one", "You should enable autoscaling on Kubernetes Engine"],
         "answer": "You should enable autoscaling on Kubernetes Engine",
        "explanation": "DaemonSets are used for running one pod per node, so Horizontal Pod Autoscaling (HPA) does not apply to them. Instead, the best way to scale DaemonSets is by **enabling cluster autoscaling** in GKE, which adjusts the number of nodes dynamically based on resource demands. \n\n**Why Not the Other Options?**\n- **Creating another identical workload**: This does not address the need for automatic scaling.\n- **Enabling Horizontal Pod Autoscaling**: HPA is for Deployments, StatefulSets, and ReplicaSets, but does not work for DaemonSets.\n- **Performing a rolling update with a higher machine type**: While this might help with resource limits, it does not provide automatic scaling.\n\nThus, **enabling autoscaling on Kubernetes Engine is the correct approach** for scaling workloads that use DaemonSets."
    },
    {
        "question": "As a Mobile Game Developer you want to launch a new mobile game that will be available to users around the world. Your game requires RDBMS for storing player profiles. Which storage service should you use to be able to scale to a gloabal audience with minimal configuration updates ?",
        "choices": ["Cloud Datastore", "Cloud Firestore", "Cloud SQL", "Cloud Spanner"],
         "answer": "Cloud Spanner",
        "explanation": "Cloud Spanner is a fully managed, mission critical, relational database service that offers transactional consistency at global scale, automatic, synchronous replication for high availability and support for two SQL dialects: Google Standard SQL and PostgreSQL"
    },
    {
        "question": "As a Cloud Engineer, you are migrating your workloab from on-premises delployment to Google Kubernetes Engine. You want to minimize costs. What should you do ?",
        "choices": ["You should configure the needed capacity", "You should configure Autopilot in GKE to monitor node utilization and eliminate inactice nodes", "You should create several nodes using Compute Engine, add them to a Managed Instance Group, and set the scaling up or down depending on the workload", "You should scale individual nodes up and down with the Horizontal Pod Autoscaler"],
         "answer": "You should configure Autopilot in GKE to monitor node utilization and eliminate inactice nodes",
        "explanation": "Autopilot is a new mode of operation in Google Kubernetes Engine (GKE) that is designed to reduce the operational costs of managing clusters, optimize your clusters for productions, and yeild higher workloab availability"
    },
    {
        "question": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
        "choices": ["You should reference the monitoring pod in Deployment object", "You should refernce the monitoring pod in a cluster initializer at the GKE cluser creation time", "You should deploy the monitoring pod in a DaemonSet object", "You should deploy the monitoring pod in StatefulSet object"],
         "answer": "You should deploy the monitoring pod in a DaemonSet object",
        "explanation": "DaemonSets are used to ensure that a specific pod runs on every node in the cluster, which makes them the ideal choice for deploying a monitoring agent. This ensures that each node has a monitoring pod collecting and sending metrics.\n\n**Why Not the Other Options?**\n- **Deployment object**: A Deployment creates multiple pods based on replica count, but it does not guarantee that each node has a monitoring pod.\n- **Cluster initializer at GKE creation**: GKE does not provide a built-in initializer for automatically deploying monitoring pods.\n- **StatefulSet object**: StatefulSets are used for stateful applications requiring stable identities and persistent storage, which is unnecessary for monitoring pods.\n\nThus, **DaemonSet is the correct choice** as it ensures that the monitoring pod is deployed on every node in the cluster."
    },
    {
        "question": "As a Game Developer you deployed your horror game using App Engine in the europe-central2 region. After a while, you see that most your users live in Japan. You want to minimize latency and move this application deployment to asia-northeast1 region. What should you do?",
        "choices": ["You should create a ticker to Google Support to change application deployment region in App Engine", "You should deploy a new app engine application in the same GCP project and set the region to asia-northeast1. Finally, remove the old App Engine application", "You should create a new GCP project, create a new App Engine application in the new GCP project and set its region to asia-northeast1. Finally, remove the old App Engine application", "You should update the default region to asia-northeast1 on the App Engine"],
         "answer": "You should create a new GCP project, create a new App Engine application in the new GCP project and set its region to asia-northeast1. Finally, remove the old App Engine application",
        "explanation": "App Engine regions **cannot be changed once set**. The only way to move an App Engine application to a new region is by **creating a new GCP project** and deploying the application there with the desired region.\n\n**Why Not the Other Options?**\n- **Creating a ticket to Google Support**: Google does not allow App Engine region changes even with support intervention.\n- **Deploying a new App Engine application in the same GCP project**: App Engine allows only **one application per project**, so you cannot deploy another App Engine application in a different region within the same project.\n- **Updating the default region**: This is not possible in App Engine once the region is set.\n\nThus, the correct approach is to **create a new GCP project, deploy App Engine in the new region, and then remove the old deployment.**"
    },
    {
        "question": "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
        "choices": [
            "You should reference the monitoring pod in a Deployment object",
            "You should reference the monitoring pod in cluster initializer at the GKE cluster creation time",
            "You should deploy the monitoring pod in DaemonSet object",
            "You should deploy the monitoring pod in StatefulSet object"
        ],
        "answer": "You should deploy the monitoring pod in DaemonSet object",
        "explanation": "A DaemonSet ensures that a copy of the monitoring pod runs on every node in the cluster, which is required for this use case."
    },
    
    {
        "question": "As Game Developer you deployed your horror game using App Engine in the europe-central2 region. After a while you see that most of your users live in Japan. You want to minimize latency and move this application deployment to asia-northeast1 region. What should you do ?",
        "choices": ["You should create a ticket to Google Support to change application deployment region in App Engine", "You should deploy a new app engine application in the same GCP project and set region to asia-northeast 1. Finally, remove the old App Engine application.", "You should create a new GCP project, create a new App Engine application in the new GCP project and set its region to asia-northeast1. Finally, remove the old App Engine application.", "You should update the default region to asia-northeast1 on the App Engine"],
         "answer": "You should create a new GCP project, create a new App Engine application in the new GCP project and set its region to asia-northeast1. Finally, remove the old App Engine application.",
        "explanation": "App Engine is a fully managed, serverless platform for developing and hosting web applications at scale. You can choose from several popular languages, libraries, and frameworks to develop your apps, and then let App Engine take care of provisioning servers and scaling your appp instances based based on demand"
    },
    {
        "question": "Which storage service provides a MySQL, PostgreSQL or SQL Server database engines to GCP customers ?",
        "choices": ["Cloud Bigtable", "Cloud Spanner", "BigQuery", "Cloud SQL"],
         "answer": "Cloud SQL",
        "explanation": "Cloud SQL is fully-managed database service service that helps you set up , maintain, manage and administer your relational databases on Google Cloud Platform. You can use Cloud SQL with MySQL, PostegreSQL or SQL Server. "
    },
    {
        "question": "A Kubernetes cluster with 1 node-pool receives a lot of traffic and needs to grow. What should you do to add more nodes to this cluster?",
        "choices": [
            "You should edit the managed instance group of the cluster and increase the number of VMs by the desired number of nodes",
            "You should edit the managed instance group of the cluster and enable autoscaling",
            "You should use gcloud container clusters resize with the desired number of nodes",
            "You should use kubectl container clusters resize with the desired number of nodes"
        ],
        "answer": "You should use gcloud container clusters resize with the desired number of nodes",
        "explanation": "The 'gcloud container clusters resize' command allows you to manually resize the cluster by specifying the desired number of nodes, directly increasing or decreasing the cluster size."
    },
    {
        "question": "Your application is running on Google Compute instance and you want to create multiple copies of this virtual machine to handle the traffic. What should you do?",
        "choices": [
            "You should create a snapshot of the compute engine instance disk and create instances from this snapshot to handle the traffic",
            "You cannot do this in GCP",
            "You should create a snapshot of the compute engine disk, create a custom image from the snapshot and create instances from this snapshot to handle the traffic",
            "You should create a snapshot of the compute engine instance disk, create a custom image from the snapshot and create instances from this image to handle the traffic"
        ],
        "answer": "You should create a snapshot of the compute engine instance disk, create a custom image from the snapshot and create instances from this image to handle the traffic",
        "explanation": "In Google Cloud Platform (GCP), to create multiple copies of a virtual machine, you can first take a snapshot of the disk attached to your compute engine instance. Then, you create a custom image from the snapshot, and you can use this custom image to create new instances. This allows you to scale your application by replicating the instance to handle more traffic."
    },
    {
        "question": "With Googles's best practices in mind, what type of roles should be used as the first choice tool for granting permissions in a GCP project ?",
        "choices": ["Predefined roles", "Basic Roles", "Custom Roles"],
         "answer": "Predefined roles",
        "explanation": "IAM provides additional predefined roles that give granular access to specific cloud resources and prevent unwanted access to other resources. These roles are created and maintained by Google. google automatically updates their permissions as necessary, such as when google cloud adds new features or services"
    },
    {
        "question": "As a project owner, you need your co-worker to delpoy a new verion of your social media ap to App Engine. Which IAM roles should you grant to your co-worker to meet Google's recommended practices ?",
        "choices": ["App Engine Admin", "App Engine Viewer", "App Engine Code Viewer", "App Engine Delployer"],
         "answer": "App Engine Delployer",
        "explanation": "App Engine Deployer - \n read only access to all application configuration and settings \n To deploy new versions, you must have the Service Account User role on the App Engine default service account, and the Cloud Build Editor and Cloud Storage Object Admin roles on the project"
    },

    {
        "question": "You are designing an application and you want to be sure that the containers are located as close to each other as possible, in order to minimize latency. Which design decision will you recommend?",
        "choices": ["You should place the containers in the same cluster", "You should place the containers in the same pod", "You should give the containers the same labels", "You should place the containers in the same namespace"],
         "answer": "You should place the containers in the same pod",
        "explanation": "In Kubernetes, containers within the same pod share the same network namespace, which means they can communicate with each other using localhost. This reduces latency compared to containers placed in different pods or clusters. Placing containers in the same pod ensures they are as close as possible in terms of networking, helping to minimize latency."
    },

    {
        "question": "You are working on your own project and want to control your expenses. You want to be automatically informed about project expenses so that you can take action when you get close to your limit. What should you do?",
        "choices": ["Create a budget alert for the appropriate levels for your total monthly budget (for example: 50%, 90%, 100%)", "Set up a PayPal account with a monthly limit equate to your budget", "Set up a credit card with a monthly limit equal to your budget", "You can't automatically control your Google Cloud expenses"],
         "answer": "Create a budget alert for the appropriate levels for your total monthly budget (for example: 50%, 90%, 100%)",
        "explanation": "A budget alert enables you to track your actual Google Cloud spend againts your planned spend. After you've set a budget amount, you set budget alert threshold rules that are used to trigger email notifications. Budget alert emails help you stay informed about how your spend is tracking against your budget. you can also use budgets to autmoate cost control responses"
    },

    {
        "question": "A mission-critical application is migrated to Google Kubernetes Engine from your on-premises data center and uses e2-standard-4 machine types. How can you deploy additional pods on e2-standard-32 machine types without causing application downtime ?",
        "choices": ["You should update the existing cluster to add a new node pool with e2-standard-32 machine types and deploy the pods", "You should create a new cluster with two node pools - one with e2-standard-4 machines types and other with the e2-standard-32 machine types. Then deploy the application on this new cluster and remove the older one", "You should create a new cluster with node pool instances with e2-standard-32 machine types. Then deploy the application on the new cluster and remove the older one", "You should update the exisiting cluster to add a new node pool with e2-standard-32 machine types and deploy the pods"],
         "answer": "You should create a new cluster with two node pools - one with e2-standard-4 machines types and other with the e2-standard-32 machine types. Then deploy the application on this new cluster and remove the older one",
        "explanation": "By creating a new cluster with both e2-standard-4 and e2-standard-32 node pools, you can achieve high availability and distribute workloads across different machine types. This approach ensures that your application continues to function without downtime while migrating. Once the new cluster is deployed and the application is running, you can decommission the old cluster."
    },

    {
        "question": ".... is the smallest, most basic deployable objects in Kubernetes. it represents a single instane of a running process in your cluster",
        "choices": ["A Node...", "A Pod...", "A Container ...", "A ReplicaSet ..."],
         "answer": "A Pod...",
        "explanation": "Pods are the smallest, most basic deployable objects in Kubernetes. A Pod represents a single instance of"
    },

    {
        "question": "You are deploying an application to App Engine and want to scale the number of instances based on request rate. You need at 3 least 3 unoccupied instances at all times. What type of scaling should you use?",
        "choices": ["Basic Scaling with min_instances set to 3", "Manual Scaling with 3 instances", "Automatic Scaling with min_idle instances set to 3", "Basic Scaling with max_instances set to 3"],
         "answer": "Automatic Scaling with min_idle instances set to 3",
        "explanation": "You will need to set up automatic scaling to do this"
    },
    {
        "question": "A web application is running using a Managed Instance Group based on an instance template. You modified the startup script in this template and want to propagate these changes to all instances in this MIG. What should you do to minimize effort and cost while maintaining available capacity?",
        "choices": [
            "You should perform a rolling-action replace with max unavailable set to 0 and max-surge set to 1",
            "You should perform a rolling-action start-update with max-unavailable set to 1 and max-surge set to 0",
            "You should remove instances in the managed instance group one at a time and rely on auto-healing to provision an additional instance",
            "You should create a new managed instance group based on a new template. Add the group as a backend service to the load balancer. When all instances in the new managed instance group are healthy, remove the old managed instance group"
        ],
        "answer": "You should perform a rolling-action replace with max unavailable set to 0 and max-surge set to 1",
        "explanation": "Rolling-action replace with max-unavailable set to 0 ensures that all existing instances remain operational while new ones are created. Max-surge set to 1 allows new instances to be added before removing old ones, ensuring minimal effort and cost while maintaining availability."
    },
    {
        "question": "As a Cloud Engineer, you need to design an IoT application that requires data storage up to 30 petabytes. Your application must support fast reads and writes. Your data schema is rather simple and you want to use the most economical soultion for this. What should you do ?",
        "choices": ["You should use BigQuery, and implement the business logic in SQL", "You should store the data in Cloud Storage", "You should store the data in Cloud Bigtable", "You should store the data Cloud Spanner, and add an in-memory cahce for speed"],
         "answer": "You should store the data in Cloud Bigtable",
        "explanation": "Bigtable is correct because it provides high-speed reads and writes, supports a simple schema, and is cost-effective. Cloud Spanner is not correct because it would not be the most economical solution. Cloud Storage is not correct because object oritented storage is not a good fit for reading and writing small pieces of data. BigQuery is not correct because it doesn't provide the high-speed reads and writes required by IoT"
    },
    {
        "question": "You are using BigQuery with Cloud Shell and want to list all BigQuery jobs for a project named bigquery-course-257021. Before that you need to properly configure Cloud Shell to set this project as the default for the bq command line tool. Which command should you use ?",
        "choices": ["gcloud config set project bigquery-course-257021", "gcloud set project bigquery-course-257021", "gcloud config project bigquery-course-257021", "bq config set project bigquery-course-257021"],
         "answer": "gcloud config set project bigquery-course-257021",
        "explanation": "glcoud config set sets the specified property in your active configuration only. A property governs the behavior of a specific aspect of Google Cloud CLI such as the service account to use or the verbosity level of logs \n To set the project property you can run: \n glcoud config set project myProject"
    },

    {
        "question": "Which storage service should you use for semi-structured application key-value data ?",
        "choices": ["Cloud Storage", "Cloud SQL", "Cloud Spanner", "BigQuery", "Cloud Datastore", "Cloud Bigtable"],
         "answer": "Cloud Datastore",
        "explanation": "Cloud Datastore is a NoSQL document database built for automatic scaling, high performance, and ease of application development"
    },

    {
        "question": "Select the true statements about the difference between a pod and a container.",
        "choices": ["A pod contains one or more containers", "There is no difference between pods and containers", "A pod cannot contain any container", "A container contains one or more pods"],
         "answer": "A pod contains one or more containers",
        "explanation": "Pods are the smallest, most basic delpoyable objects in Kubernetes. A Pod represents a single instance of a running process in your cluster. Pods contain on or more containers such as Docker containers. When a Pod runs mulitple containers, the containers are managed as a single entity and share the Pod's resources. Generally, running multiple containers in a single Pod is an advanced use case"
    },
    {
        "question": "There are three projects in your organization for development, testing and production. Your manager wants to monitor resource utilaztion (RAM, disk, network, CPU) for all applications in these three projects. What should you do?",
        "choices": ["In Cloud Monitoring, share charts from development, testing and production projects", "You cannot combine metrics from different projects", "You should create a Cloud Monitoring workspace in the production project and add development and testing projects to it", "You should use the default Cloud Monitoring dashboards in all the projects"],
         "answer": "You should create a Cloud Monitoring workspace in the production project and add development and testing projects to it",
        "explanation": "Cloud Monitoring collects metrics, events, and metadata from Google Cloud, Amazon Web Services (AWS), hosted uptime probes, and application instrumentation. Using the BindPlane service, you can also collect this data from over 150 common application components, on-premises systems, and hybrid cloud systems. Google Cloud operations suite ingests that data and generates insights via dashboards, charts and alerts"
    },

    {
        "question": "You need to manage multiple user accounts with the same access configuration in GCP. With Google's best practices in mind, how should you do that?",
        "choices": ["You should grant the intended roles to each individual user account", "In this case, you should always create a custom role", "You should use Google groups. Put each individual user account into the group, and grant the intended roles to the group instrad of individual user accounts"],
         "answer": "You should use Google groups. Put each individual user account into the group, and grant the intended roles to the group instrad of individual user accounts",
        "explanation": "Google groups can help you manage users at scale. Each member of a Google group inherits the Identity and Access Management (IAM) roles granted to that group. This inheritance means that you can use a group's membership to manage users' roles instead of granting IAM roles to individual users"
    },

    {
        "question": "As a new Cloud Engineer, you need to manage your first GCP project. The project will involve product owners, developers and testers . You need to make sure that only specific members of the development team have access to sensitive information (PII data) To do this, you want to assign the appropriate IAM roles. What should you do",
        "choices": ["You should create groups. Assign a Cutom role to each group, including those who should have access to senstive data. Then assign users to groups", "You should create groups. Assign an IAM Predefined role to each group as required, including those who should have access to sensitive data. Then assign users to groups.", "You should create groups. Assign a basic role to each group, and then assign users to groups", "You should assign a basic role to each user"],
         "answer": "You should create groups. Assign an IAM Predefined role to each group as required, including those who should have access to sensitive data. Then assign users to groups.",
        "explanation": "Google's best practice is to use groups rather than assign roles to each user. Also, creating and maintaining Custom roles will require more maintenance than using Predefined roles"
    },
    {
        "question": "You work in a company that processes large amounts of IoT data (time-stamped), which can be petabytes in size. You need to write and change data at high speed. Which Google Cloud product should you use?",
        "choices": ["Cloud Bigtable", "BigQuery", "Cloud Datastore", "Cloud Storage"],
         "answer": "Cloud Bigtable",
        "explanation": "Cloud Bigtable is Google's fully managed NoSQL Big Data database service. Cloud Bigtable is a sparsely populated table that can scale to billions of rows and thousands of columns, enabling you you to store terabytes or even petabytes of data. A single value in each row is indexed; this value is known as the row key. Bigtable is ideal for storing very large amounts of single-keyed data with very low latency. It supports high read and write throughput at low latency, and it is an ideal data source for MapReduce operations."
    },
    {
        "question": "A web application is running on App Engine. You created an update for this application and want to deploy this update wihtout impacting users. If this update fails, you want to be able to roll back as quickly a possible. What should you do?",
        "choices": ["You should deploy the update as the same version that is currently running. If the updae fails, redeploy your older version using the same version identifier.", "You should deploy the update as the same version that is currently running because you are sure it won't fail", "You should notify your users of an upcoming maintenance window and ask them not to use your application during that window. Then, deploy the update in tht maintenance window.", "You should deploy the update as a new version, then migrate traffic from the current version to the new version. If it fails, migrate the traffic back to your older version"],
         "answer": "You should deploy the update as a new version, then migrate traffic from the current version to the new version. If it fails, migrate the traffic back to your older version",
        "explanation": "App Engine is a fully managed, serverless platform for developing and hosting web applications at scale. You can choose from several popular languages, libraries and frameworks to develop your apps, and then let App Engine take care of provisioning servers and scaling your app instances based on demand."
    },
    {
        "question": "In BigQuery, you want to run an important query that can return a lot of records. You want to find out how much it will cost to run the query. You are using on-demand pricing. What should you do?",
        "choices": [
            "You should run a SELECT COUNT (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator",
            "You cannot make an estimate with the information provided",
            "You should arrange to switch to flat-rate pricing for this query, then move back to on-demand",
            "You should use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator"
        ],
        "answer": "You should use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator",
        "explanation": "A dry run query in BigQuery allows you to estimate the number of bytes that will be processed without actually running the query. You can then use the Google Cloud Pricing Calculator to convert the bytes estimate into a cost estimate based on on-demand pricing."
    },
    
    {
        "question": "You want to assign GCP accounts for new employees. Is it good practice for new GCP users to start working with GCP using a Gmail account.",
        "choices": ["It isn't possible to say clearly, it depends on the specific case", "No For example, if someone leaves your organization, there is no centralized way to remove thier access to you cloud resources immediately", "Yes, it's a good practice"],
         "answer": "No For example, if someone leaves your organization, there is no centralized way to remove thier access to you cloud resources immediately",
        "explanation": "Using personal Gmail accounts for GCP access is not recommended because it lacks centralized management. Organizations should use Google Workspace accounts instead, as they allow administrators to manage access centrally, enforce security policies, and revoke access immediately when an employee leaves."
    },
    {
        "question": "Before you migrate your on-premises workload to the Google Cloud, there are a few questions you need to answer. For example you need to specify if your application is stateful. What does it mean ?",
        "choices": ["An application is stateful when stores certain data, such as the client or session ID, until that data is no longer necessary", "An application is stateless when doesn't need to store any client, transaction, or session data", "Every application deployed locally is stateful", "Each application deployed in the cloud is stateful"],
         "answer": "An application is stateful when stores certain data, such as the client or session ID, until that data is no longer necessary",
        "explanation": "A stateful application stores certain data, such as the client or session ID, until that data is no longer necessary. For example, in an online shopping app, the shopping cart service might store details of items that are added or removed as the user continues shopping, and persist the final cart state when the user starts the check-out process"
    },
    {
        "question": "Your company stores PII of customers in a multi-regional Cloud Storage bucket. Your compliance department has asked you to record all operations/requests on this bucket. What should you do?",
        "choices": [
            "You should turn on data access audit logging in Cloud Storage to record this information",
            "You should enable the default Cloud Storage service account exclusive access to read all operations and record them",
            "You should use the Identity-Aware Proxy API to record this information",
            "You should use the Data Loss Prevention API to record this information"
        ],
        "answer": "You should turn on data access audit logging in Cloud Storage to record this information",
        "explanation": "Cloud Audit Logs provide Data Access audit logging, which records all read and write operations performed on Cloud Storage buckets. This is the recommended approach for tracking access to sensitive data and ensuring compliance with regulatory requirements."
    },
    
    {
        "question": "In your company, every developer has a dedicated development GCP project linked to a central billing account. You are asked to set alerts whenever any developer spends more than $500 per month. What should you do?",
        "choices": [
            "You should set up a single budget for all development projects. Then set an alert for the budget when expenses exceed $500 multiplied by the number of developers",
            "You should set up a single budget for all development projects. Then, set an alert for the budget when expenses exceed $500",
            "You should set up a budget for each development project. Then set an alert for each budget when expenses exceed $500",
            "Export billing data from all development projects to a single BigQuery dataset. Use a Data Studio dashboard to plot expenses"
        ],
        "answer": "You should set up a budget for each development project. Then set an alert for each budget when expenses exceed $500",
        "explanation": "The best approach is to set up a budget for each development project because each developer has a dedicated project. This ensures that individual spending is monitored effectively, and alerts can be triggered when a specific project exceeds the $500 threshold. Using a single budget for all projects would not allow per-developer tracking."
    },
    
    {
        "question": "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
        "choices": [
            "You should create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file",
            "You should use kubectl app deploy <dockerfilename> command",
            "You should use gcloud app deploy <dockerfilename> command",
            "You should create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file"
        ],
        "answer": "You should create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file",
        "explanation": "In Kubernetes Engine, container images need to be stored in a container registry before they can be deployed. The best practice is to build a Docker image from the Dockerfile, push it to Google Container Registry (or Artifact Registry), and reference it in a Deployment YAML file. Then, use kubectl to apply the deployment."
    },
    
    {
        "question": "You need to create a Kubernetes Engine cluster to deploy multiple pods and use BigQuery to store all container logs for later analysis. What solution should you apply to follow Google's best practices?",
        "choices": [
            "The only solution is to develop a custom add-on that uses the Cloud Logging API and BigQuery API",
            "You should use the Cloud Logging export feature to create a sink to Cloud Storage then create a Cloud Dataflow job that imports log files from Cloud Storage to BigQuery",
            "Enable Cloud Monitoring when creating a Kubernetes Engine cluster",
            "Enable Cloud Logging when creating a Kubernetes Engine cluster"
        ],
        "answer": "Enable Cloud Logging when creating a Kubernetes Engine cluster",
        "explanation": "The best practice is to enable Cloud Logging when creating a Kubernetes Engine cluster. Cloud Logging allows you to capture logs from all pods and nodes in your cluster. To store logs in BigQuery for analysis, you can configure a log sink to export logs from Cloud Logging to BigQuery. This approach follows Google's recommended best practices and ensures efficient log management."
    },
    
    {
        "question": "What is the minimum number of IP addresses that a VM instance needs in GCP?",
        "choices": ["A virtual machine instance doesn't require any IP address", "A virtual machine need two IPs (internal and external)", "A virtual machine needs 3 Ip addresses (two internal and one external)", "A virtual machine instance only needs one IP address (internal IP address)"],
         "answer": "A virtual machine instance only needs one IP address (internal IP address)",
        "explanation": "Many Cloud resources can have internal IP addresses and external IP adresses. Instances use these addresses to communicate wiht other Google Cloud resources and external systems. For example, you can assign an internal and external IP address to Compute Engine virtual machone (VM) instances"
    },
    {
        "question": "A regular batch job transfers customer data from a CRM system to BigQuery dataset and uses several virtual machines. You can tolerate some virtual machines going down. What should you do to reduce the costs of this job ?",
        "choices": ["You should use a fleet of e2-micro instances behind a Managed Instance Group with autoscaling enabled", "You should only use e2-standard-32 instances", "You should use preemptible compute engine instances", "You should only use e2-micro instances"],
         "answer": "You should use preemptible compute engine instances",
        "explanation": "Preemptible VM instances are available at much lower price- a 60-91% discount - compared to the price of standard VMs. However, Compute Engine might stop (preempt) these instances if it needs to reclaim the compute capacity for allocation to other VMs. Preemptible instances use excess Compute Engine capacity, so thier availability varies with usage"
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["", "", "", ""],
         "answer": "",
        "explanation": ""
    },



];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length);
let randomQuestions = getRandomQuestions(20);

function getRandomQuestions(num) {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const question = randomQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
    
    const choicesUl = document.createElement('ul');
    choicesUl.classList.add('choices');
    question.choices.forEach((choice, choiceIndex) => {
        const choiceLi = document.createElement('li');
        choiceLi.innerHTML = `
            <label>
                <input type="radio" name="question${index}" value="${choice}" ${userAnswers[index] === choice ? 'checked' : ''}>
                ${choice}
            </label>
        `;
        choicesUl.appendChild(choiceLi);
    });

    questionDiv.appendChild(choicesUl);
    quizContainer.appendChild(questionDiv);
}

function nextQuestion() {
    if (currentQuestionIndex < randomQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        document.getElementById('submitBtn').innerText = 'Submit Answer';
        document.getElementById('submitBtn').onclick = submitAnswer;
        document.getElementById('result').innerHTML = '';
    } else {
        submitQuiz();
    }
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = selectedAnswer.value;
    }
}

function submitAnswer() {
    saveAnswer();
    const quizContainer = document.getElementById('quiz');
    const selectedAnswer = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    const question = randomQuestions[currentQuestionIndex];
    if (selectedAnswer) {
        const isCorrect = selectedAnswer.value === question.answer;
        // Highlight the selected answer
        const answerLabel = selectedAnswer.parentElement;
        answerLabel.classList.add(isCorrect ? 'correct' : 'incorrect');

        // Highlight the correct answer
        const allChoices = document.querySelectorAll('input[name="question' + currentQuestionIndex + '"]');
        allChoices.forEach(choice => {
            if (choice.value === question.answer) {
                choice.parentElement.classList.add('correct');
            }
        });

        // Add explanation
        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.innerText = question.explanation;
        quizContainer.appendChild(explanationDiv);

        document.getElementById('submitBtn').innerText = 'Next';
        document.getElementById('submitBtn').onclick = nextQuestion;
    } else {
        alert('Please select an answer before submitting.');
    }
}
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswers = [];
    
    // Convert answer to array if it isn't already
    const correctAnswers = Array.isArray(currentQuestion.answer) 
        ? currentQuestion.answer 
        : [currentQuestion.answer];
    
    // Use checkboxes if multiple correct answers exist
    const isMultipleSelect = correctAnswers.length > 1;
    const inputType = isMultipleSelect ? 'checkbox' : 'radio';
    
    // Collect all selected answers
    document.querySelectorAll(`input[type="${inputType}"]:checked`).forEach(input => {
        selectedAnswers.push(input.value);
    });
    
    return selectedAnswers;
}



function submitQuiz() {
    saveAnswer(); // Save the current answer
    let score = 0;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear the previous results

    // Iterate through random questions and evaluate user answers
    randomQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        const questionResult = document.createElement('div');
        questionResult.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <p class="${isCorrect ? 'correct' : 'incorrect'}">
                Your answer: ${userAnswers[index] || 'No answer'}
            </p>
            <p class="explanation">${question.explanation}</p>
        `;
        resultDiv.appendChild(questionResult);

        if (isCorrect) {
            score++; // Increment score for correct answers
        }
    });

    // Display the total score
    const scoreDiv = document.createElement('div');
    scoreDiv.classList.add('result');
    scoreDiv.innerText = `You scored ${score} out of ${randomQuestions.length}.`;
    resultDiv.appendChild(scoreDiv);
}

// Ensure the first question is displayed on page load
window.onload = () => displayQuestion(currentQuestionIndex);

